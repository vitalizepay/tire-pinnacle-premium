import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { posts, type BlogPost as BlogPostT } from "@/data/blog";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): { post: BlogPostT; related: BlogPostT[] } => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
    return { post, related };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return { meta: [{ title: "Article — Qasr Al Bustan Tyres" }] };
    return {
      meta: [
        { title: `${p.title} | Qasr Al Bustan Tyres` },
        { name: "description", content: p.metaDescription },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.metaDescription },
        { property: "og:url", content: `/blog/${p.slug}` },
        { property: "og:type", content: "article" },
        { property: "article:author", content: p.author },
        { property: "article:published_time", content: p.date },
      ],
      links: [{ rel: "canonical", href: `/blog/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.metaDescription,
            datePublished: p.date,
            author: { "@type": "Organization", name: p.author },
          }),
        },
      ],
    };
  },
  component: BlogPost,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="text-3xl font-black">Article not found</h1>
      <Link to="/blog" className="mt-4 inline-block text-brand">Back to insights</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-x py-32 text-center">
      <h1 className="text-3xl font-black">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function BlogPost() {
  const { post: p, related } = Route.useLoaderData() as { post: BlogPostT; related: BlogPostT[] };
  return (
    <>
      <article>
        <header className="container-x pt-12">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Insights", to: "/blog" }, { label: p.title }]} />
          <div className="mt-8 max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">{p.category}</span>
            <h1 className="mt-3 text-balance text-4xl font-black text-ink lg:text-6xl">{p.title}</h1>
            <p className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">
              {new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · {p.author}
            </p>
          </div>
        </header>

        <div className="container-x mt-10">
          <img src={p.image} alt={p.title} width={1200} height={800} className="aspect-[16/9] w-full rounded-3xl object-cover shadow-soft" />
        </div>

        <div className="container-x py-16">
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/85">
            <p className="text-xl font-medium text-ink">{p.excerpt}</p>
            {p.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-surface py-20">
        <div className="container-x">
          <h2 className="text-2xl font-black text-ink">Related Articles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="group block overflow-hidden rounded-3xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-soft">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={r.image} alt={r.title} loading="lazy" width={1200} height={800} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand">{r.category}</span>
                  <h3 className="mt-2 text-base font-bold text-ink">{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
