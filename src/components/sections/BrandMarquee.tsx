export function BrandMarquee() {
  return (
    <section className="bg-white py-20">
      <div className="container-x text-center">
        <div className="eyebrow !text-[#A87B33]">Tyre Availability</div>
        <h2 className="mt-5 font-clash text-4xl font-semibold tracking-tight text-[#14110D] md:text-5xl">
          All sizes and{" "}
          <span className="font-serif-italic text-gold-grad" style={{ fontWeight: 500 }}>
            custom tyres
          </span>{" "}
          are available
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#7C7568]">
          Whatever the spec — fleet, commercial, off-road or special order — we source and fit it.
        </p>
      </div>
    </section>
  );
}