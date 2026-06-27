import {
  Disc3,
  Gauge,
  Wrench,
  ShieldCheck,
  Atom,
  Truck,
  Package,
  AlertTriangle,
  LifeBuoy,
  Settings,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  short: string;
  icon: typeof Disc3;
}

export const services: Service[] = [
  { slug: "tyre-supply", title: "Tyre Supply", short: "Premium brands, all sizes, in-stock for cars, SUVs and trucks.", icon: Package },
  { slug: "wheel-alignment", title: "Wheel Alignment", short: "Computerised 4-wheel laser alignment for precision handling.", icon: Gauge },
  { slug: "wheel-balancing", title: "Wheel Balancing", short: "Dynamic high-speed balancing for vibration-free rides.", icon: Disc3 },
  { slug: "tyre-installation", title: "Tyre Installation", short: "Quick, expert fitment with TPMS reset and torque-spec mounting.", icon: Wrench },
  { slug: "puncture-repair", title: "Puncture Repair", short: "Industry-standard plug-patch repairs that last.", icon: ShieldCheck },
  { slug: "nitrogen-filling", title: "Nitrogen Filling", short: "Cooler, more stable tyre pressure for desert conditions.", icon: Atom },
  { slug: "fleet-maintenance", title: "Fleet Maintenance", short: "Scheduled inspections, rotation and reporting for fleets.", icon: Settings },
  { slug: "commercial-tyres", title: "Commercial Tyres", short: "Truck, bus and trailer tyres with fleet pricing.", icon: Truck },
  { slug: "emergency-replacement", title: "Emergency Replacement", short: "Same-day tyre replacement across Sharjah & UAE.", icon: AlertTriangle },
  { slug: "roadside-assistance", title: "Roadside Assistance", short: "24/7 mobile tyre service. We come to you.", icon: LifeBuoy },
];
