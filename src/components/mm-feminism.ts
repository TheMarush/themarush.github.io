import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { FeminismEntry } from "../data/feminism.js";
import { feminismEntries, feminismIntro } from "../data/feminism.js";
import "./mm-back-button.ts";

@customElement("mm-feminism")
export class MMFeminism extends LitElement {
  @state()
  private lightboxSrc: string | null = null;

  @state()
  private lightboxAlt: string = "";

  private openLightbox(src: string, alt: string) {
    this.lightboxSrc = src;
    this.lightboxAlt = alt;
  }

  private closeLightbox() {
    this.lightboxSrc = null;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("keydown", this.handleKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && this.lightboxSrc) {
      this.closeLightbox();
    }
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .page {
      max-width: 1120px;
      margin: 0 auto;
      padding: 1.5rem 1rem 3rem;
      color: #f9fafb;
    }

    .back-row {
      display: flex;
      align-items: center;
      margin-bottom: 1.25rem;
    }

    .meta-label {
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #9ca3af;
    }

    h1 {
      margin: 0.35rem 0 0.75rem;
      font-size: 1.9rem;
      letter-spacing: 0.04em;
    }

    .intro {
      font-size: 0.96rem;
      color: #d1d5db;
      line-height: 1.7;
      margin-bottom: 3rem;
      max-width: 720px;
    }

    /* ── entries ── */
    .entries {
      display: flex;
      flex-direction: column;
      gap: 4rem;
    }

    .entry {
      overflow: hidden; /* clearfix for floated image */
    }

    /* image — floated so text wraps around it */
    .entry-image-wrap {
      float: left;
      width: 42%;
      margin: 0.3rem 2.25rem 1.25rem 0;
      border-radius: 0.75rem;
      overflow: hidden;
      border: 1px solid rgba(148, 163, 184, 0.2);
      cursor: zoom-in;
      transition: transform 200ms ease, box-shadow 200ms ease;
    }

    .entry.reverse .entry-image-wrap {
      float: right;
      margin: 0.3rem 0 1.25rem 2.25rem;
    }

    .entry-image-wrap:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
    }

    .entry-image-wrap img {
      width: 100%;
      height: auto;
      display: block;
    }

    .entry-meta {
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #9ca3af;
    }

    .entry-title {
      margin: 0;
      font-size: 1.6rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      color: #f9fafb;
      line-height: 1.3;
    }

    .entry-divider {
      width: 2.5rem;
      height: 2px;
      background: var(--button-bg, #52c8f4);
      border: none;
      margin: 0;
    }

    .entry-body {
      font-size: 0.97rem;
      color: #d1d5db;
      line-height: 1.8;
      margin: 0;
      white-space: pre-line;
    }

    .entry-actions {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      margin-top: 0.5rem;
    }

    .action-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      width: fit-content;
      padding: 0.45rem 1rem;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.5);
      background: none;
      color: #e5e7eb;
      font-size: 0.85rem;
      text-decoration: none;
      cursor: pointer;
      transition: border-color 150ms ease, color 150ms ease, background 150ms ease;
    }

    .action-btn:hover {
      border-color: var(--button-bg, #52c8f4);
      color: var(--button-bg, #52c8f4);
      background: rgba(82, 200, 244, 0.06);
    }

    .disclaimer {
      font-size: 0.75rem;
      color: #6b7280;
      font-style: italic;
      margin: 0;
    }

    /* lightbox */
    .lightbox {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.93);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      cursor: pointer;
    }

    .lightbox-image {
      max-width: 90vw;
      max-height: 90vh;
      object-fit: contain;
      cursor: default;
      border-radius: 0.5rem;
    }

    .lightbox-close {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      background: none;
      border: none;
      color: #fff;
      font-size: 2rem;
      cursor: pointer;
      padding: 0.5rem;
      line-height: 1;
      opacity: 0.7;
      transition: opacity 150ms;
    }

    .lightbox-close:hover {
      opacity: 1;
    }

    /* responsive */
    @media (max-width: 700px) {
      .entry-image-wrap,
      .entry.reverse .entry-image-wrap {
        float: none;
        width: 100%;
        margin: 0 0 1.5rem 0;
      }

      h1 {
        font-size: 1.5rem;
      }
    }
  `;

  private renderEntry(entry: FeminismEntry, index: number) {
    const isEven = index % 2 === 1;
    return html`
      <article class="entry ${isEven ? "reverse" : ""}" aria-labelledby="fe-${entry.id}">
        <div
          class="entry-image-wrap"
          @click=${() => this.openLightbox(entry.image, entry.imageAlt)}
          role="button"
          tabindex="0"
          aria-label="Enlarge image: ${entry.imageAlt}"
          @keydown=${(e: KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") this.openLightbox(entry.image, entry.imageAlt);
          }}
        >
          <img src="${entry.image}" alt="${entry.imageAlt}" loading="lazy" />
        </div>
        <div class="entry-meta">${entry.meta}</div>
        <h2 id="fe-${entry.id}" class="entry-title">${entry.title}</h2>
        <hr class="entry-divider" />
        <p class="entry-body">${entry.body}</p>
        ${entry.pdf || entry.link ? html`
          <div class="entry-actions">
            ${entry.pdf ? html`
              <a
                class="action-btn"
                href="${entry.pdf.path}"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <span aria-hidden="true">↓</span>
                <span>${entry.pdf.label}</span>
              </a>
              <p class="disclaimer">${entry.pdf.disclaimer}</p>
            ` : null}
            ${entry.link ? html`
              <a
                class="action-btn"
                href="${entry.link.href}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>${entry.link.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ` : null}
          </div>
        ` : null}
      </article>
    `;
  }

  render() {
    return html`
      <div class="page">
        <div class="back-row">
          <mm-back-button label="Back to Projects" href="#/projects"></mm-back-button>
        </div>
        <div class="meta-label">Projects → Lifelong Feminist</div>
        <h1>Lifelong Feminist</h1>
        <p class="intro">${feminismIntro}</p>

        <div class="entries">
          ${feminismEntries.map((entry, i) => this.renderEntry(entry, i))}
        </div>
      </div>

      ${this.lightboxSrc
        ? html`
            <div class="lightbox" @click=${this.closeLightbox}>
              <button class="lightbox-close" @click=${this.closeLightbox} aria-label="Close">×</button>
              <img
                src="${this.lightboxSrc}"
                alt="${this.lightboxAlt}"
                class="lightbox-image"
                @click=${(e: Event) => e.stopPropagation()}
              />
            </div>
          `
        : null}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-feminism": MMFeminism;
  }
}
