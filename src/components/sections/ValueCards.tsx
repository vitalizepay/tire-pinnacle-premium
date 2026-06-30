import { ShieldCheck, Gauge, Truck } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { useLang, type TKey } from "@/contexts/LanguageContext";

export function ValueCards() {
  const { t } = useLang();
  const cards: { i: any; t: string; d: string }[] = [
    { i: ShieldCheck, t: t("vc1Title" as TKey), d: t("vc1Desc" as TKey) },
    { i: Gauge, t: t("vc2Title" as TKey), d: t("vc2Desc" as TKey) },
    { i: Truck, t: t("vc3Title" as TKey), d: t("vc3Desc" as TKey) },
  ];
  return (
    <section className="bg-white py-20">
      <div className="container-x grid gap-8 md:grid-cols-3">
        {cards.map((c, i) => <Card key={c.t} {...c} delay={0.1 + i * 0.1} />)}
      </div>
    </section>
  );
}

function Card({ i: Icon, t, d, delay }: { i: any; t: string; d: string; delay: number }) {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}s` }}
      className={
        "group rounded-[28px] border border-[var(--line)] bg-[#F6F1E7] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(168,123,51,0.35)] " +
        (inView ? "animate-fade-in-up" : "opacity-0")
      }
    >
      <div className="grid h-14 w-14 place-items-center rounded-full bg-gold-grad text-[#14110D] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 font-clash text-2xl font-semibold text-[#14110D]">{t}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-[#7C7568]">{d}</p>
    </div>
  );
}