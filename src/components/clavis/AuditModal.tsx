import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type Props = {
  open: boolean;
  onClose: () => void;
};

const fields = [
  { id: "societe", label: "Raison Sociale / SIRET", type: "text", autoComplete: "organization" },
  { id: "decisionnaire", label: "Nom du décisionnaire", type: "text", autoComplete: "name" },
  { id: "ligne", label: "Ligne directe", type: "tel", autoComplete: "tel" },
];

export function AuditModal({ open, onClose }: Props) {
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-md"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="audit-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-background px-8 py-10 shadow-2xl sm:px-12 sm:py-14"
          >
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute right-5 top-5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>

            <h2 id="audit-title" className="text-3xl text-foreground sm:text-4xl">
              Audit d'Éligibilité
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Nos infrastructures exigent un volume de flux spécifique. Renseignez vos informations.
            </p>

            <form
              className="mt-10 space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitting(true);
                setTimeout(() => {
                  setSubmitting(false);
                  onClose();
                  toast.success("Demande transmise", {
                    description: "La direction revient vers vous sous 48 heures ouvrées.",
                  });
                }, 700);
              }}
            >
              {fields.map((f) => (
                <div key={f.id} className="relative">
                  <label
                    htmlFor={f.id}
                    className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    required
                    className="mt-2 w-full border-0 border-b border-border bg-transparent pb-2 text-base text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
              ))}

              <button
                type="submit"
                disabled={submitting}
                data-tracking="cta-modal-submit"
                className="w-full bg-primary px-6 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-clavis-deep hover:shadow-[var(--glow-clavis)] disabled:opacity-60"
              >
                {submitting ? "Transmission…" : "Soumettre le dossier"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
