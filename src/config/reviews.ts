export interface Review {
  name: string;
  initial: string;
  rating: number;
  date: string;
  text: string;
}

export const reviewsConfig = {
  overallRating: 5.0,
  totalReviews: 12,
  googleMapsUrl: "https://maps.app.goo.gl/nJ6FXxLMEpyBowf79",
  reviews: [
    {
      name: "Koko Djenne",
      initial: "",
      rating: 5,
      date: "5 days ago",
      text: "I just had one of the most excellent taxi journey with Gulcan. Je n'ai rien à...",
    },
    {
      name: "Gabriela Marti...",
      initial: "G",
      rating: 5,
      date: "14 days ago",
      text: "Bessti🥰",
    },
    {
      name: "2 Jazz",
      initial: "",
      rating: 5,
      date: "16 days ago",
      text: "Beste Fahrerin",
    },
    {
      name: "Kantubi Mania",
      initial: "K",
      rating: 5,
      date: "25 days ago",
      text: "Bester Service Sehr Nette Frau Alles Perfekt abgelaufen!!!",
    },
    {
      name: "Lineesa",
      initial: "",
      rating: 5,
      date: "29 days ago",
      text: "Great taxi! Great service. Speaks English and Germany.",
    },
  ] satisfies Review[],
} as const;
