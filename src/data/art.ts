/*
 * Every artwork on the site: the home page cards and the Gallery's "History".
 *
 * `src` is a JPG in /public (kept for link previews; capped at 1600px). Resized WebP copies
 * sit next to it as `<name>-<width>.webp`, one per entry in `widths`, and those are what
 * the pages actually load. To add a piece: put the JPG in public/art/, make the WebP sizes,
 * and add an entry here.
 *
 * Fields set to `null` are still TODO: fill them in. Nothing here is guessed.
 */

/** The rooms of the Gallery's "History", in the order you walk through them */
export const collections = [
  { id: "the-beginning", name: "Prologue", prologue: true },
  { id: "the-figuring-out", name: "The Figuring Out" },
  { id: "the-colour-coming-in", name: "The Colour Coming In" },
  { id: "the-variety", name: "The Variety" },
  { id: "the-process", name: "The Process" },
] as const;

export type CollectionId = (typeof collections)[number]["id"];

export interface Artwork {
  src: string;
  title: string | null;
  technique: string | null;
  alt: string;
  /** Set for pieces in the Gallery's "History"; the home page pieces have none */
  collection?: CollectionId;
  /** Pixel size of `src`, used for width/height and the aspect ratio */
  width: number;
  height: number;
  /** Widths of the WebP copies that exist next to `src` */
  widths: number[];
}

const HISTORY_WIDTHS = [480, 800, 1400, 2000];

