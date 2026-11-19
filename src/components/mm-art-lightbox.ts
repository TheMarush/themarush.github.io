import { css, html, LitElement, nothing } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { keyed } from "lit/directives/keyed.js";
import { type Artwork, artSrcset, artWebp, collectionName } from "../data/art.js";

/** Fired when the lightbox closes. `index` is the piece that was showing last. */
export type LightboxCloseEvent = CustomEvent<{ index: number }>;

/* Room around the artwork: the close button above it, the label below it */
const SIDE_SPACE = 32;
const LABEL_SPACE = 176;
const SWIPE_DISTANCE = 50;

/**
 * Shows one artwork full-screen on a dark backdrop, with its wall label.
 * Opened from a list (`show(list, index)`), it also steps to the previous and next piece
 * with buttons, arrow keys and swipes. Closes with Esc, the close button, or a tap outside.
 */
@customElement("mm-art-lightbox")
export class MMArtLightbox extends LitElement {
  @state() private list: Artwork[] = [];
  @state() private index = 0;
  @query("dialog") private dialog!: HTMLDialogElement;
  private touchStart: { x: number; y: number } | null = null;

  async show(list: Artwork[], index = 0) {
    this.list = list;
    this.index = index;
    await this.updateComplete;
    document.documentElement.style.overflow = "hidden";
    if (!this.dialog.open) this.dialog.showModal();
    this.preloadNeighbours();
  }

  close() {
    if (this.dialog?.open) this.dialog.close();
  }

  private go(step: number) {
    const next = this.index + step;
    if (next < 0 || next >= this.list.length) return;
    this.index = next;
    this.preloadNeighbours();
  }

  /* The image's on-screen width, so the browser picks a fitting WebP (portraits are limited by height) */
  private sizesFor(art: Artwork) {
    const byWidth = window.innerWidth - SIDE_SPACE;
    const byHeight = (window.innerHeight - LABEL_SPACE) * (art.width / art.height);
    return `${Math.max(1, Math.round(Math.min(byWidth, byHeight)))}px`;
  }

  private preloadNeighbours() {
    for (const art of [this.list[this.index - 1], this.list[this.index + 1]]) {
      if (!art) continue;
      const img = new Image();
      img.sizes = this.sizesFor(art);
      img.srcset = artSrcset(art);
    }
  }

  /* Fires for Esc, the close button and taps outside alike */
  private onClose() {
    document.documentElement.style.overflow = "";
    this.dispatchEvent(new CustomEvent("lightbox-close", { detail: { index: this.index } }));
    this.list = [];
  }

