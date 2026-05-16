export const siteConfig = {
  name: "Taxi Service",
  url: "https://www.airporttransfer-muc.de",
  phone: "+4917630576513",
  phoneDisplay: "+49 176 30576513",
  email: "info@airporttransfer-muc.de",
  address: {
    street: "Hans-Stützle-Str. 6",
    zip: "81249",
    city: "München",
  },
  hours: {
    weekdays: "Mo - Fr: 00:00 - 24:00",
    weekend: "Sa - So: 00:00 - 24:00",
  },
  whatsapp: {
    number: "4917630576513",
  },
  googleMaps: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.531!2d11.576!3d48.137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA4JzEzLjIiTiAxMcKwMzQnMzMuNiJF!5e0!3m2!1sde!2sde!4v1",
    linkUrl: "https://goo.gl/maps/example",
  },
  business: {
    owner: "Gülcan Atay",
    registrationAuthority: "Gewerbeamt München",
  },
} as const;
