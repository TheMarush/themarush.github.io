import { css, html, LitElement, nothing } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { type Artwork, artSrcset, artWebp, artworks } from "../data/art.js";
import { navigate } from "../utils/navigate.js";

const INSTAGRAM = "https://www.instagram.com/the.marush.eu/";
const LINKEDIN = "https://www.linkedin.com/in/marie-anna-mahdalov%C3%A1/";

interface Way {
  title: string;
  text: string;
  accent: "red" | "green" | "blue";
  art: Artwork | undefined;
  links: { label: string; href: string }[];
}

const artBySrc = (src: string) => artworks.find((a) => a.src === src);

/* Three ways in. Each card takes one colour from the opening art's rainbow, and one artwork. */
const WAYS: Way[] = [
  {
    title: "Artist",
    text: "Drawing, painting, and the “Organized Chaos” collection.",
    accent: "red",
    art: artBySrc("/art/rooster-with-drawing.jpg"),
    links: [
      { label: "Gallery", href: "/gallery" },
      { label: "Shop", href: "https://the-marush.tpopsite.com/" },
    ],
  },
  {
    title: "Advocate",
    text: "Feminism, human rights, and honest conversations about mental health.",
    accent: "green",
    art: artBySrc("/art/figure-and-mirror.jpg"),
    links: [
      { label: "Lifelong Feminist", href: "/projects/feminism" },
      { label: "Mahdalky podcast", href: "/projects/podcast" },
      { label: "EU Careers Ambassador", href: "/projects/eu-careers" },
    ],
  },
  {
    title: "Information scientist",
    text: "AI, data and cybersecurity, made human.",
    accent: "blue",
    art: artBySrc("/art/ladder-to-the-stars.jpg"),
    links: [
      { label: "Good Enough", href: "/projects/good-enough" },
      { label: "Cybersecurity Seminars", href: "/projects/cybersecurity" },
      { label: "Study", href: "/study" },
    ],
  },
];

const isExternal = (href: string) => /^https?:\/\//.test(href);

@customElement("mm-home")
export class MMHome extends LitElement {
  @state() private opened: Artwork | null = null;
  @state() private openingLoaded = false;
  @query("dialog") private dialog!: HTMLDialogElement;
  @query(".opening img") private openingImg!: HTMLImageElement;

  firstUpdated() {
    // The image may already be cached and decoded before Lit attached the load listener
    if (this.openingImg?.complete) this.revealOpening();
  }

  private revealOpening() {
    this.openingLoaded = true;
  }

