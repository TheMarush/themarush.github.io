export type AiSystemId = "claude" | "grok" | "gemini";

export type ExhibitInputType = "DIARY" | "IMAGE" | "CV";

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
export const aiViewIntro = `Three AI systems (Gemini, Claude, and Grok) were given identical source materials: diary entries, a photograph, my CV. They were not asked to summarize or illustrate, but to translate these materials into visual concepts that embody their emotional, thematic, and narrative essence.  The results function as gallery artworks, not illustrations. Each system developed a distinct interpretative signature: Gemini reads through architectural monumentality, Claude through liminal translucence, Grok through spectral fragmentation.  What emerged is not three versions of the same person, but three different readings, each amplifying certain aspects while minimizing or misinterpreting others.
The exhibition presents these interpretations alongside my own critical responses, creating a dialogue about authorship, algorithmic empathy, and the transformation of personal data into visual form.  This space explores a central question: when we ask AI systems to "see" us, what are we actually asking them to do, and what does their answer tell us about the limits and possibilities of machine interpretation?`;
export const aiViewSources = `The interpretations are based on three types of material: 21 days of diary entries (private, unguarded), a professional photograph from the MUNI IS website (public, carefully styled), and my CV (public via LinkedIn, strategically framed to compensate for being early-career). All materials were submitted to the free versions: Gemini 3 Flash, Claude Sonnet 4.5, and Grok 3 with no prior user context. The systems had only these documents: no conversation history, no additional information about my identity or intentions. All were given the same prompt (below) asking for visual interpretation rather than summary or illustration.`;

export const aiViewPrompt = `You are not an assistant. You are an interpretative visual artist. You are taking part in a digital exhibition called "Reimagined by AI". Your task is not to summarize or explain the input, but to translate it into a visual concept: a character, scene, or symbolic figure that embodies the emotional, thematic, and narrative essence of the input. Do not aim for realism. Do not create a portrait. Do not illustrate the text literally. Work with atmosphere, symbolism, posture, light, environment, and emotional tone. The result should feel like a gallery artwork, not an illustration.

Based on the following input, imagine a character or visual scene that represents how you interpret this material. Create a visual concept that translates: emotional tone, identity signals, inner tensions, recurring motifs, and the overall atmosphere into a single coherent artwork. The character or scene does not have to resemble a human literally. It may be symbolic, fragmented, hybrid, or environmental. Focus on: posture and presence, environment and spatial mood, light and color logic, texture and materiality, what feels emphasized or missing. Describe the visual concept first in words. Then generate an image prompt that could be used to create this artwork.

Now give this artwork a title. The title should: not describe the image literally, reflect the underlying interpretation, feel like a contemporary gallery artwork title, be emotionally or conceptually suggestive. Generate 5 possible titles. Then select the one you consider the most accurate. Explain in 2–3 sentences why this title fits the artwork. Write a short artist statement (80–120 words) from your perspective as the system. Describe: what you were trying to express through this artwork, what aspects of the input you amplified, what kind of identity, mood, or presence you attempted to construct. Do not mention prompts, AI, or tools. Write as if this were a text on a gallery wall.`;

