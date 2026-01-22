import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/mm-button.ts";
import "./components/mm-modal.ts";
import "./components/mm-menu.ts";
import "./components/mm-semester.ts";
import "./components/mm-testimonials.ts";
import "./components/mm-gallery.ts";
import "./components/mm-about.ts";
import "./components/mm-contact.ts";
import "./components/mm-racoon.ts";
import { galleryImages } from "./data/gallery.js";
import { semester1, semester2, semester3 } from "./data/semesters.js";
import { testimonials } from "./data/testimonials.js";
import { ModalController } from "./utils/modal.js";

@customElement("mm-app")
export class App extends LitElement {
  private modal = new ModalController(this);

  render() {
    return html`
      ${
        this.modal.isOpen
          ? html`
        <mm-modal
          message=${this.modal.message}
          image=${this.modal.image}
          .closing=${this.modal.isClosing}
          @close=${() => this.modal.close()}>
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
            { id: "contact", label: "Contact" },
            {
              id: "study",
              label: "Study",
              submenu: [
                { id: "semester-1", label: "Semester 1" },
                { id: "semester-2", label: "Semester 2" },
                { id: "semester-3", label: "Semester 3" },
                { id: "semester-4", label: "Semester 4" },
                { id: "semester-5", label: "Semester 5" },
              ],
            },
          ]}
          position="left">
          <div slot="gallery">
            <mm-gallery .images=${galleryImages}></mm-gallery>
          </div>
          <div slot="about">
            <mm-about></mm-about>
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
            <div class="section-container">
              <h2 class="section-title">KISK MUNI</h2>
            <p>Somewhere along the way, I stopped thinking of information science as a dry field with a misleading name. I began to see how deeply it connects with the world around me, with ethics, with technology, with education, with people. I found a space that doesn't just teach tools but challenges ideas. A space that values reflection as much as innovation.</p>
            <p>And honestly? That's not why I came here.</p>
            <p>I chose KISK because I was looking for the theoretical side of AI. I wasn't interested in librarianship or particularly drawn to the idea of working with information. But the further I got, the more it all started making sense—how knowledge is structured, how it flows, and how much power there is in understanding it. I didn't know it then, but I had landed in exactly the right place.</p>
            <p>Explore my academic adventures semester by semester:</p>
            </div>
          </div>
          <div slot="semester-1">
            <mm-semester .semester=${semester1}></mm-semester>
          </div>
          <div slot="semester-2">
            <mm-semester .semester=${semester2}></mm-semester>
          </div>
          <div slot="semester-3">
            <mm-semester .semester=${semester3}></mm-semester>
          </div>
          <div slot="semester-4">
            <div class="section-container">
              <h2 class="section-title">Semester 4</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
          <div slot="semester-5">
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
      max-width: 900px;
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
