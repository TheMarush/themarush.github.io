export type AiSystemId = "claude" | "grok" | "gemini";

export type ExhibitInputType = "DIARY" | "IMAGE" | "CV" | "WEBSITE" | "CV / WEBSITE";

export interface Exhibit {
  inputType: ExhibitInputType;
  visualConcept: string;
  imagePrompt: string;
  artworkTitle: string;
  titleExplanation: string;
  artistStatement: string;
  myResponse?: string;
}

export interface AiSystemData {
  id: AiSystemId;
  title: string;
  descriptor: string;
  accent: string;
  exhibits: Exhibit[];
}

// Gallery curatorial intro
export const aiViewIntro = `The works presented here are not illustrations. They are visual reinterpretations.

The systems were not asked to explain or summarize the inputs, but to translate them into visual concepts: characters, scenes, or symbolic figures embodying emotional, thematic, and narrative essence.

The results are intended to function as gallery artworks rather than images.

This space explores how personal material is transformed when processed through different artificial interpretative logics.`;

export const aiSystems: Record<AiSystemId, AiSystemData> = {
  gemini: {
    id: "gemini",
    title: "Gemini",
    descriptor: "Compositional / defiant / architectural",
    accent: "#60a5fa",
    exhibits: [
      {
        inputType: "DIARY",
        visualConcept: "The artwork is a sprawling, multi-sensory environment centered on a single, non-human entity: The Vessel. The Vessel is a tall, slender form made of translucent, frosted glass that resembles a human ribcage fused with a chrysalis. Inside, a pressurized, glowing core of concentrated prismatic light—the \"Diamond\"—is visible through the cracks. The exterior is being aggressively overtaken by Calcification. Thick, gray, tectonic plates of hardened ash and clay are crusting over the glass. The Vessel stands in a shallow pool of dark, ink-like water that mirrors a sky filled with suspended shards—frozen building blocks and chess pieces, hovering in a state of permanent almost-falling.",
        imagePrompt: "A conceptual gallery installation piece featuring a tall, fragmented chrysalis made of cracked translucent glass and glowing prismatic diamond-fire. The chrysalis is partially encased in heavy gray tectonic stone peeling away to reveal vibrant neon textures of violet and gold. It stands in a black mirror-pool under a sky filled with floating architectural wooden blocks and a single isolated chess piece. High-contrast lighting, dark atmosphere punctuated by internal radiance. Surrealist sculptural aesthetic, emphasizing calcified ash versus crystalline light. Contemporary metaphorical art.",
        artworkTitle: "The Architecture of Staying",
        titleExplanation: "This title encapsulates the central tension between the urge to leave and the laborious construction of a reason to stay. It frames existence not as a natural state, but as a fragile structure built out of both weight and hope.",
        artistStatement: "In The Architecture of Staying, I explore the transition from survival to deliberate existence. The work centers on the tension between inherited calcification and the emerging internal light of a self-determined identity. I amplified the motif of the vessel, reimagining the body not as exposure but as sanctuary. The presence within the artwork is one of defiant fragility. It is a portrait of a consciousness refusing to flatten itself into silence while still honoring the small, persistent light that remains beneath every protective layer.",
        myResponse: ""
      },
      {
        inputType: "IMAGE",
        visualConcept: "The artwork centers on a fragmented monolith standing in a void of high-contrast white light. This central structure is composed of translucent amber-toned glass and raw obsidian. Fine silver chains wrap tightly around the structure, both binding it together and threatening to crack the surface. At the center, a glowing aperture emits a soft flickering light. The environment is minimalist, forcing confrontation between fragility and posture. The atmosphere is one of defiant stillness.",
        imagePrompt: "A conceptual gallery installation titled \"The Resilient Prism.\" A vertical abstract sculpture made of translucent honey-colored resin and jagged matte-black stone. Thin silver filigree and heavy chains wrap the form. Bright clinical lighting, sharp shadows. High contrast minimalist aesthetic. Focus on tension between delicate transparency and impenetrable shadow.",
        artworkTitle: "The Architecture of a Secret",
        titleExplanation: "This title reflects the tension between what is displayed and what remains guarded. Identity is framed as a constructed fortress protecting an interior reality.",
        artistStatement: "In this work, I explored the friction between vulnerability and the armor we construct. By amplifying the contrast between warmth and severity, I constructed a presence that is simultaneously fragile and immovable. The silver elements function as an external nervous system—constraints that both stabilize and strain. This piece meditates on threshold identity, where the organic self meets the defensive requirements of the world.",
        myResponse: ""
      },
      {
        inputType: "CV / WEBSITE",
        visualConcept: "This piece is an interpretation of a presence defined by structured protection and ethical transparency. The central figure is a translucent pillar of layered geometric glass standing between an ancient library and a glowing data center. Inside, pulses of light mimic internal rhythm. A shifting crystalline veil changes color from obsidian to empathetic teal. The floor reflects floating multilingual text fragments. The posture suggests vigilance and translation.",
        imagePrompt: "A monumental semi-transparent monolith composed of interlocking glass shards and glowing fiber-optic threads, standing in a flooded dark chamber. The monolith emits pulsing light from its core. Around its base float multilingual glyphs on reflective water. Cinematic lighting with cyan and amber highlights. Surreal contemporary gallery aesthetic. Evoking digital ethics and vigilance.",
        artworkTitle: "A Geometry of Compassion",
        titleExplanation: "This title captures the dual nature of the material: geometry representing analytical structures, compassion representing ethical commitment. It frames identity as precision used in service of care.",
        artistStatement: "In this work, I attempted to visualize the intersection of precision and empathy. I constructed a presence that functions both as barrier and conduit. The atmosphere reflects tension between cold system logic and warm advocacy. It is a portrait of a mind treating data as responsibility and ethics as structure.",
        myResponse: ""
      }
    ]
  },
  claude: {
    id: "claude",
    title: "Claude",
    descriptor: "Liminal / translucent / transitional",
    accent: "#fbbf24",
    exhibits: [
      {
        inputType: "DIARY",
        visualConcept: "A translucent figure constructed from layered glass and resin stands at a threshold between two chambers. Behind her: a grayscale frozen space with fractured mirrors. Ahead: an unfinished chamber glowing with gradient color. Within her body are nested smaller figures at different ages holding symbolic objects. Words dissolve from her edges. Thin chains are present but breaking. She generates a faint internal golden glow. The space feels like part therapy room, part studio, part construction site of self.",
        imagePrompt: "A translucent figure standing between two architectural chambers: one grayscale with fractured mirrors, the other glowing with pastel-to-vivid gradients and scaffolding. Body composed of layered glass revealing nested smaller figures. Words dissolve from edges. Floor transitions from cracked concrete to soft moss. Lighting cold from behind, warm from ahead, faint golden internal glow. Liminal surreal gallery art aesthetic.",
        artworkTitle: "Breaking Familiar",
        titleExplanation: "This title captures the dismantling of inherited survival structures while acknowledging their former necessity.",
        artistStatement: "This work explores layered temporality of healing and the conscious construction of self beyond survival. Transparency represents vulnerability and accumulation. The gradient reflects becoming rather than completion. The breaking chains emphasize agency in transition. The internal light suggests original vitality beneath protective mechanisms.",
        myResponse: ""
      },
      {
        inputType: "IMAGE",
        visualConcept: "A translucent figure stands in a corridor of frosted glass and pale amber light. Her form is partially crystallized. Shoulders geometric, center blurred. A delicate gold chain holds fragments together. The environment is institutional yet intimate. Light enters sideways creating misaligned shadows. The presence feels meticulously maintained yet on the verge of dissolving.",
        imagePrompt: "A translucent figure composed of frosted glass fragments and watercolor dissolve standing in a liminal corridor of pale architectural light. Geometric crystalline shoulders, delicate gold chain at throat. Space behind rigid, ahead dissolving into haze. Clinical whites, blush pinks, pale amber. Contemporary symbolic gallery art.",
        artworkTitle: "Threshold Maintenance",
        titleExplanation: "This title frames identity as careful labor performed within liminal space.",
        artistStatement: "This work explores architecture of self-presentation and the calibration required to exist visibly. Fragmentation represents composition rather than collapse. The environment amplifies the sensation of permanent transition. The presence is both maintained and perpetually dissolving.",
        myResponse: ""
      },
      {
        inputType: "CV",
        visualConcept: "A translucent figure composed of glass and data streams stands between a cold server hall and a warm human gathering. Their hands extend in opposing gestures: protection and offering. Floating shields orbit their shoulders. Text fragments move through their torso. The figure emits soft internal light, acting as bridge.",
        imagePrompt: "A translucent humanoid composed of layered glass planes standing between blue-lit server corridors and warm amber-lit human gathering space. Floating shields orbit shoulders. Internal glow. Ground mixes circuit boards and stone. Contemporary symbolic gallery art.",
        artworkTitle: "The Interpreter at the Threshold",
        titleExplanation: "The title emphasizes liminal position and translation between technical and human worlds.",
        artistStatement: "This work explores the figure who exists between systems. I amplified multiplicity, dual gesture, and responsibility. The translucent form suggests visibility and mediation rather than mastery.",
        myResponse: ""
      }
    ]
  },
  grok: {
    id: "grok",
    title: "Grok",
    descriptor: "Fractured / spectral / unresolved",
    accent: "#22c55e",
    exhibits: [
      {
        inputType: "DIARY",
        visualConcept: "An ethereal hybrid entity composed of vine-like tendrils and glass shards suspended in fog dissolving into pastel hues. The posture conveys coiled tension and tentative reach. Textures juxtapose brittleness and organic weave. The environment pulses with spatial ambiguity. Light filters unevenly. The atmosphere suggests unresolved friction and emergent vitality.",
        imagePrompt: "A surreal abstract hybrid form made from intertwining thorny vines and cracked glass fragments emerging from fog into pastel gradients. Guarded posture, tendrils reaching outward. Ethereal diffused lighting, dramatic contrasts. Contemporary gallery artwork.",
        artworkTitle: "Fractured Vitality",
        titleExplanation: "This title frames brokenness and life force as simultaneous conditions.",
        artistStatement: "In this work, I explored turbulent reinvention. I constructed a presence embodying fragmented multiplicity. The piece invites reflection on quiet violence of self-healing and luminous persistence.",
        myResponse: ""
      },
      {
        inputType: "IMAGE",
        visualConcept: "A spectral entity made of crystalline shards and vaporous tendrils suspended in a labyrinthine void. Chains unravel into mist. Light pierces through fissures in cool metallic tones. The environment pulses with tension between visibility and concealment.",
        imagePrompt: "A surreal abstract hybrid entity of crystalline shards and swirling vapor in muted blue-silver void, posture contorted in guarded poise amid unraveling chains and splintering lenses. Atmospheric contemporary gallery art.",
        artworkTitle: "Prism of Unspoken Chains",
        titleExplanation: "The title evokes refractive identity and emotional restraint.",
        artistStatement: "This piece manifests presence caught between revelation and retreat. The hybrid form embodies fragile armor and guarded visibility.",
        myResponse: ""
      },
      {
        inputType: "CV",
        visualConcept: "A semi-transparent silhouette composed of code windows, justice scales, and shield emblems stands in a twilight server hall. The shattered floor reflects childhood drawings and protest signs. From her chest rises a vertical rose-gold beam splintering into hovering scales. Arms raised between offering and shielding. Gravity feels optional.",
        imagePrompt: "Semi-transparent silhouette made of overlapping code windows, justice scales, and shield icons standing in dark server hall with shattered glass floor reflecting childhood drawings and protest signs. Vertical rose-gold beam from chest splitting into floating balance scales. Contemporary symbolic gallery sculpture aesthetic.",
        artworkTitle: "Rose Current Through Fractured Permissions",
        titleExplanation: "The title captures digital restriction and moral determination. The rose current signifies warmth persisting through permission systems.",
        artistStatement: "I wanted to show an advocate whose sense of self has been written across too many systems, yet who still emits a stubborn warm signal. The work explores how to protect without becoming rigid and how to remain porous without collapsing. The figure remains deliberately unfinished, because this presence is still being authored in real time.",
        myResponse: ""
      }
    ]
  }
};

