import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("mm-about")
export class MMAbout extends LitElement {
  render() {
    return html`
      <div class="about-container">
        <h2 class="about-title">About Me</h2>
        <div class="about-content">
          <p>Hi! I'm Marie Anna Mahdalová – a digital human, caffeine-powered student, and aspiring knowledge sorceress. This portfolio is basically my academic mixtape.</p>
          <p>I'm currently studying Information Science at Masaryk University in Brno, where I dive deep into things like metadata, information ethics, and the occasional existential crisis about people. There's also a tiny sprinkle of librarianship in the program, but we're all politely pretending that's not happening.</p>
          <p>Before that, I graduated from the Realgymnasium Komensky in Vienna, a bilingual school where I learned to fluently stress in both English and German. I even spent a year in the UK at Ysgol Hirael in Bangor, expanding my global perspective and perfecting my tea-drinking skills.</p>
          <p>Alongside my studies, I've always loved taking the lead and getting involved. As a School Representative, I got a taste of educational politics. And let me tell you, it's not that different from the real thing. People argue, cheat, form alliances, and yes... we even had our share of mini-scandals. I waved the flag (literally and metaphorically) at international student events and learned how to survive a meeting without screaming. Growth!</p>
          <p>Since 2019, I've also been part of Amnesty International — helping organize campaigns, raise awareness, and fight the good fight for human rights, one poster at a time.</p>
          <p>Work-wise? I've tried a bit of everything: including event security, where I may be five-foot-nothing, but I am terrifying when necessary. I also spent a summer as a children's camp leader, where I kept the chaos, fun and the kids alive. Both noble achievements.</p>
          <p>On top of that, I've taken part in workshops and certifications that covered everything from public speaking to project management. I've been involved in cool initiatives like the Women's Engagement in Public Spaces project and the Wikigap workshop — because representation matters (online and offline).</p>
          <p>Languages? Czech and English: fluent. German: somewhere between Goethe and Google Translate. But I'm always learning.</p>
          <p>In short: I'm a team player, an idea generator, and a pretty decent person to have around when things get chaotic. I love learning, collaborating, and figuring out how to make this world a little smarter (and kinder). Let's see what's next!</p>
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
