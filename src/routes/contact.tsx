import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Clock, Navigation } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Qasr Al Bustan Tyres Sharjah UAE" },
      { name: "description", content: "Visit, call or WhatsApp Qasr Al Bustan Tyres in Sharjah. Open 7 days a week. Premium tyres, expert service, fast response." },
      { property: "og:title", content: "Contact — Qasr Al Bustan Tyres" },
      { property: "og:description", content: "Get in touch with our team in Sharjah, UAE." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    { i: Phone, t: "Call Us", v: site.phoneDisplay, href: `tel:${site.phone}` },
    { i: MessageCircle, t: "WhatsApp", v: site.phoneDisplay, href: site.whatsapp },
    { i: Mail, t: "Email", v: site.email, href: `mailto:${site.email}` },
    { i: MapPin, t: "Visit", v: site.address, href: site.mapOpen },
  ];
  return (
    <>
      <section className="container-x pt-12 pb-12">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
        <div className="mt-6 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Get in touch</p>
          <h1 className="mt-3 text-balance text-5xl font-black text-ink lg:text-6xl">We're here. Whenever you need us.</h1>
          <p className="mt-5 text-lg text-muted-foreground">Drop by the workshop, call the team or message us on WhatsApp. We respond fast.</p>
        </div>
      </section>

      <section className="container-x pb-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.06}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-white p-7 transition hover:-translate-y-1 hover:border-brand hover:shadow-soft"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white transition group-hover:bg-brand">
                  <c.i className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{c.t}</h3>
                  <p className="mt-1 text-base font-bold text-ink">{c.v}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="rounded-3xl border border-border bg-white p-8">
            <h2 className="text-2xl font-black text-ink">Workshop Hours</h2>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="font-semibold text-ink">Saturday – Thursday</p>
                  <p className="text-muted-foreground">8:00 AM – 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="font-semibold text-ink">Friday</p>
                  <p className="text-muted-foreground">2:00 PM – 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <p className="font-semibold text-ink">Location</p>
                  <p className="text-muted-foreground">{site.address}</p>
                </div>
              </div>
            </div>
            <a
              href={site.mapDirections}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition hover:scale-[1.02]"
            >
              <Navigation className="h-4 w-4" /> Get Directions
            </a>
          </div>

          <a
            href={site.mapOpen}
            target="_blank"
            rel="noreferrer"
            aria-label="Open in Google Maps"
            className="group relative block h-[460px] overflow-hidden rounded-3xl border border-border bg-white shadow-soft"
          >
            <iframe
              title="Qasr Al Bustan Tyres location"
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
              style={{ border: 0, pointerEvents: "none" }}
            />
            <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-5">
              <span className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-soft transition group-hover:bg-brand">
                <Navigation className="h-4 w-4" /> Open in Maps
              </span>
            </div>
          </a>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-[2rem] bg-ink p-10 text-center text-white sm:p-16">
          <h2 className="text-balance text-3xl font-black sm:text-5xl">Ready when you are.</h2>
          <p className="mt-4 text-white/70">Our service desk picks up within three rings.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${site.phone}`} className="rounded-full bg-brand px-6 py-4 text-sm font-bold text-white">Call {site.phoneDisplay}</a>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-white px-6 py-4 text-sm font-bold text-ink">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
