export type TyreCategory = {
  slug: string;
  titleEn: string;
  titleAr: string;
  titleFa: string;
  descEn: string;
  descAr: string;
  descFa: string;
  image: string;
  sizes: string[];
};

import passenger from "@/assets/cat-passenger.jpg";
import suv from "@/assets/cat-suv.jpg";
import van from "@/assets/cat-van.jpg";
import medium from "@/assets/cat-medium-truck.jpg";
import heavy from "@/assets/cat-heavy-truck.jpg";
import bus from "@/assets/cat-bus.jpg";
import buggy from "@/assets/cat-buggy.jpg";

export const tyreCategories: TyreCategory[] = [
  {
    slug: "passenger-car",
    titleEn: "Passenger Car",
    titleAr: "سيارات الركاب",
    titleFa: "خودروی سواری",
    descEn:
      "Premium tyres engineered for daily driving, superior comfort, fuel efficiency, excellent road grip, and long-lasting performance.",
    descAr:
      "إطارات فاخرة مصممة للقيادة اليومية وراحة فائقة وكفاءة استهلاك وقود وثبات ممتاز على الطريق وأداء طويل الأمد.",
    descFa:
      "لاستیک‌های پریمیوم برای رانندگی روزانه، راحتی، مصرف بهینه سوخت، چسبندگی عالی و عملکرد طولانی‌مدت.",
    image: passenger,
    sizes: [
      "175/70R14","185/70R14","185/60R15","195/65R15","205/55R16","205/60R16","215/55ZR16","215/45ZR17","215/55ZR17","225/45ZR17","225/40ZR18","225/45ZR18","235/45ZR18","245/40R18","235/40R19","255/40ZR19","275/35ZR19",
    ],
  },
  {
    slug: "suv-4x4",
    titleEn: "SUV & 4×4",
    titleAr: "الدفع الرباعي",
    titleFa: "شاسی‌بلند و ۴×۴",
    descEn:
      "Durable tyres designed for SUVs and crossovers with excellent traction, comfort, and all-terrain capability.",
    descAr:
      "إطارات متينة للسيارات الرياضية متعددة الاستخدامات مع تماسك ممتاز وراحة وقدرة على جميع التضاريس.",
    descFa:
      "لاستیک‌های مقاوم برای شاسی‌بلندها با چسبندگی عالی، راحتی و توانایی در تمام سطوح.",
    image: suv,
    sizes: [
      "215/60R16","225/55ZR17","235/55ZR18","245/45ZR18","225/65R17","225/60R18","235/55R19","235/55ZR20","245/45ZR20","265/60R18","265/65R17","265/70R16","275/40R21","275/45R21","275/55ZR20","275/60ZR20","285/45ZR22","315/35ZR20",
    ],
  },
  {
    slug: "commercial-van",
    titleEn: "Commercial Van",
    titleAr: "الشاحنات التجارية الصغيرة",
    titleFa: "ون تجاری",
    descEn:
      "Heavy-duty commercial tyres engineered for delivery fleets and transport businesses.",
    descAr:
      "إطارات تجارية للخدمة الشاقة مصممة لأساطيل التوصيل وشركات النقل.",
    descFa:
      "لاستیک‌های تجاری قدرتمند برای ناوگان توزیع و حمل‌ونقل.",
    image: van,
    sizes: ["205/65R15","205/70R15","225/70R16","235/70R16"],
  },
  {
    slug: "medium-truck",
    titleEn: "Medium Truck",
    titleAr: "الشاحنات المتوسطة",
    titleFa: "کامیون متوسط",
    descEn:
      "Reliable tyres built for cargo distribution with outstanding stability and extended mileage.",
    descAr:
      "إطارات موثوقة لتوزيع البضائع مع ثبات ممتاز وعمر تشغيل طويل.",
    descFa:
      "لاستیک‌های مطمئن برای توزیع بار با ثبات فوق‌العاده و کیلومتراژ بالا.",
    image: medium,
    sizes: ["9.5R17.5","235/75R17.5"],
  },
  {
    slug: "heavy-truck",
    titleEn: "Heavy Truck",
    titleAr: "الشاحنات الثقيلة",
    titleFa: "کامیون سنگین",
    descEn:
      "Premium heavy-duty tyres engineered for logistics, industrial transport, and construction fleets.",
    descAr:
      "إطارات فاخرة للخدمة الشاقة للشحن واللوجستيات والنقل الصناعي وأساطيل البناء.",
    descFa:
      "لاستیک‌های سنگین پریمیوم برای لجستیک، حمل صنعتی و ناوگان ساخت‌وساز.",
    image: heavy,
    sizes: ["275/70R22.5","295/80R22.5","11R22.5","315/70R22.5","315/80R22.5","385/55R22.5","385/65R22.5","12.00R24"],
  },
  {
    slug: "bus",
    titleEn: "Bus",
    titleAr: "الحافلات",
    titleFa: "اتوبوس",
    descEn:
      "Safe, durable, and comfortable tyres designed for city buses, school buses, and long-distance coaches.",
    descAr:
      "إطارات آمنة ومتينة ومريحة لحافلات المدينة والمدارس والحافلات السياحية.",
    descFa:
      "لاستیک‌های ایمن، بادوام و راحت برای اتوبوس‌های شهری، مدرسه و بین‌شهری.",
    image: bus,
    sizes: ["9.5R17.5","235/75R17.5","275/70R22.5","295/80R22.5","11R22.5"],
  },
  {
    slug: "offroad-buggy",
    titleEn: "Off-road Buggy",
    titleAr: "عربات الطرق الوعرة",
    titleFa: "باگی آفرود",
    descEn:
      "Extreme-performance tyres built for sand dunes, desert trails, rough terrain, and construction environments.",
    descAr:
      "إطارات عالية الأداء للكثبان الرملية والصحراء والتضاريس الوعرة ومواقع البناء.",
    descFa:
      "لاستیک‌های با کارایی بالا برای تپه‌های شنی، بیابان و زمین‌های ناهموار.",
    image: buggy,
    sizes: ["265/65R17","265/70R16","325/95R24","12.00R24"],
  },
];