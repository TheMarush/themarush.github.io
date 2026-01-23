import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { AiModule } from "../data/aiView.js";
import "./mm-progressive-reveal.ts";
import "./mm-ai-keyword-chips.ts";

@customElement("mm-ai-input-module")
export class MMAiInputModule extends LitElement {
  @property({ type: Object })
  module!: AiModule;

  @property({ type: Number })
  index: number = 1;

  @property({ type: String })
  accent: string = "#52c8f4";

  @state()
  private isProcessing = false;

  @state()
  private isTyping = false;

  @state()
  private imageVisible = false;

  @state()
  private keywordsVisible = false;

  @state()
  private visibleSummary: string = "";

  private typingTimer: number | null = null;

  static styles = css`
    :host {
      display: block;
    }

    .module {
      display: grid;
      grid-template-columns: minmax(0, 1.05fr) minmax(0, 1.25fr);
      gap: 1.5rem;
      padding: 1.5rem 1.25rem;
      border-radius: 1rem;
      border: 1px solid rgba(148, 163, 184, 0.4);
      background: radial-gradient(
          circle at top left,
          rgba(15, 23, 42, 0.98),
          rgba(15, 23, 42, 0.92)
        ),
        #050816;
    }

    @media (max-width: 900px) {
      .module {
        grid-template-columns: minmax(0, 1fr);
      }
    }

    .column {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      font-size: 0.92rem;
    }

    .label-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 0.5rem;
    }

    .input-label {
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #9ca3af;
      white-space: nowrap;
    }

    .module-title {
      margin: 0.15rem 0 0 0;
      font-size: 1rem;
      font-weight: 600;
    }

    .metadata {
      font-size: 0.75rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #9ca3af;
    }

    .section-label {
      font-size: 0.8rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #9ca3af;
    }

    .frame {
      border-radius: 0.75rem;
      border: 1px solid rgba(148, 163, 184, 0.4);
      background: radial-gradient(
          circle at top left,
          rgba(15, 23, 42, 0.9),
          rgba(15, 23, 42, 0.8)
        ),
        #020617;
      padding: 0.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }

    .frame--image {
      min-height: 100px;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
    }

    .frame--image-placeholder {
      width: 100%;
      height: 120px;
      border-radius: 0.6rem;
      background: radial-gradient(
        circle at 0% 0%,
        rgba(148, 163, 184, 0.35),
        transparent 65%
      );
      opacity: 0;
      transform: translateY(10px);
      transition:
        opacity 500ms ease-out,
        transform 500ms ease-out;
    }

    .frame--image-placeholder.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .excerpt {
      font-size: 0.9rem;
      color: #e5e7eb;
      line-height: 1.6;
    }

    .processing {
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #9ca3af;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
    }

    .processing-dot {
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.9);
      background: transparent;
    }

    .processing-dot.active {
      border-color: transparent;
      background: var(--accent-color, #52c8f4);
      box-shadow: 0 0 10px rgba(248, 250, 252, 0.6);
    }

    .summary-text {
      font-size: 0.92rem;
      line-height: 1.6;
      color: #f9fafb;
      min-height: 1.2em;
    }

    .caret {
      display: inline-block;
      width: 0.1em;
      margin-left: 0.06em;
      height: 1em;
      background: var(--accent-color, #52c8f4);
      vertical-align: text-bottom;
      animation: caret-blink 1s steps(2, start) infinite;
    }

    @keyframes caret-blink {
      0%,
      50% {
        opacity: 1;
      }
      51%,
      100% {
        opacity: 0;
      }
    }

    .response {
      font-size: 0.88rem;
      color: #d1d5db;
      line-height: 1.6;
      margin-top: 0.75rem;
      border-top: 1px solid rgba(31, 41, 55, 0.9);
      padding-top: 0.75rem;
    }

    .response-label {
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #9ca3af;
      margin-bottom: 0.35rem;
    }

    @media (prefers-reduced-motion: reduce) {
      .frame--image-placeholder {
        transition: none;
      }

      .caret {
        animation: none;
      }
    }
  `;

