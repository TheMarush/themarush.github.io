export type Category =
  | 'gender'
  | 'news-product'
  | 'impact'
  | 'creator-journalism'
  | 'investigative-journalism'
  | 'conflict-reporting'
  | 'cybersecurity'
  | 'engagement-trust'
  | 'collaborative-journalism'
  | 'safety-wellbeing';

export type Day = 'thursday' | 'friday' | 'saturday';

export interface IJF26Session {
  id: string;
  category: Category;
  day: Day;
  time: string;
  quoteHeadline: string;
  subtitle: string;
  hook: string;
  body: string;
  speakers: string;
  venue: string;
  url?: string;
}

export interface IJF26Intro {
  id: 'intro';
  quoteHeadline: string;
  subtitle: string;
  hook: string;
  body: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  'gender': 'Gender',
  'news-product': 'News Product',
  'impact': 'Impact',
  'creator-journalism': 'Creator Journalism',
  'investigative-journalism': 'Investigative Journalism',
  'conflict-reporting': 'Conflict Reporting',
  'cybersecurity': 'Cybersecurity',
  'engagement-trust': 'Engagement & Trust',
  'collaborative-journalism': 'Collaborative Journalism',
  'safety-wellbeing': 'Safety & Well-being',
};

export const CATEGORY_COLORS: Record<Category, string> = {
  'gender': '#e879a0',
  'news-product': '#52c8f4',
  'impact': '#f59e0b',
  'creator-journalism': '#a855f7',
  'investigative-journalism': '#ef4444',
  'conflict-reporting': '#f97316',
  'cybersecurity': '#22c55e',
  'engagement-trust': '#14b8a6',
  'collaborative-journalism': '#6366f1',
  'safety-wellbeing': '#f43f5e',
};

export const DAY_LABELS: Record<Day, string> = {
  'thursday': 'Thursday 16.4.',
  'friday': 'Friday 17.4.',
  'saturday': 'Saturday 18.4.',
};

// ─── INTRO ──────────────────────────────────────────────────────────────────

export const ijf26Intro: IJF26Intro = {
  id: 'intro',
  quoteHeadline: '"Even if we\'re weirdos, we\'re weirdos together."',
  subtitle: 'The turning point of my career',
  hook: 'Perugia is a medieval city on top of a hill in Umbria. I was there for three days, attended nineteen panels, and took all of these notes in real time while sitting in the rooms listening. Going to IJF26 was a research trip with very good aperitivos.',
  body: `<p>Perugia is a medieval city on top of a hill in Umbria. The International Journalism Festival takes its buildings spread out across that hill. I was there for three days, I attended nineteen panels across those three days, I was out of the hotel from 8am to 8pm every single day, and I took all of these notes in real time while sitting in the rooms listening.</p>

<p>By day two I had climbed the equivalent of dozens of floors before most panels even started. By day three I was running on aperitivo networking, strong Italian coffee, and some stubborn sense of mission. For someone who sat through an entire panel on how introverts should take breaks and recharge, I did a spectacular job of ignoring basically everything it recommended.</p>

<p>It was completely worth it.</p>

<p>If you look at the sessions I chose, the pattern is pretty obvious. Gender. Gender. Conflict. Cybersecurity. Gender. Again and again. That is not an accident and it is not even really a choice at this point, it is just what I care about most and what I think matters most. Feminist journalism, the safety of women in public life, how media covers or fails to cover violence and abuse and power structures, these are not academic interests for me. They are my life's work in progress. Going to IJF26 was a research trip with very good aperitivos.</p>

<p>These articles are based on notes I took in the rooms. Where I have added factual context it is to help the reader understand what was being referenced, not to invent anything. Where I have a strong opinion, it is going to be obvious that it is mine. I was a reporter in those rooms, but I was also a person, and in Perugia those two things kept bumping into each other in ways that were hard to untangle.</p>`,
};

// ─── SESSIONS ───────────────────────────────────────────────────────────────

