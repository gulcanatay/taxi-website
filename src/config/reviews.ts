import generated from "./reviews.generated.json";

export interface Review {
  name: string;
  initial: string;
  rating: number;
  date: string; // ISO date string (YYYY-MM-DD)
  text: string;
}

// Manual fallback. Used only if reviews.generated.json has no data — e.g. a
// build where the Places API key is missing or the fetch failed. The generated
// file is refreshed by scripts/fetch-reviews.mjs during each build.
const fallbackReviews: Review[] = [
    {
      name: "Mirza P",
      initial: "M",
      rating: 5,
      date: "2026-05-30",
      text: "Splendid service, high end quality.",
    },
    {
      name: "Armin 77.x",
      initial: "A",
      rating: 5,
      date: "2026-05-30",
      text: "Sehr angenehme Fahrt , immer wieder gerne",
    },
    {
      name: "Hazar Tinkir",
      initial: "H",
      rating: 5,
      date: "2026-05-30",
      text: "Sehr Sympathisch freundlich und Kontakt freudig jederzeit gerne wieder top arbeit",
    },
    {
      name: "Yussuf Safi",
      initial: "Y",
      rating: 5,
      date: "2026-05-30",
      text: "Sehr zuverlässiges Unternehmen sehr schnell bei Planung, Spontanität und Einrichtung",
    },
    {
      name: "Koko Djenne",
      initial: "",
      rating: 5,
      date: "2026-05-16",
      text: "I just had one of the most excellent taxi journey with Gulcan. Je n'ai rien à reprocher car elle est très chaleureuse, drôle et tfès ponctuelle. Je ne suis pas prête d'oublier mon trajet animé par la joie et la bonne humeur.",
    },
    {
      name: "Gabriela Martinovic",
      initial: "G",
      rating: 5,
      date: "2026-05-06",
      text: "Bessti🥰",
    },
    {
      name: "2 Jazz",
      initial: "",
      rating: 5,
      date: "2026-05-04",
      text: "Beste Fahrerin",
    },
    {
      name: "Kantubi Mania",
      initial: "K",
      rating: 5,
      date: "2026-04-25",
      text: "Bester Service Sehr Nette Frau Alles Perfekt abgelaufen!!!",
    },
    {
      name: "Lineesa",
      initial: "",
      rating: 5,
      date: "2026-04-21",
      text: "Great taxi! Great service. Speaks English and Germany.",
    },
];

const liveReviews = generated.reviews as Review[];

export const reviewsConfig = {
  // Live values from Google (via the daily Action), with manual fallbacks.
  overallRating: generated.overallRating ?? 5.0,
  totalReviews: generated.totalReviews ?? fallbackReviews.length,
  googleMapsUrl: "https://maps.app.goo.gl/qk3H9aWKNDc8Ki4W9",
  reviews: liveReviews.length > 0 ? liveReviews : fallbackReviews,
};
