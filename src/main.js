import './style.css'

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

export function toggleOverlay() {
    const overlay = document.getElementById('overlay');
    const background = document.getElementById('bg-image');
    if (overlay) {
      if (overlay.classList.contains('expanded')) {
        overlay.classList.remove('expanded');
      } else {
        overlay.classList.add('expanded');
      }
    }

  if (background) {
    if (background.classList.contains('blur')) {
      background.classList.remove('blur');
    } else {
      background.classList.add('blur');
    }
  }
}

// Attach functions to the global window object
window.toggleSemester = toggleSemester;
window.toggleInfo = toggleInfo;
window.toggleOverlay = toggleOverlay;
