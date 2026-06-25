import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { InternalHero } from "@/components/site/InternalHero";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Infetech IT Solutions" },
    { name: "description", content: "Get in touch with Infetech for IT consulting, custom software, cloud and managed services." },
  ]}),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <InternalHero title="Contact" />

      <section className="section-y bg-white">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <div className="reveal">
            <div className="eyebrow mb-3">Contact With Us</div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Feel Free to Get<br />in Touch</h2>
            <div className="mt-10 space-y-6">
              {[
                { i: Phone, l: "Call Anytime", v: "+ 88 ( 9800 ) 6802" },
                { i: Mail, l: "Send Email", v: "needhelp@infetech.com" },
                { i: MapPin, l: "Visit Now", v: "88 Broklyn Golden Street. New York, USA" },
              ].map((c) => (
                <div key={c.l} className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full border-2 border-primary grid place-items-center text-primary"><c.i className="w-5 h-5" /></div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.l}</div>
                    <div className="font-bold">{c.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="bg-section p-8 md:p-10 reveal" onSubmit={(e)=>e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              {["Your Name", "Email Address", "Phone Number", "Subject"].map((p) => (
                <input key={p} placeholder={p} className="bg-white px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              ))}
            </div>
            <textarea placeholder="Write a Message" rows={6} className="w-full mt-5 bg-white px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            <button className="btn-primary w-full mt-6 !py-4">Send a Message <ArrowRight className="w-4 h-4" /></button>
          </form>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="bg-white pb-12">
        <div className="container-x">
          <div className="relative overflow-hidden h-44 diag-overlay">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80" className="absolute inset-0 w-full h-full object-cover grayscale" alt="" />
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary" />
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary/40 to-transparent skew-x-[-12deg] -translate-x-8" />
            <div className="relative h-full flex items-center justify-between gap-6 px-8 text-white">
              <div>
                <div className="text-xs uppercase tracking-widest text-primary">Let's get started</div>
                <h3 className="text-2xl md:text-3xl font-black mt-1">World class IT solutions partner of choice</h3>
              </div>
              <a href="/about" className="btn-primary shrink-0">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section>
        <iframe
          title="map"
          className="w-full h-[420px] grayscale"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.13%2C51.50%2C-0.10%2C51.52&layer=mapnik"
        />
      </section>
    </SiteShell>
  );
}
