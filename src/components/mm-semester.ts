import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./mm-subject.ts";
import type { Semester } from "../types/study.js";

@customElement("mm-semester")
export class MMSemester extends LitElement {
  @property({ type: Object })
  semester!: Semester;

  render() {
    if (!this.semester) {
      return html``;
    }

    return html`
      <div class="semester-container">
        <h2 class="semester-title">${this.semester.name}</h2>
        <p class="semester-note">${this.semester.note}</p>
        <div class="subjects-container">
          ${this.semester.subjects.map(
            (subject) => html`
              <mm-subject .subject=${subject}></mm-subject>
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

    .semester-container {
      padding: 1.5rem 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .semester-title {
      margin: 0 0 1.5rem 0;
      font-size: 2rem;
      font-weight: 700;
      color: var(--button-bg, #52C8F4);
      border-bottom: 2px solid var(--button-bg, #52C8F4);
      padding-bottom: 0.5rem;
    }

    .semester-note {
      margin: 0 0 2rem 0;
      line-height: 1.8;
      color: inherit;
      font-size: 1rem;
      font-style: italic;
    }

    .subjects-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    @media (max-width: 768px) {
      .semester-container {
        padding: 1rem;
      }

      .semester-title {
        font-size: 1.5rem;
      }

      .semester-note {
        font-size: 0.95rem;
        line-height: 1.6;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-semester": MMSemester;
  }
}
