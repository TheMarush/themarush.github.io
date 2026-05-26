import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { navigate } from "../utils/navigate.js";

@customElement("mm-projects")
export class MMProjects extends LitElement {
  private _onAnchor = (e: Event) => {
    const { anchor } = (e as CustomEvent<{ anchor: string }>).detail;
    const el =
      this.shadowRoot?.querySelector(`[aria-labelledby="${anchor}"]`) ??
      this.shadowRoot?.querySelector(`#${anchor}`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
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
      color: var(--button-bg, #52c8f4);
      border-bottom: 2px solid var(--button-bg, #52c8f4);
      padding-bottom: 0.5rem;
    }

    .subtitle {
      margin: 0 0 0.4rem;
      font-size: 0.9rem;
      color: #9ca3af;
    }

    .intro {
      font-size: 0.96rem;
      line-height: 1.7;
      margin: 0 0 1.5rem;
      color: inherit;
    }

    /* ── NEWSPAPER GRID ── */
    .paper {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 0;
    }

    /* Row 1 placement */
    .story-feature   { grid-column: 1 / 4; grid-row: 1; }
    .story-secondary { grid-column: 4 / 6; grid-row: 1; }
    .story-brief     { grid-column: 6 / 7; grid-row: 1; }

    /* Row 2 placement */
    .story-b1 { grid-column: 1 / 3; grid-row: 2; }
    .story-b2 { grid-column: 3 / 5; grid-row: 2; }
    .story-b3 { grid-column: 5 / 7; grid-row: 2; }

    /* ── SHARED STORY SHELL ── */
    .story {
      border-top: 2px solid rgba(148, 163, 184, 0.45);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* Column rules */
    .story-feature,
    .story-secondary,
    .story-b1,
    .story-b2 {
      border-right: 1px solid rgba(148, 163, 184, 0.22);
    }

    /* Row 2 stronger top rule + spacing */
    .story-b1,
    .story-b2,
    .story-b3 {
      border-top: 2px solid rgba(148, 163, 184, 0.5);
      margin-top: 0.5rem;
    }

    /* ── PHOTO ── */
    .story-img {
      width: calc(100% - 1.5rem);
      margin: 0.75rem 0.75rem 0;
      display: block;
      object-fit: cover;
      flex-shrink: 0;
    }

    .story-feature   .story-img { aspect-ratio: 3 / 2; }
    .story-secondary .story-img { aspect-ratio: 3 / 2; }
    .story-b1        .story-img,
    .story-b2        .story-img,
    .story-b3        .story-img { aspect-ratio: 16 / 9; }

    /* ── TEXT CONTENT ── */
    .story-text {
      padding: 0.85rem 1.25rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
      flex: 1;
    }

    /* Outer-edge flush */
    .story-feature .story-text,
    .story-b1      .story-text { padding-left: 0; }

    .story-brief   .story-text,
    .story-b3      .story-text { padding-right: 0; }

    /* ── KICKER ── */
    .kicker {
      font-size: 0.66rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--button-bg, #52c8f4);
      font-weight: 600;
      margin: 0;
    }

    /* ── HEADLINE ── */
    .headline {
      font-family: Georgia, "Times New Roman", serif;
      font-weight: 700;
      line-height: 1.12;
      margin: 0;
      color: #f9fafb;
    }

    .story-feature   .headline { font-size: 2rem; }
    .story-secondary .headline { font-size: 1.3rem; }
    .story-brief     .headline { font-size: 1rem; }
    .story-b1        .headline,
    .story-b2        .headline,
    .story-b3        .headline { font-size: 1.05rem; }

    /* ── HEADLINE RULE ── */
    .hrule {
      width: 2rem;
      height: 2px;
      background: rgba(148, 163, 184, 0.35);
      flex-shrink: 0;
    }

    /* ── DECK ── */
    .deck {
      font-size: 0.87rem;
      color: #d1d5db;
      line-height: 1.65;
      margin: 0;
    }

    .story-brief .deck,
    .story-b1    .deck,
    .story-b2    .deck,
    .story-b3    .deck { font-size: 0.82rem; }

    .story-brief .deck { color: #9ca3af; }

    /* ── CTA ── */
    .cta-row {
      margin-top: auto;
      padding-top: 0.5rem;
    }

    .read-btn {
      background: none;
      border: none;
      padding: 0;
      color: var(--button-bg, #52c8f4);
      cursor: pointer;
      font-size: 0.76rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
    }

    .read-btn:focus-visible {
      outline: 2px solid var(--button-bg, #52c8f4);
      outline-offset: 2px;
    }

    .coming-soon {
      font-size: 0.76rem;
      color: #6b7280;
      font-style: italic;
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 760px) {
      .paper {
        grid-template-columns: repeat(4, 1fr);
      }

      .story-feature   { grid-column: 1 / -1; grid-row: 1; border-right: none; }
      .story-secondary { grid-column: 1 / 3;  grid-row: 2; }
      .story-brief     { grid-column: 3 / 5;  grid-row: 2; border-right: none; }
      .story-b1        { grid-column: 1 / 3;  grid-row: 3; }
      .story-b2        { grid-column: 3 / 5;  grid-row: 3; border-right: none; }
      .story-b3        { grid-column: 1 / -1; grid-row: 4; border-right: none; }

      .story-feature .story-text { padding-left: 0; }
      .story-brief   .story-text { padding-right: 0; }
      .story-b3      .story-text { padding-right: 0; }

      .story-secondary .story-text { padding-left: 0; }
      .story-b1        .story-text { padding-left: 0; }
      .story-b2        .story-text { padding-left: 1.25rem; }
    }

    @media (max-width: 480px) {
      .title { font-size: 1.5rem; }

      .paper { grid-template-columns: 1fr; }

      .story-feature,
      .story-secondary,
      .story-brief,
      .story-b1,
      .story-b2,
      .story-b3 {
        grid-column: 1 / -1 !important;
        grid-row: auto !important;
        border-right: none !important;
      }

      .story-feature   .story-text,
      .story-secondary .story-text,
      .story-brief     .story-text,
      .story-b1        .story-text,
      .story-b2        .story-text,
      .story-b3        .story-text {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      .story-feature .headline { font-size: 1.5rem; }

      .story-feature   .story-img { aspect-ratio: 16 / 9; }
      .story-secondary .story-img { aspect-ratio: 16 / 9; }
    }
  `;

  render() {
    return html`
      <section class="container" aria-labelledby="projects-title">
        <h2 id="projects-title" class="title">Projects</h2>
        <p class="subtitle">Selected Work &amp; Ongoing Experiments</p>
        <p class="intro">Some projects are polished, others are messy — each one taught me something worth keeping.</p>

        <div class="paper">

          <article class="story story-feature" aria-labelledby="good-enough-title">
            <img
              class="story-img"
              src="/good-enough/Q5.png"
              alt="Good Enough app conversation screenshot"
              loading="lazy"
            />
            <div class="story-text">
              <div class="kicker">AI in Practice · KISK · 2026</div>
              <h3 id="good-enough-title" class="headline">Good Enough</h3>
              <div class="hrule"></div>
              <p class="deck">
                A planning companion for people with AuDHD, built over one semester using the Double Diamond framework. From a stuck opening message to a deployed prototype — and an honest account of what AI could and couldn't do along the way.
              </p>
              <div class="cta-row">
                <button type="button" class="read-btn" @click=${() => navigate("/projects/good-enough")}>
                  Read more →
                </button>
              </div>
            </div>
          </article>

          <article class="story story-secondary" aria-labelledby="cybersecurity-title">
            <img
              class="story-img"
              src="https://i.imgur.com/ObESF8o.jpg"
              alt="Google.org Cybersecurity Seminars"
              loading="lazy"
            />
            <div class="story-text">
              <div class="kicker">Cybersecurity · Education · 2025–2026</div>
              <h3 id="cybersecurity-title" class="headline">Google Cybersecurity Seminars</h3>
              <div class="hrule"></div>
              <p class="deck">
                A Google.org-funded programme at Masaryk University connecting academic cybersecurity expertise with communities across the Czech Republic — placements at Amnesty International, senior care homes, and a 5-day national roadshow.
              </p>
              <div class="cta-row">
                <button type="button" class="read-btn" @click=${() => navigate("/projects/cybersecurity")}>
                  Read more →
                </button>
              </div>
            </div>
          </article>

          <article class="story story-brief" aria-labelledby="eu-ambassador-title">
            <div class="story-text">
              <div class="kicker">Education · Advocacy · 2026–2027</div>
              <h3 id="eu-ambassador-title" class="headline">EU Careers Ambassador</h3>
              <div class="hrule"></div>
              <p class="deck">Just accepted. Starting soon. More details to follow as the work begins.</p>
              <div class="cta-row">
                <span class="coming-soon">Coming soon</span>
              </div>
            </div>
          </article>

          <article class="story story-b1" aria-labelledby="ijf26-title">
            <img
              class="story-img"
              src="/ijf26/intro.jpeg"
              alt="International Journalism Festival 2026, Perugia"
              loading="lazy"
            />
            <div class="story-text">
              <div class="kicker">Field Coverage · 2026</div>
              <h3 id="ijf26-title" class="headline">IJF26</h3>
              <div class="hrule"></div>
              <p class="deck">
                Three days at the International Journalism Festival in Perugia. Nineteen panels on gender, cybersecurity, conflict reporting, and the future of the craft — notes taken in the rooms, in real time.
              </p>
              <div class="cta-row">
                <button type="button" class="read-btn" @click=${() => navigate("/projects/ijf26")}>
                  Read more →
                </button>
              </div>
            </div>
          </article>

          <article class="story story-b2" aria-labelledby="ai-view-title">
            <img
              class="story-img"
              src="/ai-gallery/claude-image.png"
              alt="Claude's interpretation of identity from personal data"
              loading="lazy"
            />
            <div class="story-text">
              <div class="kicker">Virtual Exhibition · 2025</div>
              <h3 id="ai-view-title" class="headline">Reimagined by LLM</h3>
              <div class="hrule"></div>
              <p class="deck">
                Three AI systems. The same archive. Three completely different interpretations of who I am. A small lab for exploring how algorithmic systems read, misread, and construct identity from personal data.
              </p>
              <div class="cta-row">
                <button type="button" class="read-btn" @click=${() => navigate("/projects/ai-view")}>
                  Read more →
                </button>
              </div>
            </div>
          </article>

          <article class="story story-b3" aria-labelledby="feminism-title">
            <img
              class="story-img"
              src="/pj-feminism/kisk-forum.webp"
              alt="KISK Forum — feminist advocacy"
              loading="lazy"
            />
            <div class="story-text">
              <div class="kicker">Personal Journey · 2018–present</div>
              <h3 id="feminism-title" class="headline">Lifelong Feminist</h3>
              <div class="hrule"></div>
              <p class="deck">
                A photo diary from nearly a decade of feminist work. From a middle school matura to winter schools and public forums — the moments that turned feminism from an idea into a way of seeing the world.
              </p>
              <div class="cta-row">
                <button type="button" class="read-btn" @click=${() => navigate("/projects/feminism")}>
                  Read more →
                </button>
              </div>
            </div>
          </article>

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
