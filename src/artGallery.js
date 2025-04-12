// artGallery.js

export const artImages = [
    {
      src: "https://i.imgur.com/3eH2i6A.jpeg",
      alt: "Artwork 1",
      caption: "Right before running a 5K at the Vienna Marathon—with half-functioning lungs, no bib number, and the stubbornness of a goat. Turns out, putting the number pickup 30 minutes from the start line was a bold logistical choice. But I ran anyway—sick, unmeasurable, and absolutely unstoppable."
    },
    {
      src: "https://i.imgur.com/9VKtGKd.jpeg",
      alt: "Artwork 2",
      caption: "They told us to paint our view of the world, and while I almost went for flowers, the flames just felt more accurate. Nothing says "existential dread" like a canvas full of fire and low-key despair."
    },
    {
      src: "https://i.imgur.com/HExMZ7Z.jpeg",
      alt: "Artwork 3",
      caption: "My first Amnesty International event: standing up for Nasrin Sotoudeh, an Iranian human rights legend. We were collecting signatures... but turns out, a shocking number of people can’t be bothered to lift a pen for justice. Reality check: apathy is louder than I expected.
    },
    {
        src: "https://i.imgur.com/JRR9kve.jpeg",
        alt: "Artwork 4",
        caption: "Being a feminist means believing in equality, not man-hating—just to clarify for the 478th time. I even wrote 50,000 characters on it for my final paper, so yes, I can back up my sass with citations."
    },
    {
        src: "https://i.imgur.com/CtTrdK1.jpeg",
        alt: "Artwork 5",
        caption: "Organized Women’s Day at school like a boss, complete with a signature canvas and my favorite t-shirt: "Well-behaved women rarely make history." Honestly, I should’ve brought a megaphone too."
    },
    {
        src: "https://i.imgur.com/ptZTPwT.jpeg",
        alt: "Artwork 6",
        caption: "Snapped this picture right after graduating at the Czech embassy in Vienna—front of the EU flag, rainbow bag in tow, and a big "I made it" grin. This isn’t just a graduation shot, it’s a whole manifesto in one frame."
    },
    {
        src: "https://i.imgur.com/Jhtx2zy.jpeg",
        alt: "Artwork 7",
        caption: "Wings for Life World Run: someone dropped out, I jumped in, zero training, got chased by a car (as one does), and somehow ran 9km. Not bad for a spontaneous sprint for charity and survival."
    },
    {
        src: "https://i.imgur.com/kHW6zBe.jpeg",
        alt: "Artwork 8",
        caption: "My first race ever! I have no recollection of pace, form, or breathing properly. But I do remember finishing and thinking, "Okay, let’s do that again but maybe with training next time.""
    },
    {
        src: "https://i.imgur.com/u9TPGX6.jpeg",
        alt: "Artwork 9",
        caption: "Orienteering run with my family, because regular running? Not our thing. But give us a map, checkpoints, and an excuse to yell "LEFT!" every five seconds, and we suddenly become competitive trail ninjas."
    },
    {
        src: "https://i.imgur.com/0wD7gNp.jpeg",
        alt: "Artwork 10",
        caption: "Me, laughing and sipping Aperol like I haven’t cried over my thesis the night before. Aperol Spritz: turning chaos into class since forever."
    },
    {
        src: "https://i.imgur.com/QLy4Dnq.jpeg",
        alt: "Artwork 11",
        caption: "Represented the Austrian student parliament abroad and realized politics is the same everywhere—mostly smoke and mirrors, just with better coffee and younger chaos agents."
    },
    {
        src: "https://i.imgur.com/SfsgGll.jpeg",
        alt: "Artwork 12",
        caption: "Snapped this rainbow moment at the Institute of Science and Technology Austria—proof that science doesn’t just accept LGBTQ+ folks, it celebrates them. Smart, inclusive, and fabulous? Yes please."
    }
  ];
  
  export function generateArtGallery(images) {
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
  