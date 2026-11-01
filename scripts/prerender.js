import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://themarush.github.io';

/* Per-route <head> tags, for crawlers and link previews that don't run JavaScript */
const pages = {
  '/projects/head-in-the-clouds': {
    title: 'Head in the clouds, plan in hand | Marush',
    description: 'Three personality tests, one honest reflection: how I think, create and work with people.',
    image: '/head-in-the-clouds/stay-bubbly-card.jpg',
    imageAlt: 'Hand-drawn blue fish with yellow fins and bubbles, by Marush',
  },
};

const routes = [
  '/gallery',
  '/about',
  '/contact',
  '/projects',
  '/projects/ai-view',
  '/projects/head-in-the-clouds',
  '/study',
  '/feminism',
];

const dist = 'dist';
const src = join(dist, 'index.html');

const escapeAttr = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function withHead(html, route, page) {
  const tags = [
    `<meta name="description" content="${escapeAttr(page.description)}" />`,
    '<meta property="og:type" content="article" />',
    `<meta property="og:url" content="${SITE}${route}" />`,
    `<meta property="og:title" content="${escapeAttr(page.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(page.description)}" />`,
    `<meta property="og:image" content="${SITE}${page.image}" />`,
    `<meta property="og:image:alt" content="${escapeAttr(page.imageAlt)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
  ];
  return html
    .replace(/<title>.*?<\/title>/, `<title>${escapeAttr(page.title)}</title>`)
    .replace('</head>', `    ${tags.join('\n    ')}\n  </head>`);
}

for (const route of routes) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  const page = pages[route];
  if (page) {
    writeFileSync(join(dir, 'index.html'), withHead(readFileSync(src, 'utf8'), route, page));
  } else {
    cpSync(src, join(dir, 'index.html'));
  }
  console.log(`prerender: created ${dir}/index.html`);
}
