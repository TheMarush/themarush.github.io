import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { AiSystemId, Exhibit } from "../data/aiView.js";

@customElement("mm-ai-exhibit")
export class MMAiExhibit extends LitElement {
  @property({ type: Object })
  exhibit!: Exhibit;

  @property({ type: String })
  systemId!: AiSystemId;

  @property({ type: Number })
  index: number = 1;

  @property({ type: String })
  accent: string = "#52c8f4";

  @state()
  private lightboxOpen: boolean = false;

  @state()
  private titlePopoverOpen: boolean = false;

  @state()
  private imagePopoverOpen: boolean = false;

  @state()
  private isInView: boolean = false;

  @state()
  private animationPhase: "idle" | "generating" | "revealing" | "complete" = "idle";

  @state()
  private currentSection: "title" | "artistStatement" | "myResponse" | "complete" = "title";

  @state()
  private generatingDots: number = 3; // Start with 3 dots (Generating...) before animation starts

  @state()
  private revealedText: {
    title: string;
    artistStatement: string;
    myResponse: string;
  } = {
    title: "",
    artistStatement: "",
    myResponse: "",
  };

  @state()
  private pixelationLevel: number = 1; // 1 = fully pixelated, 0 = clear

  private intersectionObserver?: IntersectionObserver;
  private animationFrameId?: number;
  private pixelationInterval?: number;
  private imageElement?: HTMLImageElement;
  private canvasElement?: HTMLCanvasElement;

  // Animation state
  private generatingStartTime?: number;
  private currentTextIndex: number = 0;
  private currentTextSection?: "title" | "artistStatement" | "myResponse";
  private textRevealTimeout?: number;

  // Animation constants
  private static readonly TEXT_REVEAL_INTERVAL = 2; // ms per character

  private getImagePath(): string {
    // Map input types to file naming convention
    const inputTypeMap: Record<string, string> = {
      DIARY: "diary",
      IMAGE: "image",
      CV: "cv",
      WEBSITE: "cv",
      "CV / WEBSITE": "cv",
    };

    const inputType = inputTypeMap[this.exhibit.inputType] || "diary";
    // Grok uses .jpg, others use .png
    const extension = this.systemId === "grok" ? "jpg" : "png";
    return `/ai-gallery/${this.systemId}-${inputType}.${extension}`;
  }

  private getSystemDisplayName(): string {
    return this.systemId.charAt(0).toUpperCase() + this.systemId.slice(1);
  }

  private openLightbox() {
    this.lightboxOpen = true;
  }

  private closeLightbox() {
    this.lightboxOpen = false;
  }

  private toggleTitlePopover(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.titlePopoverOpen = !this.titlePopoverOpen;
    this.requestUpdate();
  }

  private toggleImagePopover(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.imagePopoverOpen = !this.imagePopoverOpen;
    this.requestUpdate();
  }

  private closeTitlePopover() {
    this.titlePopoverOpen = false;
  }

  private closeImagePopover() {
    this.imagePopoverOpen = false;
  }

  private handleImageClick(e: Event) {
    // Clicking the image shows the popover with Visual Concept and Prompt
    const target = e.target as HTMLElement;
    if (!target.closest(".image-info-icon") && !target.closest(".popover")) {
      this.toggleImagePopover(e);
    }
  }

  private handleImageDoubleClick() {
    // Double-click opens lightbox for full-size view
    this.openLightbox();
  }

  connectedCallback() {
    super.connectedCallback();
    this.setupIntersectionObserver();
    window.addEventListener("keydown", this.handleKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanup();
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (this.titlePopoverOpen) {
        this.closeTitlePopover();
      }
      if (this.imagePopoverOpen) {
        this.closeImagePopover();
      }
      if (this.lightboxOpen) {
        this.closeLightbox();
      }
    }
  };

