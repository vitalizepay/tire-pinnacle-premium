import { Button } from "@/components/Button";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import bg from "@/assets/service-alignment.jpg";
import { useLang } from "@/contexts/LanguageContext";

export function FindTyres() {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();
  const { t } = useLang();
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 animate-ken-burns">
        <img src={bg} alt="Technicians inspecting a trailer tyre" loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E]/70 to-transparent" />

      <div className="container-x relative flex min-h-[80vh] items-end pb-20 pt-32">
        <div ref={ref} className={"max-w-xl " + (inView ? "animate-fade-in-up" : "opacity-0")}>
          <div className="eyebrow !text-[#C8A45C]">{t("findEyebrow")}</div>
          <h2 className="mt-4 font-clash text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
            {t("findTitleA")}{" "}
            <span className="font-serif-italic text-gold-grad" style={{ fontWeight: 500 }}>{t("findTitleB")}</span>
          </h2>
          <p className="mt-5 max-w-md text-white/75">
            {t("findDesc")}
          </p>
          <div className="mt-8">
            <Button as="a" href="#tyres" variant="gold">{t("findCta")}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}