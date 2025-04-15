// === study/semester2.js ===

export const semester2 = {
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

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "300");
  svg.setAttribute("viewBox", "0 0 1000 300");
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
  path.setAttribute(
    "d",
    "M0,150 C100,50 200,250 300,150 S500,50 600,150 S800,250 900,150"
  );
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "url(#rainbowGradient)");
  path.setAttribute("stroke-width", "4");
  path.setAttribute("id", "rainbowPath");
  svg.appendChild(path);

  // === Add stars along the path ===
  const pathLength = path.getTotalLength();
  const subjects = semester2.subjects;

  subjects.forEach((subject, i) => {
    const point = path.getPointAtLength((i / (subjects.length - 1)) * pathLength);

    const star = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    star.setAttribute("cx", point.x);
    star.setAttribute("cy", point.y);
    star.setAttribute("r", "8");
    star.setAttribute("fill", "white");
    star.classList.add("semester-star");
    star.setAttribute("data-index", i);

    svg.appendChild(star);
  });

  container.appendChild(svg);
}
