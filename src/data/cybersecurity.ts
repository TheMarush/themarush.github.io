export interface CyberPlacement {
  name: string;
  paragraphs: string[];
  callout: string;
  contractLine: string;
  photo?: {
    src: string;
    alt: string;
    href: string;
    ariaLabel: string;
  };
}

export interface RoadshowCity {
  name: string;
  highlight?: boolean;
}

export interface DetailCell {
  label: string;
  value: string;
}

export const cybersecurityPlacements: CyberPlacement[] = [
  {
    name: "Domov pro seniory Holásecká",
    paragraphs: [
      "I chose this placement myself. Working with seniors was not the obvious pick, but it made sense to me: <strong>they are among the most consistently targeted groups</strong> when it comes to digital fraud, and often the least reached by any kind of awareness effort. The home gave me access to the residents directly, and that is who I worked with.",
      "The session focused on passwords and account security, built around real examples of the calls, messages, and visits that actually happen to people in this situation. We also covered what residents are legally entitled to say to turn away unsolicited offers and aggressive callers, so they leave the session with something concrete to use, not just awareness but an actual script. The facility responded well enough to share it on their social media.",
      "Afterwards, residents came up to ask about situations they were already dealing with. Whether I had a direct answer or not, I was prepared enough to either address it properly or point them to the right resource. That felt like the real measure of whether the session worked.",
    ],
    callout:
      "Seniors are specifically and repeatedly targeted by digital and phone-based fraud. The gap between how often they are targeted and how rarely they receive any kind of preparation for it is significant.",
    contractLine:
      "Formal contract: MU x Domov pro seniory Holásecká, p.o. · ICO 75145189 · Signed 26.3.2026",
    photo: {
      src: "https://i.imgur.com/vi56Vyo.jpg",
      alt: "Workshop session at Domov pro seniory Holásecká",
      href: "https://www.facebook.com/dsholasecka/posts/pfbid09CivaAmA7svMviDkbtszjjUbdaoRAgccXkfFKDHQnuGucxtthkJhkWrE1KgdWJpBl",
      ariaLabel: "View on Facebook",
    },
  },
  {
    name: "Amnesty International Česká republika",
    paragraphs: [
      "This one was my choice. I had worked with Amnesty International before on signature collection in Prague, and when I thought about where a second workshop could actually matter, this felt obvious. Human rights organisations are <strong>high-profile targets for state-sponsored cyber threats</strong>, and they rarely have the resources to address it properly.",
      "I wrote the pitch cold, offered a free session tailored to their specific risk landscape, and they said yes. <strong>The workshop ran for approximately five hours with up to 25 staff members.</strong> Amnesty collects significant amounts of personal data through petitions, and that trust is something they have to actively protect. Prevention matters more here than response: once that data is compromised, the damage to trust is hard to undo.",
      "Because five hours is a long time to hold attention, the session was designed to be genuinely interactive. We used Mentimeter for live participation and self-assessment throughout, with breaks and space for discussion built in. On the practical side, we covered setting up 2FA, using Bitwarden for password management, creating a separate email account for sensitive work, and storing important data securely using Keybase. Things people could walk away and actually implement the same day.",
    ],
    callout:
      "For an organisation like Amnesty, a security breach is not an IT inconvenience. It can put activists, informants, and vulnerable people in real danger.",
    contractLine:
      "Formal contract: MU x Amnesty International Česká republika, z.s. · ICO 44793430 · Signed 29.1.2025",
  },
];

export const cybersecurityRoadshowCities: RoadshowCity[] = [
  { name: "Zlín" },
  { name: "Ostrava" },
  { name: "Olomouc" },
  { name: "Pardubice" },
  { name: "Liberec" },
  { name: "Ústí nad Labem", highlight: true },
  { name: "Karlovy Vary" },
  { name: "Plzeň" },
  { name: "České Budějovice" },
  { name: "Jihlava" },
];

export const cybersecurityRoadshowDetails: DetailCell[] = [
  { label: "Dates", value: "May 18 to 22, 2026" },
  { label: "People reached", value: "200+ across 10 cities" },
];
