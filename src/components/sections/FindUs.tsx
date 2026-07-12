import { MapPin, Navigation, MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/Button";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { site } from "@/data/site";
import { useLang } from "@/contexts/LanguageContext";

export function FindUs() {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();
  const { t } = useLang();
  return (
    <section id="contact" className="bg-white py-24">
      <div
        ref={ref}
        className={"container-x mx-auto max-w-6xl " + (inView ? "animate-fade-in-up" : "opacity-0")}
      >
        <div className="text-center">
          <div className="eyebrow !text-[#A87B33]">{t("visitEyebrow")}</div>
          <h2 className="mt-4 font-clash text-4xl font-semibold leading-tight tracking-tight text-[#14110D] md:text-5xl">
            {t("visitTitle")}
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {site.locations.map((loc) => (
            <div key={loc.key} className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-[#F6F1E7]">
              <div className="p-8">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#C8A45C]" />
                  <div>
                    <div className="eyebrow !text-[#A87B33]">{loc.title}</div>
                    <div className="mt-1 font-clash text-2xl font-semibold text-[#14110D]">{loc.city}</div>
                    <div className="mt-1 text-sm text-[#7C7568]">{loc.address}</div>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Button as="a" href={loc.mapDirections} target="_blank" rel="noreferrer" variant="gold" className="px-5 py-2.5 text-xs">
                    <Navigation className="h-3.5 w-3.5" /> {t("findUsDirections")}
                  </Button>
                  <Button as="a" href={site.whatsapp} target="_blank" rel="noreferrer" variant="ghost" className="px-5 py-2.5 text-xs">
                    <MessageCircle className="h-3.5 w-3.5" /> {t("findUsWhats")}
                  </Button>
                </div>
              </div>
              <a href={loc.mapOpen} target="_blank" rel="noreferrer" className="block">
                <iframe
                  src={loc.mapEmbed}
                  title={loc.title}
                  className="h-[240px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button as="a" href={`tel:${site.phone}`} variant="callnow">
            <Phone className="h-4 w-4" /> {site.phoneDisplay}
          </Button>
          <Button as="a" href={`mailto:${site.email}`} variant="ghost">
            <Mail className="h-4 w-4" /> {site.email}
          </Button>
        </div>
      </div>
    </section>
  );
}