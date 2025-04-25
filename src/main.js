import './style.css';
import { generateTestimonials } from './testimonials.js';
import { generateSemesters } from './study.js';
import { renderSemester2 } from './study/semester2.js';
import { artImages, generateArtGallery } from './artGallery.js';

export function toggleSemester(id) {
  const section = document.getElementById(id);
  if (section) {
    const isHidden = section.classList.contains('hidden');
    document.querySelectorAll('.semester-section').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.info-section').forEach(s => s.classList.add('hidden'));
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
    // Skryjeme všechny info sekce
    document.querySelectorAll('.info-section').forEach(s => s.classList.add('hidden'));
    // Skryjeme i všechny semestrální sekce (nové!)
    document.querySelectorAll('.semester-section').forEach(s => s.classList.add('hidden'));
    if (isHidden) {
      section.classList.remove('hidden');
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Attach functions to global window object
window.toggleSemester = toggleSemester;
window.toggleInfo = toggleInfo;

generateArtGallery(artImages);

generateTestimonials();

generateSemesters();

renderSemester2();

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


// === HANDLE HASH NAVIGATION ON PAGE LOAD ===
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.slice(1); // Odstraní #
  if (!hash) return;

  // Zkusíme najít sekci s tímto ID
  const section = document.getElementById(hash);
  if (section) {
    if (section.classList.contains('info-section')) {
      toggleInfo(hash);
    } else if (section.classList.contains('semester-section')) {
      toggleSemester(hash);
    }
  }
});

// === HANDLE HASH CHANGE (e.g. user clicks link) ===
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1); // např. 'about'

  const section = document.getElementById(hash);
  if (section) {
    if (section.classList.contains('info-section')) {
      toggleInfo(hash);
    } else if (section.classList.contains('semester-section')) {
      toggleSemester(hash);
    }
  }
});

// === HERO ONLY LANDING LOGIC ===
// === HERO ONLY LANDING LOGIC ===
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero-container');
  const revealButton = document.getElementById('reveal-content');
  const introScreen = document.getElementById('intro-screen'); // 🆕

  // Uzamkneme scroll na začátku
  if (!document.body.classList.contains('revealed')) {
    document.body.classList.add('locked');
  }

  revealButton?.addEventListener('click', () => {
    document.body.classList.remove('locked');
    document.body.classList.add('revealed');
    introScreen?.classList.remove('hidden');
  });
});

// === Dynamické přepínání směru dropdownu ===
document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('mouseenter', () => {
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    if (!dropdownContent) return;

    // Získáme pozici dropdownu vůči oknu
    const rect = dropdown.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;

    // Pokud místa pod dropdownem je málo (např. méně než 200px), přidáme .drop-up
    if (spaceBelow < 200) {
      dropdownContent.classList.add('drop-up');
    } else {
      dropdownContent.classList.remove('drop-up');
    }
  });
});