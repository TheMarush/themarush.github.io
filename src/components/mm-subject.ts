import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { Subject } from "../types/study.js";
import { navigate } from "../utils/navigate.js";

@customElement("mm-subject")
export class MMSubject extends LitElement {
  @property({ type: Object })
  subject!: Subject;

  @state() private _lightboxOpen = false;

  private _closeLightbox() { this._lightboxOpen = false; }
  private _openLightbox() { this._lightboxOpen = true; }

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") this._closeLightbox();
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("keydown", this._onKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("keydown", this._onKeyDown);
  }

  render() {
    if (!this.subject) {
      return html``;
    }

    const hasLinks = this.subject.externalLink || this.subject.projectLink;

    return html`
      <section class="subject-section" id="${this.subject.code.toLowerCase()}">
        <div class="subject-body">
          <div class="subject-text">
            <h3 class="subject-title">${this.subject.code} ${this.subject.name}</h3>
            <p class="subject-description">${this.subject.description}</p>
          </div>
          ${this.subject.image
            ? html`<img
                class="subject-image"
                src="${this.subject.image}"
                alt="${this.subject.name} certificate"
                loading="lazy"
                @click=${this._openLightbox}
              />`
            : ""}
        </div>
        ${this._lightboxOpen && this.subject.image
          ? html`<div class="lightbox-overlay" @click=${this._closeLightbox}>
              <button class="lightbox-close" @click=${this._closeLightbox} aria-label="Close">&#x2715;</button>
              <img class="lightbox-image" src="${this.subject.image}" alt="${this.subject.name} certificate" @click=${(e: Event) => e.stopPropagation()} />
            </div>`
          : ""}
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
                            navigate(link.url);
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

    .subject-body {
      display: flex;
      align-items: flex-start;
      gap: 1.25rem;
    }

    .subject-text {
      flex: 1;
      min-width: 0;
    }

    .subject-image {
      flex-shrink: 0;
      width: 240px;
      height: auto;
      border-radius: 0.375rem;
      object-fit: contain;
      cursor: pointer;
      transition: opacity 0.2s ease;
    }

    .subject-image:hover {
      opacity: 0.85;
    }

    .lightbox-overlay {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: zoom-out;
      animation: fadeIn 0.2s ease-out;
    }

    .lightbox-close {
      position: fixed;
      top: 1.25rem;
      right: 1.5rem;
      background: none;
      border: none;
      color: #fff;
      font-size: 1.75rem;
      line-height: 1;
      cursor: pointer;
      opacity: 0.75;
      transition: opacity 0.15s ease;
      z-index: 1001;
    }

    .lightbox-close:hover {
      opacity: 1;
    }

    .lightbox-image {
      max-width: 90vw;
      max-height: 90vh;
      border-radius: 0.5rem;
      object-fit: contain;
      cursor: default;
      animation: scaleIn 0.2s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes scaleIn {
      from { transform: scale(0.92); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
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

    @media (max-width: 480px) {
      .subject-body {
        flex-direction: column;
      }

      .subject-image {
        width: 100%;
        max-width: 260px;
      }
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
