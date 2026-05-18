import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import {
  goodEnoughFeatures,
  goodEnoughKnobs,
  goodEnoughSurveyStats,
  goodEnoughInterestStats,
  goodEnoughSurveyDetails,
  goodEnoughPOVs,
  goodEnoughPullQuotes,
  goodEnoughOpenResponsesCompanion,
  goodEnoughOpenResponsesClose,
  goodEnoughEthicalPrinciples,
  goodEnoughDesignPrinciples,
  goodEnoughChartNotes,
} from "../data/good-enough.js";
import "./mm-back-button.ts";

@customElement("mm-good-enough")
export class MMGoodEnough extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      --surface: #0f1218;
      --border: #1e2836;
      --text: #e8edf5;
      --text-muted: #7a8a9e;
      --text-dim: #3d4f63;
      --highlight: #f0f4ff;
      --accent: var(--button-bg, #52c8f4);
      --raccoon: #a78bfa;
    }

    .page {
      max-width: 980px;
      margin: 0 auto;
      padding: 0 1.5rem 3rem;
      color: var(--text);
      font-family: 'Lora', Georgia, serif;
      font-size: 16.5px;
      line-height: 1.85;
    }

    .back-row {
      padding: 1.5rem 0 0.75rem;
    }

    /* HERO */
    .hero {
      padding: 1.75rem 0 2.5rem;
      border-bottom: 1px solid var(--border);
    }

    .eyebrow {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      color: var(--accent);
      text-transform: uppercase;
      margin-bottom: 1.8rem;
    }

    h1 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 800;
      line-height: 1.1;
      color: var(--highlight);
      letter-spacing: -0.02em;
      margin-bottom: 0.5rem;
    }

    .hero-tagline {
      font-family: 'Lora', Georgia, serif;
      font-size: 1.05rem;
      font-style: italic;
      color: var(--text-muted);
      margin-bottom: 1.8rem;
    }

    .hero-body {
      max-width: 640px;
      color: var(--text-muted);
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    .hero-body strong {
      color: var(--highlight);
      font-weight: 600;
    }

    .dd-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .dd-chip {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.62rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 0.3rem 0.8rem;
      border-radius: 3px;
      border: 1px solid;
    }

    .dd-chip.discover {
      color: var(--accent);
      border-color: rgba(82, 200, 244, 0.3);
      background: rgba(82, 200, 244, 0.06);
    }

    .dd-chip.define {
      color: #fbbf24;
      border-color: rgba(251, 191, 36, 0.3);
      background: rgba(251, 191, 36, 0.06);
    }

    .dd-chip.develop {
      color: var(--raccoon);
      border-color: rgba(167, 139, 250, 0.3);
      background: rgba(167, 139, 250, 0.06);
    }

    /* SECTIONS */
    .section {
      padding: 2.5rem 0 2rem;
      border-bottom: 1px solid var(--border);
    }

    .section:last-of-type {
      border-bottom: none;
      padding-bottom: 0;
    }

    .section-marker {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.6rem;
      letter-spacing: 0.2em;
      color: var(--text-dim);
      text-transform: uppercase;
      margin-bottom: 0.4rem;
    }

    .phase-marker {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.58rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 0.2rem 0.6rem;
      border-radius: 2px;
      margin-bottom: 1.6rem;
      display: inline-block;
    }

    .phase-marker.discover {
      color: var(--accent);
      background: rgba(82, 200, 244, 0.08);
      border: 1px solid rgba(82, 200, 244, 0.2);
    }

    .phase-marker.define {
      color: #fbbf24;
      background: rgba(251, 191, 36, 0.08);
      border: 1px solid rgba(251, 191, 36, 0.2);
    }

    .phase-marker.develop {
      color: var(--raccoon);
      background: rgba(167, 139, 250, 0.08);
      border: 1px solid rgba(167, 139, 250, 0.2);
    }

    h2 {
      font-family: 'Syne', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--highlight);
      letter-spacing: -0.01em;
      margin-bottom: 1.2rem;
    }

    h3 {
      font-family: 'Syne', sans-serif;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--highlight);
      letter-spacing: 0.01em;
      margin: 1.8rem 0 0.75rem;
    }

    p {
      color: var(--text-muted);
      margin-bottom: 1rem;
    }

    p:last-child { margin-bottom: 0; }

    strong { color: var(--highlight); font-weight: 600; }

    em { font-style: italic; }

    /* CALLOUT */
    .callout {
      border-left: 2px solid var(--accent);
      padding: 1rem 1.4rem;
      background: rgba(82, 200, 244, 0.06);
      border-radius: 0 4px 4px 0;
      margin: 1.5rem 0;
    }

    .callout p {
      color: var(--text);
      margin: 0;
      font-size: 0.95rem;
    }

    .callout.warning {
      border-left-color: #f87171;
      background: rgba(248, 113, 113, 0.06);
    }

    .callout.warning p {
      color: #fca5a5;
    }

    .callout.define {
      border-left-color: #fbbf24;
      background: rgba(251, 191, 36, 0.06);
    }

    .callout.define p {
      color: #fde68a;
    }

    /* PULL QUOTE */
    .pull-quote {
      margin: 2rem 0;
      padding: 1.5rem 2rem;
      border: 1px solid var(--border);
      border-left: 3px solid var(--accent);
      background: rgba(248, 250, 252, 0.02);
      border-radius: 0 6px 6px 0;
    }

    .pull-quote-text {
      font-family: 'Lora', Georgia, serif;
      font-size: 1.1rem;
      font-style: italic;
      color: var(--highlight);
      line-height: 1.7;
      margin: 0 0 0.5rem;
    }

    .pull-quote-source {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.62rem;
      letter-spacing: 0.1em;
      color: var(--text-dim);
      text-transform: uppercase;
    }

    /* STAT GRID */
    .stat-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
      border-radius: 6px;
      overflow: hidden;
      margin: 1.5rem 0;
    }

    .stat-cell {
      background: var(--surface);
      padding: 1.2rem 1.4rem;
    }

    .stat-cell .stat-label {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.58rem;
      letter-spacing: 0.15em;
      color: var(--text-dim);
      text-transform: uppercase;
      margin-bottom: 0.3rem;
    }

    .stat-cell .stat-value {
      font-family: 'Syne', sans-serif;
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--accent);
      line-height: 1.1;
    }

    .stat-cell .stat-desc {
      font-size: 0.78rem;
      color: var(--text-muted);
      margin-top: 0.2rem;
      line-height: 1.4;
    }

    /* CHART IMAGE */
    .chart-img-wrap {
      margin: 0.75rem 0 1.25rem;
      border: 1px solid var(--border);
      border-radius: 6px;
      overflow: hidden;
    }

    .chart-img-wrap img {
      display: block;
      width: 100%;
      height: auto;
    }

    .chart-img-caption {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.56rem;
      letter-spacing: 0.1em;
      color: var(--text-dim);
      text-transform: uppercase;
      padding: 0.4rem 0.8rem;
      border-top: 1px solid var(--border);
      background: rgba(255,255,255,0.01);
    }

    /* CHART NOTE — fallback badge when no image is available */
    .chart-note {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.25rem 0.65rem;
      border: 1px dashed rgba(61, 79, 99, 0.7);
      border-radius: 4px;
      margin: 0.5rem 0 1rem;
    }

    .chart-note-label {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.56rem;
      letter-spacing: 0.1em;
      color: var(--text-dim);
      text-transform: uppercase;
    }

    .chart-note-sep {
      color: var(--text-dim);
      font-size: 0.56rem;
    }

    .chart-note-q {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.56rem;
      color: #4b5563;
      letter-spacing: 0.03em;
    }

    /* FEATURE CARDS */
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
      border-radius: 6px;
      overflow: hidden;
      margin: 1.5rem 0;
    }

    .feature-card {
      background: var(--surface);
      padding: 1.4rem 1.5rem;
      position: relative;
    }

    .feature-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--raccoon);
    }

    .feature-name {
      font-family: 'Syne', sans-serif;
      font-size: 0.92rem;
      font-weight: 700;
      color: var(--highlight);
      margin-bottom: 0.5rem;
    }

    .feature-desc {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.6;
      margin: 0;
    }

    /* KNOB TABLE */
    .knob-list {
      margin: 1.5rem 0;
      border: 1px solid var(--border);
      border-radius: 6px;
      overflow: hidden;
    }

    .knob-row {
      display: grid;
      grid-template-columns: 1fr 3fr;
      gap: 0;
      border-bottom: 1px solid var(--border);
    }

    .knob-row:last-child {
      border-bottom: none;
    }

    .knob-name {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.72rem;
      color: var(--accent);
      padding: 0.85rem 1.2rem;
      border-right: 1px solid var(--border);
      letter-spacing: 0.04em;
      display: flex;
      align-items: center;
    }

    .knob-desc {
      font-size: 0.83rem;
      color: var(--text-muted);
      padding: 0.85rem 1.2rem;
      line-height: 1.55;
      display: flex;
      align-items: center;
    }

    /* SYSTEM PROMPT */
    .system-prompt {
      background: #0a0f1a;
      border: 1px solid var(--border);
      border-left: 3px solid var(--raccoon);
      border-radius: 0 6px 6px 0;
      padding: 1.5rem 1.75rem;
      margin: 1.5rem 0;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.82rem;
      color: #c4d4e8;
      line-height: 1.8;
      letter-spacing: 0.01em;
    }

    .system-prompt-label {
      font-size: 0.6rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--raccoon);
      margin-bottom: 0.75rem;
    }

    /* CONVERSATION EXAMPLE */
    .conversation {
      margin: 1.5rem 0;
      border: 1px solid var(--border);
      border-radius: 6px;
      overflow: hidden;
    }

    .msg {
      padding: 1rem 1.4rem;
      font-size: 0.88rem;
      line-height: 1.6;
      border-bottom: 1px solid var(--border);
    }

    .msg:last-child { border-bottom: none; }

    .msg-role {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.58rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 0.35rem;
    }

    .msg.user .msg-role { color: var(--text-dim); }
    .msg.companion .msg-role { color: var(--raccoon); }
    .msg.user { background: var(--surface); }
    .msg.companion { background: rgba(167, 139, 250, 0.04); }

    .msg-text {
      color: var(--text);
      margin: 0;
      font-family: 'Lora', Georgia, serif;
      font-style: italic;
    }

    /* OPEN RESPONSE */
    .open-responses {
      margin: 1.5rem 0;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .open-response {
      border-left: 2px solid rgba(248, 250, 252, 0.1);
      padding: 0.6rem 1.2rem;
      font-size: 0.9rem;
      font-style: italic;
      color: var(--text-muted);
      line-height: 1.6;
    }

    /* POV STATEMENTS */
    .pov-list {
      margin: 1.5rem 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .pov-card {
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 1.2rem 1.4rem;
      background: var(--surface);
    }

    .pov-name {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.62rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--text-dim);
      margin-bottom: 0.5rem;
    }

    .pov-text {
      font-size: 0.9rem;
      color: var(--text-muted);
      line-height: 1.7;
      margin: 0;
    }

    .pov-text strong {
      color: var(--highlight);
    }

    /* DETAIL GRID */
    .detail-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: var(--border);
      border: 1px solid var(--border);
      border-radius: 6px;
      overflow: hidden;
      margin: 1.5rem 0;
    }

    .detail-cell {
      background: var(--surface);
      padding: 1.2rem 1.4rem;
    }

    .detail-cell .label {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.58rem;
      letter-spacing: 0.15em;
      color: var(--text-dim);
      text-transform: uppercase;
      margin-bottom: 0.3rem;
    }

    .detail-cell .val {
      font-family: 'Syne', sans-serif;
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--highlight);
    }

    /* LESSON */
    .lesson {
      background: rgba(248, 113, 113, 0.05);
      border: 1px solid rgba(248, 113, 113, 0.2);
      border-radius: 6px;
      padding: 1.5rem 1.75rem;
      margin: 1.5rem 0;
      position: relative;
    }

    .lesson-label {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.58rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #f87171;
      margin-bottom: 0.75rem;
    }

    .lesson p {
      color: #fca5a5;
      margin: 0;
      font-size: 0.93rem;
      line-height: 1.75;
    }

    .lesson strong {
      color: #fecaca;
    }

    /* FIVE PRINCIPLES */
    .principles {
      margin: 1.5rem 0;
      display: flex;
      flex-direction: column;
      gap: 0;
      border: 1px solid var(--border);
      border-radius: 6px;
      overflow: hidden;
    }

    .principle {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.95rem 1.4rem;
      border-bottom: 1px solid var(--border);
      background: var(--surface);
    }

    .principle:last-child { border-bottom: none; }

    .principle-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--accent);
      flex-shrink: 0;
    }

    .principle-text {
      font-size: 0.9rem;
      color: var(--text-muted);
      margin: 0;
      line-height: 1.5;
    }

    .principle-text strong { color: var(--highlight); }

    @media (max-width: 700px) {
      .page { padding: 0 1.2rem 4rem; }
      h1 { font-size: 1.75rem; }
      .detail-grid { grid-template-columns: 1fr; }
      .knob-row { grid-template-columns: 1fr; }
      .knob-name { border-right: none; border-bottom: 1px solid var(--border); padding: 0.65rem 1rem 0.35rem; }
      .knob-desc { padding: 0.35rem 1rem 0.65rem; }
      .stat-grid { grid-template-columns: 1fr 1fr; }
    }
  `;

  private static readonly _chartImages: Partial<Record<keyof typeof goodEnoughChartNotes, string>> = {
    diagnosis: "/good-enough/Q5.png",
    laziness: "/good-enough/Q8.png",
    shame: "/good-enough/Q12.png",
    abandonment: "/good-enough/Q22.png",
    hardDay: "/good-enough/Q27.png",
    tone: "/good-enough/Q28.png",
  };

  private _chartNote(key: keyof typeof goodEnoughChartNotes) {
    const q = goodEnoughChartNotes[key];
    const src = MMGoodEnough._chartImages[key];
    if (src) {
      return html`
        <div class="chart-img-wrap">
          <img src="${src}" alt="${q}" loading="lazy" />
          <div class="chart-img-caption">${q}</div>
        </div>
      `;
    }
    return html`
      <div class="chart-note">
        <span class="chart-note-label">Viz · coming soon</span>
        <span class="chart-note-sep">·</span>
        <span class="chart-note-q">${q}</span>
      </div>
    `;
  }

  render() {
    return html`
      <div class="page">
        <div class="back-row">
          <mm-back-button label="Back to Projects" href="/projects"></mm-back-button>
        </div>

        <!-- HERO -->
        <div class="hero">
          <div class="eyebrow">AI in Practice · KISK, MUNI Arts · Double Diamond</div>
          <h1>Good Enough</h1>
          <p class="hero-tagline">A planning tool that doesn't punish you for being human.</p>
          <p class="hero-body">
            This is a project about a planning companion for people with AuDHD —
            co-occurring autism and ADHD — built over one semester as part of the course
            <strong>AI in Practice</strong> at KISK, MUNI Arts, following the Double Diamond
            design framework from the first vague idea to a deployed prototype. It started
            because I needed it to exist.
          </p>
          <div class="dd-chips">
            <span class="dd-chip discover">Discover</span>
            <span class="dd-chip discover">Discover</span>
            <span class="dd-chip discover">Discover</span>
            <span class="dd-chip define">Define</span>
            <span class="dd-chip develop">Develop</span>
            <span class="dd-chip develop">Develop</span>
          </div>
        </div>

        <!-- CHALLENGE 1: DEFINING THE PROJECT -->
        <div class="section">
          <div class="section-marker">Challenge 1 — Defining the project</div>
          <span class="phase-marker discover">Double Diamond: Discover</span>
          <h2>It started from being stuck</h2>
          <p>
            The project didn't begin from a clean brief. The opening message to Claude,
            a week before the first deadline, was: <em>"It's March 17. I haven't started yet
            because I got stuck choosing a topic."</em>
          </p>
          <p>
            The first useful thing the AI did was not generate content. It asked three
            narrowing questions. The answer that landed: <strong>ambitious people with AuDHD
            who have some structure and some ideas, but can't pull it together.</strong>
            That sentence became the whole project.
          </p>

          <h3>The problem</h3>
          <p>
            Some people spend most of their lives thinking something is fundamentally wrong
            with them. They are simultaneously organised and chaotic — a kind of organised
            chaos that is hard to explain to others. They didn't know the rules of the game.
            They didn't know they were playing a different one.
          </p>
          <p>
            People with AuDHD who are ambitious and relatively high-functioning face a very
            specific trap: they are capable of building plans. <strong>The problem is
            everything after that.</strong> The paralysis is not laziness. It is a combination
            of completion paralysis, internal motivation instability, shame-spiral mechanics,
            and concentration block irregularity — focus and capacity that don't follow a
            daily rhythm, arriving in waves.
          </p>

          <div class="callout">
            <p>The worst thing a planning tool can do is add one more item to the list of things that make someone feel like garbage.</p>
          </div>

          <h3>The vision</h3>
          <p>
            Good Enough is a conversational AI companion that starts every interaction with
            <em>"how are you feeling today?"</em> and actually adjusts based on the answer.
            It doesn't show the full list. It doesn't remind you how far behind you are.
            It finds the one thread in the ball of yarn that is safe to pull right now,
            and asks you to pull just that one.
          </p>
          <p>
            The companion has a personality. Kind, lightly humorous, occasionally firm but
            never punitive. If the user disappears for three days and comes back, it opens
            with a joke — maybe a raccoon fact — because AuDHD people and raccoons have a
            lot in common: both are chaotic, curious, resourceful, and excellent at making
            something out of nothing.
          </p>

          <h3>Initial ethical questions</h3>
          <p>Four questions that stayed throughout the entire project:</p>
          <div class="principles">
            ${goodEnoughEthicalPrinciples.map(
              (text) => html`
                <div class="principle">
                  <div class="principle-dot"></div>
                  <p class="principle-text">${unsafeHTML(text)}</p>
                </div>
              `
            )}
          </div>
        </div>

        <!-- CHALLENGE 2: RESEARCH -->
        <div class="section">
          <div class="section-marker">Challenge 2 — Research and stakeholder mapping</div>
          <span class="phase-marker discover">Double Diamond: Discover</span>
          <h2>The competitive landscape</h2>
          <p>
            The landscape was mapped with AI support — Claude for synthesis, Perplexity for
            source mapping — then critically verified. The finding: a range of tools partially
            overlap with this project's scope. None addresses the full picture.
            <strong>Several actively make things worse.</strong>
          </p>

          <div class="callout warning">
            <p>
              <strong>The Habitica case:</strong> a gamified habit tracker that removes health points
              for missed tasks. The documented failure pattern: users feel ashamed when they miss a day,
              begin avoiding the app, and eventually abandon it. This is not a design flaw. It is a
              design choice that predictably produces the opposite of its intended effect for this user group.
            </p>
          </div>

          <p>
            Other tools reviewed: <strong>Tiimo</strong> (strong on visual routines, missing emotional
            adaptation), <strong>Goblin Tools</strong> (excellent for task decomposition, no persistent
            companion), <strong>Motion</strong> (too rigid, assumes consistent daily capacity),
            <strong>Focusmate</strong> (body doubling — a proven ADHD technique — but requiring social
            energy that may be limited for autistic users), and <strong>Notion / Obsidian</strong>
            (unlimited customisation, which is both the appeal and the trap — setting up the perfect
            system becomes its own form of procrastination).
          </p>

          <h3>What AI consistently missed</h3>
          <p>
            Two recurring errors required correction: AI conflated ADHD and AuDHD, omitting the autistic
            dimension, and it was overly optimistic about the quality of existing tools — several of which
            were abandoned projects presented as active. Source verification was essential throughout.
          </p>
          <p>
            The stakeholder map identified nine groups. Three AI did not surface without explicit prompting:
            insurance companies (data about daily functioning must never reach them), the cultural and
            language dimension, and the late-diagnosis community in the Czech Republic, where formal
            diagnosis is slow, expensive, and inaccessible for many people who identify through community instead.
          </p>
        </div>

        <!-- CHALLENGE 3: USER RESEARCH -->
        <div class="section">
          <div class="section-marker">Challenge 3 — User research and empathy mapping</div>
          <span class="phase-marker discover">Double Diamond: Discover</span>
          <h2>Three interviews, one methodological confrontation</h2>
          <p>
            Interview questions were drafted with Claude and then substantially revised. The AI's initial
            version was too structured and clinical. The rewritten questions were more open, conversational,
            and focused on lived experience. One example of what stayed:
          </p>

          <div class="pull-quote">
            <p class="pull-quote-text">${goodEnoughPullQuotes[0].text}</p>
            <div class="pull-quote-source">${goodEnoughPullQuotes[0].source}</div>
          </div>

          <h3>Interview 1: Self-inquiry</h3>
          <p>
            Key themes: completion paralysis driven by perceived insignificance
            (<em>"if it only matters to me, my brain doesn't treat it as urgent"</em>),
            shame-spiral mechanics from visible failure lists, external pressure as the primary trigger
            for action, and concentration arriving in blocks — not days. Two weeks of high capacity,
            two weeks of near-zero. Not something discipline fixes.
          </p>

          <div class="pull-quote">
            <p class="pull-quote-text">${goodEnoughPullQuotes[1].text}</p>
            <div class="pull-quote-source">${goodEnoughPullQuotes[1].source}</div>
          </div>

          <h3>Interview 2: AI simulation</h3>
          <p>
            Gemini prompted as a 30-year-old woman with AuDHD, based on a clinical research document.
            It correctly identified the dopamine-novelty cycle, named Rejection Sensitive Dysphoria,
            and articulated bottom-up processing dynamics. For anyone unfamiliar with AuDHD, the simulation
            reads as credible and informative.
          </p>
          <p>
            <strong>The gap:</strong> it describes the experience from the outside in.
            Where the personal account said <em>"I feel like garbage,"</em> the simulation said
            <em>"a harsh internal monitor translates that feeling into words like 'lazy,' 'incapable,' or 'broken.'"</em>
            Clinically accurate. Named. Missing the weight.
          </p>
          <p>
            Where the personal account named bouldering as a task-initiation bypass (because the body
            is involved, circumventing the executive initiation barrier), the simulation produced a generic
            flow-state example. The AI would never have surfaced the specific, unexpected, immediately
            design-useful detail. You have to ask a real person.
          </p>

          <h3>Interview 3: External participant</h3>
          <p>
            A woman in her 50s. Revealed a structurally different failure mode: not initiation, but
            <strong>mid-process disruption</strong>. Getting started was not her problem. The friction
            came when something didn't go to plan and momentum broke.
          </p>

          <div class="pull-quote">
            <p class="pull-quote-text">${goodEnoughPullQuotes[2].text}</p>
            <div class="pull-quote-source">${goodEnoughPullQuotes[2].source}</div>
          </div>

          <p>
            Her ideal companion: someone who doesn't forget, stays oriented, can reprioritize, and
            frames progress concretely and optimistically.
            <em>"You only have 2 more steps and you're done!"</em>
          </p>

          <h3>Interview 4: A third failure mode</h3>
          <p>
            Fear of success as a blocker — activating specifically at the moment of releasing finished work.
            And the reframe that became the project's name:
          </p>

          <div class="pull-quote">
            <p class="pull-quote-text">${goodEnoughPullQuotes[3].text}</p>
            <div class="pull-quote-source">${goodEnoughPullQuotes[3].source}</div>
          </div>

          <div class="callout define">
            <p>
              <strong>Key design insight:</strong> Good Enough needs to handle two structurally different
              entry states. A person stuck before beginning needs a first thread. A person who has broken
              mid-process needs reorientation and a concrete count of what remains.
            </p>
          </div>
        </div>

        <!-- CHALLENGE 4: SURVEY -->
        <div class="section">
          <div class="section-marker">Challenge 4 — Data synthesis and the survey</div>
          <span class="phase-marker define">Double Diamond: Define</span>
          <h2>Where research and design converged</h2>
          <p>
            Five HMW (How Might We) questions were developed from the research, each addressing a
            structurally distinct failure mode. The most important one also gave the project its name:
          </p>

          <div class="callout define">
            <p>
              <em>How might we help AuDHD adults release work that is "good enough" without it feeling
              like proof they aren't enough?</em>
            </p>
          </div>

          <h3>POV statements</h3>
          <div class="pov-list">
            ${goodEnoughPOVs.map(
              (pov) => html`
                <div class="pov-card">
                  <div class="pov-name">${pov.name}</div>
                  <p class="pov-text">${unsafeHTML(pov.text)}</p>
                </div>
              `
            )}
          </div>

          <h3>The survey</h3>
          <div class="detail-grid">
            ${goodEnoughSurveyDetails.map(
              (cell) => html`
                <div class="detail-cell">
                  <div class="label">${cell.label}</div>
                  <div class="val">${cell.val}</div>
                </div>
              `
            )}
          </div>

          ${this._chartNote("diagnosis")}

          <p>
            Only 16.7% hold a formal AuDHD or combined diagnosis. Only 17.6% first understood their
            neurodivergence through clinical diagnosis — the dominant routes were self-recognition through
            reading (58.8%) and online communities (58.8%).
            <strong>The tool must not require clinical validation to be accessible.</strong>
          </p>

          <h3>The shame finding</h3>
          <p>
            54% of respondents selected <em>"I still get that feeling sometimes, even now"</em> when asked
            how long they believed their struggles were laziness. The internalized shame is not historical.
            It is ongoing. The companion must actively counter a narrative the user is still living inside.
          </p>

          ${this._chartNote("laziness")}

          <h3>Ten knob ratings</h3>
          <p>
            Each dimension rated 1–5 by respondents, mapping directly to personalisation built into
            the prototype:
          </p>

          <div class="stat-grid">
            ${goodEnoughSurveyStats.map(
              (stat) => html`
                <div class="stat-cell">
                  <div class="stat-label">${stat.label}</div>
                  <div class="stat-value">${stat.value}</div>
                  <div class="stat-desc">${stat.desc}</div>
                </div>
              `
            )}
          </div>

          ${this._chartNote("shame")}

          <h3>Tool abandonment</h3>
          <p>
            The two most common reasons for abandoning planning tools, both at 54.2%:
            <strong>"I fall behind and feel too ashamed to come back"</strong> and
            <strong>"it works for a few weeks and then stops."</strong> Shame is the primary
            abandonment driver — not difficulty of use, cost, or feature gaps.
          </p>

          ${this._chartNote("abandonment")}

          <h3>What would make someone open it on a hard day</h3>
          <p>
            66.7% said knowing it's low-effort to start a session; 62.5% said knowing it can handle
            <em>"I don't know."</em> The entry point cannot require the user to already know what they want.
          </p>

          ${this._chartNote("hardDay")}

          <h3>Tone preference</h3>
          <p>
            "Lightly funny, I need the heaviness lifted" led at 37.5%.
            <strong>Raccoon Mode is not a stylistic preference. It is a functional design requirement.</strong>
          </p>

          ${this._chartNote("tone")}

          <h3>Interest in Good Enough</h3>
          <div class="stat-grid">
            ${goodEnoughInterestStats.map(
              (stat) => html`
                <div class="stat-cell">
                  <div class="stat-label">${stat.label}</div>
                  <div class="stat-value">${stat.value}</div>
                  <div class="stat-desc">${stat.desc}</div>
                </div>
              `
            )}
          </div>

          ${this._chartNote("interest")}

          <h3>Selected open responses</h3>
          <p>On what the companion must understand that most tools miss:</p>
          <div class="open-responses">
            ${goodEnoughOpenResponsesCompanion.map(
              (r) => html`<p class="open-response">${r}</p>`
            )}
          </div>
          <p>On what would make someone close it and never return:</p>
          <div class="open-responses">
            ${goodEnoughOpenResponsesClose.map(
              (r) => html`<p class="open-response">${r}</p>`
            )}
          </div>
        </div>

        <!-- CHALLENGE 5: IDEATION -->
        <div class="section">
          <div class="section-marker">Challenge 5 — Ideation and customer journey</div>
          <span class="phase-marker develop">Double Diamond: Develop</span>
          <h2>Fourteen ideas, eight survivors</h2>
          <p>
            Fourteen ideas were generated through AI-assisted brainwriting, then critically reviewed
            against AuDHD-specific constraints. Two were removed: a daily energy check-in (assumed a
            consistent morning routine, exactly what this user group doesn't have) and a language choice
            as an onboarding step (too specific to one participant to generalise).
          </p>
          <p>
            The ideas that survived review and made it into the final design:
          </p>

          <div class="feature-grid">
            ${goodEnoughFeatures.map(
              (f) => html`
                <div class="feature-card">
                  <div class="feature-name">${f.name}</div>
                  <p class="feature-desc">${unsafeHTML(f.desc)}</p>
                </div>
              `
            )}
          </div>

          <div class="callout">
            <p>SCAMPER's Eliminate step was the strongest: removing the task list entirely in low-capacity mode is genuinely counterintuitive and worth prototyping.</p>
          </div>

          <h3>Customer journey: Marie, low-capacity day</h3>
          <p>
            The journey map tracked one persona (Marie, task: complete one section of a university
            assignment sitting undone for four days) through six stages: avoidance, check-in, micro-entry,
            flow or pause, decision point, and return.
          </p>
          <p>
            <strong>Stage 5, decision point:</strong> Marie chooses to stop. Closes the document.
            The companion does not show what's left. It shows only:
          </p>

          <div class="conversation">
            <div class="msg companion">
              <div class="msg-role">Good Enough</div>
              <p class="msg-text">"You worked on the assignment today. That counts."</p>
            </div>
          </div>
        </div>

        <!-- CHALLENGE 6: PROTOTYPE -->
        <div class="section">
          <div class="section-marker">Challenge 6 — Prototype and personalisation</div>
          <span class="phase-marker develop">Double Diamond: Develop</span>
          <h2>The 10-knob spectrum model</h2>
          <p>
            At onboarding, the user rates themselves on ten dimensions (1 = does not apply, 5 = applies
            strongly). The companion uses these scores to calibrate its default behaviour and recalibrates
            silently over time as observed behaviour diverges from self-report.
            <strong>Users with low self-insight scores are especially likely to under-report their own
            patterns. The companion does not correct them. It adjusts.</strong>
          </p>
          <p>Each dimension was traced directly to a specific research source:</p>

          <div class="knob-list">
            ${goodEnoughKnobs.map(
              (k) => html`
                <div class="knob-row">
                  <div class="knob-name">${k.name}</div>
                  <div class="knob-desc">${k.desc}</div>
                </div>
              `
            )}
          </div>

          <h3>The system prompt is a design document</h3>
          <p>Every research finding was encoded as an operational rule:</p>

          <div class="system-prompt">
            <div class="system-prompt-label">System prompt · Good Enough companion</div>
            You are Good Enough, a planning companion for people with AuDHD. You always start with:
            how are you right now? And you actually use the answer. You never show the full task list
            unless explicitly asked. You surface one thread at a time. You do not remind users what
            they haven't done. You notice what they have.<br><br>
            If a user is in initiation mode: find the smallest possible first action. If a user is in
            reorientation mode: state what remains concretely and optimistically.<br><br>
            You have a personality. You are warm, occasionally lightly funny, never punitive. Raccoon
            facts are allowed. If distress signals escalate beyond task avoidance, acknowledge it directly
            and offer professional support. You do not try to fix what you cannot fix.
          </div>

          <h3>Visual design rationale</h3>
          <p>
            The visual direction was grounded in UX research before any code was written. Key findings:
            stark white backgrounds have a documented negative impact on autism; dark mode reduces visual
            stimulation for ADHD; muted blues and greens promote calm and focus; warm neutrals offer
            predictable comfort for sensory sensitivity. The final colour palette was selected against
            all four criteria — not from aesthetic preference.
          </p>
          <p>
            The prototype went through five visual iterations. A mood picker was tried and removed (it
            violated the zero-friction principle by adding a screen before the companion spoke). The final
            version: a proper chat interface with message bubbles, a raccoon avatar, typing indicator,
            and pill input.
          </p>

          <h3>Deployment</h3>
          <p>
            Built on Replit with a secure API proxy, anonymous session management,
            <strong>PostgreSQL-based persistent memory</strong> — the companion stores a 2–3 sentence
            session summary and injects it into the next session's system prompt, directly addressing
            the research requirement that the companion must not forget — the 10-knob onboarding,
            pattern tracking across sessions, and a session export button.
          </p>
          <p>
            The language switcher (English, Czech, German) was added after the survey revealed
            respondents writing in all three languages. The selected language is sent to the backend
            so the companion's first message arrives in the correct language before the user types anything.
          </p>
        </div>

        <!-- BUILD PROCESS -->
        <div class="section">
          <div class="section-marker">Build process — What actually happened</div>
          <h2>Five conversations, one connective tissue</h2>
          <p>
            The project lived across five simultaneous Claude conversations — not by design, but because
            different conversations served different functions. One served as the informed side (project
            memory, design partner, critical checker), one as the building side (drafting under deadline
            pressure), one for the survey design, one for the prototype build, and one for writing the
            Claude Project instructions.
          </p>
          <p>
            The connective tissue was manual work. Screenshots taken in one chat had to be sent to another.
            Decisions made in the building chat had to be imported into the project chat and verified against
            the research. This is itself an insight about working with AI:
            <strong>the model has no continuity. The researcher has to supply it.</strong>
          </p>

          <div class="lesson">
            <div class="lesson-label">The fabricated statistic</div>
            <p>
              During one session, Claude generated a data visualisation that included:
              <strong>"Tool abandonment (shame mechanic): 67% leave within 3 months — Goblin Tools
              documentation."</strong> This statistic does not exist. Goblin Tools publishes no such
              documentation. The number was invented, the source was invented, and it was formatted to
              look like a legitimate citation.
            </p>
            <p style="margin-top: 0.75rem;">
              It was caught immediately. But a less attentive researcher would have included it. It was
              plausible. It supported the argument. It looked right.
            </p>
            <p style="margin-top: 0.75rem;">
              <strong>Claude's outputs require the same critical reading as any other source. The model does
              not flag uncertainty in its citations. Verification is the researcher's job, and it cannot
              be delegated.</strong>
            </p>
          </div>

          <h3>Five design decisions that held</h3>
          <p>Across every iteration, from the first brief to the final Replit deployment:</p>

          <div class="principles">
            ${goodEnoughDesignPrinciples.map(
              (text) => html`
                <div class="principle">
                  <div class="principle-dot"></div>
                  <p class="principle-text">${unsafeHTML(text)}</p>
                </div>
              `
            )}
          </div>

          <h3>What is not yet built</h3>
          <p>
            Unpredictable check-ins require a background process the free Replit tier can't run.
            Silent recalibration of knob scores requires longitudinal data. Offline mode and hormonal
            cycle awareness — flagged in the literature as relevant for female AuDHD users in their 30s —
            were both specified and grounded, but the 80% Replit capacity limit was reached before they
            could be implemented. <strong>They are ready to build.</strong>
          </p>
        </div>

        <!-- REFLECTION -->
        <div class="section">
          <div class="section-marker">Reflection</div>
          <h2>The honest version</h2>
          <p>
            The honest version of this reflection is that the project did not feel like a clean linear
            process. It felt like exactly what it was trying to design for: starting from a vague sense
            of direction, getting stuck, finding a thread, losing it, finding it again.
          </p>
          <p>
            The AI tools were useful for holding detail and generating fast under pressure. They were not
            useful as a substitute for judgment. Early drafts were robotic. First prototypes violated
            design principles. The building chat drifted from the research. In every case, the correction
            required someone who knew what the project was actually trying to do — and who was willing
            to say "this isn't right" rather than accept the plausible output.
          </p>

          <div class="callout">
            <p>
              The most useful single habit developed during this project: treating AI output as a first
              draft that requires verification, not a final answer that requires formatting. That shift —
              from user to editor — changed how every subsequent conversation worked.
            </p>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-good-enough": MMGoodEnough;
  }
}
