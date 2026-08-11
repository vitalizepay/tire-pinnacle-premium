import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import heroVideo from "@/assets/hero-truck-cinematic.mp4.asset.json";
import heroVideo2 from "@/assets/hero-tyre-cinematic.mp4.asset.json";
import poster from "@/assets/hero-truck-premium.jpg";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sources = [heroVideo.url, heroVideo2.url];
  const indexRef = useRef(0);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    let raf = 0;
    const FADE = 0.6;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const d = v.duration;
      if (!d || isNaN(d)) return;
      const t = v.currentTime;
      let op = 1;
      if (t < FADE) op = t / FADE;
      else if (t > d - FADE) op = Math.max(0, (d - t) / FADE);
      v.style.opacity = String(op);
    };
    const onEnded = () => {
      v.style.opacity = "0";
      setTimeout(() => {
        indexRef.current = (indexRef.current + 1) % sources.length;
        v.src = sources[indexRef.current];
        v.load();
        v.play().catch(() => {});
      }, 120);
    };
    v.addEventListener("ended", onEnded);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      v.removeEventListener("ended", onEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#0C0C0E]"
    >
      <div className="absolute inset-0 animate-ken-burns">
        <video
          ref={videoRef}
          src={heroVideo.url}
          poster={poster}
          autoPlay
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

      <div className="relative z-10 min-h-[70vh] sm:min-h-screen" />

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-cue">
        <div className="h-10 w-px bg-gradient-to-b from-transparent to-[#C8A45C]" />
        <ChevronDown className="h-4 w-4 text-[#C8A45C]" />
      </div>
    </section>
  );
}