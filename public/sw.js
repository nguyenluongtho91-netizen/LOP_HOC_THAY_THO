// Service Worker cho Lớp Học Thầy Thọ PWA
const CACHE_NAME = 'thay-tho-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Network-first với fallback
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  // Bỏ qua các API Supabase, Google Apps Script, Vercel API để luôn nhận dữ liệu thời gian thực
  const url = new URL(event.request.url);
  if (
    url.hostname.includes('supabase') ||
    url.hostname.includes('googleapis') ||
    url.hostname.includes('script.google.com') ||
    url.pathname.startsWith('/api/')
  ) {
    return;
  }

  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
