import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "gold" | "ghost" | "callnow" | "ghost-dark";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-200 ease-out hover:scale-[1.03] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45C]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#0C0C0E] text-white shadow-[0_1px_2px_rgba(12,12,14,.10),0_4px_6px_rgba(12,12,14,.08),0_12px_18px_rgba(12,12,14,.06),inset_0_1px_0_rgba(255,255,255,.08)]",
  gold:
    "sheen-btn bg-gold-grad text-[#14110D] shadow-[0_2px_8px_rgba(168,123,51,.25),0_10px_30px_rgba(200,164,92,.20),inset_0_1px_0_rgba(255,255,255,.45)]",
  ghost:
    "bg-transparent text-[#14110D] border border-[var(--line)] hover:border-[#C8A45C]/50",
  "ghost-dark":
    "bg-white/5 text-white border border-white/20 hover:border-[#C8A45C]/60 hover:bg-white/10 backdrop-blur",
  callnow:
    "bg-[#C0392B] text-white shadow-[0_4px_12px_rgba(192,57,43,.35)] hover:bg-[#a73122]",
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = "primary", className, as = "button", href, target, rel, children, ...rest },
  ref,
) {
  const cls = cn(base, variants[variant], className);
  if (as === "a" || href) {
    return (
      <a className={cls} href={href} target={target} rel={rel}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref} className={cls} {...rest}>
      {children}
    </button>
  );
});