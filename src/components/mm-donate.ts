import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("mm-donate")
export class MMDonate extends LitElement {
  render() {
    return html`
      <div class="donate-container">
        <h2 class="donate-title">Support My Journey</h2>
        <p class="donate-tagline">making dreams come true, one step at a time ✨</p>

        <div class="donate-body">
          <p>Hi loves! I'm Marie, an Information Science student living between two countries, juggling 2-3 jobs at a time, volunteering at NGOs, and somehow still finding the hours to chase something bigger. 🫶</p>

          <p>When I'm not working to cover rent and food, I'm studying. When I'm not studying, I'm building. Right now I'm working on an app designed specifically for neurodivergent people, something I believe can genuinely make a difference in how they navigate everyday life. It's the kind of project that doesn't pay yet, but feels too important to put down.</p>

          <p>My life isn't glamorous. I don't live extravagantly, most of what I earn goes straight to the basics. But between the paid side quests that keep the lights on, the volunteer work that keeps me grounded, and the degree I'm determined to finish, I'm building something real, slowly and steadily.</p>

          <p>Your support here helps me cover the essentials while protecting the time and energy I need to keep going. Even a small contribution means one less thing to stress about, and one step closer to a career where I can connect people, knowledge, and creativity in ways that actually matter.</p>

          <p class="no-pressure">And if you're going through a tough time yourself, please keep your money. Truly. Your presence and encouragement already mean the world to me. 🌍✨</p>
        </div>

        <div class="cta-area">
          <a
            href="https://buymeacoffee.com/TheMarushka"
            target="_blank"
            rel="noopener noreferrer"
            class="bmc-button"
          >
            Buy me a coffee
          </a>
          <img src="/qr-code.png" alt="QR code to Buy Me a Coffee" class="qr-code" />
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .donate-container {
      padding: 1.5rem 1rem;
      max-width: 780px;
      margin: 0 auto;
    }

    .donate-title {
      margin: 0 0 0.4rem 0;
      font-size: 2rem;
      font-weight: 700;
      color: var(--button-bg, #52C8F4);
      border-bottom: 2px solid var(--button-bg, #52C8F4);
      padding-bottom: 0.5rem;
    }

    .donate-tagline {
      margin: 0 0 2rem 0;
      font-size: 0.95rem;
      font-style: italic;
      opacity: 0.6;
    }

    .donate-body {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .donate-body p {
      margin: 0;
      font-size: 1rem;
      line-height: 1.85;
    }

    .no-pressure {
      opacity: 0.75;
      font-style: italic;
    }

    .cta-area {
      margin-top: 2.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
    }

    .bmc-button {
      display: inline-flex;
      align-items: center;
      padding: 0.7rem 1.6rem;
      background-color: #FFDD00;
      color: #000;
      font-size: 1rem;
      font-weight: 700;
      border-radius: 0.4rem;
      text-decoration: none;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 2px 10px rgba(255, 221, 0, 0.2);
      white-space: nowrap;
    }

    .bmc-button:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 18px rgba(255, 221, 0, 0.35);
      color: #000;
    }

    .qr-code {
      width: 140px;
      height: 140px;
      border-radius: 6px;
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      .donate-container {
        padding: 1rem;
      }

      .donate-title {
        font-size: 1.5rem;
      }

      .donate-body p {
        font-size: 0.95rem;
        line-height: 1.7;
      }

    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-donate": MMDonate;
  }
}
