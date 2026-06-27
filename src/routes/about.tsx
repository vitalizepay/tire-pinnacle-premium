import { createFileRoute } from "@tanstack/react-router";
import { Award, Target, Users, Globe2 } from "lucide-react";
import fleetImg from "@/assets/fleet.jpg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Qasr Al Bustan Tyres" },
      { name: "description", content: "Learn how Qasr Al Bustan Tyres became one of the UAE's most trusted names in premium tyres and fleet services." },
      { property: "og:title", content: "About Qasr Al Bustan Tyres" },
      { property: "og:description", content: "Our story, our mission, our promise to drivers across the UAE." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-x pt-12 pb-6">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />
        <h1 className="mt-6 text-balance text-5xl font-black text-ink lg:text-6xl">Built on trust. Driven by quality.</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Qasr Al Bustan Tyres — قصر البستان للإطارات — was founded on a simple promise: deliver premium tyres and honest service to every driver and fleet across the UAE.
        </p>
      </section>

      <section className="container-x py-16">
        <Reveal>
          <img src={fleetImg} alt="Fleet of trucks at sunset" loading="lazy" width={1600} height={900} className="aspect-[16/9] w-full rounded-3xl object-cover shadow-soft" />
        </Reveal>
      </section>

      <section className="container-x grid gap-16 py-16 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Our Story</p>
          <h2 className="mt-3 text-4xl font-black text-ink">From a single workshop to a UAE-wide service network.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            What began as a small specialist garage in Sharjah has grown into one of the UAE's most respected tyre and fleet service operations. We've earned that trust the hard way — one alignment, one tyre, one customer at a time.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Today our team services thousands of vehicles every month, partners with hundreds of commercial fleets, and stocks the world's most respected tyre brands across every size and segment.
          </p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { i: Target, t: "Our Mission", d: "To make premium tyres and expert service accessible, transparent and fast." },
            { i: Award, t: "Our Standard", d: "World-class workshop equipment and factory-trained technicians." },
            { i: Users, t: "Our Customers", d: "From daily commuters to enterprise fleets — we treat every vehicle the same." },
            { i: Globe2, t: "Our Reach", d: "Service across Sharjah, Dubai, Ajman and the Northern Emirates." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-white p-6">
                <v.i className="h-6 w-6 text-brand" />
                <h3 className="mt-4 text-base font-bold text-ink">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="container-x grid gap-10 md:grid-cols-4">
          {[
            { k: "10+", v: "Years of service" },
            { k: "20,000+", v: "Tyres fitted annually" },
            { k: "500+", v: "Fleet partners" },
            { k: "98%", v: "Repeat customers" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-5xl font-black text-brand">{s.k}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-white/60">{s.v}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
