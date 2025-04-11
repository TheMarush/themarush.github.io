// subjects.js

export const semestersData = [
    {
      id: "semester1",
      name: "1st Semester",
      subjects: [
        { code: "AI001", name: "Elements of AI", description: "Description or reflection goes here." },
        { code: "AI002", name: "Building AI", description: "Description or reflection goes here." },
        { code: "AI003", name: "Ethics of AI", description: "Description or reflection goes here." },
        { code: "CORE100", name: "AI Revolution", description: "Description or reflection goes here." },
        { code: "ESA915", name: "Europe and Revolution", description: "Description or reflection goes here." },
        { code: "ISKB02", name: "Introduction to Librarianship", description: "Description or reflection goes here." },
        { code: "ISKB03", name: "Information Services and Retrieval", description: "Description or reflection goes here." },
        { code: "ISKB04", name: "Academic Text Writing", description: "Description or reflection goes here." },
        { code: "ISKB08", name: "Literature in Cultural Context", description: "Description or reflection goes here." },
        { code: "ISKB60", name: "Prolegomena to Information Studies", description: "Description or reflection goes here." },
        { code: "KPI55", name: "Technology in Education", description: "Description or reflection goes here." }
      ]
    },
    {
      id: "semester2",
      name: "2nd Semester",
      note: "I haven't completed this semester so far.",
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
    },
    // Další semestry můžeš doplnit podle potřeby
  ];
  
  export function generateSemesters() {
    semestersData.forEach(semester => {
      const container = document.getElementById(semester.id);
      if (!container) return;
  
      const heading = document.createElement("h2");
      heading.textContent = semester.name;
      container.appendChild(heading);
  
      if (semester.note) {
        const note = document.createElement("p");
        note.textContent = semester.note;
        container.appendChild(note);
      }
  
      semester.subjects.forEach(subject => {
        const section = document.createElement("section");
        section.id = subject.code.toLowerCase();
  
        const title = document.createElement("h3");
        title.textContent = `${subject.code} ${subject.name}`;
        const description = document.createElement("p");
        description.textContent = subject.description;
  
        section.appendChild(title);
        section.appendChild(description);
        container.appendChild(section);
      });
    });
  }
  