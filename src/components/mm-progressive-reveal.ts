import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("mm-progressive-reveal")
export class MMProgressiveReveal extends LitElement {
  @property({ type: Boolean })
  once: boolean = true;

  private hasActivated = false;
  private observer?: IntersectionObserver;

  connectedCallback() {
    super.connectedCallback();
    if ("IntersectionObserver" in window) {
      this.observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.startSequence();
          }
        }
      });
    }
  }

  firstUpdated() {
    if (this.observer) {
      this.observer.observe(this);
    } else {
      // Fallback: activate immediately
      this.startSequence();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observer?.disconnect();
  }

  private startSequence() {
    if (this.once && this.hasActivated) return;
    this.hasActivated = true;

    const reduceMotion =
      typeof window !== "undefined" &&
      !!window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const fire = (name: string) => {
      this.dispatchEvent(
        new CustomEvent(name, {
          bubbles: true,
          composed: true,
        }),
      );
    };

    if (reduceMotion) {
      fire("progressive-processing");
      fire("progressive-typing");
      fire("progressive-image");
      fire("progressive-keywords");
      return;
    }

    fire("progressive-processing");

    setTimeout(() => fire("progressive-typing"), 500);
    setTimeout(() => fire("progressive-image"), 1500);
    setTimeout(() => fire("progressive-keywords"), 2100);
  }

  // This component only manages timing and events; content comes from the default slot.
  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-progressive-reveal": MMProgressiveReveal;
  }
}

