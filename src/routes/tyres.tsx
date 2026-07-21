import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronRight, Filter } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { specTyres, categories, type Category, type SpecTyre } from "@/data/specs";

export const Route = createFileRoute("/spec")({
  head: () => ({
    meta: [
      { title: "Tyre Specifications — Qasr Al Bustan Tyres" },
      { name: "description", content: "Detailed technical specifications for our commercial truck tyre range: steer, drive, trailer and all-position patterns." },
      { property: "og:title", content: "Tyre Specifications — Qasr Al Bustan Tyres" },
      { property: "og:description", content: "Full spec sheets: size, load index, ply rating, rim, dimensions and inflation pressures." },
    ],
  }),
  component: SpecPage,
});

function SpecPage() {
  const [filter, setFilter] = useState<Category | "ALL">("ALL");

  const tyres = useMemo(
    () => (filter === "ALL" ? specTyres : specTyres.filter((t) => t.categories.includes(filter))),
    [filter],
  );

  return (
    <div className="min-h-screen bg-[#F6F1E7]">
      <Header />
      <FloatingActions />

      <section className="relative overflow-hidden bg-[#0C0C0E] pt-40 pb-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,164,92,0.18),transparent_55%)]" />
        <div className="relative pl-6 pr-6 md:pl-16 lg:pl-24">
          <nav className="mb-6 flex items-center gap-2 text-xs text-white/60">
            <Link to="/" className="hover:text-[#C8A45C]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#C8A45C]">Specifications</span>
          </nav>
          <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A45C]">
            Top Performers
          </div>
          <h1 className="mt-4 font-clash text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Best <span className="font-serif-italic text-gold-grad">Selling</span>
          </h1>
          <p className="mt-5 max-w-2xl text-white/70 md:text-lg">
            Complete technical spec sheets for our commercial truck tyre range — steer, drive, trailer and all-position patterns for long haul, regional, mixed service and off-road applications.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-white/60 backdrop-blur">
        <div className="flex flex-wrap items-center gap-2 py-6 pl-6 pr-6 md:pl-16 lg:pl-24">
          <div className="mr-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#7C7568]">
            <Filter className="h-3.5 w-3.5 text-[#C8A45C]" />
            Filter
          </div>
          {(["ALL", ...categories] as const).map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={
                  "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all " +
                  (active
                    ? "bg-[#14110D] text-white shadow-[0_10px_30px_-10px_rgba(12,12,14,0.4)]"
                    : "border border-[var(--line)] bg-white text-[#7C7568] hover:border-[#C8A45C]/60 hover:text-[#14110D]")
                }
              >
                {c}
              </button>
            );
          })}
        </div>
      </section>

      <section className="py-16">
        <div className="space-y-10 pl-6 pr-6 md:pl-16 lg:pl-24 max-w-6xl">
          {tyres.map((tyre, i) => (
            <SpecCard key={tyre.code} tyre={tyre} index={i + 1} />
          ))}
          {tyres.length === 0 && (
            <div className="rounded-3xl border border-dashed border-[var(--line)] bg-white p-16 text-center text-[#7C7568]">
              No tyres match this category yet.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SpecCard({ tyre, index }: { tyre: SpecTyre; index: number }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-white shadow-[0_30px_80px_-40px_rgba(12,12,14,0.25)]">
      <div className="grid gap-0 md:grid-cols-[280px_1fr] lg:grid-cols-[340px_1fr]">
        <div className="relative flex items-center justify-center bg-gradient-to-br from-[#F6F1E7] via-white to-[#F6F1E7] p-8">
          <div className="absolute left-6 top-6 font-clash text-5xl font-semibold text-[#C8A45C]/25">
            {String(index).padStart(2, "0")}
          </div>
          <img
            src={tyre.image}
            alt={`${tyre.code} tyre`}
            loading="lazy"
            className="h-auto w-full max-w-[240px] object-contain drop-shadow-[0_20px_40px_rgba(12,12,14,0.25)]"
          />
        </div>

        <div className="p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#14110D] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#C8A45C]">
              {tyre.position}
            </span>
            {tyre.categories.map((c) => (
              <span key={c} className="rounded-full border border-[var(--line)] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#7C7568]">
                {c}
              </span>
            ))}
          </div>
          <h2 className="mt-4 font-clash text-3xl font-semibold tracking-tight text-[#14110D] md:text-4xl">
            {tyre.code}
          </h2>

          {tyre.tables.length > 0 ? (
            <div className="mt-6 space-y-6">
              {tyre.tables.map((rows, ti) => (
                <div key={ti}>
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A87B33]">
                    Specifications
                  </div>
                  <SpecTable rows={rows} />
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-6 rounded-2xl bg-[#F6F1E7] p-5 text-sm text-[#7C7568]">
              Detailed specifications available on request — contact us for the full data sheet.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function SpecTable({ rows }: { rows: import("@/data/specs").SpecRow[] }) {
  const headers = ["Size", "LI/SS", "PR", "Rim", "Rim Alt", "SW (mm)", "OD (mm)", "RUL (mm)", "Load Single (kg/lbs)", "Load Dual (kg/lbs)", "IP (kPa)", "IP (psi)", "OTD (mm)"];
  return (
    <div className="overflow-x-auto rounded-2xl border border-[var(--line)]">
      <table className="min-w-full text-left text-xs md:text-sm">
        <thead className="bg-[#14110D] text-white">
          <tr>
            {headers.map((h) => (
              <th key={h} className="whitespace-nowrap px-3 py-3 font-semibold uppercase tracking-wider text-[10px] md:text-[11px] text-[#C8A45C]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? "bg-[#F6F1E7]/40" : "bg-white"}>
              <td className="whitespace-nowrap px-3 py-2.5 font-semibold text-[#14110D]">{r.size}</td>
              <td className="whitespace-nowrap px-3 py-2.5 text-[#7C7568]">{r.liss}</td>
              <td className="whitespace-nowrap px-3 py-2.5 text-[#7C7568]">{r.pr}</td>
              <td className="whitespace-nowrap px-3 py-2.5 text-[#7C7568]">{r.rim}</td>
              <td className="whitespace-nowrap px-3 py-2.5 text-[#7C7568]">{r.rimAlt}</td>
              <td className="whitespace-nowrap px-3 py-2.5 text-[#7C7568]">{r.sw}</td>
              <td className="whitespace-nowrap px-3 py-2.5 text-[#7C7568]">{r.od}</td>
              <td className="whitespace-nowrap px-3 py-2.5 text-[#7C7568]">{r.rul}</td>
              <td className="whitespace-nowrap px-3 py-2.5 text-[#7C7568]">{r.loadSingle}</td>
              <td className="whitespace-nowrap px-3 py-2.5 text-[#7C7568]">{r.loadDual}</td>
              <td className="whitespace-nowrap px-3 py-2.5 text-[#7C7568]">{r.ipKpa}</td>
              <td className="whitespace-nowrap px-3 py-2.5 text-[#7C7568]">{r.ipPsi}</td>
              <td className="whitespace-nowrap px-3 py-2.5 font-semibold text-[#A87B33]">{r.otd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}