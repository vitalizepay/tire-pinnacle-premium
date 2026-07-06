import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/Button";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { useParallax } from "@/hooks/useParallax";
import { useLang, type TKey } from "@/contexts/LanguageContext";
import fleetImg from "@/assets/fleet.jpg";

export function CommercialTyres() {
  const { t } = useLang();
  const { ref: txtRef, inView } = useInViewAnimation<HTMLDivElement>();
  const { ref: imgRef, offset } = useParallax<HTMLDivElement>(60);

  const bullets: TKey[] = ["commB1", "commB2", "commB3", "commB4", "commB5"];

  return (
    <section id="commercial" className="relative overflow-hidden bg-[#0C0C0E] py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 15% 40%, rgba(200,164,92,0.16), transparent 55%), radial-gradient(ellipse at 90% 90%, rgba(168,123,51,0.14), transparent 55%)",
        }}
      />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div ref={imgRef} className="relative order-1 lg:order-1">
          <div
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px]"
            style={{ background: "radial-gradient(circle at 50% 50%, rgba(200,164,92,0.22), transparent 60%)", filter: "blur(24px)" }}
          />
          <img
            src={fleetImg}
            alt="Commercial truck fleet"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[32px] object-cover shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] will-change-transform"
            style={{ transform: `translateY(${offset * 0.4}px)` }}
          />
        </div>
        <div
          ref={txtRef}
          className={"order-2 lg:order-2 " + (inView ? "animate-fade-in-up" : "opacity-0")}
        >
          <div className="eyebrow !text-[#C8A45C]">{t("commEyebrow")}</div>
          <h2 className="mt-4 font-clash text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[54px]">
            {t("commTitle")}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
            {t("commDesc")}
          </p>
          <ul className="mt-8 space-y-3">
            {bullets.map((k, i) => (
              <li
                key={k}
                className={"flex items-center gap-3 text-white/85 " + (inView ? "animate-fade-in-up" : "opacity-0")}
                style={{ animationDelay: `${0.15 + i * 0.06}s` }}
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-grad text-[#14110D]">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-[15px]">{t(k)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button as="a" href="#tyre-sizes" variant="gold">
              {t("commCta")} <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}