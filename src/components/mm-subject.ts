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

    const hasLinks = this.subject.externalLink || this.subject.projectLink;

    return html`
      <section class="subject-section" id="${this.subject.code.toLowerCase()}">
        <h3 class="subject-title">${this.subject.code} ${this.subject.name}</h3>
        <p class="subject-description">${this.subject.description}</p>
        ${hasLinks
          ? html`
              <div class="subject-links">
                ${this.subject.externalLink
                  ? html`
                      <a
                        href="${this.subject.externalLink.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="subject-link external"
                      >
                        ${this.subject.externalLink.label}
                        <span aria-hidden="true">↗</span>
                      </a>
                    `
                  : ""}
                ${this.subject.projectLink
                  ? html`
                      <a
                        href="${this.subject.projectLink.url}"
                        class="subject-link project"
                        @click=${(e: Event) => {
                          e.preventDefault();
                          const link = this.subject.projectLink;
                          if (link) {
                            window.location.hash = link.url;
                          }
                        }}
                      >
                        ${this.subject.projectLink.label}
                        <span aria-hidden="true">→</span>
                      </a>
                    `
                  : ""}
              </div>
            `
          : ""}
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

    .subject-links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .subject-link {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.35rem 0.85rem;
      border-radius: 999px;
      border: 1px solid var(--button-bg, #52c8f4);
      color: var(--button-bg, #52c8f4);
      text-decoration: none;
      font-size: 0.85rem;
      transition: background-color 0.2s ease, color 0.2s ease;
    }

    .subject-link:hover {
      background-color: var(--button-bg, #52c8f4);
      color: #0f172a;
    }

    .subject-link:focus-visible {
      outline: 2px solid var(--button-bg, #52c8f4);
      outline-offset: 2px;
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
