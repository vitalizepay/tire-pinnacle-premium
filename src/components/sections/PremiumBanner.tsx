import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import bannerAsset from "@/assets/premium-banner.jpg.asset.json";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { useLang } from "@/contexts/LanguageContext";

export function PremiumBanner() {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();
  const { t } = useLang();
  return (
    <section className="relative min-h-[520px] w-full overflow-hidden bg-[#0C0C0E] md:min-h-[620px]">
      <img
        src={bannerAsset.url}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0C0C0E]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 15% 60%, rgba(200,164,92,0.22), transparent 55%)",
        }}
      />
      <div
        ref={ref}
        className={
          "container-x relative z-10 flex min-h-[520px] items-center py-24 md:min-h-[620px] " +
          (inView ? "animate-fade-in-up" : "opacity-0")
        }
      >
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C8A45C]/40 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8A45C]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E6C57A]">
              {t("bannerEyebrow")}
            </span>
          </div>
          <h2 className="mt-6 font-clash text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl">
            {t("bannerTitle1")}
            <span className="block font-serif-italic text-gold-grad" style={{ fontWeight: 500 }}>
              {t("bannerTitle2")}
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {t("bannerDesc")}
          </p>
          <div className="mt-10">
            <Link
              to="/tyres"
              className="sheen-btn inline-flex items-center gap-2 rounded-full bg-gold-grad px-8 py-4 text-sm font-medium text-[#14110D] shadow-[0_2px_8px_rgba(168,123,51,.25),0_10px_30px_rgba(200,164,92,.20),inset_0_1px_0_rgba(255,255,255,.45)] transition hover:scale-[1.03]"
            >
              {t("bannerCta")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}