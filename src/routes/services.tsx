import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { InternalHero } from "@/components/site/InternalHero";
import { LogoStrip } from "@/components/site/LogoStrip";
import { Counters } from "@/components/site/Counters";
import { PurpleCTA } from "@/components/site/CTAs";
import { ArrowRight, Play, Lightbulb, Cpu } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — Infetech IT Solutions" },
    { name: "description", content: "Explore Infetech's full catalog of IT services — consulting, software development, cloud and managed operations." },
  ]}),
  component: ServicesPage,
});

const projects = [
  { t: "Smart Marketing", c: "Ideas", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80" },
  { t: "Platform Integration", c: "Design / Ideas", img: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=900&q=80" },
  { t: "Tech Solutions", c: "Design / Ideas", img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=900&q=80" },
];

function ServicesPage() {
  return (
    <SiteShell>
      <InternalHero title="Services 3" crumb="Services 3" />

      <section className="section-y bg-white">
        <div className="container-x text-center reveal mb-12">
          <div className="eyebrow mb-3">What We're Offering to Our Clients</div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight">Real Time Dealing in all Professional<br />IT Solutions & Services</h2>
        </div>
        <div className="container-x grid md:grid-cols-2 gap-8">
          {[
            { t: "We're providing IT solutions to all countries Worldwide", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80" },
            { t: "Our happy clients loved our technology and services", img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=900&q=80" },
          ].map((s) => (
            <div key={s.t} className="relative reveal">
              <img src={s.img} className="w-full h-80 object-cover grayscale" alt="" />
              <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-primary/45 to-transparent skew-x-[-12deg] translate-x-6 pointer-events-none" />
              <div className="absolute -bottom-6 left-6 right-12 bg-white shadow-xl p-5 flex items-center justify-between gap-4">
                <p className="font-bold text-sm">{s.t}</p>
                <button className="w-10 h-10 rounded-full purple-gradient text-white grid place-items-center shrink-0 hover:rotate-12 transition-transform"><ArrowRight className="w-4 h-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <LogoStrip />

      {/* Mission/Vision */}
      <section className="section-y bg-section relative overflow-hidden">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative reveal">
            <div className="absolute left-0 top-1/4 -rotate-90 origin-left text-xs tracking-[0.5em] text-foreground/30 font-bold">MISSIONS</div>
            <div className="absolute right-0 top-1/4 rotate-90 origin-right text-xs tracking-[0.5em] text-foreground/30 font-bold">VISIONS</div>
            <div className="grid grid-cols-2 gap-4 px-12">
              <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80" className="w-full h-60 object-cover" alt="" />
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80" className="w-full h-44 object-cover mt-16" alt="" />
                <div className="absolute -top-2 -left-2 w-14 h-14 grid place-items-center bg-primary text-white shadow-lg"><Lightbulb className="w-6 h-6" /></div>
              </div>
              <div className="relative col-span-2 mt-2 flex items-end gap-4">
                <div className="w-14 h-14 grid place-items-center bg-primary text-white shadow-lg"><Cpu className="w-6 h-6" /></div>
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80" className="flex-1 h-44 object-cover" alt="" />
              </div>
            </div>
          </div>
          <div className="reveal">
            <div className="eyebrow mb-3">Get to Know Us</div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Infetech Leading in IT<br />Technology Market</h2>
            <p className="mt-4 text-primary font-semibold">Best IT solutions for your innovative ideas.</p>
            <p className="mt-4 text-muted-foreground">
              Infetech is a provider of IT consulting and software development services. We help organizations and companies improve business performance.
            </p>
            <blockquote className="mt-6 bg-white border-l-4 border-primary px-5 py-4 text-sm font-semibold shadow-sm">
              We created excellent and sustainable technology solutions based on IT domain expertise.
            </blockquote>
            <div className="mt-7 flex items-center gap-5">
              <a href="/contact" className="btn-primary">Learn More <ArrowRight className="w-4 h-4" /></a>
              <button className="flex items-center gap-3 group">
                <span className="w-12 h-12 rounded-full purple-gradient grid place-items-center text-white group-hover:scale-110 transition-transform"><Play className="w-4 h-4 fill-current" /></span>
                <span className="text-sm font-semibold">Watch our few minutes<br />video</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section-y bg-white">
        <div className="container-x text-center reveal mb-12">
          <div className="eyebrow mb-3">Our Completed Projects</div>
          <h2 className="text-3xl md:text-5xl font-black">Improve & Enhance Our<br />Tech Projects</h2>
        </div>
        <div className="container-x grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.t} className="group reveal">
              <div className="relative overflow-hidden">
                <img src={p.img} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" alt={p.t} />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors" />
              </div>
              <div className="flex items-center justify-between mt-4 pb-1">
                <div>
                  <h4 className="font-bold">{p.t}</h4>
                  <div className="text-xs text-primary uppercase tracking-widest mt-1">{p.c}</div>
                </div>
                <button className="w-9 h-9 grid place-items-center bg-accent text-primary hover:bg-primary hover:text-white transition-colors"><ArrowRight className="w-4 h-4" /></button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-10">
          {[0,1,2,3,4].map((i) => <span key={i} className={`h-1 rounded ${i===4?'w-10 bg-primary':'w-6 bg-foreground/15'}`} />)}
        </div>
      </section>

      <Counters />
      <PurpleCTA />
    </SiteShell>
  );
}
