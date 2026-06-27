import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export interface Crumb { label: string; to?: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs">
      <ol className="flex flex-wrap items-center gap-1.5 text-muted-foreground">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3 w-3" />}
            {c.to ? (
              <Link to={c.to} className="transition hover:text-ink">{c.label}</Link>
            ) : (
              <span className="text-ink">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
