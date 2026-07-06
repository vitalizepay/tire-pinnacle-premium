import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { useLang, type TKey } from "@/contexts/LanguageContext";
import img1 from "@/assets/tyre-truck-haul.jpg";
import img2 from "@/assets/service-alignment.jpg";
import img3 from "@/assets/fleet.jpg";

export function FeatureCards() {
  const { t } = useLang();
  const cards: { img: string; title: TKey; desc: TKey }[] = [
    { img: img1, title: "fc1Title", desc: "fc1Desc" },
    { img: img2, title: "fc2Title", desc: "fc2Desc" },
    { img: img3, title: "fc3Title", desc: "fc3Desc" },
  ];
  return (
    <section id="insights" className="bg-[#0B0B0B] py-24">
      <div className="container-x grid gap-8 md:grid-cols-3">
        {cards.map((c, i) => (
          <Card key={c.title} img={c.img} t={t(c.title)} d={t(c.desc)} delay={0.1 + i * 0.1} />
        ))}
      </div>
    </section>
  );
}

function Card({ img, t, d, delay }: { img: string; t: string; d: string; delay: number }) {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();
  return (
    <article
      ref={ref}
      style={{ animationDelay: `${delay}s` }}
      className={"group " + (inView ? "animate-fade-in-up" : "opacity-0")}
    >
      <div className="overflow-hidden rounded-[24px] border border-[rgba(214,162,74,0.20)] bg-white/[0.03] transition-all duration-[400ms] ease-out group-hover:-translate-y-2 group-hover:border-[#D6A24A] group-hover:shadow-[0_30px_70px_-15px_rgba(214,162,74,0.45)]">
        <img
          src={img}
          alt={t}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.08]"
        />
        <div className="p-6">
          <h3 className="font-clash text-xl font-semibold text-white">{t}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-white/60">{d}</p>
        </div>
      </div>
    </article>
  );
}