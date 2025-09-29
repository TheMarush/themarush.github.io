// artGallery.js

export const artImages = [
    {
        src: "https://i.imgur.com/CkikXDV.jpeg",
        alt: "Artwork 1",
        caption: "Four days of Google Cybersecurity Seminars later and suddenly I was running a 5h long intervention at a Czech branch of a major NGO. Cue shaky hands—yes, even after days of preparation, and a brain that short-circuited more than once. But honestly? Nothing was scarier than the bureaucracy and paperwork it took just to make it happen. Terrifying, exhausting, and absolutely worth it."
    }, 
    {
        src: "https://i.imgur.com/6NEytCJ.jpeg",
        alt: "Artwork 2",
        caption: "Solo trip to Dublin, standing under the glowing Gaia globe in the Long Room at Trinity College. I geeked out over the Book of Kells, wandered Marsh’s Library, and side-eyed the hall of fame full of men—until I spotted the newer statues of Rosalind Franklin, Mary Wollstonecraft, Augusta Gregory, and my forever icon Ada Lovelace. Balance, finally. Who run the world? Girls."
    },
    {
      src: "https://i.imgur.com/HExMZ7Z.jpeg",
      alt: "Artwork 3",
      caption: "My first Amnesty International event: standing up for Nasrin Sotoudeh, an Iranian human rights legend. We were collecting signatures... but turns out, a shocking number of people can’t be bothered to lift a pen for justice. Reality check: apathy is louder than I expected."
    },
    {
        src: "https://i.imgur.com/JRR9kve.jpeg",
        alt: "Artwork 4",
        caption: "Being a feminist means believing in equality, not man-hating—just to clarify for the 478th time. I even wrote 50,000 characters on it for my final paper, so yes, I can back up my sass with citations."
    },
    {
        src: "https://i.imgur.com/QLy4Dnq.jpeg",
        alt: "Artwork 5",
        caption: "Represented the Austrian student parliament abroad and realized politics is the same everywhere. Mostly smoke and mirrors, just with better coffee and younger chaos agents."
    },
    {
        src: "https://i.imgur.com/CtTrdK1.jpeg",
        alt: "Artwork 6",
        caption: "Organized Women’s Day at school, complete with a signature canvas and my favorite t-shirt: Well-behaved women rarely make history."
    },
    {
        src: "https://i.imgur.com/SfsgGll.jpeg",
        alt: "Artwork 7",
        caption: "Snapped this rainbow moment at the Institute of Science and Technology Austria. A proof that science doesn’t just accept LGBTQ+ folks, it celebrates them. Smart, inclusive, and fabulous? Yes please."
    }
    {
      src: "https://i.imgur.com/9VKtGKd.jpeg",
      alt: "Artwork 8",
      caption: "They told us to paint our view of the world, and while I almost went for flowers, the flames just felt more accurate. Nothing says existential dread like a canvas full of fire and low-key despair."
    },
    {
        src: "https://i.imgur.com/ptZTPwT.jpeg",
        alt: "Artwork 9",
        caption: "Took this picture right after graduating at the Czech embassy in Vienna in front of the EU flag, rainbow bag in tow, and a big -I made it- grin. This isn’t just a graduation picture, it’s a whole manifesto in one frame."
    },
    {
      src: "https://i.imgur.com/3eH2i6A.jpeg",
      alt: "Artwork 10",
      caption: "Right before running a 5K at the Vienna Marathon—with half-functioning lungs, no bib number, and the stubbornness of a goat. Turns out, putting the number pickup 30 minutes from the start line was a bold logistical choice. But I ran anyway—sick, unmeasurable, and absolutely unstoppable."
    },
    {
        src: "https://i.imgur.com/Jhtx2zy.jpeg",
        alt: "Artwork 11",
        caption: "Wings for Life World Run: someone dropped out, I jumped in, zero training, got chased by a car (as one does), and somehow ran 9km. Not bad for a spontaneous run for charity."
    },
    {
        src: "https://i.imgur.com/tiGIsSs.jpeg",
        alt: "Artwork 12",
        caption: "My first ever half marathon, starting at sunrise in the fields outside Brno. Alarm set for 2 AM, nerves in full chaos mode… but then I ran it. Turns out, the dread was harder than the distance. Proud is an understatement."
    },
  ];
  
  export function generateArtGallery(images) {
    const container = document.getElementById("myart");
  
    const introText = document.createElement("p");
    introText.textContent = "This is the Art Gallery of meee!";
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
      image.className = "art-item-img";
  
      const caption = document.createElement("p");
      caption.textContent = img.caption;
      caption.className = "art-item-caption";
  
      wrapper.appendChild(image);
      wrapper.appendChild(caption);
      gallery.appendChild(wrapper);
    });
  
    container.appendChild(gallery);
  }
  