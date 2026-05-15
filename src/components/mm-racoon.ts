import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

type RacoonClickDetail = { imageUrl: string };

@customElement("mm-racoon")
export class Racoon extends LitElement {
  @property({ type: Boolean }) private isHovered = false;

  private fixedUrls = [
    "https://i.imgur.com/HaQZoZH.jpeg",
    "https://i.imgur.com/tAghBaA.jpg",
  ];

  private randomUrls = [
    "https://i.imgur.com/jiDnkKq.jpg",
    "https://i.imgur.com/evbLt60.jpg",
    "https://i.imgur.com/MudSgmc.jpg",
    "https://i.imgur.com/yWUddaf.jpg",
    "https://i.imgur.com/Q65qcNm.jpg",
    "https://i.imgur.com/Z1LpEhD.jpg",
    "https://i.imgur.com/2X5zBnj.jpg",
    "https://i.imgur.com/9FmlNFY.jpg",
    "https://i.imgur.com/J721UWk.jpg",
    "https://i.imgur.com/xO4ciJM.jpg",
    "https://i.imgur.com/Mh3vZlU.jpg",
    "https://i.imgur.com/VxfBb5E.jpg",
    "https://i.imgur.com/9HDyTvx.jpg",
    "https://i.imgur.com/KUYG2c1.jpg",
  ];

  private phase: "fixed" | "random" = "fixed";
  private fixedIndex = 0;
  private shuffledRandom: string[] = [];
  private randomIndex = 0;

  connectedCallback() {
    super.connectedCallback();
    this.shuffledRandom = this.shuffleArray([...this.randomUrls]);
  }

  private shuffleArray(arr: string[]): string[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  public advance(): string {
    let url: string;
    if (this.phase === "fixed") {
      url = this.fixedUrls[this.fixedIndex];
      this.fixedIndex++;
      if (this.fixedIndex >= this.fixedUrls.length) {
        this.phase = "random";
      }
    } else {
      url = this.shuffledRandom[this.randomIndex];
      this.randomIndex++;
      if (this.randomIndex >= this.shuffledRandom.length) {
        this.randomIndex = 0;
        this.shuffledRandom = this.shuffleArray([...this.randomUrls]);
      }
    }
    return url;
  }

  private handleClick() {
    const url = this.advance();
    this.dispatchEvent(
      new CustomEvent<RacoonClickDetail>("racoon-click", {
        detail: { imageUrl: url },
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
