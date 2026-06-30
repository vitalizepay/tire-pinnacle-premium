import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { site } from "@/data/site";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-brand"
    />
  );
}

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {show && (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white shadow-soft transition hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a
        href={`tel:${site.phone}`}
        aria-label="Call us"
        className="grid h-14 w-14 place-items-center rounded-full bg-ink text-white shadow-soft transition hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
