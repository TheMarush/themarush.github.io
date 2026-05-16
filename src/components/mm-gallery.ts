import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { GalleryImage } from "../data/gallery.js";
import { navigate, navigateWithAnchor } from "../utils/navigate.js";

const PROJECT_ROUTES: Record<string, { path: string; anchor?: string }> = {
  "google-cs": { path: "/projects/cybersecurity" },
  "feminist": { path: "/projects/feminism" },
  "eu careers": { path: "/projects", anchor: "eu-ambassador-title" },
};

@customElement("mm-gallery")
export class MMGallery extends LitElement {
  @property({ type: Array })
  images: GalleryImage[] = [];

  render() {
    return html`
      <div class="gallery-container">
        <h2 class="gallery-title">My Art</h2>
        <p class="gallery-intro">This is the Art Gallery of meee!</p>
        <div class="gallery">
          ${this.images.map((img) => {
            const route = img.project ? PROJECT_ROUTES[img.project] : undefined;
            return html`
              <div class="art-item" id=${img.id}>
                <img
                  src=${img.src}
                  alt=${img.alt}
                  class="art-item-img"
                  loading="lazy"
                />
                <p class="art-item-caption">${img.caption}</p>
                ${route
                  ? html`<button
                      type="button"
                      class="read-more-link"
                      @click=${() => route.anchor
                        ? navigateWithAnchor(route.path, route.anchor)
                        : navigate(route.path)}
                    >read more here →</button>`
                  : ""}
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .gallery-container {
      padding: 1.5rem 1rem;
      max-width: 980px;
      margin: 0 auto;
      overflow: visible;
    }

    .gallery-title {
      margin: 0 0 1.5rem 0;
      font-size: 2rem;
      font-weight: 700;
      color: var(--button-bg, #52C8F4);
      border-bottom: 2px solid var(--button-bg, #52C8F4);
      padding-bottom: 0.5rem;
    }

    .gallery-intro {
      text-align: center;
      font-style: italic;
      margin: 0 0 1.25rem 0;
      color: inherit;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(13.75rem, 1fr));
      gap: 1.25rem;
      padding: 1.25rem 0;
      align-items: stretch;
    }

    .art-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      background-color: #111;
      padding: 0.625rem;
      border-radius: 0.625rem;
      height: 100%;
      box-sizing: border-box;
      overflow: visible;
    }

    .art-item-img {
      width: 100%;
      height: 200px;
      border-radius: 0.625rem;
      object-fit: cover;
      transition: transform 0.3s ease, filter 0.3s ease;
      cursor: pointer;
      filter: grayscale(100%);
      flex-shrink: 0;
    }

    .art-item-img:hover {
      transform: scale(1.05);
      filter: grayscale(0%);
    }

    .art-item-caption {
      margin-top: 0.625rem;
      font-style: italic;
      color: #ccc;
      text-align: center;
      font-size: 0.95em;
      line-height: 1.6;
      width: 100%;
      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
      overflow: visible;
    }

    .read-more-link {
      margin-top: 0.5rem;
      background: none;
      border: none;
      padding: 0;
      font-size: 0.78rem;
      color: var(--button-bg, #52C8F4);
      cursor: pointer;
      text-decoration: underline;
      text-decoration-color: rgba(82, 200, 244, 0.4);
      font-style: italic;
      transition: text-decoration-color 150ms, opacity 150ms;
    }

    .read-more-link:hover {
      text-decoration-color: var(--button-bg, #52C8F4);
      opacity: 0.85;
    }

    .read-more-link:focus-visible {
      outline: 2px solid var(--button-bg, #52C8F4);
      outline-offset: 2px;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      .gallery-container {
        padding: 1rem;
      }

      .gallery-title {
        font-size: 1.5rem;
      }

      .gallery {
        grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
        gap: 1rem;
      }

      .art-item-img {
        height: 150px;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-gallery": MMGallery;
  }
}
