import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("mm-ai-keyword-chips")
export class MMAiKeywordChips extends LitElement {
  @property({ type: Array })
  keywords: string[] = [];

  @property({ type: String })
  accent: string = "#52c8f4";

  static styles = css`
    :host {
      display: block;
    }

    .keywords {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem;
      font-size: 0.78rem;
    }

    .chip {
      --chip-accent: #52c8f4;
      padding: 0.2rem 0.55rem;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.8);
      color: #e5e7eb;
      background: rgba(15, 23, 42, 0.9);
      opacity: 0;
      transform: translateY(6px);
      animation: chip-in 0.4s ease-out forwards;
      animation-delay: calc(var(--chip-index, 0) * 80ms);
    }

    .chip::before {
      content: "";
      display: inline-block;
      width: 0.35rem;
      height: 0.35rem;
      border-radius: 999px;
      background: var(--chip-accent);
      margin-right: 0.3rem;
    }

    @keyframes chip-in {
      0% {
        opacity: 0;
        transform: translateY(6px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  render() {
    // Use inline style for accent per chip.
    return html`
      <div class="keywords" aria-label="System keywords">
        ${this.keywords.map(
          (kw, index) =>
            html`<span
              class="chip"
              style=${`--chip-accent: ${this.accent}; --chip-index: ${index};`}
              >${kw}</span
            >`,
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-ai-keyword-chips": MMAiKeywordChips;
  }
}

