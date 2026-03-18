import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Zap, 
  Moon, 
  MessageSquare, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Cpu,
  X,
  Clock,
  Send,
  Phone,
  Video,
  MoreVertical,
  ChevronLeft
} from "lucide-react";

const ElectricBackground = () => {
  return (
    <div className="electric-bg">
      {[...Array(20)].map((_, i) => (
        <div
          key={`line-${i}`}
          className="data-line"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${200 + Math.random() * 400}px`,
            animationDuration: `${3 + Math.random() * 7}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      {[...Array(30)].map((_, i) => (
        <div
          key={`point-${i}`}
          className="data-point"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

const SectionReveal = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const WhatsAppDemo = ({ isOpen, onClose, onRedirect }: { isOpen: boolean, onClose: () => void, onRedirect: () => void }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-8 overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="fixed top-6 right-6 text-white/40 hover:text-white transition-colors z-[120] bg-black/50 p-2 rounded-full"
        >
          <X className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12">
          {/* Left Side: Text Info */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4 lg:mb-8 leading-tight">
              Le Simulateur de <br />
              <span className="text-cyan-electric">Conversion WhatsApp</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/60 mb-6 lg:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Voyez comment l'agent IA "Antigravity Prime" gère les ventes à Ngaoundéré, 
              répond instantanément et relance les indécis sans votre intervention.
            </p>
            <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-0">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-cyan-electric/10 flex items-center justify-center shrink-0">
                  <Zap className="text-cyan-electric w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm lg:text-base">Réponse Instantanée (2s)</h4>
                  <p className="text-xs lg:text-sm text-white/40">Vitesse de réponse humaine impossible à égaler.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-cyan-electric/10 flex items-center justify-center shrink-0">
                  <Clock className="text-cyan-electric w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm lg:text-base">Relance Automatique</h4>
                  <p className="text-xs lg:text-sm text-white/40">L'IA recontacte le client après 3h d'inactivité.</p>
                </div>
              </div>
            </div>
            <button 
              onClick={onRedirect}
              className="mt-8 lg:mt-12 px-8 lg:px-10 py-4 lg:py-5 bg-cyan-electric text-black-abs font-black text-xs lg:text-sm rounded-xl shadow-[0_0_30px_rgba(0,240,255,0.5)] animate-blink uppercase tracking-widest w-full sm:w-auto"
            >
              TESTER LA RELANCE AUTO EN DIRECT
            </button>
          </div>

          {/* Right Side: Smartphone Mockup */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] bg-[#0A0A0A] rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-[#1A1A1A] shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden animate-float shrink-0"
            >
              {/* WhatsApp UI */}
              <div className="flex flex-col h-full bg-[#0A0A0A]">
                {/* Header */}
                <div className="bg-[#121B22] p-4 pt-8 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <ChevronLeft className="w-5 h-5 text-cyan-electric" />
                    <div className="w-10 h-10 rounded-full bg-cyan-electric/20 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-cyan-electric" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Gentle Gate AI</div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] text-green-500 font-bold uppercase tracking-tighter">Agent Actif - 24h/24</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-cyan-electric">
                    <Video className="w-5 h-5" />
                    <Phone className="w-5 h-5" />
                    <MoreVertical className="w-5 h-5" />
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-grow p-4 space-y-4 overflow-y-auto bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-opacity-5">
                  {/* Client Message */}
                  <div className="flex justify-end">
                    <div className="bg-[#005C4B] p-3 rounded-2xl rounded-tr-none max-w-[80%] shadow-lg">
                      <p className="text-sm">Bonjour, vous avez le S24 Ultra en stock ?</p>
                      <span className="text-[10px] text-white/40 block text-right mt-1">12:00:01</span>
                    </div>
                  </div>

                  {/* Agent Message */}
                  <div className="flex justify-start">
                    <div className="bg-[#202C33] p-3 rounded-2xl rounded-tl-none max-w-[80%] shadow-lg border-l-2 border-cyan-electric">
                      <p className="text-sm">Bonjour ! 👋 Oui, il nous en reste exactement 2 exemplaires scellés dans notre boutique de Ngaoundéré (Gare de Dang). Le prix est de 650 000 FCFA. Voulez-vous voir les photos réelles ?</p>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-[9px] bg-cyan-electric/20 text-cyan-electric px-1.5 py-0.5 rounded font-bold uppercase">Réponse Instantanée</span>
                        <span className="text-[10px] text-white/40">12:00:02</span>
                      </div>
                    </div>
                  </div>

                  {/* Client Message */}
                  <div className="flex justify-end">
                    <div className="bg-[#005C4B] p-3 rounded-2xl rounded-tr-none max-w-[80%] shadow-lg">
                      <p className="text-sm">Oui je veux bien voir.</p>
                      <span className="text-[10px] text-white/40 block text-right mt-1">12:00:10</span>
                    </div>
                  </div>

                  {/* Agent Photo Message */}
                  <div className="flex justify-start">
                    <div className="bg-[#202C33] p-2 rounded-2xl rounded-tl-none max-w-[80%] shadow-lg">
                      <img 
                        src="https://picsum.photos/seed/phone/300/200" 
                        alt="Samsung S24" 
                        className="rounded-xl mb-2 w-full h-32 object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <p className="text-sm px-1">Le voici ! C'est le modèle Titanium Gray. On vous le réserve pour un passage en boutique aujourd'hui ?</p>
                      <span className="text-[10px] text-white/40 block text-right mt-1">12:00:12</span>
                    </div>
                  </div>

                  {/* Client Message */}
                  <div className="flex justify-end">
                    <div className="bg-[#005C4B] p-3 rounded-2xl rounded-tr-none max-w-[80%] shadow-lg">
                      <p className="text-sm">Je réfléchis encore un peu.</p>
                      <span className="text-[10px] text-white/40 block text-right mt-1">12:05:00</span>
                    </div>
                  </div>

                  {/* Follow-up Indicator */}
                  <div className="flex justify-center my-6">
                    <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-2">
                      <Clock className="w-3 h-3 text-cyan-electric" />
                      <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Après 3 heures d'inactivité...</span>
                    </div>
                  </div>

                  {/* Agent Follow-up */}
                  <div className="flex justify-start">
                    <div className="bg-[#202C33] p-3 rounded-2xl rounded-tl-none max-w-[80%] shadow-lg border-l-2 border-cyan-electric">
                      <p className="text-sm">Je me permets de revenir vers vous car un client vient de passer pour le premier exemplaire. Il n'en reste plus qu'un seul en stock. Je vous le bloque pour 1h ?</p>
                      <span className="text-[10px] text-white/40 block text-right mt-1">15:00:00</span>
                    </div>
                  </div>
                </div>

                {/* Footer / Input */}
                <div className="p-4 bg-[#121B22] flex items-center gap-3">
                  <div className="flex-grow bg-[#2A3942] rounded-full px-4 py-2 text-white/40 text-xs">
                    Taper un message...
                  </div>
                  <div className="w-10 h-10 rounded-full bg-cyan-electric flex items-center justify-center">
                    <Send className="w-5 h-5 text-black-abs" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[700px] bg-cyan-electric/10 blur-[100px] -z-10"></div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  const WHATSAPP_NUMBER = "237686382354";
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  
  const handleWhatsAppRedirect = (message?: string) => {
    const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
    const fullUrl = message 
      ? `${baseUrl}?text=${encodeURIComponent(message)}`
      : baseUrl;
    window.open(fullUrl, "_blank");
  };

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-electric selection:text-black-abs">
      <ElectricBackground />

      <WhatsAppDemo 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
        onRedirect={() => handleWhatsAppRedirect("Bonjour Gentle Gate, je viens de voir la démo et je veux tester la relance auto en direct !")}
      />

      {/* Header */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black-abs/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-cyan-electric rounded-lg flex items-center justify-center">
              <Cpu className="text-black-abs w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white-titanium">
              GENTLE <span className="text-cyan-electric">GATE</span>
            </span>
          </div>
          <button 
            onClick={() => handleWhatsAppRedirect("Bonjour Gentle Gate, je souhaite en savoir plus sur vos solutions d'IA.")}
            className="hidden md:block px-6 py-2 border border-cyan-electric text-cyan-electric rounded-full hover:bg-cyan-electric hover:text-black-abs transition-all duration-300 font-medium"
          >
            Démarrer l'IA
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-electric/30 bg-cyan-electric/5 text-cyan-electric text-xs font-bold tracking-widest uppercase">
              Propulsé par Gemini 3.0 Flash
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.9] text-white-titanium">
              L'IA qui vend pour vous <br />
              <span className="text-cyan-electric">quand le monde s'arrête.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              Automatisez votre business sur WhatsApp avec la puissance de l'IA. 
              Zéro coupure, 100% conversion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => handleWhatsAppRedirect("Bonjour Gentle Gate, je souhaite lancer mon agent WhatsApp dès maintenant.")}
                className="w-full sm:w-auto px-10 py-5 bg-cyan-electric text-black-abs font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(0,240,255,0.3)]"
              >
                Lancer mon Agent WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setIsDemoOpen(true)}
                className="w-full sm:w-auto px-10 py-5 border border-white/10 hover:bg-white/5 rounded-xl transition-colors font-bold"
              >
                Voir la Démo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 md:py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Opportunités & Avantages</h2>
              <div className="w-20 h-1 bg-cyan-electric mx-auto"></div>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectionReveal>
              <div className="p-8 rounded-3xl border border-white/5 bg-black-abs/50 backdrop-blur-sm hover:border-cyan-electric/50 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-cyan-electric/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="text-cyan-electric w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Le Cloud contre le Délestage</h3>
                <p className="text-white/60 leading-relaxed">
                  Ne laissez plus une coupure d'électricité paralyser vos ventes. Votre agent IA est hébergé sur des serveurs internationaux. Il répond, vend et encaisse même quand votre téléphone est éteint ou que le quartier est dans le noir.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="p-8 rounded-3xl border border-white/5 bg-black-abs/50 backdrop-blur-sm hover:border-cyan-electric/50 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-cyan-electric/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Moon className="text-cyan-electric w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">L'Employé qui ne dort jamais</h3>
                <p className="text-white/60 leading-relaxed">
                  Un client vous écrit à 3h du matin depuis la Gare de Dang ? Il reçoit son catalogue et ses prix instantanément. Ne ratez plus aucune opportunité de nuit.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="p-8 rounded-3xl border border-white/5 bg-black-abs/50 backdrop-blur-sm hover:border-cyan-electric/50 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-cyan-electric/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="text-cyan-electric w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">La Relance Intelligente</h3>
                <p className="text-white/60 leading-relaxed">
                  À Ngaoundéré, la concurrence est rude. Si un client hésite, votre IA le relance poliment après quelques heures. C'est la différence entre un "vu" et une vente encaissée.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="p-8 rounded-3xl border border-white/5 bg-black-abs/50 backdrop-blur-sm hover:border-cyan-electric/50 transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-cyan-electric/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="text-cyan-electric w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Intelligence de Proximité</h3>
                <p className="text-white/60 leading-relaxed">
                  Un système qui comprend vos clients, leurs habitudes et leur langage, pour une confiance immédiate.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Nos Packs de Puissance</h2>
              <p className="text-white/60">Choisissez le moteur de votre croissance</p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pack Essentiel */}
            <SectionReveal>
              <div className="relative p-8 rounded-3xl border border-white/10 bg-black-abs/40 flex flex-col h-full hover:border-white/20 transition-all">
                <h3 className="text-xl font-bold mb-2">PACK ESSENTIEL</h3>
                <p className="text-cyan-electric font-medium mb-6">"Visibilité Totale"</p>
                <div className="text-4xl font-black mb-8">100k <span className="text-sm font-normal text-white/40">FCFA</span></div>
                <ul className="space-y-4 mb-12 flex-grow">
                  <li className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 className="w-5 h-5 text-cyan-electric" />
                    FAQ 24h/24
                  </li>
                  <li className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 className="w-5 h-5 text-cyan-electric" />
                    Cloud-stable (Anti-délestage)
                  </li>
                  <li className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 className="w-5 h-5 text-cyan-electric" />
                    Catalogue Interactif
                  </li>
                </ul>
                <button 
                  onClick={() => handleWhatsAppRedirect("Bonjour Gentle Gate, je suis intéressé par le PACK ESSENTIEL (Visibilité Totale).")}
                  className="w-full py-4 border border-white/20 rounded-xl font-bold hover:bg-white/5 transition-colors"
                >
                  Choisir ce pack
                </button>
              </div>
            </SectionReveal>

            {/* Pack Business AI */}
            <SectionReveal>
              <div className="relative p-8 rounded-3xl border-2 border-cyan-electric bg-cyan-electric/5 flex flex-col h-full shadow-[0_0_40px_rgba(0,240,255,0.1)]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-electric text-black-abs text-xs font-black rounded-full uppercase tracking-widest">
                  Plus Populaire
                </div>
                <h3 className="text-xl font-bold mb-2">PACK BUSINESS AI</h3>
                <p className="text-cyan-electric font-medium mb-6">"Le Vendeur Expert"</p>
                <div className="text-4xl font-black mb-8">350k <span className="text-sm font-normal text-white/40">FCFA</span></div>
                <ul className="space-y-4 mb-12 flex-grow">
                  <li className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 className="w-5 h-5 text-cyan-electric" />
                    Relance automatique
                  </li>
                  <li className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 className="w-5 h-5 text-cyan-electric" />
                    Analyse de sentiment
                  </li>
                  <li className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 className="w-5 h-5 text-cyan-electric" />
                    Gestion des Objections
                  </li>
                  <li className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 className="w-5 h-5 text-cyan-electric" />
                    Support Prioritaire
                  </li>
                </ul>
                <button 
                  onClick={() => handleWhatsAppRedirect("Bonjour Gentle Gate, je suis intéressé par le PACK BUSINESS AI (Le Vendeur Expert).")}
                  className="w-full py-4 bg-cyan-electric text-black-abs rounded-xl font-bold hover:opacity-90 transition-opacity"
                >
                  Choisir ce pack
                </button>
              </div>
            </SectionReveal>

            {/* Pack Premium */}
            <SectionReveal>
              <div className="relative p-8 rounded-3xl border border-white/10 bg-black-abs/40 flex flex-col h-full hover:border-white/20 transition-all">
                <h3 className="text-xl font-bold mb-2">PACK PREMIUM</h3>
                <p className="text-cyan-electric font-medium mb-6">"Écosystème Architecte"</p>
                <div className="text-4xl font-black mb-8">750k <span className="text-sm font-normal text-white/40">FCFA</span></div>
                <ul className="space-y-4 mb-12 flex-grow">
                  <li className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 className="w-5 h-5 text-cyan-electric" />
                    Dashboard Next.js dédié
                  </li>
                  <li className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 className="w-5 h-5 text-cyan-electric" />
                    Intégration Stocks temps réel
                  </li>
                  <li className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 className="w-5 h-5 text-cyan-electric" />
                    IA Multi-agents
                  </li>
                  <li className="flex items-center gap-3 text-white/70">
                    <CheckCircle2 className="w-5 h-5 text-cyan-electric" />
                    CRM Intégré
                  </li>
                </ul>
                <button 
                  onClick={() => handleWhatsAppRedirect("Bonjour Gentle Gate, je suis intéressé par le PACK PREMIUM (Écosystème Architecte).")}
                  className="w-full py-4 border border-white/20 rounded-xl font-bold hover:bg-white/5 transition-colors"
                >
                  Choisir ce pack
                </button>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-32 px-6">
        <SectionReveal>
          <div className="max-w-5xl mx-auto p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-cyan-electric to-blue-600 text-black-abs text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 leading-tight">
                Prêt à libérer votre <br /> temps et vos revenus ?
              </h2>
              <p className="text-lg md:text-xl font-medium mb-8 md:mb-12 opacity-80 max-w-2xl mx-auto">
                Rejoignez les entrepreneurs qui ont déjà automatisé leur succès avec GENTLE GATE.
              </p>
              <button 
                onClick={() => handleWhatsAppRedirect("Bonjour Gentle Gate, je suis prêt à libérer mon temps et mes revenus. Comment commencer ?")}
                className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-black-abs text-white-titanium font-bold rounded-2xl hover:scale-105 transition-transform shadow-2xl"
              >
                Démarrer maintenant
              </button>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </SectionReveal>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-electric rounded flex items-center justify-center">
              <Cpu className="text-black-abs w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tighter">
              GENTLE <span className="text-cyan-electric">GATE</span>
            </span>
          </div>
          <div className="text-white/40 text-sm">
            © 2026 GENTLE EMERGENCE. Tous droits réservés.
          </div>
          <div className="flex gap-8 text-white/60 text-sm font-medium">
            <a href="#" className="hover:text-cyan-electric transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-cyan-electric transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-cyan-electric transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
