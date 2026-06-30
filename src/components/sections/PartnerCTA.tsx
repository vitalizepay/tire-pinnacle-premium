import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import tyreThumb from "@/assets/tyre-truck.jpg";
import tyreThumb2 from "@/assets/tyre-truck-haul.jpg";
import tyreThumb3 from "@/assets/tyre-truck-steer.jpg";
import tyreThumb4 from "@/assets/tyre-truck-urban.jpg";
import avatar from "@/assets/qasr-logo.png.asset.json";
import { site } from "@/data/site";

const thumbs = [tyreThumb, tyreThumb2, tyreThumb3, tyreThumb4];

export function PartnerCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawn = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastSpawn.current < 80) return;
      lastSpawn.current = now;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const chip = document.createElement("div");
      const img = document.createElement("img");
      img.src = thumbs[Math.floor(Math.random() * thumbs.length)];
      img.alt = "";
      img.className = "h-full w-full object-cover";
      chip.appendChild(img);
      const rot = (Math.random() * 20 - 10).toFixed(1);
      Object.assign(chip.style, {
        position: "absolute",
        left: `${x - 28}px`,
        top: `${y - 28}px`,
        width: "56px",
        height: "56px",
        borderRadius: "14px",
        overflow: "hidden",
        pointerEvents: "none",
        boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
        border: "1px solid rgba(200,164,92,0.4)",
        transform: `rotate(${rot}deg) scale(1)`,
        opacity: "1",
        transition: "transform 1s ease-out, opacity 1s ease-out",
        zIndex: "5",
      });
      el.appendChild(chip);
      requestAnimationFrame(() => {
        chip.style.transform = `rotate(${rot}deg) scale(0.5)`;
        chip.style.opacity = "0";
      });
      setTimeout(() => chip.remove(), 1100);
    };

    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="bg-white px-6 py-16">
      <div
        ref={containerRef}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#F6F1E7] px-6 py-44 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]"
      >
        <div className="relative z-10 text-center">
          <h2 className="font-clash text-5xl font-semibold leading-tight tracking-tight text-[#14110D] md:text-7xl">
            Partner{" "}
            <span className="font-serif-italic text-gold-grad" style={{ fontWeight: 600 }}>With Us</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[#7C7568]">
            Talk to a tyre specialist about your fleet, your routes, and your
            cost-per-kilometre targets.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#0C0C0E] py-3 pl-2 pr-6 text-sm font-medium text-white shadow-[0_12px_30px_rgba(12,12,14,0.25)] transition hover:scale-105"
            >
              <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-white">
                <img src={avatar.url} alt="" className="h-8 w-8 object-contain" />
              </span>
              Talk to a Tyre Specialist
              <ArrowRight className="h-4 w-4 text-[#C8A45C] transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}