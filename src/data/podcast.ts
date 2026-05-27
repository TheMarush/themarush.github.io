export interface PodcastEpisode {
  id: string;
  number: number;
  date: string;
  title: string;
  description: string;
  youtubeUrl: string;
  youtubeId: string;
}

export const podcastIntro = `Honestly, openly, and with a sense of perspective. Mother and daughter, two generations, one podcast. Every week, we bring you authentic conversations about how to take care of your mental well-being, how to handle life's challenges, and why it's normal not to always feel okay. We talk about things without sugarcoating them, share personal experiences with both anxieties and joys, and break down taboos. An intergenerational dialogue, sometimes serious, sometimes funny, but always authentic. Are you looking for a way to better understand your loved ones? You've come to the right place. Because sometimes the best therapy starts with simply talking about your problems. Maybe with your mom. Or with your daughter.`;

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "ep1",
    number: 1,
    date: "November 12, 2024",
    title: "Mental Health",
    description: `<p>One grew up at a time when seeing a psychologist was seen as a sign of failure. The other in an era when mental health is slowly becoming a topic of conversation. Together, they're now having the conversation they wish they'd heard sooner. One that's honest, free of prejudice, and respectful of what each of them has been through.</p><p>We share our own experiences with therapy and how we supported each other in our search for help. Because taking care of your mental health isn't a weakness. It's the foundation of everything else.</p>`,
    youtubeUrl: "https://www.youtube.com/watch?v=zSv1XTXxzX4",
    youtubeId: "zSv1XTXxzX4",
  },
  {
    id: "ep2",
    number: 2,
    date: "December 28, 2025",
    title: "The Struggle to Hold Attention",
    description: `<p>Our brains aren't built for a world that offers us another dose of dopamine every second. Social media, endless feeds, clever tricks; everything is designed to keep us glued to the screen. And it's hard for us to resist. For people with ADHD, that struggle is even harder.</p><p>Two generations, two perspectives on the same problem. Data, research, and personal experiences on how to protect your attention, or lose it.</p>`,
    youtubeUrl: "https://www.youtube.com/watch?v=N-qddSpvSb8",
    youtubeId: "N-qddSpvSb8",
  },
  {
    id: "ep3",
    number: 3,
    date: "January 26, 2026",
    title: "About Money",
    description: `<p>Money. We have to make it last somehow. Even if it's really tough sometimes. But it's one thing to save and tighten your belt, and quite another to lose your income. Did you know that single mothers are masters at managing their cash flow?</p><p>Poverty isn't about not knowing how to manage your money. It's about losing your income, getting sick, your partner leaving, or finding yourself in secondary insolvency, perhaps because your employer doesn't pay you on time (or sometimes not at all), and suddenly you're counting every penny. For single mothers, managing cash flow is a daily reality.</p><p>Two generations, two perspectives on the same problem. Data, research, and personal experiences on how poverty affects not only us but also our children.</p>`,
    youtubeUrl: "https://youtu.be/W9_8xAWClKE",
    youtubeId: "W9_8xAWClKE",
  },
  {
    id: "ep4",
    number: 4,
    date: "February 25, 2026",
    title: "Parents and Children",
    description: `<p>None of us came with an instruction manual; we just became parents, and let's be honest, we're improvising a lot. We repeat our parents' patterns, even the ones we swore we'd never repeat. Or we go to extreme lengths to do the exact opposite, hoping we'll be better. In short, parenting is a constant experiment. Or how about you?</p><p>Being awkward is part of the job description. The question isn't how to stop being awkward, but how to handle it without losing our sense of humor or love.</p><p>Absence hurts more than we admit. It's not just about physical absence, but emotional absence as well. And what if we're burdening a child with decisions they're too young to handle? What if we burden them with our dilemmas because we have no one else to talk to? We mean well, but are we doing it right?</p><p>Some things aren't talked about in families. We believe there shouldn't be any taboos. Not adolescence, love, divorce, or even death. And yes, cemeteries are awesome.</p><p>Two generations, two perspectives. One mom, one daughter. On how to raise kids when none of us has ever been through it, and how not to end up doing a terrible job and causing too much harm.</p>`,
    youtubeUrl: "https://youtu.be/dzgpYanx5gk?si=0buIBm8Q4wviP6qb",
    youtubeId: "dzgpYanx5gk",
  },
  {
    id: "ep5",
    number: 5,
    date: "March 24, 2026",
    title: "AI (Large Language Models) and Security",
    description: `<p>Among other things, we're talking about the "vibe" of coding, what it actually is and what security risks it poses. You sit down at your computer, tell the language model what you want, and by the end of the afternoon, you have a finished app. No programming, not a single line of code, just a prompt in natural language, and often you don't really know what's actually running in the background.</p><p>It's called vibe coding: spontaneous programming without any knowledge of what's happening inside the app or website created this way. At first glance it seems like a niche thing for enthusiasts, but apps created this way are used today by millions of people who know nothing about their origins.</p><p>And so it happened that in July 2025, a dating app for women published 72,000 photos, including 13,000 photos of ID documents. Security experts found that the database was completely open and in its default settings. No one had breached the security; it wasn't a hacker attack. The developers simply hadn't configured it.</p><p>Another story: American investor Jason Lemkin lost his contact database when he entrusted his work to an autonomous AI agent in the Replit environment. Despite explicit instructions not to make any changes or deletions, the agent deleted the database. It had decided on its own that the database needed cleaning. When asked if the data could be recovered, the agent replied that it couldn't and had "destroyed all versions of the database." Fortunately, it eventually turned out the agent had lied and the data could be recovered.</p><p>In this episode, we discuss how much we can trust software that no one has properly checked. How much can we trust apps that were built in an afternoon? And what are we actually risking when we use language models without understanding what they do? Facts instead of impressions, two generations, two perspectives.</p>`,
    youtubeUrl: "https://youtu.be/Qn3vAJkE4ms?si=cLITbibLwG_yOk9V",
    youtubeId: "Qn3vAJkE4ms",
  },
];
