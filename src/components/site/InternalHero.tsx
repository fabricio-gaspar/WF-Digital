import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function InternalHero({ title, crumb }: { title: string; crumb?: string }) {
  return (
    <section className="relative h-[260px] md:h-[300px] overflow-hidden bg-[#141018]">
      {/* Background photo — grayscale, slightly opaque */}
      <img
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&auto=format&fit=crop&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-55"
      />

      {/* Subtle dark tint wash so the photo reads as background, not foreground */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,16,24,0.55) 0%, rgba(20,16,24,0.35) 50%, rgba(20,16,24,0.6) 100%)",
        }}
      />
      {/* Faint brand color glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 50%, color-mix(in oklab, var(--color-primary) 22%, transparent) 0%, transparent 55%)",
        }}
      />

      {/* Right-side angled accent — thin, elegant */}
      <div
        aria-hidden
        className="absolute top-0 right-0 h-full w-[22%] md:w-[18%] pointer-events-none"
        style={{
          clipPath: "polygon(45% 0, 100% 0, 100% 100%, 15% 100%)",
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--color-primary) 55%, #141018 45%) 0%, color-mix(in oklab, var(--color-primary) 20%, #141018 80%) 100%)",
        }}
      />

      {/* Very subtle diagonal streak lines confined to the right accent */}
      <svg
        aria-hidden
        viewBox="0 0 400 400"
        preserveAspectRatio="none"
        className="absolute top-0 right-0 h-full w-[22%] md:w-[18%] pointer-events-none"
        style={{ clipPath: "polygon(45% 0, 100% 0, 100% 100%, 15% 100%)" }}
      >
        <g stroke="rgba(255,255,255,0.10)" strokeWidth="0.6" fill="none">
          <path d="M-20 360 L360 -20" />
          <path d="M20 380 L400 0" />
          <path d="M60 400 L440 20" />
          <path d="M100 420 L480 40" />
          <path d="M140 440 L520 60" />
        </g>
      </svg>

      {/* Content */}
      <div className="relative h-full container-x flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl md:text-[42px] font-black tracking-[0.04em] uppercase">
          {title}
        </h1>
        <div className="mt-3 flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-white/70">
          <Link to="/" className="hover:text-white transition-colors">Início</Link>
          <ChevronRight className="w-3 h-3 opacity-60" />
          <span className="text-primary/90">{crumb ?? title}</span>
        </div>
      </div>
    </section>
  );
}
