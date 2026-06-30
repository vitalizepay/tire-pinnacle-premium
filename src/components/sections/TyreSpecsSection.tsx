import { Button } from "@/components/Button";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { tyres } from "@/data/tyres";
import { TyreSpecCard } from "./TyreSpecCard";

export function TyreSpecsSection() {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();
  return (
    <section id="tyres" className="bg-[#F6F1E7] py-24">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow !text-[#A87B33]">Our Range</div>
          <h2 className="mt-4 font-clash text-4xl font-semibold leading-tight tracking-tight text-[#14110D] md:text-5xl">
            Tyres for{" "}
            <span className="font-serif-italic text-gold-grad" style={{ fontWeight: 600 }}>All Conditions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#7C7568]">
            EU-label spec ratings across our most-requested truck and bus
            tyres. Updated with full product details soon.
          </p>
        </div>

        <div
          ref={ref}
          className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3"
        >
          {tyres.map((t, i) => (
            <div
              key={t.name}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              className={inView ? "animate-fade-in-up" : "opacity-0"}
            >
              <TyreSpecCard tyre={t} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button as="a" href="#contact" variant="ghost">Find Your Tyre</Button>
        </div>
      </div>
    </section>
  );
}