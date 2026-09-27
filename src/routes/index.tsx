import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  ShieldCheck,
  Network,
  Database,
  ArrowUpRight,
  Mail,
  Workflow,
  Lock,
  Scale,
} from "lucide-react";
import { AuditModal } from "@/components/clavis/AuditModal";
import { GlassKeyCanvas } from "@/components/clavis/GlassKeyCanvas";
import { GridBackdrop } from "@/components/clavis/GridBackdrop";
import {
  InfrastructureModal,
  type InfrastructureDetail,
} from "@/components/clavis/InfrastructureModal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CLAVIS — Orchestration des Flux Financiers" },
      {
        name: "description",
        content:
          "CLAVIS conçoit des infrastructures logicielles autonomes pour sécuriser la trésorerie et orchestrer la croissance des PME et artisans de pointe.",
      },
      { property: "og:title", content: "CLAVIS — Orchestration des Flux Financiers" },
      {
        property: "og:description",
        content:
          "Infrastructures logicielles autonomes pour sécuriser la trésorerie et orchestrer la croissance des PME et artisans de pointe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const infrastructures: InfrastructureDetail[] = [
  {
    icon: ShieldCheck,
    title: "Protocole de Qualification Sécurisée",
    kicker: "Le Filtre Absolu",
    text: "Un standard automatisé qui intercepte vos appels, qualifie l'urgence, et encaisse les frais de déplacement sous séquestre avant le démarrage de vos utilitaires.",
    metrics: [
      { value: "87 %", label: "Appels qualifiés" },
      { value: "< 90 s", label: "Temps de décision" },
      { value: "+24 %", label: "Marge protégée" },
    ],
    steps: [
      "Identification immédiate du besoin, de la zone et du degré d'urgence.",
      "Qualification financière selon vos propres règles d'intervention.",
      "Séquestre des frais avant toute mobilisation de vos équipes.",
    ],
  },
  {
    icon: Network,
    title: "Gouvernance des Flux Sortants",
    kicker: "Monétisation des Refus",
    text: "Une marketplace privée transformant vos chantiers refusés en profit net. Sous-traitez vos surplus à un réseau local vérifié, sous séquestre financier automatisé.",
    metrics: [
      { value: "Monétisation des Surplus", label: "Capacité système", capability: true },
      { value: "Réseau Privé Sur-Mesure", label: "Capacité système", capability: true },
      { value: "7,8 k€", label: "Flux mensuel" },
    ],
    steps: [
      "Détection des opportunités refusées mais commercialement exploitables.",
      "Attribution au partenaire vérifié selon zone, métier et disponibilité.",
      "Répartition automatisée de la valeur une fois la prestation validée.",
    ],
  },
  {
    icon: Database,
    title: "Réactivation d'Actifs Dormants",
    kicker: "Injection de Liquidités",
    text: "L'exploitation algorithmique de vos bases de données inactives pour réactiver votre capital dormant et générer des flux de trésorerie immédiats.",
    metrics: [
      { value: "Audit Data Intégral", label: "Capacité système", capability: true },
      { value: "Objectif de Conversion Cible", label: "Capacité système", capability: true },
      { value: "21 j", label: "Cycle moyen" },
    ],
    steps: [
      "Cartographie et segmentation de vos historiques clients inactifs.",
      "Déclenchement de séquences contextuelles selon le potentiel détecté.",
      "Transmission à vos équipes des seuls signaux commerciaux qualifiés.",
    ],
  },
];

