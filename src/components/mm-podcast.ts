import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import type { PodcastEpisode } from "../data/podcast.js";
import { podcastEpisodes, podcastIntro } from "../data/podcast.js";
import "./mm-back-button.ts";

const PLATFORMS = [
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@DataTimesVideo",
  },
  {
    id: "spotify",
    label: "Spotify",
    href: "https://open.spotify.com/show/5xJhh6irxTHsp40qI5HoSO?si=c4546cb26ce24bad",
  },
  {
    id: "ceskepodcasty",
    label: "České Podcasty",
    href: "https://ceskepodcasty.cz/podcast/mahdalky-matka-a-dcera-dve-generace-jeden-podcast",
  },
  {
    id: "datovazurnalistika",
    label: "Datová Žurnalistika",
    href: "https://www.datovazurnalistika.cz/?s=mahdalky",
  },
  {
    id: "mahdalovaskop",
    label: "Mahdalová & Škop",
    href: "https://www.mahdalova-skop.cz/podcasty",
  },
];

@customElement("mm-podcast")
export class MMPodcast extends LitElement {
  @state()
  private _active = new Set<string>();

  @state()
  private _expanded = new Set<string>();

  private _play(id: string) {
    const next = new Set(this._active);
    next.add(id);
    this._active = next;
  }

  private _toggleExpanded(id: string) {
    const next = new Set(this._expanded);
    next.has(id) ? next.delete(id) : next.add(id);
    this._expanded = next;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .page {
      max-width: 980px;
      margin: 0 auto;
      padding: 1.5rem 1rem 3rem;
      color: #f9fafb;
    }

    .back-row {
      margin-bottom: 1.25rem;
    }

    .meta-label {
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #9ca3af;
    }

    h1 {
      margin: 0.35rem 0 0.6rem;
      font-size: 1.9rem;
      letter-spacing: 0.04em;
    }

    .lang-badge {
      display: inline-block;
      font-size: 0.72rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #9ca3af;
      border: 1px solid rgba(148, 163, 184, 0.35);
      border-radius: 999px;
      padding: 0.18rem 0.65rem;
      margin-bottom: 1.1rem;
    }

    .intro {
      font-size: 0.96rem;
      color: #d1d5db;
      line-height: 1.75;
      max-width: 720px;
      margin: 0 0 1.5rem;
    }

    /* ── platforms ── */
    .platforms {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1.25rem 0;
      border-top: 1px solid rgba(148, 163, 184, 0.15);
      border-bottom: 1px solid rgba(148, 163, 184, 0.15);
      margin-bottom: 2.5rem;
    }

    .platforms-label {
      font-size: 0.72rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #9ca3af;
      margin: 0;
    }

    .platforms-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .platform-link {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.38rem 0.9rem;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.4);
      background: none;
      color: #e5e7eb;
      font-size: 0.82rem;
      text-decoration: none;
      transition: border-color 150ms ease, color 150ms ease, background 150ms ease;
    }

    .platform-link:hover {
      border-color: var(--button-bg, #52c8f4);
      color: var(--button-bg, #52c8f4);
      background: rgba(82, 200, 244, 0.06);
    }

    .platform-link.spotify:hover {
      border-color: #1db954;
      color: #1db954;
      background: rgba(29, 185, 84, 0.06);
    }

    .platform-link.youtube:hover {
      border-color: #ff0000;
      color: #ff0000;
      background: rgba(255, 0, 0, 0.06);
    }

    .platform-link svg {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
      fill: currentColor;
    }

    /* ── episodes ── */
    .episodes {
      display: flex;
      flex-direction: column;
    }

    .episode {
      display: flex;
      gap: 2rem;
      align-items: flex-start;
      padding: 2.5rem 0;
      border-top: 1px solid rgba(148, 163, 184, 0.2);
    }

    .episode:first-child {
      border-top: 2px solid rgba(148, 163, 184, 0.45);
    }

    /* ── video ── */
    .ep-media {
      width: 280px;
      flex-shrink: 0;
      border-radius: 0.5rem;
      overflow: hidden;
      background: #0d0d0d;
    }

    /* facade: natural image size, no crop */
    .ep-thumb {
      display: block;
      position: relative;
      width: 100%;
      cursor: pointer;
      border: none;
      padding: 0;
      background: none;
    }

    .ep-thumb img {
      width: 100%;
      height: auto;
      display: block;
    }

    .play-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.18);
      transition: background 150ms ease;
    }

    .ep-thumb:hover .play-overlay,
    .ep-thumb:focus-visible .play-overlay {
      background: rgba(0, 0, 0, 0.4);
    }

