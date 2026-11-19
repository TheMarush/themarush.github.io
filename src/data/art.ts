/*
 * Artworks shown on the home page (and, later, the Gallery page).
 *
 * `src` is the original file in /public. Resized WebP copies sit next to it as
 * `<name>-<width>.webp`, one per entry in `widths`. To add a piece: put the JPG in
 * public/art/, make the WebP sizes, and add an entry here.
 *
 * Fields set to `null` are still TODO: fill them in. Nothing here is guessed.
 */
export interface Artwork {
  src: string;
  title: string | null;
  year: string | null;
  medium: string | null;
  alt: string;
  /** Pixel size of the original, used for width/height and the aspect ratio */
  width: number;
  height: number;
  /** Widths of the WebP copies that exist next to `src` */
  widths: number[];
}

export const artworks: Artwork[] = [
  {
    src: "/art/stay-bubbly-fish.jpg",
    // Taken from the lettering on the drawing itself; TODO: confirm this is the title
    title: "Stay bubbly",
    year: null, // TODO
    medium: null, // TODO
    alt: "Hand-drawn smiling blue fish with yellow line-patterned fins and spots, swimming up through bubbles above the hand-lettered words “Stay bubbly”.",
    width: 1494,
    height: 1881,
    widths: [480, 800, 1400],
  },
  {
    src: "/art/ladder-to-the-stars.jpg",
    title: "Reaching for the stars", // name Marush gave it; TODO: confirm exact wording
    year: null, // TODO
    medium: null, // TODO
    alt: "White line drawing on black: a figure climbs a ladder that rises through a cloud of spirals and reaches out to one of the four-pointed stars around it.",
    width: 1532,
    height: 2048,
    widths: [480, 800, 1400],
  },
  {
    src: "/art/figure-and-mirror.jpg",
    title: "Mirror blob", // name Marush gave it; TODO: confirm exact wording
    year: null, // TODO
    medium: null, // TODO
    alt: "White line drawing on black: a figure made of contour lines stands beside a mirror framed with spirals. Its reflection is solid white, scattered with stars, with a spiral at its heart.",
    width: 1700,
    height: 1742,
    widths: [480, 800, 1400],
  },
  {
    src: "/art/rooster-with-drawing.jpg",
    title: "Done beats perfect", // name Marush gave it; TODO: confirm exact wording
    year: null, // TODO
    medium: null, // TODO
    alt: "White line drawing on black: a wide-eyed chicken made of flowing contour lines proudly holds up a child’s drawing of a smiling stick figure under the sun.",
    width: 1628,
    height: 2048,
    widths: [480, 800, 1400],
  },
];

const base = (art: Artwork) => art.src.replace(/\.[a-z]+$/i, "");

/** `srcset` value listing every WebP copy of an artwork */
export const artSrcset = (art: Artwork) => art.widths.map((w) => `${base(art)}-${w}.webp ${w}w`).join(", ");

/** One WebP copy, the closest one at or above `width` (for the plain `src` fallback) */
export const artWebp = (art: Artwork, width: number) =>
  `${base(art)}-${art.widths.find((w) => w >= width) ?? art.widths[art.widths.length - 1]}.webp`;
