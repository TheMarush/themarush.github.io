import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { Testimonial } from "../types/testimonial.js";

@customElement("mm-testimonial")
export class MMTestimonial extends LitElement {
  @property({ type: Object })
  testimonial!: Testimonial;

  @state()
  private isFlipped = false;

  firstUpdated() {
    // Wait for next frame to ensure layout is complete
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.updateCardHeight();
      });
    });
  }

  updated() {
    // Use requestAnimationFrame to ensure DOM is fully rendered
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.updateCardHeight();
      });
    });
  }

  connectedCallback() {
    super.connectedCallback();
    // Also try after a short delay to ensure everything is laid out
    setTimeout(() => {
      this.updateCardHeight();
    }, 100);
  }

  private updateCardHeight() {
    const frontElement = this.shadowRoot?.querySelector(".front") as HTMLElement;
    const backElement = this.shadowRoot?.querySelector(".back") as HTMLElement;
    const card = this.shadowRoot?.querySelector(".flip-card") as HTMLElement;

    if (!frontElement || !backElement || !card) {
      return;
    }

    // Wait for card to have a width (might be 0 on first render)
    const cardWidth = card.offsetWidth;
    if (cardWidth === 0) {
      // Retry after a short delay if width isn't available yet
      setTimeout(() => this.updateCardHeight(), 50);
      return;
    }

    // Create a temporary hidden container for measurement
    const measureContainer = document.createElement("div");
    measureContainer.style.position = "absolute";
    measureContainer.style.visibility = "hidden";
    measureContainer.style.width = `${cardWidth}px`;
    measureContainer.style.padding = "1.5em";
    measureContainer.style.boxSizing = "border-box";
    measureContainer.style.display = "flex";
    measureContainer.style.flexDirection = "column";
    measureContainer.style.justifyContent = "center";
    measureContainer.style.lineHeight = "1.6";
    measureContainer.style.fontSize = "inherit";
    measureContainer.style.wordWrap = "break-word";
    measureContainer.style.overflowWrap = "break-word";
    measureContainer.style.hyphens = "auto";

    // Measure front content
    const frontContent = frontElement.innerHTML;
    measureContainer.innerHTML = frontContent;
    document.body.appendChild(measureContainer);
    const frontHeight = measureContainer.offsetHeight;
    document.body.removeChild(measureContainer);

    // Measure back content
    const backContent = backElement.innerHTML;
    measureContainer.innerHTML = backContent;
    document.body.appendChild(measureContainer);
    const backHeight = measureContainer.offsetHeight;
    document.body.removeChild(measureContainer);

    // Set card height to the maximum of both, with a small safety margin
    const maxHeight = Math.max(frontHeight, backHeight);
    if (maxHeight > 0) {
      // Add a small safety margin (about 4px) to prevent overflow
      card.style.height = `${maxHeight + 4}px`;
    }
  }

  private handleClick() {
    this.isFlipped = !this.isFlipped;
  }

  render() {
    if (!this.testimonial) {
      return html``;
    }

    return html`
      <div
        class="flip-card ${this.isFlipped ? "flip" : ""}"
        @click=${this.handleClick}
      >
        <div class="flip-card-inner tm-border tm-border-${this.testimonial.color}">
          <div class="front">
            <p>${this.testimonial.front}</p>
            <footer><em>${this.testimonial.footer}</em></footer>
          </div>
          <div class="back">
            <p>${this.testimonial.back}</p>
            <footer><em>${this.testimonial.footer}</em></footer>
          </div>
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .flip-card {
      width: 100%;
      perspective: 1000px;
      cursor: pointer;
      box-sizing: border-box;
    }

    .flip-card:hover .flip-card-inner {
      transform: scale(1.02);
    }

    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      border-radius: 0.625rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      box-sizing: border-box;
    }

    .flip-card.flip .flip-card-inner {
      transform: rotateY(180deg) scale(1);
    }

    .front,
    .back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1.5em;
      border-radius: 0.625rem;
      box-sizing: border-box;
      background-color: #111;
      color: #fff;
      overflow: hidden;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }

    .back {
      transform: rotateY(180deg);
    }

    .tm-border {
      border-width: 0.125rem;
      border-style: solid;
    }

    .flip-card-inner.tm-border {
      border-width: 0.125rem;
      border-style: solid;
    }

    .tm-border-red {
      border-color: #fbadad;
    }

    .tm-border-blue {
      border-color: #c3ddfd;
    }

    .tm-border-yellow {
      border-color: #fef3b5;
    }

    .tm-border-purple {
      border-color: #d8b4fe;
    }

    .tm-border-green {
      border-color: #b7e4c7;
    }

    .tm-border-orange {
      border-color: #fcd5b5;
    }

    p {
      margin: 0 0 1em 0;
      line-height: 1.6;
      white-space: pre-line;
      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
      max-width: 100%;
      overflow: hidden;
    }

    footer {
      text-align: right;
      font-size: 0.9em;
      color: #cccccc;
      font-style: italic;
      margin-top: auto;
    }

    @media (max-width: 768px) {
      .front,
      .back {
        padding: 1rem;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-testimonial": MMTestimonial;
  }
}
