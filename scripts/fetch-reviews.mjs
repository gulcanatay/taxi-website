// Fetches the latest Google reviews + rating for the business via the
// Places API (New) and writes them to src/config/reviews.generated.json.
//
// This runs as part of `pnpm build` (see the "build" script). A daily Vercel
// Deploy Hook ping triggers a rebuild, so reviews stay fresh without any git
// commits. Run manually:  GOOGLE_PLACES_API_KEY=xxx node scripts/fetch-reviews.mjs
//
// Why fetch by Place ID instead of searching: the business is a Google
// "service-area" listing, so it is invisible to every Places *search*
// endpoint — but Place *Details* by ID works. The Place ID below was
// reconstructed from the listing's feature id (CID).
//
// IMPORTANT: this script never exits non-zero. If the key is missing or the
// API call fails, it logs a warning and leaves the committed JSON untouched,
// so a build (local or on Vercel) is never broken by a transient failure.

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const PLACE_ID = process.env.GOOGLE_PLACE_ID || "ChIJrQdHWnrXnUcRXYXRkpcV9EM";
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = join(__dirname, "..", "src", "config", "reviews.generated.json");

function initialFor(name) {
  const ch = (name || "").trim().match(/\p{L}|\p{N}/u);
  return ch ? ch[0].toUpperCase() : "";
}

async function main() {
  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=de`;
  const res = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": API_KEY,
      "X-Goog-FieldMask":
        "id,displayName,rating,userRatingCount,reviews",
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Places API ${res.status}: ${body}`);
  }

  const data = await res.json();

  const reviews = (data.reviews || []).map((r) => {
    const name = r.authorAttribution?.displayName || "Google-Nutzer";
    // Prefer the reviewer's original wording over Google's auto-translation.
    const text = (r.originalText?.text ?? r.text?.text ?? "").trim();
    return {
      name,
      initial: initialFor(name),
      rating: r.rating ?? 5,
      date: (r.publishTime || "").slice(0, 10), // YYYY-MM-DD
      text,
    };
  });

  const output = {
    lastUpdated: new Date().toISOString(),
    placeId: data.id || PLACE_ID,
    overallRating: data.rating ?? null,
    totalReviews: data.userRatingCount ?? null,
    reviews,
  };

  await writeFile(OUT_PATH, JSON.stringify(output, null, 2) + "\n", "utf8");
  console.log(
    `Wrote ${reviews.length} reviews · rating ${output.overallRating} · ${output.totalReviews} total → ${OUT_PATH}`
  );
}

if (!API_KEY) {
  console.warn(
    "[reviews] GOOGLE_PLACES_API_KEY not set — keeping existing reviews.generated.json."
  );
} else {
  main().catch((err) => {
    console.warn(
      `[reviews] Fetch failed, keeping existing data: ${err.message}`
    );
  });
}
