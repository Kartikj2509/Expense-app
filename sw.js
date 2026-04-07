// sw.js
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Activated');
    return self.clients.claim();
});

// THIS is the magic line Android requires to show the Install prompt!
self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request).catch(() => {
            console.log('App is offline. Advanced offline caching can be added later.');
        })
    );
});
