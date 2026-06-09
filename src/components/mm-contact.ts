import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("mm-contact")
export class MMContact extends LitElement {
  private _handleDontClick(e: Event) {
    e.preventDefault();
    this.dispatchEvent(
      new CustomEvent("jackie-click", {
        detail: { imageUrl: "/jackie.png" },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      <div class="contact-container">
        <h2 class="contact-title">Contact</h2>
        <p class="contact-intro">If you'd like to say hi, pitch a project, or share a joke: here's where to do it!</p>

        <form 
          action="https://formsubmit.co/marush.the.first%40gmail.com"
          method="POST" 
          class="contact-form">
          <!-- Protect from spam -->
          <input type="text" name="_honey" style="display:none">
          <input type="hidden" name="_captcha" value="false">
          <!-- Redirect after successful submission -->
          <input type="hidden" name="_next" value="https://themarush.github.io/thank-you.html">
          <input type="hidden" name="_subject" value="[themarush.github.io] New message">

          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" required>

          <label for="email">Your Email</label>
          <input type="email" id="email" name="email" required>

          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit" class="contact-submit-button">Send Message</button>
        </form>

        <div class="contact-links">
          <p class="contact-links-label">Find me elsewhere</p>
          <div class="social-grid">
            <a href="https://github.com/TheMarush" target="_blank" rel="noopener" class="social-card">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a href="https://www.instagram.com/the.marush.eu/" target="_blank" rel="noopener" class="social-card">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/in/marie-anna-mahdlová-a81299305" target="_blank" rel="noopener" class="social-card">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>

          <p class="dont-click-wrapper">
            <a href="#" class="dont-click-link" @click=${this._handleDontClick}>Don't click me</a>
          </p>
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .contact-container {
      padding: 1.5rem 1rem;
      max-width: 980px;
      margin: 0 auto;
    }

    .contact-title {
      margin: 0 0 1.5rem 0;
      font-size: 2rem;
      font-weight: 700;
      color: var(--button-bg, #52C8F4);
      border-bottom: 2px solid var(--button-bg, #52C8F4);
      padding-bottom: 0.5rem;
    }

    .contact-intro {
      margin: 0 0 1.5rem 0;
      line-height: 1.8;
      color: inherit;
      font-size: 1rem;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-top: 1.25rem;
    }

    .contact-form label {
      font-weight: bold;
      margin-bottom: 0.25rem;
      color: inherit;
    }

    .contact-form input,
    .contact-form textarea {
      padding: 0.625rem;
      border-radius: 0.375rem;
      border: none;
      font-size: 1em;
      background-color: #222;
      color: #fff;
      resize: vertical;
      font-family: inherit;
    }

    .contact-form input:focus,
    .contact-form textarea:focus {
      outline: 0.125rem solid #3D5073;
    }

    .contact-submit-button {
      display: block;
      font-size: 1.25rem;
      margin: 0.125rem;
      padding: 0.5rem 0.75rem;
      border-radius: 0.3rem;
      font-weight: bold;
      border: none;
      cursor: pointer;
      text-decoration: none;
      text-align: center;
      transition: transform var(--transition-time, 0.5s) ease, 
                  background-color var(--transition-time, 0.5s) ease, 
                  color var(--transition-time, 0.5s) ease;
      width: 12.5rem;
      background-color: var(--button-bg, #52C8F4);
      color: var(--button-color, #000);
      margin-top: 0.5rem;
    }

    .contact-submit-button:hover {
      transform: scale(1.05);
      background-color: #0B1DB4;
      color: #fff;
    }

    .contact-submit-button:focus,
    .contact-submit-button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    .contact-links {
      margin-top: 2rem;
    }

    .contact-links-label {
      margin: 0 0 0.875rem 0;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #6b7280;
    }

    .social-grid {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .social-card {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      padding: 0.75rem 1.125rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      color: #9ca3af;
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      background: rgba(255, 255, 255, 0.02);
      transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
    }

    .social-card:hover {
      color: #52C8F4;
      border-color: rgba(82, 200, 244, 0.45);
      background: rgba(82, 200, 244, 0.06);
      transform: translateY(-2px);
    }

    .dont-click-wrapper {
      margin-top: 1.5rem;
      margin-bottom: 0;
    }

    .dont-click-link {
      color: #555;
      text-decoration: none;
      font-size: 0.8rem;
      font-weight: normal;
      font-style: italic;
      opacity: 0.6;
      transition: opacity 0.3s ease, color 0.3s ease;
    }

    .dont-click-link:hover {
      opacity: 1;
      color: #888;
    }

    @media (max-width: 768px) {
      .contact-container {
        padding: 1rem;
      }

      .contact-title {
        font-size: 1.5rem;
      }

      .contact-intro {
        font-size: 0.95rem;
        line-height: 1.6;
      }

      .contact-submit-button {
        width: 100%;
      }
    }

  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-contact": MMContact;
  }
}
