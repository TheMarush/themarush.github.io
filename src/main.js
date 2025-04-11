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


// testimonials
export const testimonialsData = [
  {
    front: `"Maruška k nám přišla do školy už jako velice sebevědomá studentka a hned se všem představila jako politicky angažovaná osoba, která pracuje pro neziskové organizace (např. AI), zajímá se o celospolečenské dění, historii, politologii a sociologii a chce na naší škole také zastupovat zájmy studentů a studentek Rg. Díky svému řečnickému talentu se jí také podařilo stát se zástupkyní mluvčí školy a tuto funkci vykonávala opravdu s velkým nasazením. Na Marušce si nejvíce vážím toho, že dokáže svůj názor velice přesvědčivým způsobem zdůvodnit a obhájit, stojí si za ním a nenechá se ve svém přesvědčení zviklat mnohdy populistickými názory jiných. Pokud by měla dělat konkurenci Sibyle, Kassandře nebo Libuši, tak si dokážu představit, že Maruška bude za patnáct let řídit Greenpeace nebo Caritas."`,
    back: `"Maruška joined our school as a very confident student and immediately introduced herself as a politically engaged person working for NGOs (like Amnesty International), interested in society, history, political science and sociology, and wishing to represent the student body at our school. Thanks to her rhetorical talent, she became the school's student spokesperson — a role she performed with passion and drive. What I appreciate most about her is how convincingly she argues her views and doesn't let herself be swayed by populist opinions. If she ever competed with Sibyl, Cassandra, or Libuše, I wouldn’t be surprised to see her running Greenpeace or Caritas in fifteen years."`,
    footer: "– Mag. Eva Zojer, RG Komenský",
    color: "pink"
  },
  {
    front: `"Marie muss noch schnell allein die Welt retten – eine schwierige Aufgabe. Ich würde mir wünschen, dass sie ihren Fokus auch auf lösbare Probleme richtet."`,
    back: `"Marie still has to singlehandedly save the world — a difficult task. I would personally wish for her to also focus on problems that are actually solvable."`,
    footer: "– Mag. Harald Lazar",
    color: "blue"
  },
  {
    front: `"Ve spojení s Maruškou Mahdalovou mi naskočí obraz rytíře a sedmi rytířských cností. Cnost je dnes poměrně nepoužívané slovo a znamená umět dobře, šlechetně jednat. Maruščinou cností je určitě: \n1. přejícnost\n2. pokora\n3. mírumilovnost\nMaruška má v sobě cosi rytířského, statečného, schopnost vidět i odvahu to ukázat."`,
    back: `"When I think of Maruška Mahdalová, the image of a knight and the seven knightly virtues comes to mind. 'Virtue' is a rather underused word today, but it means the ability to act well and nobly. Maruška’s virtues are definitely: \n1. generosity\n2. humility\n3. peacefulness\nThere is something knightly and courageous in her — the ability to see, and the bravery to reveal what she sees."`,
    footer: "– Květa Apolin, BEd",
    color: "yellow"
  },
  {
    front: `"Maruska kombiniert ihre tiefe Seele mit einer sehr ausgeprägten sozialen und emotionalen Intelligenz – eine eher seltene Verbindung. Dabei ist sie zugleich rationell denkend und verfügt über starke analytische Fähigkeiten. Das waren wahrscheinlich die Triebfedern für ihr außergewöhnliches Engagement in der Schulorganisation."`,
    back: `"Maruska combines a deep soul with highly developed social and emotional intelligence — a rather rare combination. At the same time, she thinks rationally and has strong analytical skills. These were likely the driving forces behind her exceptional commitment to school organization.\n\nThe many responsibilities she took on didn’t necessarily make her life easier — but she mastered them brilliantly. I’m grateful I had the chance to accompany her as a teacher on this path."`,
    footer: "– Mojmír Stránský, MA",
    color: "purple"
  },
  {
    front: `"Maruško, není třeba mnoho slov, k vaší cestě za zkouškami, maturitou, povinnostmi a tudíž i dospělosti. Snad jen citát od Dale Carnegie: Dělejte to, z čeho máte strach. A dělejte to opakovaně. To je nejrychlejší a nejjistější způsob, jak strach porazit. Mnoho štěstí a odvahy na Tvé cestě."`,
    back: `"Maruška, there’s no need for many words about your path through exams, graduation, responsibilities — and therefore, adulthood. Just this quote from Dale Carnegie: 'Do the thing you fear. And keep on doing it... that is the quickest and surest way to conquer fear.' Wishing you courage and lots of luck on your journey."`,
    footer: "– Mag. Milena Andrejs",
    color: "green"
  },
  {
    front: `"Durch Maruska habe ich wieder einmal erkannt, dass sich hinter introvertiert auftretenden Persönlichkeiten oft sehr charakterstarke und großartige Menschen verbergen. Wenn man sie zu Stellungnahmen herausfordert, bemerkt man ihr komplex vernetztes Denken und ihre tiefgründige Art, über sich selbst und andere zu reflektieren.\n\nSie stellt hohe Anforderungen an sich selbst und arbeitet mit großem Engagement ihren Zielen entgegen. Ihr Wesen ist geprägt durch bemerkenswerte Sensibilität – sie ist sehr einfühlsam und hat stets eine helfende Hand für ihre MitschülerInnen. Wer Maruska zur Freundin hat, kann sich glücklich schätzen, denn „füreinander dasein“ ist für sie die Quintessenz im Leben."`,
    back: `"Through Maruska, I was once again reminded that introverted people often hide strong and wonderful personalities. When prompted to speak, she reveals complex, interconnected thinking and a deep way of reflecting on herself and others.\n\nShe holds herself to high standards and works with great dedication towards her goals. Her personality is marked by remarkable sensitivity — she is empathetic and always has a helping hand for her classmates. Anyone lucky enough to call her a friend knows that ‘being there for one another’ is the essence of life for her."`,
    footer: "– Mag. Marion Mach",
    color: "orange"
  }
];

function generateTestimonials() {
  const container = document.querySelector('#testimonials .testimonials-grid');

  testimonialsData.forEach((item) => {
    const card = document.createElement('div');
    card.className = `flip-card pastel-border border-${item.color}`;

    const inner = document.createElement('div');
    inner.className = 'flip-card-inner';

    const front = document.createElement('div');
    front.className = 'front';
    const frontText = document.createElement('p');
    frontText.innerText = item.front;
    const frontFooter = document.createElement('footer');
    frontFooter.innerHTML = `<em>${item.footer}</em>`;
    front.appendChild(frontText);
    front.appendChild(frontFooter);

    const back = document.createElement('div');
    back.className = 'back';
    const backText = document.createElement('p');
    backText.innerText = item.back;
    const backFooter = document.createElement('footer');
    backFooter.innerHTML = `<em>${item.footer}</em>`;
    back.appendChild(backText);
    back.appendChild(backFooter);

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    container.appendChild(card);

    // Klikací funkce pro otáčení
    card.addEventListener('click', () => {
      card.classList.toggle('flip');
    });
  });
}

generateTestimonials();
