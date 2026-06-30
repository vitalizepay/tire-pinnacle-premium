import { brands } from "@/data/brands";

export function BrandMarquee() {
  const row = [...brands, ...brands];
  return (
    <section className="bg-white py-16">
      <div className="container-x">
        <div className="text-center eyebrow !text-[#A87B33]">
          Authorised Supply of Leading Global Brands
        </div>
        <div className="mt-10 mask-fade-x overflow-hidden">
          <div
            className="flex w-max items-center gap-16 animate-marquee hover:[animation-play-state:paused]"
            style={{ animationDuration: "28s" }}
          >
            {row.map((b, i) => (
              <span
                key={i}
                className="font-clash whitespace-nowrap text-2xl font-semibold tracking-tight text-[#7C7568]/60 transition-colors hover:text-[#A87B33] md:text-3xl"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}