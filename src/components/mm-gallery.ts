import { css, html, LitElement, nothing } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { type Artwork, artSrcset, artWebp, collections, historyArtworks } from "../data/art.js";
import { type GalleryImage, unframedSrcset } from "../data/gallery.js";
import { navigate, navigateWithAnchor } from "../utils/navigate.js";
import type { LightboxCloseEvent, MMArtLightbox } from "./mm-art-lightbox.js";
import "./mm-art-lightbox.ts";

const PROJECT_ROUTES: Record<string, { path: string; anchor?: string }> = {
  "google-cs": { path: "/projects/cybersecurity" },
  feminist: { path: "/projects/feminism" },
  "eu careers": { path: "/projects", anchor: "eu-ambassador-title" },
};

const SHOP_URL = "https://the-marush.tpopsite.com/";

/* The prologue and the first room load straight away; everything further down waits until it's near */
const EAGER_ROOMS = 2;

const isGalleryPath = () => window.location.pathname.replace(/\/+$/, "") === "/gallery";

@customElement("mm-gallery")
export class MMGallery extends LitElement {
  /** Photos for "The Marush, unframed" */
  @property({ type: Array })
  images: GalleryImage[] = [];

  /*
   * Every page is mounted at once, so eager images here would also download on the home page.
   * They only turn eager while /gallery is the page being shown.
   */
  @state() private active = isGalleryPath();

  /* Photos tapped into colour on touch screens, where there is no hover */
  @state() private revealed = new Set<string>();

  @query("mm-art-lightbox") private lightbox!: MMArtLightbox;

  private onPopState = () => {
    this.active = isGalleryPath();
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("popstate", this.onPopState);
  }

  disconnectedCallback() {
    window.removeEventListener("popstate", this.onPopState);
    super.disconnectedCallback();
  }

  private openArt(index: number) {
    this.lightbox.show(historyArtworks, index);
  }

  /* After closing, keyboard focus lands on the piece you were last looking at */
  private onLightboxClose(e: LightboxCloseEvent) {
    this.renderRoot.querySelector<HTMLButtonElement>(`.work-button[data-index="${e.detail.index}"]`)?.focus();
  }

  private toggleColour(img: GalleryImage, e: MouseEvent) {
    if (!window.matchMedia("(hover: none)").matches) return;
    if ((e.target as HTMLElement).closest("button, a")) return;
    const next = new Set(this.revealed);
    if (!next.delete(img.id)) next.add(img.id);
    this.revealed = next;
  }

  render() {
    return html`
      <div class="gallery-container">
        ${this.renderHistory()} ${this.renderUnframed()}
      </div>
      <mm-art-lightbox @lightbox-close=${this.onLightboxClose}></mm-art-lightbox>
    `;
  }

  // ── Section 1: History ──

  private renderHistory() {
    return html`
      <section class="history" aria-labelledby="history-title">
        <h2 class="section-title" id="history-title">History</h2>
        ${collections.map((room, roomIndex) => {
          const works = historyArtworks.filter((a) => a.collection === room.id);
          const eager = this.active && roomIndex < EAGER_ROOMS;
          const isPrologue = "prologue" in room && room.prologue;
          const headingId = `room-${room.id}`;
          return html`
            <section class="room ${isPrologue ? "prologue" : ""}" aria-labelledby=${headingId}>
              <h3 class="room-title" id=${headingId}>${room.name}</h3>
              ${
                isPrologue
                  ? html`<div class="prologue-layout">
                      <ul class="works" role="list">
                        ${works.map((art) => this.renderWork(art, eager, isPrologue))}
                      </ul>
                      ${this.renderPrologueText()}
                    </div>`
                  : html`<ul class="works" role="list">
                      ${works.map((art) => this.renderWork(art, eager, isPrologue))}
                    </ul>`
              }
            </section>
          `;
        })}
      </section>
    `;
  }

