import './style.css';
import { generateTestimonials } from './testimonials.js';
import { generateSemesters } from './study.js';
import { artImages, generateArtGallery } from './artGallery.js';
import { initAbout } from './about.js';

export var currentSection = document.getElementById("intro");
export var currentSemester = document.getElementById("semester1");

export function toggleSection(id) {
  const section = document.getElementById(id);
  const intro = document.getElementById('intro'); // jen ta část s mývalem

  if (section) {
    // hide the raccoon, not the whole intro-screen
    if (intro && !intro.classList.contains('hidden')) {
      intro.classList.add('hidden');
    }

    const isHidden = section.classList.contains('hidden');
    currentSection.classList.add('hidden');
    if (isHidden) {
      section.classList.remove('hidden');
      section.scrollIntoView({ behavior: 'smooth' });
    }
    currentSection = section;
  }
}


export function toggleSemester(id) {
  const semester = document.getElementById(id);
  if (semester) {
    const isHidden = semester.classList.contains('hidden');
    currentSemester.classList.add('hidden');
    if (isHidden) {
      semester.classList.remove('hidden');
      semester.scrollIntoView({ behavior: 'smooth' });
    }
    currentSemester = semester;
  }
}

// Attach functions to global window object
window.toggleSemester = toggleSemester;
window.toggleSection = toggleSection;

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

// === HANDLE HASH CHANGE (e.g. user clicks link) ===
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1);
  const introScreen = document.getElementById('intro-screen');
  const intro = document.getElementById('intro');

  if (introScreen?.classList.contains('hidden')) {
    introScreen.classList.remove('hidden');
    document.body.classList.add('revealed');
    document.body.classList.remove('locked');
  }

  if (intro && !intro.classList.contains('hidden')) {
    intro.classList.add('hidden');
  }

  toggleSection(hash);
});


window.addEventListener('DOMContentLoaded', () => {
  // Hero unlock
  const hero = document.getElementById('hero-container');
  const revealButton = document.getElementById('reveal-content');
  const introScreen = document.getElementById('intro-screen');

  if (!document.body.classList.contains('revealed')) {
    document.body.classList.add('locked');
  }

  revealButton?.addEventListener('click', () => {
    document.body.classList.remove('locked');
    document.body.classList.add('revealed');
    introScreen?.classList.remove('hidden');
  });

  // Hash navigation
  const hash = window.location.hash.slice(1);
  if (hash) {
    toggleSection(hash);
  }
  initAbout();
});

document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('mouseenter', () => {
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    if (!dropdownContent) return;

    const rect = dropdown.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;

    if (spaceBelow < 200) {
      dropdownContent.classList.add('drop-up');
    } else {
      dropdownContent.classList.remove('drop-up');
    }
  });
});