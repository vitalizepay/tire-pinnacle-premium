import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Truck, Gauge, Clock4, Award, Star, MapPin, Navigation } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import heroVideo from "@/assets/hero-tyre-cinematic.mp4.asset.json";
import truckHighway from "@/assets/truck-highway.png.asset.json";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qasr Al Bustan Truck Tyres — Premium Commercial Tyres, Sharjah UAE" },
      { name: "description", content: "Specialists in heavy-duty truck tyres across the UAE. Long-haul, steer, off-road and urban delivery tyres with expert fitting and 24/7 fleet support." },
      { property: "og:title", content: "Qasr Al Bustan Truck Tyres — UAE" },
      { property: "og:description", content: "Premium truck tyres and fleet service across Sharjah and the UAE." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

/* ───────────────────────── CINEMATIC HERO ───────────────────────── */

function CinematicHero() {
  return (
    <section
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#0c0a08]"
      style={{ fontFamily: "'General Sans', Inter, system-ui, sans-serif" }}
    >
      {/* Cinematic road video background */}
      <div className="absolute inset-0">
        <video
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster=""
          className="h-full w-full object-cover"
          aria-label="Cinematic driver's-eye view of a highway at speed"
        />
        {/* Cinematic grade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />
        {/* Left readability veil */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        {/* Vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)" }}
        />
      </div>

      {/* CONTENT */}
      <div className="container-x relative z-30 flex h-full flex-col justify-center pt-28 md:pt-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#f7c98a]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/90">
              Commercial Truck Tyre Specialists
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-balance text-white"
            style={{
              fontFamily: "'Clash Display', 'General Sans', Inter, sans-serif",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.02,
              fontSize: "clamp(2.25rem, 5.6vw, 4.75rem)",
              textShadow: "0 6px 30px rgba(0,0,0,0.55)",
            }}
          >
            Heavy-duty Truck Tyres
            <span className="mt-2 block italic text-[#f7c98a]" style={{ fontWeight: 500 }}>
              Built for Every Journey.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-white/90 md:text-base"
          >
            Premium commercial truck tyre solutions engineered for maximum mileage,
            durability, safety, and fleet performance across the UAE.
          </motion.p>
        </div>
      </div>

      {/* Bottom edge fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}






function Index() {
  return (
    <>
      <CinematicHero />


      {/* VALUE PROPS */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.12]"
          style={{ backgroundImage: `url(${truckHighway.url})` }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
        <div className="container-x relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { i: ShieldCheck, t: "Genuine Premium", d: "Authorised supply of leading global truck tyre brands." },
            { i: Gauge, t: "Precision Service", d: "Laser alignment and dynamic balancing by certified technicians." },
            { i: Truck, t: "Fleet Specialists", d: "Custom programmes for transport and logistics fleets." },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 0.08}>
              <div className="group h-full rounded-3xl border border-border bg-white/80 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-soft sm:p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white transition group-hover:bg-brand">
                  <f.i className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>




      {/* TESTIMONIALS */}
      <section className="bg-ink py-20 text-white md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Trusted by fleets across the UAE</p>
            <h2 className="mt-3 text-balance text-3xl font-black sm:text-4xl lg:text-5xl">What our customers say</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "Ahmed Al Mansoori", r: "Fleet Manager", q: "Qasr Al Bustan handles 80 trucks for us. Reliable scheduling, fair pricing, zero downtime." },
              { n: "Rajesh Kumar", r: "Logistics Director", q: "LongHaul LH9 has cut our cost-per-km by 18%. Best truck tyre decision we made this year." },
              { n: "Khalid Al Suwaidi", r: "Transport Owner", q: "Their 24/7 roadside team got us back on the road in under an hour outside Al Ain. Lifesavers." },
            ].map((t, i) => (
              <Reveal key={t.n} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                  <div className="flex gap-1 text-brand">
                    {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-white/85">"{t.q}"</p>
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <div className="text-sm font-bold">{t.n}</div>
                    <div className="text-xs text-white/50">{t.r}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FIND US — map + directions */}
      <section className="container-x py-20 md:py-24">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-border bg-white p-6 shadow-soft md:p-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Visit Our Workshop</p>
            <h2 className="mt-3 text-balance text-3xl font-black text-ink sm:text-4xl">Find us in Sharjah.</h2>
            <p className="mt-4 text-muted-foreground">
              Walk in for an inspection, fitting or fleet consultation. We're open 7 days a week.
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <div className="font-semibold text-ink">Address</div>
                  <div className="text-muted-foreground">{site.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock4 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <div className="font-semibold text-ink">Hours</div>
                  <div className="text-muted-foreground">{site.hours}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.mapDirections}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-brand transition-transform hover:scale-105"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>

          <a
            href={site.mapOpen}
            target="_blank"
            rel="noreferrer"
            className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-border md:aspect-auto md:min-h-[320px]"
            aria-label="Open in Google Maps for directions"
          >
            <iframe
              src={site.mapEmbed}
              title="Qasr Al Bustan Truck Tyres — Sharjah location"
              className="pointer-events-none absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/10" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-xl bg-white/95 px-4 py-3 text-sm font-semibold text-ink shadow-soft backdrop-blur">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-brand" /> Click map for directions</span>
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-20 md:pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand to-[oklch(0.45_0.22_27)] p-8 text-white sm:p-12 md:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[2fr_1fr]">
            <div>
              <Award className="h-10 w-10" />
              <h2 className="mt-5 text-balance text-2xl font-black sm:text-3xl lg:text-4xl">
                Premium truck tyres, expert fitment — book your visit today.
              </h2>
              <p className="mt-4 max-w-xl text-white/85">
                Our fleet team is ready to advise. Walk in, call us, or message us on WhatsApp.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={`tel:${site.phone}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold text-ink transition hover:scale-105">
                Call {site.phoneDisplay}
              </a>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-bold text-white transition hover:scale-105">
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
