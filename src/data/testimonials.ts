export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Al Mansoori",
    role: "Fleet Manager",
    company: "Al Mansoori Logistics",
    quote:
      "Qasr Al Bustan handles 80 trucks for us. Reliable scheduling, fair pricing, zero downtime. They are part of our operation now.",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Rajesh Kumar",
    role: "Logistics Director",
    company: "Emirates Freight Co.",
    quote:
      "Their LongHaul LH9 cut our cost-per-km by 18%. Best truck-tyre decision we made this year.",
    avatar: "https://i.pravatar.cc/120?img=33",
  },
  {
    name: "Khalid Al Suwaidi",
    role: "Transport Owner",
    company: "Suwaidi Transport",
    quote:
      "Their 24/7 roadside team got us back on the road in under an hour outside Al Ain. Lifesavers.",
    avatar: "https://i.pravatar.cc/120?img=68",
  },
];