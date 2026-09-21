// Tracks whether the initial entry loader has already executed in this browser session.
// Full browser reload or initial open re-instantiates this in-memory variable to false.
// Client-side navigations (e.g. from /about, /governance back to /) keep this true.

let hasInitialHeroLoaded = false;

export function hasHeroLoaded(): boolean {
  return hasInitialHeroLoaded;
}

export function markHeroLoaded(): void {
  hasInitialHeroLoaded = true;
}
