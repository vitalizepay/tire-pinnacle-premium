import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/Button";
import heroVideo from "@/assets/hero-truck-cinematic.mp4.asset.json";
import heroVideo2 from "@/assets/hero-tyre-cinematic.mp4.asset.json";
import poster from "@/assets/hero-truck-premium.jpg";
import { useLang } from "@/contexts/LanguageContext";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sources = [heroVideo.url, heroVideo2.url];
  const indexRef = useRef(0);
  const { t } = useLang();

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

      <div className="container-x relative z-10 flex min-h-screen flex-col justify-center pt-32 pb-24">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-[#C8A45C]/40 bg-white/5 px-4 py-1.5 backdrop-blur-md opacity-0 animate-fade-rise"
            style={{ animationDelay: "0s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8A45C]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E6C57A]">
              {t("heroEyebrow")}
            </span>
          </div>

          <h1
            className="mt-7 font-clash text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-white sm:text-7xl md:text-8xl opacity-0 animate-fade-rise"
            style={{ animationDelay: "0.15s", textShadow: "0 6px 30px rgba(0,0,0,0.6)" }}
          >
            {t("heroTitle1")}
          </h1>
          <div
            className="font-serif-italic text-5xl leading-[0.95] tracking-tight text-gold-grad sm:text-7xl md:text-8xl opacity-0 animate-fade-rise"
            style={{ animationDelay: "0.3s", fontWeight: 500 }}
          >
            {t("heroTitle2")}
          </div>

          <p
            className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg opacity-0 animate-fade-rise"
            style={{ animationDelay: "0.45s" }}
          >
            {t("heroDesc")}
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-rise"
            style={{ animationDelay: "0.6s" }}
          >
            <Button as="a" href="#tyres" variant="gold">{t("heroCta1")}</Button>
            <Button as="a" href="#contact" variant="ghost-dark">{t("heroCta2")}</Button>
          </div>

          <div
            className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/55 opacity-0 animate-fade-rise"
            style={{ animationDelay: "0.75s" }}
          >
            <span>{t("heroBadge1")}</span>
            <span className="text-white/25">·</span>
            <span>{t("heroBadge2")}</span>
            <span className="text-white/25">·</span>
            <span>{t("heroBadge3")}</span>
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