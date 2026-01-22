import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Menu, 
  X, 
  Globe2, 
  Factory, 
  ShieldCheck, 
  Beaker, 
  Package, 
  Ship, 
  Mail, 
  MapPin, 
  TrendingUp, 
  Flame, 
  Sparkles, 
  Apple, 
  ShieldPlus, 
  Phone, 
  Info,
  MapPin as MapIcon,
  Users,
  Handshake,
  Beef,
  Cookie,
  Heart
} from 'lucide-react';

// --- Types ---
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  index: number;
}

interface StepProps {
  number: string;
  title: string;
  detail: string;
  icon: React.ReactNode;
  index: number;
}

// --- Components ---

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 relative flex items-center justify-center">
      {/* High-fidelity SVG reconstruction of the leaf/arrow 'A' logo */}
      <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
        <path d="M120 420C120 420 130 320 180 220C220 140 300 120 350 140C300 170 250 240 220 320C190 400 180 460 180 460L120 420Z" fill="url(#leaf_grad)" />
        <path d="M110 430C110 430 160 400 210 300C260 200 340 160 400 140" stroke="url(#arrow_grad)" strokeWidth="44" strokeLinecap="round" />
        <path d="M350 130L410 140L400 200" stroke="url(#arrow_grad)" strokeWidth="44" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="leaf_grad" x1="120" y1="290" x2="350" y2="290" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A3E635" />
            <stop offset="1" stopColor="#65A30D" />
          </linearGradient>
          <linearGradient id="arrow_grad" x1="110" y1="285" x2="410" y2="140" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0369A1" />
            <stop offset="1" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <span className="text-2xl font-black tracking-tighter flex items-baseline">
      <span className="text-white uppercase">ALPHANOVA</span>
      <span className="brand-gradient-text">trading</span>
    </span>
  </div>
);

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8">
          {['Solutions', 'Process', 'Specs', 'The Lab'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-bold text-slate-300 hover:text-lime-400 transition-colors">{item}</a>
          ))}
          <button className="brand-gradient-bg text-slate-900 px-6 py-2.5 rounded-xl font-black text-sm transition-all shadow-lg shadow-lime-500/20 hover:scale-105 active:scale-95">
            Contact Sales
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {['Solutions', 'Process', 'Specs', 'The Lab'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setMobileMenu(false)} className="text-lg font-bold text-white">{item}</a>
              ))}
              <button className="brand-gradient-bg text-slate-900 py-4 rounded-xl font-black">Request a Quote</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FeatureCard = ({ icon, title, subtitle, description, index }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    className="bg-white rounded-[2rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
  >
    <div className="w-16 h-16 bg-lime-50 rounded-2xl flex items-center justify-center mb-10 text-lime-600">
      {icon}
    </div>
    <p className="text-lime-500 text-[11px] font-black uppercase tracking-[0.2em] mb-4">{subtitle}</p>
    <h3 className="text-2xl font-extrabold text-slate-900 mb-6 leading-tight">{title}</h3>
    <p className="text-slate-500 text-[15px] leading-relaxed font-medium">{description}</p>
  </motion.div>
);

const Step = ({ number, title, detail, icon, index }: StepProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15 }}
    className="relative group flex-1"
  >
    <div className="p-10 h-full bg-[#0a1122]/80 rounded-[2rem] border border-white/5 relative z-10 hover:border-lime-500/30 transition-all shadow-xl">
      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full brand-gradient-bg flex items-center justify-center text-sm font-black text-slate-900 shadow-lg shadow-lime-500/20">
        {number}
      </div>
      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-lime-400 mb-8 group-hover:bg-lime-500/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{title}</h3>
      <p className="text-slate-400 text-base leading-relaxed">{detail}</p>
    </div>
    {index < 3 && (
      <div className="hidden lg:block absolute top-[60%] -right-8 z-0 w-16 h-[1px] bg-white/10" />
    )}
  </motion.div>
);

