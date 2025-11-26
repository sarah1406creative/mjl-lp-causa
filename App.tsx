import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Differentials from './components/Differentials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import PrivacyModal from './components/PrivacyModal';

const App: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Logic to trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: "0px 0px -50px 0px"
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Typebot Lazy Load
  useEffect(() => {
    const loadTypebot = async () => {
      const Typebot = await import('https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3/dist/web.js' as any);

      Typebot.default.initBubble({
        typebot: "mjl-causasimobiliarias",
        apiHost: "https://flow.creativelane.com.br",
        theme: {
          button: {
            backgroundColor: "#21c063",
            customIconSrc: "https://atendimento.causaimobiliaria.com.br/wp-content/uploads/2025/10/bubble-icon-copy-2.png",
            size: "large",
          },
          chatWindow: { backgroundColor: "#FAF9F6" },
        },
      });

      (window as any).Typebot = Typebot.default;
    };

    const handleInteraction = () => {
      loadTypebot();
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    window.addEventListener('scroll', handleInteraction, { passive: true, once: true });
    window.addEventListener('click', handleInteraction, { passive: true, once: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true, once: true });

    // Also load if user clicks a specific button (handled via global window object or event delegation if needed, 
    // but here we just ensure it loads on any interaction which covers the button click too)

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-mjl-light relative">
      {/* Âncoras de Sitelink (Hidden Anchors) */}
      <div id="home" className="absolute top-0 left-0 w-px h-px opacity-0 pointer-events-none"></div>
      <div id="mjl" className="absolute top-0 left-0 w-px h-px opacity-0 pointer-events-none"></div>

      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <CookieConsent onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
};

export default App;