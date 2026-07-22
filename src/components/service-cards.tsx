"use client";

import {
  Code2,
  Globe,
  Layers,
  Palette,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Card, CardContent } from "@/components/ui/card";
import type { Service } from "@/data/site-data";

const serviceIcons: LucideIcon[] = [Code2, Layers, Globe, Palette, Server, Wrench];

export function ServiceCards({ services }: { services: Service[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = serviceIcons[index] ?? Code2;

        return (
          <AnimateOnScroll key={service.title} delay={index * 80}>
            <Card className="group h-full border-white/5 bg-card/60 transition-all duration-300 hover:border-accent/30 hover:shadow-accent/5">
              <CardContent className="flex h-full flex-col p-6 md:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 transition-colors group-hover:border-accent/40 group-hover:bg-accent/15">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/5 pt-5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm text-muted-foreground before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        );
      })}
    </div>
  );
}
