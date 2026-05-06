// service-worker.js
const CACHE_NAME = "my-unity-app-v1";

const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./Build/YOUR_BUILD.loader.js",
  "./Build/YOUR_BUILD.framework.js.gz",
  "./Build/YOUR_BUILD.data.gz",
  "./Build/YOUR_BUILD.wasm.gz",
  "./TemplateData/style.css"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
