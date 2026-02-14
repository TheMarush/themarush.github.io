import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("mm-about")
export class MMAbout extends LitElement {
  render() {
    return html`
      <div class="about-container">
        <h2 class="about-title">About Me</h2>
        <div class="about-content">
          <p>Hi! I'm Marie Anna Mahdalová, a digital explorer and Information Science student with a passion for making technology more accessible and human-centered.</p>
          <p>I'm currently pursuing my degree at Masaryk University in Brno, where I focus on metadata systems, information ethics, and digital accessibility. My studies combine information management with a touch of librarianship (though I'm mostly here for the data and human rights applications).</p>
          <p>My journey started at Realgymnasium Komensky in Vienna, a bilingual school that taught me to think critically in both English and German. I also spent a formative year at Ysgol Hirael in Bangor, UK, where I broadened my cultural perspective and developed a deep appreciation for good tea.</p>
          <p>Leadership has always been part of my story. As a School Representative with Schülerunion Österreich, I navigated the fascinating (and occasionally dramatic) world of student advocacy, learning to build consensus, manage conflicts, and represent my peers at international events. Those skills proved invaluable.</p>
          <p>Since 2019, I've been actively involved with Amnesty International, organizing campaigns and raising awareness for human rights causes. I've also gained practical experience through a Google internship in cybersecurity and by developing and delivering cybersecurity workshops for retirement homes and human rights organizations (because digital safety should be accessible to everyone).</p>
          <p>My work experience spans diverse roles: from event security (where I learned that presence matters more than height) to children's camp leadership (where creativity and crisis management go hand-in-hand). I've also engaged with initiatives like the Women's Engagement in Public Spaces project and Wikigap workshops, contributing to better representation both online and offline.</p>
          <p>I'm fluent in Czech and English, conversationally proficient in German, and always working to improve. I'm also an active member of Vienna's geocaching community, where I combine my love of exploration with problem-solving.</p>
          <p>In short: I'm a collaborative thinker who thrives in dynamic environments. I'm passionate about bridging the gap between technology and human needs, and I believe in making knowledge more accessible, ethical, and kind. Let's build something meaningful together.</p>
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .about-container {
      padding: 1.5rem 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .about-title {
      margin: 0 0 1.5rem 0;
      font-size: 2rem;
      font-weight: 700;
      color: var(--button-bg, #52C8F4);
      border-bottom: 2px solid var(--button-bg, #52C8F4);
      padding-bottom: 0.5rem;
    }

    .about-content {
      line-height: 1.8;
      color: inherit;
    }

    .about-content p {
      margin: 0 0 1.25rem 0;
      font-size: 1rem;
    }

    .about-content p:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      .about-container {
        padding: 1rem;
      }

      .about-title {
        font-size: 1.5rem;
      }

      .about-content p {
        font-size: 0.95rem;
        line-height: 1.6;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-about": MMAbout;
  }
}
