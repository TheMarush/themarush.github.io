import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("mm-modal")
export class Modal extends LitElement {
  @property() message = "";
  @property() image = "";
  @property({ type: Boolean }) closing = false;

  private handleOverlayClick(e: Event) {
    if (e.target === e.currentTarget) {
      this.dispatchEvent(new CustomEvent("close"));
    }
  }

  render() {
    return html`
      <div class="overlay" @click=${this.handleOverlayClick}>
        <div class="modal ${this.closing ? "closing" : ""}">
          ${this.image ? html`<img src=${this.image} alt="Modal image" />` : ""}
          <p>${this.message}</p>
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
      animation: fadeIn 0.3s ease-out;
    }

    :host([closing]) {
      animation: fadeOut 0.2s ease-in;
    }

    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .modal {
      background: #242424;
      color: rgba(255, 255, 255, 0.87);
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
      max-width: 400px;
      margin: 1rem;
      transform: scale(0.9);
      animation: modalIn 0.3s ease-out forwards;
    }

    @media (prefers-color-scheme: light) {
      .modal {
        background: #ffffff;
        color: #213547;
      }
    }

    .modal.closing {
      animation: modalOut 0.2s ease-in forwards;
    }

    img {
      width: 100%;
      max-width: 350px;
      height: auto;
      border-radius: 8px;
      margin-bottom: 1rem;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    p {
      margin: 0;
      text-align: center;
      font-weight: 500;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }

    @keyframes modalIn {
      from { transform: scale(0.9) translateY(-20px); opacity: 0; }
      to { transform: scale(1) translateY(0); opacity: 1; }
    }

    @keyframes modalOut {
      from { transform: scale(1) translateY(0); opacity: 1; }
      to { transform: scale(0.9) translateY(-20px); opacity: 0; }
    }
  `;
}