  /* Marush's own words beside The Beginning: right of it on desktop, below it on phones */
  private renderPrologueText() {
    return html`
      <div class="prologue-text">
        <h4>Where it started</h4>
        <p>
          I started drawing at four, in kindergarten. At six, I got into an art school with a strange style and a
          drawing of an old lady cooking. Only later did I find out why that drawing mattered: kids don’t usually
          notice old people like that. I got in because I could see what others might miss.
        </p>
        <p>That stayed with me.</p>
        <p>
          Later, I tried to make my art perfect. I learned strokes, shading, perspective (my favourite, because it
          came with descriptive geometry). But perfectionism took the fun out of it. The more perfect I tried to be,
          the less joy it brought. So art kept leaving my life and coming back whenever it pleased.
        </p>
        <p>
          I only started paying real attention to it recently, when I realised how much expressing myself helps with
          depression. <strong>The opposite of depression is expression.</strong>
        </p>
        <p>
          My style is somewhere between doodle and mandala: patterns, lines, a little chaos, drawn to calm my mind.
          It’s far from perfect, and I like it that way. It brings me joy, and apparently others too:
          <a class="shop-link" href=${SHOP_URL} target="_blank" rel="noopener">people wear it on T-shirts</a>.
        </p>
        <p>I’m still getting better every day. :)</p>
      </div>
    `;
  }

  private renderWork(art: Artwork, eager: boolean, isPrologue: boolean) {
    const index = historyArtworks.indexOf(art);
    return html`
      <li class="work" style="--ratio: ${art.width / art.height}">
        <button
          type="button"
          class="work-button"
          data-index=${index}
          aria-haspopup="dialog"
          @click=${() => this.openArt(index)}>
          <img
            src=${artWebp(art, 800)}
            srcset=${artSrcset(art)}
            sizes=${isPrologue ? "(min-width: 760px) 420px, 100vw" : "(min-width: 760px) 320px, 100vw"}
            width=${art.width}
            height=${art.height}
            loading=${eager ? "eager" : "lazy"}
            fetchpriority=${eager && isPrologue ? "high" : "auto"}
            decoding="async"
            alt=${art.alt} />
        </button>
        <p class="label">
          <span class="label-title">${art.title}</span>
          ${art.technique ? html`<span class="label-technique">${art.technique}</span>` : nothing}
        </p>
      </li>
    `;
  }

  // ── Section 2: The Marush, unframed ──

  private renderUnframed() {
    return html`
      <section class="unframed" aria-labelledby="unframed-title">
        <h2 class="section-title" id="unframed-title">The Marush, unframed</h2>
        <div class="unframed-grid">
          ${this.images.map((img) => {
            const route = img.project ? PROJECT_ROUTES[img.project] : undefined;
            return html`
              <div
                class="unframed-item ${this.revealed.has(img.id) ? "revealed" : ""}"
                id=${img.id}
                @click=${(e: MouseEvent) => this.toggleColour(img, e)}>
                <img
                  src="/unframed/${img.file}-480.webp"
                  srcset=${unframedSrcset(img)}
                  sizes="(min-width: 768px) 300px, 50vw"
                  width=${img.width}
                  height=${img.height}
                  alt=${img.alt}
                  class="unframed-img"
                  loading="lazy"
                  decoding="async" />
                <p class="unframed-caption">${img.caption}</p>
                ${
                  route
                    ? html`<button
                      type="button"
                      class="read-more-link"
                      @click=${() => (route.anchor ? navigateWithAnchor(route.path, route.anchor) : navigate(route.path))}
                    >read more here →</button>`
                    : nothing
                }
              </div>
            `;
          })}
        </div>
      </section>
    `;
  }

