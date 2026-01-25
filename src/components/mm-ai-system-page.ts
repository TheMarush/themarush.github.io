import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { PropertyValues } from "lit";
import type { AiSystemData, AiSystemId } from "../data/aiView.js";
import { aiSystems } from "../data/aiView.js";
import "./mm-ai-exhibit.ts";

@customElement("mm-ai-system-page")
export class MMAiSystemPage extends LitElement {
  @property({ type: String })
  systemId: AiSystemId = "claude";

  private get system(): AiSystemData {
    return aiSystems[this.systemId] ?? aiSystems.claude;
  }

  firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    // Start all exhibits simultaneously after first render
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.startAllExhibits();
      });
    });
  }

  private startAllExhibits() {
    const exhibits = this.shadowRoot?.querySelectorAll("mm-ai-exhibit");
    exhibits?.forEach((exhibit) => {
      // Trigger animation start on each exhibit
      (exhibit as any).startAnimationOnLoad?.();
    });
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

    .exhibits {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }
  `;

  render() {
    const system = this.system;
    const accent = system.accent;

    return html`
      <div class="page" style=${`--ai-accent: ${accent};`}>
        <section class="hero" aria-labelledby="system-title">
          <div class="title-row">
            <h1 id="system-title">${system.title}</h1>
            <p class="descriptor">${system.descriptor}</p>
          </div>
        </section>

        <section class="exhibits" aria-label="Gallery exhibits">
          ${system.exhibits.map(
            (exhibit, index) => html`
              <mm-ai-exhibit
                .exhibit=${exhibit}
                .systemId=${system.id}
                .index=${index + 1}
                accent=${accent}
              ></mm-ai-exhibit>
            `,
          )}
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