  /* Client-side routing for internal links, but leave ctrl/cmd/middle clicks to the browser */
  private go(e: MouseEvent, href: string) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
    navigate(href);
  }

  private link(href: string, content: unknown, className = "") {
    return isExternal(href)
      ? html`<a class=${className} href=${href} target="_blank" rel="noopener">${content}</a>`
      : html`<a class=${className} href=${href} @click=${(e: MouseEvent) => this.go(e, href)}>${content}</a>`;
  }

  private async openArt(art: Artwork) {
    this.opened = art;
    await this.updateComplete;
    document.documentElement.style.overflow = "hidden";
    this.dialog.showModal();
  }

  private closeArt() {
    if (this.dialog?.open) this.dialog.close();
  }

  /* Fires for Esc, the close button and taps outside alike */
  private onDialogClose() {
    document.documentElement.style.overflow = "";
    this.opened = null;
  }

  /* A tap anywhere that isn't the artwork or its caption counts as "outside" */
  private onDialogClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (!target.closest("img, figcaption, button")) this.closeArt();
  }

  render() {
    return html`
      <div class="opening ${this.openingLoaded ? "loaded" : ""}">
        <img
          src="/home/opening-1024.webp"
          srcset="/home/opening-640.webp 640w, /home/opening-1024.webp 1024w, /home/opening-1600.webp 1600w, /home/opening-2048.webp 2048w"
          sizes="(min-width: 1040px) 1040px, 100vw"
          width="2048"
          height="1403"
          fetchpriority="high"
          alt="Digital drawing by Marush: patterned curtains drawn back to reveal hand-drawn flowers growing on a rainbow."
          @load=${this.revealOpening}
          @error=${this.revealOpening} />
      </div>

      <div class="page">
        ${this.renderManifesto()} ${this.renderWays()} ${this.renderTalk()}
      </div>

      ${this.renderLightbox()}
    `;
  }

  private renderManifesto() {
    return html`
      <section class="manifesto" aria-labelledby="manifesto-title">
        <h1 id="manifesto-title">Organized chaos, on purpose.</h1>
        <svg class="squiggle" viewBox="0 0 320 16" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="rainbow" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stop-color="#e5383b" />
              <stop offset="0.25" stop-color="#f48c2b" />
              <stop offset="0.5" stop-color="#f5d63d" />
              <stop offset="0.75" stop-color="#4cb848" />
              <stop offset="1" stop-color="#3a7bd5" />
            </linearGradient>
          </defs>
          <path stroke="url(#rainbow)" d="M3 10 C 40 3, 70 14, 110 8 S 180 2, 220 9 S 290 13, 317 6" />
        </svg>

        <p class="intro">
          I am The Marush: <span class="red">artist</span>, <span class="green">advocate</span>,
          <span class="blue">information scientist</span>.
        </p>
        <p>
          I notice things. The pattern in the noise, the quiet person in the loud room, the feeling
          underneath the facts. Then I turn it into something you can hold: a drawing, a workshop, a
          conversation that stays with you.
        </p>
        <p>
          I spent twenty years surviving before I learned how to live. So I know how heavy the world can
          feel, how dark the news gets, how loud everyone is online.
        </p>
        <p>
          But there's another way to see it. I found it, and I want to show it to you. To help you step out
          of <em>someday</em> and into <em>now</em>.
        </p>
        <p>You're allowed to be more than one thing: soft and sharp, messy and precise.</p>
        <p class="okay">It's okay.</p>
      </section>
    `;
  }

  /* Artwork at the top of a card. Tapping it opens the piece large, with its details. */
  private renderCardArt(art: Artwork | undefined) {
    if (!art) return nothing;
    return html`
      <button type="button" class="card-art" aria-haspopup="dialog" @click=${() => this.openArt(art)}>
        <img
          src=${artWebp(art, 800)}
          srcset=${artSrcset(art)}
          sizes="120px"
          width=${art.width}
          height=${art.height}
          loading="lazy"
          decoding="async"
          alt=${art.alt} />
      </button>
    `;
  }

  private renderWays() {
    return html`
      <section class="ways" aria-labelledby="ways-title">
        <h2 id="ways-title">Three ways in</h2>
        <ul class="cards">
          ${WAYS.map(
            (way) => html`
              <li class="card ${way.accent}">
                <h3>${way.title}</h3>
                <p>${way.text}</p>
                <div class="card-row">
                  ${this.renderCardArt(way.art)}
                  <ul class="card-links">
                    ${way.links.map(
                      (l) => html`<li>${this.link(l.href, html`${l.label} ${isExternal(l.href) ? "↗" : "→"}`)}</li>`,
                    )}
                  </ul>
                </div>
              </li>
            `,
          )}
        </ul>
        <p class="more">${this.link("/projects", "All projects →")}</p>
      </section>
    `;
  }

  private renderTalk() {
    return html`
      <section class="talk" aria-labelledby="talk-title">
        <h2 id="talk-title">Let's keep talking</h2>
        <div class="talk-buttons">
          <a class="big-btn instagram" href=${INSTAGRAM} target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="24" height="24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
            Instagram
          </a>
          <a class="big-btn linkedin" href=${LINKEDIN} target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="24" height="24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
        <p class="more quiet">${this.link("/contact", "Other ways to reach me →")}</p>
      </section>
    `;
  }

  private renderLightbox() {
    const art = this.opened;
    const details = art ? [art.year, art.medium].filter(Boolean).join(" · ") : "";
    return html`
      <dialog
        aria-label=${art?.title ?? art?.alt ?? "Artwork"}
        @close=${this.onDialogClose}
        @click=${this.onDialogClick}>
        ${
          art
            ? html`
              <button type="button" class="close" aria-label="Close" @click=${this.closeArt}>×</button>
              <figure>
                <img
                  src=${artWebp(art, 1400)}
                  srcset=${artSrcset(art)}
                  sizes="92vw"
                  width=${art.width}
                  height=${art.height}
                  alt=${art.alt} />
                ${
                  art.title || details
                    ? html`<figcaption>
                      ${art.title ? html`<span class="art-title">${art.title}</span>` : nothing}
                      ${details ? html`<span class="art-details">${details}</span>` : nothing}
                    </figcaption>`
                    : nothing
                }
              </figure>
            `
            : nothing
        }
      </dialog>
    `;
  }

  static styles = css`
    :host {
      /* Colours picked from the opening art's rainbow, lightened to read well on the dark page */
      --red: #ff7b72;
      --orange: #ffa94d;
      --yellow: #ffd95c;
      --green: #7ad67a;
      --blue: #6ab8ff;
      --paper: #f4efe6;
      --text: #e4e0d8;
      --muted: #b5b0a7;
      --mono: "IBM Plex Mono", ui-monospace, monospace;
      --serif: var(--font-heading, "Lora", Georgia, serif);
      display: block;
      color: var(--text);
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    a:focus-visible,
    button:focus-visible {
      outline: 3px solid var(--yellow);
      outline-offset: 3px;
      border-radius: 4px;
    }

    h1,
    h2,
    h3 {
      font-family: var(--serif);
      color: var(--paper);
      font-weight: 700;
    }

    h2 {
      font-size: clamp(1.9rem, 6vw, 2.6rem);
      line-height: 1.1;
      margin: 0 0 1.5rem;
    }

    /* ── 1. Opening art ── */
    .opening {
      max-width: 1040px;
      margin: 0 auto;
      overflow: hidden;
      background: #111;
    }

    .opening img {
      display: block;
      width: 100%;
      height: auto;
      opacity: 0;
      transform: scale(1.05);
      transition:
        opacity 1.2s ease,
        transform 2.2s cubic-bezier(0.2, 0.7, 0.2, 1);
    }

    .opening.loaded img {
      opacity: 1;
      transform: none;
    }

    /* Content column */
    .page {
      max-width: 980px;
      margin: 0 auto;
      padding: 0 1rem 4rem;
      box-sizing: border-box;
    }

    section {
      margin-top: clamp(4rem, 12vw, 7rem);
    }

    /* ── 2. Manifesto ── */
    .manifesto {
      max-width: 40rem;
      margin-left: auto;
      margin-right: auto;
      margin-top: clamp(2.5rem, 9vw, 5rem);
    }

    .manifesto h1 {
      font-size: clamp(2.5rem, 10.5vw, 4.75rem);
      line-height: 1.02;
      letter-spacing: -0.02em;
      margin: 0;
    }

    .squiggle {
      display: block;
      width: min(19rem, 75%);
      height: 0.9rem;
      margin: 0.9rem 0 2.25rem;
      fill: none;
      stroke-width: 4;
      stroke-linecap: round;
    }

    .manifesto p {
      font-family: var(--serif);
      font-size: clamp(1.2rem, 4.6vw, 1.45rem);
      line-height: 1.6;
      margin: 0 0 1.4em;
    }

    .manifesto .intro {
      font-size: clamp(1.35rem, 5.4vw, 1.75rem);
      line-height: 1.4;
      color: var(--paper);
    }

    .intro .red { color: var(--red); }
    .intro .green { color: var(--green); }
    .intro .blue { color: var(--blue); }

    .manifesto em {
      color: var(--paper);
    }

    /* The quiet final beat */
    .manifesto .okay {
      margin: 3.5rem 0 0;
      padding-top: 2.5rem;
      border-top: 1px solid rgba(244, 239, 230, 0.12);
      font-style: italic;
      font-size: clamp(1.5rem, 6vw, 2rem);
      color: var(--paper);
      text-align: center;
    }

    .more {
      margin: 1.5rem 0 0;
      font-family: var(--mono);
      font-size: 0.95rem;
      font-weight: 600;
    }

    .more a {
      border-bottom: 2px solid var(--yellow);
      padding-bottom: 2px;
    }

    .more a:hover {
      color: var(--yellow);
    }

    /* ── 4. Three ways in ── */
    .cards {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 1.25rem;
    }

    @media (min-width: 768px) {
      .cards {
        grid-template-columns: repeat(3, 1fr);
      }

      /* Subgrid: titles, texts and art rows line up across all three cards */
      .cards > .card {
        display: grid;
        grid-row: span 3;
        grid-template-rows: subgrid;
        row-gap: 0;
        align-content: start;
      }
    }

    .card {
      display: flex;
      flex-direction: column;
      padding: 1.5rem 1.4rem 1.4rem;
      background: #141414;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-top: 5px solid var(--accent);
      border-radius: 6px;
    }

    /* Small artwork on the left, the card's links beside it on the right */
    .card-row {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    /*
     * Every card's art sits in the same small black frame, so the three cards line up.
     * The pieces are drawn on black, so object-fit: contain shows each one whole
     * and the spare space simply disappears into the background.
     */
    .card-art {
      flex: 0 0 auto;
      display: block;
      width: 7.5rem;
      aspect-ratio: 4 / 5;
      /* Without this, a tall piece stretches its frame past the shared aspect ratio */
      min-height: 0;
      overflow: hidden;
      padding: 0.4rem;
      border: 0;
      border-radius: 4px;
      background: #000;
      cursor: zoom-in;
      box-sizing: border-box;
    }

    @media (min-width: 768px) {
      .card-art {
        width: 6.5rem;
      }
    }

    .card-row .card-links {
      flex: 1;
      min-width: 0;
    }

    .card-art img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.4s ease;
    }

    .card-art:hover img {
      transform: scale(1.03);
    }


    .card.red { --accent: var(--red); }
    .card.green { --accent: var(--green); }
    .card.blue { --accent: var(--blue); }

    .card h3 {
      font-size: 1.6rem;
      line-height: 1.15;
      margin: 0 0 0.6rem;
    }

    .card p {
      margin: 0 0 1.25rem;
      font-size: 1.05rem;
      line-height: 1.55;
      color: var(--text);
      flex: 1;
    }

    .card-links {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 0.35rem;
    }

    .card-links a {
      display: inline-block;
      padding: 0.3rem 0;
      font-weight: 600;
      color: var(--accent);
    }

    .card-links a:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    /* ── 5. Let's keep talking ── */
    .talk {
      text-align: center;
      padding: 3rem 0 1rem;
    }

    .talk-buttons {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 22rem;
      margin: 0 auto;
    }

    @media (min-width: 768px) {
      .talk-buttons {
        flex-direction: row;
        max-width: none;
        justify-content: center;
      }
    }

    .big-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.65rem;
      min-height: 3.6rem;
      padding: 0 2rem;
      border-radius: 999px;
      font-size: 1.15rem;
      font-weight: 700;
      color: #111;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .big-btn:hover {
      transform: translateY(-2px) rotate(-1deg);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.4);
      color: #111;
    }

    .big-btn.instagram {
      background: linear-gradient(100deg, var(--red), var(--orange) 55%, var(--yellow));
    }

    .big-btn.linkedin {
      background: linear-gradient(100deg, var(--green), var(--blue) 60%);
    }

    .talk .quiet {
      margin-top: 1.75rem;
      font-weight: 500;
    }

    .talk .quiet a {
      color: var(--muted);
      border-bottom-color: rgba(244, 239, 230, 0.25);
    }

    .talk .quiet a:hover {
      color: var(--paper);
    }

    /* ── Lightbox ── */
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
      background: rgba(10, 10, 10, 0.94);
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

    dialog figure {
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 100%;
      max-height: 100%;
    }

    dialog img {
      display: block;
      max-width: 100%;
      max-height: calc(100dvh - 9rem);
      width: auto;
      height: auto;
      object-fit: contain;
    }

    dialog figcaption {
      margin-top: 1rem;
      text-align: center;
    }

    .art-title {
      display: block;
      font-family: var(--serif);
      font-size: 1.3rem;
      color: var(--paper);
    }

    .art-details {
      display: block;
      margin-top: 0.25rem;
      font-family: var(--mono);
      font-size: 0.8rem;
      color: var(--muted);
    }

    .close {
      position: fixed;
      top: 0.75rem;
      right: 0.75rem;
      width: 2.75rem;
      height: 2.75rem;
      border: 1px solid rgba(244, 239, 230, 0.3);
      border-radius: 50%;
      background: rgba(20, 20, 20, 0.8);
      color: var(--paper);
      font-size: 1.6rem;
      line-height: 1;
      cursor: pointer;
    }

    .close:hover {
      border-color: var(--paper);
    }

    @media (prefers-reduced-motion: reduce) {
      .opening img {
        opacity: 1;
        transform: none;
        transition: none;
      }

      .card-art img,
      .big-btn {
        transition: none;
      }

      .card-art:hover img,
      .big-btn:hover {
        transform: none;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-home": MMHome;
  }
}
