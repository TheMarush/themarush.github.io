import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./mm-testimonial.ts";
import type { Testimonial } from "../types/testimonial.js";

@customElement("mm-testimonials")
export class MMTestimonials extends LitElement {
  @property({ type: Array })
  testimonials: Testimonial[] = [];

  render() {
    return html`
      <div class="testimonials-container">
        <h2 class="testimonials-title">Testimonials</h2>
        <p class="testimonials-intro">For English translation click on the card!</p>
        <div class="testimonials-grid">
          ${this.testimonials.map(
            (testimonial) => html`
              <mm-testimonial .testimonial=${testimonial}></mm-testimonial>
            `,
          )}
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .testimonials-container {
      padding: 1.5rem 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .testimonials-title {
      margin: 0 0 1.5rem 0;
      font-size: 2rem;
      font-weight: 700;
      color: var(--button-bg, #52C8F4);
      border-bottom: 2px solid var(--button-bg, #52C8F4);
      padding-bottom: 0.5rem;
    }

    .testimonials-intro {
      text-align: center;
      font-style: italic;
      margin: 0 0 1.25rem 0;
      color: inherit;
    }

    .testimonials-grid {
      column-count: 2;
      column-gap: 2em;
      padding: 2em 0;
    }

    .testimonials-grid mm-testimonial {
      display: inline-block;
      width: 100%;
      margin-bottom: 2em;
      break-inside: avoid;
    }

    @media (max-width: 768px) {
      .testimonials-container {
        padding: 1rem;
      }

      .testimonials-title {
        font-size: 1.5rem;
      }

      .testimonials-grid {
        column-count: 1;
        column-gap: 1em;
      }

      .testimonials-grid mm-testimonial {
        margin-bottom: 1em;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-testimonials": MMTestimonials;
  }
}
