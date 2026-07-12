export const site = {
  name: "Qasr Al Bustan Tyres",
  nameAr: "قصر البستان للإطارات",
  tagline: "Premium Tyres. Trusted Service. Across the UAE.",
  phone: "+971551452878",
  phoneDisplay: "+971 55 145 2878",
  whatsapp: "https://wa.me/971551452878",
  email: "qasralbustantyres@gmail.com",
  address: "Industrial Area C-14, Sharjah, United Arab Emirates",
  locations: [
    {
      key: "headOffice",
      title: "Head Office",
      city: "Deira, Dubai",
      address: "Deira, Dubai, United Arab Emirates",
      mapEmbed: "https://www.google.com/maps?q=Deira+Dubai&output=embed",
      mapDirections: "https://www.google.com/maps/dir/?api=1&destination=Deira+Dubai",
      mapOpen: "https://www.google.com/maps/search/?api=1&query=Deira+Dubai",
    },
    {
      key: "warehouse",
      title: "Service & Warehouse",
      city: "Industrial Area C-14, Sharjah",
      address: "Industrial Area C-14, Sharjah, United Arab Emirates",
      mapEmbed: "https://www.google.com/maps?q=Industrial+Area+C-14+Sharjah&output=embed",
      mapDirections: "https://www.google.com/maps/dir/?api=1&destination=Industrial+Area+C-14+Sharjah",
      mapOpen: "https://www.google.com/maps/search/?api=1&query=Industrial+Area+C-14+Sharjah",
    },
  ],
  hours: "Sat – Thu: 8:00 AM – 10:00 PM • Fri: 2:00 PM – 10:00 PM",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14430.5!2d55.4209!3d25.3463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSharjah%20Industrial%20Area!5e0!3m2!1sen!2sae!4v1700000000000",
  mapDirections: "https://www.google.com/maps/dir/?api=1&destination=Qasr+Al+Bustan+Tyres+Sharjah",
  mapOpen: "https://www.google.com/maps/search/?api=1&query=Qasr+Al+Bustan+Tyres+Sharjah",
  instagram: "https://www.instagram.com/qasralbustan.tyres/",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/fleet", label: "Fleet Solutions" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

