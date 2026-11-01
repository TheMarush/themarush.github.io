import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { navigate } from "../utils/navigate.js";

type Story = {
  id: string;
  href: string;
  img: string;
  alt: string;
  kicker: string;
  title: string;
  deck: string;
  cta?: string;
  /* Lead = wide headline story at the top of the grid */
  lead?: boolean;
};

/* Stories after this many are rendered as a full-width list instead of the grid */
const GRID_COUNT = 5;

const STORIES: Story[] = [
  {
    id: "eu-ambassador-title",
    href: "/projects/eu-careers",
    img: "/eu-careers/prague-training.jpg",
    alt: "EU Careers Student Ambassadors at Czernin Palace, Prague",
    kicker: "Education · Advocacy · 2026–2027",
    title: "EU Careers Ambassador",
    deck: "One of the students explaining to other students that working for the EU is a real job you can actually apply for. Training done in Prague. Now the actual work starts, at MUNI.",
    lead: true,
  },
  {
    id: "head-in-the-clouds-title",
    href: "/projects/head-in-the-clouds",
    img: "/head-in-the-clouds/stay-bubbly-card.jpg",
    alt: "Hand-drawn blue fish with yellow fins and bubbles, by Marush",
    kicker: "Self-discovery · 2026",
    title: "Head in the clouds, plan in hand",
    deck: "Three personality tests tried to tell me who I am. One of them got it very wrong.",
    cta: "Read the story",
  },
  {
    id: "good-enough-title",
    href: "/projects/good-enough",
    img: "/good-enough/Q5.png",
    alt: "Good Enough app conversation screenshot",
    kicker: "AI in Practice · KISK · 2026",
    title: "Good Enough",
    deck: "A planning companion for people with AuDHD, built over one semester using the Double Diamond framework. From a stuck opening message to a deployed prototype, and an honest account of what AI could and couldn't do along the way.",
  },
  {
    id: "cybersecurity-title",
    href: "/projects/cybersecurity",
    img: "https://i.imgur.com/ObESF8o.jpg",
    alt: "Google.org Cybersecurity Seminars",
    kicker: "Cybersecurity · Education · 2025–2026",
    title: "Google Cybersecurity Seminars",
    deck: "A Google.org-funded programme at Masaryk University: placements at Amnesty International, senior care homes, and a 5-day national roadshow.",
  },
  {
    id: "ijf26-title",
    href: "/projects/ijf26",
    img: "/ijf26/intro.jpeg",
    alt: "International Journalism Festival 2026, Perugia",
    kicker: "Field Coverage · 2026",
    title: "IJF26",
    deck: "Three days at the International Journalism Festival in Perugia. Nineteen panels on gender, cybersecurity, conflict reporting, and the future of the craft. Notes taken in the rooms, in real time.",
  },
  {
    id: "ai-view-title",
    href: "/projects/ai-view",
    img: "/ai-gallery/grok-image.jpg",
    alt: "Grok's interpretation of identity from personal data",
    kicker: "Virtual Exhibition · 2025",
    title: "Reimagined by LLM",
    deck: "Three AI systems. The same archive. Three completely different interpretations of who I am. A small lab for exploring how algorithmic systems read, misread, and construct identity from personal data.",
  },
  {
    id: "feminism-title",
    href: "/projects/feminism",
    img: "/pj-feminism/kisk-forum.webp",
    alt: "KISK Forum, feminist advocacy",
    kicker: "Personal Journey · 2018–present",
    title: "Lifelong Feminist",
    deck: "A photo diary from nearly a decade of feminist work. From a middle school matura to winter schools and public forums: the moments that turned feminism from an idea into a way of seeing the world.",
  },
  {
    id: "podcast-title",
    href: "/projects/podcast",
    img: "https://img.youtube.com/vi/Qn3vAJkE4ms/hqdefault.jpg",
    alt: "Mahdalky podcast: mother and daughter conversations",
    kicker: "Podcast · Czech · 2024–present",
    title: "Podcast: Mahdalky",
    deck: "Mother and daughter, two generations, one podcast. Honest conversations about mental health, money, attention, parenting, and technology. Breaking taboos so you don't have to do it alone.",
    cta: "All episodes",
  },
];

