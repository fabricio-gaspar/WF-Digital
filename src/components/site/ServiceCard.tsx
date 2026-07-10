import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";
import type { ComponentType } from "react";

export type ServiceCardProps = {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  href?: string;
  featured?: boolean;
  index?: number;
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  featured = false,
  index,
}: ServiceCardProps) {
  const content = (
    <article className="card-tech group h-full p-8 md:p-9 text-left flex flex-col">
      {featured && (
        <span
          className="absolute top-5 right-5 z-[3] inline-flex items-center gap-1 rounded-full
            bg-primary/[0.08] text-primary px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em]
            group-hover:bg-white/20 group-hover:text-white transition-colors"
          aria-label="Serviço em alta"
        >
          <Star className="w-3 h-3" strokeWidth={2.5} />
          Em alta
        </span>
      )}

      {typeof index === "number" && (
        <div className="card-tech-index">{String(index).padStart(2, "0")}</div>
      )}

      <div className="card-tech-icon" aria-hidden="true">
        <Icon className="w-6 h-6" strokeWidth={1.75} />
      </div>

      <h3 className="card-tech-title mt-6 text-[18px] md:text-[19px] font-black leading-[1.25]">
        {title}
      </h3>

      <p className="mt-3 text-[14px] leading-[1.65] text-muted-foreground">
        {description}
      </p>

      {href && (
        <div className="mt-auto pt-7">
          <span className="card-tech-cta">
            Saber mais <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
          </span>
        </div>
      )}
    </article>
  );

  if (href) {
    return (
      <Link
        to={href}
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label={title}
      >
        {content}
      </Link>
    );
  }

  return content;
}
