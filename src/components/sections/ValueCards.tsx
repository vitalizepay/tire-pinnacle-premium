import { ShieldCheck, Gauge, Truck } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const cards = [
  { i: ShieldCheck, t: "Genuine Premium", d: "Authorised supply of leading global truck-tyre brands." },
  { i: Gauge, t: "Precision Service", d: "Laser alignment and dynamic balancing by certified technicians." },
  { i: Truck, t: "Fleet Specialists", d: "Custom programmes for transport and logistics fleets." },
];

export function ValueCards() {
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