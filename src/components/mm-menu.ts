import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./mm-button.ts";

export interface MenuItem {
  id: string;
  label: string;
  submenu?: MenuItem[];
}

@customElement("mm-menu")
export class MMMenu extends LitElement {
  @property({ type: Array })
  items: MenuItem[] = [];

  @property({ type: String })
  position: "left" | "right" = "right";

  @state()
  private activeItem: string = "";

  @state()
  private isMenuOpen: boolean = false;

  @state()
  private expandedItems: Set<string> = new Set();

  connectedCallback() {
    super.connectedCallback();
    this.syncFromHash();
    document.addEventListener("click", this._handleDocumentClick.bind(this));
    window.addEventListener("hashchange", this._handleHashChange.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this._handleDocumentClick.bind(this));
    window.removeEventListener("hashchange", this._handleHashChange.bind(this));
  }

  private _handleHashChange() {
    this.syncFromHash();
  }

  private syncFromHash() {
    const hash = window.location.hash || "";
    const cleaned = hash.replace(/^#\/?/, "");
    const segments = cleaned.split("/").filter(Boolean);

    // First segment is the main page (e.g., "gallery", "projects")
    const mainPage = segments[0] || (this.items.length > 0 ? this.items[0].id : "");

    // Check if this is a main menu item
    const mainItem = this.items.find((item) => item.id === mainPage);
    if (mainItem) {
      this.activeItem = mainPage;
      // If there's a second segment and the main item has a submenu, select that too
      if (segments.length > 1 && mainItem.submenu) {
        const subPage = segments[1];
        const subItem = mainItem.submenu.find((sub) => sub.id === subPage);
        if (subItem) {
          this.activeItem = subPage;
          this.expandedItems = new Set([mainPage]);
        }
      }
    } else if (this.items.length > 0 && !this.activeItem) {
      // Default to first item if no valid hash
      this.activeItem = this.items[0].id;
    }
  }

  private _handleDocumentClick(e: Event) {
    if (!this.contains(e.target as Node)) {
      this.isMenuOpen = false;
    }
  }

  private _selectItem(itemId: string, parentId?: string) {
    this.activeItem = itemId;
    this.isMenuOpen = false;

    // Update URL hash - use hierarchical path for submenu items
    const hash = parentId ? `#/${parentId}/${itemId}` : `#/${itemId}`;
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    }

    this.dispatchEvent(
      new CustomEvent("menu-change", {
        detail: { activeItem: itemId },
        bubbles: true,
      }),
    );
  }

