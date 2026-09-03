import { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EnquiryForm } from "./EnquiryForm";

/** "Talk to us" opens the enquiry form in place rather than sending people to
 *  /contact. Same form, same endpoint, same sheet — one fewer navigation
 *  between reading the pitch and acting on it. */
export function EnquiryDialog({ label = "Talk to us" }: { label?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-cta px-7 text-sm font-semibold text-dark shadow-glow-green transition-all duration-200 hover:brightness-110 active:scale-[0.98]">
        {label}
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2.4}
        />
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto border-violet-tint/25 bg-raised p-0 text-foreground shadow-2xl sm:max-w-2xl">
        {/* A hairline of brand gradient across the top edge, so the panel reads
            as a considered surface rather than a plain box. */}
        <div aria-hidden="true" className="h-[3px] w-full bg-gradient-cta" />

        <div className="px-7 pb-8 pt-6 md:px-9 md:pb-9">
          <DialogHeader className="space-y-0">
            <p className="text-eyebrow font-semibold uppercase tracking-[0.14em] text-green-300">
              Start a conversation
            </p>
            <DialogTitle className="font-display pt-2 text-left text-3xl font-bold tracking-tight">
              Discuss a project
            </DialogTitle>
            <DialogDescription className="max-w-lg pt-3 text-left text-body">
              Tell us what the product is, who needs to try it, and roughly when. We come back with
              sites and a count.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-7 border-t border-border-strong/60 pt-7">
            {/* Scoped ids: the contact page renders this same form, and both can
                be in the document at once once the dialog mounts. */}
            <EnquiryForm idPrefix="dialog" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
