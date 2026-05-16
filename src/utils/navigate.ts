export function navigate(path: string) {
  history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function navigateWithAnchor(path: string, anchor: string) {
  navigate(path);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.dispatchEvent(new CustomEvent("navigate-anchor", { detail: { anchor } }));
    });
  });
}
