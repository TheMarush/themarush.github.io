const semester2 = {
  id: "semester2",
  name: "2nd Semester",
  note: "In my second semester, theory met practice. I moved from foundations of information science to real-world media analysis, data-informed thinking, and hands-on digital competences. Along the way I built the base of this website, mapped Czech disinformation ecosystems, and co-created community learning spaces from Bratislava’s Winter School to a cybersecurity intervention. The semester tied my interests together into a clearer, more confident professional direction.",
  subjects: [
    {
      code: "ISKB01",
      name: "Information Science",
      description: "This course served as an introduction to the theoretical foundations of information science, covering its history, key terminology, and core concepts such as data, information, knowledge, and information retrieval. Through lectures, readings, and discussions, I explored the discipline’s complexity, from unified theories of information to the role of professionals in today’s information society. The class also emphasized practical engagement, including creating wiki entries, working with definitions in TDKIV, and researching career opportunities in the field. Although it was one of the most challenging subjects I have taken in terms of processing and absorbing knowledge, it left me with valuable insights that I continue to draw on, shaping my understanding of both the academic and practical dimensions of information science."
    },
    {
      code: "ISKB05",
      name: "Information Resources and Funds",
      description: "The module introduced a wide variety of document types and their specific characteristics, from books and periodicals to audiovisual materials, electronic resources, and data as an information source. I learned how to identify and organize these resources effectively, as well as how to approach their acquisition and long-term preservation. What proved most valuable were practical strategies for locating older publications, artworks, or materials no longer available online. Collecting these methods and tools has been extremely useful for my research work and remains part of my toolkit today."
    },
    {
      code: "ISKB07",
      name: "Digital Literacy",
      description: "Focused on the European Digital Competence Framework (DigComp 2.1), this subject connected theory with hands-on skill-building. I learned to create infographics, visualize data, design educational modules in Moodle, and critically reflect on the role of digital competences in education and information work. The most valuable part was the practical orientation: I built the foundations of this website, practiced content creation, and explored a range of digital tools that I continue to use. Overall, the experience was highly practical and rewarding, giving me confidence to apply digital skills across academic and professional contexts."
    },
    {
      code: "KPI33",
      name: "Digital Competence Course",
      description: "Delivered fully online, this training complemented DigComp with self-paced tasks and peer feedback. I worked through thematic assignments covering information and data literacy, collaboration, content creation, security, and problem-solving, which helped me structure my digital practices more deliberately. Particular highlights for me were introductory programming and experimenting with diverse tools for productivity, content workflows, and safer communication. The course strengthened my autonomy in learning and broadened my everyday digital toolkit."
    },
    {
      code: "ISKB65",
      name: "Group of Experts",
      description: "An exclusive lecture series that brought in practitioners and scholars from across information studies and related fields. Each week offered a distinct perspective—spanning librarianship, information science, design of services, data management, and culture—followed by space for questions and reflection. Engaging with current trends and concrete case studies helped me connect theory with practice and refine my own interests within the field."
    },
    {
      code: "ISKM38",
      name: "Media in the Information Age",
      description: "Centred on contemporary public affairs and media dynamics, the class combined critical reading with guided discussion of current events and their historical context. We examined agenda-setting, propaganda, ownership and financing, platform effects, and AI-driven transformations of content and distribution. For the final project, I created an investigative media map of influential disinformation outlets in the Czech Republic, tracing ownership structures and histories via domain and registry sources and estimating reach across social platforms. The project received special recognition for investigative rigor."
    },
    {
      code: "CORE030",
      name: "Media and Society in the 21st Century",
      description: "Led by Jakub Macek and Lenka Waschková Císařová, this university-wide course introduced key concepts from media theory and research while situating them in today’s transforming media landscape. We discussed trust and credibility, public opinion, power and ownership, and the shifting roles of audiences and platforms. The class clarified why media literacy matters, how data-driven journalism operates, and what practical steps individuals and institutions can take to navigate an increasingly complex information environment."
    },
    {
      code: "CORE042",
      name: "Data and the Ultimate Question",
      description: "A cross-disciplinary exploration of research data—its lifecycle, FAIR principles, methods, and uses across domains from NLP to public policy and microbiology. The lectures highlighted both the promise and pitfalls of data-driven inquiry, from reproducibility and ethics to commercialization and open data in public administration. As someone fascinated by data, I appreciated the breadth of perspectives and came away with clearer standards for trustworthy analysis and collaboration across disciplines."
    },
    {
      code: "AUT_TM1",
      name: "Intro to Scheduling",
      description: "A practical seminar on planning, prioritization, habits, motivation, productivity, and (digital) hygiene tailored for students with specific needs. Working alongside peers with similar challenges helped me test concrete strategies, compare tools, and build routines that actually fit my life. The experience boosted my confidence that—with the right structures—I can organize anything I set my mind to."
    },
    {
      code: "ISKB81",
      name: "Winter School: Crossing Borders",
      description: "A peer-to-peer learning intensive hosted in Bratislava focused on shared knowledge, creativity, and community building. Each participant prepared a session; mine covered feminism and fake news. Beyond the content itself, facilitating activities and co-creating the program strengthened my skills in communication, workshop design, and collaborative organization."
    },
    {
      code: "ISKB40",
      name: "Summer School: Master Course",
      description: "A four-day cybersecurity intensive delivered by experts from national bodies and industry. After foundational training, we designed and delivered a local community intervention: I led a five-hour workshop for the Czech branch of a well-known NGO on safe online practices—both for individuals and at the organizational level. It was the most demanding subject logistically and administratively (documentation was meticulous as part of Google Security Seminars), but also one of the most impactful."
    }
  ]
};

export function renderSemester2() {
  const container = document.getElementById("semester2");
  if (!container) return;

  const heading = document.createElement("h2");
  heading.textContent = semester2.name;
  container.insertBefore(heading, container.firstChild);

  if (semester2.note) {
    const note = document.createElement("p");
    note.textContent = semester2.note;
    container.insertBefore(note, heading.nextSibling);
  }

  const introParagraph = document.createElement("p");
  introParagraph.textContent = "This is a placeholder for the introductory text.";
  container.insertBefore(introParagraph, container.children[2] || null);
}

export { semester2 };