import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("mm-about")
export class MMAbout extends LitElement {
  render() {
    return html`
      <div class="about-container">
        <h2 class="about-title">About Me</h2>
        <div class="about-content">
          <p>Hi! I'm Marie Anna Mahdalová, an Information Science student focused on artificial intelligence, cybersecurity awareness, data analysis, and ethical digital systems. I bring international experience, an analytical mindset, and strong motivation to everything I do.</p>
          <p>I'm currently pursuing my Bachelor's degree at Masaryk University in Brno (2024-2027), where I study AI, Machine Learning, Neural Networks, Data Science, Cybersecurity, and Research Methods. My academic journey started at Realgymnasium Komensky in Vienna, a bilingual school where I specialized in Informatics, Descriptive Geometry, and AutoCAD. I also spent a formative year at Ysgol Hirael in Bangor, UK, where I participated in Math Olympics and Theatre.</p>
          <p>Currently, I'm working as an Assistant at Google (since May 2025), participating in an intensive cybersecurity education programme. I translate acquired knowledge into customized awareness presentations for non-profit organizations and local communities. I'm also working on digital art exhibitions exploring AI interpretation and organizing cybersecurity workshops for elderly communities.</p>
          <p>Leadership has always been part of my story. As an Elected Student Representative with Schülerunion Österreich (2021-2024), I represented student interests nationally and internationally, engaging in youth policy and collaborating with diverse stakeholders across cultural contexts. I've also participated in the Youth Parliament of the Czech Republic international exchange.</p>
          <p>Since 2019, I've been actively volunteering with Amnesty International, organizing campaigns and raising awareness for human rights causes. I'm also a Wikipedia editor and WikiGap participant, working to improve visibility of influential women online. My diverse work experience includes event security at Patronus GmbH in Vienna, children's camp leadership, and serving as an exhibition guide for the Anne Frank Exhibition.</p>
          <p>On the technical side, I work with JavaScript, Python, Data Analysis, Machine Learning, and Web Development. I've completed certifications in Elements of AI and Ethics of AI from the University of Helsinki, along with a 51-hour Soft Skills Programme covering project management, rhetoric, and organizational work.</p>
          <p>I speak Czech (native), Slovak (C1), English (C1), German (B2), and have basic Welsh knowledge. My analytical approach combines technical expertise with ethical considerations, making me effective at bridging complex technical concepts with human-centered applications.</p>
          <p>Fast learner. Highly motivated. I give 110% to everything I do. Let's build something meaningful together.</p>
          <a href="/CV_Mahdlová_Marie_Anna.pdf" download class="cv-download">
            Download CV (PDF)
          </a>
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
      margin-bottom: 1.25rem;
    }

    .cv-download {
      display: inline-block;
      margin-top: 0.5rem;
      padding: 0.75rem 1.5rem;
      background-color: var(--button-bg, #52C8F4);
      color: var(--button-color, #000);
      text-decoration: none;
      border-radius: 4px;
      font-weight: 600;
      transition: opacity 0.2s ease;
    }

    .cv-download:hover {
      opacity: 0.85;
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
