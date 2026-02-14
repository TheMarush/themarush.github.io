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
          action="https://formsubmit.co/marush.the.first@gmail.com" 
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
          <p>Find me elsewhere:</p>
          <a href="https://github.com/TheMarush" target="_blank" class="contact-link">GitHub</a> |
          <a href="https://www.strava.com/athletes/130258990" target="_blank" class="contact-link">Strava</a> |
          <a href="https://youtube.com/@marieannam.7648?si=VtgVY0MjdPS7CrD0" target="_blank" class="contact-link">YouTube</a> |
          <a href="https://www.linkedin.com/in/marie-anna-mahdlová-a81299305" target="_blank" class="contact-link">LinkedIn</a>

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
      max-width: 1200px;
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
      margin-top: 1.25rem;
      text-align: center;
      font-style: italic;
      color: #ccc;
    }

    .contact-links p {
      margin: 0 0 0.5rem 0;
    }

    .contact-link {
      color: var(--button-bg, #52C8F4);
      text-decoration: none;
      font-weight: bold;
      margin: 0 0.3125rem;
      transition: color 0.3s ease;
    }

    .contact-link:hover {
      color: #0B1DB4;
    }

    .dont-click-wrapper {
      margin-top: 1rem;
      margin-bottom: 0;
    }

    .dont-click-link {
      color: #666;
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: normal;
      font-style: italic;
      opacity: 0.6;
      transition: opacity 0.3s ease, color 0.3s ease;
    }

    .dont-click-link:hover {
      opacity: 1;
      color: #999;
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

    @media (prefers-color-scheme: light) {
      .contact-form input,
      .contact-form textarea {
        background-color: #f9f9f9;
        color: #213547;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-contact": MMContact;
  }
}
