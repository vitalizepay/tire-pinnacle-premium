import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { tyreCategories } from "@/data/tyre-categories";
import { useLang, type Lang } from "@/contexts/LanguageContext";

function titleFor(lang: Lang, c: (typeof tyreCategories)[number]) {
  return lang === "ar" ? c.titleAr : lang === "fa" ? c.titleFa : c.titleEn;
}
function descFor(lang: Lang, c: (typeof tyreCategories)[number]) {
  return lang === "ar" ? c.descAr : lang === "fa" ? c.descFa : c.descEn;
}

export function VehicleCategories() {
  const { t, lang } = useLang();
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();
  return (
    <section id="vehicles" className="bg-[#0B0B0B] py-24">
      <div ref={ref} className={"container-x " + (inView ? "animate-fade-in-up" : "opacity-0")}>
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow !text-[#C8A45C]">{t("vehEyebrow")}</div>
          <h2 className="mt-4 font-clash text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            {t("vehTitleA")}{" "}
            <span className="font-serif-italic text-gold-grad" style={{ fontWeight: 500 }}>
              {t("vehTitleB")}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">{t("vehDesc")}</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tyreCategories.map((c, i) => (
            <Link
              key={c.slug}
              to="/tyres"
              hash={c.slug}
              className="group relative overflow-hidden rounded-[22px] border border-[rgba(214,162,74,0.18)] bg-white/[0.03] transition-all duration-[400ms] ease-out hover:-translate-y-2 hover:border-[#D6A24A] hover:shadow-[0_30px_70px_-20px_rgba(214,162,74,0.45)]"
              style={{ animationDelay: `${0.05 + i * 0.05}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={titleFor(lang, c)}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.08]"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-clash text-lg font-semibold text-white">
                    {titleFor(lang, c)}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[#C8A45C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/55">
                  {descFor(lang, c)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}