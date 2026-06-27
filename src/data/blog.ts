import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  metaDescription: string;
  content: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "how-to-choose-the-right-tyres",
    title: "How to Choose the Right Tyres for Your Vehicle",
    excerpt: "From load index to tread pattern — a complete guide to picking tyres that match your car and the UAE climate.",
    category: "Buying Guide",
    author: "Qasr Al Bustan Experts",
    date: "2026-05-12",
    image: blog1,
    metaDescription: "Complete guide to choosing the right tyres in UAE — size, load index, season and tread pattern explained by Qasr Al Bustan Tyres.",
    content: [
      "Picking the right tyre is the single biggest upgrade you can make to your car's safety, comfort and fuel economy. Yet most drivers replace tyres reactively, choosing whatever the shop has on hand. Here's how to do it the smart way.",
      "Start with the sidewall. The code (e.g. 225/55 R17 97V) tells you width, aspect ratio, construction, rim diameter, load index and speed rating. Never go below your vehicle manufacturer's specification.",
      "In the UAE heat, compound matters as much as tread. Look for heat-resistant silica blends and a tread designed for hot tarmac. For desert weekends, choose an A/T (all-terrain) tyre with reinforced sidewalls.",
      "Finally, balance performance against mileage. A grippier tyre wears faster. Our specialists will help you find the right trade-off for your driving profile.",
    ],
  },
  {
    slug: "signs-your-tyres-need-replacement",
    title: "5 Signs Your Tyres Need Replacement Now",
    excerpt: "Don't wait for a blowout. These are the warning signs every UAE driver should know.",
    category: "Safety",
    author: "Service Team",
    date: "2026-04-22",
    image: blog2,
    metaDescription: "Five clear signs your tyres need replacement — wear bars, cracks, vibration, age and pressure loss. Stay safe on UAE roads.",
    content: [
      "Tread depth below 1.6mm is the legal minimum, but for safety we recommend replacing at 3mm. Use the wear indicator bars moulded into the tread grooves.",
      "Sidewall cracks and bulges mean the casing is compromised — replace immediately, even if tread looks fine.",
      "Vibration at highway speeds usually means balancing, but if it persists after a service the tyre itself may be deformed.",
      "Age matters: even unused, tyres degrade after 6 years. Check the DOT date stamp on the sidewall.",
      "Frequent pressure loss with no visible puncture often signals a damaged bead or rim seal.",
    ],
  },
  {
    slug: "benefits-of-wheel-alignment",
    title: "The Real Benefits of Regular Wheel Alignment",
    excerpt: "Better mileage, even tyre wear, sharper handling — wheel alignment pays for itself many times over.",
    category: "Maintenance",
    author: "Workshop Team",
    date: "2026-04-02",
    image: blog3,
    metaDescription: "Why regular 4-wheel alignment saves you money — improved fuel economy, longer tyre life and better handling.",
    content: [
      "Misalignment as small as 1/8 inch is enough to scrub a set of tyres in half their expected life. Our 4-wheel laser alignment ensures every wheel tracks true.",
      "Properly aligned wheels reduce rolling resistance — most drivers see 3–7% better fuel economy after correction.",
      "Steering becomes more precise. The car stops pulling. Long highway drives become noticeably less tiring.",
      "We recommend an alignment check every 10,000 km or after any kerb impact.",
    ],
  },
  {
    slug: "fleet-tyre-maintenance-tips",
    title: "Fleet Tyre Maintenance: A Manager's Playbook",
    excerpt: "Five proven habits that cut tyre spend for UAE fleets by 20% or more.",
    category: "Fleet",
    author: "Fleet Solutions",
    date: "2026-03-18",
    image: blog1,
    metaDescription: "Reduce fleet tyre costs in UAE — proven maintenance habits for logistics, transport and rental fleets.",
    content: [
      "Weekly pressure checks alone save fuel and extend life by up to 25%. Equip every depot with a calibrated gauge.",
      "Rotate every 8,000–10,000 km, and document. Patterns tell you about alignment, suspension and driver behaviour.",
      "Standardise on two or three approved SKUs across the fleet to simplify inventory and emergency replacement.",
      "Partner with one tyre specialist for fixed pricing, scheduled service and emergency response.",
    ],
  },
  {
    slug: "summer-vs-all-season-tyres",
    title: "Summer vs All-Season Tyres in the UAE",
    excerpt: "Why tyre choice matters when surface temperatures climb past 70 °C.",
    category: "Buying Guide",
    author: "Qasr Al Bustan Experts",
    date: "2026-02-28",
    image: blog2,
    metaDescription: "Summer vs all-season tyres in UAE — which compound performs best in extreme heat? Expert guidance from Qasr Al Bustan.",
    content: [
      "Summer tyres use a stiffer compound optimised for dry grip at high temperatures — exactly what UAE roads deliver six months a year.",
      "All-season tyres compromise grip for versatility, which matters less in a climate that rarely sees rain.",
      "For performance vehicles, we always recommend dedicated summer-spec tyres. For family cars, premium all-season is a sound compromise.",
    ],
  },
  {
    slug: "tyre-safety-checklist",
    title: "The 7-Point Tyre Safety Checklist Before Any Long Drive",
    excerpt: "A quick walkaround that takes 5 minutes and could save your life.",
    category: "Safety",
    author: "Service Team",
    date: "2026-02-10",
    image: blog3,
    metaDescription: "Tyre safety checklist before long UAE road trips — pressure, tread, sidewall, valve, spare and more.",
    content: [
      "1. Pressure — cold, all four plus spare, to manufacturer spec.",
      "2. Tread depth — minimum 3mm across the tyre.",
      "3. Sidewalls — no cracks, bulges or cuts.",
      "4. Valve caps — present and tight.",
      "5. Spare tyre — inflated and accessible.",
      "6. Jack and wheel brace — in the car and working.",
      "7. Recent alignment — straight steering, no pulling.",
    ],
  },
];
