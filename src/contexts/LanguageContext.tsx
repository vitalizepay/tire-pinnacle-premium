import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, { en: string; ar: string }>;

export const dict = {
  brand: { en: "Qasr Al Bustan Tyres", ar: "قصر البستان للإطارات" },
  brandSub: { en: "Commercial Truck & Car Tyres", ar: "إطارات الشاحنات والسيارات التجارية" },
  navHome: { en: "Home", ar: "الرئيسية" },
  navAbout: { en: "About", ar: "من نحن" },
  navTyres: { en: "Tyres", ar: "الإطارات" },
  callNow: { en: "Call Now", ar: "اتصل الآن" },

  heroEyebrow: { en: "Commercial Truck Tyre Specialists", ar: "متخصصون في إطارات الشاحنات التجارية" },
  heroTitle1: { en: "Heavy-duty Truck Tyres", ar: "إطارات شاحنات للخدمة الشاقة" },
  heroTitle2: { en: "Built for Every Journey.", ar: "صُمّمت لكل رحلة." },
  heroDesc: {
    en: "Premium commercial truck tyre solutions engineered for maximum mileage, durability, safety, and fleet performance across the UAE.",
    ar: "حلول إطارات شاحنات تجارية فاخرة مُصمَّمة لأقصى مسافة وأقصى متانة وأعلى أمان وأداء أساطيل متميّز في جميع أنحاء الإمارات.",
  },
  heroCta1: { en: "Explore Our Tyres", ar: "استعرض إطاراتنا" },
  heroCta2: { en: "Talk to a Specialist", ar: "تحدث مع مختص" },
  heroBadge1: { en: "Authorised supply", ar: "توريد معتمد" },
  heroBadge2: { en: "Certified technicians", ar: "فنيون معتمدون" },
  heroBadge3: { en: "Fleet programmes", ar: "برامج الأساطيل" },

  vc1Title: { en: "Genuine Premium", ar: "أصلية وفاخرة" },
  vc1Desc: { en: "Authorised supply of leading global truck-tyre brands.", ar: "توريد معتمد لأبرز ماركات إطارات الشاحنات العالمية." },
  vc2Title: { en: "Precision Service", ar: "خدمة دقيقة" },
  vc2Desc: { en: "Laser alignment and dynamic balancing by certified technicians.", ar: "ضبط زوايا بالليزر وموازنة ديناميكية بأيدي فنيين معتمدين." },
  vc3Title: { en: "Fleet Specialists", ar: "متخصصو الأساطيل" },
  vc3Desc: { en: "Custom programmes for transport and logistics fleets.", ar: "برامج مخصّصة لأساطيل النقل واللوجستيات." },

  findEyebrow: { en: "Explore Our Range", ar: "تصفح تشكيلتنا" },
  findTitleA: { en: "Find Your", ar: "اعثر على" },
  findTitleB: { en: "Truck & Car Tyres", ar: "إطارات شاحنتك وسيارتك" },
  findDesc: { en: "From long-haul highway to interregional and urban delivery — the right tyre for every kilometre.", ar: "من الطرق السريعة الطويلة إلى التوصيل بين المدن وداخلها — الإطار المناسب لكل كيلومتر." },
  findCta: { en: "Browse Tyres", ar: "تصفح الإطارات" },

  availEyebrow: { en: "Tyre Availability", ar: "توفر الإطارات" },
  availTitleA: { en: "All sizes and", ar: "جميع المقاسات و" },
  availTitleB: { en: "custom tyres", ar: "الإطارات المخصصة" },
  availTitleC: { en: "are available", ar: "متوفرة لدينا" },
  availDesc: { en: "Whatever the spec — fleet, commercial, off-road or special order — we source and fit it.", ar: "أيًّا كانت المواصفات — أساطيل، تجاري، طرق وعرة أو طلب خاص — نوفّرها ونركّبها." },

  footerTagline: { en: "Premium tyres, professional service — trusted by drivers and fleets across the UAE since day one.", ar: "إطارات فاخرة وخدمة احترافية — موثوقة لدى السائقين والأساطيل في الإمارات منذ اليوم الأول." },
  footerNavigate: { en: "Navigate", ar: "تصفح" },
  footerFleet: { en: "Fleet & Workshop", ar: "الأساطيل والورشة" },
  footerContact: { en: "Get in Touch", ar: "تواصل معنا" },
  footerBackTop: { en: "Back to top", ar: "إلى الأعلى" },
  footerRights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
} satisfies Dict;

export type TKey = keyof typeof dict;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: TKey) => string };
const LanguageCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("qab.lang");
      if (stored === "en" || stored === "ar") setLangState(stored);
    } catch {}
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("qab.lang", l); } catch {}
  };

  const t = (k: TKey) => dict[k][lang];
  return <LanguageCtx.Provider value={{ lang, setLang, t }}>{children}</LanguageCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageCtx);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      aria-label="Toggle language"
      className={
        "inline-flex h-10 items-center gap-1 rounded-full border border-[var(--line)] bg-white/80 px-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#14110D] transition hover:bg-white " +
        className
      }
    >
      <span className={lang === "en" ? "text-[#C8A45C]" : "opacity-50"}>EN</span>
      <span className="opacity-30">/</span>
      <span className={lang === "ar" ? "text-[#C8A45C]" : "opacity-50"} style={{ fontFamily: "system-ui" }}>ع</span>
    </button>
  );
}