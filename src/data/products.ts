import tyreHaul from "@/assets/tyre-truck-haul.jpg";
import tyreSteer from "@/assets/tyre-truck-steer.jpg";
import tyreOffroad from "@/assets/tyre-truck-offroad.jpg";
import tyreUrban from "@/assets/tyre-truck-urban.jpg";

export interface Product {
  slug: string;
  name: string;
  vehicleType: string;
  season: string;
  fuelEfficiency: string;
  description: string;
  application: string;
  image: string;
  features: string[];
}

export const products: Product[] = [
  {
    slug: "long-haul-lh9",
    name: "LongHaul LH9",
    vehicleType: "Trailers / Long-Haul Trucks",
    season: "All-Season",
    fuelEfficiency: "A — Fleet Optimised",
    description:
      "The workhorse of long-distance logistics. Deep-tread casing, retreadable design and superior load capacity make LH9 the smart fleet choice.",
    application: "Trailers, tankers, regional and long-haul freight",
    image: tyreHaul,
    features: [
      "Triple-belt steel casing for heavy loads",
      "Retreadable for extended lifecycle",
      "Optimised for 150,000+ km service life",
      "Low rolling resistance for fuel savings",
    ],
  },
  {
    slug: "steer-pro-s4",
    name: "SteerPro S4",
    vehicleType: "Steer Axle / Regional Haul",
    season: "All-Season",
    fuelEfficiency: "A — Excellent",
    description:
      "Precision steer-axle tyre engineered for stable tracking, even wear and confident handling on long UAE highways.",
    application: "Steer axle of trucks and regional delivery trucks",
    image: tyreSteer,
    features: [
      "Five-rib pattern for stable steering",
      "Stone-ejector platforms in grooves",
      "Heat-resistant compound for desert climate",
      "Even wear across the full tread width",
    ],
  },
  {
    slug: "quarry-master-qm10",
    name: "QuarryMaster QM10",
    vehicleType: "Mining / Off-Road Trucks",
    season: "Severe Service",
    fuelEfficiency: "B — Heavy Duty",
    description:
      "Built for quarries, construction sites and severe off-road duty. Aggressive lug pattern, cut-and-chip resistant casing.",
    application: "Tipper trucks, dump trucks, mining and construction",
    image: tyreOffroad,
    features: [
      "Reinforced 4-ply sidewall against sharp rocks",
      "Deep lug tread for maximum traction",
      "Cut & chip resistant compound",
      "Severe service emblem certified",
    ],
  },
  {
    slug: "city-delivery-cd5",
    name: "CityDelivery CD5",
    vehicleType: "Urban Delivery Trucks",
    season: "All-Season",
    fuelEfficiency: "A — Urban Optimised",
    description:
      "Scrub-resistant urban tyre for stop-and-go delivery routes, kerb impacts and frequent loading cycles.",
    application: "Light & medium urban delivery trucks, last-mile logistics",
    image: tyreUrban,
    features: [
      "Scrub-resistant sidewall for kerb impacts",
      "Reinforced shoulder blocks",
      "Optimised for stop-and-go duty cycles",
      "Long service life under heavy urban loads",
    ],
  },
];
