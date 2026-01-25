import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("mm-back-button")
export class MMBackButton extends LitElement {
  @property({ type: String })
  label: string = "Back";

  @property({ type: String })
  href: string | null = null;

  static styles = css`
    :host {
      display: block;
    }

    .back-btn {
      background: none;
      border: 1px solid rgba(148, 163, 184, 0.6);
      border-radius: 999px;
      padding: 0.25rem 0.65rem;
      color: inherit;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      cursor: pointer;
      font-size: 0.82rem;
    }

    .back-btn:focus-visible {
      outline: 2px solid #52c8f4;
      outline-offset: 2px;
    }
  `;

  private handleClick() {
    if (this.href) {
      window.location.hash = this.href;
    } else {
      this.dispatchEvent(new CustomEvent("back", { bubbles: true }));
    }
  }

  render() {
    return html`
      <button type="button" class="back-btn" @click=${this.handleClick}>
        <span aria-hidden="true">←</span>
        <span>${this.label}</span>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-back-button": MMBackButton;
  }
}