export const artworks: Artwork[] = [
  // ── Home page ──
  {
    src: "/art/stay-bubbly-fish.jpg",
    // Taken from the lettering on the drawing itself; TODO: confirm this is the title
    title: "Stay bubbly",
    technique: null, // TODO
    alt: "Hand-drawn smiling blue fish with yellow line-patterned fins and spots, swimming up through bubbles above the hand-lettered words “Stay bubbly”.",
    width: 1494,
    height: 1881,
    widths: [480, 800, 1400],
  },
  {
    src: "/art/ladder-to-the-stars.jpg",
    title: "Reaching for the stars", // name Marush gave it; TODO: confirm exact wording
    technique: null, // TODO
    alt: "White line drawing on black: a figure climbs a ladder that rises through a cloud of spirals and reaches out to one of the four-pointed stars around it.",
    width: 1532,
    height: 2048,
    widths: [480, 800, 1400],
  },
  {
    src: "/art/figure-and-mirror.jpg",
    title: "Mirror blob", // name Marush gave it; TODO: confirm exact wording
    technique: null, // TODO
    alt: "White line drawing on black: a figure made of contour lines stands beside a mirror framed with spirals. Its reflection is solid white, scattered with stars, with a spiral at its heart.",
    width: 1700,
    height: 1742,
    widths: [480, 800, 1400],
  },
  {
    src: "/art/rooster-with-drawing.jpg",
    title: "Done beats perfect", // name Marush gave it; TODO: confirm exact wording
    technique: null, // TODO
    alt: "White line drawing on black: a wide-eyed chicken made of flowing contour lines proudly holds up a child’s drawing of a smiling stick figure under the sun.",
    width: 1628,
    height: 2048,
    widths: [480, 800, 1400],
  },

  // ── Gallery: History ──
  {
    collection: "the-beginning",
    src: "/art/history/the-beginning/the-beginning.jpg",
    title: "The Beginning",
    technique: "ink and watercolour",
    alt: "Two framed childhood drawings on a shelf: a girl in a patterned dress and a smiling cat among fish.",
    width: 1200,
    height: 1600,
    widths: [480, 800, 1200],
  },
  {
    collection: "the-figuring-out",
    src: "/art/history/the-figuring-out/born-in-a-cage.jpg",
    title: "Born in a Cage",
    technique: "black fineliner on grid paper",
    alt: "A fish drawn in dense line patterns inside a footed bowl, with bubbles rising.",
    width: 1325,
    height: 1600,
    widths: HISTORY_WIDTHS,
  },
  {
    collection: "the-figuring-out",
    src: "/art/history/the-figuring-out/i-see-what-i-know.jpg",
    title: "I See What I Know",
    technique: "black fineliner on grid paper",
    alt: "A swan and a sailboat on waves beneath a lighthouse, with a thought cloud full of maths formulas and shapes.",
    width: 1119,
    height: 1600,
    widths: HISTORY_WIDTHS,
  },
  {
    collection: "the-figuring-out",
    src: "/art/history/the-figuring-out/big-sister-always-watching.jpg",
    title: "Big Sister Always Watching",
    technique: "black fineliner on grid paper",
    alt: "A patterned circle split into geometric sections around a four-pointed star, with an eye and red lips.",
    width: 1504,
    height: 1600,
    widths: HISTORY_WIDTHS,
  },
  {
    collection: "the-colour-coming-in",
    src: "/art/history/the-colour-coming-in/authentic-shroom.jpg",
    title: "Authentic Shroom",
    technique: "coloured markers and fineliner in a sketchbook",
    alt: "Sketchbook spread: a rainbow grid beside the handwritten words 'It gets really good once you start being so yourself that you scare off all the other people that are not meant for you', with a small mushroom character.",
    width: 1600,
    height: 1537,
    widths: HISTORY_WIDTHS,
  },
  {
    collection: "the-colour-coming-in",
    src: "/art/history/the-colour-coming-in/roots-out.jpg",
    title: "Roots Out",
    technique: "coloured markers and fineliner in a sketchbook",
    alt: "Sketchbook spread: a rainbow zigzag grid beside 'Stop shrinking to fit in places you have outgrown', with a plant breaking out of its pot.",
    width: 1374,
    height: 1600,
    widths: HISTORY_WIDTHS,
  },
  {
    collection: "the-colour-coming-in",
    src: "/art/history/the-colour-coming-in/trying-roggy.jpg",
    title: "Trying Roggy",
    technique: "coloured markers and fineliner in a sketchbook",
    alt: "Sketchbook spread: a rainbow grid beside 'I'm not afraid to be seen trying! As long as I try, I'm probably doing way better than I think', with a winged frog holding a wand.",
    width: 1356,
    height: 1600,
    widths: HISTORY_WIDTHS,
  },
  {
    collection: "the-variety",
    src: "/art/history/the-variety/grief.jpg",
    title: "Grief",
    technique: "acrylic and pencil",
    alt: "A field under a burning orange and yellow sky, with a small deer at the treeline.",
    width: 1600,
    height: 1200,
    widths: HISTORY_WIDTHS,
  },
  {
    collection: "the-variety",
    src: "/art/history/the-variety/let-it-burn.jpg",
    title: "Let It Burn",
    technique: "blue ballpoint pen",
    alt: "Sketchbook spread in blue ballpoint: a street lamp over handwritten text, and a witch-like figure in a long gown holding a flame.",
    width: 1600,
    height: 1329,
    widths: HISTORY_WIDTHS,
  },
  {
    collection: "the-variety",
    src: "/art/history/the-variety/she-joke.jpg",
    title: "She-Joke",
    technique: "wax crayon and ink",
    alt: "A woman with closed eyes, red lips and long rainbow-streaked hair.",
    width: 1200,
    height: 1600,
    widths: HISTORY_WIDTHS,
  },
  {
    collection: "the-process",
    src: "/art/history/the-process/debrief-opening.jpg",
    title: "Debrief Opening",
    technique: "ink on paper",
    alt: "The ink original of the opening artwork, patterned curtains and flowers, on a desk next to a green drink.",
    width: 1600,
    height: 1161,
    widths: HISTORY_WIDTHS,
  },
  {
    collection: "the-process",
    src: "/art/history/the-process/school-bored-board.jpg",
    title: "School Bored Board",
    technique: "whiteboard marker",
    alt: "Marush drawing a castle and a patterned dragon on a large whiteboard.",
    width: 1198,
    height: 1600,
    widths: HISTORY_WIDTHS,
  },
  {
    collection: "the-process",
    src: "/art/history/the-process/work-de-stressing.jpg",
    title: "Work De-Stressing",
    technique: "fineliner in a sketchbook",
    alt: "A sketchbook with a looping patterned drawing, next to a pen and a water bottle on a desk.",
    width: 1253,
    height: 1600,
    widths: HISTORY_WIDTHS,
  },
];

/** The History pieces in walking order: collection by collection, as listed above */
export const historyArtworks: Artwork[] = collections.flatMap((c) => artworks.filter((a) => a.collection === c.id));

export const collectionName = (art: Artwork) => collections.find((c) => c.id === art.collection)?.name;

const base = (art: Artwork) => art.src.replace(/\.[a-z]+$/i, "");

/** `srcset` value listing every WebP copy of an artwork */
export const artSrcset = (art: Artwork) => art.widths.map((w) => `${base(art)}-${w}.webp ${w}w`).join(", ");

/** One WebP copy, the closest one at or above `width` (for the plain `src` fallback) */
export const artWebp = (art: Artwork, width: number) =>
  `${base(art)}-${art.widths.find((w) => w >= width) ?? art.widths[art.widths.length - 1]}.webp`;
