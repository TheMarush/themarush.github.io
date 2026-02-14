import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { Semester } from "../types/study.js";

@customElement("mm-study")
export class MMStudy extends LitElement {
  @property({ type: Array })
  semesters: Semester[] = [];

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .container {
      padding: 1.5rem 1rem;
      max-width: 1120px;
      margin: 0 auto;
      color: inherit;
    }

    .title {
      margin: 0 0 1.5rem 0;
      font-size: 2rem;
      font-weight: 700;
      color: var(--button-bg, #52c8f4);
      border-bottom: 2px solid var(--button-bg, #52c8f4);
      padding-bottom: 0.5rem;
    }

    .intro {
      max-width: 720px;
      font-size: 0.96rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .intro p {
      margin: 0 0 1rem 0;
    }

    .intro p:last-child {
      margin-bottom: 0;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1rem;
    }

    .card {
      border-radius: 0.9rem;
      border: 1px solid rgba(148, 163, 184, 0.4);
      background: radial-gradient(
          circle at top left,
          rgba(15, 23, 42, 0.96),
          rgba(15, 23, 42, 0.9)
        ),
        #020617;
      padding: 1.1rem 1.2rem;
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      color: #f9fafb;
    }

    .card-meta {
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #9ca3af;
    }

    .card-title {
      font-size: 1.1rem;
      font-weight: 600;
    }

    .card-body {
      font-size: 0.9rem;
      color: #d1d5db;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .card-subjects {
      font-size: 0.82rem;
      color: #9ca3af;
      margin-top: 0.25rem;
    }

    .cta-row {
      margin-top: auto;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.85rem;
    }

    .cta-btn {
      background: none;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.7);
      padding: 0.25rem 0.75rem;
      color: inherit;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.83rem;
    }

    .cta-btn:focus-visible {
      outline: 2px solid var(--button-bg, #52c8f4);
      outline-offset: 2px;
    }

    @media (max-width: 768px) {
      .container {
        padding: 1rem;
      }

      .title {
        font-size: 1.5rem;
      }
    }
  `;

  render() {
    return html`
      <section class="container" aria-labelledby="study-title">
        <h2 id="study-title" class="title">KISK MUNI</h2>
        <div class="intro">
          <p>Somewhere along the way, I stopped thinking of information science as a dry field with a misleading name. I began to see how deeply it connects with the world around me, with ethics, with technology, with education, with people. I found a space that doesn't just teach tools but challenges ideas. A space that values reflection as much as innovation.</p>
          <p>And honestly? That's not why I came here.</p>
          <p>I chose KISK because I was looking for the theoretical side of AI. I wasn't interested in librarianship or particularly drawn to the idea of working with information. But the further I got, the more it all started making sense: how knowledge is structured, how it flows, and how much power there is in understanding it. I didn't know it then, but I had landed in exactly the right place.</p>
          <p>Explore my academic adventures semester by semester:</p>
        </div>

        <div class="grid">
          ${this.semesters.map(
            (semester) => html`
              <article class="card" aria-labelledby="${semester.id}-title">
                <div class="card-meta">${semester.subjects.length} subjects · ${semester.credits} ECTS</div>
                <h3 id="${semester.id}-title" class="card-title">${semester.name}</h3>
                <p class="card-body">${semester.note}</p>
                <div class="cta-row">
                  <button
                    type="button"
                    class="cta-btn"
                    @click=${() => {
                      window.location.hash = `#/${semester.id}`;
                    }}
                  >
                    <span>View semester</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            `,
          )}
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-study": MMStudy;
  }
}
