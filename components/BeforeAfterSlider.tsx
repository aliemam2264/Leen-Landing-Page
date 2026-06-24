"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  title: string;
  service: string;
  className?: string;
};

export function BeforeAfterSlider({ before, after, title, service, className }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(52);

  return (
    <div className={cn("group overflow-hidden rounded-[2rem] border border-wine/10 bg-white shadow-soft", className)}>
      <div className="relative aspect-[1.25] overflow-hidden bg-peach">
        <img src={after} alt={`بعد - ${title}`} className="h-full w-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <img src={before} alt={`قبل - ${title}`} className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-y-0 z-10 flex -translate-x-1/2 items-center" style={{ left: `${position}%` }}>
          <div className="h-full w-0.5 bg-white shadow-[0_0_20px_rgba(122,0,36,.35)]" />
          <div className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-wine text-xs font-black text-white shadow-soft">
            ↔
          </div>
        </div>
        <div className="absolute left-4 top-4 z-20 rounded-full bg-white/90 px-4 py-2 text-xs font-black text-wine shadow-sm">بعد</div>
        <div className="absolute right-4 top-4 z-20 rounded-full bg-white/90 px-4 py-2 text-xs font-black text-wine shadow-sm">قبل</div>
        <input
          aria-label="تحريك مقارنة قبل وبعد"
          type="range"
          min="15"
          max="85"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-x-4 bottom-4 z-30 h-2 cursor-pointer accent-orange"
        />
      </div>
      <div className="p-6">
        <Badge className="bg-white">{service}</Badge>
        <h3 className="mt-3 text-xl font-black text-wineDark">{title}</h3>
      </div>
    </div>
  );
}
