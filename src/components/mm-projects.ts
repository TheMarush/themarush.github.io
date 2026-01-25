import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("mm-projects")
export class MMProjects extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .container {
      padding: 1.5rem 1rem;
      max-width: 1120px;
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
          <article class="card" aria-labelledby="ai-view-title">
            <div class="card-meta">Virtual exhibition</div>
            <h3 id="ai-view-title" class="card-title">Reimagined by LLM</h3>
            <p class="card-body">
              Three AI systems. The same archive. Three completely different interpretations of who I am. A small lab for exploring how algorithmic systems read, misread, and construct identity from personal data.
            </p>
            <div class="cta-row">
              <button
                type="button"
                class="cta-btn"
                @click=${() => {
                  window.location.hash = "#/projects/ai-view";
                }}
              >
                <span>Open Reimagined by LLM</span>
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
