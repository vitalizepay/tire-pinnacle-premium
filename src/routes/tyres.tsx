import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Phone, MessageCircle, Mail, ShieldCheck, Gauge, Timer, Sun, Truck, Award, MapPin } from "lucide-react";
import { Button } from "@/components/Button";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { tyreCategories, type TyreCategory } from "@/data/tyre-categories";
import { useLang, type Lang, type TKey } from "@/contexts/LanguageContext";
import { site } from "@/data/site";
import heroImg from "@/assets/tyres-hero.jpg";

export const Route = createFileRoute("/tyres")({
  head: () => ({
    meta: [
      { title: "Tyre Range — Qasr Al Bustan Tyres UAE" },
      { name: "description", content: "Explore our complete Golden Horse tyre range: passenger cars, SUVs, vans, medium & heavy trucks, buses and off-road buggies across the UAE." },
      { property: "og:title", content: "Golden Horse Tyre Range — Qasr Al Bustan" },
      { property: "og:description", content: "Premium tyres for every vehicle across the UAE." },
      { property: "og:url", content: "/tyres" },
    ],
    links: [{ rel: "canonical", href: "/tyres" }],
  }),
  component: TyresPage,
});

function titleFor(lang: Lang, c: TyreCategory) {
  return lang === "ar" ? c.titleAr : lang === "fa" ? c.titleFa : c.titleEn;
}
function descFor(lang: Lang, c: TyreCategory) {
  return lang === "ar" ? c.descAr : lang === "fa" ? c.descFa : c.descEn;
}

function TyresPage() {
  const { t, lang } = useLang();
  const quoteHref = `mailto:${site.email}?subject=Tyre%20Quote%20Request`;

  return (
    <div className="bg-[#0B0B0B] text-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden pt-32">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0B0B0B]" />
        <div className="container-x relative z-10 flex min-h-[60vh] flex-col justify-center py-16">
          <div className="max-w-3xl">
            <div className="eyebrow !text-[#C8A45C]">{t("navTyres")}</div>
            <h1 className="mt-4 font-clash text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl">
              {t("tyresHeroTitle")}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {t("tyresHeroSub")}
            </p>
          </div>
        </div>
      </section>

      {/* Category nav chips */}
      <section className="border-t border-white/5 bg-[#0C0C0E] py-10">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-3">
            {tyreCategories.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="rounded-full border border-[#C8A45C]/40 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/85 backdrop-blur transition hover:border-[#C8A45C] hover:bg-[#C8A45C]/10 hover:text-white"
              >
                {titleFor(lang, c)}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      {tyreCategories.map((c, idx) => (
        <CategorySection
          key={c.slug}
          category={c}
          reverse={idx % 2 === 1}
          lang={lang}
          t={t}
          quoteHref={quoteHref}
        />
      ))}

      {/* Why Choose Golden Horse */}
      <WhyGH t={t} />

      {/* Help CTA */}
      <section className="bg-[#0C0C0E] py-24">
        <div className="container-x mx-auto max-w-4xl text-center">
          <h2 className="font-clash text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            {t("helpTitle")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/70">{t("helpDesc")}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button as="a" href={`tel:${site.phone}`} variant="callnow">
              <Phone className="h-4 w-4" /> {t("callNow")}
            </Button>
            <Button as="a" href={site.whatsapp} target="_blank" rel="noreferrer" variant="gold">
              <MessageCircle className="h-4 w-4" /> {t("tyresWhatsapp")}
            </Button>
            <Button as="a" href={quoteHref} variant="ghost-dark">
              <Mail className="h-4 w-4" /> {t("tyresRequestQuote")}
            </Button>
          </div>
          <div className="mt-6 text-sm text-white/50">
            <a href={`mailto:${site.email}`} className="hover:text-[#C8A45C]">{site.email}</a>
          </div>
        </div>
      </section>
    </div>
  );
}

function CategorySection({
  category,
  reverse,
  lang,
  t,
  quoteHref,
}: {
  category: TyreCategory;
  reverse: boolean;
  lang: Lang;
  t: (k: TKey) => string;
  quoteHref: string;
}) {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();
  return (
    <section id={category.slug} className="scroll-mt-28 border-t border-white/5 py-24">
      <div className="container-x">
        <div
          ref={ref}
          className={
            "grid items-center gap-12 lg:gap-16 lg:grid-cols-2 " +
            (inView ? "animate-fade-in-up" : "opacity-0")
          }
        >
          <div className={reverse ? "lg:order-2" : ""}>
            <div
              className="pointer-events-none absolute -z-10"
              style={{ background: "radial-gradient(circle, rgba(200,164,92,0.18), transparent 60%)", filter: "blur(30px)" }}
            />
            <img
              src={category.image}
              alt={titleFor(lang, category)}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[28px] object-cover shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
            />
          </div>
          <div className={reverse ? "lg:order-1" : ""}>
            <div className="eyebrow !text-[#C8A45C]">{t("navTyres")}</div>
            <h2 className="mt-3 font-clash text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              {titleFor(lang, category)}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/70">
              {descFor(lang, category)}
            </p>

            <div className="mt-8">
              <div className="eyebrow !text-[#C8A45C]">{t("tyresSizes")}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.sizes.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-full border border-[#C8A45C]/40 bg-[#C8A45C]/10 px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-[#E6C57A]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button as="a" href={quoteHref} variant="gold">
                {t("tyresRequestQuote")} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="a" href={site.whatsapp} target="_blank" rel="noreferrer" variant="ghost-dark">
                <MessageCircle className="h-4 w-4" /> {t("tyresWhatsapp")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyGH({ t }: { t: (k: TKey) => string }) {
  const items: { key: TKey; Icon: typeof ShieldCheck }[] = [
    { key: "whyGH1", Icon: Award },
    { key: "whyGH2", Icon: Gauge },
    { key: "whyGH3", Icon: Timer },
    { key: "whyGH4", Icon: Sun },
    { key: "whyGH5", Icon: Truck },
    { key: "whyGH6", Icon: ShieldCheck },
    { key: "whyGH7", Icon: MapPin },
  ];
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();
  return (
    <section className="relative overflow-hidden bg-[#0C0C0E] py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(200,164,92,0.16), transparent 55%), radial-gradient(ellipse at 90% 90%, rgba(168,123,51,0.12), transparent 55%)",
        }}
      />
      <div ref={ref} className={"container-x relative " + (inView ? "animate-fade-in-up" : "opacity-0")}>
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow !text-[#C8A45C]">{t("whyEyebrow")}</div>
          <h2 className="mt-3 font-clash text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            {t("whyGHTitle")}
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ key, Icon }, i) => (
            <div
              key={key}
              className="group rounded-[22px] border border-[rgba(214,162,74,0.18)] bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#D6A24A] hover:shadow-[0_20px_50px_-15px_rgba(214,162,74,0.35)]"
              style={{ animationDelay: `${0.05 + i * 0.05}s` }}
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gold-grad text-[#14110D]">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <div className="mt-5 font-clash text-lg font-semibold text-white">{t(key)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}