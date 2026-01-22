import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

type RacoonClickDetail = { imageUrl: string };

@customElement("mm-racoon")
export class Racoon extends LitElement {
  @property({ type: Boolean }) private isHovered = false;

  private memeUrls = [
    "https://i.imgur.com/HaQZoZH.jpeg",
    "https://i.imgur.com/jiDnkKq.jpg",
    "https://i.imgur.com/evbLt60.jpg",
    "https://i.imgur.com/MudSgmc.jpg",
    "https://i.imgur.com/yWUddaf.jpg",
    "https://i.imgur.com/Q65qcNm.jpg",
    "https://i.imgur.com/Z1LpEhD.jpg",
    "https://i.imgur.com/2X5zBnj.jpg",
    "https://i.imgur.com/9FmlNFY.jpg",
  ];

  private currentIndex = 0;

  private handleClick() {
    const currentUrl = this.memeUrls[this.currentIndex];
    this.dispatchEvent(
      new CustomEvent<RacoonClickDetail>("racoon-click", {
        detail: { imageUrl: currentUrl },
        bubbles: true,
        composed: true,
      }),
    );
    this.currentIndex = (this.currentIndex + 1) % this.memeUrls.length;
  }

  private handleMouseEnter() {
    this.isHovered = true;
  }

  private handleMouseLeave() {
    this.isHovered = false;
  }

  render() {
    return html`
      <div class="racoon-container ${this.isHovered ? "hovered" : ""}">
        <img
          src="/racoon.png"
          alt="Racoon"
          class="racoon-image"
          @click=${this.handleClick}
          @mouseenter=${this.handleMouseEnter}
          @mouseleave=${this.handleMouseLeave}
        />
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
      overflow: hidden;
      display: flex;
      align-items: flex-end;
      pointer-events: none;
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
      cursor: pointer;
      pointer-events: auto;
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
