"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

export function SkillBar({ name, percentage, delay = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  const [displayPercent, setDisplayPercent] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animated) return;

    const duration = 1200;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayPercent(Math.round(eased * percentage));
      if (progress < 1) requestAnimationFrame(animate);
    };

    const timeout = setTimeout(() => requestAnimationFrame(animate), delay);
    return () => clearTimeout(timeout);
  }, [animated, percentage, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-primary">{name}</span>
        <span className="font-semibold text-accent">{displayPercent}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-background/80">
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-r from-accent/80 to-accent transition-all duration-1000 ease-out"
          )}
          style={{ width: animated ? `${percentage}%` : "0%" }}
        />
      </div>
    </div>
  );
}
