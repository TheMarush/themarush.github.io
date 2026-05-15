import { cpSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const routes = [
  '/gallery',
  '/about',
  '/contact',
  '/projects',
  '/projects/ai-view',
  '/study',
  '/feminism',
];

const dist = 'dist';
const src = join(dist, 'index.html');

for (const route of routes) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  cpSync(src, join(dir, 'index.html'));
  console.log(`prerender: created ${dir}/index.html`);
}
