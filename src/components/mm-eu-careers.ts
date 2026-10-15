import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./mm-back-button.ts";

@customElement("mm-eu-careers")
export class MMEuCareers extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      --border: #1e2836;
      --text: #e8edf5;
      --text-muted: #7a8a9e;
      --text-dim: #6b8099;
      --highlight: #f0f4ff;
    }

    .page {
      max-width: 980px;
      margin: 0 auto;
      padding: 0 1.5rem 3rem;
      color: var(--text);
      font-family: 'Lora', Georgia, serif;
      font-size: 16.5px;
      line-height: 1.85;
    }

    .back-row {
      padding: 1.5rem 0 0.75rem;
    }

    /* HERO */
    .hero {
      padding: 1.75rem 0 2.5rem;
      border-bottom: 1px solid var(--border);
    }

    h1 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 800;
      line-height: 1.1;
      color: var(--highlight);
      letter-spacing: -0.02em;
      margin-bottom: 1.8rem;
    }

    h1 span { color: var(--button-bg, #52c8f4); }

    .hero-body {
      max-width: 640px;
      color: var(--text-muted);
      font-size: 1rem;
      margin-bottom: 0;
    }

    .hero-below-img {
      margin-top: 1.5rem;
      border-radius: 6px;
      overflow: hidden;
    }

    .hero-below-img img {
      width: 100%;
      height: auto;
      display: block;
    }

    /* SECTIONS */
    .section {
      padding: 2.5rem 0 2rem;
      border-bottom: 1px solid var(--border);
    }

    .section:last-of-type { border-bottom: none; padding-bottom: 0; }

    .section-marker {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.6rem;
      letter-spacing: 0.2em;
      color: var(--text-dim);
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    h2 {
      font-family: 'Syne', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--highlight);
      letter-spacing: -0.01em;
      margin-bottom: 1.2rem;
    }

    p {
      color: var(--text-muted);
      margin-bottom: 1rem;
    }

    p:last-child { margin-bottom: 0; }

    strong { color: var(--highlight); font-weight: 600; }

    em { font-style: italic; }

    a {
      color: var(--button-bg, #52c8f4);
      text-decoration: none;
      border-bottom: 1px solid rgba(82, 200, 244, 0.3);
      transition: border-color 0.2s ease;
    }

    a:hover,
    a:focus-visible {
      border-bottom-color: var(--button-bg, #52c8f4);
    }

    /* CALLOUT */
    .callout {
      border-left: 2px solid var(--button-bg, #52c8f4);
      padding: 1rem 1.4rem;
      background: rgba(82, 200, 244, 0.08);
      border-radius: 0 4px 4px 0;
      margin: 1.5rem 0;
    }

    .callout p {
      color: var(--text);
      margin: 0;
      font-size: 0.95rem;
    }

    @media (max-width: 600px) {
      .page { padding: 0 1.2rem 4rem; }
      h1 { font-size: 1.75rem; }
    }
  `;

  render() {
    return html`
      <div class="page">
        <div class="back-row">
          <mm-back-button label="Back to Projects" href="/projects"></mm-back-button>
        </div>

        <!-- HERO -->
        <div class="hero">
          <h1>Opening doors<br>most students don’t know<br><span>exist.</span></h1>
          <p class="hero-body">
            This year I’m the <strong>EU Careers Student Ambassador for Masaryk University</strong>. The job is simple
            to describe and harder to do: be the person at MUNI who knows how to get a job or a traineeship in the EU
            institutions, and make that information reach people who would never go looking for it.
          </p>
          <div class="hero-below-img">
            <img
              src="/eu-careers/prague-training.jpg"
              alt="EU Careers Student Ambassadors from Czech universities on the staircase of Czernin Palace in Prague"
              loading="lazy"
            />
          </div>
        </div>

        <!-- TRAINING DAY -->
        <div class="section">
          <div class="section-marker">Training Day</div>
          <h2>Prague, Czernin Palace, way too early</h2>
          <p>
            On 14 October, ambassadors from universities all over the Czech Republic met at Czernin Palace for a full
            day of training. It was run by the Diplomatic Academy of the Ministry of Foreign Affairs together with the
            Office of the Government, EPSO (the office that runs EU recruitment) and a few partner institutions.
          </p>
          <p>
            Dana Kovaříková, the director of the Diplomatic Academy, opened with the point that basically sums up the
            whole programme:
          </p>
          <div class="callout">
            <p>An international career looks far away from a lecture hall, but it usually starts in one. And for a lot of students, the ambassador is the first person who ever suggests it.</p>
          </div>
          <p>
            The morning was the practical part: what the role actually involves, which jobs and traineeships exist, and
            how to plan activities and communication at our own universities. In the afternoon we moved to Europa
            Experience and met people from the European Commission Representation in the Czech Republic, the European
            Parliament Liaison Office and EUSPA, the EU Agency for the Space Programme. Yes, the EU has a space
            programme. Yes, it hires people. No, most of my classmates don’t know that.
          </p>
          <p><em>[EDITOR: one thing that surprised you or stuck with you from the day]</em></p>
          <p>
            <a
              href="https://damzv.gov.cz/aktuality/evropska-kariera-zacina-na-univerzitach-skoleni-studentskych-ambasadoru-eu-careers/"
              target="_blank"
              rel="noopener noreferrer"
            >The Diplomatic Academy’s report on the training (CZ)</a>
          </p>
        </div>

        <!-- WHY I SAID YES -->
        <div class="section">
          <div class="section-marker">Why I Said Yes</div>
          <h2>The problem isn’t the jobs. It’s that nobody hears about them.</h2>
          <p>
            The EU employs over 60,000 people across 79 institutions, bodies and agencies, in 24 languages. That is a
            lot of jobs, including plenty for people in IT, data, cybersecurity and communication, not just lawyers and
            economists. And yet most students I know file it under “something for other people.” Too far, too formal,
            too complicated to even start.
          </p>
          <p>
            It’s the same thing I keep running into everywhere else, from feminist workshops to cybersecurity sessions:
            the people who need the information the most are the ones who don’t walk into the room. So the job is to go
            to them, explain it in normal language, and make the first step small enough that people actually take it.
          </p>
          <p>
            Making things less scary for people who’d otherwise opt out is kind of my whole thing at this point.
          </p>
        </div>

        <!-- WHAT'S NEXT -->
        <div class="section">
          <div class="section-marker">What’s Next</div>
          <h2>Now the actual work starts, at MUNI</h2>
          <p><em>[EDITOR: plans for the year at MUNI]</em></p>
        </div>

      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-eu-careers": MMEuCareers;
  }
}
