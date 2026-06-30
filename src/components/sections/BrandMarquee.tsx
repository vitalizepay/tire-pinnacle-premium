import { useLang } from "@/contexts/LanguageContext";

export function BrandMarquee() {
  const { t } = useLang();
  return (
    <section className="bg-white py-20">
      <div className="container-x text-center">
        <div className="eyebrow !text-[#A87B33]">{t("availEyebrow")}</div>
        <h2 className="mt-5 font-clash text-4xl font-semibold tracking-tight text-[#14110D] md:text-5xl">
          {t("availTitleA")}{" "}
          <span className="font-serif-italic text-gold-grad" style={{ fontWeight: 500 }}>
            {t("availTitleB")}
          </span>{" "}
          {t("availTitleC")}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#7C7568]">
          {t("availDesc")}
        </p>
      </div>
    </section>
  );
}