const semester2 = {
  id: "semester2",
  name: "2nd Semester",
  note: "I haven't finished this semester so far.",
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
    { code: "ISKB40", name: "Summer School: Master Course", description: "Description or reflection goes here." },
  ],
};

export function renderSemester2() {
  const container = document.getElementById("semester2");
  if (!container) return;

  container.innerHTML = "";

  const heading = document.createElement("h2");
  heading.textContent = semester2.name;
  container.appendChild(heading);

  const introText = document.createElement("p");
  introText.textContent = "Placeholder for semester intro text.";
  container.appendChild(introText);

  if (semester2.note) {
    const note = document.createElement("p");
    note.textContent = semester2.note;
    container.appendChild(note);
  }

  const svgWrapper = document.createElement("div");
  svgWrapper.classList.add("fullwidth-svg-container");
  svgWrapper.style.position = "relative";
  svgWrapper.style.width = "100%";
  svgWrapper.style.marginTop = "30px";
  svgWrapper.style.marginBottom = "30px";
  svgWrapper.style.overflowX = "auto";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 6000 1000");
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.classList.add("rainbow-path");
  svg.style.width = "100%";
  svg.style.height = "auto";

  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  defs.innerHTML = `
    <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ff5e5e"/>
      <stop offset="20%" stop-color="#ffb05e"/>
      <stop offset="40%" stop-color="#ffff5e"/>
      <stop offset="60%" stop-color="#5eff7f"/>
      <stop offset="80%" stop-color="#5e9eff"/>
      <stop offset="100%" stop-color="#c15eff"/>
    </linearGradient>
    <symbol id="star" viewBox="0 0 24 24">
      <path d="M12,1.5l2.61,6.727l6.89,0.53l-5.278,4.688l1.5,7.055l-5.722,-3.757l-5.722,3.757l1.5,-7.055l-5.278,-4.688l6.89,-0.53l2.61,-6.727z" />
    </symbol>
  `;
  svg.appendChild(defs);

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", `M 100 150 C 400 300, 700 0, 1000 150 S 1300 300, 1600 150 S 1900 0, 2200 150 S 2500 300, 2800 150 S 3100 0, 3400 150 S 3700 300, 4000 150 S 4300 0, 4600 150 S 4900 300, 5200 150 S 5500 0, 5800 150 S 6100 300, 6400 150`);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "url(#rainbowGradient)");
  path.setAttribute("stroke-width", "14");
  path.setAttribute("id", "sinePath");
  path.style.strokeDasharray = path.getTotalLength();
  path.style.strokeDashoffset = path.getTotalLength();
  path.style.animation = "draw 2s ease forwards";
  svg.appendChild(path);

  svgWrapper.appendChild(svg);
  container.appendChild(svgWrapper);

  const popupContainer = document.createElement("div");
  popupContainer.classList.add("subject-popup-container");
  popupContainer.style.display = "none";
  popupContainer.style.position = "absolute";
  popupContainer.style.backgroundColor = "#f5f5f5";
  popupContainer.style.color = "#000";
  popupContainer.style.padding = "15px";
  popupContainer.style.borderRadius = "20px";
  popupContainer.style.maxWidth = "300px";
  popupContainer.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
  popupContainer.style.zIndex = "100";
  popupContainer.style.transition = "opacity 0.3s ease";
  popupContainer.style.opacity = "0";

  const popupStyle = document.createElement("style");
  popupStyle.textContent = `
    .subject-popup-container::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #f5f5f5;
      bottom: -10px;
      left: 20px;
      transform: rotate(45deg);
      z-index: -1;
    }
    @keyframes draw {
      to {
        stroke-dashoffset: 0;
      }
    }
  `;
  document.head.appendChild(popupStyle);
  svgWrapper.appendChild(popupContainer);

  function getPointOnPath(path, offset) {
    const pathLength = path.getTotalLength();
    const point = path.getPointAtLength(offset * pathLength);
    return { x: point.x, y: point.y };
  }

  const pathElement = svg.querySelector("#sinePath");
  const pathLength = pathElement.getTotalLength();

  semester2.subjects.forEach((subject, index) => {
    const offset = index / (semester2.subjects.length - 1);
    const point = getPointOnPath(pathElement, offset);

    const star = document.createElementNS("http://www.w3.org/2000/svg", "use");
    star.setAttribute("href", "#star");
    star.setAttribute("x", point.x - 16);
    star.setAttribute("y", point.y - 16);
    star.setAttribute("width", "32");
    star.setAttribute("height", "32");
    star.setAttribute("fill", "#fff");
    star.setAttribute("data-subject-index", index);
    star.classList.add("subject-star");
    star.style.cursor = "pointer";

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", point.x + (index % 2 === 0 ? 40 : -160));
    text.setAttribute("y", point.y + 6);
    text.setAttribute("fill", "#fff");
    text.setAttribute("font-size", "28");
    text.setAttribute("data-subject-index", index);
    text.textContent = subject.name;
    text.style.cursor = "pointer";

    const handleClick = () => {
      popupContainer.innerHTML = `<h3>${subject.code}: ${subject.name}</h3><p>${subject.description}</p>`;
      popupContainer.style.left = `${point.x - 150}px`;
      popupContainer.style.top = `${point.y - 120}px`;
      popupContainer.style.display = "block";
      setTimeout(() => popupContainer.style.opacity = "1", 10);
    };

    star.addEventListener("click", handleClick);
    text.addEventListener("click", handleClick);

    svg.appendChild(star);
    svg.appendChild(text);
  });

  document.addEventListener("click", () => {
    popupContainer.style.opacity = "0";
    setTimeout(() => {
      popupContainer.style.display = "none";
    }, 300);
  });
}

export { semester2 };
