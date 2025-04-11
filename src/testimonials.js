// testimonials.js

export const testimonialsData = [
    {
      front: `"...Maruška k nám přišla do školy..."`,
      back: `"Maruška joined our school..."`,
      footer: "– Mag. Eva Zojer, RG Komenský",
      color: "pink"
    },
    {
      front: `"Marie muss noch schnell allein die Welt retten..."`,
      back: `"Marie still has to singlehandedly save the world..."`,
      footer: "– Mag. Harald Lazar",
      color: "blue"
    },
    {
      front: `"Ve spojení s Maruškou Mahdalovou..."`,
      back: `"When I think of Maruška Mahdalová..."`,
      footer: "– Květa Apolin, BEd",
      color: "yellow"
    },
    {
      front: `"Maruska kombiniert ihre tiefe Seele..."`,
      back: `"Maruska combines a deep soul..."`,
      footer: "– Mojmír Stránský, MA",
      color: "purple"
    },
    {
      front: `"Maruško, není třeba mnoho slov..."`,
      back: `"Maruška, there’s no need for many words..."`,
      footer: "– Mag. Milena Andrejs",
      color: "green"
    },
    {
      front: `"Durch Maruska habe ich wieder..."`,
      back: `"Through Maruska, I was once again reminded..."`,
      footer: "– Mag. Marion Mach",
      color: "orange"
    }
  ];
  
  export function generateTestimonials() {
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
  
      card.addEventListener('click', () => {
        card.classList.toggle('flip');
      });
    });
  }  