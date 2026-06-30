import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/Button";
import heroVideo from "@/assets/hero-truck-cinematic.mp4.asset.json";
import tyreVideo from "@/assets/tyre-focus-loop.webm.asset.json";
import poster from "@/assets/hero-truck-premium.jpg";

export function Hero() {
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const a = videoARef.current;
    const b = videoBRef.current;
    if (!a || !b) return;
    const FADE = 0.6;
    let raf = 0;
    let active: HTMLVideoElement = a;
    let inactive: HTMLVideoElement = b;

    a.style.opacity = "0";
    b.style.opacity = "0";
    a.play().catch(() => {});

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const d = active.duration;
      if (!d || isNaN(d)) return;
      const t = active.currentTime;
      let op = 1;
      if (t < FADE) op = t / FADE;
      else if (t > d - FADE) op = Math.max(0, (d - t) / FADE);
      active.style.opacity = String(op);
    };

    const swap = () => {
      const next = inactive;
      const prev = active;
      prev.style.opacity = "0";
      try { prev.pause(); prev.currentTime = 0; } catch {}
      active = next;
      inactive = prev;
      active.currentTime = 0;
      active.play().catch(() => {});
    };

    a.addEventListener("ended", swap);
    b.addEventListener("ended", swap);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      a.removeEventListener("ended", swap);
      b.removeEventListener("ended", swap);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#0C0C0E]"
    >
      <div className="absolute inset-0 animate-ken-burns">
        <video
          ref={videoARef}
          src={heroVideo.url}
          poster={poster}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          style={{ opacity: 0 }}
        />
        <video
          ref={videoBRef}
          src={tyreVideo.url}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          style={{ opacity: 0 }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-[#0C0C0E]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 90%, rgba(200,164,92,0.18), transparent 55%)",
        }}
      />

      <div className="container-x relative z-10 flex min-h-screen flex-col justify-center pt-32 pb-24">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-[#C8A45C]/40 bg-white/5 px-4 py-1.5 backdrop-blur-md opacity-0 animate-fade-rise"
            style={{ animationDelay: "0s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8A45C]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E6C57A]">
              Commercial Truck Tyre Specialists
            </span>
          </div>

          <h1
            className="mt-7 font-clash text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-white sm:text-7xl md:text-8xl opacity-0 animate-fade-rise"
            style={{ animationDelay: "0.15s", textShadow: "0 6px 30px rgba(0,0,0,0.6)" }}
          >
            Heavy-duty Truck Tyres
          </h1>
          <div
            className="font-serif-italic text-5xl leading-[0.95] tracking-tight text-gold-grad sm:text-7xl md:text-8xl opacity-0 animate-fade-rise"
            style={{ animationDelay: "0.3s", fontWeight: 500 }}
          >
            Built for Every Journey.
          </div>

          <p
            className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg opacity-0 animate-fade-rise"
            style={{ animationDelay: "0.45s" }}
          >
            Premium commercial truck tyre solutions engineered for maximum mileage, durability, safety, and fleet performance across the UAE.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-rise"
            style={{ animationDelay: "0.6s" }}
          >
            <Button as="a" href="#tyres" variant="gold">Explore Our Tyres</Button>
            <Button as="a" href="#contact" variant="ghost-dark">Talk to a Specialist</Button>
          </div>

          <div
            className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/55 opacity-0 animate-fade-rise"
            style={{ animationDelay: "0.75s" }}
          >
            <span>Authorised supply</span>
            <span className="text-white/25">·</span>
            <span>Certified technicians</span>
            <span className="text-white/25">·</span>
            <span>Fleet programmes</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-cue">
        <div className="h-10 w-px bg-gradient-to-b from-transparent to-[#C8A45C]" />
        <ChevronDown className="h-4 w-4 text-[#C8A45C]" />
      </div>
    </section>
  );
}