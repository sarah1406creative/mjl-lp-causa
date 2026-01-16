import React, { useEffect, useState, useRef } from 'react';
import Button from './Button';
import { GOOGLE_MAPS_LINK } from '../constants';

const HERO_TAGS = [
  "INVENTÁRIO E PARTILHA",
  "DIVÓRCIO E SEPARAÇÃO",
  "PENSÃO E GUARDA",
  "PLANEJAMENTO SUCESSÓRIO",
  "PROTEÇÃO PATRIMONIAL"
];

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [currentTag, setCurrentTag] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      // Only apply parallax on desktop
      if (window.innerWidth > 768 && window.scrollY < window.innerHeight + 100) {
        setOffsetY(window.scrollY * 0.4);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tag Rotator Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTag((prev) => (prev + 1) % HERO_TAGS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if ((window as any).Typebot) {
      (window as any).Typebot.open();
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center bg-[#0a0605] overflow-hidden justify-center pb-16 md:pb-24"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#0a0605]">
        <div
          style={{
            transform: window.innerWidth > 768 ? `translateY(${offsetY}px) scale(1.1)` : 'scale(1.05)',
            willChange: 'transform'
          }}
          className="absolute inset-0 w-full h-full transition-transform duration-75 ease-out"
        >
          <img
            src="/assets/hero-bg.webp"
            alt="Justiça e Proteção Familiar"
            fetchPriority="high"
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-1000 ease-out-expo ${imgLoaded ? 'opacity-40 blur-0 scale-100' : 'opacity-0 blur-lg scale-105'
              }`}
          />
        </div>

        {/* Moving Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-mjl-gold/10 rounded-full mix-blend-screen blur-[60px] md:blur-[100px] animate-blob opacity-20"></div>
          <div className="absolute top-1/3 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#C6A168]/10 rounded-full mix-blend-screen blur-[50px] md:blur-[80px] animate-blob animation-delay-2000 opacity-10"></div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080504] via-[#080504]/90 to-[#080504]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080504] via-transparent to-[#080504]/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24 md:pt-20">
        <div className="max-w-3xl space-y-6 md:space-y-8">

          {/* Dynamic Tags Rotator */}
          <div className="flex items-center gap-3 mb-2 reveal">
            <div className="h-[2px] w-8 sm:w-12 bg-mjl-gold"></div>
            <div className="relative h-6 w-full max-w-md overflow-hidden">
              {HERO_TAGS.map((tag, i) => (
                <span
                  key={i}
                  className={`absolute top-0 left-0 text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] text-mjl-gold uppercase transition-all duration-700 ease-out-expo whitespace-nowrap ${i === currentTag
                    ? 'opacity-100 translate-y-0 filter blur-0'
                    : 'opacity-0 translate-y-4 filter blur-sm'
                    }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-bold text-white leading-[1.1] md:leading-[1.1] tracking-tight reveal delay-300">
            Proteção para o seu <br />
            <span className="text-mjl-gold">Patrimônio Familiar</span>.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-400 font-light leading-relaxed max-w-2xl reveal delay-400">
            Especialistas em <strong className="text-white font-medium">Inventário e Direito de Família</strong>. Soluções ágeis e seguras para garantir a tranquilidade da sua sucessão patrimonial.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 md:pt-6 reveal delay-300">
            <a href="#" onClick={handleContact} className="w-full sm:w-auto focus:outline-none">
              <Button fullWidth className="shadow-[0_0_30px_-5px_rgba(150,114,65,0.3)] hover:shadow-[0_0_30px_-5px_rgba(150,114,65,0.5)]">
                Falar com Especialista
              </Button>
            </a>
            <a href="#servicos" className="w-full sm:w-auto focus:outline-none">
              <Button variant="outline-light" fullWidth>
                Conhecer Áreas
              </Button>
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center gap-4 pt-2 reveal delay-400">
            <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-white/10 hover:border-mjl-gold/50 transition-all duration-300 cursor-pointer group">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>)}
              </div>
              <span className="text-white font-bold text-[10px] md:text-xs">Advocacia de Família e Civil</span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 md:gap-8 border-t border-white/5 mt-6 md:mt-8 pt-6 md:pt-8 reveal delay-500">
            <div className="group cursor-default">
              <span className="block text-xl md:text-2xl font-bold text-white font-heading group-hover:text-mjl-gold transition-colors duration-500 ease-out-expo">100%</span>
              <span className="text-[9px] md:text-[10px] text-stone-400 uppercase tracking-wider">Foco na Solução</span>
            </div>
            <div className="h-8 w-px bg-white/10"></div>
            <div className="group cursor-default">
              <span className="block text-xl md:text-2xl font-bold text-white font-heading group-hover:text-mjl-gold transition-colors duration-500 ease-out-expo">Humanizado</span>
              <span className="text-[9px] md:text-[10px] text-stone-400 uppercase tracking-wider">Atendimento</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#sobre"
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-500 ease-out-expo cursor-pointer focus:outline-none focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-mjl-gold rounded-lg p-2 animate-float"
      >
        <span className="text-[9px] md:text-[10px] text-white uppercase tracking-widest font-light">Role para saber mais</span>
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-1.5 bg-mjl-gold rounded-full animate-scroll-indicator"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;