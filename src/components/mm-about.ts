import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("mm-about")
export class MMAbout extends LitElement {
  render() {
    return html`
      <div class="about-container">
        <h2 class="about-title">About Me</h2>

        <p class="intro">Hi! I'm Marie Anna Mahdalová, an Information Science student focused on artificial intelligence, cybersecurity awareness, data analysis, and ethical digital systems. I bring international experience, an analytical mindset, and strong motivation to everything I do.</p>

        <div class="sections">

          <section class="section section--education">
            <h3 class="section-title">Education</h3>
            <p>I'm currently pursuing my Bachelor's degree at Masaryk University in Brno (2024–2027), studying AI, Machine Learning, Neural Networks, Data Science, Cybersecurity, and Research Methods. My academic journey started at Realgymnasium Komensky in Vienna, a bilingual school where I specialised in Informatics, Descriptive Geometry, and AutoCAD. I also spent a formative year at Ysgol Hirael in Bangor, UK, where I participated in Math Olympics and Theatre.</p>
          </section>

          <section class="section section--work">
            <h3 class="section-title">Work</h3>
            <p>I'm working as an Assistant at Google (since May 2025), participating in an intensive cybersecurity education programme. I translate acquired knowledge into customised awareness presentations for non-profit organisations and local communities. I'm also developing digital art exhibitions exploring AI interpretation and organising cybersecurity workshops for elderly communities.</p>
          </section>

          <section class="section section--leadership">
            <h3 class="section-title">Leadership</h3>
            <p>As an Elected Student Representative with Schülerunion Österreich (2021–2024), I represented student interests nationally and internationally, engaging in youth policy and collaborating with diverse stakeholders across cultural contexts. I've also participated in the Youth Parliament of the Czech Republic international exchange.</p>
          </section>

          <section class="section section--volunteering">
            <h3 class="section-title">Volunteering</h3>
            <p>Since 2019, I've been actively volunteering with Amnesty International, organising campaigns and raising awareness for human rights causes. I'm also a Wikipedia editor and WikiGap participant, working to improve the visibility of influential women online. My broader experience includes event security at Patronus GmbH in Vienna, children's camp leadership, and serving as an exhibition guide for the Anne Frank Exhibition.</p>
          </section>

          <section class="section section--skills">
            <h3 class="section-title">Technical Skills</h3>
            <p>I work with JavaScript, Python, Data Analysis, Machine Learning, and Web Development. I've completed certifications in Elements of AI and Ethics of AI from the University of Helsinki, along with a 51-hour Soft Skills Programme covering project management, rhetoric, and organisational work.</p>
          </section>

          <section class="section section--languages">
            <h3 class="section-title">Languages</h3>
            <p>Czech (native) &middot; Slovak (C1) &middot; English (C1) &middot; German (B2) &middot; Welsh (basic)</p>
          </section>

        </div>

        <p class="closing">Fast learner. Highly motivated. I give 110% to everything I do. Let's build something meaningful together.</p>
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
      margin: 0 0 1.25rem 0;
      font-size: 2rem;
      font-weight: 700;
      color: var(--button-bg, #52C8F4);
      border-bottom: 2px solid var(--button-bg, #52C8F4);
      padding-bottom: 0.5rem;
    }

    .intro {
      font-size: 1.05rem;
      line-height: 1.8;
      margin: 0 0 2rem 0;
      color: inherit;
    }

    .sections {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .section {
      border-left: 4px solid;
      padding: 1rem 1.25rem;
      border-radius: 0 6px 6px 0;
    }

    .section-title {
      margin: 0 0 0.6rem 0;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .section p {
      margin: 0;
      line-height: 1.8;
      font-size: 1rem;
      color: inherit;
    }

    /* Per-section colour theming */
    .section--education {
      border-color: #52C8F4;
      background: rgba(82, 200, 244, 0.06);
    }
    .section--education .section-title { color: #52C8F4; }

    .section--work {
      border-color: #34D399;
      background: rgba(52, 211, 153, 0.06);
    }
    .section--work .section-title { color: #34D399; }

    .section--leadership {
      border-color: #A78BFA;
      background: rgba(167, 139, 250, 0.06);
    }
    .section--leadership .section-title { color: #A78BFA; }

    .section--volunteering {
      border-color: #F472B6;
      background: rgba(244, 114, 182, 0.06);
    }
    .section--volunteering .section-title { color: #F472B6; }

    .section--skills {
      border-color: #FBBF24;
      background: rgba(251, 191, 36, 0.06);
    }
    .section--skills .section-title { color: #FBBF24; }

    .section--languages {
      border-color: #F87171;
      background: rgba(248, 113, 113, 0.06);
    }
    .section--languages .section-title { color: #F87171; }

    .closing {
      margin: 2rem 0 0 0;
      font-size: 1rem;
      font-style: italic;
      line-height: 1.8;
      color: inherit;
      opacity: 0.85;
    }

    @media (max-width: 768px) {
      .about-container {
        padding: 1rem;
      }

      .about-title {
        font-size: 1.5rem;
      }

      .intro,
      .section p,
      .closing {
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
