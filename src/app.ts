import { css, html, LitElement } from "lit";
import { customElement, query } from "lit/decorators.js";
import posthog from "posthog-js";
import type { Racoon } from "./components/mm-racoon.js";
import "./components/mm-button.ts";
import "./components/mm-modal.ts";
import "./components/mm-menu.ts";
import "./components/mm-semester.ts";
import "./components/mm-testimonials.ts";
import "./components/mm-gallery.ts";
import "./components/mm-about.ts";
import "./components/mm-projects.ts";
import "./components/mm-study.ts";
import "./components/mm-ai-view-index.ts";
import "./components/mm-feminism.ts";
import "./components/mm-ijf26.ts";
import "./components/mm-cybersecurity.ts";
import "./components/mm-good-enough.ts";
import "./components/mm-podcast.ts";
import "./components/mm-contact.ts";
import "./components/mm-donate.ts";
import "./components/mm-racoon.ts";
import { galleryImages } from "./data/gallery.js";
import { semester1, semester2, semester3, semester4 } from "./data/semesters.js";
import { testimonials } from "./data/testimonials.js";
import { ModalController } from "./utils/modal.js";

posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
  api_host: "https://eu.i.posthog.com",
});

@customElement("mm-app")
export class App extends LitElement {
  private modal = new ModalController(this);
  @query("mm-racoon") private racoon!: Racoon;

  render() {
    return html`
      ${
        this.modal.isOpen
          ? html`
        <mm-modal
          message=${this.modal.message}
          image=${this.modal.image}
          .closing=${this.modal.isClosing}
          @close=${() => this.modal.close()}
          @modal-image-click=${() => this.modal.updateImage(this.racoon.advance())}>
        </mm-modal>
      `
          : ""
      }
      <div class="main">
        <mm-menu
          .items=${[
            { id: "gallery", label: "Gallery" },
            { id: "about", label: "About" },
            { id: "testimonials", label: "Testimonials" },
            { id: "projects", label: "Projects" },
            { id: "study", label: "Study" },
            { id: "contact", label: "Contact" },
            { id: "donate", label: "Support" },
          ]}
          position="left">
          <div slot="header-end" class="header-social">
            <a href="https://github.com/TheMarush" target="_blank" rel="noopener" aria-label="GitHub" class="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="20">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/the.marush.eu/" target="_blank" rel="noopener" aria-label="Instagram" class="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="20">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/marie-anna-mahdlová-a81299305" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          <div slot="gallery">
            <mm-gallery .images=${galleryImages}></mm-gallery>
          </div>
          <div slot="about">
            <mm-about></mm-about>
          </div>
          <div slot="projects">
            <mm-projects></mm-projects>
          </div>
          <div slot="ai-view">
            <mm-ai-view-index></mm-ai-view-index>
          </div>
          <div slot="feminism">
            <mm-feminism></mm-feminism>
          </div>
          <div slot="ijf26">
            <mm-ijf26></mm-ijf26>
          </div>
          <div slot="cybersecurity">
            <mm-cybersecurity></mm-cybersecurity>
          </div>
          <div slot="good-enough">
            <mm-good-enough></mm-good-enough>
          </div>
          <div slot="podcast">
            <mm-podcast></mm-podcast>
          </div>
          <div slot="testimonials">
            <mm-testimonials .testimonials=${testimonials}></mm-testimonials>
          </div>
          <div slot="contact">
            <mm-contact @jackie-click=${(e: CustomEvent) => {
              this.modal.show("Why you not listen?", e.detail.imageUrl);
            }}></mm-contact>
          </div>
          <div slot="study">
            <mm-study .semesters=${[semester1, semester2, semester3, semester4]}></mm-study>
          </div>
          <div slot="donate">
            <mm-donate></mm-donate>
          </div>
          <div slot="semester1">
            <mm-semester .semester=${semester1}></mm-semester>
          </div>
          <div slot="semester2">
            <mm-semester .semester=${semester2}></mm-semester>
          </div>
          <div slot="semester3">
            <mm-semester .semester=${semester3}></mm-semester>
          </div>
          <div slot="semester4">
            <mm-semester .semester=${semester4}></mm-semester>
          </div>
          <div slot="semester5">
            <div class="section-container">
              <h2 class="section-title">Semester 5</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </mm-menu>
      </div>
      <mm-racoon @racoon-click=${(e: CustomEvent<{ imageUrl: string }>) => {
        this.modal.show("", e.detail.imageUrl);
      }}></mm-racoon>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      width: 100%;
      height: 100%;
      margin: 0.5rem;
    }

    .header-social {
      display: flex;
      align-items: center;
      gap: 0.375rem;
    }

    .social-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      color: #6b7280;
      border-radius: 4px;
      text-decoration: none;
      transition: color 0.2s ease, transform 0.2s ease;
    }

    .social-icon:hover {
      color: #f1f5f9;
      transform: scale(1.15);
    }

    @media (max-width: 767px) {
      .header-social {
        gap: 0.125rem;
      }

      .social-icon {
        width: 1.75rem;
        height: 1.75rem;
      }
    }

    .main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .section-container {
      padding: 1.5rem 1rem;
      max-width: 980px;
      margin: 0 auto;
    }

    .section-title {
      margin: 0 0 1.5rem 0;
      font-size: 2rem;
      font-weight: 700;
      color: var(--button-bg, #52C8F4);
      border-bottom: 2px solid var(--button-bg, #52C8F4);
      padding-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
      .section-container {
        padding: 1rem;
      }

      .section-title {
        font-size: 1.5rem;
      }
    }
  `;
}