  private handleProcessing() {
    this.isProcessing = true;
    this.isTyping = false;
    this.visibleSummary = "";
    this.stopTyping();
  }

  private handleTyping() {
    if (!this.module?.systemSummary) return;
    const full = this.module.systemSummary;
    const reduceMotion =
      typeof window !== "undefined" &&
      !!window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      this.visibleSummary = full;
      this.isTyping = false;
      return;
    }

    this.isTyping = true;
    this.visibleSummary = "";
    this.stopTyping();

    let index = 0;
    const step = () => {
      if (index >= full.length) {
        this.isTyping = false;
        this.typingTimer = null;
        return;
      }
      this.visibleSummary = full.slice(0, index + 1);
      index += 1;
      const delay = 18 + Math.floor(Math.random() * 12);
      this.typingTimer = window.setTimeout(step, delay);
    };

    step();
  }

  private handleImage() {
    this.imageVisible = true;
  }

  private handleKeywords() {
    this.keywordsVisible = true;
    this.isProcessing = false;
  }

  private stopTyping() {
    if (this.typingTimer !== null) {
      window.clearTimeout(this.typingTimer);
      this.typingTimer = null;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopTyping();
  }

  render() {
    const module = this.module;
    if (!module) return null;

    const indexLabel = this.index.toString().padStart(2, "0");

    return html`
      <mm-progressive-reveal
        @progressive-processing=${this.handleProcessing}
        @progressive-typing=${this.handleTyping}
        @progressive-image=${this.handleImage}
        @progressive-keywords=${this.handleKeywords}
      >
        <article
          class="module"
          style=${`--accent-color: ${this.accent};`}
          aria-label=${module.title}
        >
          <div class="column">
            <div class="label-row">
              <div>
                <div class="input-label">
                  INPUT ${indexLabel} — ${module.id.toUpperCase()}
                </div>
                <h2 class="module-title">${module.title}</h2>
              </div>
            </div>
            <div class="section-label">Human source layer</div>
            <div class="frame" aria-label="Human source excerpt">
              <div class="metadata">Screenshot frame · text excerpt</div>
              <p class="excerpt">${module.humanText}</p>
            </div>
          </div>

          <div class="column">
            <div class="label-row">
              <div class="section-label">System reinterpretation</div>
              <div
                class="processing"
                aria-live="polite"
                aria-atomic="true"
              >
                <span
                  class="processing-dot ${this.isProcessing
                    ? "active"
                    : ""}"
                ></span>
                <span>
                  ${this.isProcessing
                    ? "PROCESSING…"
                    : this.keywordsVisible
                      ? "OUTPUT"
                      : "IDLE"}
                </span>
              </div>
            </div>

            <div class="frame" aria-label="System summary and media">
              <div class="summary-text">
                ${this.visibleSummary}
                ${this.isTyping
                  ? html`<span class="caret" aria-hidden="true"></span>`
                  : null}
              </div>
            </div>

            <div
              class="frame frame--image"
              aria-label="Generated image placeholder"
            >
              <div
                class="frame--image-placeholder ${this.imageVisible
                  ? "visible"
                  : ""}"
              ></div>
            </div>

            ${this.keywordsVisible && this.module.keywords.length
              ? html`
                  <mm-ai-keyword-chips
                    .keywords=${this.module.keywords}
                    accent=${this.accent}
                  ></mm-ai-keyword-chips>
                `
              : null}

            <div class="response">
              <div class="response-label">My response</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                interdum urna non leo viverra, in dignissim eros euismod. Sed
                vehicula, massa quis porta mollis, lectus nisi gravida sem, nec
                ultrices mauris ipsum a lacus.
              </p>
            </div>
          </div>
        </article>
      </mm-progressive-reveal>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-ai-input-module": MMAiInputModule;
  }
}

