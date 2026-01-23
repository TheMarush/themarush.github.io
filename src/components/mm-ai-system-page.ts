import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { AiSystemData, AiSystemId } from "../data/aiView.js";
import { aiSystems } from "../data/aiView.js";
import "./mm-ai-input-module.ts";

@customElement("mm-ai-system-page")
export class MMAiSystemPage extends LitElement {
  @property({ type: String })
  systemId: AiSystemId = "claude";

  private get system(): AiSystemData {
    return aiSystems[this.systemId] ?? aiSystems.claude;
  }

  static styles = css`
    :host {
      display: block;
    }

    .page {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 1.5rem 1rem 2rem;
      max-width: 1120px;
      margin: 0 auto;
      color: #f9fafb;
    }

    .hero {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      border-bottom: 1px solid rgba(148, 163, 184, 0.4);
      padding-bottom: 1.25rem;
    }

    .system-label {
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #9ca3af;
    }

    .title-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      align-items: baseline;
      justify-content: space-between;
    }

    h1 {
      margin: 0;
      font-size: 1.7rem;
      letter-spacing: 0.04em;
    }

    .descriptor {
      font-size: 0.9rem;
      color: #e5e7eb;
      max-width: 420px;
    }

    .hero-text {
      font-size: 0.96rem;
      color: #d1d5db;
      line-height: 1.7;
      max-width: 720px;
    }

    .modules {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .footer {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
      gap: 1.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(55, 65, 81, 0.9);
      font-size: 0.9rem;
      color: #d1d5db;
    }

    @media (max-width: 900px) {
      .footer {
        grid-template-columns: minmax(0, 1fr);
      }
    }

    .footer-section-label {
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #9ca3af;
      margin-bottom: 0.4rem;
    }

    ul {
      margin: 0.2rem 0 0.7rem;
      padding-left: 1.2rem;
    }

    li {
      margin-bottom: 0.25rem;
    }
  `;

  render() {
    const system = this.system;
    const accent = system.accent;

    return html`
      <div class="page" style=${`--ai-accent: ${accent};`}>
        <section class="hero" aria-labelledby="system-title">
          <div class="system-label">Projects → AI view → ${system.id}</div>
          <div class="title-row">
            <h1 id="system-title">${system.title}</h1>
            <p class="descriptor">${system.descriptor}</p>
          </div>
          <p class="hero-text">${system.hero}</p>
        </section>

        <section class="modules" aria-label="Input modules">
          ${system.modules.map(
            (module, index) => html`
              <mm-ai-input-module
                .module=${module}
                .index=${index + 1}
                accent=${accent}
              ></mm-ai-input-module>
            `,
          )}
        </section>

        <section class="footer" aria-label="System profile and counter-reading">
          <div>
            <div class="footer-section-label">System profile</div>
            <div>
              <strong>Themes</strong>
              <ul>
                ${system.systemProfile.themes.map(
                  (t) => html`<li>${t}</li>`,
                )}
              </ul>
              <strong>Tone</strong>
              <ul>
                ${system.systemProfile.tone.map(
                  (t) => html`<li>${t}</li>`,
                )}
              </ul>
              <strong>Aesthetic pattern</strong>
              <ul>
                ${system.systemProfile.aesthetics.map(
                  (t) => html`<li>${t}</li>`,
                )}
              </ul>
            </div>
          </div>
          <div>
            <div class="footer-section-label">My counter-reading</div>
            <p>
              ${system.counterReading}
            </p>
          </div>
        </section>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-ai-system-page": MMAiSystemPage;
  }
}

