/*
 * "The Marush, unframed": photos of Marush, shown below the art on the Gallery page.
 *
 * Each `file` is a pair of WebP copies in public/unframed/: `<file>-480.webp` and
 * `<file>-960.webp`. `width`/`height` are the original photo's size (for the aspect ratio).
 */
export interface GalleryImage {
  id: string;
  file: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  project?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "google-cs-1",
    file: "google-cybersecurity-workshop",
    width: 1175,
    height: 1037,
    alt: "Marush sitting cross-legged on the floor of a wood-panelled hall, laughing, with workshop posters and pens spread out in front.",
    caption:
      "Four days of seminars with Google Cybersecurity later and I was running a five-hour intervention at a Czech branch of a major NGO. Shaky hands? Absolutely — even after days of prep and a brain that short-circuited more than once. But the scariest part wasn't the session itself. It was the bureaucracy and paperwork it took just to make it happen. Terrifying, exhausting, and absolutely worth it.",
    project: "google-cs",
  },
  {
    id: "dublin-1",
    file: "dublin-long-room",
    width: 1536,
    height: 2048,
    alt: "Marush gazing up at a huge glowing globe of the Earth hanging in the Long Room library at Trinity College Dublin.",
    caption:
      "Solo trip to Dublin, standing under the glowing Gaia globe in the Long Room at Trinity College. I geeked out over the Book of Kells, wandered Marsh's Library, and side-eyed the hall of fame full of men,until I spotted the newer statues of Rosalind Franklin, Mary Wollstonecraft, Augusta Gregory, and my forever icon Ada Lovelace. Balance, finally. Who run the world? Girls.",
  },
  {
    id: "amnesty-1",
    file: "amnesty-nasrin-sotoudeh",
    width: 1079,
    height: 628,
    alt: "Marush in a flower crown at a yellow Amnesty International stand, holding up a petition.",
    caption:
      "My first Amnesty International event: standing up for Nasrin Sotoudeh, an Iranian human rights legend. We were collecting signatures... but turns out, a shocking number of people can't be bothered to lift a pen for justice. Reality check: apathy is louder than I expected.",
  },
  {
    id: "feminist-1",
    file: "feminist-paper",
    width: 2400,
    height: 1080,
    alt: "Marush presenting in front of a brick wall, next to a projected slide titled “Feminismus a fake news”.",
    caption:
      "A feminist believes in equality — not man-hating, I've clarified this for the 478th time and counting. The conviction runs deep enough to have made it into a 50,000-character final paper. The sass, for the record, is fully citation-backed.",
    project: "feminist",
  },
  {
    id: "parliament-1",
    file: "student-parliament",
    width: 1080,
    height: 812,
    alt: "Marush speaking on a stage with red curtains, beside a screen showing a map of Europe and “Austrian Student Parlament”.",
    caption:
      "Represented the Austrian student parliament abroad and realized politics is the same everywhere. Mostly smoke and mirrors, just with better coffee and younger chaos agents.",
  },
  {
    id: "feminist-2",
    file: "womens-day",
    width: 2048,
    height: 1536,
    alt: "Marush laughing in a “Well behaved women rarely make history” t-shirt, presenting a flip chart covered in colourful Women's Day signatures.",
    caption:
      "Organized Women's Day at school — signature canvas, participation, and the only t-shirt that matters: 'Well-behaved women seldom make history.' Some events you organize because you have to. This one, I organized because it meant something.",
    project: "feminist",
  },
  {
    id: "lgbtq-1",
    file: "ista-rainbow",
    width: 2554,
    height: 2990,
    alt: "Marush striking a pose between a Progress Pride flag poster and an Institute of Science and Technology Austria sign.",
    caption:
      "Snapped this rainbow moment at the Institute of Science and Technology Austria. A proof that science doesn't just accept LGBTQ+ folks, it celebrates them. Smart, inclusive, and fabulous? Yes please.",
  },
  {
    id: "art-1",
    file: "world-on-fire-painting",
    width: 1080,
    height: 707,
    alt: "Marush leaning over a small canvas at a classroom table, painting orange flames with a fine brush.",
    caption:
      "They told us to paint our view of the world, and while I almost went for flowers, the flames just felt more accurate. Nothing says existential dread like a canvas full of fire and low-key despair.",
  },
  {
    id: "graduation-1",
    file: "graduation-czech-embassy",
    width: 2163,
    height: 2319,
    alt: "Marush smiling in front of a large EU flag, holding it up with one hand, a rainbow tote bag on the shoulder.",
    caption:
      "Took this picture right after graduating at the Czech embassy in Vienna in front of the EU flag, rainbow bag in tow, and a big -I made it- grin. This isn't just a graduation picture, it's a whole manifesto in one frame.",
    project: "eu careers",
  },
  {
    id: "marathon-1",
    file: "vienna-marathon-5k",
    width: 1246,
    height: 1298,
    alt: "Marush smiling in a crowd of runners at the Vienna City Marathon, next to a purple cat mascot wearing a 5K bib.",
    caption:
      "Right before running a 5K at the Vienna Marathon: with half-functioning lungs, no bib number, and the stubbornness of a goat. Turns out, putting the number pickup 30 minutes from the start line was a bold logistical choice. But I ran anyway. Sick, unmeasurable, and absolutely unstoppable.",
  },
  {
    id: "marathon-2",
    file: "wings-for-life-run",
    width: 3468,
    height: 4624,
    alt: "Marush in running gear beside a Wings for Life World Run sign marking 9 km on a Vienna shopping street.",
    caption:
      "Wings for Life World Run: someone dropped out, I jumped in, zero training, got chased by a car (as one does), and somehow ran 9km. Not bad for a spontaneous run for charity.",
  },
  {
    id: "marathon-3",
    file: "brno-half-marathon",
    width: 2048,
    height: 1536,
    alt: "Sunlit selfie of Marush in mirrored sunglasses, grinning and holding up a half-marathon medal.",
    caption:
      "My first ever half marathon, starting at sunrise in the fields outside Brno. Alarm set for 2 AM, nerves in full chaos mode… but then I ran it. Turns out, the dread was harder than the distance. Proud is an understatement.",
  },
];

/** `srcset` value for one photo's WebP copies */
export const unframedSrcset = (img: GalleryImage) =>
  `/unframed/${img.file}-480.webp 480w, /unframed/${img.file}-960.webp 960w`;