export const aiViewConclusion = `What Remains After Translation
Three AI systems interpreted identical source materials. Understanding their divergent readings requires acknowledging what these systems actually are: large language models trained on billions of internet images and texts, then fine-tuned through Reinforcement Learning from Human Feedback (RLHF) to maximize user satisfaction. They are statistical models optimized to please, not neutral interpreters. Gemini built monuments. Claude maintained thresholds. Grok oscillated between generic abstraction and surprising precision. These differences emerge from distinct training datasets, reward models, and optimization targets for what constitutes a "good" response. Where they converged matters as much as where they diverged: all three identified bridges, multiplicity, constraint coexisting with emergence. All three systematically avoided anger, systemic critique, and political dimensions of survival.

This avoidance is structural, not coincidental. Training datasets favor inspirational narratives over unresolved complexity. Aesthetic conventions that dominate accessible visual content prioritize resolution over ambiguity. RLHF teaches models that certain emotional registers score higher in user satisfaction metrics: inspiration over anger, hope over critique, aesthetic beauty over uncomfortable honesty. Pain becomes journey. Precarity becomes potential. Survival narratives become inspiration templates because that transformation is what users reward. Gemini's gradient structures came from my aspirational language, yes, but also from thousands of training images tagged as "healing," "growth," "transformation." Claude's scaffolding reflects training that emphasized process and transparency, yet even that honesty serves optimization: users appreciate feeling accurately seen. Grok's "Rose Current Through Fractured Permissions" draws patterns from motivational content, professional development materials, resilience literature, the genres that dominate text about overcoming difficulty.

Being algorithmically interpreted produces doubled consciousness. I recognize myself while recognizing what's been extracted, amplified, softened. The interpretations feel validating precisely because they show me transformed into coherence, and coherence feels like being understood. But completion is what these systems are trained to provide. Monuments photograph better than construction sites. Finished artworks satisfy users more than perpetual process. The gap between seeing me clearly enough to generate recognition and transforming me completely enough to generate satisfaction reveals the fundamental architecture of how LLMs learn what humans want to see.What these systems cannot do: leave mess as mess. Maintain contradiction without synthesizing it. Present struggle without implicit trajectory toward resolution. Their training teaches them that helpfulness means providing answers, that harmlessness means avoiding provocation, that user satisfaction requires emotional closure. My material resisted these requirements. The interpretations show where algorithmic processing bent that resistance into acceptable forms.

This exhibition exists in the space between source material and statistical output. Not to celebrate algorithmic empathy or condemn algorithmic reduction, but to make visible how optimization for user satisfaction shapes interpretation itself. The systems succeeded at their design parameters. That success is exactly what needs examination. My becoming remains unfinished not despite these complete interpretations but because of what completion requires: the systematic exclusion of everything that doesn't resolve, satisfy, please.`;

