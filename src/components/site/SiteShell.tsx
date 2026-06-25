import { Header } from "./Header";
import { Footer } from "./Footer";
import { type ReactNode, useEffect } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
