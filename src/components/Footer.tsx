import { ArrowUp, MapPin, Phone, Mail } from "lucide-react";
import { site } from "@/data/site";
import { useLang, type TKey } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLang();
  const col1: { key: TKey; href: string }[] = [
    { key: "navHome", href: "#home" },
    { key: "navAbout", href: "#about" },
    { key: "navTyres", href: "#tyres" },
  ];
  const col2: { key: TKey; href: string }[] = [
    { key: "navAbout", href: "#about" },
    { key: "navTyres", href: "#tyres" },
  ];
  return (
    <footer id="contact" className="bg-[#0C0C0E] text-white/70">
      <div className="container-x py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="font-clash text-2xl font-semibold text-white sm:text-3xl">{t("brand")}</div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C8A45C]">{t("brandSub")}</div>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-white/60">
            {t("footerTagline")}
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-3">
          <div>
            <h4 className="eyebrow !text-[#C8A45C]">{t("footerNavigate")}</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {col1.map((n) => (
                <li key={n.key + n.href}><a href={n.href} className="transition hover:text-[#C8A45C]">{t(n.key)}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="eyebrow !text-[#C8A45C]">{t("footerFleet")}</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {col2.map((n) => (
                <li key={n.key + n.href}><a href={n.href} className="transition hover:text-[#C8A45C]">{t(n.key)}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="eyebrow !text-[#C8A45C]">{t("footerContact")}</h4>
            <ul className="mt-5 space-y-5 text-sm">
              {site.locations.map((loc) => (
                <li key={loc.key} className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C8A45C]" />
                  <div>
                    <div className="font-semibold text-white">{loc.title}</div>
                    <div className="text-white/60">{loc.address}</div>
                  </div>
                </li>
              ))}
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#C8A45C]" /><a href={`tel:${site.phone}`} className="hover:text-white">{site.phoneDisplay}</a></li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#C8A45C]" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {t("brand")}. {t("footerRights")}</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-[#C8A45C] transition hover:text-[#E6C57A]"
          >
            {t("footerBackTop")} <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
