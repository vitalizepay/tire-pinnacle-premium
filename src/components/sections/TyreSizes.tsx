import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const SIZES = [
  "175/70R14","185/70R14","185/60R15","195/65R15","205/65R15","205/55R16","205/60R16","215/55ZR16",
  "215/60R16","215/45ZR17","215/55ZR17","225/45ZR17","225/55ZR17","225/40ZR18","225/45ZR18","235/45ZR18",
  "245/40R18","245/45ZR18","235/40R19","275/40R21","275/45R21","235/55ZR18","255/40ZR19","275/35ZR19",
  "275/55ZR20","275/60ZR20","315/35ZR20","285/45ZR22","235/55ZR20","245/45ZR20","225/70R16","235/70R16",
  "245/70R16","225/65R17","265/65R17","225/60R18","265/60R18","235/55R19","205/70R15","265/70R16",
  "315/80R22.5","315/70R22.5","385/65R22.5","385/55R22.5","235/75R17.5","12.00R24","11R22.5","295/80R22.5",
  "9.5R17.5","325/95R24","275/70R22.5",
];

const BADGES = [
  "Any Size Available",
  "Premium Global Brands",
  "Fleet & Bulk Orders",
  "Fast UAE Delivery",
  "Competitive Pricing",
];

export function TyreSizes() {
  const [q, setQ] = useState("");
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return SIZES;
    return SIZES.filter((v) => v.toLowerCase().includes(s));
  }, [q]);

  return (
    <section
      id="tyre-sizes"
      className="bg-[#0B0B0B] text-white"
      style={{ paddingTop: 120, paddingBottom: 120 }}
      aria-labelledby="tyre-sizes-heading"
    >
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow text-[#C8A45C]">Complete Range. Every Need.</div>
          <h2
            id="tyre-sizes-heading"
            className="mt-4 font-clash text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
          >
            Our{" "}
            <span className="font-serif-italic text-gold-grad" style={{ fontWeight: 600 }}>
              Tyre Sizes
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Browse our available tyre sizes for passenger cars, SUVs, 4x4 vehicles, commercial
            trucks, buses and heavy-duty vehicles across the UAE.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-12 flex max-w-4xl flex-col items-stretch gap-3 rounded-2xl border border-[rgba(214,162,74,0.20)] bg-white/[0.03] p-3 sm:flex-row sm:items-center">
          <div className="flex-1">
            <label htmlFor="tyre-search" className="sr-only">
              Search tyre size
            </label>
            <input
              id="tyre-search"
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search tyre size... e.g. 205/55R16"
              className="w-full rounded-xl bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45C]/60"
              aria-label="Search tyre size"
            />
          </div>
          <div
            className="shrink-0 px-4 text-center text-xs uppercase tracking-[0.18em] text-[#C8A45C] sm:text-right"
            aria-live="polite"
          >
            Showing {filtered.length} {filtered.length === 1 ? "Size" : "Sizes"}
          </div>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className={
            "mx-auto mt-8 max-w-6xl transition-all duration-700 " +
            (inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")
          }
        >
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-[rgba(214,162,74,0.15)] bg-white/[0.03] p-10 text-center text-white/60">
              No tyre size found.
            </div>
          ) : (
            <ul
              role="list"
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8"
              style={{ gap: 12 }}
            >
              {filtered.map((size, i) => (
                <li
                  key={size}
                  className={inView ? "animate-fade-in-up" : "opacity-0"}
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <button
                    type="button"
                    aria-label={`Tyre size ${size}`}
                    className="group flex min-h-[60px] w-full cursor-pointer items-center justify-center rounded-xl border border-[rgba(214,162,74,0.15)] bg-white/[0.03] px-3 py-4 text-center text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.05] hover:border-[#D6A24A] hover:bg-[#D6A24A] hover:text-black hover:shadow-[0_15px_35px_rgba(214,162,74,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45C]/70"
                    style={{ letterSpacing: "0.5px" }}
                  >
                    {size}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Custom CTA */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div
            className="group rounded-[20px] border border-[rgba(214,162,74,0.25)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D6A24A]/60 hover:shadow-[0_20px_60px_rgba(214,162,74,0.20)] md:p-[50px]"
            style={{ background: "linear-gradient(135deg,#111111,#1B1B1B)" }}
          >
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="eyebrow text-[#C8A45C]">Custom Orders Available</div>
                <h3 className="mt-4 font-clash text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  Can't Find Your{" "}
                  <span className="font-serif-italic text-gold-grad" style={{ fontWeight: 600 }}>
                    Tyre Size?
                  </span>
                </h3>
                <p className="mt-4 text-white/60">
                  Looking for a tyre size that isn't listed? We can source and deliver custom tyre
                  sizes on request for passenger cars, SUVs, 4x4 vehicles, commercial trucks, buses,
                  fleet vehicles, industrial equipment, agricultural vehicles and off-road &
                  specialty vehicles.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {BADGES.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-2 rounded-full border border-[rgba(214,162,74,0.25)] bg-white/[0.04] px-3 py-1.5 text-xs text-white/80"
                    >
                      <span className="text-[#C8A45C]">✓</span>
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 md:items-end">
                <Button as="a" href="#contact" variant="gold">
                  Request Custom Size
                </Button>
                <Button as="a" href="#contact" variant="ghost-dark">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-white/70">
            Need a specific tyre size or tyre brand? Our sourcing specialists can arrange almost any
            tyre size or brand based on availability with fast delivery across the UAE.
          </p>
          <p className="mt-3 text-xs italic text-white/40">
            *Custom tyre sizes and brands are supplied subject to manufacturer availability. Contact
            our sales team for stock confirmation, pricing and delivery timelines.*
          </p>
        </div>
      </div>
    </section>
  );
}