import { semester1 } from './study/semester1.js';
import { semester2 } from './study/semester2.js';
import { semester3 } from './study/semester3.js';

export const semestersData = [semester1, semester2, semester3];

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
