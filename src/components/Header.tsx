import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoAsset from "@/assets/qasr-logo.png.asset.json";
import { nav, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 md:top-6">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/40 bg-white/70 px-4 py-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl md:px-8 md:py-4">
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Qasr Al Bustan Tyres"
              className="h-20 w-20 object-contain md:h-24 md:w-24"
              width={96}
              height={96}
            />
            <div className="hidden min-w-0 sm:block">
              <div className="text-base font-bold leading-tight tracking-tight text-ink">Qasr Al Bustan</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">Truck Tyres</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="story-link rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-ink"
                activeProps={{ className: "rounded-full px-4 py-2 text-sm font-semibold text-ink" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.phone}`}
              className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:inline-flex"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              type="button"
              aria-label="Menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden"
            >
              <div className="mt-3 rounded-3xl border border-white/50 bg-white/95 p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/80 hover:bg-secondary"
                    activeProps={{ className: "block rounded-xl px-4 py-3 text-base font-semibold text-ink bg-secondary" }}
                    activeOptions={{ exact: n.to === "/" }}
                  >
                    {n.label}
                  </Link>
                ))}
                <a
                  href={`tel:${site.phone}`}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground"
                >
                  <Phone className="h-4 w-4" /> {site.phoneDisplay}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
