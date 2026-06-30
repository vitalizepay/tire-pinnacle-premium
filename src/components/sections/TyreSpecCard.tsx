import { Fuel, CloudRain, Volume2, Truck } from "lucide-react";
import type { Grade, Tyre } from "@/data/tyres";

const gradeChip: Record<Grade, string> = {
  A: "bg-emerald-100 text-emerald-700",
  "A-B": "bg-lime-100 text-lime-700",
  B: "bg-lime-100 text-lime-700",
  "B-C": "bg-amber-100 text-amber-700",
  C: "bg-amber-100 text-amber-700",
};

function GradeRow({ icon: Icon, label, grade }: { icon: any; label: string; grade: Grade }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2 text-[#7C7568]">
        <Icon className="h-4 w-4 text-[#C8A45C]" />
        <span>{label}</span>
      </div>
      <span className={"rounded-md px-2 py-0.5 text-xs font-semibold " + gradeChip[grade]}>{grade}</span>
    </div>
  );
}

export function TyreSpecCard({ tyre }: { tyre: Tyre }) {
  return (
    <div className="group relative rounded-[24px] border border-[var(--line)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-[#C8A45C]/40 hover:shadow-[0_30px_60px_-25px_rgba(168,123,51,0.3)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-clash text-lg font-semibold text-[#14110D]">{tyre.name}</h3>
        <span className="rounded-full bg-[#F6F1E7] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#A87B33]">
          {tyre.badge}
        </span>
      </div>

      <div className="mt-4 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-[#F6F1E7] to-white">
        <img src={tyre.img} alt={tyre.name} loading="lazy" className="h-full w-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105" />
      </div>

      <div className="mt-5 space-y-2.5">
        <GradeRow icon={Fuel} label="Fuel" grade={tyre.fuel} />
        <GradeRow icon={CloudRain} label="Grip" grade={tyre.grip} />
        <GradeRow icon={Volume2} label="Noise" grade={tyre.noise} />
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4 text-xs">
        <span className="text-[#7C7568]">{tyre.season}</span>
        <span className="inline-flex items-center gap-1.5 font-semibold text-[#14110D]">
          <Truck className="h-4 w-4 text-[#C8A45C]" />
          {tyre.type}
        </span>
      </div>
    </div>
  );
}