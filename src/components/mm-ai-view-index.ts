import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { AiSystemData, AiSystemId } from "../data/aiView.js";
import { aiSystems, aiViewIntro } from "../data/aiView.js";
import "./mm-ai-system-page.ts";

const SYSTEM_ORDER: AiSystemId[] = ["gemini", "claude", "grok"];

@customElement("mm-ai-view-index")
export class MMAiViewIndex extends LitElement {
  @state()
  private activeSystem: AiSystemId | null = null;

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .page {
      max-width: 1120px;
      margin: 0 auto;
      padding: 1.5rem 1rem 2rem;
      color: #f9fafb;
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
      max-width: 720px;
      font-size: 0.96rem;
      color: #d1d5db;
      line-height: 1.7;
      margin-bottom: 1.75rem;
      white-space: pre-line;
    }

    .tiles {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }

    @media (max-width: 900px) {
      .tiles {
        grid-template-columns: minmax(0, 1fr);
      }
    }

    .tile {
      position: relative;
      border-radius: 1rem;
      border: 1px solid rgba(148, 163, 184, 0.4);
      background: radial-gradient(
          circle at top left,
          rgba(15, 23, 42, 0.96),
          rgba(15, 23, 42, 0.9)
        ),
        #020617;
      padding: 1.25rem 1.25rem 1.35rem;
      text-align: left;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      transition:
        transform 140ms ease-out,
        box-shadow 160ms ease-out,
        border-color 160ms ease-out,
        background 160ms ease-out;
    }

    .tile:hover,
    .tile:focus-visible {
      transform: translateY(-2px);
      box-shadow: 0 18px 40px rgba(15, 23, 42, 0.85);
      border-color: rgba(148, 163, 184, 0.6);
      outline: none;
    }

    .tile:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 2px;
    }

    .tile-label {
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #9ca3af;
    }

    .tile-title {
      font-size: 1.1rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .accent-dot {
      width: 0.55rem;
      height: 0.55rem;
      border-radius: 999px;
      box-shadow: 0 0 14px rgba(248, 250, 252, 0.7);
    }

    .tile-body {
      font-size: 0.9rem;
      color: #d1d5db;
      line-height: 1.6;
    }

    .tile-footer {
      margin-top: auto;
      font-size: 0.82rem;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      color: #e5e7eb;
    }

    .enter-arrow {
      font-size: 0.9rem;
    }

    .back-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1.25rem;
      font-size: 0.85rem;
      color: #e5e7eb;
    }

    .back-btn {
      background: none;
      border: 1px solid rgba(148, 163, 184, 0.6);
      border-radius: 999px;
      padding: 0.25rem 0.65rem;
      color: inherit;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      cursor: pointer;
      font-size: 0.82rem;
    }

    .back-btn:focus-visible {
      outline: 2px solid #52c8f4;
      outline-offset: 2px;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.syncFromLocation();
    window.addEventListener("hashchange", this.handleHashChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("hashchange", this.handleHashChange);
  }

  private handleHashChange = () => {
    this.syncFromLocation();
  };

  private syncFromLocation() {
    if (typeof window === "undefined") return;
    const hash = window.location.hash || "";
    const cleaned = hash.replace(/^#/, "");
    if (!cleaned.startsWith("/projects/ai-view")) {
      this.activeSystem = null;
      return;
    }

    const segments = cleaned.split("/").filter(Boolean);
    const maybeSystem = segments[2] as AiSystemId | undefined;
    if (maybeSystem && (maybeSystem in aiSystems)) {
      this.activeSystem = maybeSystem;
    } else {
      this.activeSystem = null;
    }
  }

  private setHash(path: string) {
    if (typeof window === "undefined") return;
    window.location.hash = path;
  }

  private handleEnterSystem(id: AiSystemId) {
    this.activeSystem = id;
    this.setHash(`/projects/ai-view/${id}`);
  }

  private handleBackToIndex() {
    this.activeSystem = null;
    this.setHash(`/projects/ai-view`);
  }

  private systemFor(id: AiSystemId): AiSystemData {
    return aiSystems[id];
  }

  render() {
    if (this.activeSystem) {
      return this.renderSystemPage(this.activeSystem);
    }
    return this.renderIndex();
  }

  private renderIndex() {
    return html`
      <div class="page">
        <div class="meta-label">Projects → AI view</div>
        <h1>Reimagined by AI</h1>
        <p class="intro">
          ${aiViewIntro}
        </p>
        <div
          class="tiles"
          aria-label="Choose a system to enter the AI view"
        >
          ${SYSTEM_ORDER.map((id) => {
            const system = this.systemFor(id);
            return html`
              <button
                type="button"
                class="tile"
                style=${`color: ${system.accent};`}
                @click=${() => this.handleEnterSystem(id)}
              >
                <div class="tile-label">System environment</div>
                <div class="tile-title">
                  <span
                    class="accent-dot"
                    style=${`background: ${system.accent};`}
                  ></span>
                  <span>${system.title}</span>
                </div>
                <p class="tile-body">${system.descriptor}</p>
                <div class="tile-footer">
                  <span class="enter-arrow" aria-hidden="true"
                    >enter system →</span
                  >
                </div>
              </button>
            `;
          })}
        </div>
      </div>
    `;
  }

  private renderSystemPage(id: AiSystemId) {
    const system = this.systemFor(id);
    return html`
      <div class="page">
        <div class="back-row">
          <button
            type="button"
            class="back-btn"
            @click=${this.handleBackToIndex}
          >
            <span aria-hidden="true">←</span>
            <span>Back to AI view</span>
          </button>
          <span>${system.title}</span>
        </div>
        <mm-ai-system-page .systemId=${id}></mm-ai-system-page>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-ai-view-index": MMAiViewIndex;
  }
}