@customElement("mm-projects")
export class MMProjects extends LitElement {
  private _onAnchor = (e: Event) => {
    const { anchor } = (e as CustomEvent<{ anchor: string }>).detail;
    const el =
      this.shadowRoot?.querySelector(`[aria-labelledby="${anchor}"]`) ??
      this.shadowRoot?.querySelector(`#${anchor}`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  /* Keep ctrl/cmd/shift/middle-click working as normal links (new tab etc.) */
  private _onLinkClick = (e: MouseEvent, href: string) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(href);
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("navigate-anchor", this._onAnchor);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("navigate-anchor", this._onAnchor);
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      --gutter: 1.25rem;
      --rule: rgba(148, 163, 184, 0.22);
      --rule-strong: rgba(148, 163, 184, 0.45);
      --accent: var(--button-bg, #52c8f4);
    }

    .container {
      padding: 1.5rem 1rem;
      max-width: 980px;
      margin: 0 auto;
      color: inherit;
    }

    /* ── HEADER ── */
    .title {
      margin: 0 0 0.4rem;
      font-size: 2rem;
      font-weight: 700;
      color: var(--accent);
      border-bottom: 2px solid var(--accent);
      padding-bottom: 0.5rem;
    }

    .subtitle {
      margin: 0 0 1.5rem;
      font-size: 0.9rem;
      color: #9ca3af;
    }

    /* ── NEWSPAPER GRID ──
       Every story draws its own left column rule. The grid is pulled out by one
       gutter on each side and the wrapper clips it, so the outermost rules and
       padding disappear and content stays flush with the page edges. */
    .paper-clip {
      overflow: hidden;
    }

    .paper {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      row-gap: 0.75rem;
      margin: 0 calc(-1 * var(--gutter)) 0 calc(-1 * var(--gutter) - 1px);
    }

    /* Row 1: lead (4) + 2 · Row 2: 2 + 2 + 2 · then full-width list rows */
    .story       { grid-column: span 2; }
    .story-lead  { grid-column: span 4; }
    .story-wide  { grid-column: 1 / -1; }

    /* ── STORY (whole card is the link) ── */
    .story {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      padding: 0.85rem var(--gutter) 1.1rem;
      border-top: 2px solid var(--rule-strong);
      border-left: 1px solid var(--rule);
      cursor: pointer;
    }

    .story-wide {
      flex-direction: row;
      align-items: flex-start;
      gap: 1.5rem;
    }

    /* ── PHOTO ── */
    .img-frame {
      overflow: hidden;
      flex-shrink: 0;
      aspect-ratio: 16 / 9;
      background: rgba(148, 163, 184, 0.08);
    }

    .story-lead .img-frame { aspect-ratio: 2 / 1; }
    .story-wide .img-frame { width: 320px; }

    .img-frame img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      object-position: center;
      transition: transform 0.4s ease, filter 0.4s ease;
      filter: saturate(0.9);
    }

    .story:hover .img-frame img {
      transform: scale(1.04);
      filter: saturate(1.05);
    }

    /* ── TEXT CONTENT ── */
    .story-text {
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
      flex: 1;
    }

    .kicker {
      font-size: 0.66rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--accent);
      font-weight: 600;
      margin: 0;
    }

    .headline {
      font-family: Georgia, "Times New Roman", serif;
      font-weight: 700;
      line-height: 1.12;
      margin: 0;
      font-size: 1.15rem;
      color: #f9fafb;
    }

    .story-lead .headline { font-size: 2rem; }
    .story-wide .headline { font-size: 1.3rem; }

    .headline a {
      color: inherit;
      text-decoration: none;
      transition: color 0.2s ease;
    }

    /* Stretch the headline link over the whole card */
    .headline a::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
    }

    .headline a:focus-visible {
      outline: none;
    }

    .headline a:focus-visible::after {
      outline: 2px solid var(--accent);
      outline-offset: -4px;
    }

    .story:hover .headline a,
    .headline a:focus-visible {
      color: var(--accent);
    }

    .hrule {
      width: 2rem;
      height: 2px;
      background: rgba(148, 163, 184, 0.35);
      flex-shrink: 0;
      transition: width 0.3s ease, background 0.3s ease;
    }

    .story:hover .hrule {
      width: 3.5rem;
      background: var(--accent);
    }

    .deck {
      font-size: 0.84rem;
      color: #d1d5db;
      line-height: 1.65;
      margin: 0;
    }

    .story-lead .deck { font-size: 0.92rem; }

    /* ── CTA (visual only; the card itself is the link) ── */
    .cta {
      margin-top: auto;
      padding-top: 0.5rem;
      color: var(--accent);
      font-size: 0.76rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .cta .arrow {
      display: inline-block;
      transition: transform 0.2s ease;
    }

    .story:hover .cta .arrow {
      transform: translateX(4px);
    }

    @media (prefers-reduced-motion: reduce) {
      .img-frame img,
      .hrule,
      .cta .arrow {
        transition: none;
      }
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 760px) {
      .paper { grid-template-columns: repeat(2, 1fr); }

      .story       { grid-column: span 1; }
      .story-lead,
      .story-wide  { grid-column: 1 / -1; }

      .story-lead .headline { font-size: 1.6rem; }
      .story-wide .img-frame { width: 40%; }
    }

    @media (max-width: 520px) {
      .title { font-size: 1.5rem; }

      .paper { grid-template-columns: 1fr; }

      .story-wide { flex-direction: column; }
      .story-wide .img-frame { width: 100%; }
      .story-lead .img-frame { aspect-ratio: 16 / 9; }
      .story-lead .headline { font-size: 1.5rem; }
    }
  `;

  private _renderStory(s: Story, i: number) {
    const variant = i >= GRID_COUNT ? "story-wide" : s.lead ? "story-lead" : "";
    return html`
      <article class="story ${variant}" aria-labelledby=${s.id}>
        <div class="img-frame">
          <img src=${s.img} alt=${s.alt} loading="lazy" />
        </div>
        <div class="story-text">
          <div class="kicker">${s.kicker}</div>
          <h3 id=${s.id} class="headline">
            <a href=${s.href} @click=${(e: MouseEvent) => this._onLinkClick(e, s.href)}>${s.title}</a>
          </h3>
          <div class="hrule"></div>
          <p class="deck">${s.deck}</p>
          <div class="cta" aria-hidden="true">
            ${s.cta ?? "Read more"} <span class="arrow">→</span>
          </div>
        </div>
      </article>
    `;
  }

  render() {
    return html`
      <section class="container" aria-labelledby="projects-title">
        <h2 id="projects-title" class="title">Projects</h2>
        <p class="subtitle">Selected Work &amp; Ongoing Experiments</p>

        <div class="paper-clip">
          <div class="paper">
            ${STORIES.map((s, i) => this._renderStory(s, i))}
          </div>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-projects": MMProjects;
  }
}
