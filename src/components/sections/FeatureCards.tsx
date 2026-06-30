import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import img1 from "@/assets/tyre-truck-haul.jpg";
import img2 from "@/assets/fleet.jpg";
import img3 from "@/assets/service-alignment.jpg";

const cards = [
  {
    img: img1,
    t: "Upgrade your truck tyres for superior performance",
    d: "Increase mileage, reduce fuel costs and get more value from every tyre — for all weathers, all surfaces, all vehicles.",
  },
  {
    img: img2,
    t: "Transform your fleet efficiency",
    d: "Solutions that minimise downtime, optimise fuel efficiency, improve safety and boost satisfaction.",
  },
  {
    img: img3,
    t: "The people to drive you onward",
    d: "Expert support, a trusted UAE service network, and the reassurance of roadside assistance.",
  },
];

export function FeatureCards() {
  return (
    <section id="insights" className="bg-white py-24">
      <div className="container-x grid gap-8 md:grid-cols-3">
        {cards.map((c, i) => <Card key={c.t} {...c} delay={0.1 + i * 0.1} />)}
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
      <div className="overflow-hidden rounded-2xl">
        <img
          src={img}
          alt=""
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <h3 className="mt-6 font-clash text-xl font-semibold text-[#14110D]">{t}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-[#7C7568]">{d}</p>
    </article>
  );
}