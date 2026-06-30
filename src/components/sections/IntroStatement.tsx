import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export function IntroStatement() {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();
  return (
    <section className="bg-white py-24">
      <div
        ref={ref}
        className={
          "container-x mx-auto max-w-4xl text-center text-xl leading-relaxed text-[#14110D] md:text-2xl " +
          (inView ? "animate-fade-in-up" : "opacity-0")
        }
      >
        Qasr Al Bustan commercial tyres are built for trucks, buses and vans —
        delivering greater load capacity, improved stability, safer handling and{" "}
        <span className="font-serif-italic text-gold-grad">outstanding durability</span>.
        Optimised tread for grip on every surface, sidewalls tuned for comfort,
        and value that compounds over every kilometre of{" "}
        <span className="font-serif-italic text-gold-grad">maximum mileage</span> and{" "}
        <span className="font-serif-italic text-gold-grad">fleet performance</span>{" "}
        <span className="font-serif-italic text-gold-grad">across the UAE</span>.
      </div>
    </section>
  );
}