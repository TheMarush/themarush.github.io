import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { Exhibit } from "../data/aiView.js";
import type { AiSystemId } from "../data/aiView.js";

@customElement("mm-ai-exhibit")
export class MMAiExhibit extends LitElement {
  @property({ type: Object })
  exhibit!: Exhibit;

  @property({ type: String })
  systemId!: AiSystemId;

  @property({ type: Number })
  index: number = 1;

  @property({ type: String })
  accent: string = "#52c8f4";

  @state()
  private detailsExpanded: boolean = false;

  @state()
  private lightboxOpen: boolean = false;

  private getImagePath(): string {
    // Map input types to file naming convention
    const inputTypeMap: Record<string, string> = {
      "DIARY": "diary",
      "IMAGE": "image",
      "CV": "cv",
      "WEBSITE": "cv",
      "CV / WEBSITE": "cv"
    };

    const inputType = inputTypeMap[this.exhibit.inputType] || "diary";
    // Grok uses .jpg, others use .png
    const extension = this.systemId === "grok" ? "jpg" : "png";
    return `/ai-gallery/${this.systemId}-${inputType}.${extension}`;
  }

  private getSystemDisplayName(): string {
    return this.systemId.charAt(0).toUpperCase() + this.systemId.slice(1);
  }

  private toggleDetails() {
    this.detailsExpanded = !this.detailsExpanded;
  }

  private openLightbox() {
    this.lightboxOpen = true;
  }

  private closeLightbox() {
    this.lightboxOpen = false;
  }

  static styles = css`
    :host {
      display: block;
    }

    .exhibit {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
      padding: 0;
      margin-bottom: 6rem;
    }

    .exhibit-meta {
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #6b7280;
      margin-bottom: 1.5rem;
      grid-column: 1 / -1;
    }

    .image-column {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .artwork-container {
      border-radius: 0.5rem;
      overflow: hidden;
      border: 1px solid rgba(148, 163, 184, 0.2);
      cursor: pointer;
      transition: transform 200ms ease, box-shadow 200ms ease;
    }

    .artwork-container:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    }

    .artwork-image {
      width: 100%;
      height: auto;
      display: block;
    }

    .content-column {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .artwork-info {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .artwork-title {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 600;
      letter-spacing: 0.01em;
      color: #f9fafb;
      line-height: 1.2;
    }

    .attribution {
      font-size: 0.85rem;
      color: #9ca3af;
      font-style: italic;
    }

    .interpretation-section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .statement-block {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .statement-label {
      font-size: 0.7rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #9ca3af;
    }

    .statement-text {
      font-size: 1rem;
      color: #e5e7eb;
      line-height: 1.8;
      margin: 0;
    }

    .artist-statement {
      border-left: 3px solid var(--accent-color, #52c8f4);
      padding-left: 1.25rem;
    }

    .my-response {
      border-left: 3px solid #f9fafb;
      padding-left: 1.25rem;
    }

    .my-response .statement-text {
      color: #f3f4f6;
    }

    .details-section {
      grid-column: 1 / -1;
    }

    .details-toggle {
      padding: 0.75rem 1rem;
      background: none;
      border: 1px solid rgba(148, 163, 184, 0.3);
      border-radius: 0.5rem;
      color: #9ca3af;
      font-size: 0.85rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 150ms ease;
    }

    .details-toggle:hover {
      border-color: rgba(148, 163, 184, 0.5);
      color: #d1d5db;
    }

    .details-arrow {
      transition: transform 200ms ease;
      display: inline-block;
    }

    .details-arrow.expanded {
      transform: rotate(90deg);
    }

    .details-content {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 1.5rem;
      border-radius: 0.5rem;
      background: radial-gradient(
          circle at top left,
          rgba(15, 23, 42, 0.5),
          rgba(15, 23, 42, 0.3)
        ),
        rgba(5, 8, 22, 0.3);
      border: 1px solid rgba(148, 163, 184, 0.2);
    }

    .detail-section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .detail-label {
      font-size: 0.75rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #6b7280;
    }

    .detail-text {
      font-size: 0.88rem;
      color: #9ca3af;
      line-height: 1.7;
    }

    /* Lightbox */
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.95);
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
      opacity: 0.8;
      transition: opacity 150ms;
    }

    .lightbox-close:hover {
      opacity: 1;
    }

    /* Responsive */
    @media (max-width: 900px) {
      .exhibit {
        grid-template-columns: 1fr;
        gap: 2rem;
        margin-bottom: 4rem;
      }

      .exhibit-meta,
      .image-column,
      .content-column,
      .details-section {
        grid-column: 1;
      }

      .artwork-title {
        font-size: 1.5rem;
      }
    }
  `;

