import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  intro?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  title,
  intro,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
        {title}
      </h2>
      <div
        className={cn(
          "mt-3 h-1 w-16 rounded-full bg-accent",
          align === "center" ? "mx-auto" : ""
        )}
      />
      {intro && (
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}
