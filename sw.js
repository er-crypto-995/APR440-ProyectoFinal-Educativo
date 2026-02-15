self.addEventListener('fetch', (event) => {
    // Esto intercepta las peticiones y permite trabajar offline
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});