import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/qasr-logo.png.asset.json";
import { site } from "@/data/site";
import { Button } from "@/components/Button";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Fleet Solutions", href: "#fleet" },
  { label: "Tyres", href: "#tyres" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-3 md:px-6">
      <div
        className={
          "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-[var(--line)] bg-white/70 backdrop-blur-xl transition-all duration-300 " +
          (scrolled
            ? "px-4 py-2 shadow-[0_10px_40px_-15px_rgba(12,12,14,0.25)] bg-white/85"
            : "px-5 py-3 shadow-[0_20px_60px_-20px_rgba(12,12,14,0.18)]")
        }
      >
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Qasr Al Bustan Tyres"
            className="h-11 w-11 object-contain"
          />
          <div className="hidden leading-tight sm:block">
            <div className="font-clash text-[15px] font-semibold tracking-tight text-[#14110D]">
              Qasr Al Bustan
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C8A45C]">
              Truck Tyres
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="story-link text-[14px] font-medium text-[#7C7568] transition-colors hover:text-[#14110D]"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="hidden h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white shadow-sm transition hover:scale-105 md:grid"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <Button
            as="a"
            href={`tel:${site.phone}`}
            variant="callnow"
            className="hidden md:inline-flex px-5 py-2.5 text-[13px]"
          >
            <Phone className="h-4 w-4" /> Call Now
          </Button>
          <button
            type="button"
            aria-label="Menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] bg-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-5 w-5 text-[#14110D]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-[#0C0C0E] px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="" className="h-10 w-10" />
              <div className="font-clash text-white">Qasr Al Bustan</div>
            </div>
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-4">
            {links.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-clash text-3xl text-gold-grad opacity-0 animate-fade-rise"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <Button as="a" href={`tel:${site.phone}`} variant="callnow">
              <Phone className="h-4 w-4" /> {site.phoneDisplay}
            </Button>
            <Button as="a" href={site.whatsapp} target="_blank" rel="noreferrer" variant="gold">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
