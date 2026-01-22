import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("mm-button")
export class MMButon extends LitElement {
  @property({ type: String })
  cta: string = "Click me";

  @property({ type: Function })
  onClick?: () => void;

  render() {
    return html`
    <button class="mm-button" @click=${this._onClick}>
      ${this.cta}
    </button>
    `;
  }

  private _onClick() {
    this.onClick?.();
  }

  static styles = css`
    button.mm-button {
        display: block;
        font-size: 1.25rem;
        margin: 0.125rem;
        padding: 0.5rem 0.75rem;
        border-radius: 0.3rem;
        font-weight: bold;
        border: none;
        cursor: pointer;
        text-decoration: none;
        text-align: center;
        transition: transform var(--transition-time) ease, background-color var(--transition-time) ease, color var(--transition-time) ease;
        width: 12.5rem;
        background-color: var(--button-bg, #52C8F4);
        color: var(--button-color, #000);
    }

    button.mm-button:hover {
      transform: scale(1.05);
      background-color: #0b76b4;
      color: #fff;
    }
      
    button.mm-button:hover {
      border-color: #0b76b4;
    }
    button.mm-button:focus,
    button.mm-button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
    button.mm-button {
        background-color: #f9f9f9;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-button": MMButon;
  }
}
