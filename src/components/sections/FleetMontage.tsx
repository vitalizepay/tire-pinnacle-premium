import { Button } from "@/components/Button";
import { useParallax } from "@/hooks/useParallax";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import fleetImg from "@/assets/fleet.jpg";

export function FleetMontage() {
  const { ref: pRef, offset } = useParallax<HTMLDivElement>(80);
  const { ref: pRef2, offset: o2 } = useParallax<HTMLDivElement>(40);
  const { ref: pRef3, offset: o3 } = useParallax<HTMLDivElement>(120);
  const { ref: txtRef, inView } = useInViewAnimation<HTMLDivElement>();

  // ease rotation toward 0 as it scrolls into view
  const rot = -8 + Math.max(-8, Math.min(0, offset / 12));

  return (
    <section
      id="fleet"
      className="relative overflow-hidden bg-[#0C0C0E] py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(200,164,92,0.18), transparent 50%), radial-gradient(ellipse at 90% 80%, rgba(168,123,51,0.18), transparent 55%)",
        }}
      />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        <div ref={txtRef} className={inView ? "animate-fade-in-up" : "opacity-0"}>
          <div className="eyebrow !text-[#C8A45C]">Discover Our Fleet Programme</div>
          <h2 className="mt-4 font-clash text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Put Your Fleet
            <span className="block font-serif-italic text-gold-grad" style={{ fontWeight: 500 }}>
              Results First
            </span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            Tailored programmes covering supply, fitment, monitoring, retreading
            and roadside response — engineered to lower your total cost of
            operation.
          </p>
          <div className="mt-8">
            <Button as="a" href="#contact" variant="primary" className="bg-white text-[#0C0C0E] hover:bg-white/90">
              Drive Results
            </Button>
          </div>
        </div>

        <div className="relative h-[440px]">
          <div
            ref={pRef}
            className="absolute inset-0 origin-center overflow-hidden rounded-[36px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] will-change-transform"
            style={{
              transform: `translateY(${offset * 0.4}px) rotate(${rot}deg)`,
            }}
          >
            <img src={fleetImg} alt="Fleet of trucks" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div
            ref={pRef2}
            className="absolute -left-6 top-10 h-3 w-24 rounded-full bg-gold-grad shadow-lg will-change-transform"
            style={{ transform: `translateY(${o2}px)` }}
          />
          <div
            ref={pRef3}
            className="absolute -right-4 bottom-20 h-3 w-16 rounded-full bg-gold-grad/80 shadow-lg will-change-transform"
            style={{ transform: `translateY(${o3 * -1}px)` }}
          />
          <div className="absolute -bottom-3 left-1/3 h-2 w-10 rounded-full bg-[#C8A45C]/70" />
        </div>
      </div>
    </section>
  );
}