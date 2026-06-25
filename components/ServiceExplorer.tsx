"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { serviceCategories, serviceIconMap, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PriceTag } from "./PriceTag";

export function ServiceExplorer() {
  const [active, setActive] = useState(serviceCategories[0].id);
  const category = useMemo(() => serviceCategories.find((item) => item.id === active) ?? serviceCategories[0], [active]);

  const openWhatsapp = (serviceName: string) => {
    const message = `مرحبًا، أريد معرفة تفاصيل وسعر خدمة: ${serviceName}`;
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <div className="mb-8 grid grid-cols-1 gap-2 rounded-[1.75rem] border border-wine/10 bg-white/70 p-2 shadow-sm backdrop-blur sm:grid-cols-3 sm:rounded-full">
        {serviceCategories.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={cn(
              "w-full rounded-full px-4 py-3 text-center text-sm font-black transition-all",
              active === item.id ? "wine-gradient text-white shadow-glow" : "text-wine hover:bg-peach"
            )}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="mb-8 grid gap-6 rounded-[2rem] border border-wine/10 bg-white/75 p-6 shadow-soft backdrop-blur md:grid-cols-[.8fr_1.2fr] md:p-8">
        <div>
          <Badge>{category.accent}</Badge>
          <h3 className="mt-4 text-3xl font-black text-wineDark">{category.title}</h3>
          <p className="mt-3 leading-8 text-muted-foreground">{category.subtitle}</p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {category.services.map((service) => {
          const Icon = serviceIconMap[service.icon];
          return (
            <Card key={service.title} className="group border-wine/10 bg-white/85 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
              <CardHeader>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-peach text-orange shadow-sm transition-all group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                  <PriceTag price={service.price}/>
                </div>
                <CardTitle className="text-2xl text-wineDark">{service.title}</CardTitle>
                <p className="pt-2 text-sm leading-7 text-muted-foreground">{service.short}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-wineDark/80">{service.definition}</p>
                <div className="mt-5 space-y-3">
                  <p className="text-sm font-black text-wine">الفوائد</p>
                  <div className="grid gap-2">
                    {service.benefits.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.uses.map((item) => (
                    <span key={item} className="rounded-full bg-peach px-3 py-1 text-xs font-bold text-wine">
                      {item}
                    </span>
                  ))}
                </div>
                <Button onClick={() => openWhatsapp(service.title)} variant="outline" className="mt-6 w-full">
                  <MessageCircle className="h-4 w-4" />
                  اسألي عن الخدمة
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
