import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import {
  cybersecurityPlacements,
  cybersecurityRoadshowCities,
  cybersecurityRoadshowDetails,
} from "../data/cybersecurity.js";
import "./mm-back-button.ts";

@customElement("mm-cybersecurity")
export class MMCybersecurity extends LitElement {
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

    .google-pip {
      display: flex;
      align-items: center;
      gap: 5px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.6rem;
      color: var(--text-dim);
      letter-spacing: 0.1em;
      margin-bottom: 0.5rem;
    }

    .pip {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
    .pip-b { background: #4285F4; }
    .pip-r { background: #EA4335; }
    .pip-y { background: #FBBC05; }
    .pip-g { background: #34A853; }

    /* HERO */
    .hero {
      padding: 1.75rem 0 2.5rem;
      border-bottom: 1px solid var(--border);
    }

    .eyebrow {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      color: var(--button-bg, #52c8f4);
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
      margin-bottom: 1.8rem;
    }

    h1 span { color: var(--button-bg, #52c8f4); }

    .hero-body {
      max-width: 600px;
      color: var(--text-muted);
      font-size: 1rem;
      margin-bottom: 2.5rem;
    }

    .hero-body strong {
      color: var(--highlight);
      font-weight: 600;
    }

    /* SECTIONS */
    .section {
      padding: 2.5rem 0 2rem;
      border-bottom: 1px solid var(--border);
    }

    .section:last-of-type { border-bottom: none; padding-bottom: 0; }

    .section-marker {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.6rem;
      letter-spacing: 0.2em;
      color: var(--text-dim);
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    h2 {
      font-family: 'Syne', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--highlight);
      letter-spacing: -0.01em;
      margin-bottom: 1.2rem;
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
      border-left: 2px solid var(--button-bg, #52c8f4);
      padding: 1rem 1.4rem;
      background: rgba(82, 200, 244, 0.08);
      border-radius: 0 4px 4px 0;
      margin: 1.5rem 0;
    }

    .callout p {
      color: var(--text);
      margin: 0;
      font-size: 0.95rem;
    }

    /* PLACEMENTS */
    .placement {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 2rem;
      margin-bottom: 1.2rem;
      position: relative;
    }

    .placement::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 100%;
      background: var(--button-bg, #52c8f4);
      border-radius: 6px 0 0 6px;
    }

    .placement-top {
      margin-bottom: 1rem;
    }

    .placement-name {
      font-family: 'Syne', sans-serif;
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--highlight);
    }

    .placement-body {
      display: flex;
      gap: 1.5rem;
      align-items: flex-start;
    }

    .placement-text {
      flex: 1 1 60%;
      min-width: 0;
    }

    .placement-photo-link {
      flex: 0 0 38%;
      min-width: 0;
      display: block;
      border-radius: 6px;
      overflow: hidden;
      align-self: stretch;
    }

    .placement-photo {
      width: 100%;
      height: 100%;
      min-height: 280px;
      object-fit: cover;
      border-radius: 6px;
      display: block;
      transition: opacity 200ms ease;
    }

    .placement-photo-link:hover .placement-photo {
      opacity: 0.82;
    }

    .contract-line {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.62rem;
      color: var(--text-dim);
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border);
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

    /* CITY CHIPS */
    .chip-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin-top: 1rem;
    }

    .chip {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.68rem;
      color: var(--button-bg, #52c8f4);
      background: rgba(82, 200, 244, 0.08);
      border: 1px solid rgba(82, 200, 244, 0.18);
      border-radius: 3px;
      padding: 0.25rem 0.65rem;
      letter-spacing: 0.04em;
    }

    .chip-highlight {
      background: rgba(82, 200, 244, 0.2);
      border-color: var(--button-bg, #52c8f4);
      font-weight: 600;
    }

    /* PHOTO SLOT */
    .photo-slot {
      border: 1px dashed var(--border);
      border-radius: 6px;
      padding: 2.5rem 2rem;
      text-align: center;
      margin: 1.5rem 0;
    }

    .photo-slot p {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.65rem;
      color: var(--text-dim);
      letter-spacing: 0.06em;
      margin: 0;
    }

    /* INTRO SPACING */
    .placements-intro {
      margin-bottom: 1.8rem;
    }

    @media (max-width: 600px) {
      .page { padding: 0 1.2rem 4rem; }
      h1 { font-size: 1.75rem; }
      .detail-grid { grid-template-columns: 1fr; }
      .placement-body { flex-direction: column; }
      .placement-photo-link {
        flex: none;
        width: 100%;
        order: 2;
      }
    }
  `;

  render() {
    return html`
      <div class="page">
        <div class="back-row">
          <mm-back-button label="Back to Projects" href="/projects"></mm-back-button>
        </div>

        <div class="google-pip">
          <span class="pip pip-b"></span>
          <span class="pip pip-r"></span>
          <span class="pip pip-y"></span>
          <span class="pip pip-g"></span>
          Google.org Cybersecurity Seminars
        </div>

        <!-- HERO -->
        <div class="hero">
          <div class="eyebrow">Portfolio · Cybersecurity</div>
          <h1>Teaching security<br>to people who need it <span>most.</span></h1>
          <p class="hero-body">
            I participated in <strong>Google.org's Cybersecurity Seminars programme</strong>, a global initiative
            supporting hands-on cybersecurity training at universities across Europe, the Middle East, and Africa.
            Masaryk University is one of roughly 20 institutions worldwide selected for this funding. The work is not
            about earning a certificate. It is about taking what you learn and actually doing something with it, in
            communities that do not have a dedicated IT team, or a security budget, or anyone to ask.
          </p>
        </div>

        <!-- THE PROGRAMME -->
        <div class="section">
          <div class="section-marker">The Programme</div>
          <h2>What Google.org is funding, and why</h2>
          <p>
            The Cybersecurity Seminars initiative is run by <strong>Virtual Routes</strong> (formerly the European
            Cyber Conflict Research Incubator), which selects and supports universities across EMEA to expand access
            to cybersecurity education. The goal is not just to train more security professionals. It is to get those
            students working with local organisations that are genuinely underserved: small NGOs, care facilities,
            public libraries. Places that face the same threats as large institutions but with a fraction of the
            resources to deal with them.
          </p>
          <p>
            At Masaryk University, the programme runs as <strong>Czech Cybersecurity Seminars (CSS)</strong>.
            Students go through intensive expert-led training, then design and deliver real workshops for real
            community partners. The placement has to be useful, and it has to be documented.
          </p>
          <div class="callout">
            <p>Students gain hands-on experience by supporting local community organisations through internship placements and applied training, not classroom simulations.</p>
          </div>
        </div>

        <!-- EXPERT TRAINING -->
        <div class="section">
          <div class="section-marker">Expert Training</div>
          <h2>What I learned before I taught anyone anything</h2>
          <p>
            Before designing a single session, <strong>I went through substantial expert-led instruction: lectures
            and workshops from professionals</strong> at NÚKIB (Czech National Cyber and Information Security
            Agency), Masaryk University, and the private sector, including Martin Ukrop, Ivo Nutár, and Irena Adler
            Pavelková. Everything from threat modelling and phishing simulation to the psychology of social
            engineering and how to run incident response with a non-technical team.
          </p>
          <p>
            If I was going to walk into a care home or an NGO and talk to people about their digital safety, I
            needed to know what I was talking about. And I needed to be able to explain it without requiring a
            computer science degree to follow.
          </p>
        </div>

        <!-- COMMUNITY PLACEMENTS -->
        <div class="section">
          <div class="section-marker">Community Placements</div>
          <h2>Where the work actually happened</h2>
          <p class="placements-intro">
            The programme required one placement. I completed two. The first was through the programme. The second
            I chose and set up myself.
          </p>

          ${cybersecurityPlacements.map((placement) => html`
            <div class="placement">
              <div class="placement-top">
                <div class="placement-name">${placement.name}</div>
              </div>
              <div class="placement-body">
                <div class="placement-text">
                  ${placement.paragraphs.map((para) => html`<p>${unsafeHTML(para)}</p>`)}
                  <div class="callout">
                    <p>${placement.callout}</p>
                  </div>
                </div>
                ${placement.photo ? html`
                  <a
                    href=${placement.photo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="placement-photo-link"
                    aria-label=${placement.photo.ariaLabel}
                  >
                    <img
                      src=${placement.photo.src}
                      alt=${placement.photo.alt}
                      class="placement-photo"
                    />
                  </a>
                ` : ""}
              </div>
              <div class="contract-line">${placement.contractLine}</div>
            </div>
          `)}
        </div>

        <!-- CYBERIMPACT ROADSHOW -->
        <div class="section">
          <div class="section-marker">CyberImpact Roadshow · ISKM111</div>
          <h2>Forty-five people on a bus, ten cities, five days</h2>
          <p>
            After completing my placements, I was accepted into the <strong>CyberImpact Roadshow</strong>, an
            accredited field expedition run by the CSS programme. Twenty students, ten academic staff, fifteen
            community representatives. One bus, roughly 1,400 km across the Czech Republic, delivering cybersecurity
            workshops in regional cities that rarely see this kind of education. The course is capped at 20 students.
          </p>
          <p>
            <strong>Every participant was required to attend all ten workshops,</strong> not just their own, in the
            spirit of peer and professional review. You watch how others facilitate, give and receive feedback, and
            build a shared picture of what actually works with different audiences. Each workshop runs for about two
            hours, co-facilitated with an academic expert.
          </p>
          <p>
            I facilitated the workshop in <strong>Ústí nad Labem</strong>, with a focus on device security. Topics
            included PIN and screen lock setup, automatic updates, the 3-2-1 backup rule for photos, password
            phrases, Bitwarden, and two-factor authentication, built for people with no assumed technical background
            and grounded in the kinds of fraud that actually target them. The full presentation is below.
          </p>
          <p>
            Afterwards, everyone contributes to a shared output, the <em>Kyberbezpečnostní atlas Česka 2026</em>,
            a practical guide for future educators working in the same space.
          </p>

          <div class="detail-grid">
            ${cybersecurityRoadshowDetails.map((cell) => html`
              <div class="detail-cell">
                <div class="label">${cell.label}</div>
                <div class="val">${cell.value}</div>
              </div>
            `)}
          </div>

          <div class="chip-row">
            ${cybersecurityRoadshowCities.map((city) => html`
              <span class="chip ${city.highlight ? "chip-highlight" : ""}">${city.name}</span>
            `)}
          </div>

          <div class="photo-slot">
            <p>Photos from the expedition · May 2026 · Coming soon</p>
          </div>
        </div>

      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-cybersecurity": MMCybersecurity;
  }
}
