export interface Translations {
  meta: {
    description: string;
    ogLocale: string;
  };
  nav: Array<{ label: string; href: string }>;
  header: {
    menuOpen: string;
    whatsapp: string;
    directCall: string;
  };
  footer: {
    allRightsReserved: string;
    impressum: string;
    datenschutz: string;
  };
  hero: {
    tagline: string;
    headline: string;
    headlineHighlight: string;
    description: string;
    ctaReserve: string;
    featureAirport: string;
    featureLongDistance: string;
    featureBusiness: string;
  };
  services: {
    tagline: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  contact: {
    tagline: string;
    title: string;
    description: string;
  };
  form: {
    fromLabel: string;
    fromPlaceholder: string;
    toLabel: string;
    toPlaceholder: string;
    datetimeLabel: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    submit: string;
    whatsappPrefix: string;
    fromField: string;
    toField: string;
    dateField: string;
    phoneField: string;
    emailField: string;
  };
  about: {
    tagline: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    values: Array<{ title: string; description: string }>;
  };
  femaleDrivers: {
    tagline: string;
    title: string;
    description: string;
    cta: string;
    benefits: Array<{ title: string; description: string }>;
  };
  airportTransfer: {
    metaTitle: string;
    metaDescription: string;
    tagline: string;
    headline: string;
    headlineHighlight: string;
    description: string;
    ctaCall: string;
    featureFixedPrices: string;
    feature247: string;
    featureYourDriver: string;
    benefitsTagline: string;
    benefitsTitle: string;
    benefits: Array<{ title: string; description: string }>;
    howItWorksTagline: string;
    howItWorksTitle: string;
    steps: Array<{ title: string; description: string }>;
    reservationTagline: string;
    reservationTitle: string;
    reservationDescription: string;
    defaultDestination: string;
    faqTagline: string;
    faqTitle: string;
    faqs: Array<{ question: string; answer: string }>;
    whatsappMessage: string;
  };
  impressum: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    ddg: string;
    ddgContent: string;
    contact: string;
    vatId: string;
    vatIdContent: string;
    businessReg: string;
    businessRegContent: string;
    responsibleContent: string;
    responsibleTitle: string;
    disputeResolution: string;
    disputeResolutionContent: string;
    disputeResolutionNote: string;
    contentLiability: string;
    contentLiabilityText: string;
    contentLiabilityText2: string;
    linkLiability: string;
    linkLiabilityText: string;
    copyright: string;
    copyrightText: string;
  };
  datenschutz: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
  };
  whatsapp: {
    ariaLabel: string;
    message: string;
  };
  routes: {
    home: string;
    impressum: string;
    datenschutz: string;
    airportTransfer: string;
  };
}
