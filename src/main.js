import './style.css';
import { generateTestimonials } from './testimonials.js';
import { generateSemesters } from './subjects.js';

export function toggleSemester(id) {
  const section = document.getElementById(id);
  if (section) {
    const isHidden = section.classList.contains('hidden');
    document.querySelectorAll('.semester-section').forEach(s => s.classList.add('hidden'));
    if (isHidden) {
      section.classList.remove('hidden');
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

export function toggleInfo(id) {
  const section = document.getElementById(id);
  if (section) {
    const isHidden = section.classList.contains('hidden');
    document.querySelectorAll('.info-section').forEach(s => s.classList.add('hidden'));
    if (isHidden) {
      section.classList.remove('hidden');
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Attach functions to global window object
window.toggleSemester = toggleSemester;
window.toggleInfo = toggleInfo;


import { artImages, generateArtGallery } from './artGallery.js';


generateArtGallery(artImages);

generateTestimonials();

generateSemesters();

// === Info buttons ===
document.querySelectorAll('[data-info]').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.getAttribute('data-info');
    toggleInfo(id);
  });
});

// === Semester buttons ===
document.querySelectorAll('[data-semester]').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.getAttribute('data-semester');
    toggleSemester(id);
  });
});
