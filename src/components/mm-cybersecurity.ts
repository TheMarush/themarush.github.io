import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./mm-back-button.ts";

@customElement("mm-cybersecurity")
export class MMCybersecurity extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .page {
      max-width: 900px;
      margin: 0 auto;
      padding: 1.5rem 1rem 3rem;
      color: #f9fafb;
    }

    .back-row {
      display: flex;
      align-items: center;
      margin-bottom: 1.25rem;
    }

    /* ── HEADER ── */
    .header {
      padding: 1rem 0 2rem;
      border-bottom: 1px solid rgba(148, 163, 184, 0.12);
      margin-bottom: 0;
    }

    .header-tag {
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      color: var(--button-bg, #52c8f4);
      text-transform: uppercase;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .header-tag::before {
      content: '';
      display: block;
      width: 24px;
      height: 1px;
      background: var(--button-bg, #52c8f4);
    }

    .google-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.9));
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 4px;
      padding: 0.3rem 0.75rem;
      font-size: 0.65rem;
      letter-spacing: 0.08em;
      color: #9ca3af;
      margin-bottom: 1.5rem;
    }

    .google-dots {
      display: inline-flex;
      align-items: center;
    }

    .google-dot {
      display: inline-block;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      margin: 0 1px;
    }

    .dot-b { background: #4285F4; }
    .dot-r { background: #EA4335; }
    .dot-y { background: #FBBC05; }
    .dot-g { background: #34A853; }

    .title-link {
      text-decoration: none;
      color: inherit;
      display: inline-block;
    }

    h1 {
      margin: 0 0 0.5rem;
      font-size: clamp(1.6rem, 4vw, 2.4rem);
      font-weight: 700;
      color: #f0f4ff;
      line-height: 1.15;
      letter-spacing: -0.01em;
      transition: color 150ms ease;
    }

    .title-link:hover h1 {
      color: var(--button-bg, #52c8f4);
    }

    h1 em {
      font-style: normal;
      color: var(--button-bg, #52c8f4);
    }

    .subtitle {
      font-size: 0.8rem;
      color: #9ca3af;
      letter-spacing: 0.05em;
      margin-bottom: 1.5rem;
    }

    .header-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      margin-top: 1.5rem;
    }

    .meta-item {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    .meta-label {
      font-size: 0.6rem;
      letter-spacing: 0.15em;
      color: #6b7280;
      text-transform: uppercase;
    }

    .meta-value {
      font-size: 0.85rem;
      font-weight: 600;
      color: #f9fafb;
    }

    /* ── SECTIONS ── */
    .section {
      padding: 2.5rem 0;
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    }

    .section:last-child {
      border-bottom: none;
    }

    .section-label {
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      color: var(--button-bg, #52c8f4);
      text-transform: uppercase;
      margin-bottom: 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .section-label::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, rgba(148, 163, 184, 0.2), transparent);
    }

    h2 {
      margin: 0 0 1rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #f0f4ff;
      letter-spacing: -0.01em;
    }

    h3 {
      margin: 0 0 0.4rem;
      font-size: 1rem;
      font-weight: 700;
      color: #f0f4ff;
    }

    p {
      color: #9ca3af;
      margin: 0 0 0.85rem;
      font-size: 0.97rem;
      line-height: 1.8;
    }

    strong {
      color: #f0f4ff;
      font-weight: 600;
    }

    /* ── CALLOUT ── */
    .callout {
      background: rgba(82, 200, 244, 0.07);
      border-left: 3px solid var(--button-bg, #52c8f4);
      border-radius: 0 6px 6px 0;
      padding: 1rem 1.25rem;
      margin: 1.25rem 0;
    }

    .callout p {
      color: #e5e7eb;
      margin: 0;
    }

    .callout strong {
      color: var(--button-bg, #52c8f4);
    }

    /* ── STATS ── */
    .stats-row {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 0.75rem;
      margin: 1.25rem 0;
    }

    .stat {
      background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.9)), #020617;
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 8px;
      padding: 1.1rem 0.9rem;
      text-align: center;
    }

    .stat-number {
      font-size: 1.7rem;
      font-weight: 800;
      color: var(--button-bg, #52c8f4);
      line-height: 1;
      margin-bottom: 0.25rem;
    }

    .stat-label {
      font-size: 0.62rem;
      letter-spacing: 0.1em;
      color: #9ca3af;
      text-transform: uppercase;
    }

    /* ── TIMELINE ── */
    .timeline {
      position: relative;
      padding-left: 1.5rem;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.5rem;
      bottom: 0;
      width: 1px;
      background: linear-gradient(180deg, var(--button-bg, #52c8f4) 0%, rgba(148, 163, 184, 0.1) 100%);
    }

    .timeline-item {
      position: relative;
      padding-bottom: 2.25rem;
      padding-left: 1.5rem;
    }

    .timeline-item:last-child {
      padding-bottom: 0;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -1.5rem;
      top: 0.5rem;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--button-bg, #52c8f4);
      border: 2px solid #020617;
      box-shadow: 0 0 0 1px var(--button-bg, #52c8f4);
    }

    .timeline-date {
      font-size: 0.65rem;
      letter-spacing: 0.12em;
      color: var(--button-bg, #52c8f4);
      text-transform: uppercase;
      margin-bottom: 0.35rem;
    }

    /* ── CARDS ── */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 0.9rem;
      margin-top: 1.25rem;
    }

    .card {
      background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.9)), #020617;
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 0.75rem;
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
      transition: border-color 200ms ease, transform 200ms ease;
    }

    .card:hover {
      border-color: rgba(82, 200, 244, 0.35);
      transform: translateY(-2px);
    }

    .card-icon {
      font-size: 1.4rem;
    }

    .card h3 {
      font-size: 0.9rem;
    }

    .card p {
      font-size: 0.82rem;
      margin: 0;
      line-height: 1.6;
    }

    /* ── PLACEMENT BLOCKS ── */
    .placement {
      background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.9)), #020617;
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 8px;
      padding: 1.6rem;
      margin-bottom: 1.1rem;
      position: relative;
      overflow: hidden;
    }

    .placement::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background: var(--button-bg, #52c8f4);
    }

    .placement-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 0.9rem;
    }

    .placement-org {
      font-size: 1rem;
      font-weight: 700;
      color: #f0f4ff;
    }

    .tag-row {
      display: flex;
      gap: 0.4rem;
      flex-wrap: wrap;
    }

    .tag {
      font-size: 0.62rem;
      letter-spacing: 0.1em;
      color: var(--button-bg, #52c8f4);
      background: rgba(82, 200, 244, 0.08);
      border: 1px solid rgba(82, 200, 244, 0.2);
      border-radius: 3px;
      padding: 0.2rem 0.5rem;
      text-transform: uppercase;
    }

    .tag.signed {
      color: #6ee7b7;
      background: rgba(110, 231, 183, 0.08);
      border-color: rgba(110, 231, 183, 0.2);
    }

    .contract-note {
      font-size: 0.68rem;
      color: #6b7280;
      letter-spacing: 0.04em;
      margin: 0.5rem 0 0;
    }

    /* ── LETTER BOX ── */
    .letter-box {
      background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.9)), #020617;
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 8px;
      padding: 1.75rem;
      margin-top: 1.25rem;
    }

    .letter-meta {
      font-size: 0.65rem;
      color: #6b7280;
      margin-bottom: 0.85rem;
      letter-spacing: 0.06em;
    }

    .letter-text {
      color: #e5e7eb;
      font-style: italic;
      margin: 0;
    }

    /* ── EXPERT GRID ── */
    .expert-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
      gap: 0.65rem;
      margin-top: 0.85rem;
    }

    .expert {
      background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.9)), #020617;
      border: 1px solid rgba(148, 163, 184, 0.15);
      border-radius: 6px;
      padding: 0.85rem 1rem;
    }

    .expert-name {
      font-size: 0.82rem;
      font-weight: 600;
      color: #f0f4ff;
      margin-bottom: 0.12rem;
    }

    .expert-org {
      font-size: 0.62rem;
      color: #6b7280;
    }

    /* ── CHIPS ── */
    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin-top: 0.85rem;
    }

    .chip {
      font-size: 0.7rem;
      color: #9ca3af;
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid rgba(148, 163, 184, 0.18);
      border-radius: 20px;
      padding: 0.28rem 0.75rem;
    }

    .city-chip {
      font-size: 0.72rem;
      color: var(--button-bg, #52c8f4);
      background: rgba(82, 200, 244, 0.07);
      border: 1px solid rgba(82, 200, 244, 0.2);
      border-radius: 4px;
      padding: 0.28rem 0.65rem;
    }

    .skill-chip {
      font-size: 0.68rem;
      color: #f0f4ff;
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid rgba(148, 163, 184, 0.18);
      border-radius: 4px;
      padding: 0.28rem 0.65rem;
    }

    /* ── SUB-HEADING ── */
    .sub-heading {
      font-size: 1rem;
      font-weight: 600;
      color: #f0f4ff;
      margin: 1.5rem 0 0.75rem;
    }

    /* ── PHOTO PLACEHOLDER ── */
    .photo-placeholder {
      border: 1px dashed rgba(148, 163, 184, 0.2);
      border-radius: 8px;
      padding: 2.5rem 2rem;
      text-align: center;
      background: rgba(15, 23, 42, 0.5);
      margin: 1.5rem 0;
    }

    .ph-icon {
      font-size: 1.8rem;
      margin-bottom: 0.65rem;
    }

    .photo-placeholder p {
      font-size: 0.7rem;
      color: #6b7280;
      margin: 0;
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 600px) {
      h1 { font-size: 1.55rem; }
      .stats-row { grid-template-columns: repeat(2, 1fr); }
      .header-meta { gap: 1rem; }
    }
  `;

  render() {
    return html`
      <div class="page">
        <div class="back-row">
          <mm-back-button label="Back to Projects" href="/projects"></mm-back-button>
        </div>

        <!-- HEADER -->
        <div class="header">
          <div class="header-tag">Portfolio · Cybersecurity Engagement</div>

          <div class="google-badge">
            <span class="google-dots">
              <span class="google-dot dot-b"></span>
              <span class="google-dot dot-r"></span>
              <span class="google-dot dot-y"></span>
              <span class="google-dot dot-g"></span>
            </span>
            Google Cybersecurity Seminars &nbsp;·&nbsp; with support from Google.org &nbsp;·&nbsp; Masaryk University ARTS
          </div>

          <a
            class="title-link"
            href="https://cyberseminars.withgoogle.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Google Cybersecurity Seminars website"
          >
            <h1>From Classroom to Community:<br><em>Cybersecurity as Public Service</em></h1>
          </a>

          <div class="subtitle">Marie Anna Mahdalová · Informační studia, Masarykova univerzita · 2025–2026</div>

          <div class="header-meta">
            <div class="meta-item">
              <span class="meta-label">Programme</span>
              <span class="meta-value">Czech Cybersecurity Seminars (CSS)</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Funder</span>
              <span class="meta-value">Google.org / Silicon Valley Community Foundation</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">University</span>
              <span class="meta-value">Masarykova univerzita · Filozofická fakulta</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Duration</span>
              <span class="meta-value">May 2025 – May 2026</span>
            </div>
          </div>
        </div>

        <!-- 01 ABOUT -->
        <div class="section">
          <div class="section-label">01 · About the Programme</div>
          <h2>What is Czech Cybersecurity Seminars?</h2>
          <p>
            <strong>Czech Cybersecurity Seminars (CSS)</strong> is a Masaryk University initiative funded by a grant
            from Google.org through the Silicon Valley Community Foundation. Its mission is to connect academic
            cybersecurity expertise with local communities across the Czech Republic, strengthening digital resilience
            outside the university walls.
          </p>
          <p>
            Students participate in hands-on internships (<em>stáže</em>), designing and delivering educational
            interventions for organisations that lack the cybersecurity resources of larger institutions — think care
            homes, civil society organisations, and libraries.
          </p>
          <div class="callout">
            <p>
              <strong>Core principle:</strong> Academic knowledge only creates value when it leaves the university.
              CSS operationalises the "third role" of the university — direct engagement with and service to society —
              through student-led cybersecurity placements.
            </p>
          </div>
          <div class="stats-row">
            <div class="stat">
              <div class="stat-number">2</div>
              <div class="stat-label">Signed placements</div>
            </div>
            <div class="stat">
              <div class="stat-number">1</div>
              <div class="stat-label">Roadshow expedition</div>
            </div>
            <div class="stat">
              <div class="stat-number">10+</div>
              <div class="stat-label">Expert lectures attended</div>
            </div>
            <div class="stat">
              <div class="stat-number">200+</div>
              <div class="stat-label">People reached (Roadshow)</div>
            </div>
          </div>
        </div>

        <!-- 02 JOURNEY -->
        <div class="section">
          <div class="section-label">02 · Journey</div>
          <h2>How It Unfolded</h2>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-date">Summer / Autumn 2024</div>
              <h3>Joining the Summer School</h3>
              <p>
                My involvement began at the <strong>CSS Summer School</strong>, an intensive programme featuring
                presentations and hands-on workshops led by cybersecurity experts from across the Czech Republic —
                including professionals from NÚKIB, Masaryk University, and the private sector.
              </p>
              <p>
                The school covered a broad curriculum: from understanding threat landscapes to practical skills in
                phishing recognition, OSINT, incident response simulation, and the psychological dimensions of social
                engineering.
              </p>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">January 2025 — October 2025</div>
              <h3>First Placements: Amnesty International & Senior Care</h3>
              <p>
                Following the summer school, I completed <strong>two independent cybersecurity placements</strong> —
                the foundational requirement of the CSS programme. Each placement involved designing a bespoke
                educational intervention for a real community partner.
              </p>
              <p>
                Both placements were formalised through official <em>Smlouvy o realizaci studentských stáží</em>
                (Contracts for student cybersecurity placements) signed between Masaryk University and the respective
                organisations.
              </p>
            </div>
            <div class="timeline-item">
              <div class="timeline-date">Spring 2026 · ISKM111</div>
              <h3>Accepted to the CyberImpact Roadshow</h3>
              <p>
                Having successfully completed prior placements, I was accepted into
                <strong>ISKM111 CyberImpact Roadshow</strong> — an intensive, accredited 5-day field expedition across
                Czech Republic, available to at most 20 students. The course carries <strong>4 ECTS credits</strong>
                and includes a stipend of <strong>12,000 CZK</strong> upon completion.
              </p>
            </div>
          </div>
        </div>

        <!-- 03 TRAINING -->
        <div class="section">
          <div class="section-label">03 · Training</div>
          <h2>Expert-Led Education</h2>
          <p>
            Before designing any workshop, I underwent substantial expert instruction from field professionals. The
            training ensured that every community session I facilitated was grounded in current, real-world knowledge
            rather than generic textbook content.
          </p>
          <div class="callout">
            <p>
              Instruction came from experts at <strong>NÚKIB</strong> (Czech National Cyber and Information Security
              Agency), <strong>Masaryk University</strong>, and the private sector. Named instructors include Martin
              Ukrop, Ivo Nutár, and Irena Adler Pavelková — alongside the CSS academic faculty.
            </p>
          </div>
          <div class="sub-heading">CSS Faculty & Mentors</div>
          <div class="expert-grid">
            <div class="expert">
              <div class="expert-name">PhDr. Pavla Vizváry, Ph.D. LL.M.</div>
              <div class="expert-org">Masarykova univerzita</div>
            </div>
            <div class="expert">
              <div class="expert-name">PhDr. Petr Škyřík, Ph.D.</div>
              <div class="expert-org">KISK, Filozofická fakulta</div>
            </div>
            <div class="expert">
              <div class="expert-name">RNDr. Valdemar Švábenský, Ph.D.</div>
              <div class="expert-org">Masarykova univerzita</div>
            </div>
            <div class="expert">
              <div class="expert-name">RNDr. Michal Černý, Ph.D.</div>
              <div class="expert-org">Masarykova univerzita</div>
            </div>
            <div class="expert">
              <div class="expert-name">Mgr. Tomáš Marek, Ph.D.</div>
              <div class="expert-org">Masarykova univerzita</div>
            </div>
            <div class="expert">
              <div class="expert-name">Mgr. Magdaléna Bohuslavová</div>
              <div class="expert-org">CSS Coordinator</div>
            </div>
          </div>
          <div class="sub-heading">Topics Covered</div>
          <div class="chips">
            <span class="chip">Phishing & Social Engineering</span>
            <span class="chip">Password Managers & MFA</span>
            <span class="chip">OSINT & Data Exposure</span>
            <span class="chip">Incident Response</span>
            <span class="chip">Device & Account Security</span>
            <span class="chip">AI-Powered Threats</span>
            <span class="chip">Secure Communication</span>
            <span class="chip">Digital Identity Protection</span>
            <span class="chip">Media Manipulation</span>
            <span class="chip">Privacy & Data Rights</span>
          </div>
        </div>

        <!-- 04 PLACEMENTS -->
        <div class="section">
          <div class="section-label">04 · Community Placements</div>
          <h2>Where the Learning Became Real</h2>

          <div class="placement">
            <div class="placement-header">
              <div class="placement-org">Domov pro seniory Holásecká</div>
              <div class="tag-row">
                <span class="tag signed">Contract Signed</span>
                <span class="tag">Brno · Mar–May 2026</span>
              </div>
            </div>
            <p>
              A residential care facility for seniors and people with reduced self-sufficiency in Brno, representing
              exactly the type of organisation the CSS programme targets: <strong>small, locally focused, without
              dedicated cybersecurity resources</strong>, yet facing the same digital threats as large institutions.
            </p>
            <p>
              I designed and facilitated an interactive cybersecurity workshop tailored specifically to the staff's
              context — daily care work, limited IT background, and the particular risks faced when handling sensitive
              personal and health data of vulnerable individuals.
            </p>
            <div class="callout">
              <p>
                <strong>Why it mattered:</strong> Care staff regularly receive communications about residents from
                families, medical providers, and authorities. They are high-value phishing targets, often without
                knowing it. A single compromised account could expose data for an entire home.
              </p>
            </div>
            <p class="contract-note">
              Contract: MU × Domov pro seniory Holásecká, příspěvková organizace · IČO 75145189 · Signed 26.3.2026 · Valid to 31.5.2026
            </p>
          </div>

          <div class="placement">
            <div class="placement-header">
              <div class="placement-org">Amnesty International Česká republika</div>
              <div class="tag-row">
                <span class="tag signed">Contract Signed</span>
                <span class="tag">Prague · Jan–Oct 2025</span>
              </div>
            </div>
            <p>
              I initiated this placement independently. Recognising that human rights organisations are
              <strong>high-profile targets for state-sponsored cyber threats</strong>, I reached out directly to
              Amnesty International CZ to offer a free, tailored workshop — and they accepted.
            </p>
            <p>
              The workshop (approximately 5 hours, for up to 25 staff members) was designed around the specific threat
              landscape of a human rights NGO: activist-focused spear phishing, OSINT exposure of staff identities, and
              the particular risks of working with whistleblowers and at-risk individuals.
            </p>
            <div class="callout">
              <p>
                <strong>Why it mattered:</strong> For organisations like Amnesty, a digital security breach isn't just
                an inconvenience — it can compromise the safety of activists, informants, and vulnerable people who
                depend on the organisation's confidentiality.
              </p>
            </div>
            <p class="contract-note">
              Contract: MU × Amnesty International Česká republika, z.s. · IČO 44793430 · Signed 29.1.2025 · Valid to 31.10.2025
            </p>
          </div>

          <div class="letter-box">
            <div class="letter-meta">Outreach email · Marie Anna Mahdalová → amnesty@amnesty.cz · July 17, 2025</div>
            <p class="letter-text">
              "Prevence v oblasti digitální bezpečnosti je dnes zásadní, i s ohledem na rostoucí využívání umělé
              inteligence a phishingových útoků." — <em>Workshop offer sent to Amnesty International, independently
              initiated</em>
            </p>
          </div>
        </div>

        <!-- 05 ROADSHOW -->
        <div class="section">
          <div class="section-label">05 · CyberImpact Roadshow</div>
          <h2>ISKM111 · 5-Day National Expedition</h2>
          <p>
            The CyberImpact Roadshow is the programme's flagship activity. A <strong>45-person team</strong> — 20 MUNI
            students, 10 academic staff, and 15 community representatives — boards a single bus and travels
            <strong>~1,400 km across the Czech Republic in five days</strong>, delivering workshops in 10 regional
            cities.
          </p>
          <div class="callout">
            <p>
              <strong>Dates:</strong> May 18–22, 2026 &nbsp;·&nbsp;
              <strong>Impact:</strong> Direct reach to 200+ people across 10 cities &nbsp;·&nbsp;
              <strong>Stipend:</strong> 12,000 CZK upon completion &nbsp;·&nbsp;
              <strong>Credits:</strong> 4 ECTS
            </p>
          </div>
          <div class="sub-heading">Cities Visited</div>
          <div class="chips">
            <span class="city-chip">Zlín</span>
            <span class="city-chip">Ostrava</span>
            <span class="city-chip">Olomouc</span>
            <span class="city-chip">Pardubice</span>
            <span class="city-chip">Liberec</span>
            <span class="city-chip">Ústí nad Labem</span>
            <span class="city-chip">Karlovy Vary</span>
            <span class="city-chip">Plzeň</span>
            <span class="city-chip">České Budějovice</span>
            <span class="city-chip">Jihlava</span>
          </div>
          <div class="card-grid">
            <div class="card">
              <div class="card-icon">🎯</div>
              <h3>Workshop Design</h3>
              <p>Students design ~90-min interactive workshops from scratch, with clear learning objectives, activities,
              and evaluation tools — tailored to each community's specific needs.</p>
            </div>
            <div class="card">
              <div class="card-icon">🤝</div>
              <h3>Tandem Facilitation</h3>
              <p>Each student works in tandem with an academic expert, facilitating for real audiences including social
              workers, librarians, and care professionals.</p>
            </div>
            <div class="card">
              <div class="card-icon">📊</div>
              <h3>Impact Measurement</h3>
              <p>Pre/post questionnaires, rapid debriefs, and qualitative reflection — creating evidence of change, not
              just delivery.</p>
            </div>
            <div class="card">
              <div class="card-icon">📚</div>
              <h3>Atlas Output</h3>
              <p>All participants co-create the <em>Kyberbezpečnostní atlas Česka 2026</em> — a methodological resource
              available for future educators and practitioners.</p>
            </div>
          </div>
          <div class="photo-placeholder">
            <div class="ph-icon">📸</div>
            <p>[ CyberImpact Roadshow photos · May 2026 · Coming soon ]</p>
          </div>
        </div>

        <!-- 06 SKILLS -->
        <div class="section">
          <div class="section-label">06 · Skills & Competencies</div>
          <h2>What This Work Built</h2>
          <p>
            Across summer school, two placements, and the Roadshow, this engagement developed a rare combination:
            <strong>technical cybersecurity literacy applied in human-centred, community contexts</strong>.
          </p>
          <div class="card-grid">
            <div class="card">
              <h3>Technical Knowledge</h3>
              <p>Grounded understanding of current threat landscape, attack vectors, and defensive practices — taught by
              active practitioners, not just academics.</p>
            </div>
            <div class="card">
              <h3>Workshop Design</h3>
              <p>Ability to translate complex technical topics into accessible, engaging 90-min sessions for
              non-technical audiences using design thinking methodology.</p>
            </div>
            <div class="card">
              <h3>Community Facilitation</h3>
              <p>Experience facilitating groups of diverse backgrounds — seniors, civil society workers, NGO staff —
              with empathy and cultural sensitivity.</p>
            </div>
            <div class="card">
              <h3>Independent Initiative</h3>
              <p>Independently identified and secured a placement with Amnesty International — demonstrating proactive
              outreach, not just programme compliance.</p>
            </div>
          </div>
          <div class="chips" style="margin-top: 1.25rem;">
            <span class="skill-chip">Cybersecurity Awareness Training</span>
            <span class="skill-chip">Service Learning</span>
            <span class="skill-chip">Workshop Facilitation</span>
            <span class="skill-chip">Needs Assessment</span>
            <span class="skill-chip">Impact Evaluation</span>
            <span class="skill-chip">NGO Communication</span>
            <span class="skill-chip">OSINT</span>
            <span class="skill-chip">Phishing Simulation</span>
            <span class="skill-chip">Digital Literacy Education</span>
            <span class="skill-chip">Vulnerable Community Work</span>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-cybersecurity": MMCybersecurity;
  }
}
