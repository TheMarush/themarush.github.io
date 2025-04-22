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

  // ❗ Nečistíme container.innerHTML, protože SVG už je ve stránce
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