  /* A tap anywhere that isn't the artwork, its label or a button counts as "outside" */
  private onClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (!target.closest("img, figcaption, button")) this.close();
  }

  private onKeydown(e: KeyboardEvent) {
    if (e.key === "ArrowLeft") this.go(-1);
    else if (e.key === "ArrowRight") this.go(1);
  }

  private onTouchStart(e: TouchEvent) {
    const t = e.touches[0];
    this.touchStart = e.touches.length === 1 ? { x: t.clientX, y: t.clientY } : null;
  }

  /* A mostly sideways swipe steps through the list; pinch-zooms and vertical drags are left alone */
  private onTouchEnd(e: TouchEvent) {
    if (!this.touchStart) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - this.touchStart.x;
    const dy = t.clientY - this.touchStart.y;
    this.touchStart = null;
    if (Math.abs(dx) > SWIPE_DISTANCE && Math.abs(dx) > Math.abs(dy) * 1.5) this.go(dx < 0 ? 1 : -1);
  }

  render() {
    const art = this.list[this.index];
    const many = this.list.length > 1;
    return html`
      <dialog
        aria-label=${art?.title ?? art?.alt ?? "Artwork"}
        @close=${this.onClose}
        @click=${this.onClick}
        @keydown=${this.onKeydown}
        @touchstart=${{ handleEvent: (e: TouchEvent) => this.onTouchStart(e), passive: true }}
        @touchend=${this.onTouchEnd}>
        ${
          art
            ? html`
              <button type="button" class="close" aria-label="Close" @click=${this.close}>×</button>
              ${many ? this.renderStep(-1, "Previous artwork", "‹") : nothing}
              ${many ? this.renderStep(1, "Next artwork", "›") : nothing}
              <figure>
                ${keyed(
                  art.src,
                  html`<img
                    src=${artWebp(art, 1400)}
                    srcset=${artSrcset(art)}
                    sizes=${this.sizesFor(art)}
                    width=${art.width}
                    height=${art.height}
                    alt=${art.alt} />`,
                )}
                ${this.renderLabel(art)}
              </figure>
            `
            : nothing
        }
      </dialog>
    `;
  }

  /* Kept in the DOM at the ends of the list (just inactive), so keyboard focus never falls off it */
  private renderStep(step: number, label: string, glyph: string) {
    const target = this.index + step;
    const inactive = target < 0 || target >= this.list.length;
    return html`
      <button
        type="button"
        class="step ${step < 0 ? "prev" : "next"}"
        aria-label=${label}
        aria-disabled=${inactive ? "true" : "false"}
        @click=${() => this.go(step)}>
        <span aria-hidden="true">${glyph}</span>
      </button>
    `;
  }

  private renderLabel(art: Artwork) {
    const room = collectionName(art);
    if (!art.title && !art.technique && !room) return nothing;
    return html`
      <figcaption aria-live="polite">
        ${room ? html`<span class="room">${room}</span>` : nothing}
        ${art.title ? html`<span class="title">${art.title}</span>` : nothing}
        ${art.technique ? html`<span class="technique">${art.technique}</span>` : nothing}
      </figcaption>
    `;
  }

  static styles = css`
    :host {
      --paper: #f4efe6;
      --text: #e4e0d8;
      --muted: #b5b0a7;
      --mono: "IBM Plex Mono", ui-monospace, monospace;
      --serif: var(--font-heading, "Lora", Georgia, serif);
    }

    dialog {
      width: 100%;
      height: 100%;
      max-width: 100vw;
      max-height: 100dvh;
      margin: 0;
      padding: 3.5rem 1rem 1rem;
      box-sizing: border-box;
      border: 0;
      /* The dialog fills the screen, so its own background does the dimming */
      background: rgba(10, 10, 10, 0.97);
      color: var(--text);
      overscroll-behavior: contain;
    }

    dialog[open] {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    dialog::backdrop {
      background: rgba(0, 0, 0, 0.5);
    }

    figure {
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 100%;
      max-height: 100%;
    }

    img {
      display: block;
      max-width: 100%;
      max-height: calc(100dvh - 11rem);
      width: auto;
      height: auto;
      object-fit: contain;
      animation: appear 0.3s ease;
    }

    @keyframes appear {
      from {
        opacity: 0;
      }
    }

    figcaption {
      margin-top: 1rem;
      text-align: center;
    }

    figcaption span {
      display: block;
    }

    .room {
      font-family: var(--mono);
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 0.3rem;
    }

    .title {
      font-family: var(--serif);
      font-style: italic;
      font-size: 1.3rem;
      color: var(--paper);
    }

    .technique {
      margin-top: 0.2rem;
      font-family: var(--mono);
      font-size: 0.8rem;
      color: var(--muted);
    }

    button {
      position: fixed;
      width: 2.75rem;
      height: 2.75rem;
      padding: 0;
      border: 1px solid rgba(244, 239, 230, 0.3);
      border-radius: 50%;
      background: rgba(20, 20, 20, 0.8);
      color: var(--paper);
      font-size: 1.6rem;
      line-height: 1;
      cursor: pointer;
    }

    button:hover {
      border-color: var(--paper);
    }

    button:focus-visible {
      outline: 3px solid #ffd95c;
      outline-offset: 3px;
    }

    .close {
      top: 0.75rem;
      right: 0.75rem;
    }

    .step {
      top: 50%;
      transform: translateY(-50%);
      font-size: 2rem;
    }

    .step span {
      display: block;
      margin-top: -0.2rem;
    }

    .prev {
      left: 0.75rem;
    }

    .next {
      right: 0.75rem;
    }

    .step[aria-disabled="true"] {
      opacity: 0.25;
      cursor: default;
    }

    .step[aria-disabled="true"]:hover {
      border-color: rgba(244, 239, 230, 0.3);
    }

    /* Phones: the arrows move under the artwork, either side of its label, so they don't cover it */
    @media (max-width: 700px) {
      .step {
        top: auto;
        bottom: 1rem;
        transform: none;
      }

      figcaption {
        max-width: calc(100vw - 9rem);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      img {
        animation: none;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-art-lightbox": MMArtLightbox;
  }
}
