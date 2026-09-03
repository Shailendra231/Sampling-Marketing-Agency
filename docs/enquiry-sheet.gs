/**
 * Enquiry sink for productsamplingagency.in.
 *
 * Extensions -> Apps Script on the target sheet, paste this, set TOKEN, then
 * Deploy -> New deployment -> Web app, "Execute as: Me", "Who has access:
 * Anyone". Copy the /exec URL into SHEETS_WEBHOOK_URL.
 *
 * "Anyone" is required because the Worker calls this unauthenticated; TOKEN is
 * what actually guards it, so keep it long and out of the client bundle.
 *
 * This also sends the confirmation email. Doing it here rather than from the
 * Worker means no mail provider, no API key and no extra secret: Apps Script
 * sends as the Google account that owns the script. The first run will ask you
 * to authorise the Gmail scope. Consumer Gmail allows 100 mails a day,
 * Workspace 1500 — both far above what a contact form produces.
 */

var TOKEN = 'change-me';

/**
 * Which spreadsheet to write to.
 *
 * Leave blank ONLY if this script was created from Extensions -> Apps Script on
 * the sheet itself — then it is bound to that sheet and finds it automatically.
 * A standalone script has no active spreadsheet and must be told the id, which
 * is the long segment in the sheet's own URL:
 *   docs.google.com/spreadsheets/d/THIS_PART_HERE/edit
 */
var SHEET_ID = '';
var SHEET_NAME = 'Enquiries';
var NOTIFY = '';   // optional: your own address, to be told about each new lead
var REPLY_TO = 'productsamplingagency@gmail.com';  // where replies to the confirmation go
var HEADERS = [
  'Received', 'Enquiry', 'Name',
  'Email', 'Phone', 'Company', 'Message', 'Newsletter', 'Confirmation sent',
];

function doPost(e) {
  // Two submissions landing together would otherwise race for the same row.
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (err) {
    return json({ ok: false, error: 'busy' });
  }

  try {
    var body = JSON.parse(e.postData.contents);
    if (body.token !== TOKEN) return json({ ok: false, error: 'unauthorized' });

    // Send first so the sheet can record whether it worked, but never let a
    // mail failure lose the lead — the row is written either way.
    var confirmed = sendConfirmation(body);

    var book = SHEET_ID
      ? SpreadsheetApp.openById(SHEET_ID)
      : SpreadsheetApp.getActiveSpreadsheet();
    if (!book) {
      return json({ ok: false, error: 'no spreadsheet: set SHEET_ID at the top of the script' });
    }
    var sheet = book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      body.receivedAt ? new Date(body.receivedAt) : new Date(),
      body.enquiry || '',
      body.name || '',
      body.email || '',
      body.phone || '',
      body.company || '',
      body.message || '',
      body.newsletter ? 'Yes' : 'No',
      confirmed,
    ]);

    if (NOTIFY) notifyUs(body);

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/** Confirmation to the person who filled the form. Returns a status string for
 *  the sheet rather than throwing, so a mail problem never costs us the lead. */
function sendConfirmation(body) {
  if (!body.email) return 'no address';
  try {
    var name = (body.name || '').toString().trim();
    var first = name ? name.split(/\s+/)[0] : 'there';

    MailApp.sendEmail({
      to: body.email,
      subject: 'Your enquiry is with us',
      name: 'Product Sampling Agency',
      replyTo: REPLY_TO,
      htmlBody: htmlEmail(first, body),
    });
    return 'sent';
  } catch (err) {
    return 'failed: ' + err;
  }
}

/** Table-based layout with inline styles. Outlook ignores <style> blocks and
 *  most clients strip flexbox, so this is the format that survives them all. */
function htmlEmail(first, body) {
  var rows = [
    ['Enquiry', body.enquiry],
    ['Company', body.company],
    ['Phone', body.phone],
    ['Message', body.message],
  ].map(function (r) {
    return '<tr>' +
      '<td style="padding:6px 16px 6px 0;color:#6b7280;font-size:14px;white-space:nowrap;' +
      'vertical-align:top;">' + esc(r[0]) + '</td>' +
      '<td style="padding:6px 0;color:#111827;font-size:14px;vertical-align:top;">' +
      esc(r[1] || '-') + '</td></tr>';
  }).join('');

  return '' +
  '<div style="background:#f4f4f6;padding:28px 12px;font-family:-apple-system,' +
  'BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;">' +
    '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" ' +
    'style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;">' +
      '<tr><td style="height:4px;background:#29b473;border-radius:12px 12px 0 0;"></td></tr>' +
      '<tr><td style="padding:32px 32px 8px;">' +
        '<p style="margin:0 0 18px;font-size:16px;color:#111827;">Hi ' + esc(first) + ',</p>' +
        '<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#374151;">' +
          'Thanks for getting in touch. Your enquiry has reached us and one of the team ' +
          'will go through it properly.' +
        '</p>' +
        '<p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#374151;">' +
          'You should hear back within one working day. If we need to check dates or ' +
          'availability at a particular site first, it can take a day longer, and we will ' +
          'tell you if that happens.' +
        '</p>' +
      '</td></tr>' +
      '<tr><td style="padding:0 32px;">' +
        '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" ' +
        'style="background:#f9fafb;border-radius:8px;padding:16px;">' +
          '<tr><td style="padding:14px 18px;">' +
            '<p style="margin:0 0 10px;font-size:12px;letter-spacing:0.08em;' +
            'text-transform:uppercase;color:#6b7280;font-weight:600;">What you sent us</p>' +
            '<table role="presentation" cellpadding="0" cellspacing="0" border="0">' +
            rows + '</table>' +
          '</td></tr>' +
        '</table>' +
      '</td></tr>' +
      '<tr><td style="padding:24px 32px 32px;">' +
        '<p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#374151;">' +
          'If you need to add anything, just reply to this email.' +
        '</p>' +
        '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" ' +
        'style="border-top:1px solid #e5e7eb;">' +
          '<tr><td style="padding-top:18px;font-size:13px;line-height:1.6;color:#6b7280;">' +
            '<strong style="color:#111827;">Product Sampling Agency</strong><br>' +
            'Star Tower, Sector 30, Gurugram, Haryana 122001<br>' +
            '<a href="mailto:' + esc(REPLY_TO) + '" style="color:#6b7280;">' + esc(REPLY_TO) +
            '</a> &nbsp;·&nbsp; ' +
            '<a href="https://productsamplingagency.in" style="color:#29b473;' +
            'text-decoration:none;">productsamplingagency.in</a>' +
          '</td></tr>' +
        '</table>' +
      '</td></tr>' +
    '</table>' +
  '</div>';
}

/** Anything a visitor typed goes through here before it lands in the HTML. */
function esc(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Optional heads-up to our own inbox so a lead is not missed. */
function notifyUs(body) {
  try {
    MailApp.sendEmail({
      to: NOTIFY,
      subject: 'New enquiry: ' + (body.name || 'unnamed'),
      replyTo: body.email || undefined,
      body:
        (body.enquiry || '-') + '\n\n' +
        (body.name || '-') + '\n' +
        (body.company || '-') + '\n' +
        (body.email || '-') + ' / ' + (body.phone || '-') + '\n\n' +
        (body.message || '-') + '\n',
    });
  } catch (err) {
    // Our own notification is the least important thing here; drop it quietly.
  }
}

function json(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
