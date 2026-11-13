import { css, html, LitElement, type SVGTemplateResult, svg } from "lit";
import { customElement } from "lit/decorators.js";
import { navigate } from "../utils/navigate.js";
import "./mm-back-button.ts";

const PATH = "/projects/head-in-the-clouds";
const SEO_TITLE = "Head in the clouds, plan in hand | Marush";
const SEO_DESCRIPTION = "Three personality tests, one honest reflection: how I think, create and work with people.";

const SHOP_URL = "https://the-marush.tpopsite.com/";
const CONTACT_PATH = "/contact";

const heroIllustration = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 420"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    role="img"
    aria-label="Two clouds above a pencil drawing a dotted path down to a small flag"
  >
    <g stroke="currentColor" stroke-width="2.4">
      <path d="M130 170H380a40 40 0 0 0 0-80a46 46 0 0 0-70-36a62 62 0 0 0-112 8a44 44 0 0 0-68 50a31 31 0 0 0 0 58z" />
      <path d="M404 128H544a27 27 0 0 0 0-54a32 32 0 0 0-54-14a32 32 0 0 0-58 22a24 24 0 0 0-28 46z" opacity=".6" />
    </g>
    <path stroke="currentColor" stroke-width="2.4" stroke-dasharray="3 10" d="M290 172c-10 46 60 60 40 110s-110 40-120 90" />
    <g stroke="currentColor" stroke-width="2.4">
      <path d="M318 214l58-58l14 14l-58 58l-20 6z" />
      <path d="M366 166l14 14" />
    </g>
    <g stroke="currentColor" stroke-width="2.4">
      <path d="M220 356V300" />
      <path d="M220 300l34 12l-34 12" />
    </g>
    <path stroke="currentColor" opacity=".4" stroke-width="1.8" d="M120 360h420" />
    <path stroke="currentColor" opacity=".4" stroke-width="1.8" stroke-dasharray="2 10" d="M160 378h340" />
    <g stroke="currentColor" stroke-width="1.8">
      <path d="M540 40c1.5 10 6 14.5 16 16c-10 1.5-14.5 6-16 16c-1.5-10-6-14.5-16-16c10-1.5 14.5-6 16-16z" />
      <path d="M88 222c1 6 4 9 10 10c-6 1-9 4-10 10c-1-6-4-9-10-10c6-1 9-4 10-10z" opacity=".7" />
      <path d="M500 250c1 6 4 9 10 10c-6 1-9 4-10 10c-1-6-4-9-10-10c6-1 9-4 10-10z" opacity=".5" />
    </g>
  </svg>
