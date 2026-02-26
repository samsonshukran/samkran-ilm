// ===== SAMKRAN ILM PROFESSIONAL SERVICE WORKER =====
// Version: 1.0.3
// Features: Auto-update cache, offline audio, background sync ready
// FIXED: Updated audio file names to match your exact naming convention

const CACHE_VERSION = "v1.0.3";
const CACHE_NAME = `samkran-ilm-${CACHE_VERSION}`;

// Static assets that are essential for the app to work offline
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/names.html",
  "/arabic.html",
  "/juzAmma.html",
  "/dua.html",
  "/offline.html",
  "/css/style.css",
  "/js/main.js",
  "/js/namesData.js",
  "/js/arabic-data.js",
  "/js/arabic.js",
  "/js/juzAmmaData.js",
  "/js/juzAmma.js",
  "/js/dua.js",
  "/js/quran-duas.js",
  "/js/hadith-duas.js",
  "/js/dhikr-data.js",
  "/manifest.json",
  "/icons/icon-72.png",
  "/icons/icon-96.png",
  "/icons/icon-128.png",
  "/icons/icon-144.png",
  "/icons/icon-152.png",
  "/icons/icon-192.png",
  "/icons/icon-384.png",
  "/icons/icon-512.png"
];

// Audio files to cache (Juz 'Amma surahs) - Using YOUR exact naming
const AUDIO_ASSETS = [
  "/audio/Abasa.mp3",
  "/audio/A-Dwuhaa.mp3",
  "/audio/Al-Aala.mp3",
  "/audio/Al-Aala-1.mp3",
  "/audio/Al-Adiyah.mp3",
  "/audio/Al-Alaq.mp3",
  "/audio/Al-Asr.mp3",
  "/audio/A-Layl.mp3",
  "/audio/Al-Balad.mp3",
  "/audio/Al-Balad-1.mp3",
  "/audio/Al-Bayyinah.mp3",
  "/audio/Al-Burudji.mp3",
  "/audio/Al-Fajri.mp3",
  "/audio/Al-Falaq.mp3",
  "/audio/Al-Fatihah.mp3",
  "/audio/Al-Fiil.mp3",
  "/audio/Al-Ghashiyah.mp3",
  "/audio/Al-Ghashiyah-1.mp3",
  "/audio/Al-Humazah.mp3",
  "/audio/Al-Ikhlas.mp3",
  "/audio/Al-Infitwaar.mp3",
  "/audio/Al-Inshiqaq.mp3",
  "/audio/Al-Inshiqaq-1.mp3",
  "/audio/Al-Kawthar.mp3",
  "/audio/Al-Masad.mp3",
  "/audio/Al-Mauun.mp3",
  "/audio/Al-Mutwafifin.mp3",
  "/audio/Al-Mutwafifin-1.mp3",
  "/audio/Al-Qaariah.mp3",
  "/audio/Al-Qadri.mp3",
  "/audio/Al-Quraysh.mp3",
  "/audio/A-Naas.mp3",
  "/audio/A-Naaziah.mp3",
  "/audio/A-Naba-u.mp3",
  "/audio/A-Nasr.mp3",
  "/audio/A-Shams.mp3",
  "/audio/A-Sharh.mp3",
  "/audio/A-Takwir.mp3",
  "/audio/At-Takaathur.mp3",
  "/audio/At-Tiin.mp3",
  "/audio/At-Twariq.mp3",
  "/audio/At-Twariq-1.mp3",
  "/audio/Az-Zilzalah.mp3"
];

// Combine all assets
const ALL_ASSETS = [...STATIC_ASSETS, ...AUDIO_ASSETS];

// ===== INSTALL EVENT =====
// Cache all static assets immediately
self.addEventListener("install", (event) => {
  console.log(`🔄 Service Worker installing (${CACHE_VERSION})...`);
  
  // Force waiting service worker to become active immediately
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log("✅ Caching static assets...");
        // Use cache.addAll with error handling for each asset
        return Promise.allSettled(
          STATIC_ASSETS.map(asset => 
            cache.add(asset).catch(err => {
              console.warn(`⚠️ Failed to cache ${asset}:`, err.message);
            })
          )
        );
      })
      .then(() => {
        console.log("✅ Service Worker installed successfully");
      })
  );
});

// ===== ACTIVATE EVENT =====
// Clean up old caches and take control of all clients
self.addEventListener("activate", (event) => {
  console.log("🔄 Service Worker activating...");
  
  event.waitUntil(
    Promise.all([
      // Clean up old cache versions
      caches.keys().then((keys) => {
        return Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME && key.startsWith('samkran-ilm-')) {
              console.log(`🗑️ Deleting old cache: ${key}`);
              return caches.delete(key);
            }
          })
        );
      }),
      // Take control of all clients immediately
      self.clients.claim()
    ])
  );
});

// ===== FETCH EVENT =====
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  
  // Skip cross-origin requests
  if (url.origin !== self.location.origin) {
    return;
  }
  
  // ===== AUDIO FILES CACHING STRATEGY =====
  if (url.pathname.includes("/audio/")) {
    event.respondWith(handleAudioRequest(event.request));
    return;
  }
  
  // ===== HTML FILES (Network First) =====
  if (url.pathname.endsWith(".html") || url.pathname === "/") {
    event.respondWith(handleHtmlRequest(event.request));
    return;
  }
  
  // ===== OTHER ASSETS (Cache First) =====
  event.respondWith(handleAssetRequest(event.request));
});

// Handle audio requests - Cache with network fallback
async function handleAudioRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  
  // Try cache first
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // If not in cache, fetch from network
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      // Cache the response for next time - CLONE ONLY ONCE
      const responseToCache = networkResponse.clone();
      cache.put(request, responseToCache);
    }
    return networkResponse;
  } catch (error) {
    console.warn('Audio fetch failed:', error);
    return new Response('Audio offline', { status: 503 });
  }
}

// Handle HTML requests - Network first, cache fallback
async function handleHtmlRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // If successful, update cache
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      // CLONE ONLY ONCE
      const responseToCache = networkResponse.clone();
      cache.put(request, responseToCache);
    }
    return networkResponse;
  } catch (error) {
    // If offline, return cached version
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    // If no cache, return offline page as fallback
    return cache.match('/offline.html');
  }
}

// Handle other assets - Cache first, network fallback
async function handleAssetRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  
  // Try cache first
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // If not in cache, fetch from network
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      // Cache for next time - CLONE ONLY ONCE
      const responseToCache = networkResponse.clone();
      cache.put(request, responseToCache);
    }
    return networkResponse;
  } catch (error) {
    console.warn('Asset fetch failed:', error);
    return new Response('Asset offline', { status: 503 });
  }
}

// ===== BACKGROUND SYNC READY =====
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-progress") {
    console.log("🔄 Background sync triggered");
    event.waitUntil(syncProgress());
  }
});

async function syncProgress() {
  console.log("Syncing user progress...");
  // Implement IndexedDB sync here later
  return Promise.resolve();
}

// ===== PUSH NOTIFICATIONS READY =====
self.addEventListener("push", (event) => {
  if (!event.data) return;
  
  try {
    const data = event.data.json();
    
    const options = {
      body: data.body || "New notification",
      icon: "/icons/icon-192.png",
      badge: "/icons/icon-72.png",
      vibrate: [200, 100, 200],
      data: {
        url: data.url || "/"
      }
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title || "Samkran Ilm", options)
    );
  } catch (error) {
    console.error('Push notification error:', error);
  }
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || "/")
  );
});