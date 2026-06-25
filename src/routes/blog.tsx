import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { InternalHero } from "@/components/site/InternalHero";
import { Search, Calendar, Folder, MessageCircle, ChevronRight, ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [
    { title: "Blog — Infetech IT Solutions" },
    { name: "description", content: "Stories, guides and insights on IT, cybersecurity, cloud and software development from the Infetech team." },
  ]}),
  component: BlogPage,
});

const posts = [
  { t: "What we promise high quality IT Agency Services", c: "Digital Marketing", d: "January 9, 2023", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80" },
  { t: "A Complete Guide to Business Insurance perfect", c: "Digital Marketing", d: "January 2, 2023", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80" },
  { t: "A Complete Guide to Cybersecurity", c: "Cyber Security", d: "January 12, 2023", img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80" },
  { t: "Write a Better security method", c: "Cyber Security", d: "January 2, 2023", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80" },
  { t: "Let's understand the different types of data backups", c: "Data Analysis", d: "February 16, 2023", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80" },
  { t: "Accessible Sv Perfect Patterns For Screen Reader Users", c: "Consulting", d: "February 2, 2023", img: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=900&q=80" },
  { t: "Enough JavaScr Requirements Accessible Components", c: "Data Analysis", d: "February 14, 2023", img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=900&q=80" },
  { t: "The different types of data", c: "Data Analysis", d: "April 7, 2023", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80" },
  { t: "Tech experiences that connect us", c: "Data Analysis", d: "April 2, 2023", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80" },
  { t: "What is MVP in software development?", c: "Data Analysis", d: "March 12, 2023", img: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=900&q=80" },
];

const categories = ["Cyber Security", "Data Analysis", "Design", "Digital Marketing", "IT Consulting", "Technology", "Web Development"];
const archives = ["January 2023", "February 2023", "April 2023", "March 2023"];
const tags = ["Big Data", "Business", "Data", "Digital marketing", "Marketing", "NFT", "Security", "Technology", "Web"];

function BlogPage() {
  return (
    <SiteShell>
      <InternalHero title="Blog" />
      <section className="section-y bg-white">
        <div className="container-x grid lg:grid-cols-[1fr_320px] gap-10">
          {/* posts */}
          <div className="grid sm:grid-cols-2 gap-7">
            {posts.map((p) => (
              <article key={p.t} className="reveal">
                <div className="relative overflow-hidden">
                  <img src={p.img} className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110" alt={p.t} />
                </div>
                <h3 className="mt-5 font-bold leading-snug">{p.t}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3 text-primary" />{p.d}</span>
                  <span className="inline-flex items-center gap-1"><Folder className="w-3 h-3 text-primary" />{p.c}</span>
                  <span className="inline-flex items-center gap-1"><MessageCircle className="w-3 h-3 text-primary" />0 Comments</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempore.</p>
                <button className="btn-primary mt-4 !py-2.5 !px-5 !text-[11px]">Read more</button>
              </article>
            ))}
            {/* pagination */}
            <div className="sm:col-span-2 flex justify-center items-center gap-2 mt-6">
              <button className="w-10 h-10 grid place-items-center border hover:bg-primary hover:text-white"><ChevronLeft className="w-4 h-4" /></button>
              <button className="w-10 h-10 grid place-items-center purple-gradient text-white font-bold">1</button>
              <button className="w-10 h-10 grid place-items-center border hover:bg-primary hover:text-white">2</button>
              <button className="w-10 h-10 grid place-items-center border hover:bg-primary hover:text-white"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>

          {/* sidebar */}
          <aside className="space-y-8">
            <div className="relative">
              <input type="search" placeholder="Search" className="w-full bg-section px-4 py-3.5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <button className="absolute right-2 top-2 bottom-2 px-3 grid place-items-center text-primary"><Search className="w-4 h-4" /></button>
            </div>

            <div className="border border-border p-6">
              <h4 className="font-bold mb-4 pb-3 border-b">Categories</h4>
              <ul className="space-y-3 text-sm">
                {categories.map((c, i) => (
                  <li key={c} className="flex items-center justify-between text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    <span>· {c}</span>
                    <span className="text-xs">({(i+3)*3})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border p-6">
              <h4 className="font-bold mb-4 pb-3 border-b">Archives</h4>
              <ul className="space-y-3 text-sm">
                {archives.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-muted-foreground hover:text-primary cursor-pointer">
                    <Calendar className="w-3 h-3" />{a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border p-6">
              <h4 className="font-bold mb-4 pb-3 border-b">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <button key={t} className="px-3 py-1.5 bg-section text-xs hover:bg-primary hover:text-white transition-colors">{t}</button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
