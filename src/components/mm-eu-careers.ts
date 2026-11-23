import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./mm-back-button.ts";

@customElement("mm-eu-careers")
export class MMEuCareers extends LitElement {
  static styles = css`
    h1, h2, h3, h4 {
      font-family: var(--font-heading);
    }

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
      font-family: var(--font-heading);
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 600;
      line-height: 1.1;
      color: var(--highlight);
      letter-spacing: normal;
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

    /* Article photos reuse the hero image frame; only the caption is new */
    .article-figure {
      margin: 0 0 1rem;
    }

    .article-figure figcaption {
      margin-top: 0.6rem;
      color: var(--text-dim);
      font-size: 0.85rem;
      line-height: 1.5;
    }

    /* Smaller photo to the right of the text; the section grows to contain it */
    .has-aside {
      display: flow-root;
    }

    .article-figure.aside {
      float: right;
      width: min(380px, 45%);
      margin: 0.4rem 0 1rem 1.75rem;
    }

    .article-figure.aside .hero-below-img {
      margin-top: 0;
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
      font-family: var(--font-heading);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--highlight);
      letter-spacing: normal;
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

      .article-figure.aside {
        float: none;
        width: 100%;
        margin: 0 0 1rem;
      }
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

        <!-- EUSPA FIELD TRIP -->
        <div class="section" id="euspa">
          <div class="section-marker">Field Trip</div>
          <h2>Field trip to EUSPA: 50&nbsp;students at the headquarters of the EU Agency for the Space Programme</h2>
          <p>
            On Friday 13&nbsp;November&nbsp;2026, as EU Careers Ambassadors at Masaryk University, we took about
            50&nbsp;students and graduates to the Prague headquarters of EUSPA, the European Union Agency for the Space
            Programme. As part of its Open Days, we heard a talk about the agency’s work and walked through the atrium
            exhibition. We prepared the event ourselves, from promotion all the way to feedback.
          </p>
          <figure class="article-figure">
            <div class="hero-below-img">
              <img
                src="/eu-careers/euspa-group-1600.webp"
                srcset="/eu-careers/euspa-group-800.webp 800w, /eu-careers/euspa-group-1600.webp 1600w"
                sizes="(max-width: 980px) 100vw, 932px"
                width="1600"
                height="857"
                alt="A large group of students standing and crouching in front of the EUSPA logo and a white relief wall in the atrium of the agency’s Prague headquarters"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption>Participants of the field trip at EUSPA’s headquarters in Prague, 13&nbsp;November&nbsp;2026</figcaption>
          </figure>
        </div>

        <div class="section">
          <div class="section-marker">The Agency</div>
          <h2>What EUSPA is</h2>
          <p>
            EUSPA is based in Holešovice, Prague. It has operated under this name since 12&nbsp;May&nbsp;2021 and
            follows on from the European GNSS Agency (GSA), founded in 2004. It provides the services of the European
            satellite navigation systems Galileo and EGNOS and supports the use of data from Copernicus, the EU’s Earth
            observation programme. It also works on secure satellite communication (GOVSATCOM and IRIS²) and runs the
            EU contact point for tracking objects in space (the EU SST Front Desk).
          </p>
        </div>

        <div class="section">
          <div class="section-marker">The Visit</div>
          <h2>How the field trip went</h2>
          <p>
            The main part of the programme was a talk by a representative of EUSPA’s HR department. She showed what the
            agency does in practice: how Galileo satellites make positioning more accurate in phones and other devices,
            or how satellite images are used to map deforestation and the spread of deserts. Careers and traineeships
            got only a brief mention.
          </p>
          <p>
            After the talk we walked through the atrium on the first floor. It had infographics with statistics, a
            model, photographs and a photo booth, where our team photo was taken.
          </p>
        </div>

        <div class="section has-aside">
          <div class="section-marker">My Role</div>
          <h2>My role</h2>
          <figure class="article-figure aside">
            <div class="hero-below-img">
              <img
                src="/eu-careers/euspa-photo-booth-1600.webp"
                srcset="/eu-careers/euspa-photo-booth-800.webp 800w, /eu-careers/euspa-photo-booth-1600.webp 1600w"
                sizes="(max-width: 600px) 100vw, 380px"
                width="1600"
                height="1067"
                alt="Four EU Careers Ambassadors laughing in the EUSPA photo booth in front of a rocket launch backdrop, holding props: two EU flags, a cartoon EGNOS plane and a “My phone loves Galileo” satellite sign"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption>The EU Careers Ambassadors MUNI team in the EUSPA photo booth</figcaption>
          </figure>
          <p>
            I organised the field trip together with the other EU Careers ambassadors at MUNI. We prepared an Instagram
            post and a registration form with 60&nbsp;places, arranged the meeting point and entry to the building, and
            after the event we sent participants a feedback questionnaire.
          </p>
        </div>

        <div class="section">
          <div class="section-marker">Feedback</div>
          <h2>What the feedback showed</h2>
          <p>
            8&nbsp;participants filled in the questionnaire. They rated our organisation 4.2&nbsp;out of&nbsp;5 on
            average. They found the talk clear (4.0&nbsp;out of&nbsp;5) and interesting (4.1&nbsp;out of&nbsp;5), but
            only 2.4&nbsp;out of&nbsp;5 useful for their careers. The overall impression of the field trip came out at
            3.1&nbsp;out of&nbsp;5. What participants appreciated most was the overview of everything the agency keeps
            track of. What they missed was more detailed career information and the chance to see parts of the building
            other than the atrium.
          </p>
        </div>

        <div class="section">
          <div class="section-marker">Next Time</div>
          <h2>What I’m taking into the next one</h2>
          <p>
            <strong>Name the event accurately.</strong> When the programme is mainly a talk and a walk through the
            atrium, I won’t promote it as a field trip. I’ll describe what participants will actually get.
          </p>
          <p>
            <strong>Agree on the programme in advance.</strong> Clarify with the host institution where we’ll be able
            to go, who will give the talk and how much of it will be about careers and traineeships.
          </p>
          <p>
            <strong>Cover the career part ourselves.</strong> If the host doesn’t cover it, we as ambassadors will
            prepare a short session on traineeships and EU selection procedures.
          </p>
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
