import { ArrowRight } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import tyreImg from "@/assets/tyre-truck.jpg";

const links = [
  "Truck & Bus Tyres",
  "Find Tyres Near You",
  "Tyre Retreading",
  "Tyre Management for Fleets",
];

export function FocusedTyreBand() {
  const { ref: pRef, offset } = useParallax<HTMLDivElement>(60);
  const { ref: vRef, inView } = useInViewAnimation<HTMLDivElement>();

  return (
    <section id="about" className="relative overflow-hidden bg-[#0C0C0E] py-28">
      <div className="container-x grid items-center gap-16 md:grid-cols-2">
        <div ref={pRef} className="relative">
          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px]"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(200,164,92,0.22), transparent 60%)",
              filter: "blur(20px)",
            }}
          />
          <img
            src={tyreImg}
            alt="Close-up of a premium truck tyre"
            loading="lazy"
            className="aspect-square w-full rounded-3xl object-cover shadow-2xl will-change-transform"
            style={{ transform: `translateY(${offset}px)` }}
          />
        </div>

        <div
          ref={vRef}
          className={inView ? "animate-fade-in-up" : "opacity-0"}
        >
          <div className="eyebrow !text-[#C8A45C]">Engineered to Outlast</div>
          <h2 className="mt-4 font-clash text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Reduce wear.
            <span className="block font-serif-italic text-gold-grad" style={{ fontWeight: 500 }}>
              Go further.
            </span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            Our commercial tyres are engineered for maximum mileage, predictable
            handling, and lower cost per kilometre — built for the demands of
            UAE long-haul, regional and urban routes.
          </p>

          <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {links.map((l, i) => (
              <li
                key={l}
                className={
                  "group flex cursor-pointer items-center justify-between py-5 text-lg text-white transition hover:pl-2 hover:text-[#E6C57A] " +
                  (inView ? "animate-fade-in-up" : "opacity-0")
                }
                style={{ animationDelay: `${0.15 + i * 0.08}s` }}
              >
                <span className="font-clash">{l}</span>
                <ArrowRight className="h-5 w-5 text-[#C8A45C] transition group-hover:translate-x-1" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}