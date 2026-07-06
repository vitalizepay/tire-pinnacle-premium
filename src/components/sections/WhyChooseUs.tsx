import { ShieldCheck, Award, Truck, Zap, Tag, Headphones } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { useLang, type TKey } from "@/contexts/LanguageContext";

export function WhyChooseUs() {
  const { t } = useLang();
  const items: { icon: any; key: TKey }[] = [
    { icon: ShieldCheck, key: "why1" },
    { icon: Award, key: "why2" },
    { icon: Truck, key: "why3" },
    { icon: Zap, key: "why4" },
    { icon: Tag, key: "why5" },
    { icon: Headphones, key: "why6" },
  ];
  return (
    <section id="why" className="relative overflow-hidden bg-[#0C0C0E] py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(200,164,92,0.14), transparent 60%)",
        }}
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow !text-[#C8A45C]">{t("whyEyebrow")}</div>
          <h2 className="mt-4 font-clash text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            {t("whyTitleA")}{" "}
            <span className="font-serif-italic text-gold-grad" style={{ fontWeight: 500 }}>
              {t("whyTitleB")}
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Item key={it.key} icon={it.icon} label={t(it.key)} delay={0.05 + i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Item({ icon: Icon, label, delay }: { icon: any; label: string; delay: number }) {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}s` }}
      className={
        "group flex items-center gap-4 rounded-[20px] border border-[rgba(214,162,74,0.18)] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D6A24A]/60 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_-20px_rgba(214,162,74,0.35)] " +
        (inView ? "animate-fade-in-up" : "opacity-0")
      }
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-grad text-[#14110D] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
        <Icon className="h-5 w-5" />
      </span>
      <span className="font-clash text-lg font-semibold text-white">{label}</span>
    </div>
  );
}