import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check, X, type LucideIcon } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export type InfrastructureMetric = {
  value: string;
  label: string;
  capability?: boolean;
};

export type InfrastructureDetail = {
  icon: LucideIcon;
  title: string;
  kicker: string;
  text: string;
  metrics: InfrastructureMetric[];
  steps: string[];
};

type Props = {
  item: InfrastructureDetail | null;
  onClose: () => void;
  onAudit: () => void;
};

export function InfrastructureModal({ item, onClose, onAudit }: Props) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!item) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-90 flex items-center justify-center p-4 sm:p-8">
          <motion.div
            className="absolute inset-0 bg-foreground/30 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="infrastructure-title"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.99 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-modal relative max-h-[90vh] w-full max-w-5xl overflow-y-auto px-6 py-8 sm:px-10 sm:py-10 lg:px-14"
          >
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Fermer"
              className="absolute right-4 top-4 rounded-none text-muted-foreground hover:text-foreground sm:right-6 sm:top-6"
            >
              <X strokeWidth={1.5} />
            </Button>

            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div>
                <motion.div
                  animate={reduceMotion ? { y: 0 } : { y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex size-14 items-center justify-center border border-primary/25 bg-primary/10 text-primary"
                >
                  <item.icon className="size-7" strokeWidth={1.25} />
                </motion.div>
                <p className="mt-8 text-[0.7rem] uppercase tracking-[0.18em] text-primary">
                  {item.kicker}
                </p>
                <h2 id="infrastructure-title" className="mt-3 text-3xl leading-tight text-foreground sm:text-5xl">
                  {item.title}
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.text}
                </p>

                <div className="mt-10 grid border-y border-border/80 sm:grid-cols-3">
                  {item.metrics.map((metric) => (
                    <div
                      key={metric.value}
                      className="border-b border-border/80 px-3 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:px-5"
                    >
                      <p
                        className={
                          metric.capability
                            ? "font-serif text-base leading-snug text-foreground sm:text-xl"
                            : "font-serif text-xl text-foreground sm:text-3xl"
                        }
                      >
                        {metric.value}
                      </p>
                      <p className="mt-2 text-[0.6rem] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground sm:text-[0.65rem]">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between border-l border-border/80 pl-0 lg:pl-10">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                    Séquence opératoire
                  </p>
                  <ol className="mt-7 space-y-6">
                    {item.steps.map((step, index) => (
                      <motion.li
                        key={step}
                        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.14 + index * 0.1 }}
                        className="flex items-start gap-4 text-sm leading-relaxed text-foreground"
                      >
                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center border border-primary/30 text-primary">
                          <Check className="size-3" strokeWidth={1.5} />
                        </span>
                        {step}
                      </motion.li>
                    ))}
                  </ol>
                </div>

                <Button
                  type="button"
                  onClick={onAudit}
                  className="mt-10 h-auto w-full rounded-none bg-primary px-6 py-4 font-normal tracking-[0.08em] text-primary-foreground hover:bg-clavis-deep hover:shadow-[var(--glow-clavis)]"
                >
                  Solliciter cette infrastructure
                  <ArrowUpRight strokeWidth={1.5} />
                </Button>
              </div>
            </div>
          </motion.section>
        </div>
      )}
    </AnimatePresence>
  );
}