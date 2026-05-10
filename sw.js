const CACHE_NAME = 'dexo-market-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js'
];

// O'rnatish jarayoni
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Fayllarni xotiradan olish
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
