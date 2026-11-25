// Keeps the app's own files on the phone so it opens offline.
// The page is always fetched fresh when online (so updates arrive at once); the saved copy is used only without a connection.
// Price and data requests go to other sites and are not touched here; the page keeps its own saved copy of those.
const CACHE = "satoshi-levels-v32";
const FILES = ["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return;
  const isPage = req.mode === "navigate";
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(isPage ? "index.html" : req, copy)); }
      return res;
    }).catch(() => caches.match(isPage ? "index.html" : req).then(r => r || caches.match("./")))
  );
});
