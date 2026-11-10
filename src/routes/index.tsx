import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { PremiumBanner } from "@/components/sections/PremiumBanner";
import { VehicleCategories } from "@/components/sections/VehicleCategories";
import { ValueCards } from "@/components/sections/ValueCards";
import { FindTyres } from "@/components/sections/FindTyres";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { FindUs } from "@/components/sections/FindUs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Car, SUV, Truck, Bus & JCB Tyres in Sharjah & Dubai | Qasr Al Bustan Tyres" },
      { name: "description", content: "Buy car, SUV, 4x4, van, truck, bus and JCB tyres in Sharjah and Dubai. All sizes and custom tyres available. Call or WhatsApp Qasr Al Bustan Tyres for a quick quote." },
      { property: "og:title", content: "Car, SUV, Truck, Bus & JCB Tyres in Sharjah & Dubai | Qasr Al Bustan Tyres" },
      { property: "og:description", content: "Buy car, SUV, 4x4, van, truck, bus and JCB tyres in Sharjah and Dubai. All sizes and custom tyres available. Call or WhatsApp Qasr Al Bustan Tyres for a quick quote." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://qasralbustantyres.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://qasralbustantyres.com/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({"@context":"https://schema.org","@type":"AutoPartsStore","name":"Qasr Al Bustan Tyres","url":"https://qasralbustantyres.com","telephone":"+971551452878","email":"qasralbustantyres@gmail.com","address":[{"@type":"PostalAddress","streetAddress":"Industrial Area C-14","addressLocality":"Sharjah","addressCountry":"AE"},{"@type":"PostalAddress","addressLocality":"Deira, Dubai","addressCountry":"AE"}],"areaServed":["Sharjah","Dubai","United Arab Emirates"],"sameAs":["https://www.instagram.com/qasralbustan.tyres/"]}) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <PremiumBanner />
      <VehicleCategories />
      <ValueCards />
      <FindTyres />
      <BrandMarquee />
      <Testimonials />
      <FindUs />
    </>
  );
}
