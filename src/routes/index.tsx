import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { FocusedTyreBand } from "@/components/sections/FocusedTyreBand";
import { FleetMontage } from "@/components/sections/FleetMontage";
import { IntroStatement } from "@/components/sections/IntroStatement";
import { ValueCards } from "@/components/sections/ValueCards";
import { FindTyres } from "@/components/sections/FindTyres";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { TyreSpecsSection } from "@/components/sections/TyreSpecsSection";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { Testimonials } from "@/components/sections/Testimonials";
import { FindUs } from "@/components/sections/FindUs";
import { PartnerCTA } from "@/components/sections/PartnerCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qasr Al Bustan Truck Tyres — Premium Commercial Tyres, Sharjah UAE" },
      { name: "description", content: "Specialists in heavy-duty truck tyres across the UAE. Long-haul, steer, off-road and urban delivery tyres with expert fitting and 24/7 fleet support." },
      { property: "og:title", content: "Qasr Al Bustan Truck Tyres — UAE" },
      { property: "og:description", content: "Premium truck tyres and fleet service across Sharjah and the UAE." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FocusedTyreBand />
      <FleetMontage />
      <IntroStatement />
      <ValueCards />
      <FindTyres />
      <FeatureCards />
      <TyreSpecsSection />
      <BrandMarquee />
      <Testimonials />
      <FindUs />
      <PartnerCTA />
    </>
  );
}
