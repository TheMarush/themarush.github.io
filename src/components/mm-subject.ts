import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { Subject } from "../types/study.js";

@customElement("mm-subject")
export class MMSubject extends LitElement {
  @property({ type: Object })
  subject!: Subject;

  render() {
    if (!this.subject) {
      return html``;
    }

    return html`
      <section class="subject-section" id="${this.subject.code.toLowerCase()}">
        <h3 class="subject-title">${this.subject.code} ${this.subject.name}</h3>
        <p class="subject-description">${this.subject.description}</p>
      </section>
    `;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .subject-section {
      margin-bottom: 2rem;
      padding: 1rem;
      border-left: 3px solid var(--button-bg, #52C8F4);
      background-color: rgba(82, 200, 244, 0.05);
      border-radius: 0.25rem;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .subject-section:hover {
      transform: translateX(4px);
      box-shadow: 0 2px 8px rgba(82, 200, 244, 0.2);
    }

    .subject-title {
      margin: 0 0 0.5rem 0;
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--button-bg, #52C8F4);
    }

    .subject-description {
      margin: 0;
      line-height: 1.6;
      color: inherit;
    }

    @media (prefers-color-scheme: light) {
      .subject-section {
        background-color: rgba(82, 200, 244, 0.08);
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-subject": MMSubject;
  }
}
