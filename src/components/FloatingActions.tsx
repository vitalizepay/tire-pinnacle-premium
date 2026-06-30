import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setPct(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-[2px] bg-transparent">
      <div
        className="h-full bg-gold-grad transition-[width] duration-100"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function PulseRingBtn({
  href,
  bg,
  label,
  children,
  target,
}: {
  href: string;
  bg: string;
  label: string;
  children: React.ReactNode;
  target?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target ? "noreferrer" : undefined}
      aria-label={label}
      className="relative grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:scale-110"
      style={{ background: bg }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full animate-pulse-ring"
        style={{ background: bg, opacity: 0.55 }}
      />
      <span className="relative">{children}</span>
    </a>
  );
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <PulseRingBtn href={site.whatsapp} target="_blank" bg="#25D366" label="WhatsApp">
        <MessageCircle className="h-6 w-6" />
      </PulseRingBtn>
      <PulseRingBtn href={`tel:${site.phone}`} bg="#C0392B" label="Call us">
        <Phone className="h-5 w-5" />
      </PulseRingBtn>
    </div>
  );
}
