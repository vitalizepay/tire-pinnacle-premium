import { createFileRoute } from "@tanstack/react-router";
import { Check, Truck, ClipboardCheck, LineChart, ShieldCheck } from "lucide-react";
import fleetImg from "@/assets/fleet.jpg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Fleet Tyre Solutions — UAE | Qasr Al Bustan" },
      { name: "description", content: "Comprehensive tyre management for commercial fleets in UAE — bulk supply, scheduled maintenance, 24/7 emergency response and detailed reporting." },
      { property: "og:title", content: "Fleet Solutions — Qasr Al Bustan Tyres UAE" },
      { property: "og:description", content: "End-to-end tyre management for transport and logistics fleets." },
      { property: "og:url", content: "/fleet" },
    ],
    links: [{ rel: "canonical", href: "/fleet" }],
  }),
  component: FleetPage,
});

function FleetPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <img src={fleetImg} alt="Commercial truck fleet" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" width={1600} height={900} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 to-transparent" />
        <div className="container-x py-24 lg:py-32">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Fleet Solutions" }]} />
          <h1 className="mt-6 max-w-3xl text-balance text-5xl font-black lg:text-7xl">Enterprise fleet tyre management.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            One trusted partner for your entire fleet — from sedans to semis. Bulk supply, predictable scheduling, transparent reporting.
          </p>
          <a href={`tel:${site.phone}`} className="mt-10 inline-flex rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-brand transition hover:scale-105">
            Speak to Fleet Team
          </a>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Truck, t: "Bulk Tyre Supply", d: "Negotiated pricing across all major brands and sizes." },
            { i: ClipboardCheck, t: "Scheduled Maintenance", d: "Rotation, alignment and balancing on your timeline." },
            { i: ShieldCheck, t: "24/7 Emergency", d: "Mobile units respond anywhere in the UAE." },
            { i: LineChart, t: "Detailed Reporting", d: "Monthly cost, wear and utilisation reports." },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-border bg-white p-7 transition hover:-translate-y-1 hover:shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white">
                  <f.i className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Why Fleets Choose Us</p>
            <h2 className="mt-3 text-4xl font-black text-ink lg:text-5xl">Less downtime. Lower cost-per-kilometre.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We work with transport operators, ride-share fleets, construction companies and government agencies. Every partnership is built around a single principle: keep wheels turning.
            </p>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Dedicated account manager",
              "Pre-negotiated bulk pricing",
              "Priority workshop slots",
              "Mobile fitment at your depot",
              "Quarterly business reviews",
              "Custom credit terms",
              "Brand-agnostic recommendations",
              "Real-time service tracking",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4 text-sm text-foreground/80">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-[2rem] bg-gradient-to-br from-brand to-[oklch(0.45_0.22_27)] p-10 text-white sm:p-16">
          <div className="grid items-center gap-8 lg:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="text-balance text-3xl font-black sm:text-5xl">Let's build a programme that fits your fleet.</h2>
              <p className="mt-4 max-w-xl text-white/85">Tell us your fleet size and routes — we'll send you a tailored proposal within 24 hours.</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={`tel:${site.phone}`} className="rounded-full bg-white px-6 py-4 text-center text-sm font-bold text-ink">Call Fleet Desk</a>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-ink px-6 py-4 text-center text-sm font-bold text-white">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