`;

type StrengthId = "philomath" | "strategist" | "optimist" | "empathizer" | "coach";

type Strength = {
  id: StrengthId;
  name: string;
  color: string;
  tagline: string;
  life: string;
  get: string;
  best: string;
  /* Inner SVG content, drawn on a 48×48 viewBox with currentColor */
  icon: SVGTemplateResult;
  /* Position in the "How they connect" diagram */
  x: number;
  y: number;
};

const STRENGTHS: Strength[] = [
  {
    id: "philomath",
    name: "Philomath",
    color: "#52c8f4",
    tagline: "I learn about everything, especially about myself.",
    life: "I read and listen to audiobooks and podcasts all the time. Right now: The Psychology of Money and The Big Leap. I'm also learning public speaking the only way that works: by doing it.",
    get: "Someone who gets into your topic fast and actually enjoys the research part. I'll come back with questions you didn't think to ask.",
    best: "I can overthink. So I use thinking as my springboard, then ship a good enough first version and make it better from there.",
    icon: svg`<path d="M5 13c7-2.5 13-1.5 19 2.5c6-4 12-5 19-2.5v24c-7-2.5-13-1.5-19 2.5c-6-4-12-5-19-2.5z"/><path d="M24 15.5v24"/><path d="M9 19c4-1 8-.5 11 1M9 25c4-1 8-.5 11 1M28 20c3-1.5 7-2 11-1M28 26c3-1.5 7-2 11-1"/><path d="M40 2v6M37 5h6"/>`,
    x: 200,
    y: 60,
  },
  {
    id: "strategist",
    name: "Strategist",
    color: "#A78BFA",
    tagline: "A little panic, then a plan. Then a better plan.",
    life: "I juggle work, studies and a gazillion side quests with a weekly system that still leaves room for rest. When something breaks, I see a few ways to fix it and adjust as I go.",
    get: "Structure early. If a project feels foggy, I'll suggest a plan, milestones and a timeline, so we both know what's ready when.",
    best: `Clear decisions. I'm flexible, but "let's just see" for too long makes me restless, so I'll gently push for something set in stone.`,
    icon: svg`<circle cx="8" cy="40" r="3"/><path d="M11 40c9 0 4-11 13-11s4-10 12-10" stroke-dasharray="2 4"/><path d="M36 21V5"/><path d="M36 5l9 3.5l-9 3.5"/><path d="M4 12l5 5M9 12l-5 5"/>`,
    x: 333.1,
    y: 156.7,
  },
  {
    id: "optimist",
    name: "Optimist",
    color: "#FBBF24",
    tagline: "Not delusional. Just sure it will work out.",
    life: "When a plan falls apart, I usually have a plan B within a couple of hours. I'm quick to tell people what they're doing well, and to tell others about them too.",
    get: "Steady morale when things go sideways, and honest encouragement that stays grounded in reality.",
    best: "Around people who look for solutions. I'll always steer a conversation from complaining toward what we can do next.",
    icon: svg`<path d="M3 37h42"/><path d="M11 37a13 13 0 0 1 26 0"/><path d="M24 15V8M12 21l-4.5-4.5M36 21l4.5-4.5M6.5 30H2M46 30h-4.5"/><path d="M14 43h20" stroke-dasharray="3 4"/>`,
    x: 282.3,
    y: 313.3,
  },
  {
    id: "empathizer",
    name: "Empathizer",
    color: "#F472B6",
    tagline: "I notice the small things, and do something kind with them.",
    life: "At a birthday party I saw a friend sitting quietly, watching the cat. I started playing with the cat, then handed him the toy so he could join in without feeling awkward. He lit up. Small things like that are how I work.",
    get: "I pick up on what people need before they say it. That makes me good with clients, teams and audiences, and it's why my creative work aims to feel personal.",
    best: "With healthy boundaries. I care a lot, and I've learned I don't have to fix every feeling in the room to be helpful.",
    icon: svg`<path d="M24 41s-15-8.5-15-19a7.5 7.5 0 0 1 15-3a7.5 7.5 0 0 1 15 3c0 10.5-15 19-15 19z"/><path d="M17 24h4l2-4l3 8l2-4h4"/><path d="M3 17c2.5 2.5 2.5 7.5 0 10M45 17c-2.5 2.5-2.5 7.5 0 10"/>`,
    x: 117.7,
    y: 313.3,
  },
  {
    id: "coach",
    name: "Coach",
    color: "#34D399",
    tagline: "I help people grow, if they want to grow.",
    life: "Friends, coworkers, family: people come to me when they're stuck. Not messiah style. I calm things down and help them see the next step.",
    get: "Someone who helps your team or community feel calmer and more capable. Long term, I want to run workshops and build a community around my book.",
    best: "With people who want to grow. I can't do the work for anyone, and I don't pretend to.",
    icon: svg`<path d="M24 41V21"/><path d="M24 27c-8 0-13-5-13-13c8 0 13 5 13 13z"/><path d="M24 21c0-8 5-13 13-13c0 8-5 13-13 13z"/><path d="M12 41h24"/><path d="M16 45h16" stroke-dasharray="2 4"/>`,
    x: 66.9,
    y: 156.7,
  },
];

const byId = Object.fromEntries(STRENGTHS.map((s) => [s.id, s])) as Record<StrengthId, Strength>;

/* Diagram center; node radius and the gap between a node and its label */
const CX = 200;
const CY = 200;
const NODE_R = 30;
const LABEL_GAP = 12;

