import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { ShieldCheck, Network, Database, ArrowUpRight, Mail } from "lucide-react";
import { AuditModal } from "@/components/clavis/AuditModal";
import { GridBackdrop } from "@/components/clavis/GridBackdrop";

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

const infrastructures = [
  {
    icon: ShieldCheck,
    title: "Protocole de Qualification Sécurisée",
    kicker: "Le Filtre Absolu",
    text: "Un standard automatisé qui intercepte vos appels, qualifie l'urgence, et encaisse les frais de déplacement sous séquestre avant le démarrage de vos utilitaires.",
  },
  {
    icon: Network,
    title: "Gouvernance des Flux Sortants",
    kicker: "Monétisation des Refus",
    text: "Une marketplace privée transformant vos chantiers refusés en profit net. Sous-traitez vos surplus à un réseau local vérifié, sous séquestre financier automatisé.",
  },
  {
    icon: Database,
    title: "Réactivation d'Actifs Dormants",
    kicker: "Injection de Liquidités",
    text: "L'exploitation algorithmique de vos bases de données inactives pour réactiver votre capital dormant et générer des flux de trésorerie immédiats.",
  },
];

const doctrine = [
  {
    n: "01",
    title: "Le Système supplante l'Effort",
    text: "Nous ne vendons pas d'heures de travail. Nous installons des architectures logicielles qui tournent 24h/24.",
  },
  {
    n: "02",
    title: "Séquestre & Maîtrise",
    text: "Celui qui contrôle le flux de paiement contrôle le marché.",
  },
  {
    n: "03",
    title: "Alignement des Intérêts",
    text: "Si nos infrastructures ne génèrent aucune liquidité, notre intervention ne vous coûte rien.",
  },
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="glass">
          <nav
            aria-label="Navigation principale"
            className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
          >
            <a href="#hero" className="inline-flex">
              <span className="bg-primary px-3 py-1.5 text-sm tracking-[0.35em] text-primary-foreground">
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
            <button
              onClick={() => setOpen(true)}
              data-tracking="cta-header-audit"
              className="hidden bg-foreground px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.18em] text-background transition-opacity hover:opacity-85 md:inline-flex"
            >
              Audit
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="relative flex min-h-screen items-center overflow-hidden bg-ice"
        >
          <GridBackdrop />
          <div className="relative mx-auto w-full max-w-5xl px-6 pt-32 pb-20 text-center">
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

              <button
                onClick={() => setOpen(true)}
                data-tracking="cta-hero-audit"
                className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm tracking-[0.12em] text-primary-foreground transition-all hover:bg-clavis-deep hover:shadow-[var(--glow-clavis)]"
              >
                Demander un Audit d'Éligibilité
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </button>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-32 sm:py-44">
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance-tight text-center text-3xl leading-snug text-foreground sm:text-4xl lg:text-5xl"
          >
            «&nbsp;L'artisanat de pointe perd 30&nbsp;% de sa marge nette dans la gestion manuelle
            de ses flux.&nbsp;»
          </motion.h2>
        </section>

        <section id="infrastructures" className="bg-ice py-28 sm:py-36">
          <div className="mx-auto max-w-6xl px-6">
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
                <motion.article
                  key={item.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -10 }}
                  className="glass flex flex-col p-8 transition-shadow duration-300 hover:shadow-[var(--glow-clavis)]"
                >
                  <item.icon className="size-7 text-primary" strokeWidth={1.25} />
                  <h3 className="mt-8 text-2xl leading-snug text-foreground">{item.title}</h3>
                  <p className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-primary">
                    {item.kicker}
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="doctrine" className="mx-auto max-w-5xl px-6 py-28 sm:py-40">
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

          <ol className="mt-16 divide-y divide-border border-t border-border">
            {doctrine.map((d, i) => (
              <motion.li
                key={d.n}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="grid gap-4 py-10 md:grid-cols-[6rem_1fr_1.2fr] md:items-baseline md:gap-10"
              >
                <span className="text-sm tracking-[0.2em] text-primary">{d.n}</span>
                <h3 className="text-xl text-foreground sm:text-2xl">{d.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </motion.li>
            ))}
          </ol>
        </section>

        <section id="cabinet" className="bg-ice py-24">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
            <h2 className="text-balance-tight text-3xl text-foreground sm:text-4xl">
              Le Cabinet n'engage qu'un nombre restreint de dossiers.
            </h2>
            <button
              onClick={() => setOpen(true)}
              data-tracking="cta-cabinet-audit"
              className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm tracking-[0.12em] text-primary-foreground transition-all hover:bg-clavis-deep hover:shadow-[var(--glow-clavis)]"
            >
              Demander un Audit d'Éligibilité
              <ArrowUpRight className="size-4" strokeWidth={1.5} />
            </button>
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

      <AuditModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
