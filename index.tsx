import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
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

// Unified direct link to the Google Form
const DIRECT_FORM_URL = "https://forms.gle/eJmxd1Y19PVAurnU8";

// --- Components ---

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 relative flex items-center justify-center">
      <img 
        src="https://lh3.googleusercontent.com/d/1Z1KbgreYtlWphhCBb2QQBTA0gjBOZDWi" 
        alt="Alphanova Trading Logo" 
        className="w-full h-full object-contain drop-shadow-sm"
      />
    </div>
    <div className="font-poppins font-extrabold text-2xl tracking-tight leading-none flex items-center">
      <span className="text-white">Alpha</span>
      <span className="bg-gradient-to-r from-[#4ADE80] to-[#2DD4BF] bg-clip-text text-transparent">Nova</span>
      <span className="text-white">Trading</span>
    </div>
  </div>
);

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0f1e]/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo />
        
        <div className="flex items-center gap-8">
          <a 
            href={DIRECT_FORM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="brand-gradient-bg text-slate-900 px-6 py-2.5 rounded-xl font-black text-sm transition-all shadow-lg shadow-lime-500/20 hover:scale-105 active:scale-95 inline-block"
          >
            Contact Sales
          </a>
        </div>
      </div>
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
    <div className="bg-[#0a0f1e] text-white selection:bg-lime-400 selection:text-slate-900">
      <Nav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0f1e]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e] via-[#0a0f1e]/80 to-transparent z-10" />
          {/* Top hue protection gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0a0f1e]/40 to-transparent z-10 h-64" />
          <div className="w-full h-full bg-[url('https://spicenest.in/cdn/shop/articles/foxnut-exporter-870x315.jpg?v=1734001737')] bg-cover bg-center opacity-40 grayscale-[0.2]">
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
              <a 
                href={DIRECT_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 brand-gradient-bg text-slate-900 px-8 py-4.5 rounded-xl font-black text-lg transition-all shadow-2xl shadow-lime-500/30 group hover:scale-105 inline-flex"
              >
                Request Private Label Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] max-w-md mx-auto group bg-[#0a0f1e]/40 backdrop-blur-sm">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/578753d7d482e9c3a909de40/41b225c8-0575-4406-992f-0cba5a5905b2/makhana+1.jpg" 
                alt="Premium Production" 
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-[#0a0f1e]/90 backdrop-blur-xl rounded-2xl border border-white/10">
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

      {/* Why Us Section */}
      <section id="why-us" className="py-40 relative bg-[#f8fafc]">
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
              description="We cut out the traders. By sourcing directly from our partner clusters in Madhubani (The GI Hub of Makhana), we offer competitive FOB pricing without benefiting from the '5-Sut+' Export Grade quality."
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
                    ["Grades", "7 Sutta (Premium), 5 Sutta (Standard)"],
                    ["Moisture", "< 3-5% (Export Standard)"],
                    ["Shelf Life", "12 Months (Nitrogen Flushed)"]
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

      {/* About Section - Modernizing the Makhana Trade */}
      <section id="about" className="py-32 bg-[#0a0f1e] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <p className="text-[#84cc16] font-black text-xs uppercase tracking-[0.4em] mb-6">ABOUT US</p>
            <h2 className="text-5xl lg:text-[72px] font-bold text-white mb-10 leading-[1.05] tracking-tight">
              Modernizing the <br />
              Makhana Trade
            </h2>
            
            <div className="space-y-8 text-slate-400 text-lg leading-relaxed mb-12 max-w-2xl">
              <p>
                We are a team of trade professionals <span className="text-white font-black">(IIFT Alumni)</span> bridging the gap between traditional Indian agriculture and Western retail shelves.
              </p>
              <p>
                Our expertise extends to high-end, <span className="text-white font-black">export-compliant packaging solutions</span>—from premium canisters and jars to custom-printed pouches—ensuring your brand stands out on global shelves.
              </p>
              <p>
                We combine deep local relationships in Bihar with modern supply chain management. We aren't just selling nuts; we are providing a reliable, transparent procurement channel for global importers.
              </p>
              <p>
                Our core strategy revolves around <span className="text-[#84cc16] font-black">direct procurement</span> to ensure peak freshness and unmatchable FOB pricing.
              </p>
            </div>

            {/* Icons row */}
            <div className="flex flex-wrap justify-center gap-12 mt-auto">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-[#84cc16] hover:bg-white/5 transition-colors">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-[#84cc16] hover:bg-white/5 transition-colors">
                  <Users className="w-6 h-6" />
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-[#84cc16] hover:bg-white/5 transition-colors">
                  <Handshake className="w-6 h-6" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flavor Lab Section */}
      <section id="flavors" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-[#84cc16] font-extrabold text-sm uppercase tracking-[0.2em] mb-6">FLAVOR LAB</p>
            <h2 className="text-5xl lg:text-7xl font-bold text-[#1e293b] mb-8 tracking-tight">Beyond Salt & Pepper</h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Our R&D team can replicate or invent flavors to match local palates.
            </p>
          </div>

          {/* Feature Image & Label */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-20 text-center"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 mb-8 bg-slate-50">
              <img 
                src="https://lh3.googleusercontent.com/d/1YHMlX-nahr7qmlFpcbWqDSx8xTt2NmpQ" 
                alt="ALPHANOVA Flavor Collection" 
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-slate-900 font-black text-xs uppercase tracking-[0.5em]">FLAVOR CATALOGUE</p>
            <div className="w-24 h-1 brand-gradient-bg mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { 
                cat: "For the taste buds", 
                icon: <Sparkles size={24} />, 
                list: ["Salt & Paper", "Magic Masala", "Himalayan Pink Salt", "Piri Piri", "Cream & Onion"] 
              },
              { 
                cat: "New & Upcoming", 
                icon: <Flame size={24} />, 
                list: ["Dark Chocolate Drizzle", "Texas BBQ"] 
              }
            ].map((item, idx) => (
              <motion.div
                key={item.cat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-start text-left group hover:shadow-2xl transition-all duration-500"
              >
                {/* Icon Container */}
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
      <footer className="pt-20 pb-12 bg-[#0a0f1e]">
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
                <a 
                  href={DIRECT_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0a0f1e] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all shadow-xl inline-block"
                >
                  Order Sample Kit
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 relative hidden lg:block">
              <div 
                className="w-72 h-72 rounded-[2.5rem] rotate-6 hover:rotate-0 transition-transform duration-500 shadow-2xl overflow-hidden group bg-[#0a0f1e]"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/d/1GQa6X0-39XtOCekWRIPE5aDZI_jmENKp')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="w-full h-full p-8 flex flex-col justify-between bg-black/40 group-hover:bg-black/20 transition-colors">
                  <Globe2 className="w-12 h-12 text-lime-400" />
                  <div>
                    <p className="text-sky-400 font-black text-xs tracking-widest mb-1 uppercase drop-shadow-md">Global Express</p>
                    <p className="text-white text-2xl font-extrabold drop-shadow-md">5 Day <br /> Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between gap-16 pb-20">
            <div className="max-w-md">
              <div className="mb-8">
                <Logo />
              </div>
              <p className="text-slate-500 mb-10 leading-relaxed font-bold italic">Modernizing the Makhana supply chain through direct sourcing and agile manufacturing. Managed by IIFT Alumni.</p>
            </div>

            <div>
              <h4 className="font-black text-xs text-white uppercase tracking-[0.2em] mb-8">Contact</h4>
              <ul className="space-y-5 text-slate-500 font-bold">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-lime-400 mt-0.5" />
                  <a href="mailto:trade@alphanovatrading.com?subject=Request%20for%20sample%20of%20Makhana&body=specifications%20%3A%0AContact%20Details%20%3A" className="text-sm hover:text-white transition-colors">trade@alphanovatrading</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-sky-400" />
                  <a href="tel:+919810894357" className="text-sm hover:text-white transition-colors">+91 9810894357</a>
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