self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("fff-cache").then(cache => {
      return cache.addAll(["./", "./FSGS-Food-Finder.html"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});