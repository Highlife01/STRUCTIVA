import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Globe2,
  Menu,
  MoveRight,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const imageBase = "/images/";

const solutions = [
  { title: "Arched Steel Buildings", eyebrow: "01 / Signature system", text: "Column-free volume engineered for agriculture, logistics, mining and high-performance industrial use.", stat: "9–42 m clear span", image: `${imageBase}hero-arch-structure.jpg` },
  { title: "Lightweight Steel Warehouses", eyebrow: "02 / Fast deployment", text: "Cold-formed galvanized structures designed for efficient transport, assembly and long service life.", stat: "Bolt-assembled", image: `${imageBase}global-project.jpg` },
  { title: "Modular Water Tanks", eyebrow: "03 / Essential infrastructure", text: "Scalable storage systems for irrigation, food, livestock, fire protection and remote sites.", stat: "Built to scale", image: `${imageBase}global-project.jpg` },
];

const sectors = ["Agriculture & livestock", "Logistics & storage", "Mining & materials", "Manufacturing", "Sports & aviation", "Water infrastructure"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [sent, setSent] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#f4f5f1] text-[#10202c] selection:bg-[#f28c28] selection:text-[#10202c]">
      <div className="bg-[#10202c] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d9e1df] sm:px-8">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <span>Engineered for everywhere</span>
          <span className="hidden text-[#f28c28] sm:inline">Mersin · Türkiye / Global delivery</span>
        </div>
      </div>

      <header className="absolute left-0 right-0 top-8 z-30 border-b border-white/15 text-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <button onClick={() => scrollTo("top")} className="group flex items-center gap-3 text-left" aria-label="STRUCTIVA home">
            <span className="flex h-9 w-9 items-center justify-center border border-[#f28c28] bg-[#f28c28] text-sm font-black text-[#10202c] transition-transform duration-200 group-hover:rotate-45">S</span>
            <span>
              <span className="block text-[17px] font-black tracking-[0.16em]">STRUCTIVA</span>
              <span className="block text-[9px] uppercase tracking-[0.32em] text-white/60">Steel structures</span>
            </span>
          </button>
          <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.16em] lg:flex">
            <button onClick={() => scrollTo("solutions")} className="transition-colors hover:text-[#f28c28]">Solutions</button>
            <button onClick={() => scrollTo("sectors")} className="transition-colors hover:text-[#f28c28]">Sectors</button>
            <button onClick={() => scrollTo("engineering")} className="transition-colors hover:text-[#f28c28]">Engineering</button>
            <button onClick={() => scrollTo("projects")} className="transition-colors hover:text-[#f28c28]">Projects</button>
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <label className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80">
              <Globe2 size={14} />
              <select value={language} onChange={(e) => setLanguage(e.target.value)} className="cursor-pointer bg-transparent outline-none">
                {['EN', 'TR', 'DE', 'FR', 'AR'].map((lang) => <option className="text-[#10202c]" key={lang}>{lang}</option>)}
              </select>
            </label>
            <button onClick={() => scrollTo("quote")} className="bg-[#f28c28] px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#10202c] transition-all duration-200 hover:bg-white active:scale-[0.97]">Start a project <ArrowUpRight className="ml-2 inline" size={14} /></button>
          </div>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="border-t border-white/15 bg-[#10202c] px-5 py-5 lg:hidden"><div className="grid gap-4 text-[11px] font-semibold uppercase tracking-[0.16em]"><button onClick={() => scrollTo("solutions")} className="text-left">Solutions</button><button onClick={() => scrollTo("sectors")} className="text-left">Sectors</button><button onClick={() => scrollTo("engineering")} className="text-left">Engineering</button><button onClick={() => scrollTo("quote")} className="bg-[#f28c28] px-4 py-3 text-left text-[#10202c]">Start a project</button></div></div>}
      </header>

      <section id="top" className="relative flex min-h-[720px] items-end overflow-hidden bg-[#10202c] pt-32">
        <img src={`${imageBase}hero-arch-structure.jpg`} alt="STRUCTIVA arched steel building at sunrise" className="absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10202c]/95 via-[#10202c]/55 to-[#10202c]/10" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(242,140,40,0.12)_48%,transparent_49%)]" />
        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:pb-28">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f28c28]"><span className="h-px w-10 bg-[#f28c28]" /> Global steel systems / Since 1985*</div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-7xl lg:text-[92px]">Build space<br /><span className="text-[#f28c28]">without limits.</span></h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/72 sm:text-lg">Engineered steel structures for the places where progress needs room to grow.</p>
            <div className="mt-10 flex flex-wrap gap-3"><button onClick={() => scrollTo("quote")} className="bg-[#f28c28] px-6 py-4 text-[11px] font-black uppercase tracking-[0.15em] text-[#10202c] transition-all duration-200 hover:bg-white active:scale-[0.97]">Tell us what you’re building <MoveRight className="ml-3 inline" size={16} /></button><button onClick={() => scrollTo("solutions")} className="border border-white/35 px-6 py-4 text-[11px] font-black uppercase tracking-[0.15em] text-white transition-all duration-200 hover:border-[#f28c28] hover:text-[#f28c28]">Explore systems</button></div>
          </div>
          <div className="self-end justify-self-end border-l border-white/30 pl-6 text-white/75 lg:mb-2"><div className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#f28c28]">At a glance</div><div className="grid grid-cols-2 gap-x-8 gap-y-5"><div><strong className="block text-3xl font-black text-white">9–42</strong><span className="text-[10px] uppercase tracking-[0.14em]">metres clear span*</span></div><div><strong className="block text-3xl font-black text-white">25</strong><span className="text-[10px] uppercase tracking-[0.14em]">year material warranty*</span></div><div><strong className="block text-3xl font-black text-white">06</strong><span className="text-[10px] uppercase tracking-[0.14em]">core sectors</span></div><div><strong className="block text-3xl font-black text-white">30</strong><span className="text-[10px] uppercase tracking-[0.14em]">market languages</span></div></div></div>
        </div>
        <div className="absolute bottom-5 right-5 text-[9px] uppercase tracking-[0.24em] text-white/55 sm:right-12">Scroll to explore ↓</div>
      </section>

      <section className="border-b border-[#10202c]/10 bg-[#f4f5f1] px-5 py-7 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-5"><p className="max-w-xl text-sm leading-6 text-[#52616b]">From first sketch to final bolt, STRUCTIVA brings design, fabrication, logistics and assembly into one accountable flow.</p><div className="flex items-center gap-5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#10202c]/65"><span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#f28c28]" /> Quality-led</span><span className="hidden sm:flex items-center gap-2"><Sparkles size={16} className="text-[#f28c28]" /> Built to endure</span></div></div></section>

      <section id="solutions" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1400px]"><div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><div className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f28c28]">01 / The systems</div><h2 className="max-w-2xl text-4xl font-black leading-none tracking-[-0.045em] sm:text-6xl">One partner.<br /><span className="text-[#87949a]">Multiple possibilities.</span></h2></div><p className="max-w-sm text-sm leading-6 text-[#52616b]">Choose a proven system or start with a blank page. Every project is adapted to its climate, workflow and future scale.</p></div><div className="grid gap-5 lg:grid-cols-3">{solutions.map((solution) => <article key={solution.title} className="group overflow-hidden bg-white shadow-[0_12px_35px_rgba(16,32,44,0.07)] transition-transform duration-300 hover:-translate-y-1"><div className="relative h-64 overflow-hidden"><img src={solution.image} alt={solution.title} className="h-full w-full object-cover grayscale-[35%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-[#10202c]/70 to-transparent" /><span className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f28c28]">{solution.eyebrow}</span></div><div className="p-7"><div className="mb-5 flex items-start justify-between gap-4"><h3 className="text-2xl font-black leading-tight tracking-[-0.03em]">{solution.title}</h3><ArrowUpRight size={20} className="shrink-0 text-[#f28c28]" /></div><p className="mb-7 text-sm leading-6 text-[#52616b]">{solution.text}</p><div className="border-t border-[#10202c]/10 pt-4 text-[10px] font-bold uppercase tracking-[0.17em] text-[#10202c]/60">{solution.stat}</div></div></article>)}</div></div></section>

      <section id="sectors" className="bg-[#10202c] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><div className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f28c28]">02 / Built around use</div><h2 className="text-4xl font-black leading-none tracking-[-0.05em] sm:text-6xl">Your sector<br /><span className="text-[#7e919b]">has its own logic.</span></h2><p className="mt-8 max-w-sm text-sm leading-6 text-white/60">The right structure begins with understanding what happens inside it. Explore solutions by the work they enable.</p></div><div className="grid border-t border-white/20 sm:grid-cols-2">{sectors.map((sector, i) => <button key={sector} onClick={() => scrollTo("quote")} className="group flex items-center justify-between border-b border-white/20 py-6 text-left transition-colors hover:text-[#f28c28]"><span className="flex items-center gap-5"><span className="text-[10px] font-bold text-[#f28c28]">0{i + 1}</span><span className="text-lg font-semibold tracking-[-0.02em]">{sector}</span></span><MoveRight size={18} className="text-white/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#f28c28]" /></button>)}</div></div></section>

      <section id="engineering" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1400px]"><div className="mb-14 max-w-2xl"><div className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f28c28]">03 / The difference is in the detail</div><h2 className="text-4xl font-black leading-none tracking-[-0.05em] sm:text-6xl">Precision you can<br /><span className="text-[#87949a]">see and trust.</span></h2></div><div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><div className="relative min-h-[460px] overflow-hidden bg-[#d9e1df]"><img src={`${imageBase}engineering-detail.jpg`} alt="Engineer inspecting steel connection" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#10202c]/80 via-transparent to-transparent" /><div className="absolute bottom-7 left-7 max-w-sm text-white"><div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f28c28]">Engineering / 04</div><p className="text-2xl font-bold leading-tight">Every connection carries a decision.</p></div></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"><div className="border-l-2 border-[#f28c28] bg-white p-7"><div className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f28c28]">Material intelligence</div><p className="text-lg font-semibold leading-7">Galvanized structural steel selected for demanding climate and service conditions.</p></div><div className="border-l-2 border-[#10202c] bg-white p-7"><div className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f28c28]">A single accountable flow</div><p className="text-lg font-semibold leading-7">Design, production, transport and on-site assembly connected from day one.</p></div><div className="border-l-2 border-[#10202c] bg-white p-7"><div className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f28c28]">Clear documentation</div><p className="text-lg font-semibold leading-7">Technical drawings, project data and installation logic made easy to review.</p></div></div></div></div></section>

      <section id="projects" className="border-y border-[#10202c]/10 bg-[#e8ece9] px-5 py-24 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:items-center"><div><div className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f28c28]">04 / Selected direction</div><h2 className="text-4xl font-black leading-none tracking-[-0.05em] sm:text-6xl">Structures that<br /><span className="text-[#87949a]">move economies.</span></h2><p className="mt-7 max-w-sm text-sm leading-6 text-[#52616b]">A new project library will make our work searchable by country, sector, system and scale.</p><button onClick={() => scrollTo("quote")} className="mt-8 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.17em] text-[#10202c] hover:text-[#f28c28]">View project library <ArrowUpRight size={16} /></button></div><div className="relative min-h-[380px] overflow-hidden"><img src={`${imageBase}global-project.jpg`} alt="Global logistics and water infrastructure project" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-5 bg-gradient-to-t from-[#10202c]/90 to-transparent px-7 pb-7 pt-24 text-white"><div><div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#f28c28]">Concept case / Cross-sector campus</div><div className="text-2xl font-black tracking-[-0.03em]">One site. Multiple systems.</div></div><div className="text-right text-[10px] uppercase tracking-[0.16em] text-white/60">Logistics · Water · Industry</div></div></div></div></section>

      <section id="quote" className="bg-[#f28c28] px-5 py-24 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div><div className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#10202c]/65">05 / Start a conversation</div><h2 className="max-w-xl text-5xl font-black leading-[0.92] tracking-[-0.055em] text-[#10202c] sm:text-7xl">Tell us what<br />you’re building.</h2><p className="mt-7 max-w-sm text-sm leading-6 text-[#10202c]/70">Share the essentials. Our team will come back with the right technical questions and the next practical step.</p></div><form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4 bg-[#10202c] p-6 text-white sm:grid-cols-2 sm:p-8"><label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.15em] sm:col-span-2">Work email<input required type="email" placeholder="you@company.com" className="border-b border-white/30 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-white outline-none placeholder:text-white/35 focus:border-[#f28c28]" /></label><label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.15em]">Country<select className="border-b border-white/30 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none"><option className="text-[#10202c]">Select market</option><option className="text-[#10202c]">Türkiye</option><option className="text-[#10202c]">Germany</option><option className="text-[#10202c]">United States</option><option className="text-[#10202c]">Saudi Arabia</option></select></label><label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.15em]">Project type<select className="border-b border-white/30 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none"><option className="text-[#10202c]">Choose a system</option><option className="text-[#10202c]">Arched steel building</option><option className="text-[#10202c]">Warehouse</option><option className="text-[#10202c]">Water tank</option></select></label><label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.15em] sm:col-span-2">A little about the project<textarea required rows={3} placeholder="Location, approximate size, intended use..." className="resize-none border-b border-white/30 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-white outline-none placeholder:text-white/35 focus:border-[#f28c28]" /></label><button type="submit" className="mt-3 flex items-center justify-center gap-3 bg-[#f28c28] px-6 py-4 text-[10px] font-black uppercase tracking-[0.17em] text-[#10202c] transition-all duration-200 hover:bg-white active:scale-[0.97] sm:col-span-2">{sent ? <><Check size={16} /> Request received</> : <>Send project brief <MoveRight size={16} /></>}</button><p className="text-[9px] leading-4 text-white/45 sm:col-span-2">* Technical claims and warranty terms are subject to project, market and contract validation.</p></form></div></section>

      <footer className="bg-[#10202c] px-5 py-10 text-white sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 md:flex-row md:items-end"><div><div className="mb-3 text-[17px] font-black tracking-[0.16em]">STRUCTIVA</div><p className="max-w-xs text-xs leading-5 text-white/50">Engineered steel structures for a world that keeps moving.</p></div><div className="grid gap-2 text-right text-[10px] uppercase tracking-[0.14em] text-white/55"><span>AOSB Adana · Türkiye</span><span>info@structiva.com.tr · +90 532 055 09 45</span><span className="mt-3 text-[#f28c28]">© 2026 STRUCTIVA</span></div></div></footer>
    </main>
  );
}
