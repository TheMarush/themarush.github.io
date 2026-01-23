export type AiSystemId = "claude" | "chatgpt" | "gemini";

export type AiModuleId = "website" | "diary" | "image";

export interface AiModule {
  id: AiModuleId;
  inputLabel: string;
  title: string;
  humanText: string;
  systemSummary: string;
  keywords: string[];
  imagePlaceholderSrc?: string;
}

export interface AiSystemProfile {
  themes: string[];
  tone: string[];
  aesthetics: string[];
}

export interface AiSystemData {
  id: AiSystemId;
  title: string;
  descriptor: string;
  hero: string;
  accent: string;
  modules: AiModule[];
  systemProfile: AiSystemProfile;
  counterReading: string;
}

export const aiSystems: Record<AiSystemId, AiSystemData> = {
  claude: {
    id: "claude",
    title: "Claude — Relational lab",
    descriptor: "Relational / narrative / reflective system output",
    hero:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis, nisl at cursus blandit, sapien eros dapibus urna, et pharetra lorem nunc in nulla.",
    accent: "#fbbf24",
    modules: [
      {
        id: "website",
        inputLabel: "INPUT 01 — WEBSITE",
        title: "Website surface and structure",
        humanText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum arcu vel mauris accumsan, sit amet dapibus urna finibus.",
        systemSummary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Systema narrativum hic reordines fragmenta in seriem relationalem, iterans motus inter paginam et latentem memoriam.",
        keywords: [
          "narrative layering",
          "page-to-page resonance",
          "relational focus",
        ],
        imagePlaceholderSrc: "",
      },
      {
        id: "diary",
        inputLabel: "INPUT 02 — DIARY",
        title: "Diary fragments and margins",
        humanText:
          "Curabitur at scelerisque augue. Curabitur tristique turpis nec nisi lacinia, non laoreet est maximus.",
        systemSummary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Systema reflectivum componit fragmenta diaristica in fluxum internum, reusing verba sicut recurrens chorus.",
        keywords: ["inner monologue", "refrain", "reflective drift"],
        imagePlaceholderSrc: "",
      },
      {
        id: "image",
        inputLabel: "INPUT 03 — IMAGE",
        title: "Still image as scene",
        humanText:
          "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer in neque porta, pharetra magna in, congue velit.",
        systemSummary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Systema narrativum legit imaginem sicut scena apertam, demum replens interstitia fabulae.",
        keywords: ["scene-building", "temporal echo", "soft focus"],
        imagePlaceholderSrc: "",
      },
    ],
    systemProfile: {
      themes: ["relationships", "memory", "returning motifs"],
      tone: ["gentle", "speculative", "reflective"],
      aesthetics: ["long lines", "soft gradients", "layered sequencing"],
    },
    counterReading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum mi nec arcu consequat, sed dapibus metus tincidunt.",
  },
  chatgpt: {
    id: "chatgpt",
    title: "ChatGPT — Structural lab",
    descriptor: "Structural / semantic / analytical system output",
    hero:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, sapien quis volutpat sodales, justo mi tincidunt mi, a volutpat felis metus ut odio.",
    accent: "#22c55e",
    modules: [
      {
        id: "website",
        inputLabel: "INPUT 01 — WEBSITE",
        title: "Information architecture sketch",
        humanText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at justo ut augue malesuada tincidunt quis quis quam.",
        systemSummary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Systema structuralis reformat navigationem in schema articulatum, sublineans rubricas, nuntios et contextum.",
        keywords: ["hierarchy", "semantic grouping", "section mapping"],
        imagePlaceholderSrc: "",
      },
      {
        id: "diary",
        inputLabel: "INPUT 02 — DIARY",
        title: "Entries as conceptual set",
        humanText:
          "Sed id tortor sodales, feugiat sem sed, cursus nisl. Quisque aliquet, urna et gravida faucibus, velit lorem interdum arcu, a faucibus mi nunc eu tellus.",
        systemSummary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Systema analyticum extrahit categorias affectuum, coniungens fragmenta sub titulis et subthematibus.",
        keywords: [
          "taxonomy of feeling",
          "category edges",
          "summary sentences",
        ],
        imagePlaceholderSrc: "",
      },
      {
        id: "image",
        inputLabel: "INPUT 03 — IMAGE",
        title: "Image as schema",
        humanText:
          "Mauris gravida sapien nisi, at semper massa feugiat vitae. Donec condimentum, felis ut feugiat dapibus, libero purus sagittis velit, in dapibus dolor arcu at leo.",
        systemSummary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Systema semanticum deconstruit imaginem in regiones, labels et relationes spatiales.",
        keywords: ["object mapping", "spatial relations", "label density"],
        imagePlaceholderSrc: "",
      },
    ],
    systemProfile: {
      themes: ["structure", "categories", "explicit links"],
      tone: ["clear", "explanatory", "ordered"],
      aesthetics: ["outlines", "columns", "labeled groups"],
    },
    counterReading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget urna nulla. Cras eget sem ac arcu egestas aliquam vel vitae velit.",
  },
  gemini: {
    id: "gemini",
    title: "Gemini — Visual lab",
    descriptor: "Visual-centric / associative / compositional system output",
    hero:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius, leo vitae efficitur fermentum, arcu nibh iaculis mauris, vitae placerat eros neque vitae enim.",
    accent: "#60a5fa",
    modules: [
      {
        id: "website",
        inputLabel: "INPUT 01 — WEBSITE",
        title: "Layout as field",
        humanText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo lectus sit amet interdum pretium.",
        systemSummary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Systema visuale legit layout sicut campus, collocans colores, margines et vacua spatia in dialogum compositivum.",
        keywords: ["color field", "rhythm", "edges of frame"],
        imagePlaceholderSrc: "",
      },
      {
        id: "diary",
        inputLabel: "INPUT 02 — DIARY",
        title: "Diary as image sequence",
        humanText:
          "Pellentesque iaculis, enim id lobortis dapibus, lacus ipsum elementum enim, sit amet lobortis elit mauris sit amet mi.",
        systemSummary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Systema associativum transformat notationes in quasi-stills, colligens imagines mentales per similitudinem tonalem.",
        keywords: ["visual metaphors", "tone matching", "associative chain"],
        imagePlaceholderSrc: "",
      },
      {
        id: "image",
        inputLabel: "INPUT 03 — IMAGE",
        title: "Image as atmosphere",
        humanText:
          "Integer pulvinar pulvinar ligula, non sagittis magna viverra id. Donec id diam id dolor venenatis pharetra.",
        systemSummary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Systema compositivum amplificat texturas minores, trahens signa lucis et umbrae in primum planum.",
        keywords: ["texture", "ambient light", "composite mood"],
        imagePlaceholderSrc: "",
      },
    ],
    systemProfile: {
      themes: ["atmosphere", "imagery", "pattern"],
      tone: ["intuitive", "drifting", "associative"],
      aesthetics: ["soft focus", "layered overlays", "gradients"],
    },
    counterReading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet lectus at lacus faucibus mollis. Sed convallis bibendum scelerisque.",
  },
};

