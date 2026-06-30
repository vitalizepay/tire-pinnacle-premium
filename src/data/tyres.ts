export type Grade = "A" | "A-B" | "B" | "B-C" | "C";

export interface Tyre {
  name: string;
  badge: string;
  fuel: Grade;
  grip: Grade;
  noise: Grade;
  season: string;
  type: string;
  img: string;
}

import tyre1 from "@/assets/tyre-truck-haul.jpg";
import tyre2 from "@/assets/tyre-truck-steer.jpg";
import tyre3 from "@/assets/tyre-truck-urban.jpg";

export const tyres: Tyre[] = [
  {
    name: "QAB LongHaul LH9",
    badge: "Premium Fuel Efficiency",
    fuel: "A",
    grip: "A-B",
    noise: "A",
    season: "All Season",
    type: "Truck Highway",
    img: tyre1,
  },
  {
    name: "QAB Regional R7",
    badge: "Balanced Performance",
    fuel: "B-C",
    grip: "B",
    noise: "A-B",
    season: "All Season",
    type: "Truck Interregional",
    img: tyre2,
  },
  {
    name: "QAB CityCoach C5",
    badge: "Intercity",
    fuel: "C",
    grip: "C",
    noise: "B",
    season: "All Season",
    type: "Bus",
    img: tyre3,
  },
];