export interface Translations {
  meta: {
    title: string;
    description: string;
    ogLocale: string;
  };
  nav: Array<{ label: string; href: string }>;
  header: {
    menuOpen: string;
    whatsapp: string;
    directCall: string;
    chooseLanguage: string;
    whatsappBooking: string;
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
    headlineHighlightShort: string;
    description: string;
    ctaReserve: string;
    featureAirport: string;
    featureLongDistance: string;
    featureBusiness: string;
    paymentFeatures: string[];
    whatsappCta: string;
    whatsappSubtitle: string;
    paymentCardTitle: string;
    paymentCardSubtitle: string;
    trustItems: string[];
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
    groupRide: string;
    groupPersonal: string;
    groupAdditional: string;
    nameLabel: string;
    namePlaceholder: string;
    fromLabel: string;
    fromPlaceholder: string;
    toLabel: string;
    toPlaceholder: string;
    dateLabel: string;
    timeLabel: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    passengersLabel: string;
    passengersPlaceholder: string;
    luggageLabel: string;
    flightLabel: string;
    flightPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    whatsappPrefix: string;
    nameField: string;
    fromField: string;
    toField: string;
    dateField: string;
    timeField: string;
    phoneField: string;
    emailField: string;
    passengersField: string;
    luggageField: string;
    flightField: string;
    messageField: string;
    datePastError: string;
    phoneInvalidError: string;
    whatsappGreeting: string;
    whatsappClosing: string;
  };
  payment: {
    title: string;
    cash: string;
    card: string;
    contactless: string;
  };
  reviews: {
    title: string;
    reviewUs: string;
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
