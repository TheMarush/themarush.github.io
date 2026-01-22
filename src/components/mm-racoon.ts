import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("mm-racoon")
export class Racoon extends LitElement {
  @property({ type: Boolean }) private isHovered = false;

  private handleClick() {
    this.dispatchEvent(
      new CustomEvent("racoon-click", {
        detail: { imageUrl: "https://i.imgur.com/HaQZoZH.jpeg" },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private handleMouseEnter() {
    this.isHovered = true;
  }

  private handleMouseLeave() {
    this.isHovered = false;
  }

  render() {
    return html`
      <div
        class="racoon-container ${this.isHovered ? "hovered" : ""}"
        @click=${this.handleClick}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <img src="/racoon.png" alt="Racoon" class="racoon-image" />
      </div>
    `;
  }

  static styles = css`
    :host {
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 100;
      pointer-events: auto;
    }

    .racoon-container {
      position: relative;
      cursor: pointer;
      overflow: hidden;
      height: 500px;
      display: flex;
      align-items: flex-end;
    }

    .racoon-image {
      display: block;
      height: auto;
      max-width: 200px;
      width: auto;
      user-select: none;
      -webkit-user-drag: none;
      transform: translateY(80%);
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      will-change: transform;
    }

    .racoon-container.hovered .racoon-image {
      transform: translateY(0);
    }

    @media (max-width: 768px) {
      .racoon-image {
        max-width: 150px;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-racoon": Racoon;
  }
}