export const ijf26Sessions: IJF26Session[] = [

  // ── THURSDAY ──────────────────────────────────────────────────────────────

  {
    id: 'execution-muscle',
    category: 'news-product',
    day: 'thursday',
    time: '09:30–10:20',
    quoteHeadline: '"Execution Is a Muscle and You Have to Exercise It."',
    subtitle: 'Bridging the Impact Gap: How to Execute on Strategic Shifts',
    hook: 'We know what the problems are. We have written the strategies, held the retreats, produced the fifteen-point priority documents. The issue is that none of it seems to translate into actual change at the pace anyone needs.',
    speakers: 'Felicitas Carrique (News Product Alliance, via video), Michael Jarjour (Trustfund), Lucy Kueng (RISJ), moderated by Anita Zielina (Better Leaders Lab)',
    venue: 'Sala delle Colonne, Palazzo Graziani',
    body: `<p>Okay so. We know what the problems are. We have known for a while. We have written the strategies, held the retreats, produced the fifteen-point priority documents. The issue is that none of it seems to translate into actual change at the pace anyone needs. That is what this session was about, and I appreciated that it did not pretend otherwise.</p>

<p>The framing was blunt and I respected it: we cannot think our way out of the crisis. The problem is not analysis or vision. The problem is execution.</p>

<p>A few things came up that I keep thinking about.</p>

<p><strong>The knowledge gap.</strong> Newsrooms love to front-load the strategising. Long documents, long meetings, a list of priorities that gets distributed and then quietly forgotten somewhere between the all-hands meeting and the next news cycle. The gap the panel kept identifying was not between strategy and resources. It was between what leadership understands and what the rest of the organisation actually absorbs and acts on. The goal they named was specific: every person in the organisation should be able to say "I don't get it entirely, but I understand why it is important." Not full comprehension. Enough comprehension to do something.</p>

<p>Strategic lists that are too long are off-putting. That sounds obvious but apparently needs to be said out loud in rooms full of people who make strategic lists for a living. Less is more.</p>

<p>There was also a lot of time on cross-functional working and on what C-level leaders do to either enable or destroy it. A Nordic company was referenced as an example of doing this particularly well. The general point: good senior leadership reduces noise rather than adds to it, works without ego, and celebrates what each individual is actually good at rather than demanding uniform performance. That is a deceptively high bar.</p>

<p>And on burnout: when change happens too often and too incomprehensibly, people burn out. When people feel constant pressure it kills the room for creativity. Acknowledging that is not soft management. It is basic functional intelligence. Leaders need to reduce to-do lists between sprints rather than expand them.</p>

<p>The session was dense and moved fast but it was the kind of conversation that names something you have been vaguely aware of without quite having the language for it. The reason a good strategy rarely lands is not the strategy. It is everything around the strategy that nobody wants to do the slow, undramatic work of fixing.</p>`,
  },

  {
    id: 'introvert-survival',
    category: 'impact',
    day: 'thursday',
    time: '10:30–11:20',
    quoteHeadline: '"People Are Different."',
    subtitle: 'How to Survive Perugia (and Journalism in General) as an Introvert',
    hook: 'They opened with actual neuroscience, which immediately earned my trust. Some people have higher baseline cortisol arousal. The problem is not the temperament — it is being forced into environments that were not designed with you in mind and then being told that your discomfort is your personal failing.',
    speakers: 'Steffi Dobmeier (STERN), Ellen Heinrichs (Bonn Institute), Shirish Kulkarni (Media Cymru), Adam Thomas (Evenly Distributed), moderated by Steffi Dobmeier',
    venue: 'Sala delle Colonne, Palazzo Graziani',
    body: `<p>This was the session I very much knew I needed.</p>

<p>They opened with actual neuroscience, which immediately earned my trust. Some people have higher baseline cortisol arousal. Environments with a lot of social stimulation become overstimulating for them faster, not because they are antisocial or fragile, but because that is literally how their nervous system works. There is a neurotransmitter angle too: acetylcholine and dopamine function differently in introverts and extroverts. Introverts tend to reach flow through depth and focus rather than breadth and stimulation. Evolutionary biology frames both profiles as adaptive depending on the environment. The problem is not the temperament. The problem is being forced into environments that were not designed with you in mind and then being told that your discomfort is your personal failing.</p>

<p>Shirish Kulkarni added a neurodivergent lens that I think was genuinely the most valuable contribution of the whole session. The overlap between introversion and neurodivergence is significant. Designing spaces that work for introverts almost always means designing spaces that work for a much bigger group of people than the word "introvert" usually suggests. He also called out the journalism culture assumption that loud argumentation equals intelligence — "the more you argue the better journalist you are" — and I laughed because yes, that particular piece of nonsense has done a lot of damage to a lot of people who had perfectly good ideas and just did not want to shout them.</p>

<p>The panel worked through twelve specific and practical suggestions.</p>

<ol>
  <li>You don't have to network. Go to Perugia, be inspired, listen. Note who you want to talk to. Reach out afterward when nobody is performing charm at an aperitivo simultaneously.</li>
  <li>"Networking" can be many things. A deep one-on-one conversation counts. Showing up to someone's event counts. Being genuinely interested in someone counts.</li>
  <li>Small talk can start in a queue. The person next to you already shares three things with you: the same topic interest, the achievement of being in Perugia, and the specific experience of standing alone while everyone else seems to already know each other.</li>
  <li>It is fine to avoid the big dinners and aperitivos. You are not missing a one-off career-defining bonding experience. It is dinner. There will be other dinners.</li>
  <li>The Brufani bar is not the whole world. Real magic happens in a small group in a quiet piazza with an espresso.</li>
  <li>What is "right" is just what is right for you. No justification needed.</li>
  <li>Give yourself time to recharge, soul and body. Create buffers. Walk the city. Swap one Spritz for water. They described this as "radically boring," which made the room laugh.</li>
  <li>Watch the live stream and relax. Watching a session from your Airbnb is a valid choice.</li>
  <li>Make one new friend. Just one. One meaningful connection is a win.</li>
  <li>Don't be intimidated by native English speakers. Speaking English as a second or third language does not make your ideas less interesting. I speak four languages and I still needed to hear this.</li>
  <li>FOMO is exhausting, so be selective. Pick a couple of panels. Prioritise smaller venues.</li>
  <li>Be kind to yourself. Last one. Right note.</li>
</ol>

<p>One of the panelists mentioned bringing her own coffee and müsli to Italy so she would not have to deal with the stress of a hotel breakfast. I thought that was the most self-aware, practical, quietly radical thing. Not a grand wellness gesture. Just knowing yourself and acting on it accordingly.</p>

<p>Shirish Kulkarni said "even if we're weirdos, we're weirdos together" and the room laughed.</p>

<p>The closing argument is the one I will carry: if you design a conference, a newsroom, or any working environment for introverts, you end up serving a much larger audience than you intended. Inclusion for quieter people is not accommodation. It is just better design. And better design gets you better journalism because you are finally putting the right people in the right environments instead of rewarding whoever shouts loudest.</p>`,
  },

  {
    id: 'epstein-files',
    category: 'gender',
    day: 'thursday',
    time: '11:30–12:20',
    quoteHeadline: '"For You It\'s a Story. For Me It\'s My Life."',
    subtitle: 'The Epstein Files: Where Did the Media Get It Wrong?',
    hook: 'The session started with a show-of-hands exercise that took ninety seconds and said everything about why this panel existed. Almost everyone stood up. Almost the entire room sat down when asked if the person who assaulted them had been reported. The phrase that stayed with me longest: "Everyone was talking about us, but never with us."',
    speakers: 'Monique El-Faizy, Jess Michaels (3Joannes Inc), Lucia Osborne-Crowley, Elizabeth Stein, moderated by Annette Young (France 24)',
    venue: 'Auditorium San Francesco al Prato',
    body: `<p>The session started with:</p>

<p>"Stand up if you know someone who has experienced sexual assault, or have yourself." Almost everyone stood up. "Raise your hand if the person who did it was not a stranger in an alley — rather someone they knew." Almost everyone raised their hand. "Sit down if they did not report it." Almost the entire room sat down.</p>

<p>That took maybe ninety seconds. It said everything about why this panel existed.</p>

<p>Jess Michaels, Epstein survivor and advocate, was the clearest voice in the room. "I believed that I was the only person who was raped and it was also my fault, because I froze." That belief was not irrational. It was the direct product of a media and legal culture that has consistently told victims their experience only counts if it looks a certain way. An unnamed woman also present said something similar: "I became friends with people I shouldn't have and I got what I deserved." That sentence should not exist. The fact that it does tells you everything about what the media failed to challenge.</p>

<p>The phrase that stayed with me longest was Jess's: "Everyone was talking about us, but never with us."</p>

<p>Journalism covered the Epstein case for years as a story about powerful men, legal proceedings, and political fallout. The panel pointed to Julie K. Brown's investigative series "Perversion of Justice," published in the Miami Herald in November 2018, as the model for how it should have been done all along: survivor-centred, sustained, and rigorous. That reporting directly triggered Epstein's federal arrest in July 2019.</p>

<p>Lucia Osborne-Crowley spoke about her own experience of grooming and child abuse beginning at age 9, and about attending the Ghislaine Maxwell trial to observe how coverage was being handled. Her assessment was stark. Male journalists at the trial consistently prioritised the least relevant details and fed directly into the sexual assault stereotypes that make it harder for survivors to come forward in the first place.</p>

<p>The Jerry Sandusky comparison came up. In that case, institutions acted and people were fired. The panel's read: partly because the victims were boys. When girls are victims they get framed as underage women. When young men are victims they get framed as children. The language encodes who gets protection.</p>

<p>There was a detailed discussion of the "perfect victim" problem. A case was described where video evidence showed a woman in a state of complete incapacitation. Even then, major outlets struggled to simply believe her — they had to see the video. She was a perfect victim in every conventional sense of what society expects women to be. "That is not the case with every victim." If even the most textbook case gets treated this way, what happens to everyone else?</p>

<p>The panel also pushed back on language. "Powerful men" was challenged as a frame. The preferred version: "horrific men with power." They're not powerful, they yield power.</p>

<p>On what needs to change practically: survivors are not sources to be extracted from. They have needs. They need breaks, they need time, they need to be safe. They have had their boundaries crossed repeatedly by the people who abused them. Retraumatising a survivor in the course of covering their story is not heroic journalism. It is repeating a version of the original harm. Sharing a survivor's contact information without their explicit consent is a violation, however well-intentioned.</p>

<p>A UK poll cited during the session found that the majority of respondents believed rape victims "routinely lie." Those same people sit on juries. They interpret the law. "I don't know a single woman whose life didn't become harder and more difficult because she came forward with this."</p>

<p>A tipping point is coming, the panel said. Something is shifting. But the statistics say otherwise. And the statistics are the thing worth watching.</p>`,
  },

  {
    id: 'serious-journalism-smile',
    category: 'creator-journalism',
    day: 'thursday',
    time: '14:00–14:50',
    quoteHeadline: '"What If the Assumption That Journalism Has to Be Serious Is Hindering Us?"',
    subtitle: 'A 101 Guide to Doing Serious Journalism That Brings a Smile',
    hook: 'Dave Jorgenson and Aled John spent the time making the case that humor, personality, and internet-native formats are not incompatible with serious journalism. Audience research shows a lack of personality is perceived as a lack of trustworthiness — not neutrality, but distrust.',
    speakers: 'Aled John (Financial Times), Dave Jorgenson (Local News International)',
    venue: 'Auditorium San Francesco al Prato',
    body: `<p>The provocation in the title is the whole session, really. Dave Jorgenson from Local News International, former journalist of The Guardian, and Aled John from the FT spent the time making the case that humor, personality, and internet-native formats are not incompatible with serious journalism. They are actually tools for comprehension, trust, and reach.</p>

<p>One of the starting points was audience research showing that a lack of personality is perceived as a lack of trustworthiness. Not neutrality. Distrust. A piece assembled by committee with all human voices carefully removed does not feel authoritative. It feels like it is hiding something.</p>

<p>The goal Jorgenson described: moving an audience from a couple of seconds of engagement to a couple of minutes. More time means more information transferred. More information means more informed people. The Daily Show has been making this argument for decades and it keeps being right.</p>

<p>Some of the specific formats: duets and sketches presenting different views as naturally as possible but with wit. Fact-checking framed comedically, not because accuracy is a joke but because the absurdity of what is being fact-checked is often already there. You are not inventing comedy, you are surfacing it. The abrupt ending as a technique: cutting a video before its natural conclusion causes it to loop automatically on social platforms, increasing views and the chance someone absorbs more of it on second watch. Pop culture references as a bridge into unfamiliar territory.</p>

<p>FT Alphaville and Lunch with the FT came up as examples of personality-driven journalism sitting comfortably inside a serious outlet. They are not concessions. They are proof of concept.</p>

<p>The honest caveat: one video, Jorgenson noted, took him a full day to make. Humor is not a shortcut. Done well it requires as much craft as any other format. The joke that seems effortless is usually the most labored thing in the room.</p>`,
  },

  {
    id: 'women-journalists-exile',
    category: 'gender',
    day: 'thursday',
    time: '16:00–16:50',
    quoteHeadline: '"You Enter Exile Because of Your Job, but You Can\'t Do Your Job in Exile Because Nobody Will Pay You."',
    subtitle: 'Unseen Burdens: The Invisible Backpack of Women Journalists in Exile',
    hook: 'Three women journalists from three different authoritarian contexts — Myanmar, Russia, Nicaragua. Three stories about what exile actually looks like beyond the headlines, and what it costs to carry your country on your chest because there is nowhere else to put it.',
    speakers: 'Abigail Hernandez (La Sala), Hsu Mon Phyo (Delta News Agency), Irina Novik, moderated by Nadine Jurrat (DW Akademie)',
    venue: 'Teatro del Pavone',
    body: `<p>Three women journalists from three different authoritarian contexts. Three stories.</p>

<p>Hsu Mon Phyo grew up in Myanmar under military rule and propaganda media, where people are not permitted to speak about peace, democracy, or even Nobel Prize winners. She built Delta News Agency before her country's brief opening toward democracy. When that ended she had to flee, even though she desperately did not want to. She went to Thailand, learned a new language, and kept running the organisation in exile, which she described as almost impossible. There was significant international support for journalists fleeing Myanmar at the beginning, but support and sustainable income are not the same thing. Her co-workers still could not be paid.</p>

<p>Irina Novik left Russia in September 2022 when mobilisation started, after her entire newsroom had already scattered following the February invasion of Ukraine. She is not only a journalist. She is also a mother. Those are two enormous jobs running in parallel in a country that is not hers. Policemen keep ringing on her mother's door in Russia. There is a possibility her mother's house will be raided, now that she has been framed as the enemy of the state.</p>

<p>Abigail Hernandez spent six months in safe houses before leaving Nicaragua. She was followed. She was detained twice while covering events. Once she fled, she was told by the Costa Rican government that they could not protect her and she needs to leave. More than 300 journalists have fled Nicaragua. The regime makes it easy to trace people, to spy, to send threatening messages.</p>

<p>"In a dictatorship, it does not matter if you are a man or a woman journalist. You are an enemy," she said. "But the difference is that as a woman, your rights get violated so much more and differently, they can stab you and rape you if they want."</p>

<p>When Abigail spoke about her lawyer telling her she is technically nobody's citizen, she was crying. No passport, no driver's licence, no ID. She is very much Nicaraguan. She knows it. The people in that room knew it. But her country abandoned her on paper. She cannot even call her mother directly because it might put her 70 year old mother at risk.</p>

<p>The gendered dimension ran through everything. You enter exile because of your job, but you cannot do your job in exile because no one will pay you. For women, that compounds with the constant expectation to prove yourself in environments that did not expect you to be there. "You have the right to do and be anyone and anything." Yeah. But we have to work three times harder than men for it.</p>

<p>Women journalists tend to cover the topics that power finds dangerous: human rights, minorities, equality, climate, democracy — all those dangerous system-breaking topics. That is not accidental. And it is directly connected to why they end up in exile.</p>

<p>At the end of the session each panelist was asked what object best summed up their invisible backpack. Irina was wearing a necklace she had bought in St. Petersburg. Hsu was wearing one her mother had given her in Myanmar. Abigail was wearing one in the shape of a map of Nicaragua. Each of them carrying their home on their chest because there is nowhere else to put it.</p>`,
  },

  {
    id: 'creators-future-journalism',
    category: 'creator-journalism',
    day: 'thursday',
    time: '17:00–18:15',
    quoteHeadline: '"How Do We Ensure People Have Access to Many Diverse Sources of Fact-Based Information?"',
    subtitle: 'Creators and the Future of Journalism: Insights on Infrastructure Building from the US and South Africa',
    hook: 'Based on a study of more than fifty creator-model journalists in the US and South Africa, this session mapped the structural support needed for independent journalism to survive and scale. The creator path offers real freedom — but also demands you be a reporter, editor, business owner, and marketer simultaneously.',
    speakers: 'Justin Arenstein (Code for Africa), Justin Bank (Independent Journalism Atlas), Dave Jorgenson (Local News International), Amy Mitchell (CNTI), moderated by Liz Kelly Nelson (Project C)',
    venue: 'Sala delle Colonne, Palazzo Graziani',
    body: `<p>This panel, organised with the Center for News, Technology and Innovation, presented findings from a study of more than fifty creator-model journalists in the US and South Africa. The central tension is one anyone who has tried to run any kind of independent journalistic operation will recognise: the creator-journalist path offers real freedom and the ability to build genuine audience trust, but it also demands you be a reporter, an editor, a business owner, a marketer, and your own legal and insurance department, usually without training for any of those roles except the first one.</p>

<p>The Independent Journalism Atlas is mapping credible creator-model journalists, connecting them to funders, and amplifying developing best practices in the space. The framing was not individual success stories. It was about what structural support needs to exist for this model to produce sustainable, diverse journalism at scale.</p>

<p>The question underneath everything: how do we ensure people have access to many diverse sources of fact-based information when the institutions that used to guarantee that are shrinking? The creator model is one part of an answer. But only if the infrastructure catches up.</p>`,
  },

  // ── FRIDAY ────────────────────────────────────────────────────────────────

  {
    id: 'ai-gender-violence',
    category: 'gender',
    day: 'friday',
    time: '10:30–11:20',
    quoteHeadline: '"These Attacks Are Designed to Push Women Out of Public Life and Shut Them Up."',
    subtitle: 'AI-Assisted Gender-Based Violence: The Chilling Escalation of Online Abuse Against Women in the Public Sphere',
    hook: 'The era of AI-assisted online violence is not looming. It has arrived. Research from 119 countries found that of women journalists who reported online violence, 24% identified abuse generated or amplified by AI tools. In five years, the rate of offline violence linked to online attacks has more than doubled.',
    speakers: 'Kalliopi Mingeirou (UN Women), Maria Ressa (Rappler), Kaylee Williams (Information Integrity Initiative), moderated by Julie Posetti (Information Integrity Initiative)',
    venue: 'Auditorium San Francesco al Prato',
    body: `<p>The era of AI-assisted online violence is not looming. It has arrived. That was the opening frame and the research backed it up completely.</p>

<p>The panel presented findings from a global study of women journalists, human rights defenders, and activists across 119 countries, staged in collaboration with UN Women. Of the 70% of survey respondents who reported experiencing online violence in their work, 24% identified abuse that was generated or amplified by AI tools. For writers and public communicators it goes up to 30%. The boundary between online and offline violence is collapsing: 40.9% of women surveyed reported experiencing offline attacks, including physical assault, stalking, and verbal harassment, that they linked to online violence. In a comparable 2020 survey that figure was 20%. In five years it has more than doubled to 42%.</p>

<p>What the session made viscerally clear was what AI-assisted abuse actually looks like in practice. Nudification apps generating explicit images from a single real photograph. Video-game-like interfaces where perpetrators select body types, outfits, and positions to generate pornographic material of real women. The descriptions in the session were detailed and deliberately so: "put her in a bikini and exchange the bikini for dental floss." Superrealistic deepfakes designed specifically to deepen trauma. Crypto-monetised abuse networks. One woman had received 90 threatening messages per hour. At the beginning you are often ashamed of it because they deliberately look for what makes you vulnerable.</p>

<p>This content started as a niche community. It is now heavily integrated through platforms including X and Grok, and it is reaching children in large numbers.</p>

<p>The radicalisation dimension was addressed directly. Younger men and boys are being exposed to this content through algorithms that reward engagement with increasingly extreme material. The more you react, the more you get. The manosphere is not a fringe. It is mainstream social media education for a generation of boys, and it encompasses not just misogyny but extreme manifestations of racism, homophobia, and other forms of dehumanisation.</p>

<p>There are currently no reliable tools for detecting AI-generated abuse content at scale. Legal protections are weak with significant intent problems in existing regulations. The platforms generating the most harm are the least likely to solve it. 2026 is being called a tipping point. The panel was clear that fragmentation is the enemy here. We are too fragmented. We have to unite.</p>

<p>One practical note from the session: a chat moderator was going through live messages from the audience during the Q&amp;A, surfacing additional testimonies and questions. The volume of responses from the room said everything about how many people in that auditorium had personal experience with exactly what was being described.</p>

<p>The session ended on this: it is going to be very important to come back to the basics of feminism and the ground we stand on. I wrote that down and underlined it.</p>`,
  },

  {
    id: 'story-to-book',
    category: 'impact',
    day: 'friday',
    time: '11:30–12:45',
    quoteHeadline: '"Timing Is a Crapshoot. We Hope We Catch the Wave but the World Is Crazy."',
    subtitle: 'From Story to Spine: How Journalists Turn Reporting into Books',
    hook: 'A practical, honest, occasionally brutal session on what the current publishing landscape actually demands. You do not submit a finished manuscript — you submit a proposal, and publishers evaluate your platform alongside your writing. This session hit a personal nerve.',
    speakers: 'Dawn Davis (37 Ink), Lynda Hammes (Tertulia), Raju Narisetti (McKinsey Publishing), Madhulika Sikka (Crown Publishing Group), moderated by Mitra Kalita (URL Media)',
    venue: 'Teatro del Pavone',
    body: `<p>Last year's book session at IJF was standing-room only. This year's panel was practical, honest, and occasionally brutal about what the current publishing landscape actually demands.</p>

<p>The short answer to "what does it take to get published in 2026" is: what it has always taken. A really good story, well told. The longer answer involves a lot more.</p>

<p>For nonfiction you do not submit a finished manuscript. You submit a proposal. The proposal needs to answer why you want to write this, show your writing, demonstrate your thinking about the book as a thing in the world, and include a sample chapter. The "why me, why now" has to be explicit.</p>

<p>What publishers are also evaluating alongside the writing: your platform. Social media footprint, whether you have a podcast, whether your existing audience are actually book buyers, and what you are willing to do for the next three years to publicise it. Your email list matters more than your follower count. Niche communities are often more valuable than broad platforms.</p>

<p>The competition is severe. 11,000 books a day are issued ISBNs. Most publishers do not invest equally in all the books they publish. Discoverability is the hardest problem. Publishers are actively using data analytics to try to solve it, tracking where books get mentioned, building personalisation to surface them.</p>

<p>Self-publishing came up seriously. Barriers to entry have collapsed. The speed advantage is real: traditional publishing takes 18 months or more from finished manuscript to publication. The tradeoffs are real too: you will likely not get reviewed by major outlets, you are not eligible for most awards, and the discoverability problem is entirely yours. For memoir or family history where legacy is the point rather than sales volume, or where a major publisher passed, smaller presses or independent routes can work.</p>

<p>Timing is a crapshoot, the panel agreed. You can read the market perfectly and publish into a news cycle that swallows everything. What gives nonfiction staying power is timeless research and a specific voice. Good data, good reporting, a perspective nobody else has. And you have to read to write better. That one is not complicated.</p>

<p>Also, this note from me: this session hit a personal nerve given that I am working on a memoir project. The "why me why now" framework is going in my notes immediately.</p>`,
  },

  {
    id: 'broligarchy-cadwalladr',
    category: 'investigative-journalism',
    day: 'friday',
    time: '12:30–13:00',
    quoteHeadline: '"Do Not Obey in Advance."',
    subtitle: 'Exposing the Broligarchy with Carole Cadwalladr',
    hook: 'Thirty minutes. One of the most urgent sessions of the festival. Cadwalladr coined "broligarchy" in 2024 to describe the convergence of Silicon Valley power and authoritarian politics — and her argument was not that this is a worrying trend. It is already the operating reality.',
    speakers: 'Carole Cadwalladr (The Nerve), interviewed by Lisa Peters (Stichting Democratie en Media)',
    venue: 'Auditorium San Francesco al Prato',
    body: `<p>Thirty minutes. One of the most urgent sessions of the festival.</p>

<p>Cadwalladr coined "broligarchy" in 2024 to describe the convergence of Silicon Valley power and authoritarian politics. The argument she made in this session was not that this is a worrying trend. It is that it is already the operating reality, and journalism is running out of time to develop tools capable of responding to it.</p>

<p>Her frame: the tech giants are not just media companies. They are surveillance infrastructure. Their agenda across platforms is the collection and control of personal data. They are in active alliance with authoritarian state power — what she called "tech capture": capturing states, news organisations, and the journalism institutions that are supposed to hold them accountable.</p>

<p>She called it techno-fascism and she was not being rhetorical. Authoritarian states are learning from each other. Tech platforms provide the tools of surveillance and control. The men running those platforms have a worldview that is simultaneously libertarian and authoritarian: freedom for themselves, control for everyone else.</p>

<p>The accountability point was blunt: nobody is being held to account. When Facebook was fined $5 billion by the FTC in 2019, at the time the largest privacy fine in history, their shares went up. The market correctly calculated that the penalty was cheaper than changing the business model. A $5 billion fine that makes your share price rise is not a deterrent. It is an advertisement.</p>

<p>Cadwalladr spoke about what happened to her personally after the Cambridge Analytica investigation. A weaponised libel trial. Sustained online abuse campaigns. Gaslighting. She described investigating tech power as becoming a target of it. In early 2025 her contract at The Observer ended after Guardian Media Group sold the paper. She has since co-founded The Nerve with former Observer colleagues and launched a Substack. Plans to publish in print later in 2026.</p>

<p>Her message on what to do: the old tools of journalism still matter. But they are not sufficient. Journalists have to understand themselves as citizens and as activists. Walking out when your news organisation is captured. Striking. Using the rights you have. She cited investigative journalism in Hungary as an example of what is possible under the most hostile conditions.</p>

<p>The phrase she ended on: "Do not obey in advance" to oligarchy. That comes from historian Timothy Snyder's work on authoritarianism. It landed hard.</p>`,
  },

  {
    id: 'quiet-piggy',
    category: 'gender',
    day: 'friday',
    time: '15:00–15:50',
    quoteHeadline: '"It\'s Not What You Say. It\'s the Fact That You\'re Speaking."',
    subtitle: '"Quiet, Piggy": Misogynistic Attacks as a Tool to Silence Women Journalists and How We Fight Back',
    hook: 'Trump called a journalist "quiet, piggy" on Air Force One. These are not tantrums — they are press freedom attacks designed to silence women who hold power to account. When they come from a head of government they license a torrent of abuse from everyone below.',
    speakers: 'Soraya Chemaly, Juliana Dal Piva (Abraji), Karyn Maughan (News24), intro by Kathy Im (MacArthur Foundation), moderated by Elisa Lees Munoz (IWMF)',
    venue: 'Sala dei Notari, Palazzo dei Priori',
    body: `<p>Trump called a journalist "quiet, piggy" on Air Force One. That was the opening image and the session spent the next fifty minutes unpacking what that kind of attack actually does, who it is designed to serve, and why silence from colleagues is not neutral.</p>

<p>These are not tantrums. They are press freedom attacks designed to silence women who hold power to account. When they come from a head of government they license a torrent of abuse from everyone below. The session was explicit about not normalising them even when they become routine.</p>

<p>Karyn Maughan described what happened after she started a serious investigation in South Africa. Death threats. A kill contract. The need for bodyguards. She pursued a private prosecution. The men involved should have gone to jail for fifteen years. Her direct advice: defend your court systems. When you are dealing with an authoritarian leader, the courts are what can save you.</p>

<p>Juliana Dal Piva described being threatened and then having her own institution not believe her, not want to make it a conversation. It took her almost a week to get anyone to stand up with her. Her company eventually backed her from the beginning, she said, but the starting assumption was that she should be strong, not cry, and keep working. "I was pretending to be okay and being productive, which was expected of me."</p>

<p>The structural argument: these attacks are framed as gender issues but they are structural issues. Feminism becoming stigmatised is not accidental. When a feminist enters an institution the whole institution is in danger of being changed, and that is exactly the point. The methods used against women journalists — isolation, silencing, character destruction — are the same methods used in intimate partner violence. They just get scaled up through platforms and political rhetoric.</p>

<p>On solidarity: why do colleagues go quiet when a peer is attacked by an authority figure? The panel had no patience for it. There is no excuse for standing by.</p>

<p>On platforms: a lot of the violence runs through Facebook and others, including revenge pornography. Someone raised the question of why platforms hash reported images of sexual abuse content for detection purposes but not comparable images of perpetrators. The room laughed. The point was serious.</p>

<p>The line that I keep thinking about: "It is not what you say. It is the fact that you're speaking." The attacks are not about the content of any specific article or question. They are about the existence of women with public voices. Understanding that changes what the response has to be, and it means the response has to be collective, because the whole design of the attack is to make each target feel alone.</p>`,
  },

  {
    id: 'journalists-in-gaza',
    category: 'conflict-reporting',
    day: 'friday',
    time: '16:00–16:50',
    quoteHeadline: '"I Had to Prove for the First Time That Palestinian Journalists Are Actually Journalists."',
    subtitle: 'Journalists in Gaza',
    hook: 'Built around a documentary following AFP journalists in Gaza in the months after October 7, 2023. Adel Zaanoun described covering a war that removed entirely the balance between work and family that all previous conflicts had still allowed.',
    speakers: 'Thibaut Bruttin (Reporters Without Borders), Adel Zaanoun (AFP Gaza), Hélène Lam Trong (documentary director), moderated by Phil Chetwynd (AFP)',
    venue: 'Auditorium San Francesco al Prato',
    body: `<p>I want to be upfront about the limits of my notes from this session. Adel Zaanoun was speaking in English, which is not his first language, and visibly under enormous emotional weight. What I captured is incomplete and I have not filled in what I did not clearly hear.</p>

<p>The session was built around Hélène Lam Trong's documentary "Inside Gaza," which follows the daily lives of AFP journalists in Gaza in the months after October 7, 2023. It has broadcast in Belgium, Switzerland, France, and Germany.</p>

<p>Adel described October 7 from inside Gaza. He described the morning, the sounds, calling Hamas to find out what was happening and not getting an answer. He thought it might be a small escalation. "Nobody knew in advance." When he saw hundreds of rockets he understood it was large. He thought it would last two or three weeks.</p>

<p>He described evacuating from home thinking he would return soon. He described the balance between work and family that all previous conflicts had still allowed. This war removed that balance entirely. "I failed to take care of myself. How can I take care of my team?" His daughter asked him why he is a journalist. He told her: for money, for the job, for travel. "I don't want to travel!!!" she said.</p>

<p>The AFP office was targeted by the Israeli navy and tanks. About six weeks into the war, journalists received warnings to evacuate a building. They left. Thirty minutes later the building was hit. Three journalists were killed.</p>

<p>As a Palestinian journalist he described the routine additional accusation from Israeli authorities of being connected to Hamas and not being a real journalist. "Gaza is a very small area. We know each other." He made a specific comparison: journalists in Afghanistan are never accused of working for the Taliban just because they have contact with Taliban sources. That is the job. "But this is something else."</p>

<p>Hélène Lam Trong described the difficulty of finding partners for the documentary. It could not be made with only Palestinian voices, and that was a problem for French and European media. When you prevent the international press from entering a territory and then cast suspicion on the journalists reporting from inside, you create the conditions to discredit the entire record. "We should trust each other. We should not have to prove our photos are real." She described Adel being asked by The New York Times to verify that a photograph of a dying child was not a doll.</p>

<p>Thibaut Bruttin was direct about the institutional failure. International law protecting journalists is mostly broken. Israeli military forces have run active smear campaigns against Palestinian journalists. There are fake NGOs created specifically to discredit them.</p>

<p>The ask at the end was straightforward: open the Gaza Strip. Let journalists in. Let journalists out. "What are they afraid of? What are they hiding?"</p>

<p>All of the journalists' houses have been systematically destroyed. They have nowhere to return.</p>`,
  },

  {
    id: 'vertical-video-after',
    category: 'creator-journalism',
    day: 'friday',
    time: '17:00–17:50',
    quoteHeadline: '"They Aren\'t Successful Necessarily Because of Hard Work but Luck."',
    subtitle: 'Choose Your Own Adventure: What Comes After Vertical Video?',
    hook: 'The honest observation from this panel: success in independent creator journalism is not purely a function of hard work. Timing, luck, and platform conditions at the right moment matter enormously — and those are largely outside anyone\'s control.',
    speakers: 'Dave Jorgenson (Local News International), Tara Palmeri (The Tara Palmeri Show), Sophia Smith Galer, moderated by Francesco Zaffarano (Chora & Will Media)',
    venue: 'Teatro del Pavone',
    body: `<p>By the time this session started I had attended six panels and I had genuinely reached my personal limit for creator journalism content. I had also seen Dave Jorgenson speak three times in two days at this point, which I have nobody to blame for but myself and my own scheduling choices.</p>

<p>What came through clearly: Tara Palmeri and Sophia Smith Galer have both built independent platforms that work well beyond the institutional frameworks they came from. The honest observation from the panel was that success in independent creator journalism is not purely a function of hard work. Timing, luck, and the platform conditions at the right moment matter enormously, and those are largely outside anyone's control. That is a more honest framing than most of these conversations offer.</p>

<p>LinkedIn came up as an underestimated platform because people still read there and the format is apparently not yet saturated. Dave described LinkedIn users as "desperate for vertical video," which is both a funny sentence and probably accurate.</p>`,
  },

  // ── SATURDAY ──────────────────────────────────────────────────────────────

  {
    id: 'justifiable-trust',
    category: 'cybersecurity',
    day: 'saturday',
    time: '09:30–10:20',
    quoteHeadline: '"If Someone Is Trying to Hide Their Mistakes, That\'s a Bit of a Red Flag."',
    subtitle: 'Justifiable Trust: How to Ensure Journalists Have Access to the Right Information When Choosing Security-Focused Applications and Tools',
    hook: 'Kevin O\'Gorman and Giovanni Pellerano ran this as a genuinely practical workshop on digital security for journalists. The central lesson: the word "secure" on the packaging means nothing if the architecture is compromised at the root.',
    speakers: 'Kevin O\'Gorman (Freedom of the Press Foundation), Giovanni Pellerano (GlobaLeaks)',
    venue: 'Sala del Dottorato',
    body: `<p>Kevin O'Gorman from the SecureDrop team at the Freedom of the Press Foundation and Giovanni Pellerano from GlobaLeaks ran this as a genuinely practical workshop, which was a welcome change of pace after two days of broader structural discussions. The focus was whistleblowing systems specifically, but the framework they offered applies across digital tools journalists use.</p>

<p>The session opened with a specific case: Teleguard, a messaging app that markets itself as secure, was uploading its own encryption keys to its server. If you control the encryption keys, you can decrypt everything. The word "secure" on the packaging means nothing if the architecture is compromised at the root. This matters not just for journalists but for sources, who are often the most at risk.</p>

<p>The broader point is that tools depending on third-party infrastructure, including mobile app stores, introduce vulnerabilities that have nothing to do with the tool itself. And closed-source applications cannot be independently audited regardless of how polished they look. There was also an important note about open-source tools: even well-regarded open-source applications carry risks depending on how they are used. There is a documented case where the FBI recovered deleted Signal messages through push notification logs, which is a reminder that the weakest link is often not the encryption but the surrounding infrastructure.</p>

<p>The framework they offered for evaluating tools:</p>

<p><strong>Accessibility.</strong> Which tools are available and safe on a source's device? Which are easy enough to use that a non-technical person will actually use them correctly?</p>

<p><strong>Trustworthiness through reputation.</strong> What is the track record of the organisation behind it?</p>

<p><strong>Technical trustworthiness.</strong> Is it built in the open? Has it been independently audited? How does the organisation respond when breaches occur? Do they notify affected users? If someone is trying to hide their mistakes, that is a red flag.</p>

<p><strong>Wildcards.</strong> What else influences decisions in practice? Maintaining separate personal and professional devices came up, which is as much about operational hygiene and work-life balance as it is about security.</p>

<p>The closing recommendation was practical and often skipped: document your practices. If you know what you are doing and why, you can identify when something changes. Security is not a product. It is a habit.</p>

<p>This session was personally meaningful to me given the time I have spent doing cybersecurity education for seniors and civil society organisations. The questions being asked here are exactly the ones I try to answer in those workshops: how do you make security legible to people who did not study it? The answer is always the same. Start with the questions, not the tools.</p>`,
  },

  {
    id: 'gender-just-journalism',
    category: 'gender',
    day: 'saturday',
    time: '10:30–11:20',
    quoteHeadline: '"I Don\'t Want to Be a Millionaire. I Want to Make Enough to Be Brave."',
    subtitle: 'The Future of Gender-Just Journalism: From Coverage to Culture',
    hook: 'Four women who have built independent feminist platforms against the odds. Mona Eltahawy, Francesca Donner, Eliza Anyangwe, Afua Hirsch — on money, patriarchy, and what it means to do journalism that has to exist even when it should not be economically possible.',
    speakers: 'Eliza Anyangwe (Fuller), Francesca Donner (The Persistent), Mona Eltahawy (Feminist Giant), Afua Hirsch, moderated by Nana Darkoa Sekyiamah (Institute of Journalism and Social Change)',
    venue: 'Auditorium San Francesco al Prato',
    body: `<p>I loved this panel completely. I love them. This is my mission.</p>

<p>Mona Eltahawy opened with a declaration of faith: fuck the patriarchy. She described feminism as the destruction of patriarchy, not its reform. Her image was an octopus: the head is patriarchy, the tentacles are the interlocking systems of oppression that constrain everyone who is not at the centre of power. "It is not enough for me just to be equal. I want to destroy that octopus."</p>

<p>She described having her hands broken, being sexually assaulted, being told by the New York Times to stop saying "fuck" during the same period the paper was printing stories about a senator encouraging the crushing of Black Lives Matter protesters. She started Feminist Giant to be able to be brave. "I don't want to be a millionaire or a billionaire. I want to make enough to be brave. How do I make the revolution irresistible?"</p>

<p>Francesca Donner went after the economic structure underneath the gender gap in journalism. Unpaid labour is the whole problem of our economy and it is not a cute niche issue to be put to the side. The gender gap in coverage is pervasive, all the time, everywhere. Men are called experts over and over. Women are not. That is what the structural headwind looks like in practice. She was also direct about the financial reality of independent feminist journalism: you are on your own, you cannot make enough money to keep it going, and people do not want to pay for journalism in any way.</p>

<p>Eliza Anyangwe described starting at the Guardian and being told Africa is "the last frontier," and the slow realisation that the way those stories were being covered did not fit the reality she was observing. The proposals for solutions in that coverage are thin. She made a structural argument: a vanishingly small percentage of journalism actually covers intersectional problems in a way that reflects how the world works. If you design your coverage around the interests of a narrow demographic you are not doing journalism. You are producing a product for a small audience while claiming to serve the public.</p>

<p>Afua Hirsch described being asked at the Guardian how she got her job. "Same as you!" She talked about audiences being fed what they are given, about true crime as a genre that largely enacts violence against women while calling it entertainment, and about the deliberate choice to take a different path. "These narratives are being directed to distract us when we could use that space to educate us."</p>

<p>The money problem ran through everything. Journalism is expensive to make, people expect it for free, and the financial pressure falls hardest on the people doing the most structurally important work. This need for everything to be paid for will eventually destroy you, Afua said. And yet here are four women who are doing it anyway. That is the thing about this kind of journalism. It has to exist, so it does, even when it should not be economically possible.</p>

<p>At the end all of us screamed "fuck the patriarchy!" three times.</p>`,
  },

  {
    id: 'building-your-brand',
    category: 'creator-journalism',
    day: 'saturday',
    time: '12:30–13:00',
    quoteHeadline: '"It Has to Be All Audience First."',
    subtitle: 'Building Your Own Brand: Risks and Opportunities',
    hook: 'Sophia Smith Galer has never really thought about personal branding. She thinks about journalism and what her audience actually wants. That distinction turned out to be the whole session.',
    speakers: 'Sophia Smith Galer, Antonio Zappulla (Thomson Reuters Foundation)',
    venue: 'Teatro del Pavone',
    body: `<p>Short session, short notes.</p>

<p>Sophia Smith Galer has never really thought about personal branding. She thinks about journalism and what her audience actually wants. That distinction turned out to be the whole session.</p>

<p>When she was at the BBC there was a watermark on every video. The institution was the brand. Going independent means the person becomes the brand, which creates both opportunity and enormous pressure. Her instinct is to resist the framing entirely. "I see it as journalism, not branding." The question she asks is not what is my brand but what does my audience want from me that they cannot get anywhere else.</p>

<p>There was an interesting structural observation: news organisations pay talent more specifically to prevent them from leaving with their audiences. The fear that the person has become the draw rather than the publication is increasingly justified.</p>

<p>Brand partnerships are more lucrative than journalism. Freelance journalists are underpaid. Engagement matters more than follower count when it comes to accessing those partnerships. Sophia has named her own creative ecosystem "Sophiana," which I found to be a quietly radical act of self-definition.</p>`,
  },

  {
    id: 'journalism-polarised-world',
    category: 'engagement-trust',
    day: 'saturday',
    time: '14:00–14:50',
    quoteHeadline: '"The Internet Was Supposed to Connect Us All. But It\'s More Like a Building with Many Rooms."',
    subtitle: 'Journalism in the Polarised World: Reaching Audiences Beyond the Bubble',
    hook: 'You cannot just do good journalism and assume it will reach the people who need it. The panel was about polarisation as an editorial problem rather than just a political one — and AI is pushing people into bubbles even more effectively than social media alone.',
    speakers: 'Natalia Antelava (Coda Story), Patricia Campos Mello (Folha de Sao Paulo), Angelina Kariakina (Public Interest Journalism Lab), moderated by Nataliya Gumenyuk (Public Interest Journalism Lab)',
    venue: 'Teatro del Pavone',
    body: `<p>You cannot just do good journalism and assume it will reach the people who need it. That was the starting premise and it was the honest one.</p>

<p>The panel, built on research from the Public Interest Journalism Lab, was about polarisation as an editorial problem rather than just a political one, and about what journalism can practically do about it.</p>

<p>The people most in need of accurate information are often the most effectively walled off from it, by their own preferences, by algorithmic reinforcement, and increasingly by AI systems designed to please the user rather than inform them. "It acts like a human, but it is a machine," Natalia Antelava said. "The design is intentional." AI is pushing people into bubbles even more than social media alone does.</p>

<p>Angelina Kariakina made a counterintuitive point: you cannot simply refuse to platform people with views you disagree with. "They are going to have a place whether you give it to them too or not. You might as well cover them and disprove it while covering them." The work is not about gatekeeping. It is about creating context.</p>

<p>Gumenyuk described not using narrator voice in her documentaries specifically because narrator voice carries an implicit editorial colour. The goal is to cover without signalling where you stand while still building context around what you are showing.</p>

<p>The point that stayed: no matter what political position someone holds, it is always a story about a person with aspirations. People empathise with people who act like them. When the subject is flattened into a symbol for a position, stereotypes fill the space. When it is a person, that is much harder to do.</p>`,
  },

  {
    id: 'citizen-powered-investigations',
    category: 'collaborative-journalism',
    day: 'saturday',
    time: '15:00–15:50',
    quoteHeadline: '"TikTok Can\'t Disprove Something When You Have Actual People Giving Data and Testimonies."',
    subtitle: 'Expanding Public Interest Journalism Through Citizen-Powered Investigations',
    hook: 'The Washington Post investigated TikTok\'s algorithmic design by asking more than 1,100 volunteer users to donate their own data. Some users were spending four, eight, or ten hours a day on the app. The method is partly adversarial in a productive way: real people making visible what an algorithm would prefer to hide.',
    speakers: 'Caitlin Gilbert (Washington Post, via video), Paul Radu (OCCRP), Paul Myles (On Our Radar), moderated by Neus Vidal (Seek Initiative)',
    venue: 'Sala delle Colonne, Palazzo Graziani',
    body: `<p>The Washington Post investigated TikTok's algorithmic design by asking more than 1,100 volunteer users to donate their own TikTok data. Caitlin Gilbert described the process: users downloaded their data through a secure form and donated it. The resulting dataset included user IDs, videos watched, timestamps, scroll duration, and session length. Some users were spending four, eight, or even ten hours a day on the app. The data made visible what the design was doing to people's time across categories including politics and mental health.</p>

<p>The method is partly adversarial in a productive way: when you have real people giving data and testimonies, the platform cannot simply deny what is happening. TikTok can issue a statement. It cannot disprove a dataset built from its own users' actual behaviour.</p>

<p>The broader frame from OCCRP and On Our Radar was about what citizen-powered journalism can do that traditional investigative methods cannot: scale, distributed verification, access to communities and data points that a small newsroom team could never reach on its own. The tradeoffs are real — data quality, consent frameworks, the risk of exposing volunteers — but the methodology is maturing.</p>

<p>The infrastructure question is the same as in every other session about scaling independent journalism: who builds it, who funds it, and who owns it when the investigation is done?</p>`,
  },

];
