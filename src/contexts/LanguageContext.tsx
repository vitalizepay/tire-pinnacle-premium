import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar" | "fa";

type Entry = { en: string; ar: string; fa?: string };
type Dict = Record<string, Entry>;

export const dict = {
  brand: { en: "Qasr Al Bustan Tyres", ar: "قصر البستان للإطارات", fa: "قصر البستان تایرز" },
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

  // Commercial Tyres
  commEyebrow: { en: "Commercial Range", ar: "التشكيلة التجارية" },
  commTitle: { en: "Commercial Tyres Built For Business", ar: "إطارات تجارية مصممة للأعمال" },
  commDesc: {
    en: "Premium truck, bus and commercial vehicle tyres for transport companies, logistics providers, construction fleets and industrial vehicles across the UAE.",
    ar: "نوفر إطارات عالية الجودة للشاحنات والحافلات والمركبات التجارية في جميع أنحاء الإمارات لشركات النقل واللوجستيات وأساطيل البناء والمركبات الصناعية.",
  },
  commB1: { en: "Longer tyre life", ar: "عمر تشغيل أطول" },
  commB2: { en: "Better fuel efficiency", ar: "استهلاك وقود أقل" },
  commB3: { en: "Lower operating costs", ar: "تكلفة تشغيل أقل" },
  commB4: { en: "Maximum safety", ar: "أعلى مستويات الأمان" },
  commB5: { en: "Reliable performance", ar: "أداء موثوق" },
  commCta: { en: "View Commercial Range", ar: "استعرض المنتجات" },

  // Feature cards
  fc1Title: { en: "Premium Truck Tyres", ar: "إطارات شاحنات عالية الجودة" },
  fc1Desc: { en: "Long-lasting tyres engineered for regional and long-haul transport with maximum mileage and safety.", ar: "إطارات مصممة لتحمل المسافات الطويلة وتوفير أفضل أداء وأمان." },
  fc2Title: { en: "Fleet Management Solutions", ar: "حلول إدارة الأساطيل" },
  fc2Desc: { en: "Reduce operating costs with tyre inspections, monitoring and scheduled maintenance.", ar: "نساعدك على تقليل التكاليف من خلال الفحص والصيانة الدورية." },
  fc3Title: { en: "Professional Fleet Support", ar: "دعم متخصص للأساطيل" },
  fc3Desc: { en: "Dedicated support for transport companies, logistics providers and commercial fleets.", ar: "خدمات احترافية لشركات النقل والخدمات اللوجستية." },

  // Why choose us
  whyEyebrow: { en: "Why Choose Us", ar: "لماذا تختارنا" },
  whyTitleA: { en: "The Standard For", ar: "المعيار الأول" },
  whyTitleB: { en: "Commercial Tyres", ar: "للإطارات التجارية" },
  why1: { en: "Genuine Products", ar: "منتجات أصلية" },
  why2: { en: "Premium Brands", ar: "ماركات عالمية" },
  why3: { en: "Fleet Specialists", ar: "متخصصون في الأساطيل" },
  why4: { en: "Fast UAE Delivery", ar: "توصيل سريع" },
  why5: { en: "Competitive Pricing", ar: "أسعار تنافسية" },
  why6: { en: "Professional Support", ar: "دعم احترافي" },

  // Tyre sizes custom CTA
  tsCustomCta: { en: "Request Custom Size", ar: "طلب مقاس خاص" },
  tsContactSales: { en: "Contact Sales", ar: "تواصل مع المبيعات" },

  // Find us
  findUsWhats: { en: "WhatsApp", ar: "واتساب" },
  findUsDirections: { en: "Get Directions", ar: "الاتجاهات" },

  // Premium banner
  bannerEyebrow: { en: "Built for UAE Roads", ar: "مصنوعة لطرق الإمارات", fa: "ساخته‌شده برای جاده‌های امارات" },
  bannerTitle1: { en: "Uncompromising Durability.", ar: "متانة لا تلين.", fa: "دوام بی‌تردید." },
  bannerTitle2: { en: "Everyday Reliability.", ar: "أداء موثوق كل يوم.", fa: "اطمینان روزانه." },
  bannerDesc: {
    en: "From city highways to desert routes — our premium tyre range is engineered for safety, performance and the toughest UAE climates.",
    ar: "من الطرق السريعة في المدن إلى مسارات الصحراء — إطاراتنا الفاخرة مصممة للأمان والأداء وأقسى ظروف مناخ الإمارات.",
    fa: "از بزرگراه‌های شهری تا مسیرهای بیابانی — لاستیک‌های پریمیوم ما برای ایمنی، عملکرد و سخت‌ترین شرایط اقلیمی امارات طراحی شده‌اند.",
  },
  bannerCta: { en: "Explore Our Tyres", ar: "استعرض إطاراتنا", fa: "مشاهده لاستیک‌ها" },

  // Vehicle Categories section
  vehEyebrow: { en: "Vehicle Categories", ar: "فئات المركبات", fa: "دسته‌بندی خودروها" },
  vehTitleA: { en: "Tyres for", ar: "إطارات لـ", fa: "لاستیک برای" },
  vehTitleB: { en: "Every Vehicle.", ar: "كل مركبة.", fa: "هر خودرو." },
  vehDesc: {
    en: "From passenger cars and SUVs to heavy trucks, buses and off-road buggies — explore our full commercial range.",
    ar: "من سيارات الركاب والدفع الرباعي إلى الشاحنات الثقيلة والحافلات وعربات الطرق الوعرة — استعرض تشكيلتنا التجارية الكاملة.",
    fa: "از خودروی سواری و شاسی‌بلند تا کامیون سنگین، اتوبوس و باگی آفرود — تشکیلات کامل ما را ببینید.",
  },

  // Tyres page
  tyresHeroTitle: { en: "Golden Horse Tyre Range", ar: "تشكيلة إطارات جولدن هورس", fa: "مجموعه لاستیک گلدن هورس" },
  tyresHeroSub: {
    en: "Premium tyres engineered for every journey. Explore our complete range for passenger cars, SUVs, commercial vans, medium trucks, heavy trucks, buses, and off-road vehicles across the UAE.",
    ar: "إطارات فاخرة مصممة لكل رحلة. استعرض تشكيلتنا الكاملة لسيارات الركاب والدفع الرباعي والفانات التجارية والشاحنات المتوسطة والثقيلة والحافلات والمركبات الوعرة في الإمارات.",
    fa: "لاستیک‌های پریمیوم برای هر سفر. مجموعه کامل ما را برای سواری، شاسی‌بلند، ون تجاری، کامیون متوسط و سنگین، اتوبوس و خودروهای آفرود در امارات ببینید.",
  },
  tyresSizes: { en: "Available sizes", ar: "المقاسات المتوفرة", fa: "سایزهای موجود" },
  tyresRequestQuote: { en: "Request Quote", ar: "طلب عرض سعر", fa: "درخواست قیمت" },
  tyresWhatsapp: { en: "WhatsApp", ar: "واتساب", fa: "واتساپ" },
  whyGHTitle: { en: "Why Choose Golden Horse", ar: "لماذا تختار جولدن هورس", fa: "چرا گلدن هورس" },
  whyGH1: { en: "Premium Rubber Technology", ar: "تقنية مطاط فاخرة", fa: "فناوری لاستیک پریمیوم" },
  whyGH2: { en: "Excellent Road Grip", ar: "التصاق ممتاز بالطريق", fa: "چسبندگی عالی جاده" },
  whyGH3: { en: "Long Tyre Life", ar: "عمر تشغيل طويل", fa: "عمر طولانی لاستیک" },
  whyGH4: { en: "Heat Resistance for UAE Climate", ar: "مقاومة للحرارة لمناخ الإمارات", fa: "مقاومت گرمایی برای اقلیم امارات" },
  whyGH5: { en: "High Load Capacity", ar: "سعة تحميل عالية", fa: "ظرفیت بار بالا" },
  whyGH6: { en: "Reliable Performance", ar: "أداء موثوق", fa: "عملکرد مطمئن" },
  whyGH7: { en: "UAE-Wide Availability", ar: "متوفرة في جميع أنحاء الإمارات", fa: "موجود در سراسر امارات" },
  helpTitle: { en: "Looking for the Right Tyre?", ar: "تبحث عن الإطار المناسب؟", fa: "به دنبال لاستیک مناسب هستید؟" },
  helpDesc: {
    en: "Our tyre specialists are ready to help you select the perfect tyre for your passenger car, SUV, commercial van, truck, bus, or off-road vehicle.",
    ar: "خبراؤنا مستعدون لمساعدتك في اختيار الإطار الأمثل لسيارتك أو الدفع الرباعي أو الفان التجاري أو الشاحنة أو الحافلة أو مركبة الطرق الوعرة.",
    fa: "متخصصان ما آماده‌اند تا در انتخاب لاستیک مناسب برای خودروی شما راهنمایی کنند.",
  },

  // Contact locations
  visitEyebrow: { en: "Visit Our Locations", ar: "زيارة مواقعنا", fa: "مکان‌های ما" },
  visitTitle: { en: "Find Us Across the UAE", ar: "اعثر علينا في الإمارات", fa: "ما را در امارات پیدا کنید" },
} satisfies Dict;

export type TKey = keyof typeof dict;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: TKey) => string };
const LanguageCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("qab.lang");
      if (stored === "en" || stored === "ar" || stored === "fa") setLangState(stored as Lang);
    } catch {}
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" || lang === "fa" ? "rtl" : "ltr");
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("qab.lang", l); } catch {}
  };

  const t = (k: TKey) => {
    const entry = dict[k] as Entry;
    return (entry[lang] ?? entry.fa ?? entry.en) as string;
  };
  return <LanguageCtx.Provider value={{ lang, setLang, t }}>{children}</LanguageCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageCtx);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const cycle = () => setLang(lang === "en" ? "ar" : lang === "ar" ? "fa" : "en");
  const label = lang === "en" ? "EN" : lang === "ar" ? "ع" : "فا";
  return (
    <button
      type="button"
      onClick={cycle}
      aria-label="Toggle language"
      className={
        "inline-flex h-10 items-center gap-1 rounded-full border border-[var(--line)] bg-white/80 px-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#14110D] transition hover:bg-white " +
        className
      }
    >
      <span className="text-[#C8A45C]" style={{ fontFamily: "system-ui" }}>{label}</span>
    </button>
  );
}