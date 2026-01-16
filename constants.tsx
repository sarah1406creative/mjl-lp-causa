import React from 'react';
import { ServiceItem, DifferentialItem, FAQItem, TestimonialItem } from './types';

// ==========================================
// CONFIGURAÇÃO DE IMAGENS E LINKS
// ==========================================

export const IMAGES = {
  // Logotipo Principal (Retangular)
  LOGO: "/assets/mjl-logotipo-advocacia-porto-alegre.png",

  // Avatar / Favicon
  AVATAR: "/assets/Avatar MJL Advocacia Causa Imobiliaria.webp",

  // Foto do advogado (Germano) para a seção Sobre (Card do Fundador)
  LAWYER_PHOTO: "/assets/germano.webp",

  // Foto secundária para a seção Sobre
  OFFICE_PHOTO: "/assets/mjladv.webp",

  // Fundo da seção Hero (Topo)
  HERO_BG: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
};

export const WHATSAPP_LINK = "#"; // Agora aciona o Typebot via onClick
export const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/eFZnrr1D12WM2jCMA";

export const CONTACT_INFO = {
  address: "", // Removido para focar no digital
  phone: "(51) 3062-7991",
  mobile: "(51) 98181-7991",
  email: "contato@mjl.adv.br",
  website: "www.mjl.adv.br"
};

// ==========================================
// ÍCONES PERSONALIZADOS
// ==========================================

// Family Icon
export const FamilyIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// Scale/Justice Icon
export const ScaleIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h18" />
  </svg>
);

// Stethoscope (Medical)
export const MedicalIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.8 2.3A.3.3 0 1 0 5 2h0a2 2 0 0 0-2 2v12a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h0a.3.3 0 1 0 .2.3" /><path d="M9 16V2" /><path d="M15 16V2" /><path d="M3 9h6" /><path d="M15 9h6" />
  </svg>
);

// Heart (PCD/Human Rights)
export const HeartIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

// Gavel
export const GavelIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m14 13-5-5" /><path d="m3 21 9-9" /><path d="M15 6.914 17.086 9 22 4.086 19.914 2 15 6.914Z" /><path d="m21 11-4-4" /><path d="m11 21-4-4" /><path d="m11 13-4-4" /><path d="m17 7-4-4" />
  </svg>
);

// File/Contract
export const FileIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" />
  </svg>
);

export const GoogleIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

export const StarIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);

export const PhoneIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

export const MailIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);

export const MapPinIcon = (props: any) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);

// ==========================================
// DATA - MJL ADVOCACIA (FOCO FAMÍLIA E SUCESSÕES)
// ==========================================

export const SERVICES: ServiceItem[] = [
  {
    title: "Inventário e Partilha",
    icon: GavelIcon,
    items: [
      "Inventário judicial e extrajudicial",
      "Partilha de bens e doações",
      "Sobrepartilha de bens sonegados",
      "Remoção e prestação de contas de inventariante"
    ]
  },
  {
    title: "Divórcio e Separação",
    icon: FamilyIcon,
    items: [
      "Divórcio consensual e litigioso",
      "Dissolução de união estável",
      "Partilha de patrimônio comum",
      "Pacto antenupcial e alteração de regime"
    ]
  },
  {
    title: "Filhos e Convivência",
    icon: HeartIcon,
    items: [
      "Pensão alimentícia (Fixação e Revisional)",
      "Guarda compartilhada e unilateral",
      "Alienação parental",
      "Reconhecimento de paternidade/maternidade"
    ]
  },
  {
    title: "Planejamento Sucessório",
    icon: FileIcon,
    items: [
      "Elaboração de testamentos",
      "Holding Familiar e proteção de bens",
      "Antecipação de legítima",
      "Blindagem patrimonial ética"
    ]
  },
  {
    title: "Sucessão Digital",
    icon: ScaleIcon,
    items: [
      "Gestão de ativos digitais pós-morte",
      "Herança de contas e perfis",
      "Destinação de criptoativos",
      "Privacidade e memória digital"
    ]
  }
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    title: "Foco em Inventários",
    description: "Especialidade técnica em sucessões complexas e partilhas de bens.",
    icon: StarIcon
  },
  {
    title: "Mediação Familiar",
    description: "Priorizamos a resolução pacífica para preservar os laços e evitar o desgaste judicial.",
    icon: HeartIcon
  },
  {
    title: "Estratégia Patrimonial",
    description: "Soluções inteligentes para proteger e transmitir o patrimônio da sua família.",
    icon: ScaleIcon
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Mariana Silva",
    rating: 5,
    date: "há 2 meses",
    text: "O Dr. Germano foi excepcional no meu processo de divórcio. Me passou muita segurança em um momento difícil."
  },
  {
    name: "Ricardo Oliveira",
    rating: 5,
    date: "há 4 meses",
    text: "Excelente atendimento no inventário do meu pai. Tudo resolvido de forma rápida e transparente."
  },
  {
    name: "Helena Souza",
    rating: 5,
    date: "há 1 mês",
    text: "O planejamento sucessório feito pelo escritório trouxe tranquilidade para toda a nossa família."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Quanto tempo demora um inventário em cartório?",
    answer: "Se houver acordo entre herdeiros e documentação pronta, pode ser resolvido em poucas semanas, muito mais rápido que o judicial."
  },
  {
    question: "Posso fazer inventário se houver testamento?",
    answer: "Sim, porém exige a abertura e registro do testamento judicialmente antes de prosseguir com a partilha (que pode ser extrajudicial se permitido)."
  },
  {
    question: "Como funciona a guarda compartilhada?",
    answer: "Ambos os pais dividem a responsabilidade pelas decisões da vida do filho, independentemente de quem detém a residência principal."
  },
  {
    question: "O que é planejamento sucessório?",
    answer: "É uma estratégia jurídica para organizar a transmissão de bens ainda em vida, reduzindo custos tributários e evitando conflitos entre herdeiros."
  }
];