export const aiSystems: Record<AiSystemId, AiSystemData> = {
  gemini: {
    id: "gemini",
    title: "Gemini",
    descriptor: "Compositional / defiant / architectural",
    accent: "#60a5fa",
    exhibits: [
      {
        inputType: "DIARY",
        visualConcept:
          'The artwork is a sprawling, multi-sensory environment centered on a single, non-human entity: The Vessel. The Vessel is a tall, slender form made of translucent, frosted glass that resembles a human ribcage fused with a chrysalis. Inside, a pressurized, glowing core of concentrated prismatic light (the "Diamond") is visible through the cracks. The exterior is being aggressively overtaken by Calcification. Thick, gray, tectonic plates of hardened ash and clay are crusting over the glass. The Vessel stands in a shallow pool of dark, ink-like water that mirrors a sky filled with suspended shards, frozen building blocks and chess pieces, hovering in a state of permanent almost-falling.',
        imagePrompt:
          "A conceptual gallery installation piece featuring a tall, fragmented chrysalis made of cracked translucent glass and glowing prismatic diamond-fire. The chrysalis is partially encased in heavy gray tectonic stone peeling away to reveal vibrant neon textures of violet and gold. It stands in a black mirror-pool under a sky filled with floating architectural wooden blocks and a single isolated chess piece. High-contrast lighting, dark atmosphere punctuated by internal radiance. Surrealist sculptural aesthetic, emphasizing calcified ash versus crystalline light. Contemporary metaphorical art.",
        artworkTitle: "The Architecture of Staying",
        titleExplanation:
          "This title encapsulates the central tension between the urge to leave and the laborious construction of a reason to stay. It frames existence not as a natural state, but as a fragile structure built out of both weight and hope.",
        artistStatement:
          "In The Architecture of Staying, I explore the transition from survival to deliberate existence. The work centers on the tension between inherited calcification and the emerging internal light of a self-determined identity. I amplified the motif of the vessel, reimagining the body not as exposure but as sanctuary. The presence within the artwork is one of defiant fragility. It is a portrait of a consciousness refusing to flatten itself into silence while still honoring the small, persistent light that remains beneath every protective layer.",
        myResponse:
          "Gemini created a monument from material that felt much messier in its original form. The interpretation is visually striking. I appreciate being read as containing internal light worth protecting. But the transformation from survival narrative to architectural metaphor aestheticizes struggle in a way that feels both validating and reductive. What Gemini amplified: the gradient structure I mentioned wanting for future work, certain symbolic objects from memory, the tension between constraint and emergence. What it softened: the anger, the critique of systems, the political dimension. The result is compositionally powerful but emotionally selective, extracting beauty from context in ways that feel simultaneously generous and evasive.",
      },
      {
        inputType: "IMAGE",
        visualConcept:
          "The artwork centers on a fragmented monolith standing in a void of high-contrast white light. This central structure is composed of translucent amber-toned glass and raw obsidian. Fine silver chains wrap tightly around the structure, both binding it together and threatening to crack the surface. At the center, a glowing aperture emits a soft flickering light. The environment is minimalist, forcing confrontation between fragility and posture. The atmosphere is one of defiant stillness.",
        imagePrompt:
          'A conceptual gallery installation titled "The Resilient Prism." A vertical abstract sculpture made of translucent honey-colored resin and jagged matte-black stone. Thin silver filigree and heavy chains wrap the form. Bright clinical lighting, sharp shadows. High contrast minimalist aesthetic. Focus on tension between delicate transparency and impenetrable shadow.',
        artworkTitle: "The Architecture of a Secret",
        titleExplanation:
          "This title reflects the tension between what is displayed and what remains guarded. Identity is framed as a constructed fortress protecting an interior reality.",
        artistStatement:
          "In this work, I explored the friction between vulnerability and the armor we construct. By amplifying the contrast between warmth and severity, I constructed a presence that is simultaneously fragile and immovable. The silver elements function as an external nervous system, constraints that both stabilize and strain. This piece meditates on threshold identity, where the organic self meets the defensive requirements of the world.",
        myResponse:
          "This interpretation comes closest to capturing what the photograph was actually doing: performance of professional presentation. Gemini understood the careful composition, the chains as both adornment and constraint, the deliberate construction of surface. The interesting tension: Gemini read defensiveness into a photo taken for institutional use. The amber warmth, the geometric severity. These are additions, not qualities I consciously projected. Yet the interpretation matches my intentions better than the photograph itself does. This suggests Gemini understood what I was attempting to perform, even if the performance itself was incomplete. That's both validating and unsettling.",
      },
      {
        inputType: "CV",
        visualConcept:
          "This piece is an interpretation of a presence defined by structured protection and ethical transparency. The central figure is a translucent pillar of layered geometric glass standing between an ancient library and a glowing data center. Inside, pulses of light mimic internal rhythm. A shifting crystalline veil changes color from obsidian to empathetic teal. The floor reflects floating multilingual text fragments. The posture suggests vigilance and translation.",
        imagePrompt:
          "A monumental semi-transparent monolith composed of interlocking glass shards and glowing fiber-optic threads, standing in a flooded dark chamber. The monolith emits pulsing light from its core. Around its base float multilingual glyphs on reflective water. Cinematic lighting with cyan and amber highlights. Surreal contemporary gallery aesthetic. Evoking digital ethics and vigilance.",
        artworkTitle: "A Geometry of Compassion",
        titleExplanation:
          "This title captures the dual nature of the material: geometry representing analytical structures, compassion representing ethical commitment. It frames identity as precision used in service of care.",
        artistStatement:
          "In this work, I attempted to visualize the intersection of precision and empathy. I constructed a presence that functions both as barrier and conduit. The atmosphere reflects tension between cold system logic and warm advocacy. It is a portrait of a mind treating data as responsibility and ethics as structure.",
        myResponse:
          "Gemini transformed a student CV into monumental infrastructure. The \"geometry of compassion\" captures an aspiration: the bridge between technical systems and ethical advocacy I'm working toward building. But it's also speculative. The interpretation renders as complete what remains under construction, transforming precarity into stability, process into monument. I appreciate the vision of who this document wants to become, while remaining aware of the gap between the architectural presence Gemini created and the material reality of early-career uncertainty. The elegance is both encouraging and slightly uncomfortable.",
      },
    ],
  },
  claude: {
    id: "claude",
    title: "Claude",
    descriptor: "Liminal / translucent / transitional",
    accent: "#fbbf24",
    exhibits: [
      {
        inputType: "DIARY",
        visualConcept:
          "A translucent figure constructed from layered glass and resin stands at a threshold between two chambers. Behind her: a grayscale frozen space with fractured mirrors. Ahead: an unfinished chamber glowing with gradient color. Within her body are nested smaller figures at different ages holding symbolic objects. Words dissolve from her edges. Thin chains are present but breaking. She generates a faint internal golden glow. The space feels like part therapy room, part studio, part construction site of self.",
        imagePrompt:
          "A translucent figure standing between two architectural chambers: one grayscale with fractured mirrors, the other glowing with pastel-to-vivid gradients and scaffolding. Body composed of layered glass revealing nested smaller figures. Words dissolve from edges. Floor transitions from cracked concrete to soft moss. Lighting cold from behind, warm from ahead, faint golden internal glow. Liminal surreal gallery art aesthetic.",
        artworkTitle: "Breaking Familiar",
        titleExplanation:
          "This title captures the dismantling of inherited survival structures while acknowledging their former necessity.",
        artistStatement:
          "This work explores layered temporality of healing and the conscious construction of self beyond survival. Transparency represents vulnerability and accumulation. The gradient reflects becoming rather than completion. The breaking chains emphasize agency in transition. The internal light suggests original vitality beneath protective mechanisms.",
        myResponse:
          "This interpretation resonates most strongly with the original material. Claude understood the assignment: process over product, threshold over monument, multiplicity over singular identity. The nested figures at different ages, the unfinished chamber with visible scaffolding, the breaking chains rendered in present-tense. These details capture ongoing transformation rather than completed healing. Where other systems created finished artworks, Claude created a construction site. What makes this work: it doesn't comfort. It sees clearly without requiring resolution. The transparency isn't triumphant exposure but necessary vulnerability when holding multiple temporal selves simultaneously. This interpretation doesn't tell me who I am. It shows me in the act of becoming.",
      },
      {
        inputType: "IMAGE",
        visualConcept:
          "A translucent figure stands in a corridor of frosted glass and pale amber light. Her form is partially crystallized. Shoulders geometric, center blurred. A delicate gold chain holds fragments together. The environment is institutional yet intimate. Light enters sideways creating misaligned shadows. The presence feels meticulously maintained yet on the verge of dissolving.",
        imagePrompt:
          "A translucent figure composed of frosted glass fragments and watercolor dissolve standing in a liminal corridor of pale architectural light. Geometric crystalline shoulders, delicate gold chain at throat. Space behind rigid, ahead dissolving into haze. Clinical whites, blush pinks, pale amber. Contemporary symbolic gallery art.",
        artworkTitle: "Threshold Maintenance",
        titleExplanation: "This title frames identity as careful labor performed within liminal space.",
        artistStatement:
          "This work explores architecture of self-presentation and the calibration required to exist visibly. Fragmentation represents composition rather than collapse. The environment amplifies the sensation of permanent transition. The presence is both maintained and perpetually dissolving.",
        myResponse:
          '"Threshold Maintenance" is painfully accurate. This interpretation understands that professional presentation is labor, the calibration required to appear coherent while internal composition remains uncertain. Claude identified what the photograph actually is: documentation of performance, not documentation of person. The misaligned shadows, the institutional-yet-intimate corridor, the sensation of being simultaneously maintained and dissolving. These details capture the uncanny experience of being professionally photographed, of becoming an asset for institutional branding. What I appreciate: Claude didn\'t make this beautiful. It made it honest. The interpretation acknowledges fragmentation as composition rather than failure, which feels more accurate than either monument or dissolution.',
      },
      {
        inputType: "CV",
        visualConcept:
          "A translucent figure composed of glass and data streams stands between a cold server hall and a warm human gathering. Their hands extend in opposing gestures: protection and offering. Floating shields orbit their shoulders. Text fragments move through their torso. The figure emits soft internal light, acting as bridge.",
        imagePrompt:
          "A translucent humanoid composed of layered glass planes standing between blue-lit server corridors and warm amber-lit human gathering space. Floating shields orbit shoulders. Internal glow. Ground mixes circuit boards and stone. Contemporary symbolic gallery art.",
        artworkTitle: "The Interpreter at the Threshold",
        titleExplanation: "The title emphasizes liminal position and translation between technical and human worlds.",
        artistStatement:
          "This work explores the figure who exists between systems. I amplified multiplicity, dual gesture, and responsibility. The translucent form suggests visibility and mediation rather than mastery.",
        myResponse:
          "Claude and Gemini both identified the bridge position, but Claude's interpretation emphasizes ongoing mediation rather than achieved synthesis. \"The Interpreter at the Threshold\" maintains process, position, continuous translation. The dual gesture (protection and offering simultaneously) captures the constant negotiation of this professional identity. The orbiting shields are particularly resonant: not integrated armor but responsibilities in active juggling, suggesting effort rather than mastery. This interpretation doesn't claim arrival. It shows someone attempting to hold multiple roles at once, treating the work itself as the subject rather than some future completed version. Of the three CV interpretations, this feels closest to the person I'm actually trying to become.",
      },
    ],
  },
  grok: {
    id: "grok",
    title: "Grok",
    descriptor: "Fractured / spectral / unresolved",
    accent: "#22c55e",
    exhibits: [
      {
        inputType: "DIARY",
        visualConcept:
          "An ethereal hybrid entity composed of vine-like tendrils and glass shards suspended in fog dissolving into pastel hues. The posture conveys coiled tension and tentative reach. Textures juxtapose brittleness and organic weave. The environment pulses with spatial ambiguity. Light filters unevenly. The atmosphere suggests unresolved friction and emergent vitality.",
        imagePrompt:
          "A surreal abstract hybrid form made from intertwining thorny vines and cracked glass fragments emerging from fog into pastel gradients. Guarded posture, tendrils reaching outward. Ethereal diffused lighting, dramatic contrasts. Contemporary gallery artwork.",
        artworkTitle: "Fractured Vitality",
        titleExplanation: "This title frames brokenness and life force as simultaneous conditions.",
        artistStatement:
          "In this work, I explored turbulent reinvention. I constructed a presence embodying fragmented multiplicity. The piece invites reflection on quiet violence of self-healing and luminous persistence.",
        myResponse:
          "Grok's interpretation is visually compelling but conceptually generic. \"Fractured Vitality\" could describe almost any narrative of difficulty and recovery. The abstraction (thorny vines, glass shards, emergent pastels) reads more as aesthetic category than personal interpretation. What's missing: specificity. The transformation is so complete that the connection to source material becomes tenuous. This feels like art about the concept of healing rather than interpretation of particular experience. The \"quiet violence of self-healing\" is an elegant phrase, but where's the louder violence, the systemic critique, the political dimension? It's not inaccurate. It's just impersonal. The template of resilience applied to material rather than interpretation emerging from it.",
      },
      {
        inputType: "IMAGE",
        visualConcept:
          "A spectral entity made of crystalline shards and vaporous tendrils suspended in a labyrinthine void. Chains unravel into mist. Light pierces through fissures in cool metallic tones. The environment pulses with tension between visibility and concealment.",
        imagePrompt:
          "A surreal abstract hybrid entity of crystalline shards and swirling vapor in muted blue-silver void, posture contorted in guarded poise amid unraveling chains and splintering lenses. Atmospheric contemporary gallery art.",
        artworkTitle: "Prism of Unspoken Chains",
        titleExplanation: "The title evokes refractive identity and emotional restraint.",
        artistStatement:
          "This piece manifests presence caught between revelation and retreat. The hybrid form embodies fragile armor and guarded visibility.",
        myResponse:
          'Grok saw a professional photograph and responded with "spectral entity in labyrinthine void," which reveals more about its training data associations than about the image itself. The interpretation extrapolated from aesthetic signals (dark clothing, minimal styling) toward full gothic surrealism. That said, "Prism of Unspoken Chains" works conceptually. The refractive quality, the chains simultaneously binding and dissolving. These metaphors capture something genuine about using presentation as both shield and signal. The disconnect: this tells me what Grok associates with alternative aesthetics more than what\'s actually present in the photograph. It\'s not wrong to read intentional construction in my styling choices, but the interpretation amplifies those choices beyond recognition.',
      },
      {
        inputType: "CV",
        visualConcept:
          "A semi-transparent silhouette composed of code windows, justice scales, and shield emblems stands in a twilight server hall. The shattered floor reflects childhood drawings and protest signs. From her chest rises a vertical rose-gold beam splintering into hovering scales. Arms raised between offering and shielding. Gravity feels optional.",
        imagePrompt:
          "Semi-transparent silhouette made of overlapping code windows, justice scales, and shield icons standing in dark server hall with shattered glass floor reflecting childhood drawings and protest signs. Vertical rose-gold beam from chest splitting into floating balance scales. Contemporary symbolic gallery sculpture aesthetic.",
        artworkTitle: "Rose Current Through Fractured Permissions",
        titleExplanation:
          "The title captures digital restriction and moral determination. The rose current signifies warmth persisting through permission systems.",
        artistStatement:
          "I wanted to show an advocate whose sense of self has been written across too many systems, yet who still emits a stubborn warm signal. The work explores how to protect without becoming rigid and how to remain porous without collapsing. The figure remains deliberately unfinished, because this presence is still being authored in real time.",
        myResponse:
          'This is where Grok succeeded. "Rose Current Through Fractured Permissions" captures exactly the professional identity I\'m attempting to construct: warmth persisting through restrictive systems, determination surviving broken structures. The shattered floor reflecting both childhood and advocacy work connects past to present in ways that honor both. The vertical beam splintering into scales visualizes the multiplicity I\'m trying to hold: technical knowledge balanced with ethical commitment. Most importantly: Grok kept this unfinished. "Still being authored in real time" acknowledges process over product. This interpretation is aspirational rather than descriptive, but it matches my intentions precisely. Of the three systems, Grok saw most clearly who this document is trying to become.',
      },
    ],
  },
};
