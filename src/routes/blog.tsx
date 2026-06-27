import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { posts } from "@/data/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Tyre Tips, Safety & Fleet Advice | Qasr Al Bustan" },
      { name: "description", content: "Expert advice on tyre selection, safety, maintenance and fleet management — from the team at Qasr Al Bustan Tyres UAE." },
      { property: "og:title", content: "Insights — Qasr Al Bustan Tyres" },
      { property: "og:description", content: "Tyre guides, safety articles and fleet advice from UAE's trusted tyre experts." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");

  const categories = useMemo(() => ["All", ...Array.from(new Set(posts.map((p) => p.category)))], []);
  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchCat = cat === "All" || p.category === cat;
      const matchQ = q.trim() === "" || p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [q, cat]);

  const featured = posts[0];

  return (
    <>
      <section className="container-x pt-12 pb-12">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Insights" }]} />
        <div className="mt-6 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Insights</p>
          <h1 className="mt-3 text-balance text-5xl font-black text-ink lg:text-6xl">Expert advice from the workshop floor.</h1>
        </div>
      </section>

      {/* Featured */}
      <section className="container-x pb-16">
        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="group grid overflow-hidden rounded-[2rem] border border-border bg-white transition hover:shadow-soft lg:grid-cols-2"
        >
          <div className="aspect-[4/3] overflow-hidden lg:aspect-auto">
            <img src={featured.image} alt={featured.title} loading="lazy" width={1200} height={800} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <span className="self-start rounded-full bg-brand/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand">Featured · {featured.category}</span>
            <h2 className="mt-5 text-balance text-3xl font-black text-ink lg:text-4xl">{featured.title}</h2>
            <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
            <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">{new Date(featured.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · {featured.author}</p>
          </div>
        </Link>
      </section>

      {/* Search + filter */}
      <section className="container-x pb-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-md grow">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              type="search"
              placeholder="Search articles…"
              className="w-full rounded-full border border-border bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-brand"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${cat === c ? "bg-ink text-white" : "border border-border bg-white text-foreground/70 hover:border-ink"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block h-full overflow-hidden rounded-3xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-soft">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" width={1200} height={800} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand">{p.category}</span>
                  <h3 className="mt-2 text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</p>
                </div>
              </Link>
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full py-20 text-center text-muted-foreground">No articles match your search.</p>
          )}
        </div>
      </section>
    </>
  );
}
