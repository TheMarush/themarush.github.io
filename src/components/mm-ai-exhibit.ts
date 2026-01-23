import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { Exhibit } from "../data/aiView.js";

@customElement("mm-ai-exhibit")
export class MMAiExhibit extends LitElement {
  @property({ type: Object })
  exhibit!: Exhibit;

  @property({ type: Number })
  index: number = 1;

  @property({ type: String })
  accent: string = "#52c8f4";

  static styles = css`
    :host {
      display: block;
    }

    .exhibit {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 2rem 1.5rem;
      border-radius: 1rem;
      border: 1px solid rgba(148, 163, 184, 0.3);
      background: radial-gradient(
          circle at top left,
          rgba(15, 23, 42, 0.98),
          rgba(15, 23, 42, 0.92)
        ),
        #050816;
    }

    .exhibit-header {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(148, 163, 184, 0.25);
    }

    .input-label {
      font-size: 0.75rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #9ca3af;
    }

    .artwork-title {
      margin: 0;
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      color: #f9fafb;
    }

    .title-explanation {
      font-size: 0.88rem;
      color: #d1d5db;
      line-height: 1.6;
      font-style: italic;
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }

    .section-label {
      font-size: 0.75rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #9ca3af;
    }

    .frame {
      border-radius: 0.75rem;
      border: 1px solid rgba(148, 163, 184, 0.3);
      background: radial-gradient(
          circle at top left,
          rgba(15, 23, 42, 0.9),
          rgba(15, 23, 42, 0.8)
        ),
        #020617;
      padding: 1rem;
    }

    .frame--image {
      min-height: 320px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: radial-gradient(
        circle at center,
        rgba(148, 163, 184, 0.12),
        rgba(15, 23, 42, 0.5) 70%
      );
      position: relative;
      overflow: hidden;
    }

    .frame--image::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        135deg,
        transparent 0%,
        rgba(148, 163, 184, 0.05) 50%,
        transparent 100%
      );
    }

    .image-placeholder {
      font-size: 0.8rem;
      color: #6b7280;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      z-index: 1;
    }

    .text-content {
      font-size: 0.92rem;
      color: #e5e7eb;
      line-height: 1.7;
      white-space: pre-wrap;
    }

    .artist-statement {
      font-size: 0.94rem;
      color: #f3f4f6;
      line-height: 1.7;
      font-style: italic;
      border-left: 3px solid var(--accent-color, #52c8f4);
      padding-left: 1rem;
    }

    .response {
      font-size: 0.88rem;
      color: #d1d5db;
      line-height: 1.6;
      margin-top: 0.5rem;
      padding-top: 1.25rem;
      border-top: 1px solid rgba(31, 41, 55, 0.9);
    }

    @media (max-width: 900px) {
      .exhibit {
        padding: 1.5rem 1.25rem;
      }
    }
  `;

  render() {
    const exhibit = this.exhibit;
    if (!exhibit) return null;

    const indexLabel = this.index.toString().padStart(2, "0");

    return html`
      <article
        class="exhibit"
        style=${`--accent-color: ${this.accent};`}
        aria-label=${exhibit.artworkTitle}
      >
        <div class="exhibit-header">
          <div class="input-label">
            Exhibit ${indexLabel} — ${exhibit.inputType}
          </div>
          <h2 class="artwork-title">${exhibit.artworkTitle}</h2>
          <p class="title-explanation">${exhibit.titleExplanation}</p>
        </div>

        <div class="section">
          <div class="section-label">Visual Concept</div>
          <div class="frame">
            <p class="text-content">${exhibit.visualConcept}</p>
          </div>
        </div>

        <div class="section">
          <div class="section-label">Image Prompt</div>
          <div class="frame">
            <p class="text-content">${exhibit.imagePrompt}</p>
          </div>
        </div>

        <div class="section">
          <div class="section-label">Artwork Preview</div>
          <div class="frame frame--image">
            <span class="image-placeholder">Image will be added manually</span>
          </div>
        </div>

        <div class="section">
          <div class="section-label">Artist Statement</div>
          <p class="artist-statement">${exhibit.artistStatement}</p>
        </div>

        <div class="response">
          <div class="section-label">My Response</div>
          ${exhibit.myResponse
            ? html`<p class="text-content">${exhibit.myResponse}</p>`
            : html`<p class="text-content" style="color: #6b7280; font-style: italic;">
                [Response to be added]
              </p>`}
        </div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-ai-exhibit": MMAiExhibit;
  }
}
