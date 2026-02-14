import type { Semester } from "../types/study.js";

export const semester1: Semester = {
  id: "semester1",
  name: "1st Semester",
  note: "I started the semester not really knowing what I signed up for. AI, ethics, librarianship. It all sounded a bit abstract and a lot overwhelming. I was confused, undercaffeinated, and pretty sure I'd made a terrible mistake. But as the weeks went on, things started to connect. I built a chatbot, questioned capitalism, made peace with academic writing, and even developed a strange respect for library systems. Turns out, this place might just be for me after all.",
  subjects: [
    {
      code: "AI001",
      name: "Elements of AI",
      description:
        "This course, developed by the University of Helsinki, introduced me to the fundamentals of artificial intelligence, including its definitions, core concepts (like autonomy and adaptability), and real-world applications such as self-driving cars, recommendation systems, and image recognition. I gained a deeper understanding of how AI systems operate, how they differ from human intelligence, and why common terms like learning or understanding can be misleading in this context. The course also encouraged critical reflection on the societal impact of AI and helped me build a clear conceptual foundation for future work in the field.",
    },
    {
      code: "AI002",
      name: "Building AI",
      description:
        "In the Building AI course, I deepened my understanding of algorithms and methods behind real-world applications of artificial intelligence. I learned how to use optimization techniques, apply probability-based reasoning such as Bayes' theorem in classification, and explored key machine learning methods including linear regression, nearest neighbor, and neural networks. I also gained insights into natural language processing, overfitting issues, and the importance of model generalization. Through practical exercises, I developed the ability to design realistic AI solutions and to effectively communicate both their value and limitations.",
    },
    {
      code: "AI003",
      name: "Ethics of AI",
      description:
        "This course by the University of Helsinki introduced me to the ethical challenges surrounding artificial intelligence, expanding on the foundations laid in Elements of AI and Building AI. I explored philosophical frameworks like utilitarianism and deontology, and how they apply to AI development, especially in relation to transparency, accountability, fairness, and human rights. Through real-life case studies, I critically examined the risks of bias, discrimination, surveillance, and automation, and reflected on the role of regulation and interdisciplinary collaboration. The course helped me see AI not only as a technical innovation, but as a societal force that requires thoughtful and responsible design.",
    },
    {
      code: "CORE100",
      name: "AI Revolution",
      description:
        "This interdisciplinary course explored the transformative impact of artificial intelligence on society, focusing on both its opportunities and risks. Rather than technical details, the course emphasized real-world implications, encouraging students to critically engage with AI tools such as ChatGPT, generative models, and copilots. We examined how AI affects work, education, and everyday life, and reflected on its ethical and legal dimensions. As part of a hands-on workshop, my group developed a chatbot designed to assist older adults in using digital technologies through step-by-step instructions and illustrative screenshots. This practical experience highlighted the importance of designing accessible, responsible AI solutions that genuinely serve diverse users. The course deepened my understanding of AI's societal role and strengthened my ability to use it critically, creatively, and ethically.",
    },
    {
      code: "ESA915",
      name: "Europe and Revolution",
      description:
        "This course took me on a journey through Europe's cultural and political turning points, from the Renaissance to AI, using films as a mirror for each historical moment. Instead of dry timelines, we explored revolutions as deep societal breaks in art, religion, politics, and thought. Each lecture challenged me to think more critically about the structures that shape our world, why capitalism grew the way it did, how power expresses itself through culture, and what happens when art resists. Whether it was Protestant iconoclasm or postmodern irony, the course encouraged me to see history not as a straight line but as a series of questions, and art as a way of answering them.",
    },
    {
      code: "ISKB02",
      name: "Introduction to Librarianship",
      description:
        "Although I didn't start this course with much enthusiasm, as librarianship has never been my main passion, it surprised me in the best way. I learned that libraries are not just buildings filled with books but dynamic systems that connect people, preserve culture, and support communities, especially in smaller towns. The course covered essential terminology, legal frameworks, and the evolution of Czech librarianship since 1918. What struck me most was how interconnected library work is, both locally and globally. It helped me understand that librarianship is a fundamental part of how societies access knowledge, maintain democracy, and foster inclusivity.",
    },
    {
      code: "ISKB03",
      name: "Information Services and Retrieval",
      description:
        "This course helped me realize that I actually do belong at KISK, even though I had serious doubts at the beginning of my studies. Exploring how people search for and use information, and learning about various models and tools for information retrieval, gave me a clearer sense of purpose and direction. I discovered the strategic thinking behind service design and the value of innovation in information services, including commercial ones. The course encouraged a proactive mindset and taught me how to critically assess service models, understand user needs, and approach innovation with a focus on sustainability and inclusivity. It was a turning point in how I approached both my studies and my role as a future information professional.",
    },
    {
      code: "ISKB04",
      name: "Academic Text Writing",
      description:
        "This course helped me refine my academic writing skills and understand what truly matters in scholarly communication. While I already had some experience with research writing from high school, this course clarified what the real purpose of an academic text should be – not just to sound formal, but to clearly convey ideas, arguments, and evidence. I learned how to structure texts effectively, choose reliable sources, evaluate their credibility, and cite them properly. What I appreciated most was how these insights improved not only my writing, but also the way I approach reading academic texts. It gave me tools to read more critically and write more meaningfully.",
    },
    {
      code: "ISKB08",
      name: "Literature in Cultural Context",
      description:
        "At first, I was honestly intimidated by this course, since literary analysis has never been my strongest suit. However, over time I found myself discovering unexpected interests in things I had previously overlooked, like the evolution of encyclopedias, the diversity of literary genres, and the cultural frameworks behind them. The course traced literature across historical periods and showed how it reflects, shapes, and is shaped by broader cultural developments. I gained a better understanding of literature not just as art, but as a lens through which we can explore how knowledge, values, and identities are formed across time.",
    },
    {
      code: "ISKB60",
      name: "Prolegomena to Information Studies",
      description:
        'This was perhaps the most important course of the semester, as it shifted my perception of what studying at KISK actually means. I realized that it\'s not just about librarianship, but about working with information in a much broader and more meaningful sense. Through various experiential and reflective activities, I was introduced to concepts like "digital gardening", which helped me organize my sources and tools in ways that benefit not only my studies but also my personal and professional life. Thanks to this course, my formerly chaotic system of note-taking and knowledge tracking evolved into something more structured and sustainable. It gave me a sense of belonging, direction, and a much better grip on how to grow. Both academically and as a person.',
    },
    {
      code: "KPI55",
      name: "Technology in Education",
      description:
        "This course taught me how to meaningfully integrate digital tools into teaching by shifting the focus from delivering content to facilitating learning. I explored frameworks like ADDIE and design thinking, worked with tools such as Loom and Marvel App, and designed learner-centered activities that promote engagement, autonomy, and reflection. The course also deepened my understanding of accessibility, inclusion, and the pedagogical potential and limits of educational technology.",
    },
  ],
};