  private setupIntersectionObserver() {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!this.isInView) {
              // Just entered view
              this.isInView = true;
              this.requestStartAnimation();
            }
          } else {
            if (this.isInView) {
              // Just left view
              this.isInView = false;
              this.stopAnimation();
            }
          }
        });
      },
      {
        threshold: 0.1, // Start when 10% of the component is visible
      },
    );

    // Wait for the component to be rendered
    requestAnimationFrame(() => {
      const host = this.shadowRoot?.host;
      if (host) {
        this.intersectionObserver?.observe(host);
      }
    });
  }

  private requestStartAnimation() {
    // Only start if idle and in view
    if (this.animationPhase === "idle" && this.isInView) {
      this.startAnimation();
    }
  }

  // Public method to start animation on page load (called by parent)
  public startAnimationOnLoad() {
    if (this.animationPhase === "idle") {
      // Mark as in view and start animation (force start regardless of viewport)
      this.isInView = true;
      this.startAnimation(true);
    }
  }

  private stopAnimation() {
    // Stop animation loop when out of view
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = undefined;
    }
    // Stop text reveal timeout (if any)
    if (this.textRevealTimeout) {
      clearTimeout(this.textRevealTimeout);
      this.textRevealTimeout = undefined;
    }
    // Stop pixelation animation
    if (this.pixelationInterval) {
      clearInterval(this.pixelationInterval);
      this.pixelationInterval = undefined;
    }
  }

  private startAnimation(forceStart: boolean = false) {
    // If already started, don't restart
    if (this.animationPhase !== "idle") return;

    // Only proceed if we're in view (unless forced to start)
    if (!forceStart && !this.isInView) return;

    // Start pixelation animation (uses one interval)
    this.startPixelationAnimation();

    // Start text animation sequence
    this.currentSection = "title";
    this.startTitleAnimation();
  }

  private startPixelationAnimation() {
    // Start with fully pixelated image
    this.pixelationLevel = 1;

    // Wait for image to load before starting animation
    requestAnimationFrame(() => {
      const img = this.shadowRoot?.querySelector(".artwork-image") as HTMLImageElement;
      if (img && img.complete) {
        this.setupPixelationCanvas(img);
        this.animatePixelation();
      } else if (img) {
        img.addEventListener(
          "load",
          () => {
            this.setupPixelationCanvas(img);
            this.animatePixelation();
          },
          { once: true },
        );
      }
    });
  }

  private setupPixelationCanvas(img: HTMLImageElement) {
    this.imageElement = img;

    // Create canvas for pixelation effect
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const wrapper = img.parentElement;
    if (!wrapper) return;

    // Set canvas size to match image
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "1";
    canvas.className = "pixelation-canvas";

    // Insert canvas before image
    wrapper.insertBefore(canvas, img);
    this.canvasElement = canvas;

    // Initial render with full pixelation
    this.renderPixelatedImage();
  }

  private renderPixelatedImage() {
    if (!this.imageElement || !this.canvasElement) return;

    const canvas = this.canvasElement;
    const ctx = canvas.getContext("2d");
    const img = this.imageElement;

    if (!ctx) return;

    // Calculate pixel size based on pixelation level
    // pixelationLevel: 1 = very pixelated (large pixels), 0 = clear (no pixelation)
    const maxPixelSize = Math.max(canvas.width, canvas.height) / 8; // Max 8x8 grid
    const minPixelSize = 1;
    const pixelSize = minPixelSize + (maxPixelSize - minPixelSize) * this.pixelationLevel;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (this.pixelationLevel <= 0) {
      // Fully clear - hide canvas
      canvas.style.opacity = "0";
      return;
    }

    canvas.style.opacity = "1";

    // Draw pixelated version
    const scaledWidth = Math.ceil(canvas.width / pixelSize);
    const scaledHeight = Math.ceil(canvas.height / pixelSize);

    // Create temporary canvas for downscaling
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = scaledWidth;
    tempCanvas.height = scaledHeight;
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    // Draw image scaled down
    tempCtx.imageSmoothingEnabled = false;
    tempCtx.drawImage(img, 0, 0, scaledWidth, scaledHeight);

    // Get image data
    const imageData = tempCtx.getImageData(0, 0, scaledWidth, scaledHeight);
    const data = imageData.data;

    // Draw pixels back upscaled
    ctx.imageSmoothingEnabled = false;
    for (let y = 0; y < scaledHeight; y++) {
      for (let x = 0; x < scaledWidth; x++) {
        const idx = (y * scaledWidth + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const a = data[idx + 3];

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a / 255})`;
        ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
      }
    }
  }

  private animatePixelation() {
    // Start animation immediately
    const duration = 1500;
    const steps = 80;
    const stepTime = duration / steps;
    let currentStep = 0;

    this.pixelationInterval = window.setInterval(() => {
      currentStep++;
      // Ease out function for smoother animation
      const progress = currentStep / steps;
      const eased = 1 - (1 - progress) ** 3; // Cubic ease out

      this.pixelationLevel = 1 - eased;
      this.renderPixelatedImage();

      if (currentStep >= steps) {
        if (this.pixelationInterval) {
          clearInterval(this.pixelationInterval);
          this.pixelationInterval = undefined;
        }
        // Ensure canvas is hidden when done
        if (this.canvasElement) {
          this.canvasElement.style.opacity = "0";
        }
      }
    }, stepTime);
  }

  private startTitleAnimation() {
    this.currentSection = "title";
    this.animationPhase = "generating";
    this.generatingDots = 1;
    this.generatingStartTime = performance.now();

    // Start unified animation loop
    this.startTextAnimationLoop();
  }

  private startTextReveal(section: "title" | "artistStatement" | "myResponse") {
    this.currentSection = section;
    this.animationPhase = "revealing";
    this.currentTextSection = section;

    // Reset index to 0, animation loop will handle revealing
    this.currentTextIndex = 0;
  }

  private getTextForSection(section: "title" | "artistStatement" | "myResponse"): string {
    const exhibit = this.exhibit;
    if (!exhibit) return "";

    if (section === "title") {
      return exhibit.artworkTitle;
    } else if (section === "artistStatement") {
      return exhibit.artistStatement;
    } else if (section === "myResponse") {
      return exhibit.myResponse || "";
    }
    return "";
  }

  private updateRevealedText(section: "title" | "artistStatement" | "myResponse", index: number) {
    const fullText = this.getTextForSection(section);
    const text = fullText.slice(0, index);

    // Only update if the text actually changed (avoid unnecessary re-renders)
    let needsUpdate = false;
    if (section === "title" && this.revealedText.title !== text) {
      this.revealedText = { ...this.revealedText, title: text };
      needsUpdate = true;
    } else if (section === "artistStatement" && this.revealedText.artistStatement !== text) {
      this.revealedText = { ...this.revealedText, artistStatement: text };
      needsUpdate = true;
    } else if (section === "myResponse" && this.revealedText.myResponse !== text) {
      this.revealedText = { ...this.revealedText, myResponse: text };
      needsUpdate = true;
    }

    // Only request update if something changed
    if (needsUpdate) {
      this.requestUpdate();
    }
  }

  private startTextAnimationLoop() {
    // Clear any existing animation frame and timeout
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.textRevealTimeout) {
      clearTimeout(this.textRevealTimeout);
      this.textRevealTimeout = undefined;
    }

    const GENERATING_DURATION = 1000; // ms
    const GENERATING_DOT_INTERVAL = 250; // ms per dot change
    const TEXT_REVEAL_INTERVAL = MMAiExhibit.TEXT_REVEAL_INTERVAL; // ms per character

    let lastDotUpdateTime = 0;
    let textRevealStartTime = 0;

    const animate = (currentTime: number) => {
      // Stop if we're no longer in view
      if (!this.isInView) {
        this.animationFrameId = undefined;
        return;
      }

      // Initialize timing on first frame
      if (lastDotUpdateTime === 0 && this.animationPhase === "generating") {
        lastDotUpdateTime = currentTime;
      }

      // Handle generating phase (only for title)
      if (this.animationPhase === "generating" && this.currentSection === "title") {
        const generatingElapsed = currentTime - (this.generatingStartTime || 0);

        // Update dots animation
        if (currentTime - lastDotUpdateTime >= GENERATING_DOT_INTERVAL) {
          this.generatingDots = (this.generatingDots % 3) + 1;
          lastDotUpdateTime = currentTime;
          this.requestUpdate();
        }

        // Transition to revealing after generating duration
        if (generatingElapsed >= GENERATING_DURATION) {
          this.startTextReveal("title");
          textRevealStartTime = currentTime;
        }
      }

      // Handle revealing phase - use requestAnimationFrame with precise timing
      if (this.animationPhase === "revealing" && this.currentTextSection) {
        if (textRevealStartTime === 0) {
          textRevealStartTime = currentTime;
        }

        const fullText = this.getTextForSection(this.currentTextSection);
        const textLength = fullText.length;

        if (this.currentTextIndex < textLength) {
          // Calculate how many characters should be revealed based on elapsed time
          const elapsed = currentTime - textRevealStartTime;
          const targetIndex = Math.floor(elapsed / TEXT_REVEAL_INTERVAL);

          // Only reveal one character at a time, but check every frame
          if (targetIndex > this.currentTextIndex) {
            this.currentTextIndex = targetIndex;
            this.updateRevealedText(this.currentTextSection, this.currentTextIndex);
          }

          // Check if section is complete
          if (this.currentTextIndex >= textLength) {
            this.moveToNextSection();
            textRevealStartTime = 0; // Reset for next section
          }
        }
      }

      // Stop loop only if animation is complete
      if (this.animationPhase === "complete") {
        this.animationFrameId = undefined;
        return;
      }

      // Continue loop when actively animating
      const shouldContinue =
        this.animationPhase === "generating" ||
        (this.animationPhase === "revealing" &&
          this.currentTextIndex < this.getTextForSection(this.currentTextSection || "title").length);

      if (shouldContinue) {
        this.animationFrameId = requestAnimationFrame(animate) as unknown as number;
      } else {
        this.animationFrameId = undefined;
      }
    };

    // Start the loop
    this.animationFrameId = requestAnimationFrame(animate) as unknown as number;
  }

  private moveToNextSection() {
    const exhibit = this.exhibit;
    if (!exhibit) {
      this.animationPhase = "complete";
      this.currentSection = "complete";
      this.notifyAnimationComplete();
      return;
    }

    // Move to next section immediately (no delay)
    if (this.currentSection === "title") {
      if (exhibit.artistStatement) {
        this.startTextReveal("artistStatement");
      } else if (exhibit.myResponse) {
        this.startTextReveal("myResponse");
      } else {
        this.animationPhase = "complete";
        this.currentSection = "complete";
        this.notifyAnimationComplete();
      }
    } else if (this.currentSection === "artistStatement") {
      if (exhibit.myResponse) {
        this.startTextReveal("myResponse");
      } else {
        this.animationPhase = "complete";
        this.currentSection = "complete";
        this.notifyAnimationComplete();
      }
    } else if (this.currentSection === "myResponse") {
      this.animationPhase = "complete";
      this.currentSection = "complete";
      this.notifyAnimationComplete();
    }
  }

  private notifyAnimationComplete() {
    // Animation complete - no longer needed for coordination but keeping for potential future use
  }

  private cleanup() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = undefined;
    }
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = undefined;
    }
    if (this.textRevealTimeout) {
      clearTimeout(this.textRevealTimeout);
      this.textRevealTimeout = undefined;
    }
    if (this.pixelationInterval) {
      clearInterval(this.pixelationInterval);
      this.pixelationInterval = undefined;
    }
    // Clean up canvas
    if (this.canvasElement && this.canvasElement.parentElement) {
      this.canvasElement.parentElement.removeChild(this.canvasElement);
      this.canvasElement = undefined;
    }
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    // Re-setup observer if exhibit changes
    if (changedProperties.has("exhibit") && this.exhibit && !this.intersectionObserver) {
      this.setupIntersectionObserver();
    }
  }

  private getGeneratingText(): string {
    const dots = ".".repeat(this.generatingDots);
    return `Generating${dots}`;
  }

  static styles = css`
    :host {
      display: block;
    }

    .exhibit {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
      padding: 0;
      margin-bottom: 6rem;
      overflow: visible;
    }

    .exhibit-meta {
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #6b7280;
      margin-bottom: 1.5rem;
      grid-column: 1 / -1;
    }

    .image-column {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      position: relative;
      overflow: visible;
    }

    .artwork-container {
      position: relative;
      border-radius: 0.5rem;
      border: 1px solid rgba(148, 163, 184, 0.2);
      cursor: pointer;
      transition: transform 200ms ease, box-shadow 200ms ease;
    }

    .artwork-image-wrapper {
      border-radius: 0.5rem;
      overflow: hidden;
      position: relative;
    }

    .pixelation-canvas {
      border-radius: 0.5rem;
      transition: opacity 300ms ease-out;
    }

    .artwork-container:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    }

    .image-info-icon {
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: rgba(15, 23, 42, 0.85);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(148, 163, 184, 0.3);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 200ms ease;
      z-index: 10;
      padding: 0;
    }

    .image-info-icon:hover {
      background: rgba(15, 23, 42, 0.95);
      border-color: rgba(148, 163, 184, 0.5);
      opacity: 0.9;
      transform: scale(1.1);
    }

    .image-info-icon svg {
      width: 1.1rem;
      height: 1.1rem;
      fill: currentColor;
    }

    .artwork-image {
      width: 100%;
      height: auto;
      display: block;
      position: relative;
      z-index: 0;
    }

    .content-column {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .artwork-info {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      position: relative;
    }

    .artwork-title {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 600;
      letter-spacing: 0.01em;
      color: #f9fafb;
      line-height: 1.3;
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      flex-wrap: wrap;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }

    .artwork-title > span {
      flex: 1;
      min-width: 0;
    }

    .title-info-icon {
      width: 1.25rem;
      height: 1.25rem;
      border: none;
      background: transparent;
      color: #ffffff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 200ms ease;
      flex-shrink: 0;
      margin-top: 0.15rem;
      padding: 0;
      align-self: flex-start;
      flex-shrink: 0;
    }

    .title-info-icon:hover {
      opacity: 0.8;
      transform: scale(1.1);
    }

    .title-info-icon svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }

    .attribution {
      font-size: 0.85rem;
      color: #9ca3af;
      font-style: italic;
      margin-top: 0.25rem;
      flex-shrink: 0;
    }

    .interpretation-section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      transition: filter 200ms ease;
    }

    .interpretation-section.blurred {
      filter: blur(4px);
      opacity: 0.6;
      pointer-events: none;
    }

    .statement-block {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .statement-label {
      font-size: 0.7rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #9ca3af;
    }

    .statement-text {
      font-size: 1rem;
      color: #e5e7eb;
      line-height: 1.8;
      margin: 0;
    }

    .generating-text {
      font-size: 1rem;
      color: #9ca3af;
      font-style: italic;
      min-height: 1.5em;
    }

    .artwork-title.generating-text {
      font-size: 1.8rem;
      color: #9ca3af;
      font-style: italic;
      min-height: 1.2em;
    }

    .text-reveal-container {
      position: relative;
    }

    .text-placeholder {
      visibility: hidden;
      white-space: pre-wrap;
      word-wrap: break-word;
      margin: 0;
      pointer-events: none;
    }

    .text-content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      white-space: pre-wrap;
      word-wrap: break-word;
      margin: 0;
    }

    .text-content.hidden {
      visibility: hidden;
    }

    .artwork-info .text-reveal-container {
      position: relative;
      min-height: 2.5em;
      margin-bottom: 0.25rem;
    }

    .artwork-info .text-placeholder {
      display: block;
      font-size: 1.8rem;
      font-weight: 600;
      letter-spacing: 0.01em;
      line-height: 1.3;
      word-wrap: break-word;
      overflow-wrap: break-word;
      padding-right: 1.75rem;
    }

    .artwork-info .text-content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      font-size: 1.8rem;
      font-weight: 600;
      letter-spacing: 0.01em;
      line-height: 1.3;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }

    .artwork-info .text-content .title-info-icon {
      position: relative;
      vertical-align: baseline;
    }

    .statement-text.text-placeholder {
      display: block;
      font-size: 1rem;
      line-height: 1.8;
    }

    .statement-text.text-content {
      font-size: 1rem;
      line-height: 1.8;
    }

    .artist-statement {
      border-left: 3px solid var(--accent-color, #52c8f4);
      padding-left: 1.25rem;
    }

    .my-response {
      border-left: 3px solid #f9fafb;
      padding-left: 1.25rem;
    }

    .my-response .statement-text {
      color: #f3f4f6;
    }

    /* Popover styles */
    .popover {
      position: absolute;
      z-index: 10000;
      background: radial-gradient(
          circle at top left,
          rgba(15, 23, 42, 0.98),
          rgba(15, 23, 42, 0.95)
        ),
        rgba(5, 8, 22, 0.95);
      border: 1px solid rgba(148, 163, 184, 0.3);
      border-radius: 0.75rem;
      padding: 1.25rem;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(12px);
      max-width: 400px;
      min-width: 300px;
      animation: popoverIn 200ms ease-out;
      pointer-events: auto;
    }

    .popover-title {
      font-size: 0.75rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #6b7280;
      margin-bottom: 0.75rem;
    }

    .popover-text {
      font-size: 0.88rem;
      color: #9ca3af;
      line-height: 1.7;
      margin: 0;
    }

    .popover-section {
      margin-bottom: 1.25rem;
    }

    .popover-section:last-child {
      margin-bottom: 0;
    }

    .artwork-info .text-reveal-container {
      position: relative;
    }

    .title-popover {
      position: absolute;
      top: calc(100% + 0.5rem);
      left: 0;
      min-width: 300px;
    }

    .image-popover {
      position: absolute;
      top: 0;
      max-width: none;
      min-width: auto;
    }

    .image-popover.right-side {
      left: 100% !important;
      margin-left: 1rem !important;
      right: auto !important;
      top: 0 !important;
      bottom: auto !important;
      width: 100% !important;
      max-width: none !important;
      min-width: 300px !important;
      transform: none !important;
    }

    .image-popover.left-side {
      right: 100% !important;
      margin-right: 1rem !important;
      left: auto !important;
      top: 0 !important;
      bottom: auto !important;
      width: 100% !important;
      max-width: none !important;
      min-width: 300px !important;
      transform: none !important;
    }

    @media (max-width: 900px) {
      .image-popover.right-side,
      .image-popover.left-side {
        left: auto !important;
        right: 0 !important;
        top: calc(100% + 0.5rem) !important;
        width: 100% !important;
      }
    }

    @keyframes popoverIn {
      from {
        opacity: 0;
        transform: translateY(-8px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .popover-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 9999;
      background: transparent;
      pointer-events: auto;
    }

    /* Lightbox */
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.95);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      cursor: pointer;
    }

    .lightbox-image {
      max-width: 90vw;
      max-height: 90vh;
      object-fit: contain;
      cursor: default;
    }

    .lightbox-close {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      background: none;
      border: none;
      color: #fff;
      font-size: 2rem;
      cursor: pointer;
      padding: 0.5rem;
      line-height: 1;
      opacity: 0.8;
      transition: opacity 150ms;
    }

    .lightbox-close:hover {
      opacity: 1;
    }

    /* Responsive */
    @media (max-width: 900px) {
      .exhibit {
        grid-template-columns: 1fr;
        gap: 2rem;
        margin-bottom: 4rem;
      }

      .exhibit-meta,
      .image-column,
      .content-column {
        grid-column: 1;
      }

      .artwork-title {
        font-size: 1.5rem;
        line-height: 1.35;
      }

      .artwork-info .text-placeholder {
        font-size: 1.5rem;
        line-height: 1.35;
      }

      .artwork-info .text-content {
        font-size: 1.5rem;
        line-height: 1.35;
      }

      .artwork-info .text-reveal-container {
        min-height: 2.2em;
      }

      .popover {
        max-width: calc(100vw - 2rem);
        left: 0 !important;
        right: 0 !important;
        margin-left: 1rem;
        margin-right: 1rem;
      }

      .image-popover {
        left: auto !important;
        right: 0 !important;
        top: calc(100% + 0.5rem) !important;
      }
    }
  `;

  render() {
    const exhibit = this.exhibit;
    if (!exhibit) return null;

    const indexLabel = this.index.toString().padStart(2, "0");
    const isOdd = this.index % 2 === 1;

    const imageColumn = html`
      <div class="image-column">
        <div class="artwork-container" @click=${this.handleImageClick} @dblclick=${this.handleImageDoubleClick}>
          <div class="artwork-image-wrapper">
            <img
              src="${this.getImagePath()}"
              alt="${exhibit.artworkTitle}"
              class="artwork-image"
            />
          </div>
          <button
            class="image-info-icon"
            @click=${this.toggleImagePopover}
            aria-label="About this image"
            title="Click image for more information"
          >
            <svg aria-hidden="true" focusable="false" viewBox="0 0 512 512">
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
            </svg>
          </button>
        </div>
        ${
          this.imagePopoverOpen
            ? html`
              <div class="popover-overlay" @click=${this.closeImagePopover}></div>
              <div class="popover image-popover ${isOdd ? "right-side" : "left-side"}">
                <div class="popover-section">
                  <div class="popover-title">Visual Concept</div>
                  <p class="popover-text">${exhibit.visualConcept}</p>
                </div>
                <div class="popover-section">
                  <div class="popover-title">Image Generation Prompt</div>
                  <p class="popover-text">${exhibit.imagePrompt}</p>
                </div>
              </div>
            `
            : null
        }
      </div>
    `;

    const contentColumn = html`
      <div class="content-column">
        <!-- Title & Attribution -->
        <div class="artwork-info">
          <div class="text-reveal-container" style="position: relative;">
            <!-- Placeholder to reserve space -->
            <div class="text-placeholder artwork-title">${exhibit.artworkTitle}</div>
            <!-- Actual content -->
            ${
              this.animationPhase === "idle"
                ? html`<h2 class="artwork-title generating-text text-content">${this.getGeneratingText()}</h2>`
                : this.currentSection === "title" &&
                    (this.animationPhase === "generating" || this.animationPhase === "revealing")
                  ? this.animationPhase === "generating"
                    ? html`<h2 class="artwork-title generating-text text-content">${this.getGeneratingText()}</h2>`
                    : html`<h2 class="artwork-title text-content"><span>${this.revealedText.title}</span><button class="title-info-icon" @click=${this.toggleTitlePopover} aria-label="Title explanation">
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 512 512">
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                    </svg>
                  </button></h2>`
                  : this.currentSection !== "title" || this.animationPhase === "complete"
                    ? html`<h2 class="artwork-title text-content"><span>${exhibit.artworkTitle}</span><button class="title-info-icon" @click=${this.toggleTitlePopover} aria-label="Title explanation">
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 512 512">
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                    </svg>
                  </button></h2>`
                    : html`<h2 class="artwork-title text-content hidden">${exhibit.artworkTitle}</h2>`
            }
            ${
              this.titlePopoverOpen
                ? html`
                  <div class="popover-overlay" @click=${this.closeTitlePopover}></div>
                  <div class="popover title-popover">
                    <div class="popover-title">Title Explanation</div>
                    <p class="popover-text">${exhibit.titleExplanation}</p>
                  </div>
                `
                : null
            }
          </div>
          <div class="attribution">
              Interpreted by ${this.getSystemDisplayName()}, 2026
            </div>
        </div>

        <!-- Artist Statement & My Response -->
        <div class="interpretation-section ${this.titlePopoverOpen || this.imagePopoverOpen ? "blurred" : ""}">
          <div class="statement-block artist-statement">
            <div class="statement-label">Artist Statement</div>
            <div class="text-reveal-container">
              <!-- Placeholder to reserve space -->
              <p class="statement-text text-placeholder">${exhibit.artistStatement}</p>
              <!-- Actual content -->
              ${
                this.currentSection === "artistStatement" && this.animationPhase === "revealing"
                  ? html`<p class="statement-text text-content">${this.revealedText.artistStatement}</p>`
                  : this.currentSection === "myResponse" || this.currentSection === "complete"
                    ? html`<p class="statement-text text-content">${exhibit.artistStatement}</p>`
                    : html`<p class="statement-text text-content hidden">${exhibit.artistStatement}</p>`
              }
            </div>
          </div>

          <div class="statement-block my-response">
            <div class="statement-label">My Response</div>
            <div class="text-reveal-container">
              ${
                exhibit.myResponse
                  ? html`
                    <!-- Placeholder to reserve space -->
                    <p class="statement-text text-placeholder">${exhibit.myResponse}</p>
                    <!-- Actual content -->
                    ${
                      this.currentSection === "myResponse" && this.animationPhase === "revealing"
                        ? html`<p class="statement-text text-content">${this.revealedText.myResponse}</p>`
                        : this.currentSection === "complete"
                          ? html`<p class="statement-text text-content">${exhibit.myResponse}</p>`
                          : html`<p class="statement-text text-content hidden">${exhibit.myResponse}</p>`
                    }
                  `
                  : html`<p class="statement-text" style="color: #6b7280; font-style: italic;">
                    [Response to be added]
                  </p>`
              }
            </div>
          </div>
        </div>
      </div>
    `;

    return html`
      <article
        class="exhibit"
        style=${`--accent-color: ${this.accent};`}
        aria-label=${exhibit.artworkTitle}
      >
        <!-- Exhibit Meta -->
        <div class="exhibit-meta">
          Exhibit ${indexLabel} — ${exhibit.inputType}
        </div>

        <!-- Alternating Layout: Image Left/Right -->
        ${isOdd ? imageColumn : contentColumn}
        ${isOdd ? contentColumn : imageColumn}
      </article>

      <!-- Lightbox -->
      ${
        this.lightboxOpen
          ? html`
            <div class="lightbox" @click=${this.closeLightbox}>
              <button class="lightbox-close" @click=${this.closeLightbox}>
                ×
              </button>
              <img
                src="${this.getImagePath()}"
                alt="${exhibit.artworkTitle}"
                class="lightbox-image"
                @click=${(e: Event) => e.stopPropagation()}
              />
            </div>
          `
          : null
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-ai-exhibit": MMAiExhibit;
  }
}
