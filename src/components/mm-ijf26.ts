import { css, html, LitElement, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import {
  CATEGORY_COLORS,
  CATEGORY_LABELS,
  DAY_LABELS,
  ijf26Intro,
  ijf26Sessions,
  type Category,
  type Day,
  type IJF26Intro,
  type IJF26Session,
} from "../data/ijf26.js";
import "./mm-back-button.ts";

type ViewMode = "chronological" | "thematic";

const DAYS: Day[] = ["thursday", "friday", "saturday"];

const REWRITING_HER_STORY_URL =
  "https://www.journalismfestival.com/programme/2026/rewriting-her-story-how-news-coverage-can-fight-not-fuel-violence-against-women";

@customElement("mm-ijf26")
export class MMIjf26 extends LitElement {
  @state() private selectedId: string | null = null;
  @state() private viewMode: ViewMode = "chronological";
  @state() private activeFilter: Category | null = null;
  @state() private introExpanded: boolean = false;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("keydown", this._onKey);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("keydown", this._onKey);
  }

  private _onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape" && this.selectedId) this.selectedId = null;
  };

  private _open(id: string) {
    this.selectedId = id;
    this.shadowRoot?.querySelector(".page")?.scrollTo({ top: 0 });
    // Scroll the host into view as well
    this.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  private _close() {
    this.selectedId = null;
  }

  // ─── ARTICLE VIEW ────────────────────────────────────────────────────────

  private _renderArticle(entry: IJF26Session | IJF26Intro): TemplateResult {
    const isIntro = entry.id === "intro";
    const session = isIntro ? null : (entry as IJF26Session);

    return html`
      <div class="article-page">
        <button class="back-btn" @click=${this._close} aria-label="Back to index">
          <span class="back-arrow" aria-hidden="true">←</span>
          Back to coverage
        </button>

        <div class="article-header">
          ${isIntro
            ? html`<div class="article-badge intro-badge">Introduction</div>`
            : html`
                <div class="article-meta-row">
                  <span
                    class="article-tag"
                    style="--tag-color: ${CATEGORY_COLORS[session!.category]}"
                  >${CATEGORY_LABELS[session!.category]}</span>
                  <span class="article-day-time">
                    ${DAY_LABELS[session!.day]} · ${session!.time}
                  </span>
                </div>
              `}

          <h1 class="article-headline">${entry.quoteHeadline}</h1>
          <p class="article-subtitle">${entry.subtitle}</p>

          ${session
            ? html`
                <div class="article-byline">
                  <span class="article-speakers">${session.speakers}</span>
                  <span class="article-venue">${session.venue}</span>
                </div>
              `
            : null}
        </div>

        <div class="article-divider"></div>

        ${session?.image
          ? html`<div class="article-image-wrap">
              <img class="article-image" src="${session.image}" alt="${session.subtitle}" loading="lazy" />
            </div>`
          : null}

        <div class="article-body">
          ${unsafeHTML(entry.body)}
        </div>

        ${session?.url
          ? html`<div class="article-footer">
              <a class="ijf-link" href="${session.url}" target="_blank" rel="noopener noreferrer">
                Official programme page <span aria-hidden="true">↗</span>
              </a>
            </div>`
          : null}
      </div>
    `;
  }

  // ─── INDEX VIEW ───────────────────────────────────────────────────────────

  private _renderIntroCard(): TemplateResult {
    const expanded = this.introExpanded;
    return html`
      <article
        class="intro-card ${expanded ? "intro-card--expanded" : ""}"
        aria-label="Introduction: ${ijf26Intro.subtitle}"
      >
        <div
          class="intro-card-inner"
          role="button"
          tabindex="0"
          @click=${() => { this.introExpanded = !this.introExpanded; }}
          @keydown=${(e: KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") this.introExpanded = !this.introExpanded; }}
        >
          <div class="intro-label">Introduction</div>
          <h2 class="intro-headline">${ijf26Intro.quoteHeadline}</h2>
          <p class="intro-subtitle-text">${ijf26Intro.subtitle}</p>
          <p class="intro-hook">${ijf26Intro.hook}</p>
          <span class="read-link" aria-hidden="true">
            ${expanded ? html`Collapse <span>↑</span>` : html`Read <span>→</span>`}
          </span>
        </div>

        ${expanded ? html`
          <div class="intro-expanded-body">
            ${ijf26Intro.image ? html`
              <figure class="intro-img-float">
                <img src="${ijf26Intro.image}" alt="Andrea Marchi photographing the Rewriting Her Story panel at IJF26" loading="lazy" />
                <figcaption>
                  Photo: Andrea Marchi ·
                  <a href="${REWRITING_HER_STORY_URL}" target="_blank" rel="noopener noreferrer">
                    Rewriting her story: how news coverage can fight, not fuel, violence against women
                  </a>
                  · IJF26
                </figcaption>
              </figure>
            ` : null}
            <div class="intro-body-text">
              ${unsafeHTML(ijf26Intro.body)}
            </div>
            <div style="clear:both"></div>
          </div>
        ` : null}
      </article>
    `;
  }

  private _renderCard(session: IJF26Session): TemplateResult {
    const color = CATEGORY_COLORS[session.category];
    return html`
      <article
        class="card"
        style="--cat-color: ${color}"
        @click=${() => this._open(session.id)}
        role="button"
        tabindex="0"
        @keydown=${(e: KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") this._open(session.id); }}
        aria-label="Read: ${session.quoteHeadline}"
      >
        <div class="card-top-bar"></div>
        <div class="card-content">
          <div class="card-meta-row">
            <span class="card-tag">${CATEGORY_LABELS[session.category]}</span>
            <span class="card-time">${session.time}</span>
          </div>
          <h3 class="card-headline">${session.quoteHeadline}</h3>
          <p class="card-subtitle">${session.subtitle}</p>
          <p class="card-hook">${session.hook}</p>
          <span class="read-link" aria-hidden="true">Read <span>→</span></span>
        </div>
      </article>
    `;
  }

  private _renderChronological(): TemplateResult {
    const sessions = this.activeFilter
      ? ijf26Sessions.filter((s) => s.category === this.activeFilter)
      : ijf26Sessions;

    return html`
      ${DAYS.map((day) => {
        const daySessions = sessions.filter((s) => s.day === day);
        if (!daySessions.length) return html``;
        return html`
          <section class="day-group" aria-labelledby="day-${day}">
            <h2 class="day-header" id="day-${day}">
              <span class="day-name">${DAY_LABELS[day]}</span>
              <span class="day-count">${daySessions.length} session${daySessions.length !== 1 ? "s" : ""}</span>
            </h2>
            <div class="cards-grid">
              ${daySessions.map((s) => this._renderCard(s))}
            </div>
          </section>
        `;
      })}
    `;
  }

  private _renderThematic(): TemplateResult {
    const categories = [...new Set(ijf26Sessions.map((s) => s.category))];
    const filtered = this.activeFilter ? [this.activeFilter] : categories;

    return html`
      ${filtered.map((cat) => {
        const catSessions = ijf26Sessions.filter((s) => s.category === cat);
        if (!catSessions.length) return html``;
        const color = CATEGORY_COLORS[cat];
        return html`
          <section class="cat-group" aria-labelledby="cat-${cat}">
            <h2 class="cat-header" id="cat-${cat}" style="--cat-color: ${color}">
              <span class="cat-accent"></span>
              ${CATEGORY_LABELS[cat]}
              <span class="cat-count">${catSessions.length}</span>
            </h2>
            <div class="cards-grid">
              ${catSessions.map((s) => this._renderCard(s))}
            </div>
          </section>
        `;
      })}
    `;
  }

  private _renderFilterBar(): TemplateResult {
    const usedCategories = [...new Set(ijf26Sessions.map((s) => s.category))];
    return html`
      <div class="filter-bar" role="toolbar" aria-label="Filter by category">
        <button
          class="filter-pill ${this.activeFilter === null ? "active" : ""}"
          @click=${() => { this.activeFilter = null; }}
        >All</button>
        ${usedCategories.map((cat) => {
          const color = CATEGORY_COLORS[cat];
          const isActive = this.activeFilter === cat;
          return html`
            <button
              class="filter-pill ${isActive ? "active" : ""}"
              style="--pill-color: ${color}"
              @click=${() => { this.activeFilter = isActive ? null : cat; }}
            >${CATEGORY_LABELS[cat]}</button>
          `;
        })}
      </div>
    `;
  }

  private _renderIndex(): TemplateResult {
    return html`
      <div class="index-page">
        <header class="page-header">
          <div class="header-kicker">International Journalism Festival · Perugia · April 16–18, 2026</div>
          <h1 class="page-title">IJF26 Coverage</h1>
          <p class="page-intro">
            Nineteen panels across three days. Notes taken in the rooms, in real time.
            Feminist journalism, cybersecurity, conflict reporting, the future of the craft.
          </p>
        </header>

        ${this._renderIntroCard()}

        <div class="controls-bar">
          <div class="view-toggle" role="group" aria-label="View mode">
            <button
              class="toggle-btn ${this.viewMode === "chronological" ? "active" : ""}"
              @click=${() => { this.viewMode = "chronological"; }}
            >Chronological</button>
            <button
              class="toggle-btn ${this.viewMode === "thematic" ? "active" : ""}"
              @click=${() => { this.viewMode = "thematic"; }}
            >Thematic</button>
          </div>
          ${this._renderFilterBar()}
        </div>

        <div class="sessions-container">
          ${this.viewMode === "chronological"
            ? this._renderChronological()
            : this._renderThematic()}
        </div>
      </div>
    `;
  }

  // ─── ROOT ─────────────────────────────────────────────────────────────────

  render() {
    if (this.selectedId) {
      const entry =
        this.selectedId === "intro"
          ? ijf26Intro
          : ijf26Sessions.find((s) => s.id === this.selectedId);
      if (entry) return html`<div class="page">${this._renderArticle(entry)}</div>`;
    }
    return html`<div class="page">${this._renderIndex()}</div>`;
  }

  // ─── STYLES ───────────────────────────────────────────────────────────────

  static styles = css`
    :host {
      display: block;
      width: 100%;
      color: #f9fafb;
    }

    .page {
      max-width: 1120px;
      margin: 0 auto;
      padding: 1.5rem 1rem 4rem;
    }

    /* ── Page header ──────────────────────────────────────────────────── */

    .page-header {
      margin-bottom: 2.5rem;
    }

    .header-kicker {
      font-size: 0.72rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #9ca3af;
      margin-bottom: 0.6rem;
    }

    .page-title {
      margin: 0 0 0.75rem;
      font-size: clamp(2rem, 5vw, 3.2rem);
      font-weight: 800;
      letter-spacing: -0.01em;
      line-height: 1.1;
      color: #f9fafb;
    }

    .page-intro {
      margin: 0;
      font-size: 1rem;
      line-height: 1.7;
      color: #9ca3af;
      max-width: 640px;
    }

    /* ── Intro card ───────────────────────────────────────────────────── */

    .intro-card {
      display: block;
      margin-bottom: 2.5rem;
      border: 1px solid rgba(248, 250, 252, 0.12);
      border-left: 4px solid #f9fafb;
      background: rgba(248, 250, 252, 0.03);
      cursor: pointer;
      transition: border-color 150ms ease, background 150ms ease;
      border-radius: 0 0.5rem 0.5rem 0;
    }

    .intro-card:hover,
    .intro-card:focus-visible {
      background: rgba(248, 250, 252, 0.06);
      border-color: rgba(248, 250, 252, 0.25);
      border-left-color: #f9fafb;
      outline: none;
    }

    .intro-card-inner {
      padding: 2rem 2.25rem;
    }

    .intro-label {
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #9ca3af;
      margin-bottom: 0.75rem;
    }

    .intro-headline {
      margin: 0 0 0.5rem;
      font-size: clamp(1.4rem, 3vw, 2rem);
      font-family: Georgia, "Times New Roman", serif;
      font-weight: 700;
      line-height: 1.25;
      color: #f9fafb;
    }

    .intro-subtitle-text {
      margin: 0 0 1rem;
      font-size: 0.95rem;
      color: #9ca3af;
      font-style: italic;
    }

    .intro-hook {
      margin: 0 0 1.25rem;
      font-size: 0.97rem;
      color: #d1d5db;
      line-height: 1.75;
      max-width: 680px;
    }

    .intro-card--expanded .intro-card-inner {
      border-bottom: 1px solid rgba(248, 250, 252, 0.08);
      padding-bottom: 1.5rem;
      margin-bottom: 0;
    }

    .intro-expanded-body {
      padding: 2rem 2.25rem 2.25rem;
      font-size: 1.02rem;
      line-height: 1.85;
      color: #d1d5db;
    }

    .intro-img-float {
      float: right;
      margin: 0 0 1.5rem 2rem;
      width: 270px;
      flex-shrink: 0;
    }

    .intro-img-float img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 0.25rem;
    }

    .intro-img-float figcaption {
      margin-top: 0.5rem;
      font-size: 0.7rem;
      color: #6b7280;
      line-height: 1.5;
    }

    .intro-img-float figcaption a {
      color: #6b7280;
      text-decoration: underline;
      text-decoration-color: rgba(107, 114, 128, 0.4);
      transition: color 150ms;
    }

    .intro-img-float figcaption a:hover {
      color: #9ca3af;
    }

    .intro-body-text p {
      margin: 0 0 1.5em;
    }

    .intro-body-text p:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 560px) {
      .intro-img-float {
        float: none;
        width: 100%;
        margin: 0 0 1.5rem;
      }
    }

    /* ── Controls bar ─────────────────────────────────────────────────── */

    .controls-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: flex-start;
      margin-bottom: 2.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid rgba(248, 250, 252, 0.08);
    }

    .view-toggle {
      display: flex;
      gap: 0;
      flex-shrink: 0;
    }

    .toggle-btn {
      background: none;
      border: 1px solid rgba(248, 250, 252, 0.2);
      color: #9ca3af;
      font-size: 0.82rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      padding: 0.45rem 1.1rem;
      cursor: pointer;
      transition: background 120ms, color 120ms, border-color 120ms;
    }

    .toggle-btn:first-child {
      border-radius: 0.25rem 0 0 0.25rem;
    }

    .toggle-btn:last-child {
      border-radius: 0 0.25rem 0.25rem 0;
      border-left: none;
    }

    .toggle-btn.active {
      background: #f9fafb;
      color: #0f172a;
      border-color: #f9fafb;
    }

    .toggle-btn:not(.active):hover {
      color: #f9fafb;
      border-color: rgba(248, 250, 252, 0.5);
    }

    /* ── Filter bar ───────────────────────────────────────────────────── */

    .filter-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      flex: 1;
    }

    .filter-pill {
      background: none;
      border: 1px solid rgba(248, 250, 252, 0.15);
      color: #9ca3af;
      font-size: 0.75rem;
      letter-spacing: 0.04em;
      padding: 0.3rem 0.75rem;
      border-radius: 999px;
      cursor: pointer;
      transition: background 120ms, color 120ms, border-color 120ms;
      white-space: nowrap;
    }

    .filter-pill:hover {
      color: #f9fafb;
      border-color: rgba(248, 250, 252, 0.4);
    }

    .filter-pill.active {
      background: var(--pill-color, #f9fafb);
      border-color: var(--pill-color, #f9fafb);
      color: #0f172a;
      font-weight: 600;
    }

    .filter-pill:first-child.active {
      background: #f9fafb;
      border-color: #f9fafb;
      color: #0f172a;
    }

    /* ── Day groups ───────────────────────────────────────────────────── */

    .day-group {
      margin-bottom: 3.5rem;
    }

    .day-header {
      display: flex;
      align-items: baseline;
      gap: 1rem;
      margin: 0 0 1.5rem;
      padding-bottom: 0.6rem;
      border-bottom: 1px solid rgba(248, 250, 252, 0.1);
    }

    .day-name {
      font-size: clamp(1.1rem, 2.5vw, 1.4rem);
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #f9fafb;
    }

    .day-count {
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #6b7280;
    }

    /* ── Category groups ──────────────────────────────────────────────── */

    .cat-group {
      margin-bottom: 3rem;
    }

    .cat-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin: 0 0 1.5rem;
      font-size: clamp(1rem, 2vw, 1.2rem);
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #f9fafb;
    }

    .cat-accent {
      display: inline-block;
      width: 3px;
      height: 1.2em;
      background: var(--cat-color, #f9fafb);
      border-radius: 1px;
      flex-shrink: 0;
    }

    .cat-count {
      font-size: 0.72rem;
      font-weight: 400;
      color: #6b7280;
      letter-spacing: 0.08em;
    }

    /* ── Cards grid ───────────────────────────────────────────────────── */

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1px;
      background: rgba(248, 250, 252, 0.06);
      border: 1px solid rgba(248, 250, 252, 0.06);
    }

    @media (max-width: 900px) {
      .cards-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 560px) {
      .cards-grid {
        grid-template-columns: 1fr;
      }
    }

    /* ── Card ─────────────────────────────────────────────────────────── */

    .card {
      background: #111827;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      transition: background 150ms ease;
      position: relative;
    }

    .card:hover,
    .card:focus-visible {
      background: rgba(248, 250, 252, 0.04);
      outline: none;
    }

    .card:focus-visible {
      outline: 2px solid var(--cat-color, #f9fafb);
      outline-offset: -2px;
    }

    .card-top-bar {
      height: 2px;
      background: var(--cat-color, #6b7280);
      flex-shrink: 0;
    }

    .card-content {
      padding: 1.25rem 1.35rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex: 1;
    }

    .card-meta-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }

    .card-tag {
      font-size: 0.65rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--cat-color, #9ca3af);
      font-weight: 600;
    }

    .card-time {
      font-size: 0.65rem;
      letter-spacing: 0.06em;
      color: #6b7280;
      white-space: nowrap;
    }

    .card-headline {
      margin: 0;
      font-size: 1.05rem;
      font-family: Georgia, "Times New Roman", serif;
      font-weight: 700;
      line-height: 1.3;
      color: #f9fafb;
    }

    .card-subtitle {
      margin: 0;
      font-size: 0.78rem;
      color: #6b7280;
      line-height: 1.5;
      font-style: italic;
    }

    .card-hook {
      margin: 0;
      font-size: 0.86rem;
      color: #9ca3af;
      line-height: 1.65;
      flex: 1;
    }

    .read-link {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #6b7280;
      margin-top: 0.25rem;
      transition: color 150ms;
    }

    .card:hover .read-link,
    .intro-card:hover .read-link {
      color: #f9fafb;
    }

    /* ── Article page ─────────────────────────────────────────────────── */

    .article-page {
      max-width: 720px;
      margin: 0 auto;
    }

    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: none;
      border: none;
      color: #6b7280;
      font-size: 0.8rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      cursor: pointer;
      padding: 0 0 2rem;
      transition: color 150ms;
    }

    .back-btn:hover {
      color: #f9fafb;
    }

    .back-arrow {
      font-size: 1rem;
    }

    .article-header {
      margin-bottom: 2rem;
    }

    .article-badge {
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #9ca3af;
      margin-bottom: 1rem;
    }

    .intro-badge {
      font-weight: 600;
      color: #f9fafb;
    }

    .article-meta-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }

    .article-tag {
      font-size: 0.7rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--tag-color, #f9fafb);
      font-weight: 700;
      border: 1px solid var(--tag-color, #f9fafb);
      padding: 0.2rem 0.6rem;
      border-radius: 2px;
    }

    .article-day-time {
      font-size: 0.75rem;
      letter-spacing: 0.06em;
      color: #6b7280;
    }

    .article-headline {
      margin: 0 0 0.75rem;
      font-size: clamp(1.6rem, 4vw, 2.4rem);
      font-family: Georgia, "Times New Roman", serif;
      font-weight: 700;
      line-height: 1.2;
      color: #f9fafb;
      letter-spacing: -0.01em;
    }

    .article-subtitle {
      margin: 0 0 1.25rem;
      font-size: 1.05rem;
      color: #9ca3af;
      line-height: 1.5;
      font-style: italic;
    }

    .article-byline {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    .article-speakers {
      font-size: 0.8rem;
      color: #6b7280;
      line-height: 1.5;
    }

    .article-venue {
      font-size: 0.75rem;
      color: #4b5563;
      letter-spacing: 0.04em;
    }

    .article-divider {
      height: 1px;
      background: rgba(248, 250, 252, 0.1);
      margin-bottom: 2rem;
    }

    /* ── Article image ───────────────────────────────────────────────── */

    .article-image-wrap {
      margin-bottom: 2rem;
      border-radius: 0.375rem;
      overflow: hidden;
    }

    .article-image {
      display: block;
      width: 100%;
      height: auto;
      max-height: 480px;
      object-fit: cover;
    }

    /* ── Article footer ──────────────────────────────────────────────── */

    .article-footer {
      margin-top: 2.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(248, 250, 252, 0.08);
    }

    .ijf-link {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #6b7280;
      text-decoration: none;
      transition: color 150ms;
    }

    .ijf-link:hover {
      color: #f9fafb;
    }

    /* ── Article body ─────────────────────────────────────────────────── */

    .article-body {
      font-size: 1.02rem;
      line-height: 1.85;
      color: #d1d5db;
    }

    .article-body p {
      margin: 0 0 1.5em;
    }

    .article-body p:last-child {
      margin-bottom: 0;
    }

    .article-body strong {
      color: #f9fafb;
      font-weight: 600;
    }

    .article-body ol {
      margin: 0.5em 0 1.5em;
      padding-left: 1.6em;
    }

    .article-body ol li {
      margin-bottom: 0.65em;
      padding-left: 0.25em;
    }

    .article-body ol li::marker {
      color: #6b7280;
      font-weight: 600;
    }

    /* ── Responsive tweaks ────────────────────────────────────────────── */

    @media (max-width: 680px) {
      .intro-card-inner {
        padding: 1.5rem 1.25rem;
      }

      .controls-bar {
        flex-direction: column;
        gap: 0.75rem;
      }

      .page-title {
        font-size: 1.75rem;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-ijf26": MMIjf26;
  }
}
