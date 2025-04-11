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

// Attach functions to the global window object
window.toggleSemester = toggleSemester;
window.toggleInfo = toggleInfo;

const artImages = [
  {
    src: "https://i.imgur.com/TVExGvG.jpg",
    alt: "Artwork 1",
    caption: "This is a filler caption for artwork 1"
  },
  {
    src: "https://i.imgur.com/Yy0xWQJ.jpg",
    alt: "Artwork 2",
    caption: "This is a filler caption for artwork 2"
  },
  {
    src: "https://i.imgur.com/kLsd3wf.jpg",
    alt: "Artwork 3",
    caption: "This is a filler caption for artwork 3"
  }
];

function generateArtGallery(images) {
  const container = document.getElementById("myart");

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

