import { useEffect, useState } from "react";
import { Phone, Instagram } from "lucide-react";
import { site } from "@/data/site";

function WhatsAppLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39-.184 0-.42-.163-.702-.264-2.019-.816-3.297-2.02-4.6-3.99-.408-.6-.696-1.03-.696-1.428 0-.596.98-.996.98-1.594 0-.086-.11-.36-.24-.66-.294-.694-.998-2.336-1.322-2.582-.322-.246-.63-.246-.916-.246-.288 0-.618 0-.948.014-.33.014-.66.164-.99.494-.33.33-1.32 1.294-1.32 3.156 0 1.86 1.352 3.66 1.502 3.912.15.252 2.632 4.19 6.454 5.7 3.822 1.51 3.822 1.006 4.512.942.688-.064 2.222-.906 2.538-1.782.316-.876.316-1.626.222-1.782-.094-.156-.34-.246-.712-.412l-2.244-.868z"/>
      <path d="M16.001 3C8.82 3 3 8.82 3 16c0 2.52.72 4.87 1.96 6.87L3.09 29l6.28-1.85A12.92 12.92 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16.001 3zm0 23.68c-2.09 0-4.03-.58-5.68-1.58l-.4-.24-3.72 1.1 1.12-3.62-.26-.42a10.66 10.66 0 0 1-1.63-5.73c0-5.9 4.8-10.7 10.7-10.7s10.7 4.8 10.7 10.7c-.02 5.9-4.82 10.7-10.83 10.7z"/>
    </svg>
  );
}

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
        <WhatsAppLogo className="h-7 w-7" />
      </PulseRingBtn>
      <PulseRingBtn href={`tel:${site.phone}`} bg="#C0392B" label="Call us">
        <Phone className="h-5 w-5" />
      </PulseRingBtn>
      <PulseRingBtn
        href={site.instagram}
        target="_blank"
        bg="linear-gradient(135deg,#F58529,#DD2A7B,#8134AF,#515BD4)"
        label="Instagram"
      >
        <Instagram className="h-5 w-5" />
      </PulseRingBtn>
    </div>
  );
}