    .ep-thumb:focus-visible {
      outline: 2px solid var(--button-bg, #52c8f4);
      outline-offset: -2px;
    }

    .play-overlay svg {
      width: 54px;
      height: 38px;
      filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
      transition: transform 150ms ease;
    }

    .ep-thumb:hover .play-overlay svg {
      transform: scale(1.08);
    }

    /* iframe: maintain 16:9 ratio in the same fixed-width container */
    .ep-iframe-wrap {
      position: relative;
      padding-top: 56.25%;
    }

    .ep-iframe-wrap iframe {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: none;
    }

    /* ── episode content ── */
    .ep-content {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      min-width: 0;
    }

    .ep-meta {
      font-size: 0.72rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--button-bg, #52c8f4);
      font-weight: 600;
    }

    .ep-title {
      margin: 0;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.45rem;
      font-weight: 700;
      line-height: 1.2;
      color: #f9fafb;
    }

    .ep-divider {
      width: 2rem;
      height: 2px;
      background: rgba(148, 163, 184, 0.3);
      border: none;
      margin: 0;
      flex-shrink: 0;
    }

    .ep-body-wrap {
      position: relative;
      max-height: 5.5rem;
      overflow: hidden;
      -webkit-mask-image: linear-gradient(to bottom, black 45%, transparent 100%);
      mask-image: linear-gradient(to bottom, black 45%, transparent 100%);
    }

    .ep-body-wrap.expanded {
      max-height: none;
      -webkit-mask-image: none;
      mask-image: none;
    }

    .ep-body {
      font-size: 0.88rem;
      color: #d1d5db;
      line-height: 1.8;
    }

    .ep-body p {
      margin: 0 0 0.7rem;
    }

    .ep-body p:last-child {
      margin-bottom: 0;
    }

    .ep-readmore {
      background: none;
      border: none;
      padding: 0;
      color: #9ca3af;
      font-size: 0.8rem;
      cursor: pointer;
      transition: color 150ms ease;
      text-align: left;
    }

    .ep-readmore:hover {
      color: #f9fafb;
    }

    /* ── responsive ── */
    @media (max-width: 720px) {
      .episode {
        flex-direction: column;
        gap: 1.25rem;
        padding: 2rem 0;
      }

      .ep-media {
        width: 100%;
      }

      .ep-title {
        font-size: 1.25rem;
      }
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 1.5rem;
      }
    }
  `;

  private renderEpisode(ep: PodcastEpisode) {
    const isActive = this._active.has(ep.youtubeId);
    const isExpanded = this._expanded.has(ep.id);
    return html`
      <article class="episode" id="ep-${ep.number}" aria-labelledby="ep-title-${ep.number}">
        <div class="ep-media">
          ${isActive
            ? html`
                <div class="ep-iframe-wrap">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/${ep.youtubeId}?autoplay=1&rel=0"
                    title="${ep.title}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              `
            : html`
                <button
                  class="ep-thumb"
                  @click=${() => this._play(ep.youtubeId)}
                  aria-label="Play episode ${ep.number}: ${ep.title}"
                >
                  <img
                    src="https://img.youtube.com/vi/${ep.youtubeId}/maxresdefault.jpg"
                    alt="Episode ${ep.number} thumbnail"
                    loading="lazy"
                  />
                  <div class="play-overlay" aria-hidden="true">
                    <svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                        fill="#f00"
                      />
                      <path d="M45 24 27 14v20" fill="#fff" />
                    </svg>
                  </div>
                </button>
              `}
        </div>

        <div class="ep-content">
          <div class="ep-meta">Ep. ${ep.number} · ${ep.date}</div>
          <h2 id="ep-title-${ep.number}" class="ep-title">${ep.title}</h2>
          <hr class="ep-divider" />
          <div class="ep-body-wrap ${isExpanded ? 'expanded' : ''}">
            <div class="ep-body">${unsafeHTML(ep.description)}</div>
          </div>
          <button class="ep-readmore" @click=${() => this._toggleExpanded(ep.id)}>
            ${isExpanded ? 'Read less ↑' : 'Read more ↓'}
          </button>
        </div>
      </article>
    `;
  }

  render() {
    return html`
      <div class="page">
        <div class="back-row">
          <mm-back-button label="Back to Projects" href="/projects"></mm-back-button>
        </div>
        <div class="meta-label">Projects → Mahdalky</div>
        <h1>Podcast: Mahdalky</h1>
        <span class="lang-badge">in Czech</span>
        <p class="intro">${podcastIntro}</p>

        <div class="platforms">
          <p class="platforms-label">Listen on</p>
          <div class="platforms-row">
            <a
              class="platform-link spotify"
              href="https://open.spotify.com/show/5xJhh6irxTHsp40qI5HoSO?si=c4546cb26ce24bad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Spotify
            </a>
            ${PLATFORMS.filter(p => p.id !== "spotify").map(p => p.id === "youtube" ? html`
              <a
                class="platform-link youtube"
                href="${p.href}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
            ` : html`
              <a
                class="platform-link"
                href="${p.href}"
                target="_blank"
                rel="noopener noreferrer"
              >${p.label} ↗</a>
            `)}
          </div>
        </div>

        <div class="episodes">
          ${[...podcastEpisodes].reverse().map((ep) => this.renderEpisode(ep))}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-podcast": MMPodcast;
  }
}
