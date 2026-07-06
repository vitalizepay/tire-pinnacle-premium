import { MapPin, Clock, Navigation, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/Button";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { site } from "@/data/site";
import { useLang } from "@/contexts/LanguageContext";

export function FindUs() {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();
  const { t } = useLang();
  return (
    <section className="bg-white py-24">
      <div
        ref={ref}
        className={
          "container-x mx-auto max-w-6xl " +
          (inView ? "animate-fade-in-up" : "opacity-0")
        }
      >
        <div className="grid items-stretch gap-12 md:grid-cols-2">
          <div className="rounded-[28px] bg-[#F6F1E7] p-10">
            <div className="eyebrow !text-[#A87B33]">Visit Our Workshop</div>
            <h2 className="mt-4 font-clash text-4xl font-semibold leading-tight tracking-tight text-[#14110D] md:text-5xl">
              Find Us in{" "}
              <span className="font-serif-italic text-gold-grad" style={{ fontWeight: 600 }}>Sharjah.</span>
            </h2>
            <p className="mt-4 max-w-md text-[#7C7568]">
              Walk in for an inspection, fitting or fleet consultation — we're
              open 7 days a week.
            </p>

            <div className="mt-8 space-y-5 text-[15px]">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A45C]" />
                <div>
                  <div className="font-semibold text-[#14110D]">Address</div>
                  <div className="text-[#7C7568]">{site.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A45C]" />
                <div>
                  <div className="font-semibold text-[#14110D]">Hours</div>
                  <div className="text-[#7C7568]">{site.hours}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href={site.mapDirections} target="_blank" rel="noreferrer" variant="gold">
                <Navigation className="h-4 w-4" /> {t("findUsDirections")}
              </Button>
              <Button as="a" href={`tel:${site.phone}`} variant="callnow">
                <Phone className="h-4 w-4" /> {site.phoneDisplay}
              </Button>
              <Button as="a" href={site.whatsapp} target="_blank" rel="noreferrer" variant="ghost-dark">
                <MessageCircle className="h-4 w-4" /> {t("findUsWhats")}
              </Button>
            </div>
          </div>

          <div>
            <a
              href={site.mapOpen}
              target="_blank"
              rel="noreferrer"
              className="relative block overflow-hidden rounded-[28px] border border-[var(--line)] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.25)]"
            >
              <iframe
                src={site.mapEmbed}
                title="Qasr Al Bustan Truck Tyres — Sharjah location"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
            <p className="mt-3 text-center text-xs text-[#7C7568]">Click map for directions</p>
          </div>
        </div>
      </div>
    </section>
  );
}