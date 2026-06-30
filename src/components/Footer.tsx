import { ArrowUp, MapPin, Phone, Mail, Clock } from "lucide-react";
import logoAsset from "@/assets/qasr-logo.png.asset.json";
import { site } from "@/data/site";

const col1 = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Fleet Solutions", href: "#fleet" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];
const col2 = [
  { label: "Fleet Solutions", href: "#fleet" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Insights", href: "#insights" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0C0C0E] text-white/70">
      <div className="container-x py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <img src={logoAsset.url} alt="Qasr Al Bustan Tyres" className="h-14 w-14 object-contain" />
            <div>
              <div className="font-clash text-lg font-semibold text-white">Qasr Al Bustan</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C8A45C]">Truck Tyres</div>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-white/60">
            Premium tyres, professional service — trusted by drivers and fleets across the UAE since day one.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-3">
          <div>
            <h4 className="eyebrow !text-[#C8A45C]">Navigate</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {col1.map((n) => (
                <li key={n.label}><a href={n.href} className="transition hover:text-[#C8A45C]">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="eyebrow !text-[#C8A45C]">Fleet & Workshop</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {col2.map((n) => (
                <li key={n.label}><a href={n.href} className="transition hover:text-[#C8A45C]">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="eyebrow !text-[#C8A45C]">Get in Touch</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C8A45C]" /><span>{site.address}</span></li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#C8A45C]" /><a href={`tel:${site.phone}`} className="hover:text-white">{site.phoneDisplay}</a></li>
              <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#C8A45C]" /><span>{site.hours}</span></li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#C8A45C]" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Qasr Al Bustan Tyres. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-[#C8A45C] transition hover:text-[#E6C57A]"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
