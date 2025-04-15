// === semester2.js ===

const semester2 = {
  id: "semester2",
  name: "2nd Semester",
  note: "I haven't finished this semester so far.",
  subjects: [
    { code: "ISKB01", name: "Information Science", description: "Description or reflection goes here." },
    { code: "ISKB05", name: "Information Resources and Funds", description: "Description or reflection goes here." },
    { code: "ISKB07", name: "Digital Literacy", description: "Description or reflection goes here." },
    { code: "KPI33", name: "Digital Competence Course", description: "Description or reflection goes here." },
    { code: "ISKB65", name: "Group of Experts", description: "Description or reflection goes here." },
    { code: "ISKM38", name: "Media in the Information Age", description: "Description or reflection goes here." },
    { code: "CORE030", name: "Media and Society in the 21st Century", description: "Description or reflection goes here." },
    { code: "CORE042", name: "Data and the Ultimate Question", description: "Description or reflection goes here." },
    { code: "AUT_TM1", name: "Intro to Scheduling", description: "Description or reflection goes here." },
    { code: "ISKB81", name: "Winter School: Crossing Borders", description: "Description or reflection goes here." },
    { code: "ISKB40", name: "Summer School: Master Course", description: "Description or reflection goes here." }
  ]
};

export function renderSemester2() {
  const container = document.getElementById("semester2");
  if (!container) return;

  container.innerHTML = "";

  const heading = document.createElement("h2");
  heading.textContent = semester2.name;
  container.appendChild(heading);

  if (semester2.note) {
    const note = document.createElement("p");
    note.textContent = semester2.note;
    container.appendChild(note);
  }

  const svgWrapper = document.createElement("div");
  svgWrapper.classList.add("fullwidth-svg-container");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 1200 1200");
  svg.setAttribute("preserveAspectRatio", "xMidYMin meet");
  svg.classList.add("rainbow-path");

  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  defs.innerHTML = `
    <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="red"/>
      <stop offset="20%" stop-color="orange"/>
      <stop offset="40%" stop-color="yellow"/>
      <stop offset="60%" stop-color="green"/>
      <stop offset="80%" stop-color="blue"/>
      <stop offset="100%" stop-color="purple"/>
    </linearGradient>
  `;
  svg.appendChild(defs);

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", `
    M 100 100
    C 400 0, 800 0, 1100 100
    S 800 300, 100 300
    S 400 500, 1100 500
    S 800 700, 100 700
    S 400 900, 1100 900
    S 800 1100, 100 1100
  `);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "url(#rainbowGradient)");
  path.setAttribute("stroke-width", "6");
  svg.appendChild(path);

  svgWrapper.appendChild(svg);
  container.appendChild(svgWrapper);
}

export { semester2 };
