import { css, html, LitElement, type SVGTemplateResult, svg } from "lit";
import { customElement } from "lit/decorators.js";
import { type CvDate, type CvLink, type CvSection, cv } from "../data/cv.js";
import { navigate } from "../utils/navigate.js";

const STRENGTHS_PATH = "/projects/head-in-the-clouds";
const SHOP_URL = "https://the-marush.tpopsite.com/";
const ESSAY_URL = "https://www.mahdalova-skop.cz/clanek/kontext-2025-12-21-ekonomie-pozornosti";

const GOOD_ENOUGH_PATH = "/projects/good-enough";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/marie-anna-mahdlová-a81299305" },
  { label: "Instagram", href: "https://www.instagram.com/the.marush.eu/" },
  { label: "GitHub", href: "https://github.com/TheMarush" },
];

const ICONS: Record<string, SVGTemplateResult> = {
  learn: svg`<path d="M3 5.5C5.5 4 8.5 4 12 6c3.5-2 6.5-2 9-.5V19c-2.5-1.5-5.5-1.5-9 .5-3.5-2-6.5-2-9-.5z" /><path d="M12 6v13.5" />`,
  clear: svg`<path d="M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z" /><path d="M9.5 19h5" /><path d="M10.5 21.5h3" />`,
  build: svg`<rect x="4" y="14" width="7" height="7" rx="1" /><rect x="13" y="14" width="7" height="7" rx="1" /><rect x="8.5" y="4" width="7" height="7" rx="1" />`,
  calm: svg`<circle cx="12" cy="5.5" r="2.5" /><path d="M12 8v13" /><path d="M8 12h8" /><path d="M4 13a8 8 0 0 0 16 0" />`,
};

@customElement("mm-about")
export class MMAbout extends LitElement {
  private _observer?: IntersectionObserver;