  render() {
    const exhibit = this.exhibit;
    if (!exhibit) return null;

    const indexLabel = this.index.toString().padStart(2, "0");
    const isOdd = this.index % 2 === 1;

    const imageColumn = html`
      <div class="image-column">
        <div class="artwork-container" @click=${this.openLightbox}>
          <img
            src="${this.getImagePath()}"
            alt="${exhibit.artworkTitle}"
            class="artwork-image"
          />
        </div>
      </div>
    `;

    const contentColumn = html`
      <div class="content-column">
        <!-- Title & Attribution -->
        <div class="artwork-info">
          <h2 class="artwork-title">${exhibit.artworkTitle}</h2>
          <div class="attribution">
            Interpreted by ${this.getSystemDisplayName()}, 2025
          </div>
        </div>

        <!-- Artist Statement & My Response -->
        <div class="interpretation-section">
          <div class="statement-block artist-statement">
            <div class="statement-label">Artist Statement</div>
            <p class="statement-text">${exhibit.artistStatement}</p>
          </div>

          <div class="statement-block my-response">
            <div class="statement-label">My Response</div>
            ${exhibit.myResponse
              ? html`<p class="statement-text">${exhibit.myResponse}</p>`
              : html`<p class="statement-text" style="color: #6b7280; font-style: italic;">
                  [Response to be added]
                </p>`}
          </div>
        </div>
      </div>
    `;

    return html`
      <article
        class="exhibit"
        style=${`--accent-color: ${this.accent};`}
        aria-label=${exhibit.artworkTitle}
      >
        <!-- Exhibit Meta -->
        <div class="exhibit-meta">
          Exhibit ${indexLabel} — ${exhibit.inputType}
        </div>

        <!-- Alternating Layout: Image Left/Right -->
        ${isOdd ? imageColumn : contentColumn}
        ${isOdd ? contentColumn : imageColumn}

        <!-- Collapsible Details -->
        <div class="details-section">
          <button
            class="details-toggle"
            @click=${this.toggleDetails}
            aria-expanded=${this.detailsExpanded}
          >
            <span class="details-arrow ${this.detailsExpanded ? "expanded" : ""}">
              ▸
            </span>
            <span>About this interpretation</span>
          </button>

          ${this.detailsExpanded
            ? html`
                <div class="details-content">
                  <div class="detail-section">
                    <div class="detail-label">Title Explanation</div>
                    <p class="detail-text">${exhibit.titleExplanation}</p>
                  </div>

                  <div class="detail-section">
                    <div class="detail-label">Visual Concept</div>
                    <p class="detail-text">${exhibit.visualConcept}</p>
                  </div>

                  <div class="detail-section">
                    <div class="detail-label">Image Generation Prompt</div>
                    <p class="detail-text">${exhibit.imagePrompt}</p>
                  </div>
                </div>
              `
            : null}
        </div>
      </article>

      <!-- Lightbox -->
      ${this.lightboxOpen
        ? html`
            <div class="lightbox" @click=${this.closeLightbox}>
              <button class="lightbox-close" @click=${this.closeLightbox}>
                ×
              </button>
              <img
                src="${this.getImagePath()}"
                alt="${exhibit.artworkTitle}"
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
    "mm-ai-exhibit": MMAiExhibit;
  }
}
