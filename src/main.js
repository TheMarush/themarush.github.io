import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

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

// Attach functions to the global window object
window.toggleSemester = toggleSemester;
window.toggleInfo = toggleInfo;



document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