/* Dotted curves between linked strengths; the control point bends each one toward the center */
const LINK_CURVES = [
  "M200 60Q241.1 143.4 333.1 156.7", // Strategist + Philomath
  "M333.1 156.7Q266.6 221.6 282.3 313.3", // Optimist + Strategist
  "M282.3 313.3Q200 270 117.7 313.3", // Empathizer + Optimist
  "M117.7 313.3Q133.4 221.6 66.9 156.7", // Coach + Empathizer
  "M66.9 156.7Q158.9 143.4 200 60", // Coach + Philomath
];

const LINKS: { ids: StrengthId[]; text: string }[] = [
  { ids: ["optimist", "strategist"], text: "Hope gets me back up. Strategy gives me the plan B." },
  {
    ids: ["strategist", "philomath"],
    text: "I plan rest into my week, because rest is something I'm still learning too.",
  },
  {
    ids: ["empathizer", "optimist"],
    text: "I keep my head in the clouds on purpose. It's what carries me through the hurdles.",
  },
  {
    ids: ["coach", "empathizer", "philomath"],
    text: "Insight, people and guidance together: that's the book community and workshops I'm building toward.",
  },
];

const WORKING_WITH_ME = [
  "I learn your world quickly and ask the questions that matter.",
  "I bring structure when things feel foggy.",
  "I keep the mood up without pretending problems aren't there.",
  "I notice what people need, including your audience.",
  "I'm honest. You'll hear what I actually think, kindly.",
];

@customElement("mm-head-in-the-clouds")
export class MMHeadInTheClouds extends LitElement {
  private _observer?: IntersectionObserver;
  private _headActive = false;
  private _prevTitle = "";
  private _prevDescription: string | null = null;
  private _createdMeta = false;

