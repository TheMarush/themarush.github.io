import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

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
    this.syncFromPath();
    document.addEventListener("click", this._handleDocumentClick.bind(this));
    window.addEventListener("popstate", this._handlePopState.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this._handleDocumentClick.bind(this));
    window.removeEventListener("popstate", this._handlePopState.bind(this));
  }

  private _handlePopState() {
    this.syncFromPath();
  }

  private syncFromPath() {
    const segments = window.location.pathname.split("/").filter(Boolean);
    const mainPage = segments[0] || (this.items.length > 0 ? this.items[0].id : "");

    const mainItem = this.items.find((item) => item.id === mainPage);
    if (mainItem) {
      this.activeItem = mainPage;
      if (segments.length > 1) {
        const subPage = segments[1];
        if (mainItem.submenu) {
          const subItem = mainItem.submenu.find((sub) => sub.id === subPage);
          if (subItem) {
            this.activeItem = subPage;
            this.expandedItems = new Set([mainPage]);
          }
        } else {
          this.activeItem = subPage;
        }
      }
    } else if (this.items.length > 0 && !this.activeItem) {
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

    const path = parentId ? `/${parentId}/${itemId}` : `/${itemId}`;
    if (window.location.pathname !== path) {
      history.pushState({}, "", path);
      window.dispatchEvent(new PopStateEvent("popstate"));
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

  private _isActiveParent(item: MenuItem): boolean {
    if (this.activeItem === item.id) return true;
    if (item.submenu) return item.submenu.some((sub) => sub.id === this.activeItem);
    return false;
  }

  private _renderDesktopSubmenu() {
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
      <div class="submenu-bar">
        ${parentItem.submenu.map(
          (subitem) => html`
          <button
            class="submenu-link ${this.activeItem === subitem.id ? "active" : ""}"
            @click=${() => this._selectItem(subitem.id, parentItem?.id)}>
            ${subitem.label}
          </button>
        `,
        )}
      </div>
    `;
  }

  render() {
    return html`
      <div class="menu-container">
        <header class="navbar">
          <button class="nav-brand" @click=${() => this._selectItem(this.items[0]?.id)}>
            The Marush
          </button>

          <nav class="nav-links" role="navigation" aria-label="Main navigation">
            ${this.items.map(
              (item) => html`
              <button
                class="nav-link ${this._isActiveParent(item) ? "active" : ""}"
                @click=${() => this._selectItem(item.id)}>
                ${item.label}
              </button>
            `,
            )}
          </nav>

          <div class="nav-social">
            <slot name="header-end"></slot>
          </div>

          <button
            class="nav-burger ${this.isMenuOpen ? "open" : ""}"
            @click=${this._toggleMenu}
            aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </header>

        <div class="mobile-drawer ${this.position} ${this.isMenuOpen ? "open" : ""}">
          ${this.items.map(
            (item) => html`
            <div class="drawer-item">
              <div class="drawer-row">
                <button
                  class="drawer-link ${this._isActiveParent(item) ? "active" : ""}"
                  @click=${() => this._selectItem(item.id)}>
                  ${item.label}
                </button>
                ${
                  item.submenu
                    ? html`
                  <button
                    class="drawer-caret ${this.expandedItems.has(item.id) ? "expanded" : ""}"
                    @click=${(e: Event) => this._toggleSubmenu(item.id, e)}>
                    ▶
                  </button>
                `
                    : ""
                }
              </div>
              ${
                item.submenu && this.expandedItems.has(item.id)
                  ? html`
                <div class="drawer-sub">
                  ${item.submenu.map(
                    (sub) => html`
                    <button
                      class="drawer-link sub ${this.activeItem === sub.id ? "active" : ""}"
                      @click=${() => this._selectItem(sub.id, item.id)}>
                      ${sub.label}
                    </button>
                  `,
                  )}
                </div>
              `
                  : ""
              }
            </div>
          `,
          )}
        </div>

        ${this._renderDesktopSubmenu()}

        <div class="menu-content" @click=${this._closeMenu}>
          <slot name="${this.activeItem}"></slot>
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .menu-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100%;
    }

    /* ── Navbar ── */
    .navbar {
      position: sticky;
      top: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      padding: 0 1.5rem;
      height: 3.5rem;
      background: rgba(12, 12, 12, 0.97);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(82, 200, 244, 0.2);
      box-sizing: border-box;
    }

    .nav-brand {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 0.95rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #52C8F4;
      padding: 0;
      margin-right: 2rem;
      flex-shrink: 0;
      font-family: inherit;
      white-space: nowrap;
    }

    .nav-brand:hover {
      opacity: 0.75;
    }

    .nav-links {
      display: flex;
      align-items: center;
      flex: 1;
      overflow: hidden;
    }

    .nav-link {
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      cursor: pointer;
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      color: #9ca3af;
      padding: 0 0.875rem;
      height: 3.5rem;
      transition: color 0.2s, border-color 0.2s;
      white-space: nowrap;
      font-family: inherit;
      flex-shrink: 0;
    }

    .nav-link:hover {
      color: #f1f5f9;
    }

    .nav-link.active {
      color: #52C8F4;
      border-bottom-color: #52C8F4;
    }

    /* Social icons area — visually separated from nav links */
    .nav-social {
      display: flex;
      align-items: center;
      height: 100%;
      padding-left: 1rem;
      margin-left: auto;
      border-left: 1px solid rgba(255, 255, 255, 0.1);
      flex-shrink: 0;
      gap: 0.125rem;
    }

    /* Mobile burger */
    .nav-burger {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.4rem;
      flex-direction: column;
      gap: 5px;
      align-items: center;
      justify-content: center;
      margin-left: 0.625rem;
      flex-shrink: 0;
      border-radius: 4px;
    }

    .nav-burger:hover {
      background: rgba(255, 255, 255, 0.07);
    }

    .nav-burger span {
      width: 20px;
      height: 2px;
      background: #d1d5db;
      border-radius: 2px;
      transition: 0.25s ease;
      display: block;
    }

    .nav-burger.open span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    .nav-burger.open span:nth-child(2) {
      opacity: 0;
      transform: scaleX(0);
    }
    .nav-burger.open span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }

    /* ── Mobile overrides ── */
    @media (max-width: 767px) {
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
      }

      .menu-container {
        padding-top: 3.5rem;
      }

      .nav-links {
        display: none;
      }

      .nav-social {
        border-left: none;
        padding-left: 0;
      }

      .nav-burger {
        display: flex;
      }
    }

    /* ── Mobile drawer ── */
    .mobile-drawer {
      display: none;
      position: fixed;
      top: 3.5rem;
      width: 240px;
      height: calc(100vh - 3.5rem);
      background: rgba(10, 10, 10, 0.98);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      flex-direction: column;
      padding: 1rem 0.75rem;
      gap: 0.125rem;
      z-index: 99;
      overflow-y: auto;
      transition: transform 0.3s ease;
    }

    .mobile-drawer.left {
      left: 0;
      border-right: 1px solid rgba(82, 200, 244, 0.15);
      transform: translateX(-100%);
    }

    .mobile-drawer.right {
      right: 0;
      border-left: 1px solid rgba(82, 200, 244, 0.15);
      transform: translateX(100%);
    }

    .mobile-drawer.open {
      transform: translateX(0);
    }

    @media (max-width: 767px) {
      .mobile-drawer {
        display: flex;
      }
    }

    .drawer-item {
      display: flex;
      flex-direction: column;
    }

    .drawer-row {
      display: flex;
      align-items: center;
    }

    .drawer-link {
      flex: 1;
      background: none;
      border: none;
      cursor: pointer;
      text-align: left;
      font-size: 0.83rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #9ca3af;
      padding: 0.75rem 0.75rem;
      border-radius: 6px;
      transition: color 0.2s, background 0.2s;
      font-family: inherit;
    }

    .drawer-link:hover {
      color: #f1f5f9;
      background: rgba(255, 255, 255, 0.05);
    }

    .drawer-link.active {
      color: #52C8F4;
      background: rgba(82, 200, 244, 0.08);
    }

    .drawer-link.sub {
      font-size: 0.75rem;
      font-weight: 500;
      padding-left: 1.5rem;
      letter-spacing: 0.03em;
    }

    .drawer-caret {
      background: none;
      border: none;
      cursor: pointer;
      color: #6b7280;
      font-size: 0.65rem;
      padding: 0.5rem 0.625rem;
      transition: transform 0.2s;
      font-family: inherit;
    }

    .drawer-caret.expanded {
      transform: rotate(90deg);
    }

    .drawer-sub {
      display: flex;
      flex-direction: column;
      animation: slideIn 0.2s ease;
    }

    /* ── Desktop submenu bar ── */
    .submenu-bar {
      display: flex;
      gap: 0.375rem;
      justify-content: center;
      flex-wrap: wrap;
      padding: 0.625rem 1.5rem;
      background: rgba(82, 200, 244, 0.04);
      border-bottom: 1px solid rgba(82, 200, 244, 0.12);
      animation: slideIn 0.25s ease;
    }

    .submenu-link {
      background: transparent;
      border: 1px solid rgba(82, 200, 244, 0.2);
      cursor: pointer;
      font-size: 0.73rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #9ca3af;
      padding: 0.375rem 0.875rem;
      border-radius: 4px;
      transition: all 0.2s;
      font-family: inherit;
    }

    .submenu-link:hover {
      color: #f1f5f9;
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(82, 200, 244, 0.4);
    }

    .submenu-link.active {
      color: #52C8F4;
      background: rgba(82, 200, 244, 0.1);
      border-color: #52C8F4;
    }

    /* ── Content ── */
    .menu-content {
      flex: 1;
      min-height: 200px;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-6px);
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
