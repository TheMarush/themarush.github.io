import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("mm-donate")
export class MMDonate extends LitElement {
  render() {
    return html`
      <div class="donate-container">
        <h2 class="donate-title">Support My Journey</h2>
        <p class="donate-tagline">making dreams come true, one step at a time ✨</p>

        <div class="donate-layout">
          <div class="donate-body">
            <p>Hi loves! I'm Marie, an Information Science student living between two countries, juggling 2-3 jobs at a time, volunteering at NGOs, and somehow still finding the hours to chase something bigger. 🫶</p>

            <p class="shop-blurb">My shop is finally here! Every single piece is hand-drawn by me, which still feels wild to say out loud. I chose Tpop because they actually do things right: organic materials, water-based inks, zero plastic, nothing made until someone wants it. It is small and it is mine and it is really bloody good. If something speaks to you, it is there.</p>

            <p>When I'm not working to cover rent and food, I'm studying. When I'm not studying, I'm building. Right now I'm working on an app designed specifically for neurodivergent people, something I believe can genuinely make a difference in how they navigate everyday life. It's the kind of project that doesn't pay yet, but feels too important to put down.</p>

            <p>My life isn't glamorous. I don't live extravagantly, most of what I earn goes straight to the basics. But between the paid side quests that keep the lights on, the volunteer work that keeps me grounded, and the degree I'm determined to finish, I'm building something real, slowly and steadily.</p>

            <p>Your support here helps me cover the essentials while protecting the time and energy I need to keep going. Even a small contribution means one less thing to stress about, and one step closer to a career where I can connect people, knowledge, and creativity in ways that actually matter.</p>

            <p class="no-pressure">And if you're going through a tough time yourself, please keep your money. Truly. Your presence and encouragement already mean the world to me. 🌍✨</p>
          </div>

          <aside class="cta-sidebar">
            <span class="sparkle s1">✦</span>
            <span class="sparkle s2">✧</span>
            <span class="sparkle s3">✦</span>
            <span class="sparkle s4">✧</span>
            <span class="sparkle s5">✦</span>
            <span class="sparkle s6">✧</span>

            <div class="cta-card shop-card">
              <span class="shop-label">Hand-drawn shop</span>
              <a
                href="https://the-marush.tpopsite.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="shop-button"
              >
                Visit the shop
              </a>
            </div>

            <div class="cta-card">
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
          </aside>
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
      max-width: 860px;
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

    /* ── two-column layout ── */
    .donate-layout {
      display: grid;
      grid-template-columns: 1fr 220px;
      gap: 2.5rem;
      align-items: start;
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

    .shop-blurb {
      border: 1px solid rgba(82, 200, 244, 0.45);
      border-radius: 0.6rem;
      padding: 0.9rem 1.1rem;
      background: rgba(82, 200, 244, 0.04);
      color: inherit;
    }

    .no-pressure {
      opacity: 0.75;
      font-style: italic;
    }

    /* ── sidebar ── */
    .cta-sidebar {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 0.5rem 0.25rem;
    }

    .cta-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1.25rem 1rem;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 0.75rem;
      background: rgba(255, 255, 255, 0.03);
    }

    /* ── BMC button ── */
    .bmc-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0.65rem 1rem;
      background-color: #FFDD00;
      color: #000;
      font-size: 0.95rem;
      font-weight: 700;
      border-radius: 0.4rem;
      text-decoration: none;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 2px 10px rgba(255, 221, 0, 0.2);
      white-space: nowrap;
      text-align: center;
    }

    .bmc-button:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 18px rgba(255, 221, 0, 0.35);
      color: #000;
    }

    .qr-code {
      width: 120px;
      height: 120px;
      border-radius: 6px;
      opacity: 0.9;
    }

    /* ── shop card ── */
    .shop-card {
      gap: 0.75rem;
    }

    .shop-label {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--button-bg, #52C8F4);
      opacity: 0.75;
    }

    .shop-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0.65rem 1rem;
      background-color: var(--button-bg, #52C8F4);
      color: #000;
      font-size: 0.95rem;
      font-weight: 700;
      border-radius: 0.4rem;
      text-decoration: none;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 2px 10px rgba(82, 200, 244, 0.2);
      white-space: nowrap;
      text-align: center;
    }

    .shop-button:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 18px rgba(82, 200, 244, 0.35);
      color: #000;
    }

    /* ── sparkles ── */
    .sparkle {
      position: absolute;
      pointer-events: none;
      color: var(--button-bg, #52C8F4);
      animation: twinkle 2.4s ease-in-out infinite;
    }

    .s1 { top: -14px;  left: 18%;  font-size: 1.1rem; animation-delay: 0s;    opacity: 0.5; }
    .s2 { top: 8%;     right: -6px; font-size: 0.75rem; animation-delay: 0.5s; opacity: 0.4; }
    .s3 { top: 38%;    left: -12px; font-size: 1rem;   animation-delay: 1s;   opacity: 0.45; }
    .s4 { top: 55%;    right: 4%;  font-size: 0.65rem; animation-delay: 1.5s; opacity: 0.35; }
    .s5 { bottom: 14%; left: 8%;   font-size: 0.85rem; animation-delay: 0.8s; opacity: 0.5; }
    .s6 { bottom: -10px; right: 22%; font-size: 1rem;  animation-delay: 1.9s; opacity: 0.4; }

    @keyframes twinkle {
      0%, 100% { opacity: 0.15; transform: scale(0.75) rotate(0deg); }
      50%       { opacity: 0.85; transform: scale(1.25) rotate(25deg); }
    }

    /* ── mobile ── */
    @media (max-width: 680px) {
      .donate-layout {
        grid-template-columns: 1fr;
      }

      .cta-sidebar {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }

      .cta-card {
        flex: 1 1 180px;
      }
    }

    @media (max-width: 420px) {
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
