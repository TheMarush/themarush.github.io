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

// === ART GALLERY ===
const artImages = [
  {
    src: "https://i.imgur.com/3eH2i6A.jpeg",
    alt: "Artwork 1",
    caption: "This is a filler caption for artwork 1"
  },
  {
    src: "https://i.imgur.com/9VKtGKd.jpeg",
    alt: "Artwork 2",
    caption: "This is a filler caption for artwork 2"
  },
  {
    src: "https://i.imgur.com/HExMZ7Z.jpeg",
    alt: "Artwork 3",
    caption: "This is a filler caption for artwork 3"
  }
];

function generateArtGallery(images) {
  const container = document.getElementById("myart");

  const introText = document.createElement("p");
  introText.textContent = "Welcome to my little art corner 🎨";
  introText.style.textAlign = "center";
  introText.style.fontStyle = "italic";
  container.appendChild(introText);

  const gallery = document.createElement("div");
  gallery.className = "gallery";

  images.forEach(img => {
    const wrapper = document.createElement("div");
    wrapper.className = "art-item";

    const image = document.createElement("img");
    image.src = img.src;
    image.alt = img.alt;

    const caption = document.createElement("p");
    caption.textContent = img.caption;

    wrapper.appendChild(image);
    wrapper.appendChild(caption);
    gallery.appendChild(wrapper);
  });

  container.appendChild(gallery);
}

generateArtGallery(artImages);

generateTestimonials();

generateSemesters();
