// service-worker.js
const CACHE_NAME = "my-unity-app-v1";

const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./Build/Builds.loader.js",
  "./Build/Builds.framework.js.gz",
  "./Build/Builds.data.gz",
  "./Build/Builds.wasm.gz",
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