  /* Keep ctrl/cmd/shift/middle-click working as normal links (new tab etc.) */
  private _onLinkClick = (e: MouseEvent, href: string) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(href);
  };

  /* Every page is mounted at once and the router keeps the scroll position, so open About at its headline */
  private _wasActive = false;
  private _onRoute = () => {
    const active = window.location.pathname.replace(/\/$/, "") === "/about";
    if (active && !this._wasActive) window.scrollTo({ top: 0, behavior: "instant" });
    this._wasActive = active;
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("popstate", this._onRoute);
    this._onRoute();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("popstate", this._onRoute);
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

  private _icon(name: keyof typeof ICONS) {
    return html`
      <span class="card-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          ${ICONS[name]}
        </svg>
      </span>
    `;
  }

  private _date(d: CvDate) {
    return d.datetime ? html`<time datetime=${d.datetime}>${d.text}</time>` : d.text;
  }

  /* Wrap each linked name in the text; everything else stays plain */
  private _linked(text: string, links: CvLink[] = []) {
    if (!links.length) return text;
    const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`(${links.map((l) => escapeRe(l.text)).join("|")})`);
    return text.split(pattern).map((part) => {
      const link = links.find((l) => l.text === part);
      if (!link) return part;
      return link.url.startsWith("/")
        ? html`<a href=${link.url} @click=${(e: MouseEvent) => this._onLinkClick(e, link.url)}>${part}</a>`
        : html`<a href=${link.url} target="_blank" rel="noopener noreferrer">${part}</a>`;
    });
  }

  private _cvSection(s: CvSection) {
    const body =
      s.kind === "timeline"
        ? s.entries.map(
            (e) => html`
              <li class="cv-row">
                <p class="cv-date">${e.dates.map((d, i) => html`${i ? " – " : ""}${this._date(d)}`)}</p>
                <div>
                  <h4>${this._linked(e.title, e.links)}</h4>
                  ${e.detail ? html`<p>${this._linked(e.detail, e.links)}</p>` : ""}
                </div>
              </li>
            `,
          )
        : s.items.map(
            (item) => html`
              <li class="cv-row">
                ${item.label ? html`<p class="cv-date">${item.label}<span class="cv-sep">:</span></p>` : ""}
                <p class="cv-text">${item.text}</p>
              </li>
            `,
          );
    return html`
      <section class="cv-group">
        <h3 class="label">${s.title}</h3>
        <ul>${body}</ul>
      </section>
    `;
  }

  render() {
    return html`
      <div class="page">
        <header class="hero">
          <h1 class="headline reveal">
            <span>Curious by default.</span>
            <span>Calm under pressure.</span>
            <span>A little better every day.</span>
          </h1>

          <div class="intro reveal">
            <p>Hi, I'm Marie, or Marush. Here is what working with me feels like. I get into your topic fast and come back with questions you didn't think to ask. When things get foggy, I bring a plan. When they go sideways, I keep the mood up, without pretending the problems aren't there.</p>
            <p>I'm an Information Science student at Masaryk University, based in Vienna. My focus is AI, data and cybersecurity. Everything I learn goes into the next thing I build, and that's my whole method.</p>
          </div>

          <p class="currently reveal">Open to part-time roles in Vienna</p>
        </header>

        <div class="cards">
          <section class="card reveal" style="--c: #A78BFA" aria-labelledby="learn-title">
            ${this._icon("learn")}
            <div>
              <h2 id="learn-title">I learn on purpose</h2>
              <p>I'm a Philomath: I learn about everything, especially about myself. I read the entire GDPR for fun (yes, the whole thing). I listen to audiobooks and podcasts constantly. When a university assignment asked me for one strengths test, I took three and wrote up <a href=${STRENGTHS_PATH} @click=${(e: MouseEvent) => this._onLinkClick(e, STRENGTHS_PATH)}>what I found</a>. I don't wait to feel ready. I ship a good first version and make it better from there.</p>
            </div>
          </section>

          <section class="card reveal" style="--c: #FBBF24" aria-labelledby="clear-title">
            ${this._icon("clear")}
            <div>
              <h2 id="clear-title">I make hard things clear</h2>
              <p>With the Google.org-supported Czech Cybersecurity Seminars, I was trained by NÚKIB and industry experts, and then I went out and taught what I'd learned: 5 days, 10 Czech cities, 200+ people. I pitched a 5-hour security session to Amnesty International Czech Republic and ran it for 25 of their staff. I taught seniors how to recognise scam calls before they pick up. Now, as EPSO's EU Careers Student Ambassador for Masaryk University, I translate EU careers for fellow students.</p>
            </div>
          </section>

          <section class="card card--wide reveal" style="--c: #34D399" aria-labelledby="build-title">
            ${this._icon("build")}
            <div>
              <h2 id="build-title">I build things, and I make things</h2>
              <ul class="tiles">
                <li class="tile tile--link">
                  <h3><a href=${GOOD_ENOUGH_PATH} @click=${(e: MouseEvent) => this._onLinkClick(e, GOOD_ENOUGH_PATH)}>Good Enough<span class="arrow" aria-hidden="true">→</span></a></h3>
                  <p>An AI planning companion that doesn't punish you for being human. One semester, from interviews and a 24-person survey to a deployed prototype.</p>
                </li>
                <li class="tile">
                  <h3>Disinformation map</h3>
                  <p>I mapped who owns the Czech Republic's influential disinformation outlets, tracing them through domain and registry records. It received special recognition for investigative rigour.</p>
                </li>
                <li class="tile">
                  <h3>Chatbot for older adults</h3>
                  <p>Co-built; it walks older adults through digital tools step by step.</p>
                </li>
                <li class="tile">
                  <h3>Attention economy essay</h3>
                  <p>On manipulative app design, published on <a href=${ESSAY_URL} target="_blank" rel="noopener">DataTimes.cz</a>.</p>
                </li>
                <li class="tile">
                  <h3>This website</h3>
                  <p>Built with Claude Code, TypeScript and Lit.</p>
                </li>
                <li class="tile">
                  <h3>My book</h3>
                  <p>I'm writing and illustrating a book; my best illustrations already live on <a href=${SHOP_URL} target="_blank" rel="noopener">merch</a>.</p>
                </li>
              </ul>
            </div>
          </section>

          <section class="card card--wide reveal" style="--c: #F472B6" aria-labelledby="calm-title">
            ${this._icon("calm")}
            <div>
              <h2 id="calm-title">I'm the calm one in the room</h2>
              <p>Austria's National Library trusts me with its historic halls and museums. Before that, I kept concerts, football games and VIP events safe in Vienna. Students elected me as their representative three times. And when friends or coworkers get stuck, they tend to come to me. I don't fix things for them. I help them find their next step.</p>
            </div>
          </section>
        </div>

        <section class="going reveal" aria-labelledby="going-title">
          <h2 id="going-title">Where I'm going</h2>
          <p>I want to grow into work where AI, data and people meet, and later run workshops and build a community around my book. Right now, I'm open to part-time roles in AI, data and IT in Vienna. I'm also open to any project that needs someone curious, strategic and good with people.</p>
        </section>
      </div>

      <section class="band reveal" aria-labelledby="band-title">
        <h2 id="band-title">Head in the clouds, plan in hand.</h2>
        <ul class="socials">
          ${SOCIALS.map((s) => html`<li><a class="btn" href=${s.href} target="_blank" rel="noopener">${s.label}</a></li>`)}
        </ul>
      </section>

      <div class="page">
        <section class="cv reveal" aria-labelledby="cv-title">
          <h2 id="cv-title">CV</h2>
          ${cv.map((s) => this._cvSection(s))}
        </section>
      </div>
    `;
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
    }

    .page {
      max-width: 980px;
      margin: 0 auto;
      padding: 0 1rem;
      color: var(--text);
      line-height: 1.7;
    }

    h1, h2, h3, p, ul, dl, dd {
      margin: 0;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    p { color: var(--text-muted); }
    p + p { margin-top: 1rem; }

    a {
      color: var(--accent);
      text-decoration: none;
      border-bottom: 1px solid rgba(82, 200, 244, 0.35);
      transition: border-color 0.2s ease;
    }

    a:hover { border-bottom-color: var(--accent); }

    a:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
      border-radius: 2px;
    }

    .label {
      font-size: 0.68rem;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--text-dim);
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
      padding: 3.5rem 0 2.5rem;
      border-bottom: 1px solid var(--border);
    }

    .headline {
      font-family: var(--font-heading);
      font-size: clamp(1.7rem, 3.5vw + 0.8rem, 2.5rem);
      font-weight: 500;
      line-height: 1.25;
      color: #fff;
      margin-bottom: 1.5rem;
    }

    .headline span { display: block; }

    .intro {
      max-width: 42rem;
      font-size: 1.05rem;
    }

    .currently {
      margin-top: 1.5rem;
      font-size: 0.9rem;
      color: var(--text-dim);
    }

    /* ── CARDS ── */
    .cards {
      display: grid;
      gap: 1.25rem;
      padding: 2.5rem 0;
    }

    .card {
      --c: var(--accent);
      display: grid;
      gap: 1rem;
      padding: 1.25rem;
      background: var(--surface);
      border: 1px solid var(--border);
      border-top: 3px solid var(--c);
      border-radius: 6px;
    }

    .card-icon {
      display: block;
      width: 3rem;
      height: 3rem;
      padding: 0.65rem;
      box-sizing: border-box;
      border-radius: 50%;
      color: var(--c);
      background: color-mix(in srgb, var(--c) 12%, transparent);
    }

    .card-icon svg {
      display: block;
      width: 100%;
      height: 100%;
    }

    .card h2 {
      font-size: 1.3rem;
      font-weight: 700;
      line-height: 1.25;
      color: var(--c);
      margin-bottom: 0.75rem;
    }

    .tiles {
      display: grid;
      gap: 0.75rem;
    }

    .tile {
      padding: 0.9rem 1rem;
      border: 1px solid var(--border);
      border-left: 2px solid var(--c);
      border-radius: 0 6px 6px 0;
      background: rgba(27, 27, 27, 0.4);
    }

    .tile h3 {
      font-size: 1.02rem;
      font-weight: 700;
      line-height: 1.3;
      color: #fff;
      margin-bottom: 0.25rem;
    }

    .tile p {
      font-size: 0.9rem;
      line-height: 1.55;
    }

    .tile--link {
      position: relative;
      transition: border-color 0.2s ease, background-color 0.2s ease;
    }

    .tile--link:hover,
    .tile--link:focus-within {
      border-color: color-mix(in srgb, var(--c) 55%, transparent);
      background: color-mix(in srgb, var(--c) 8%, rgba(27, 27, 27, 0.4));
    }

    /* The title link covers the whole tile, so the tile is one click target */
    .tile--link h3 a {
      color: #fff;
      border-bottom: none;
    }

    .tile--link h3 a::after {
      content: "";
      position: absolute;
      inset: 0;
    }

    .tile--link .arrow {
      margin-left: 0.4rem;
      color: var(--c);
      transition: margin-left 0.2s ease;
    }

    .tile--link:hover .arrow { margin-left: 0.6rem; }

    @media (prefers-reduced-motion: reduce) {
      .tile--link .arrow { transition: none; }
    }

    /* ── WHERE I'M GOING ── */
    .going {
      max-width: 42rem;
      padding: 0.25rem 0 0.25rem 1.1rem;
      margin-bottom: 3rem;
      border-left: 1px solid var(--border);
    }

    .going h2 {
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--text-dim);
      margin-bottom: 0.6rem;
    }

    /* ── CLOSING BAND ── */
    .band {
      padding: 1.5rem 1rem 2rem;
      text-align: center;
    }

    .band h2 {
      font-family: var(--font-heading);
      font-style: italic;
      font-size: clamp(1.5rem, 2.5vw + 0.8rem, 2rem);
      font-weight: 400;
      line-height: 1.3;
      color: #fff;
      margin-bottom: 1.25rem;
    }

    .socials {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.75rem;
    }

    a.btn {
      display: inline-block;
      padding: 0.55rem 1.25rem;
      font-size: 0.95rem;
      font-weight: 500;
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.35);
      border-radius: 6px;
      transition: background-color 0.2s ease, border-color 0.2s ease;
    }

    a.btn:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: #fff;
    }

    a.btn:focus-visible { outline-color: #fff; }

    /* ── CV ── */
    .cv {
      padding: 2rem 0 3rem;
    }

    .cv h2 {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-muted);
      margin-bottom: 1rem;
    }

    .cv-group + .cv-group { margin-top: 1.5rem; }

    .cv h3 { margin-bottom: 0.5rem; }

    .cv ul {
      display: grid;
      gap: 0.75rem;
    }

    .cv-row {
      display: grid;
      gap: 0.1rem;
      font-size: 0.88rem;
      line-height: 1.6;
    }

    .cv-date {
      color: var(--text-dim);
      font-variant-numeric: tabular-nums;
    }

    .cv-sep { display: none; }

    .cv p + p { margin-top: 0; }

    .cv h4 {
      margin: 0;
      font-family: inherit;
      font-size: inherit;
      font-weight: 600;
      color: var(--text);
    }

    /* ── WIDER SCREENS ── */
    @media (min-width: 640px) {
      .page { padding: 0 1.5rem; }
      .tiles { grid-template-columns: repeat(2, 1fr); }
      .cv-row { grid-template-columns: 10.5rem 1fr; column-gap: 1.25rem; }
      .cv-row > .cv-text:only-child { grid-column: 2; }
    }

    @media (min-width: 760px) {
      .hero { padding: 5rem 0 3rem; }

      .cards { grid-template-columns: repeat(2, 1fr); padding: 3rem 0; }
      .card { grid-template-columns: 3rem 1fr; gap: 1.25rem; padding: 1.5rem; }
      .card--wide { grid-column: 1 / -1; }
    }

    @media (min-width: 900px) {
      .tiles { grid-template-columns: repeat(3, 1fr); }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-about": MMAbout;
  }
}
