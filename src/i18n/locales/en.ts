import type { Translations } from "../types";

export const en: Translations = {
  meta: {
    description:
      "Your reliable taxi service. Airport transfers, city rides, long-distance and business transport. Call now!",
    ogLocale: "en_US",
  },
  nav: [
    { label: "Services", href: "/#services" },
    { label: "Reservation", href: "/#reservation" },
  ],
  header: {
    menuOpen: "Open menu",
    whatsapp: "WhatsApp",
    directCall: "Or call directly",
    chooseLanguage: "Choose language",
    whatsappBooking: "Book via WhatsApp",
  },
  footer: {
    allRightsReserved: "All rights reserved.",
    impressum: "Legal Notice",
    datenschutz: "Privacy Policy",
  },
  hero: {
    tagline: "Your taxi in",
    headline: "Your driver in",
    headlineHighlight: "Safe & on time to your destination.",
    headlineHighlightShort: "Safe to your destination.",
    description:
      'Whether <span class="bg-taxi-400 text-dark px-1 rounded">airport transfer</span>, <span class="bg-taxi-400 text-dark px-1 rounded">long-distance ride</span> or <span class="bg-taxi-400 text-dark px-1 rounded">business transport</span> — your experienced driver takes you safely and comfortably to your destination.',
    ctaReserve: "Book now",
    featureAirport: "Airport transfers",
    featureLongDistance: "Long-distance rides",
    featureBusiness: "Business transfer",
    paymentFeatures: [
      "Cashless payment – completely relaxed.",
      "Contactless payment available.",
      "We accept all common cards & Apple Pay.",
    ],
    whatsappCta: "Book via WhatsApp",
    whatsappSubtitle: "Reply within minutes",
    paymentCardTitle: "Card payment & Apple Pay available",
    paymentCardSubtitle: "Cashless • Contactless • Secure",
    trustItems: ["Reliable", "Punctual", "Personal"],
  },
  services: {
    tagline: "Our Services",
    title: "Your Taxi — Your Service",
    description:
      "From airport transfers to long-distance rides — your personal driver for every occasion.",
    items: [
      {
        title: "Airport Transfer",
        description:
          "Punctual pickup and delivery to the airport. We monitor your flight status and adjust pickup time as needed.",
      },
      {
        title: "Your Driver",
        description:
          "As an experienced taxi driver, I know the region inside out and will take you safely to your destination.",
      },
      {
        title: "Business Transport",
        description:
          "Professional driving service for business clients. Discretion, punctuality and first-class comfort guaranteed.",
      },
      {
        title: "Long-Distance Rides",
        description:
          "Comfortable over long distances. Whether business trip or private ride — we take you safely and relaxed to your destination.",
      },
    ],
  },
  contact: {
    tagline: "Reservation",
    title: "Book a ride",
    description:
      "Book your ride conveniently online — we will get back to you promptly.",
  },
  form: {
    groupRide: "Ride Details",
    groupPersonal: "Your Details",
    groupAdditional: "Additional Information",
    nameLabel: "Full Name",
    namePlaceholder: "e.g. John Smith",
    fromLabel: "Pickup Location",
    fromPlaceholder: "e.g. Munich Central Station",
    toLabel: "Destination",
    toPlaceholder: "e.g. Munich Airport",
    dateLabel: "Date",
    timeLabel: "Time",
    phoneLabel: "Phone Number",
    phonePlaceholder: "e.g. +49 170 1234567",
    emailLabel: "Email Address (optional)",
    emailPlaceholder: "your@email.com",
    passengersLabel: "Number of Passengers",
    passengersPlaceholder: "1",
    flightLabel: "Flight Number (optional)",
    flightPlaceholder: "e.g. LH 1234",
    messageLabel: "Message / Special Requests (optional)",
    messagePlaceholder: "e.g. child seat needed, extra luggage...",
    submit: "Book ride",
    whatsappPrefix: "New Reservation:",
    nameField: "Name",
    fromField: "Pickup",
    toField: "Destination",
    dateField: "Date",
    timeField: "Time",
    phoneField: "Phone",
    emailField: "Email",
    passengersField: "Passengers",
    flightField: "Flight No.",
    messageField: "Message",
  },
  payment: {
    title: "Accepted Payment Methods",
    cash: "Cash",
    card: "Debit / Credit Card",
    contactless: "Contactless (Apple Pay / Google Pay)",
  },
  about: {
    tagline: "About us",
    title: "Your Partner for Mobility",
    paragraph1:
      "For years, I have been your reliable driver in the region. As an experienced and friendly taxi driver, I take you safely and comfortably to any destination.",
    paragraph2:
      "I place the greatest value on customer satisfaction, punctuality and professional service. Whether private ride or business trip — you are in good hands with me.",
    values: [
      {
        title: "Safety",
        description:
          "Experienced driver and regularly maintained vehicles for your safety.",
      },
      {
        title: "Punctuality",
        description:
          "We are always on time — so you never arrive late.",
      },
      {
        title: "Reliability",
        description:
          "You can count on us. 24 hours a day, 7 days a week.",
      },
      {
        title: "Your Driver",
        description:
          "As a woman behind the wheel, I offer you a special sense of security — personal, trustworthy and professional.",
      },
    ],
  },
  femaleDrivers: {
    tagline: "Your Driver",
    title: "Woman behind the wheel — safe & trustworthy",
    description:
      "As your driver, I personally stand for safety, punctuality and friendly service. You are in the best hands with me.",
    cta: "Book a ride now",
    benefits: [
      {
        title: "Your Driver",
        description:
          "As an experienced taxi driver, I know the region inside out and will take you safely to your destination.",
      },
      {
        title: "Safety & Trust",
        description:
          "Especially for women, families and seniors, I offer a safe and trustworthy ride experience.",
      },
      {
        title: "Personal & Professional",
        description:
          "With me, you don't ride with a stranger — I am your personal driver with heart and experience.",
      },
    ],
  },
  airportTransfer: {
    metaTitle: "Airport Transfer",
    metaDescription:
      "Reliable airport transfer. Fixed prices, available 24/7, flight monitoring. Book now!",
    tagline: "Airport Transfer",
    headline: "Airport Transfer",
    headlineHighlight: "On time & comfortable",
    description:
      "Your driver takes you reliably to and from the airport. Fixed prices, no hidden costs, available 24/7.",
    ctaCall: "Call now",
    featureFixedPrices: "Fixed prices",
    feature247: "Available 24/7",
    featureYourDriver: "Your driver",
    benefitsTagline: "Benefits",
    benefitsTitle: "Why you should choose us",
    benefits: [
      {
        title: "Flight Monitoring",
        description:
          "We monitor your flight in real time and automatically adjust pickup time for delays.",
      },
      {
        title: "Fixed Prices",
        description:
          "No hidden costs — you know the price before the ride.",
      },
      {
        title: "Punctuality",
        description:
          "We are on site on time so you can get to the airport stress-free.",
      },
      {
        title: "Your Driver",
        description:
          "As a woman behind the wheel, I personally and safely take you to the airport.",
      },
    ],
    howItWorksTagline: "How it works",
    howItWorksTitle: "3 steps to your transfer",
    steps: [
      {
        title: "Book",
        description:
          "Reserve by phone, WhatsApp or through our form.",
      },
      {
        title: "Pickup",
        description:
          "Your driver awaits you at the agreed location with a name sign.",
      },
      {
        title: "Arrive",
        description: "Arrive relaxed and safe at your destination.",
      },
    ],
    reservationTagline: "Reservation",
    reservationTitle: "Book your transfer now",
    reservationDescription:
      "Fill out the form — we will get back to you promptly.",
    defaultDestination: "Munich Airport",
    faqTagline: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "How much does an airport transfer cost?",
        answer:
          "We offer fixed prices for airport transfers. The exact price depends on your pickup location. Contact us for a non-binding quote — by phone or WhatsApp.",
      },
      {
        question: "How early should I book?",
        answer:
          "We recommend booking at least 24 hours in advance. For short-notice requests, we do our best to organise your ride.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer:
          "No problem — we monitor your flight and automatically adjust the pickup time. There are no additional costs for delays.",
      },
      {
        question: "Who drives me to the airport?",
        answer:
          "Your driver — I personally and safely take you to the airport. As a woman behind the wheel, I offer you a trustworthy ride experience.",
      },
      {
        question: "Which payment methods are accepted?",
        answer:
          "We accept cash and debit card payments. Please let us know your preferred payment method when booking.",
      },
    ],
    whatsappMessage: "Hello, I would like to book an airport transfer.",
  },
  impressum: {
    metaTitle: "Legal Notice",
    metaDescription: "Legal notice and legal information.",
    title: "Legal Notice",
    ddg: "Information according to § 5 DDG",
    ddgContent: "",
    contact: "Contact",
    vatId: "VAT ID",
    vatIdContent:
      "VAT identification number according to § 27a of the German VAT Act:",
    businessReg: "Business Registration",
    businessRegContent:
      "The business registration was issued by {authority}.",
    responsibleTitle:
      "Responsible for content according to § 18 para. 2 MStV",
    responsibleContent: "",
    disputeResolution: "Dispute Resolution",
    disputeResolutionContent:
      "The European Commission provides a platform for online dispute resolution (ODR):",
    disputeResolutionNote:
      "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
    contentLiability: "Liability for Content",
    contentLiabilityText:
      "As a service provider, we are responsible for our own content on these pages in accordance with § 7 para. 1 DDG under general law. According to §§ 8 to 10 DDG, however, we are not obliged as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
    contentLiabilityText2:
      "Obligations to remove or block the use of information under general law remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. Upon becoming aware of corresponding legal violations, we will remove this content immediately.",
    linkLiability: "Liability for Links",
    linkLiabilityText:
      "Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for the content of the linked pages.",
    copyright: "Copyright",
    copyrightText:
      "The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation beyond the limits of copyright law require the written consent of the respective author or creator.",
  },
  datenschutz: {
    metaTitle: "Privacy Policy",
    metaDescription:
      "Privacy policy — information about how we handle your data.",
    title: "Privacy Policy",
    sections: [
      {
        title: "1. Privacy at a Glance",
        content: `<h3 class="text-lg font-semibold text-gray-800 mb-2">General Information</h3>
<p>The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you.</p>`,
      },
      {
        title: "2. Responsible Party",
        content: "RESPONSIBLE_PARTY",
      },
      {
        title: "3. Data Collection on this Website",
        content: `<h3 class="text-lg font-semibold text-gray-800 mb-2 mt-4">Server Log Files</h3>
<p>The provider of these pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:</p>
<ul class="list-disc list-inside mt-2 space-y-1">
<li>Browser type and version</li>
<li>Operating system used</li>
<li>Referrer URL</li>
<li>Hostname of the accessing computer</li>
<li>Time of the server request</li>
<li>IP address</li>
</ul>
<p class="mt-2">This data is not merged with other data sources. The collection of this data is based on Art. 6 para. 1 lit. f GDPR.</p>
<h3 class="text-lg font-semibold text-gray-800 mb-2 mt-6">Contact Form / Reservation Request</h3>
<p>If you send us enquiries via the contact form or reservation form, your details from the form (from, to, date, phone, email) will be processed for the purpose of handling the enquiry and in case of follow-up questions. This data is transmitted to us via WhatsApp.</p>
<p class="mt-2">The processing of this data is based on Art. 6 para. 1 lit. b GDPR, if your request is related to the fulfilment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest (Art. 6 para. 1 lit. f GDPR).</p>`,
      },
      {
        title: "4. External Services",
        content: `<h3 class="text-lg font-semibold text-gray-800 mb-2 mt-4">Google Maps</h3>
<p>This site uses the Google Maps map service. The provider is Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Ireland.</p>
<p class="mt-2">To use the functions of Google Maps, it is necessary to store your IP address. This information is usually transferred to a Google server in the USA and stored there. The provider of this site has no influence on this data transfer.</p>
<p class="mt-2">Google Maps is used in the interest of an appealing presentation of our location. This constitutes a legitimate interest within the meaning of Art. 6 para. 1 lit. f GDPR.</p>
<p class="mt-2">More information about the handling of user data can be found in Google's privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-taxi-600 hover:text-taxi-700">https://policies.google.com/privacy</a></p>
<h3 class="text-lg font-semibold text-gray-800 mb-2 mt-6">WhatsApp</h3>
<p>On this website, we offer the possibility to contact us via WhatsApp. WhatsApp is a service of Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland.</p>
<p class="mt-2">When you use the WhatsApp button, you will be redirected to WhatsApp. WhatsApp's privacy policy applies: <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" class="text-taxi-600 hover:text-taxi-700">https://www.whatsapp.com/legal/privacy-policy</a></p>`,
      },
      {
        title: "5. Your Rights",
        content: `<p>You have the right at any time to:</p>
<ul class="list-disc list-inside mt-2 space-y-1">
<li>Obtain information about your personal data stored by us (Art. 15 GDPR)</li>
<li>Request the correction of inaccurate data (Art. 16 GDPR)</li>
<li>Request the deletion of your data (Art. 17 GDPR)</li>
<li>Request the restriction of processing (Art. 18 GDPR)</li>
<li>Object to processing (Art. 21 GDPR)</li>
<li>Request data portability (Art. 20 GDPR)</li>
</ul>
<p class="mt-2">If you believe that the processing of your data violates data protection law, you have the right to lodge a complaint with a supervisory authority.</p>`,
      },
      {
        title: "6. Cookies",
        content:
          "<p>This website does not use cookies and does not employ any tracking technologies.</p>",
      },
    ],
  },
  whatsapp: {
    ariaLabel: "Chat on WhatsApp",
    message:
      "Hello, I would like to book a ride. Can you help me?",
  },
  routes: {
    home: "",
    impressum: "legal-notice",
    datenschutz: "privacy-policy",
    airportTransfer: "airport-transfer",
  },
};
