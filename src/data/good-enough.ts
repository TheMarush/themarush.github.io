export interface GoodEnoughFeature {
  name: string;
  desc: string;
}

export interface GoodEnoughKnob {
  name: string;
  desc: string;
}

export interface GoodEnoughStat {
  label: string;
  value: string;
  desc: string;
}

export interface GoodEnoughPOV {
  name: string;
  text: string;
}

export interface GoodEnoughPullQuote {
  text: string;
  source: string;
}

export interface GoodEnoughDetailCell {
  label: string;
  val: string;
}

export const goodEnoughFeatures: GoodEnoughFeature[] = [
  {
    name: "Mood-first interface",
    desc: "Every session opens with one question. The entire UI adapts based on the answer.",
  },
  {
    name: "The One Thread",
    desc: 'Instead of a list, shows exactly one task, chosen based on current state. User can accept, swap, or say "not today."',
  },
  {
    name: "Reorientation mode",
    desc: "When a session breaks mid-task, reopening the companion restores full context. <em>Memory is the feature.</em>",
  },
  {
    name: "Progress in reverse",
    desc: 'Instead of showing how much is left, shows only what has already been done. "You\'ve already written 300 words."',
  },
  {
    name: "No-list mode",
    desc: "For users in shame-spiral states, all historical tasks are hidden. Only the present moment is visible.",
  },
  {
    name: "Raccoon Mode",
    desc: "A toggleable lightly humorous personality layer, including occasional raccoon facts and small-win celebrations.",
  },
  {
    name: "Pattern recognition",
    desc: 'When a task recurs without moving, the companion names it once, neutrally: "This one has come up three times." It does not ask why.',
  },
  {
    name: "Proof-of-concept export",
    desc: 'A "here\'s what I actually did this week" summary, generated for the user and for no one else, to counter the "I did nothing" cognitive distortion.',
  },
];

export const goodEnoughKnobs: GoodEnoughKnob[] = [
  {
    name: "Initiation resistance",
    desc: "How hard it is to start a task: the gap between intending and beginning.",
  },
  {
    name: "Momentum fragility",
    desc: "How easily flow breaks when something unexpected happens mid-task.",
  },
  {
    name: "Perfectionism grip",
    desc: '"Good enough" feels like failure rather than strategy.',
  },
  {
    name: "External pressure dependency",
    desc: "Whether action is primarily triggered by deadlines and others' expectations.",
  },
  {
    name: "Shame accumulation",
    desc: "How strongly visible incomplete tasks compound into avoidance.",
  },
  {
    name: "Time blindness",
    desc: "How poorly time passing is perceived, affecting planning and transitions.",
  },
  {
    name: "Hyperfocus availability",
    desc: "Whether deep-focus states are accessible and how long they last.",
  },
  {
    name: "Disruption tolerance",
    desc: "How quickly and fully function returns after an unexpected break.",
  },
  {
    name: "Self-insight level",
    desc: "Accuracy of self-reporting: determines how much the companion recalibrates silently.",
  },
  {
    name: "External accountability reliance",
    desc: "Whether the user functions better with a witness, human or system.",
  },
];

export const goodEnoughSurveyStats: GoodEnoughStat[] = [
  {
    label: "Shame accumulation",
    value: "4.0",
    desc: "62.5% rated a perfect 5. Strongest single result in the survey.",
  },
  {
    label: "External pressure dependency",
    value: "3.71",
    desc: '71% rated 4 or 5. Validates the "only for me" devaluation loop.',
  },
  {
    label: "Inconsistent weekly capacity",
    value: "2.88",
    desc: "71% report their capacity is not consistent week to week.",
  },
  {
    label: "Pattern tracking",
    value: "4.25",
    desc: "83.4% rated 4 or 5. Most consistently desired feature.",
  },
];

export const goodEnoughInterestStats: GoodEnoughStat[] = [
  {
    label: "Mean interest score",
    value: "4.0 / 5",
    desc: "No respondents rated 1.",
  },
  {
    label: "Rated 4 or 5",
    value: "66.7%",
    desc: "Strong cross-sample validation.",
  },
];

