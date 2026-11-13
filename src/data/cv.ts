/** A point in a date range. `datetime` feeds <time datetime>; omit it for open ends such as "now". */
export interface CvDate {
  text: string;
  datetime?: string;
}

export interface CvEntry {
  /** One date, or a start and end shown as "start – end". */
  dates: [CvDate] | [CvDate, CvDate];
  /** Role, then place, as one line. */
  title: string;
  /** One short line of detail. */
  detail?: string;
  /** Names in `title` or `detail` to link. A `url` starting with "/" is internal. */
  links?: CvLink[];
}

export interface CvLink {
  text: string;
  url: string;
}

export interface CvListItem {
  label?: string;
  text: string;
}

export type CvSection =
  | { kind: "timeline"; title: string; entries: CvEntry[] }
  | { kind: "list"; title: string; items: CvListItem[] };

const NOW: CvDate = { text: "now" };

export const cv: CvSection[] = [
  {
    kind: "timeline",
    title: "Experience",
    entries: [
      {
        dates: [{ text: "Oct 2026", datetime: "2026-10" }, NOW],
        title: "EU Careers Student Ambassador, EPSO · Masaryk University, Brno",
        detail: "Selected and trained by EPSO; I explain EU jobs, traineeships and selection to students.",
        links: [
          {
            text: "EU Careers Student Ambassador",
            url: "https://eu-careers.europa.eu/en/eu-careers-student-ambassadors",
          },
          { text: "Masaryk University", url: "https://www.muni.cz" },
        ],
      },
      {
        dates: [{ text: "Jul 2026", datetime: "2026-07" }, NOW],
        title: "Security Professional, Austrian National Library, Vienna (via G4S)",
        detail:
          "Open, close and patrol the historic halls and five museums; point of contact for researchers, delegations and visitors.",
        links: [{ text: "Austrian National Library", url: "https://www.onb.ac.at" }],
      },
      {
        dates: [
          { text: "May 2025", datetime: "2025-05" },
          { text: "May 2026", datetime: "2026-05" },
        ],
        title: "Cybersecurity Awareness Facilitator & Speaker, Czech Cybersecurity Seminars (Google.org-supported)",
        detail:
          "Trained by NÚKIB and industry experts. CyberImpact Roadshow: 10 cities, 5 days, 200+ people; led the device security workshop in Ústí nad Labem. Pitched and ran a 5-hour security session for 25 Amnesty International CZ staff. Anti-vishing session for seniors.",
        links: [
          { text: "Czech Cybersecurity Seminars", url: "https://css.muni.cz" },
          { text: "NÚKIB", url: "https://nukib.gov.cz" },
          { text: "Amnesty International CZ", url: "https://www.amnesty.cz" },
        ],
      },
      {
        dates: [
          { text: "2022", datetime: "2022" },
          { text: "2026", datetime: "2026" },
        ],
        title: "Event Security & Crowd Coordination, Patronus GmbH / Custos Security Service, Vienna",
        detail: "Concerts at Wiener Stadthalle, football games, private VIP events.",
      },
    ],
  },
  {
    kind: "timeline",
    title: "Leadership & volunteering",
    entries: [
      {
        dates: [
          { text: "2021", datetime: "2021" },
          { text: "2024", datetime: "2024" },
        ],
        title: "Elected Student Representative (3 terms), Schülerunion Österreich",
      },
      {
        dates: [
          { text: "2019", datetime: "2019" },
          { text: "2025", datetime: "2025" },
        ],
        title: "Public Campaigner, Amnesty International",
      },
      {
        dates: [
          { text: "2019", datetime: "2019" },
          { text: "2024", datetime: "2024" },
        ],
        title: "Volunteer Editor & WikiGap participant, Wikipedia",
        links: [{ text: "WikiGap", url: "https://meta.wikimedia.org/wiki/WikiGap" }],
      },
      {
        dates: [{ text: "2018", datetime: "2018" }, NOW],
        title: "Speaker & Researcher: research, talks and workshops on social dialogue (KISK Forum, Winter School)",
      },
      {
        dates: [{ text: "2023", datetime: "2023" }],
        title: "International Exchange, Youth Parliament of the Czech Republic",
      },
      {
        dates: [{ text: "2018", datetime: "2018" }],
        title: "Exhibition Guide, Anne Frank Exhibition, Terezín Initiative Institute",
        links: [
          {
            text: "Anne Frank Exhibition",
            url: "https://www.annefrank.org/en/about-us/what-we-do/worldwide-activities/czech-republic/",
          },
          { text: "Terezín Initiative Institute", url: "http://www.terezinstudies.cz/en/about-us/about-us/" },
        ],
      },
    ],
  },
  {
    kind: "timeline",
    title: "Education",
    entries: [
      {
        dates: [
          { text: "2024", datetime: "2024" },
          { text: "2027 (expected)", datetime: "2027" },
        ],
        title: "BSc Information Science, Masaryk University (KISK), Brno",
        detail:
          'Thesis: "Good Enough: Designing a Planning Tool Based on Neurodivergent Strategies". Disinformation ownership map (special recognition for investigative rigour). Co-built a chatbot for older adults.',
        links: [
          { text: "Masaryk University", url: "https://www.muni.cz" },
          { text: "KISK", url: "https://kisk.phil.muni.cz" },
          { text: "Good Enough", url: "/projects/good-enough" },
        ],
      },
      {
        dates: [
          { text: "2019", datetime: "2019" },
          { text: "2024", datetime: "2024" },
        ],
        title: "Austrian Matura with bilingual distinction, Realgymnasium Komensky, Vienna",
        links: [{ text: "Realgymnasium Komensky", url: "https://www.komensky.at" }],
      },
    ],
  },
  {
    kind: "list",
    title: "Skills",
    items: [
      {
        label: "Technical",
        text: "Python · JavaScript · TypeScript & Lit · Data analysis · Machine learning · Web development · Databases",
      },
      {
        label: "Tools",
        text: "Excel · PowerPoint · Word · Mentimeter · Bitwarden · Keybase · AutoCAD · Photoshop",
      },
      {
        label: "Professional",
        text: "Cybersecurity awareness · AI ethics · Research methods · Public speaking · Workshop design · Project management",
      },
    ],
  },
  {
    kind: "list",
    title: "Languages",
    items: [{ text: "Czech (native) · English (C1) · Slovak (C1) · German (B2) · Welsh (basic)" }],
  },
  {
    kind: "timeline",
    title: "Certificates",
    entries: [
      {
        dates: [{ text: "2024", datetime: "2024" }],
        title: "Elements of AI & Ethics of AI, University of Helsinki",
        links: [
          { text: "Elements of AI", url: "https://www.elementsofai.com" },
          { text: "Ethics of AI", url: "https://ethics-of-ai.mooc.fi" },
        ],
      },
      {
        dates: [{ text: "2022", datetime: "2022" }],
        title: "Soft Skills Programme (51 h), Schülerunion Österreich",
      },
    ],
  },
];