  private _toggleSubmenu(itemId: string, e: Event) {
    e.stopPropagation();
    const newExpanded = new Set(this.expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    this.expandedItems = newExpanded;
  }

  private _toggleMenu(e: Event) {
    e.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  private _closeMenu() {
    this.isMenuOpen = false;
  }

  private _renderDesktopSubmenu() {
    // Find the parent menu item that has a submenu and contains the active submenu item
    let parentItem: MenuItem | undefined;
    for (const item of this.items) {
      if (item.submenu) {
        const hasActiveSubitem = item.submenu.some((sub) => sub.id === this.activeItem);
        if (hasActiveSubitem || this.activeItem === item.id) {
          parentItem = item;
          break;
        }
      }
    }

    if (!parentItem?.submenu) return "";

    return html`
      <div class="submenu-desktop">
        ${parentItem.submenu.map(
          (subitem) => html`
          <mm-button 
            cta="${subitem.label}"
            class="submenu-item ${this.activeItem === subitem.id ? "active" : ""}"
            .onClick=${() => this._selectItem(subitem.id, parentItem?.id)}>
          </mm-button>
        `,
        )}
      </div>
    `;
  }

  render() {
    return html`
      <div class="menu-container">
        <div class="burger-container ${this.position}">
          <button class="burger-btn" @click=${this._toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <nav class="menu-nav ${this.position} ${this.isMenuOpen ? "open" : ""}" @click=${this._closeMenu}>
          ${this.items.map(
            (item) => html`
            <div class="menu-item-container">
              <div class="menu-item-wrapper">
                <mm-button 
                  cta="${item.label}"
                  class="${this.activeItem === item.id && !item.submenu?.some((sub) => sub.id === this.activeItem) ? "active" : ""}"
                  .onClick=${() => this._selectItem(item.id)}>
                </mm-button>
                ${
                  item.submenu
                    ? html`
                  <button class="submenu-toggle" @click=${(e: Event) => this._toggleSubmenu(item.id, e)}>
                    <span class="caret ${this.expandedItems.has(item.id) ? "expanded" : ""}">▶</span>
                  </button>
                `
                    : ""
                }
              </div>
              ${
                item.submenu && this.expandedItems.has(item.id)
                  ? html`
                <div class="submenu-mobile">
                  ${item.submenu.map(
                    (subitem) => html`
                    <mm-button 
                      cta="${subitem.label}"
                      class="submenu-item ${this.activeItem === subitem.id ? "active" : ""}"
                      .onClick=${() => this._selectItem(subitem.id, item.id)}>
                    </mm-button>
                  `,
                  )}
                </div>
              `
                  : ""
              }
            </div>
          `,
          )}
        </nav>
        ${this._renderDesktopSubmenu()}
        <div class="menu-content" @click=${this._closeMenu}>
          <slot name="${this.activeItem}"></slot>
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      width: 100%;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .menu-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
    }

    .menu-nav {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .menu-nav mm-button.active {
      --button-bg: #0a71ac;
      --button-color: #fff;
      transform: scale(1.05);
    }

    .menu-content {
      min-height: 200px;
      padding: 1rem;
      margin: 0 1rem;
      border: 2px solid #52C8F4;
      border-radius: 0.5rem;
      background-color: rgba(82, 200, 244, 0.1);
    }

    @media (min-width: 768px) {
      .menu-content {
        margin: 0 5rem;
      }
    }

    @media (min-width: 1024px) {
      .menu-content {
        margin: 0 10rem;
      }
    }

    .burger-container {
      display: none;
    }

    .burger-btn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .burger-btn span {
      width: 25px;
      height: 3px;
      background: #333;
      transition: 0.3s;
    }

    @media (max-width: 767px) {
      .menu-container {
        position: relative;
      }

      .burger-container {
        display: flex;
        justify-content: flex-end;
        padding: 0.25rem;
      }

      .burger-container.left {
        justify-content: flex-start;
      }

      .burger-btn {
        background: rgba(15, 23, 42, 0.05);
        border-radius: 8px;
        padding: 0.75rem;
      }

      .menu-nav {
        position: fixed;
        top: 0;
        width: max-content;
        height: 100vh;
        background: rgba(15, 23, 42, 0.03);
        backdrop-filter: blur(10px);
        flex-direction: column;
        padding: 0.75rem;
        z-index: 1000;
        justify-content: start;
        transition: 0.3s ease;
      }

      .menu-nav.right {
        right: -100%;
        border-left: 1px solid rgba(15, 23, 42, 0.08);
      }

      .menu-nav.left {
        left: -100%;
        border-right: 1px solid rgba(15, 23, 42, 0.08);
      }

      .menu-nav.right.open {
        right: 0;
      }

      .menu-nav.left.open {
        left: 0;
      }

      .menu-content {
        margin: 0;
      }
    }

    .menu-item-container {
      display: contents;
    }

    .menu-item-wrapper {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .submenu-toggle {
      background: none !important;
      border: none;
      cursor: pointer;
      padding: 0.25rem;
      display: none;
      outline: none;
      -webkit-tap-highlight-color: transparent;
    }

    .submenu-toggle:hover,
    .submenu-toggle:focus,
    .submenu-toggle:active {
      background: none !important;
      outline: none;
    }

    .caret {
      font-size: 0.75rem;
      transition: transform 0.2s ease;
      display: inline-block;
    }

    .caret.expanded {
      transform: rotate(90deg);
    }

    .submenu-desktop {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      flex-wrap: wrap;
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(82, 200, 244, 0.3);
      animation: slideInFromTop 0.3s ease-out;
    }

    .submenu-desktop .submenu-item {
      --button-bg: #3a9fc6;
      --button-color: #000;
      font-size: 0.9rem;
      width: auto;
      min-width: 8rem;
    }

    .submenu-mobile {
      display: none;
    }

    @media (max-width: 767px) {
      .menu-item-container {
        display: block;
        width: 100%;
      }

      .menu-item-wrapper {
        width: 100%;
      }

      .submenu-toggle {
        display: block;
      }

      .submenu-desktop {
        display: none;
      }

      .submenu-mobile {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding-left: 1rem;
        margin-top: 0.5rem;
        animation: slideInFromTop 0.3s ease-out;
      }

      .submenu-mobile .submenu-item {
        --button-bg: #3a9fc6;
        --button-color: #000;
        font-size: 0.9rem;
        width: calc(100% - 1rem);
      }
    }

    @media (prefers-color-scheme: dark) {
      @media (max-width: 767px) {
        .burger-container {
        }

        .burger-btn {
          background: rgba(248, 250, 252, 0.05);
        }

        .burger-btn span {
          background: #f1f5f9;
        }

        .menu-nav.right {
          background: rgba(248, 250, 252, 0.03);
          border-left-color: rgba(248, 250, 252, 0.08);
        }

        .menu-nav.left {
          background: rgba(248, 250, 252, 0.03);
          border-right-color: rgba(248, 250, 252, 0.08);
        }
      }
    }

    @keyframes slideInFromTop {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "mm-menu": MMMenu;
  }
}
