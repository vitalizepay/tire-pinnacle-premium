import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logoAsset from "@/assets/qasr-logo.png.asset.json";
import { nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Qasr Al Bustan Tyres" className="h-24 w-24 object-contain" width={96} height={96} />
              <div>
                <div className="text-base font-bold leading-tight">Qasr Al Bustan</div>
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand">Truck Tyres</div>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Premium tyres, professional service, trusted by drivers and fleets across the UAE since day one.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Navigate</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="transition hover:text-brand">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Fleet & Workshop</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li><Link to="/fleet" className="transition hover:text-brand">Fleet Solutions</Link></li>
              <li><Link to="/about" className="transition hover:text-brand">About Us</Link></li>
              <li><Link to="/contact" className="transition hover:text-brand">Contact</Link></li>
              <li><Link to="/blog" className="transition hover:text-brand">Insights</Link></li>
            </ul>
          </div>


          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Get in Touch</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" /><span>{site.address}</span></li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" /><a href={`tel:${site.phone}`} className="hover:text-white">{site.phoneDisplay}</a></li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
              <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" /><span>{site.hours}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Qasr Al Bustan Tyres. All rights reserved.</p>
          <p>قصر البستان للإطارات — Sharjah, United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
}
