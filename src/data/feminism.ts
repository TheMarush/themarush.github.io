export interface FeminismEntry {
  id: string;
  title: string;
  meta: string;
  body: string;
  image: string;
  imageAlt: string;
  link?: { href: string; label: string };
  pdf?: { path: string; label: string; disclaimer: string };
}

export const feminismIntro = `The people who need feminist arguments the most are rarely the ones who show up to hear them. That has always been the problem I wanted to solve. Not preaching to the already converted, but finding the language, the patience, and the angle that makes the conversation possible with someone who would otherwise walk out of the room. These entries trace how I have been trying to do that, from a middle school classroom to a public forum, across nearly a decade of thinking about what it actually takes to change a mind.`;

export const feminismEntries: FeminismEntry[] = [
  {
    id: "little-matura",
    title: "Little Matura",
    meta: "The latest chapter",
    body: `At fourteen, I chose feminism as the subject of my final middle school presentation, approaching it through a specific and then largely unfamiliar lens: the generic masculine in the Czech language, and what it quietly communicates about who the default human is. To prepare properly, I sought out Jana Valdrová, a linguist who has dedicated her career to documenting how grammatical gender shapes social perception. Her doctoral thesis in 1998 was the first Czech academic work on this topic, and much of the resistance she encountered from the Czech linguistic establishment reflects a broader pattern: in Czech Republic, gender linguistics has long been treated as an "imported issue" and dismissed as ideology rather than science.

The stakes of the question are more concrete than they might appear. Psycholinguistic experiments conducted by Valdrová and Kolek demonstrated that when Czech speakers encounter a masculine generic form, the mental image it produces is predominantly male. The data showed that up to a third of speakers interpret a supposedly gender-neutral masculine noun as specifically referring to men, which means women are systematically rendered invisible in the default language of public discourse. Separate research on job advertisements confirmed that gender-fair language appears far more frequently in countries with higher levels of social equality, suggesting the relationship between grammar and culture runs in both directions.

These were not abstractions I was explaining. They were the grammar I had grown up inside.`,
    image: "/pj-feminism/little-matura.webp",
    imageAlt: "Little Matura presentation",
  },
  {
    id: "vwa-pres",
    title: "VWA Presentation",
    meta: "Pre-scientific paper",
    body: `My pre-scientific paper, Pojetí feminismu ve středoevropském kulturním prostoru 21. století (Concepts of Feminism in the Central European Cultural Space of the 21st Century), was a comparative study of how feminist movements are understood, received, and politically instrumentalized across Czech Republic, Slovakia, Germany, Austria, and Poland. It traced the divergence between liberal and radical feminist frameworks and examined why the same word can be celebrated in one country and treated as a slur two borders over. A recurring finding was the post-communist factor: in countries with historical experience of Soviet-era state feminism, the word itself arrived pre-contaminated, associated with enforced ideology rather than emancipation, making grassroots feminist organizing structurally harder to establish and sustain.

The paper included a formal interview with Mgr. Tomáš Pavlas, founder of the Genderman initiative and lecturer in Critical Men's Studies at Charles University in Prague, which shaped my central argument: that without men as committed participants, gender equality remains structurally incomplete. Pavlas framed this not as charity toward feminism but as a matter of democratic obligation. In a patriarchal society, he observed, men carry louder voices for the same demands, and declining to use that advantage is itself a form of complicity.`,
    image: "/pj-feminism/vwa-pres.webp",
    imageAlt: "VWA presentation",
    pdf: {
      path: "/pj-feminism/VWA - Feminismus.pdf",
      label: "Read the full paper",
      disclaimer: "This was a pre-scientific paper, not the most rigorous academic work ever produced. :)",
    },
  },
  {
    id: "zimni-skola",
    title: "Zimní Škola",
    meta: "Winter school",
    body: `At winter school, I gave a talk that deliberately refused the conventional frame. Rather than presenting patriarchy as a women's problem requiring women's solutions, I mapped the full system and the costs it imposes on everyone it touches. Yes, the gender pay gap. Yes, the pink tax. But also what the research literature documents with considerable consistency: that men socialized into hegemonic masculine norms are substantially more likely to suppress emotional distress, avoid professional help, and die by suicide at rates more than three times higher than women. A systematic review published in 2024 identified emotional restraint, self-reliance as a survival ideology, and the perceived incompatibility of mental illness with masculine identity as the primary mechanisms linking patriarchal norms to male suicidality.

The same value system that keeps women out of boardrooms keeps men out of therapy. It holds fathers to a provider role while making active caregiving socially legible only as deviation. It constructs vulnerability as feminine and therefore as failure, which means that any man who departs from emotional stoicism faces not only internal conflict but social sanction from other men enforcing the norm. The argument was not that men have it worse, but that a liberation movement which ignores half of its potential constituency is working against itself. Patriarchy is not a conspiracy of men against women. It is a set of rigid scripts that diminishes anyone who deviates from them.`,
    image: "/pj-feminism/zimni-skola.webp",
    imageAlt: "Zimní Škola — winter school",
  },
  {
    id: "kisk-forum",
    title: "KISK Forum",
    meta: "Community & conversation",
    body: `At the KISK Forum, I spoke about what it actually takes to reach people who do not want to be reached. One of the structural problems with feminist education, as I observed it over years of attending workshops and seminars, is that the people who most need to hear the argument rarely walk into the room. The people who do show up already broadly agree, which makes the space feel productive while the actual problem stays unchanged.

Over time I began noticing a pattern in conversations with people who rejected or dismissed feminist framing. When the argument was delivered in a register they could not follow, or in a way that positioned them as the problem to be corrected, they received it as an attack rather than an invitation. The implication was not that feminist critique should be softened into incoherence, but that comprehensibility and patience are themselves political tools, and that the goal of changing minds requires meeting people where they actually are.

I also addressed what I see as a significant strategic liability in contemporary feminist organizing: fragmentation that substitutes internal distinction-making for external impact. There are genuine and important differences between feminist groups, including disagreements serious enough to justify separate organizing, such as the exclusion of trans women by some feminist associations. Where such differences cross a threshold of fundamental principle, forming distinct coalitions is not only natural but necessary. The problem arises when the energy of the movement is spent on internal boundary maintenance rather than on the shared goals that motivated it in the first place. Coalition does not require agreement on everything. It requires agreement on enough.`,
    image: "/pj-feminism/kisk-forum.webp",
    imageAlt: "KISK Forum",
    link: {
      href: "https://stisk.online/a/pfp9T/breznove-kiskforum-se-neslo-v-aktivistickem-duchu-prostor-dostala-temata-spojena-s-zenami",
      label: "Read the KISK Forum write-up",
    },
  },
];