export const goodEnoughSurveyDetails: GoodEnoughDetailCell[] = [
  { label: "Questions", val: "36" },
  { label: "Respondents", val: "24" },
  { label: "Age range", val: "15–52" },
  { label: "Neurodivergent-identifying", val: "75%" },
];

export const goodEnoughPOVs: GoodEnoughPOV[] = [
  {
    name: "Marie",
    text: "Needs to find a <strong>single safe entry point</strong> into a self-directed task, because her brain treats tasks without external stakes as non-urgent, and every visible reminder of what's unfinished deepens the shame that makes starting harder.",
  },
  {
    name: "A.",
    text: "Needs a companion that <strong>holds her context and reorients her after disruption</strong>: not emotional support, but a concrete map of what remains.",
  },
  {
    name: "P.",
    text: "Needs <strong>behaviour change to happen gradually and without direct instruction</strong>, because telling neurodivergent people what to do triggers reactance, and the companion must know when to step back and refer to a professional.",
  },
  {
    name: "Late-diagnosed adult",
    text: "Needs a tool that <strong>doesn't speak the language of the systems that failed them</strong>, because every streak counter, missed-day notification, or visible failure list reactivates decades of internalized shame.",
  },
];

export const goodEnoughPullQuotes: GoodEnoughPullQuote[] = [
  {
    text: '"When you haven\'t done something you planned to do for yourself, what do you say to yourself? Is it words, or more of a feeling?"',
    source: "Interview protocol · Revised from AI draft",
  },
  {
    text: '"I felt like garbage. Completely."',
    source: "Interview 1 · Two words. No mechanism. Just the weight of it.",
  },
  {
    text: '"There\'s a moment where I\'d like to do something but it doesn\'t work, or doesn\'t go according to plan, and then it breaks."',
    source: "Interview 3",
  },
  {
    text: '"You are not your produce. You are not your code."',
    source: "Interview 4",
  },
];

export const goodEnoughOpenResponsesCompanion: string[] = [
  '"Not every day can be treated the same. Some days I need a complete opposite of what I need other times."',
  '"Task paralysis. The inability to choose where to start and to start."',
  '"I rely on outer motivation. I cannot motivate myself."',
  '"Don\'t make me feel guilty. I am trying."',
];

export const goodEnoughOpenResponsesClose: string[] = [
  '"Shame me into performing."',
  '"If it showed me a monthly or weekly review highlighting plans I didn\'t finish."',
  '"Analysing my behaviour without my consent. I would not use it out of fear."',
  '"Seeing all the tasks I didn\'t do."',
  '"Complicated setup."',
];

export const goodEnoughEthicalPrinciples: string[] = [
  "<strong>External-pressure dependence.</strong> A tool that replicates this dynamic, even gently, risks deepening it.",
  "<strong>Breaking systems that already work.</strong> Some users have built their own strategies, and imposing a new system can dismantle them.",
  "<strong>Being too gentle.</strong> A tool designed never to push may paradoxically fail users who need a degree of external accountability.",
  "<strong>Language.</strong> For many users, English is the language in which they first found words for their own experience. Language is not a neutral design decision.",
];

export const goodEnoughDesignPrinciples: string[] = [
  "<strong>No visible failure lists.</strong> Ever.",
  "<strong>Mood-first entry.</strong> Every session begins with how the user is, not what they need to do.",
  "<strong>One thread at a time.</strong> Not a list. One thing.",
  "<strong>Shame-free return after absence.</strong> No streaks, no guilt, no catch-up guilt.",
  "<strong>The raccoon test.</strong> Every proposed feature was checked against whether it could have been generated by AI without knowing a real user. If yes, it went back to the research.",
];

export const goodEnoughChartNotes: Record<string, string> = {
  diagnosis: "Q5: Diagnosis status breakdown",
  laziness: "Q8: How long respondents believed the problem was laziness",
  shame: "Q12: Shame-driven avoidance ratings",
  abandonment: "Q22: Reasons for abandoning planning tools",
  hardDay: "Q27: What would make you open it on a hard day",
  tone: "Q28: Tone preference",
  interest: "Q26: Interest in Good Enough",
};