const doctrine = [
  {
    n: "01",
    icon: Workflow,
    title: "Le Système supplante l'Effort",
    text: "Nous ne vendons pas d'heures de travail. Nous installons des architectures logicielles qui tournent 24h/24.",
  },
  {
    n: "02",
    icon: Lock,
    title: "Séquestre & Maîtrise",
    text: "Celui qui contrôle le flux de paiement contrôle le marché.",
  },
  {
    n: "03",
    icon: Scale,
    title: "Alignement des Intérêts",
    text: "Si nos infrastructures ne génèrent aucune liquidité, notre intervention ne vous coûte rien.",
  },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [selectedInfrastructure, setSelectedInfrastructure] =
    useState<InfrastructureDetail | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="glass">
          <nav
            aria-label="Navigation principale"
            className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
          >
            <a href="#hero" className="inline-flex">
              <span className="bg-primary px-3.5 py-2 text-base tracking-[0.35em] text-primary-foreground">
                CLAVIS
              </span>
            </a>
            <ul className="hidden items-center gap-10 text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex">
              {[
                { href: "#infrastructures", label: "Infrastructures" },
                { href: "#doctrine", label: "Notre Doctrine" },
                { href: "#cabinet", label: "Le Cabinet" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => setOpen(true)}
              data-tracking="cta-header-audit"
              className="hidden h-auto rounded-none bg-foreground px-5 py-2.5 text-[0.7rem] font-normal uppercase tracking-[0.18em] text-background transition-opacity hover:bg-foreground hover:opacity-85 md:inline-flex"
            >
              Audit
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="relative flex min-h-screen items-center overflow-hidden bg-ice"
        >
          <GridBackdrop />
          <GlassKeyCanvas />
          <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-32 pb-20 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground"
            >
              Ingénierie B2B — Poitiers
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-balance-tight text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl"
            >
              Orchestration des Flux Financiers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Infrastructures logicielles autonomes pour sécuriser la trésorerie et orchestrer la
              croissance des PME et artisans de pointe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-col items-center gap-8"
            >
              <p className="max-w-xl bg-foreground px-6 py-4 text-[0.65rem] uppercase leading-relaxed tracking-[0.2em] text-background">
                Offre à aversion au risque totale. Rémunération indexée sur les liquidités générées.
              </p>

              <Button
                onClick={() => setOpen(true)}
                data-tracking="cta-hero-audit"
                className="group h-auto rounded-none bg-primary px-8 py-4 text-sm font-normal tracking-[0.12em] text-primary-foreground transition-all hover:bg-clavis-deep hover:shadow-[var(--glow-clavis)]"
              >
                Demander un Audit d'Éligibilité
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden py-40 sm:py-60">
          <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute left-1/2 top-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[130px] sm:size-[42rem]" />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-6">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden border border-white/60 bg-white/40 px-8 py-16 text-center backdrop-blur-xl sm:px-16 sm:py-24"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute left-2 top-2 select-none font-serif text-[7rem] leading-[0.65] text-primary/20 sm:left-6 sm:text-[12rem]"
              >
                {"«"}
              </span>
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-2 right-2 select-none font-serif text-[7rem] leading-[0.65] text-primary/20 sm:right-6 sm:text-[12rem]"
              >
                {"»"}
              </span>
              <h2 className="text-balance-tight relative text-3xl leading-snug text-foreground sm:text-4xl lg:text-5xl">
                L'artisanat de pointe perd 30&nbsp;% de sa marge nette dans la gestion manuelle de
                ses flux.
              </h2>
            </motion.div>
          </div>
        </section>

        <section id="infrastructures" className="relative overflow-hidden bg-ice py-28 sm:py-36">
          <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute left-[8%] top-[28%] size-72 rounded-full bg-primary/45 blur-[100px] sm:size-96" />
            <div className="absolute bottom-[10%] right-[6%] size-80 rounded-full bg-primary/35 blur-[120px] sm:size-[28rem]" />
            <div className="absolute left-[44%] top-[48%] size-56 rounded-full bg-primary/25 blur-[90px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <motion.p
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground"
            >
              Catalogue d'infrastructures
            </motion.p>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {infrastructures.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -10 }}
                >
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setSelectedInfrastructure(item)}
                    aria-label={`Découvrir ${item.title}`}
                    className="liquid-card group h-full min-h-80 w-full cursor-pointer flex-col items-start justify-start rounded-none p-8 text-left whitespace-normal transition-shadow duration-300 hover:bg-background/30 hover:shadow-[var(--glow-clavis)]"
                  >
                    <item.icon className="size-7 text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" strokeWidth={1.25} />
                    <h3 className="mt-8 text-2xl leading-snug text-foreground">{item.title}</h3>
                    <p className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-primary">
                      {item.kicker}
                    </p>
                    <p className="mt-6 text-sm font-normal leading-relaxed text-muted-foreground">{item.text}</p>
                    <span className="mt-auto flex items-center gap-2 pt-8 text-[0.65rem] uppercase tracking-[0.14em] text-foreground/70">
                      Examiner le protocole
                      <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                    </span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="doctrine" className="relative overflow-hidden py-28 sm:py-40">
          <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute left-[2%] top-[14%] size-72 rounded-full bg-primary/30 blur-[110px]" />
            <div className="absolute bottom-[8%] right-[4%] size-80 rounded-full bg-primary/25 blur-[120px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <div className="liquid-card px-6 py-12 sm:px-12 sm:py-16">
              <motion.h2
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-4xl text-foreground sm:text-5xl"
              >
                Notre Doctrine
              </motion.h2>

              <motion.ol
                className="mt-12 border-t border-border/80"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.16 } },
                }}
              >
                {doctrine.map((d, i) => (
                  <motion.li
                    key={d.n}
                    variants={{
                      hidden: { opacity: 0, x: -56 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.72, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="group -mx-4 grid gap-4 border-b border-border/80 px-4 py-9 transition-colors duration-500 hover:bg-background/75 md:grid-cols-[5rem_1fr_1.2fr] md:items-baseline md:gap-10"
                  >
                    <span className="text-sm tracking-[0.2em] text-primary">{d.n}</span>
                    <div className="flex items-start gap-4">
                      <d.icon
                        className="mt-0.5 size-5 shrink-0 text-primary transition-transform duration-500 group-hover:scale-110"
                        strokeWidth={1.25}
                      />
                      <h3 className="text-xl text-foreground sm:text-2xl">{d.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          </div>
        </section>

        <section id="cabinet" className="bg-ice py-24">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
            <h2 className="text-balance-tight text-3xl text-foreground sm:text-4xl">
              Le Cabinet n'engage qu'un nombre restreint de dossiers.
            </h2>
            <Button
              onClick={() => setOpen(true)}
              data-tracking="cta-cabinet-audit"
              className="h-auto rounded-none bg-primary px-8 py-4 text-sm font-normal tracking-[0.12em] text-primary-foreground transition-all hover:bg-clavis-deep hover:shadow-[var(--glow-clavis)]"
            >
              Demander un Audit d'Éligibilité
              <ArrowUpRight className="size-4" strokeWidth={1.5} />
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            CLAVIS — Ingénierie B2B. Implantée à Poitiers, opérant nationalement.
          </p>
          <a
            href="mailto:direction@clavis.fr"
            data-tracking="footer-email"
            className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-4" strokeWidth={1.5} />
            direction@clavis.fr
          </a>
        </div>
      </footer>

      <InfrastructureModal
        item={selectedInfrastructure}
        onClose={() => setSelectedInfrastructure(null)}
        onAudit={() => {
          setSelectedInfrastructure(null);
          setOpen(true);
        }}
      />
      <AuditModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
