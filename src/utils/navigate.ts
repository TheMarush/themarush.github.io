/* Every page is mounted at once, so a route change keeps the old scroll position unless we reset it */
export function navigate(path: string) {
  history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

export function navigateWithAnchor(path: string, anchor: string) {
  navigate(path);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.dispatchEvent(new CustomEvent("navigate-anchor", { detail: { anchor } }));
    });
  });
}