export const semester2: Semester = {
  id: "semester2",
  name: "2nd Semester",
  note: "In my second semester, theory met practice. I moved from foundations of information science to real-world media analysis, data-informed thinking, and hands-on digital competences. Along the way I built the base of this website, mapped Czech disinformation ecosystems, and co-created community learning spaces in Bratislava to a cybersecurity intervention in an NGO. The semester tied my interests together into a clearer, more confident professional direction.",
  subjects: [
    {
      code: "ISKB01",
      name: "Information Science",
      description:
        "This course served as an introduction to the theoretical foundations of information science, covering its history, key terminology, and core concepts such as data, information, knowledge, and information retrieval. Through lectures, readings, and discussions, I explored the discipline's complexity, from unified theories of information to the role of professionals in today's information society. The class also emphasized practical engagement, including creating wiki entries, working with definitions in TDKIV, and researching career opportunities in the field. Although it was one of the most challenging subjects I have taken in terms of processing and absorbing knowledge, it left me with valuable insights that I continue to draw on, shaping my understanding of both the academic and practical dimensions of information science.",
    },
    {
      code: "ISKB05",
      name: "Information Resources and Funds",
      description:
        "The module introduced a wide variety of document types and their specific characteristics, from books and periodicals to audiovisual materials, electronic resources, and data as an information source. I learned how to identify and organize these resources effectively, as well as how to approach their acquisition and long-term preservation. What proved most valuable were practical strategies for locating older publications, artworks, or materials no longer available online. Collecting these methods and tools has been extremely useful for my research work and remains part of my toolkit today.",
    },
    {
      code: "ISKB07",
      name: "Digital Literacy",
      description:
        "Focused on the European Digital Competence Framework (DigComp 2.1), this subject connected theory with hands-on skill-building. I learned to create infographics, visualize data, design educational modules in Moodle, and critically reflect on the role of digital competences in education and information work. The most valuable part was the practical orientation: I built the foundations of this website, practiced content creation, and explored a range of digital tools that I continue to use. Overall, the experience was highly practical and rewarding, giving me confidence to apply digital skills across academic and professional contexts.",
    },
    {
      code: "KPI33",
      name: "Digital Competence Course",
      description:
        "Delivered fully online, this training complemented DigComp with self-paced tasks and peer feedback. I worked through thematic assignments covering information and data literacy, collaboration, content creation, security, and problem-solving, which helped me structure my digital practices more deliberately. Particular highlights for me were introductory programming and experimenting with diverse tools for productivity, content workflows, and safer communication. The course strengthened my autonomy in learning and broadened my everyday digital toolkit.",
    },
    {
      code: "ISKB65",
      name: "Group of Experts",
      description:
        "An exclusive lecture series that brought in practitioners and scholars from across information studies and related fields. Each week offered a distinct perspective: spanning librarianship, information science, design of services, data management, and culture, followed by space for questions and reflection. Engaging with current trends and concrete case studies helped me connect theory with practice and refine my own interests within the field.",
    },
    {
      code: "ISKM38",
      name: "Media in the Information Age",
      description:
        "Centred on contemporary public affairs and media dynamics, the class combined critical reading with guided discussion of current events and their historical context. Together with a journalist, Bedřich Musil, we examined agenda-setting, propaganda, ownership and financing, platform effects, and AI-driven transformations of content and distribution. For the final project, I created an investigative media map of influential disinformation outlets in the Czech Republic, tracing ownership structures and histories via domain and registry sources and estimating reach across social platforms. The project received special recognition for investigative rigor.",
    },
    {
      code: "CORE030",
      name: "Media and Society in the 21st Century",
      description:
        "Led by journalist Jakub Macek and Lenka Waschková Císařová, this university-wide course introduced key concepts from media theory and research while situating them in today's transforming media landscape. We discussed trust and credibility, public opinion, power and ownership, and the shifting roles of audiences and platforms. The class clarified why media literacy matters, how data-driven journalism operates, and what practical steps individuals and institutions can take to navigate an increasingly complex information environment.",
    },
    {
      code: "CORE042",
      name: "Data – the Answer to the Ultimate Question of Life, the Universe, and Everything...",
      description:
        "A cross-disciplinary exploration of research data, its lifecycle, FAIR principles, methods, and uses across domains from NLP to public policy and microbiology. The lectures highlighted both the promise and pitfalls of data-driven inquiry, from reproducibility and ethics to commercialization and open data in public administration. As someone fascinated by data, I appreciated the breadth of perspectives and came away with clearer standards for trustworthy analysis and collaboration across disciplines.",
    },
    {
      code: "AUT_TM1",
      name: "Introduction to scheduling and time management for students with special needs",
      description:
        "A practical seminar on planning, prioritization, habits, motivation, productivity, and (digital) hygiene tailored for students with specific needs. Working alongside peers with similar challenges helped me test concrete strategies, compare tools, and build routines that actually fit my life. The experience boosted my confidence that (with the right structures) I can organize anything I set my mind to.",
    },
    {
      code: "ISKB81",
      name: "Winter School: Crossing Borders",
      description:
        "A peer-to-peer learning intensive hosted in Bratislava focused on shared knowledge, creativity, and community building. Each participant prepared a session; mine covered feminism and fake news. Beyond the content itself, facilitating activities and co-creating the program strengthened my skills in communication, workshop design, and collaborative organization.",
    },
    {
      code: "ISKB40",
      name: "Summer School: Master Course",
      description:
        "A four-day cybersecurity intensive delivered by experts from national bodies and industry. After foundational training, we designed and delivered a local community intervention: I led a five-hour workshop for the Czech branch of a well-known NGO on safe online practices. Both for individuals and at the organizational level. It was the most demanding subject logistically and administratively (documentation was meticulous as part of Google Security Seminars), but also one of the most impactful.",
    },
  ],
};

export const semester3: Semester = {
  id: "semester3",
  name: "3rd Semester",
  note: "I'm still working on this one. :)",
  subjects: [
    {
      code: "ISKB06",
      name: "Methodology of Information Studies and Librarianship",
      description: "...",
    },
    {
      code: "ISKB09",
      name: "Internet Tools",
      description: "...",
    },
    {
      code: "ISKB11",
      name: "Survey of Czech Literature. Major Literary Works and Interpretations",
      description: "...",
    },
    {
      code: "ISKB13",
      name: "Legal Basis for Information Services",
      description: "...",
    },
    {
      code: "ISKB36",
      name: "Creative Laboratory",
      description: "...",
    },
    {
      code: "TIM_BM_017",
      name: "Digital Curator",
      description: "...",
    },
    {
      code: "p9911",
      name: "Physical Education – Outdoor Cycling",
      description: "...",
    },
  ],
};
