import { cpSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SITE = "https://marush.eu";

/* Per-route <head> tags, for crawlers and link previews that don't run JavaScript */
const pages = {
  "/": {
    type: "website",
    title: "The Marush | Marie Anna Mahdalová",
    ogTitle: "The Marush: artist, advocate, information scientist",
    description:
      "Organized chaos, on purpose. Drawings, workshops and honest conversations about humans, tech and feelings.",
    image: "/home/opening.jpg",
    imageWidth: 2048,
    imageHeight: 1403,
    imageAlt:
      "Digital drawing by Marush: patterned curtains drawn back to reveal hand-drawn flowers growing on a rainbow.",
  },
  "/gallery": {
    title: "Gallery | The Marush",
    description:
      "A walk through my history in art, from childhood drawings to fineliner, sketchbooks, paint and whiteboards. Plus a few photos of the Marush, unframed.",
    image: "/art/history/the-colour-coming-in/roots-out.jpg",
    imageWidth: 1374,
    imageHeight: 1600,
    imageAlt:
      "Roots Out by Marush, a sketchbook spread: a rainbow zigzag grid beside 'Stop shrinking to fit in places you have outgrown', with a plant breaking out of its pot.",
  },
  "/projects/head-in-the-clouds": {
    title: "Head in the clouds, plan in hand | Marush",
    description: "Three personality tests, one honest reflection: how I think, create and work with people.",
    image: "/head-in-the-clouds/stay-bubbly-card.jpg",
    imageAlt: "Hand-drawn blue fish with yellow fins and bubbles, by Marush",
  },
};

const routes = [
  "/gallery",
  "/about",
  "/contact",
  "/projects",
  "/projects/ai-view",
  "/projects/head-in-the-clouds",
  "/study",
  "/feminism",
];

const dist = "dist";
const src = join(dist, "index.html");

const escapeAttr = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function withHead(html, route, page) {
  const tags = [
    `<meta name="description" content="${escapeAttr(page.description)}" />`,
    `<meta property="og:type" content="${page.type ?? "article"}" />`,
    `<meta property="og:url" content="${SITE}${route}" />`,
    `<meta property="og:title" content="${escapeAttr(page.ogTitle ?? page.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(page.description)}" />`,
    `<meta property="og:image" content="${SITE}${page.image}" />`,
    ...(page.imageWidth
      ? [
          `<meta property="og:image:width" content="${page.imageWidth}" />`,
          `<meta property="og:image:height" content="${page.imageHeight}" />`,
        ]
      : []),
    `<meta property="og:image:alt" content="${escapeAttr(page.imageAlt)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
  ];
  return html
    .replace(/<title>.*?<\/title>/, `<title>${escapeAttr(page.title)}</title>`)
    .replace("</head>", `    ${tags.join("\n    ")}\n  </head>`);
}

for (const route of routes) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  const page = pages[route];
  if (page) {
    writeFileSync(join(dir, "index.html"), withHead(readFileSync(src, "utf8"), route, page));
  } else {
    cpSync(src, join(dir, "index.html"));
  }
  console.log(`prerender: created ${dir}/index.html`);
}

/*
 * "/" is dist/index.html itself, which every route above was copied from. Add the home
 * tags only now, after the copies, so no other route inherits (or duplicates) them.
 */
writeFileSync(src, withHead(readFileSync(src, "utf8"), "/", pages["/"]));
console.log(`prerender: added home tags to ${src}`);