const App = () => {
  return (
    <div className="bg-slate-900 text-white selection:bg-lime-400 selection:text-slate-900">
      <Nav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40 z-10" />
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <span className="text-white text-[10vw] font-black uppercase tracking-tighter select-none">FACTORY DIRECT</span>
            </div>
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
              Premium Makhana <br />
              <span className="brand-gradient-text">Manufacturing & Private Label</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
              Sourced from Madhubani. Roasted for the World. Your Brand, Our Supply Chain. Direct factory sourcing for global retail.
            </p>

            <div className="space-y-4 mb-12">
              {[
                "End-to-End White Labeling",
                "Custom Flavor Formulation (R&D)",
                "FCL/LCL Export Ready"
              ].map((hook) => (
                <div key={hook} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  </div>
                  <span className="text-lg font-bold text-slate-100">{hook}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <button className="flex items-center justify-center gap-3 brand-gradient-bg text-slate-900 px-8 py-4.5 rounded-xl font-black text-lg transition-all shadow-2xl shadow-lime-500/30 group hover:scale-105">
                <Download className="w-5 h-5" />
                Download Catalog & Specs
              </button>
              <button className="flex items-center justify-center gap-3 border-2 border-white/20 hover:border-sky-500/50 hover:bg-white/5 text-white px-8 py-4.5 rounded-xl font-black text-lg transition-all group">
                Request Private Label Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] max-w-md mx-auto group">
              <img 
                src="https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80" 
                alt="Premium Production" 
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lime-400 font-black text-xs uppercase tracking-widest">Quality Metrics</span>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Moisture</p>
                    <p className="text-lg font-black">&lt; 3.5%</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Export Grade</p>
                    <p className="text-lg font-black">5 SUT+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-lime-500/10 blur-[100px] rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-sky-500/10 blur-[100px] rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="solutions" className="py-40 relative bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="text-lime-500 font-black text-sm uppercase tracking-[0.3em] mb-4">WHY US</p>
            <h2 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-8 leading-tight">Why Global Brands Source <br /> From Us</h2>
            <div className="w-24 h-1.5 brand-gradient-bg mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard 
              index={0}
              icon={<MapIcon size={32} />}
              subtitle="COST & QUALITY"
              title="The 'Origin' Advantage"
              description="We cut out the traders. By sourcing directly from our partner clusters in Madhubani (The GI Hub of Makhana), we offer competitive FOB pricing without compromising on the '5-Sut+' Export Grade quality."
            />
            <FeatureCard 
              index={1}
              icon={<Beaker size={32} />}
              subtitle="CUSTOM FLAVOR HOOK"
              title="Agile R&D"
              description="Don't settle for generic masala. Our food tech team develops bespoke flavor profiles tailored to your target market—whether it's Truffle for Europe, Wasabi for Japan, or BBQ for the US."
            />
            <FeatureCard 
              index={2}
              icon={<ShieldCheck size={32} />}
              subtitle="INTERNATIONAL STANDARDS"
              title="Export-Grade Compliance"
              description="We understand international compliance. From moisture control (<5%) to vacuum packing for freshness, our logistics are optimized for the long haul to Western ports."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-[#050a15]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <p className="text-lime-500 font-black text-sm uppercase tracking-[0.3em] mb-4">PRIVATE LABEL</p>
            <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-8">Launch Your Superfood Brand in 4 Steps</h2>
            <div className="w-24 h-1.5 brand-gradient-bg mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <Step index={0} number="01" title="Select Your Grade" detail="Choose from Raw (Phool), Roasted, or Pops (Jumbo/Premium)." icon={<Package className="w-8 h-8" />} />
            <Step index={1} number="02" title="Define Your Flavor" detail="Pick from our library or request a Custom Signature Blend." icon={<Beaker className="w-8 h-8" />} />
            <Step index={2} number="03" title="Choose Packaging" detail="Stand-up Pouches, Jars, or Bulk Sacks. We handle the printing." icon={<LayoutIcon />} />
            <Step index={3} number="04" title="Global Delivery" detail="We handle the freight and documentation (FOB/CIF) to any port." icon={<Ship className="w-8 h-8" />} />
          </div>

          <div className="flex justify-center">
            <div className="brand-gradient-bg p-[1px] rounded-2xl shadow-2xl shadow-lime-500/20">
              <div className="bg-[#050a15] px-10 py-4 rounded-[inherit]">
                <p className="text-white font-bold tracking-tight text-lg">Low MOQs available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section id="specs" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-lime-500 font-black text-sm uppercase tracking-[0.3em] mb-4">TECHNICAL DATA</p>
            <h2 className="text-5xl lg:text-7xl font-extrabold text-[#0f172a] mb-8">Product Specifications</h2>
            <div className="w-24 h-1.5 brand-gradient-bg mx-auto rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-2xl shadow-slate-200"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#0f172a]">
                  <tr>
                    <th className="px-10 py-6 text-sm font-black uppercase tracking-widest text-white">Parameter</th>
                    <th className="px-10 py-6 text-sm font-black uppercase tracking-widest text-white">Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Origin", "Madhubani, Bihar, India"],
                    ["Variety", "Euryale Ferox (Fox Nut / Gorgon Nut)"],
                    ["Grades", "5 Sut+ (Platinum), 4 Sut+ (Gold)"],
                    ["Moisture", "< 3-5% (Export Standard)"],
                    ["Shelf Life", "12 Months (Nitrogen Flushed)"],
                    ["Certifications", "FSSAI, ISO, HACCP, FDA (Registered)"]
                  ].map(([label, value]) => (
                    <tr key={label} className="group hover:bg-slate-50 transition-colors">
                      <td className="px-10 py-6 font-bold text-lime-500 transition-colors text-lg">{label}</td>
                      <td className="px-10 py-6 font-semibold text-slate-600 text-lg">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-slate-900 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute top-4 left-4 w-full h-full border border-lime-500/20 rounded-[3rem] -z-10" />
            <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] relative">
              <img 
                src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80" 
                alt="Direct sourcing on ground" 
                className="w-full h-full object-cover grayscale-[0.1]"
              />
              <div className="absolute bottom-8 left-8 p-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 min-w-[200px]">
                <p className="text-lime-400 font-black text-sm uppercase tracking-widest mb-1">On Ground</p>
                <p className="text-white text-lg font-bold">Madhubani, Bihar</p>
              </div>
            </div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-lime-500/10 blur-[120px] rounded-full pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <p className="text-lime-500 font-black text-sm uppercase tracking-[0.3em] mb-4">ABOUT US</p>
            <h2 className="text-5xl lg:text-7xl font-extrabold text-white mb-10 leading-tight">Modernizing the <br /> Makhana Trade</h2>
            
            <div className="space-y-8 text-slate-300 text-lg leading-relaxed mb-16">
              <p>
                We are a team of trade professionals <span className="text-white font-black">(IIFT Alumni)</span> bridging the gap between traditional Indian agriculture and Western retail shelves.
              </p>
              <p>
                We combine deep local relationships in Bihar with modern supply chain management. We aren't just selling nuts; we are providing a reliable, transparent procurement channel for global importers.
              </p>
              <p>
                Our core strategy revolves around <span className="text-lime-400 font-black">direct procurement</span> to ensure peak freshness and unmatchable FOB pricing.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-white mb-1 uppercase tracking-tight">Modern</h4>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Supply Chain</p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-white mb-1 uppercase tracking-tight">IIFT</h4>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Alumni Team</p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-lime-400 mb-6 group-hover:scale-110 transition-transform">
                  <Handshake className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-white mb-1 uppercase tracking-tight">Direct</h4>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Sourcing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flavor Lab Section - Re-designed to match screenshot */}
      <section id="the-lab" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-[#84cc16] font-extrabold text-sm uppercase tracking-[0.2em] mb-6">FLAVOR LAB</p>
            <h2 className="text-5xl lg:text-7xl font-bold text-[#1e293b] mb-8 tracking-tight">Beyond Salt & Pepper</h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Our R&D team can replicate or invent flavors to match local palates.
            </p>
            {/* Gradient Divider */}
            <div className="w-32 h-1.5 brand-gradient-bg mx-auto rounded-full mt-10" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { cat: "Western Savory", icon: <Beef size={24} />, list: ["Sour Cream & Chive", "Texas BBQ", "Jalapeño Cheese"] },
              { cat: "Exotic / Premium", icon: <Sparkles size={24} />, list: ["Himalayan Pink Salt", "Black Truffle", "Olive Oil Roast"] },
              { cat: "Sweet / Dessert", icon: <Cookie size={24} />, list: ["Dark Chocolate Drizzle", "Caramel Glaze", "Cinnamon Toast"] },
              { cat: "Functional", icon: <Heart size={24} />, list: ["Turmeric & Ginger (Immunity)", "Protein-Fortified"] }
            ].map((item, idx) => (
              <motion.div
                key={item.cat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-start text-left group hover:shadow-2xl transition-all duration-500"
              >
                {/* Icon Container - Matching Screenshot */}
                <div className="w-12 h-12 bg-[#ecfccb] rounded-xl flex items-center justify-center mb-8 text-[#65a30d] group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-[22px] font-bold mb-10 text-[#1e293b]">{item.cat}</h3>
                
                <ul className="space-y-4 w-full">
                  {item.list.map(f => (
                    <li key={f} className="flex items-center gap-3 text-slate-500 font-medium text-base">
                      {/* Green Bullet Point */}
                      <div className="w-2 h-2 rounded-full bg-[#84cc16] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & Final CTA */}
      <footer className="pt-20 pb-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="brand-gradient-bg rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 mb-32 shadow-2xl shadow-lime-500/20"
          >
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">Request a Commercial Sample Kit.</h2>
              <p className="text-xl text-slate-900/80 font-bold leading-relaxed mb-10">We ship our top grades and flavors to NY, London, or Berlin within <span className="text-slate-900 font-black">5 days</span>.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all shadow-xl">Order Sample Kit</button>
              </div>
            </div>
            <div className="flex-shrink-0 relative hidden lg:block">
              <div className="w-72 h-72 bg-slate-900 rounded-[2.5rem] p-8 rotate-6 hover:rotate-0 transition-transform duration-500 shadow-2xl flex flex-col justify-between">
                <Globe2 className="w-12 h-12 text-lime-400" />
                <div>
                  <p className="text-sky-400 font-black text-xs tracking-widest mb-1 uppercase">Global Express</p>
                  <p className="text-white text-2xl font-extrabold">5 Day <br /> Delivery</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-16 pb-20">
            <div className="col-span-2">
              <div className="mb-8">
                <Logo />
              </div>
              <p className="text-slate-500 max-w-xs mb-10 leading-relaxed font-bold italic">Modernizing the Makhana supply chain through direct sourcing and agile manufacturing. Managed by IIFT Alumni.</p>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-xl bg-slate-800 border border-white/5 flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-all cursor-pointer">
                    <span className="text-[10px] font-black text-white/50">CERT</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-black text-xs text-white uppercase tracking-[0.2em] mb-8">Solutions</h4>
              <ul className="space-y-4 text-slate-500 font-bold">
                <li><a href="#" className="hover:text-lime-400 transition-colors">Raw Bulk Sacks</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">Private Labeling</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">Custom Flavors</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xs text-white uppercase tracking-[0.2em] mb-8">Company</h4>
              <ul className="space-y-4 text-slate-500 font-bold">
                <li><a href="#" className="hover:text-lime-400 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">IIFT Alumni</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">Operations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xs text-white uppercase tracking-[0.2em] mb-8">Contact</h4>
              <ul className="space-y-5 text-slate-500 font-bold">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-lime-400 mt-0.5" />
                  <span className="text-sm">trade@alphanovatrading.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-sky-400" />
                  <span className="text-sm">+91 98765 43210</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-sm font-black tracking-widest uppercase">
            <p>© {new Date().getFullYear()} ALPHANOVAtrading.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Helpers ---
const LayoutIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