  static styles = css`
    :host {
      --paper: #f4efe6;
      --muted: #a8a39a;
      --mono: "IBM Plex Mono", ui-monospace, monospace;
      --serif: var(--font-heading, "Lora", Georgia, serif);
      display: block;
      width: 100%;
      /* The spotlights reach past the works; on phones that would make the page scroll sideways */
      overflow-x: clip;
    }

    h2,
    h3 {
      font-family: var(--serif);
    }

    .gallery-container {
      padding: 1.5rem 1rem 4rem;
      max-width: 980px;
      margin: 0 auto;
      box-sizing: border-box;
    }

    .section-title {
      margin: 0 0 1.5rem 0;
      font-size: 2rem;
      font-weight: 700;
      color: var(--button-bg, #52c8f4);
      border-bottom: 2px solid var(--button-bg, #52c8f4);
      padding-bottom: 0.5rem;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    /* ── History: a gallery at night ── */

    .room {
      margin-top: clamp(5rem, 14vw, 9rem);
    }

    .room.prologue {
      margin-top: clamp(3rem, 9vw, 5rem);
    }

    /* A quiet room name with a thin line running off to the right, like lettering on a gallery wall */
    .room-title {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 0 0 clamp(2rem, 6vw, 3.5rem);
      font-size: 1.3rem;
      font-weight: 400;
      color: var(--paper);
      letter-spacing: 0.01em;
    }

    .room-title::after {
      content: "";
      flex: 1;
      height: 1px;
      background: linear-gradient(to right, rgba(244, 239, 230, 0.22), transparent);
    }

    /* The prologue's name sits centred, with a line either side */
    .prologue .room-title::before {
      content: "";
      flex: 1;
      height: 1px;
      background: linear-gradient(to left, rgba(244, 239, 230, 0.22), transparent);
    }

    .prologue .room-title {
      font-family: var(--mono);
      font-size: 0.75rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--muted);
    }

    /*
     * Each work hangs at its own proportions: as wide as its column allows, but never taller
     * than --max-h, so portraits and landscapes sit together without cropping.
     */
    .works {
      --max-h: 72svh;
      display: grid;
      row-gap: clamp(3.5rem, 12vw, 5rem);
    }

    .work {
      --w: min(100%, calc(var(--max-h) * var(--ratio)));
      isolation: isolate;
      display: grid;
      justify-items: center;
    }

    /* The spotlight: a soft pool of warm light on the wall around the work, reaching a little higher */
    .work-button::before {
      content: "";
      position: absolute;
      z-index: -1;
      inset: -22% -16% -6%;
      background: radial-gradient(
        ellipse 55% 50% at 50% 42%,
        rgba(255, 240, 215, 0.075),
        rgba(255, 240, 215, 0.025) 55%,
        transparent 75%
      );
      pointer-events: none;
    }

    .work-button {
      position: relative;
      display: block;
      width: var(--w);
      align-self: end;
      padding: 0;
      border: 0;
      background: none;
      cursor: zoom-in;
      transition: transform 0.35s ease;
    }

    .work-button img {
      display: block;
      width: 100%;
      height: auto;
      /* A hint of warm light around the piece, and the shadow it casts on the wall */
      box-shadow:
        0 0 50px rgba(255, 236, 205, 0.06),
        0 22px 40px -12px rgba(0, 0, 0, 0.75);
    }

    .work-button:hover {
      transform: translateY(-3px);
    }

    .work-button:focus-visible {
      outline: 3px solid #ffd95c;
      outline-offset: 6px;
    }

    /* Museum wall label: left-aligned with the work's own edge */
    .label {
      width: var(--w);
      margin: 1.1rem 0 0;
      text-align: left;
    }

    .label span {
      display: block;
    }

    .label-title {
      font-family: var(--serif);
      font-style: italic;
      font-size: 1.05rem;
      line-height: 1.3;
      color: var(--paper);
    }

    .label-technique {
      margin-top: 0.2rem;
      font-family: var(--mono);
      font-size: 0.75rem;
      line-height: 1.4;
      color: var(--muted);
    }

    /* Three across: the works' bottoms line up on one "hanging line", and so do their labels */
    @media (min-width: 760px) {
      .works {
        --max-h: 24rem;
        grid-template-columns: repeat(3, 1fr);
        column-gap: clamp(1.5rem, 4vw, 2.75rem);
      }

      .work {
        grid-row: span 2;
        grid-template-rows: subgrid;
        row-gap: 0;
      }

      .prologue .works {
        --max-h: 30rem;
        grid-template-columns: 1fr;
      }

      /* The Beginning on the left, Marush's words on the right */
      .prologue-layout {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
        column-gap: clamp(2rem, 5vw, 3.5rem);
        align-items: start;
      }

      .prologue-layout .works {
        position: sticky;
        top: 5rem;
      }

      .prologue-layout .prologue-text {
        margin: 0;
      }
    }

    /* ── Prologue text ── */

    .prologue-text {
      max-width: 34rem;
      margin: clamp(3rem, 10vw, 4rem) auto 0;
      font-family: var(--serif);
      font-size: 1.05rem;
      line-height: 1.75;
      color: #e4e0d8;
    }

    .prologue-text h4 {
      margin: 0 0 1.25rem;
      font-size: 1.6rem;
      font-weight: 400;
      font-style: italic;
      line-height: 1.2;
      color: var(--paper);
    }

    .prologue-text p {
      margin: 0 0 1.1em;
    }

    .prologue-text p:last-child {
      margin-bottom: 0;
    }

    .shop-link {
      color: var(--button-bg, #52c8f4);
      font-weight: 500;
      text-decoration: underline;
      text-decoration-color: rgba(82, 200, 244, 0.45);
      text-underline-offset: 3px;
      transition: text-decoration-color 150ms;
    }

    .shop-link:hover {
      color: var(--button-bg, #52c8f4);
      text-decoration-color: var(--button-bg, #52c8f4);
    }

    .shop-link:focus-visible {
      outline: 2px solid var(--button-bg, #52c8f4);
      outline-offset: 2px;
      border-radius: 2px;
    }

    .prologue-text strong {
      font-weight: 600;
      color: var(--paper);
    }

    /* ── The Marush, unframed ── */

    .unframed {
      margin-top: clamp(7rem, 20vw, 12rem);
      padding-top: clamp(2.5rem, 7vw, 4rem);
      border-top: 1px solid rgba(244, 239, 230, 0.1);
    }

    .unframed-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(13.75rem, 1fr));
      gap: 1.25rem;
      padding: 1.25rem 0;
      align-items: stretch;
    }

    .unframed-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      background-color: #111;
      padding: 0.625rem;
      border-radius: 0.625rem;
      height: 100%;
      box-sizing: border-box;
    }

    .unframed-img {
      width: 100%;
      height: 200px;
      border-radius: 0.625rem;
      object-fit: cover;
      transition: transform 0.3s ease, filter 0.3s ease;
      filter: grayscale(100%);
      flex-shrink: 0;
    }

    /* The colour comes in on hover, on a tap (touch screens), or while its link has keyboard focus */
    .unframed-img:hover,
    .unframed-item.revealed .unframed-img,
    .unframed-item:focus-within .unframed-img {
      transform: scale(1.05);
      filter: grayscale(0%);
    }

    .unframed-caption {
      margin-top: 0.625rem;
      font-style: italic;
      color: #ccc;
      text-align: center;
      font-size: 0.95em;
      line-height: 1.6;
      width: 100%;
      overflow-wrap: break-word;
      hyphens: auto;
    }

    .read-more-link {
      margin-top: 0.5rem;
      background: none;
      border: none;
      padding: 0;
      font-size: 0.78rem;
      color: var(--button-bg, #52c8f4);
      cursor: pointer;
      text-decoration: underline;
      text-decoration-color: rgba(82, 200, 244, 0.4);
      font-style: italic;
      transition: text-decoration-color 150ms, opacity 150ms;
    }

    .read-more-link:hover {
      text-decoration-color: var(--button-bg, #52c8f4);
      opacity: 0.85;
    }

    .read-more-link:focus-visible {
      outline: 2px solid var(--button-bg, #52c8f4);
      outline-offset: 2px;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      .gallery-container {
        padding: 1rem 1rem 3rem;
      }

      .section-title {
        font-size: 1.5rem;
      }

      .unframed-grid {
        grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
        gap: 1rem;
      }

      .unframed-img {
        height: 150px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .work-button,
      .unframed-img {
        transition: none;
      }

      .work-button:hover {
        transform: none;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-gallery": MMGallery;
  }
}