  /* Keep ctrl/cmd/shift/middle-click working as normal links (new tab etc.) */
  private _onLinkClick = (e: MouseEvent, href: string) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(href);
  };

  /* Every page is mounted at once, so set the SEO title and description only while this route is active */
  private _syncHead = () => {
    const active = window.location.pathname.replace(/\/$/, "") === PATH;
    if (active === this._headActive) return;
    this._headActive = active;

    let meta = document.head.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (active) {
      this._prevTitle = document.title;
      document.title = SEO_TITLE;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.append(meta);
        this._createdMeta = true;
      }
      this._prevDescription = meta.getAttribute("content");
      meta.content = SEO_DESCRIPTION;
    } else {
      document.title = this._prevTitle;
      if (this._createdMeta) {
        meta?.remove();
        this._createdMeta = false;
      } else if (meta && this._prevDescription !== null) {
        meta.content = this._prevDescription;
      }
    }
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("popstate", this._syncHead);
    this._syncHead();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("popstate", this._syncHead);
    this._observer?.disconnect();
  }

  firstUpdated() {
    const items = this.renderRoot.querySelectorAll(".reveal");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      for (const el of items) el.classList.add("in");
      return;
    }
    this._observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          this._observer?.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    for (const el of items) this._observer.observe(el);
  }

  static styles = css`
    h1, h2, h3, h4 {
      font-family: var(--font-heading);
    }

    :host {
      display: block;
      width: 100%;
      --border: rgba(148, 163, 184, 0.18);
      --surface: rgba(148, 163, 184, 0.05);
      --text: #e8edf5;
      --text-muted: #9aa8ba;
      --text-dim: #6b8099;
      --highlight: #f0f4ff;
      --accent: var(--button-bg, #52c8f4);
      --page-bg: #1b1b1b;
    }

    .page {
      max-width: 980px;
      margin: 0 auto;
      padding: 0 1.5rem 3rem;
      color: var(--text);
      font-family: 'Lora', Georgia, serif;
      font-size: 16.5px;
      line-height: 1.75;
    }

    .back-row {
      padding: 1.5rem 0 0.75rem;
    }

    h1, h2, h3, p, ul, dl, dd, blockquote, figure {
      margin: 0;
    }

    h1, h2, h3, .strength-name, .test-name {
      font-family: var(--font-heading);
    }

    .eyebrow, .meta, .section-marker, .row-label {
      font-family: 'IBM Plex Mono', monospace;
    }

    .btn {
      font-family: var(--font-ui);
    }

    p { color: var(--text-muted); }
    p + p { margin-top: 1rem; }

    a {
      color: var(--accent);
      text-decoration: none;
      border-bottom: 1px solid rgba(82, 200, 244, 0.3);
      transition: border-color 0.2s ease;
    }

    a:hover,
    a:focus-visible {
      border-bottom-color: var(--accent);
    }

    .tagline {
      font-style: italic;
    }

    /* ── REVEAL ON SCROLL ── */
    .reveal {
      opacity: 0;
      transform: translateY(16px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }

    .reveal.in {
      opacity: 1;
      transform: none;
    }

    @media (prefers-reduced-motion: reduce) {
      .reveal {
        opacity: 1;
        transform: none;
        transition: none;
      }
    }

    /* ── HERO ── */
    .hero {
      display: grid;
      grid-template-columns: 1.15fr 1fr;
      gap: 2rem;
      align-items: center;
      padding: 1.75rem 0 2.5rem;
      border-bottom: 1px solid var(--border);
    }

    .eyebrow {
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--accent);
      font-weight: 600;
      margin-bottom: 1rem;
    }

    h1 {
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 800;
      line-height: 1.1;
      color: var(--highlight);
      letter-spacing: -0.02em;
      margin-bottom: 1.2rem;
    }

    .subtitle {
      font-size: 1.05rem;
      max-width: 34rem;
    }

    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem 1.75rem;
      margin-top: 1.75rem;
      font-size: 0.8rem;
      line-height: 1.5;
    }

    .meta dt {
      font-size: 0.62rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--text-dim);
    }

    .meta dd { color: var(--text); }

    .hero-art {
      color: var(--accent);
    }

    .hero-art svg {
      width: 100%;
      height: auto;
      display: block;
    }

    /* ── SECTIONS ── */
    .section {
      padding: 2.75rem 0 2.25rem;
      border-bottom: 1px solid var(--border);
    }

    .section:last-of-type { border-bottom: none; }

    .section-marker {
      font-size: 0.62rem;
      letter-spacing: 0.2em;
      color: var(--text-dim);
      text-transform: uppercase;
      margin-bottom: 0.9rem;
    }

    h2 {
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--highlight);
      letter-spacing: -0.01em;
      margin-bottom: 1.3rem;
    }

    .prose { max-width: 680px; }

    .section-intro {
      max-width: 680px;
      margin-bottom: 1.75rem;
    }

    /* ── PROCESS ── */
    .tests {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    .test {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1.25rem;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 6px;
    }

    .test-name {
      font-size: 1rem;
      font-weight: 700;
      color: var(--highlight);
    }

    .test-result {
      font-size: 0.88rem;
      line-height: 1.6;
      color: var(--text);
    }

    .callout {
      border-left: 2px solid var(--accent);
      padding: 1.1rem 1.4rem;
      background: rgba(82, 200, 244, 0.08);
      border-radius: 0 4px 4px 0;
      margin-top: 1.5rem;
    }

    .callout h3 {
      font-size: 0.95rem;
      color: var(--highlight);
      margin-bottom: 0.5rem;
    }

    .callout p {
      color: var(--text);
      font-size: 0.95rem;
    }

    /* ── STRENGTHS ── */
    .strengths {
      display: grid;
      gap: 1.25rem;
    }

    .strength {
      --c: var(--accent);
      display: grid;
      grid-template-columns: 4.5rem 1fr;
      gap: 0 1.5rem;
      padding: 1.5rem;
      background: var(--surface);
      border: 1px solid var(--border);
      border-top: 3px solid var(--c);
      border-radius: 6px;
    }

    .strength-icon {
      width: 4.5rem;
      height: 4.5rem;
      color: var(--c);
      padding: 0.75rem;
      box-sizing: border-box;
      border-radius: 50%;
      background: color-mix(in srgb, var(--c) 12%, transparent);
    }

    .strength-icon svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .strength-name {
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--c);
      line-height: 1.2;
    }

    .strength .tagline {
      color: var(--text);
      font-size: 1.05rem;
      margin: 0.3rem 0 1.1rem;
    }

    .rows {
      display: grid;
      gap: 0.85rem;
    }

    .row {
      display: grid;
      grid-template-columns: 9rem 1fr;
      gap: 1rem;
    }

    .row-label {
      font-size: 0.66rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--c);
      padding-top: 0.3rem;
    }

    .row dd {
      color: var(--text-muted);
      font-size: 0.95rem;
    }

    /* ── PATTERN ── */
    .pattern {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: center;
    }

    .diagram svg {
      width: 100%;
      max-width: 440px;
      height: auto;
      display: block;
      margin: 0 auto;
    }

    .diagram .spoke {
      stroke: rgba(148, 163, 184, 0.35);
      stroke-width: 1;
    }

    .diagram .link {
      stroke: rgba(226, 232, 240, 0.55);
      stroke-width: 1.4;
      stroke-dasharray: 2 5;
      stroke-linecap: round;
      fill: none;
    }

    .diagram .node {
      fill: var(--page-bg);
      stroke-width: 1.6;
    }

    .diagram .core {
      fill: var(--page-bg);
      stroke: var(--accent);
      stroke-width: 1.8;
    }

    .diagram .core-label {
      fill: var(--highlight);
      font-family: var(--font-heading);
      font-weight: 700;
      font-size: 17px;
    }

    .diagram .node-label {
      font-family: var(--font-heading);
      font-size: 15px;
      font-weight: 600;
    }

    .links {
      list-style: none;
      padding: 0;
      display: grid;
      gap: 1.1rem;
    }

    .links li {
      padding-left: 1rem;
      border-left: 1px dashed rgba(148, 163, 184, 0.45);
    }

    .link-names {
      display: block;
      font-family: var(--font-heading);
      font-size: 0.85rem;
      font-weight: 700;
      margin-bottom: 0.2rem;
    }

    .link-names .plus { color: var(--text-dim); }

    .links p { font-size: 0.95rem; }

    /* ── WORKING WITH ME ── */
    .checklist {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.9rem 2rem;
    }

    .checklist li {
      position: relative;
      padding-left: 1.75rem;
      color: var(--text);
    }

    .checklist svg {
      position: absolute;
      left: 0;
      top: 0.35em;
      width: 1.05rem;
      height: 1.05rem;
      color: var(--accent);
    }

    /* ── CLOSING ── */
    .closing {
      text-align: center;
      padding: 3.5rem 0 1rem;
    }

    .closing blockquote {
      max-width: 720px;
      margin: 0 auto 1.75rem;
      font-size: clamp(1.3rem, 3vw, 1.75rem);
      font-style: italic;
      line-height: 1.45;
      color: var(--highlight);
    }

    .closing blockquote::before,
    .closing blockquote::after {
      color: var(--accent);
    }

    .closing blockquote::before { content: "\\201C"; }
    .closing blockquote::after { content: "\\201D"; }

    .closing p { margin-bottom: 1.5rem; }

    a.btn {
      display: inline-block;
      padding: 0.6rem 1.25rem;
      border: none;
      border-radius: 0.3rem;
      background: var(--button-bg, #52c8f4);
      color: var(--button-color, #000);
      font-weight: 700;
      font-size: 1.05rem;
      transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
    }

    a.btn:hover,
    a.btn:focus-visible {
      transform: scale(1.05);
      background: #0b76b4;
      color: #fff;
    }

    a.btn:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 3px;
    }

    @media (prefers-reduced-motion: reduce) {
      a.btn { transition: none; }
      a.btn:hover, a.btn:focus-visible { transform: none; }
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 860px) {
      .pattern { grid-template-columns: 1fr; }
    }

    @media (max-width: 700px) {
      .page { padding: 0 1.2rem 4rem; }
      .hero,
      .tests,
      .checklist { grid-template-columns: 1fr; }
      .hero-art { max-width: 420px; }
      .strength { grid-template-columns: 1fr; gap: 1rem; padding: 1.25rem; }
      .strength-icon { width: 3.75rem; height: 3.75rem; }
      .row { grid-template-columns: 1fr; gap: 0.15rem; }
      .row-label { padding-top: 0; }
    }
  `;

  private _icon(s: Strength) {
    return html`
      <svg
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        role="img"
        aria-label="${s.name} icon"
      >${s.icon}</svg>
    `;
  }

  private _renderStrength(s: Strength) {
    return html`
      <article class="strength reveal" style="--c: ${s.color}" aria-labelledby="strength-${s.id}">
        <div class="strength-icon">${this._icon(s)}</div>
        <div>
          <h3 id="strength-${s.id}" class="strength-name">${s.name}</h3>
          <p class="tagline">${s.tagline}</p>
          <dl class="rows">
            <div class="row"><dt class="row-label">In real life</dt><dd>${s.life}</dd></div>
            <div class="row"><dt class="row-label">What you get</dt><dd>${s.get}</dd></div>
            <div class="row"><dt class="row-label">How I work best</dt><dd>${s.best}</dd></div>
          </dl>
        </div>
      </article>
    `;
  }

  private _renderDiagram() {
    return html`
      <svg
        viewBox="0 -24 400 422"
        role="img"
        aria-label="Diagram: Marush in the center, connected to Philomath, Strategist, Optimist, Empathizer and Coach. Dotted curves link Philomath with Strategist, Strategist with Optimist, Optimist with Empathizer, Empathizer with Coach, and Coach with Philomath."
      >
        ${STRENGTHS.map((s) => svg`<line class="spoke" x1=${CX} y1=${CY} x2=${s.x} y2=${s.y} />`)}
        ${LINK_CURVES.map((d) => svg`<path class="link" d=${d} />`)}
        <circle class="core" cx=${CX} cy=${CY} r="46" />
        <text class="core-label" x=${CX} y=${CY} text-anchor="middle" dominant-baseline="central">Marush</text>
        ${STRENGTHS.map((s) => {
          /* Labels sit directly above or below their node, on the outer side, where no spoke or curve runs.
             The extra 4px / 12px allow for descenders above and cap height below the baseline. */
          const below = s.y > CY;
          const ly = below ? s.y + NODE_R + LABEL_GAP + 12 : s.y - NODE_R - LABEL_GAP - 4;
          return svg`
            <g style="color: ${s.color}">
              <circle class="node" cx=${s.x} cy=${s.y} r=${NODE_R} stroke="currentColor" />
              <svg
                x=${s.x - 17}
                y=${s.y - 17}
                width="34"
                height="34"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >${s.icon}</svg>
              <text class="node-label" x=${s.x} y=${ly} fill="currentColor" text-anchor="middle">${s.name}</text>
            </g>
          `;
        })}
      </svg>
    `;
  }

  render() {
    return html`
      <div class="page">
        <div class="back-row">
          <mm-back-button label="Back to Projects" href="/projects"></mm-back-button>
        </div>

        <!-- HERO -->
        <header class="hero">
          <div>
            <p class="eyebrow">Personal project · Self-discovery</p>
            <h1>Head in the clouds, plan in hand.</h1>
            <p class="subtitle">
              Three personality tests, one honest reflection and a map of how I think, create and work with people.
            </p>
            <dl class="meta">
              <div><dt>Tools</dt><dd>HIGH5, VIA, 16Personalities</dd></div>
            </dl>
          </div>
          <div class="hero-art">${heroIllustration}</div>
        </header>

        <!-- WHY I DID THIS -->
        <section class="section reveal" aria-labelledby="why-title">
          <p class="section-marker">Why I did this</p>
          <h2 id="why-title">It started as homework.</h2>
          <div class="prose">
            <p>
              This started as a university assignment in an entrepreneurship course: take a strengths test, map your
              strengths, reflect on them. I ended up taking three tests and spending far more time with the results than
              I had to. I'm a Philomath, so of course I did.
            </p>
            <p>
              The tests didn't agree with each other, and none of them got me completely right. That turned out to be
              the most interesting part. This page is what I found, and what it means if we work together.
            </p>
            <p>
              I'm very keen on self-improvement, and that's the real reason I stayed with it longer than I had to. I
              want to know my strengths better so I can work on them on purpose. Knowing what I'm good at helps me
              decide where to put my energy: into my writing, my illustrations and the people I work with.
            </p>
          </div>
        </section>

        <!-- THE PROCESS -->
        <section class="section" aria-labelledby="process-title">
          <p class="section-marker">The process</p>
          <h2 id="process-title">Three tests, three different mirrors</h2>
          <div class="tests">
            <article class="test reveal">
              <h3 class="test-name">HIGH5</h3>
              <p class="test-result">Philomath · Strategist · Optimist · Empathizer · Coach</p>
            </article>
            <article class="test reveal">
              <h3 class="test-name">VIA Character Strengths</h3>
              <p class="test-result">Creativity · Curiosity · Honesty · Love of Learning · Hope</p>
            </article>
            <article class="test reveal">
              <h3 class="test-name">16Personalities</h3>
              <p class="test-result">INTJ-T, the Architect</p>
            </article>
          </div>
          <aside class="callout reveal" aria-labelledby="wrong-title">
            <h3 id="wrong-title">Where the tests got me wrong</h3>
            <p>
              16Personalities described INTJs as detached and bad with feelings. Not me, not at all. HIGH5 put
              Empathizer and Coach in my top five, and that's how I actually live. VIA ranked self-regulation near the
              bottom, but I plan my weeks and protect my rest. The lesson: tests are a mirror, not a verdict. I know
              myself better than any of them.
            </p>
          </aside>
        </section>

        <!-- THE FINDINGS -->
        <section class="section" aria-labelledby="findings-title">
          <p class="section-marker">The findings</p>
          <h2 id="findings-title">Five strengths</h2>
          <p class="section-intro">
            HIGH5 felt closest, so it became the backbone. Where another test described the same thing in different
            words, I merged it.
          </p>
          <div class="strengths">${STRENGTHS.map((s) => this._renderStrength(s))}</div>
        </section>

        <!-- THE PATTERN -->
        <section class="section" aria-labelledby="pattern-title">
          <p class="section-marker">The pattern</p>
          <h2 id="pattern-title">How they connect</h2>
          <div class="pattern">
            <figure class="diagram reveal">${this._renderDiagram()}</figure>
            <ul class="links reveal">
              ${LINKS.map(
                (l) => html`
                  <li>
                    <span class="link-names">
                      ${l.ids.map(
                        (id, i) =>
                          html`${i > 0 ? html`<span class="plus"> + </span>` : ""}<span style="color: ${byId[id].color}">${byId[id].name}</span>`,
                      )}
                    </span>
                    <p>${l.text}</p>
                  </li>
                `,
              )}
            </ul>
          </div>
        </section>

        <!-- IN SHORT -->
        <section class="section reveal" aria-labelledby="short-title">
          <p class="section-marker">In short</p>
          <h2 id="short-title">Working with me</h2>
          <ul class="checklist">
            ${WORKING_WITH_ME.map(
              (item) => html`
                <li>
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M4 10.5l4 4l8-9" />
                  </svg>
                  ${item}
                </li>
              `,
            )}
          </ul>
        </section>

        <!-- WHERE IT'S GOING -->
        <section class="section" aria-labelledby="building-title">
          <p class="section-marker">Where it's going</p>
          <h2 id="building-title">What I'm building</h2>
          <div class="prose reveal">
            <p>
              I'm writing and illustrating a book, grown from my diary and drawings. My best illustrations already live
              on merch. <a href=${SHOP_URL} target="_blank" rel="noopener">Visit the shop →</a>
            </p>
            <p>
              Next, I want to build a community and run workshops around the ideas in the book, and turn all of it into
              something sustainable with what I'm learning in entrepreneurship.
            </p>
          </div>
        </section>

        <!-- CLOSING -->
        <section class="closing reveal" aria-label="Get in touch">
          <blockquote>
            I like to have my head in the clouds, because that's what drives me through all of those hurdles more easily.
          </blockquote>
          <p>Have a project that needs a curious, strategic, people-minded creative? Let's talk.</p>
          <a class="btn" href=${CONTACT_PATH} @click=${(e: MouseEvent) => this._onLinkClick(e, CONTACT_PATH)}>Get in touch →</a>
        </section>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-head-in-the-clouds": MMHeadInTheClouds;
  }
}
