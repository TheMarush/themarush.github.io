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

    .title {
      margin: 0 0 1.5rem 0;
      font-size: 2rem;
      font-weight: 700;
      color: var(--button-bg, #52c8f4);
      border-bottom: 2px solid var(--button-bg, #52c8f4);
      padding-bottom: 0.5rem;
    }

    .intro {
      max-width: 720px;
      font-size: 0.96rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1rem;
    }

    .card {
      border-radius: 0.9rem;
      border: 1px solid rgba(148, 163, 184, 0.4);
      background: radial-gradient(
          circle at top left,
          rgba(15, 23, 42, 0.96),
          rgba(15, 23, 42, 0.9)
        ),
        #020617;
      padding: 1.1rem 1.2rem;
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      color: #f9fafb;
    }

    .card-title {
      font-size: 1.1rem;
      font-weight: 600;
    }

    .card-meta {
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #9ca3af;
    }

    .card-body {
      font-size: 0.9rem;
      color: #d1d5db;
      line-height: 1.6;
    }

    .cta-row {
      margin-top: auto;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.85rem;
    }

    .cta-btn {
      background: none;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.7);
      padding: 0.25rem 0.75rem;
      color: inherit;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.83rem;
    }

    .cta-btn:focus-visible {
      outline: 2px solid var(--button-bg, #52c8f4);
      outline-offset: 2px;
    }

    .coming-soon-label {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.83rem;
      color: #6b7280;
      font-style: italic;
      padding: 0.25rem 0;
    }

    @media (max-width: 768px) {
      .container {
        padding: 1rem;
      }

      .title {
        font-size: 1.5rem;
      }
    }
  `;

  render() {
    return html`
      <section class="container" aria-labelledby="projects-title">
        <h2 id="projects-title" class="title">Projects</h2>
        <p class="intro">
          Selected work and ongoing experiments. Some projects are polished, others are messy, but each one taught me something worth keeping.
        </p>
        
        <div class="grid">
          <article class="card" aria-labelledby="eu-ambassador-title">
            <div class="card-meta">Education · Advocacy · 2026–2027</div>
            <h3 id="eu-ambassador-title" class="card-title">EU Careers Ambassador</h3>
            <p class="card-body">
              Just accepted. Starting soon. More details to follow as the work begins.
            </p>
            <div class="cta-row">
              <span class="coming-soon-label">Coming soon</span>
            </div>
          </article>

          <article class="card" aria-labelledby="good-enough-title">
            <div class="card-meta">Planning companion</div>
            <h3 id="good-enough-title" class="card-title">Good Enough</h3>
            <p class="card-body">
              A planning companion designed for neurodivergent people and people with similar experiences. Built around the idea that done is better than perfect — and that "good enough" is not failure, it's a strategy.
            </p>
            <div class="cta-row">
              <span class="coming-soon-label">In development</span>
            </div>
          </article>

          <article class="card" aria-labelledby="cybersecurity-title">
            <div class="card-meta">Cybersecurity · Education · 2025–2026</div>
            <h3 id="cybersecurity-title" class="card-title">Google Cybersecurity Seminars</h3>
            <p class="card-body">
              A Google.org-funded programme at Masaryk University connecting academic cybersecurity expertise with communities across the Czech Republic — placements at Amnesty International, senior care homes, and a 5-day national roadshow.
            </p>
            <div class="cta-row">
              <button
                type="button"
                class="cta-btn"
                @click=${() => navigate("/projects/cybersecurity")}
              >
                <span>Open Google CS Seminars</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </article>

          <article class="card" aria-labelledby="ijf26-title">
            <div class="card-meta">Field coverage · 2026</div>
            <h3 id="ijf26-title" class="card-title">IJF26</h3>
            <p class="card-body">
              Three days at the International Journalism Festival in Perugia. Nineteen panels on gender, cybersecurity, conflict reporting, and the future of the craft — notes taken in the rooms, in real time.
            </p>
            <div class="cta-row">
              <button
                type="button"
                class="cta-btn"
                @click=${() => navigate("/projects/ijf26")}
              >
                <span>Open IJF26 Coverage</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </article>

          <article class="card" aria-labelledby="ai-view-title">
            <div class="card-meta">Virtual exhibition · 2025</div>
            <h3 id="ai-view-title" class="card-title">Reimagined by LLM</h3>
            <p class="card-body">
              Three AI systems. The same archive. Three completely different interpretations of who I am. A small lab for exploring how algorithmic systems read, misread, and construct identity from personal data.
            </p>
            <div class="cta-row">
              <button
                type="button"
                class="cta-btn"
                @click=${() => navigate("/projects/ai-view")}
              >
                <span>Open Reimagined by LLM</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </article>

          <article class="card" aria-labelledby="feminism-title">
            <div class="card-meta">Personal journey · 2018–present</div>
            <h3 id="feminism-title" class="card-title">Lifelong Feminist</h3>
            <p class="card-body">
              A photo diary from nearly a decade of feminist work. From a middle school matura to winter schools and public forums, these are the moments that turned feminism from an idea into a way of seeing the world.
            </p>
            <div class="cta-row">
              <button
                type="button"
                class="cta-btn"
                @click=${() => navigate("/projects/feminism")}
              >
                <span>Open Lifelong Feminist</span>
                <span aria-hidden="true">→</span>
              </button>
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
