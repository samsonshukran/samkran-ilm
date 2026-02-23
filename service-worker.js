// ===== SAMKRAN ILM PROFESSIONAL SERVICE WORKER =====
// Version: 1.0.0
// Features: Auto-update cache, offline audio, background sync ready

const CACHE_VERSION = "v1.0.0";
const CACHE_NAME = `samkran-ilm-${CACHE_VERSION}`;

// Static assets that are essential for the app to work offline
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/names.html",
  "/arabic.html",
  "/juzAmma.html",
  "/edu.html",
  "/css/style.css",
  "/js/main.js",
  "/js/namesData.js",
  "/js/arabicData.js",
  "/js/juzAmmaData.js",
  "/js/juzAmmaTranslations.js",
  "/js/juzAmma.js",
  "/js/audioManager.js",
  "/js/edu.js",
  "/js/edu-data.json.js",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// Audio files to cache (Juz 'Amma surahs)
const AUDIO_ASSETS = [
  "/audio/A-Naba-u.mp3",
  "/audio/A-Naaziah.mp3",
  "/audio/Abasa.mp3",
  "/audio/A-Takwir.mp3",
  "/audio/Al-Infitwaar.mp3",
  "/audio/Al-Mutwafifin.mp3",
  "/audio/Al-Inshiqaq.mp3",
  "/audio/Al-Burudji.mp3",
  "/audio/At-Twariq.mp3",
  "/audio/Al-Aala.mp3",
  "/audio/Al-Ghashiyah.mp3",
  "/audio/Al-Fajri.mp3",
  "/audio/Al-Balad.mp3",
  "/audio/A-Shams.mp3",
  "/audio/A-Layl.mp3",
  "/audio/A-Dwuhaa.mp3",
  "/audio/A-Sharh.mp3",
  "/audio/At-Tiin.mp3",
  "/audio/Al-Alaq.mp3",
  "/audio/Al-Qadri.mp3",
  "/audio/Al-Bayyinah.mp3",
  "/audio/Az-Zilzalah.mp3",
  "/audio/Al-Adiyah.mp3",
  "/audio/Al-Qaariah.mp3",
  "/audio/At-Takaathur.mp3",
  "/audio/Al-Asr.mp3",
  "/audio/Al-Humazah.mp3",
  "/audio/Al-Fiil.mp3",
  "/audio/Al-Quraysh.mp3",
  "/audio/Al-Mauun.mp3",
  "/audio/Al-Kawthar.mp3",
  "/audio/Al-Fatihah.mp3",
  "/audio/A-Nasr.mp3",
  "/audio/Al-Masad.mp3",
  "/audio/Al-Ikhlas.mp3",
  "/audio/Al-Falaq.mp3",
  "/audio/A-Naas.mp3"
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
        return cache.addAll(STATIC_ASSETS).catch((error) => {
          console.error("❌ Failed to cache static assets:", error);
        });
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
            if (key !== CACHE_NAME) {
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
// Smart caching strategy with audio optimization
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  
  // ===== AUDIO FILES CACHING STRATEGY =====
  // For audio files: Cache first, then network
  if (url.pathname.includes("/audio/")) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          // Return cached audio if available
          if (cachedResponse) {
            return cachedResponse;
          }
          
          // Otherwise fetch from network and cache for next time
          return fetch(event.request).then((networkResponse) => {
            // Cache the new audio file
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
    return;
  }
  
  // ===== STATIC ASSETS CACHING STRATEGY =====
  // For HTML, CSS, JS: Network first with cache fallback (for updates)
  if (url.pathname.endsWith(".html") || url.pathname === "/") {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // Update cache with latest version
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
          });
          return networkResponse;
        })
        .catch(() => {
          // Fallback to cache if offline
          return caches.match(event.request);
        })
    );
    return;
  }
  
  // ===== OTHER ASSETS =====
  // Cache first, then network (for everything else)
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(event.request).then((networkResponse) => {
          // Cache new requests
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
          });
          return networkResponse;
        });
      })
      .catch(() => {
        // Fallback for completely offline
        if (url.pathname.endsWith(".html")) {
          return caches.match("/index.html"); // Return homepage as fallback
        }
        return new Response("Offline - Check your connection", {
          status: 503,
          statusText: "Service Unavailable"
        });
      })
  );
});

// ===== BACKGROUND SYNC READY =====
// Ready for future implementation of sync functionality
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-progress") {
    console.log("🔄 Background sync triggered");
    event.waitUntil(syncProgress());
  }
});

async function syncProgress() {
  // This will be implemented when you add user progress tracking
  console.log("Syncing user progress...");
  // You can add IndexedDB sync logic here later
}

// ===== PUSH NOTIFICATIONS READY =====
// Ready for future push notifications
self.addEventListener("push", (event) => {
  const data = event.data.json();
  
  const options = {
    body: data.body,
    icon: "/icons/icon-192.png",
    badge: "/icons/icon-72.png",
    vibrate: [200, 100, 200],
    data: {
      url: data.url || "/"
    }
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});