import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const list = [...testimonials, ...testimonials, ...testimonials];
  const [i, setI] = useState(testimonials.length);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setI((v) => v + 1);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  // wrap silently
  useEffect(() => {
    if (i >= testimonials.length * 2) {
      const t = setTimeout(() => setI(testimonials.length), 700);
      return () => clearTimeout(t);
    }
  }, [i]);

  return (
    <section
      className="bg-[#0C0C0E] py-28"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow !text-[#C8A45C]">Trusted by Fleets Across the UAE</div>
          <h2 className="mt-4 font-clash text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            What Our{" "}
            <span className="font-serif-italic text-gold-grad" style={{ fontWeight: 500 }}>Customers</span>{" "}
            Say
          </h2>
        </div>

        <div className="relative mt-14 overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(calc(-${i} * (min(100%, 420px) + 24px) + 50% - min(50%, 210px)))`,
              transition: i === testimonials.length ? "none" : "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {list.map((t, idx) => (
              <div key={idx} className="w-[min(100%,420px)] shrink-0 px-3">
                <div className="h-full rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
                  <Quote className="h-7 w-7 text-[#C8A45C]" />
                  <p className="mt-5 text-base leading-relaxed text-white/85">"{t.quote}"</p>
                  <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-5">
                    <img src={t.avatar} alt="" loading="lazy" className="h-11 w-11 rounded-full object-cover ring-1 ring-[#C8A45C]/40" />
                    <div>
                      <div className="text-sm font-semibold text-white">{t.name}</div>
                      <div className="flex items-center gap-1.5 text-xs text-white/55">
                        <ArrowRight className="h-3 w-3 text-[#C8A45C]" />
                        {t.role} · {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          <button
            aria-label="Previous"
            onClick={() => setI((v) => v - 1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#C8A45C]/30 text-white transition hover:bg-[#C8A45C]/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next"
            onClick={() => setI((v) => v + 1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#C8A45C]/30 text-white transition hover:bg-[#C8A45C]/10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}