import { useEffect, useRef, useState } from "react";

export function useParallax<T extends HTMLElement = HTMLDivElement>(maxOffset = 60) {
  const ref = useRef<T | null>(null);
  const [offset, setOffset] = useState(0);
  const inViewRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (inViewRef.current = e.isIntersecting)),
      { threshold: 0 },
    );
    io.observe(el);

    const update = () => {
      rafRef.current = null;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      const progress = (center - vh / 2) / vh; // -1..1 roughly
      const next = Math.max(-maxOffset, Math.min(maxOffset, -progress * maxOffset * 1.4));
      setOffset(next);
    };

    const onScroll = () => {
      if (!inViewRef.current) return;
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [maxOffset]);

  return { ref, offset };
}