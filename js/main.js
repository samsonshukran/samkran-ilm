// ===== MAIN.JS - Samkran Ilm Core Logic =====
// UPDATED: Added Dua tab support

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Samkran Ilm loaded · mā shā’ Allāh');
    
    // Initialize based on current page
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'index.html' || currentPage === '') {
        initHomePage();
    } else if (currentPage === 'names.html') {
        initNamesPage();
    } else if (currentPage === 'arabic.html') {
        initArabicPage();
    } else if (currentPage === 'juzAmma.html') {
        initJuzAmmaPage();
    } else if (currentPage === 'dua.html') {
        initDuaPage();
    }
    
    // Initialize common features
    initDhikrCounters();
});

// ===== SAFE DATA ACCESS FUNCTIONS =====
function getNamesData() {
    return window.namesData || null;
}

function getArabicWords() {
    return window.arabicWords || null;
}

function getPhrasesData() {
    return window.phrasesData || null;
}

function getKhutbahWords() {
    return window.khutbahWords || null;
}

function getDhikrSlides() {
    return window.dhikrSlides || null;
}

function getJuzAmmaData() {
    return window.juzAmmaData || null;
}

function getSwahiliTranslations() {
    return window.swahiliTranslations || null;
}

// ===== NEW: DUA DATA ACCESS FUNCTIONS =====
function getQuranDuas() {
    return window.quranDuas || null;
}

function getHadithDuas() {
    return window.hadithDuas || null;
}

// ===== HOME PAGE FUNCTIONS =====
function initHomePage() {
    console.log('Initializing home page...');
    
    const namesData = getNamesData();
    const arabicWords = getArabicWords();
    
    // Set random Name of the Day
    if (namesData && namesData.length > 0) {
        const randomIndex = Math.floor(Math.random() * namesData.length);
        const name = namesData[randomIndex];
        
        setElementText('dailyNameArabic', name.arabic);
        setElementText('dailyNameTranslit', name.transliteration);
        setElementText('dailyNameMeaning', name.meaning);
        setElementText('dailyNameReflection', name.reflection || "Allah's names are beautiful, call upon Him by them.");
        setElementHtml('dailyNameDua', `<span class="dua-label">Du'a:</span> ${name.duaExample || 'Yā ' + name.transliteration}`);
        setElementText('dailyNameEvidence', name.evidence || "Qur'an/Sunnah");
    } else {
        console.warn('namesData not available');
    }
    
    // Set random Arabic Word of the Day
    if (arabicWords && arabicWords.length > 0) {
        const randomIndex = Math.floor(Math.random() * arabicWords.length);
        const word = arabicWords[randomIndex];
        
        setElementText('dailyWordArabic', word.arabic);
        setElementText('dailyWordTranslit', word.translit);
        setElementText('dailyWordMeaning', word.meaning);
        setElementText('dailyWordRoot', `Word Type: ${word.type || 'word'}`);
        setElementText('dailyWordTajweed', word.tajweed ? `🔊 ${word.tajweed}` : '');
    } else {
        console.warn('arabicWords not available');
    }
}

// ===== NAMES PAGE FUNCTIONS =====
function initNamesPage() {
    console.log('Initializing names page...');
    renderNamesGrid();
    setupNameDetailView();
}

function renderNamesGrid() {
    const gridContainer = document.getElementById('namesGridContainer');
    if (!gridContainer) {
        console.error('namesGridContainer not found');
        return;
    }
    
    const namesData = getNamesData();
    
    if (!namesData || namesData.length === 0) {
        gridContainer.innerHTML = '<div class="error-message">Names data not loaded. Please check console.</div>';
        console.error('namesData not available');
        return;
    }
    
    gridContainer.innerHTML = '';
    
    namesData.forEach((name, index) => {
        const card = document.createElement('div');
        card.className = 'name-card';
        card.dataset.index = index;
        
        card.innerHTML = `
            <div class="arabic-name">${name.arabic}</div>
            <div class="transliteration">${name.transliteration}</div>
            <div class="meaning">${name.meaning}</div>
            <div class="badge" style="align-self: center;">click for details</div>
        `;
        
        card.addEventListener('click', () => showNameDetail(index));
        gridContainer.appendChild(card);
    });
    
    // Update count
    const countEl = document.getElementById('namesCount');
    if (countEl) countEl.innerText = namesData.length + ' names';
    
    console.log(`✅ Rendered ${namesData.length} names`);
}

function showNameDetail(index) {
    const namesData = getNamesData();
    if (!namesData || !namesData[index]) {
        console.error('Name not found at index:', index);
        return;
    }
    
    const name = namesData[index];
    
    // Store current index for personal notes
    window.currentNameIndex = index;
    
    document.getElementById('namesGrid').classList.add('hidden');
    document.getElementById('nameDetail').classList.remove('hidden');
    
    setElementText('detailArabic', name.arabic);
    setElementText('detailTranslit', name.transliteration);
    setElementText('detailMeaning', name.meaning);
    setElementText('detailEvidence', name.evidence || 'Qur\'an / Sunnah');
    setElementText('detailReflection', name.reflection || 'Reflect on this name of Allah.');
    
    // Handle whenToUse (could be array or string)
    if (name.whenToUse) {
        setElementText('detailWhen', Array.isArray(name.whenToUse) ? name.whenToUse.join(' · ') : name.whenToUse);
    } else {
        setElementText('detailWhen', 'In all situations');
    }
    
    setElementText('detailDua', name.duaExample || 'Yā ' + name.transliteration);
    setElementText('detailTajwid', name.tajwidNote || 'No special note');
    
    // Handle relatedNames (could be array or string)
    if (name.relatedNames) {
        setElementText('detailRelated', Array.isArray(name.relatedNames) ? name.relatedNames.join(' · ') : name.relatedNames);
    } else {
        setElementText('detailRelated', '—');
    }
    
    // Load personal note from localStorage
    const savedNote = localStorage.getItem(`nameNote_${index}`);
    const personalNoteEl = document.getElementById('personalNote');
    if (personalNoteEl) {
        personalNoteEl.value = savedNote || '';
    }
}

function setupNameDetailView() {
    document.getElementById('backToGrid')?.addEventListener('click', function() {
        document.getElementById('namesGrid').classList.remove('hidden');
        document.getElementById('nameDetail').classList.add('hidden');
    });
    
    document.getElementById('personalNote')?.addEventListener('input', function(e) {
        const index = window.currentNameIndex;
        if (index !== undefined) {
            localStorage.setItem(`nameNote_${index}`, e.target.value);
        }
    });
}

// ===== ARABIC PAGE FUNCTIONS =====
function initArabicPage() {
    console.log('Initializing Arabic page...');
    
    const arabicWords = getArabicWords();
    const phrasesData = getPhrasesData();
    const khutbahWords = getKhutbahWords();
    const dhikrSlides = getDhikrSlides();
    
    renderWordsGrid();
    renderPhrasesList();
    renderKhutbahGrid();
    initSlideshow();
    initTabs();
    initSearch();
    
    // Update word count
    const countEl = document.getElementById('wordCount');
    if (countEl && arabicWords) {
        countEl.innerText = arabicWords.length;
    }
    
    const phraseCountEl = document.getElementById('phraseCount');
    if (phraseCountEl && phrasesData) {
        phraseCountEl.innerText = phrasesData.length;
    }
}

function renderWordsGrid() {
    const grid = document.getElementById('wordsGridContainer');
    if (!grid) {
        console.error('wordsGridContainer not found');
        return;
    }
    
    const arabicWords = getArabicWords();
    
    if (!arabicWords || arabicWords.length === 0) {
        grid.innerHTML = '<div class="error-message">No words data available</div>';
        return;
    }
    
    grid.innerHTML = '';
    
    // Show all words
    arabicWords.forEach(word => {
        const card = document.createElement('div');
        card.className = 'word-card';
        
        let tajweedHtml = word.tajweed ? `<div class="tajweed-note">🔊 ${word.tajweed}</div>` : '';
        let typeHtml = word.type ? `<div class="word-type">${word.type}</div>` : '';
        
        card.innerHTML = `
            <div class="word-arabic">${word.arabic}</div>
            <div class="word-translit">${word.translit}</div>
            <div class="word-meaning">${word.meaning}</div>
            ${typeHtml}
            ${tajweedHtml}
        `;
        grid.appendChild(card);
    });
    
    console.log(`✅ Rendered ${arabicWords.length} words`);
}

function renderPhrasesList() {
    const container = document.getElementById('phrasesListContainer');
    if (!container) {
        console.error('phrasesListContainer not found');
        return;
    }
    
    const phrasesData = getPhrasesData();
    
    if (!phrasesData || phrasesData.length === 0) {
        container.innerHTML = '<div class="error-message">No phrases data available</div>';
        return;
    }
    
    container.innerHTML = '';
    
    phrasesData.forEach(phrase => {
        const item = document.createElement('div');
        item.className = 'phrase-item';
        
        const usageHtml = phrase.usage ? `<div class="phrase-usage">${phrase.usage}</div>` : '';
        
        item.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                <span class="phrase-arabic">${phrase.arabic}</span>
                <span class="phrase-translit">${phrase.translit}</span>
            </div>
            <div class="phrase-meaning">${phrase.meaning}</div>
            ${usageHtml}
        `;
        container.appendChild(item);
    });
    
    console.log(`✅ Rendered ${phrasesData.length} phrases`);
}

function renderKhutbahGrid() {
    const grid = document.getElementById('khutbahGrid');
    if (!grid) {
        console.error('khutbahGrid not found');
        return;
    }
    
    const khutbahWords = getKhutbahWords();
    
    if (!khutbahWords || khutbahWords.length === 0) {
        grid.innerHTML = '<div class="error-message">No khutbah words available</div>';
        return;
    }
    
    grid.innerHTML = '';
    
    khutbahWords.forEach(word => {
        const item = document.createElement('div');
        item.className = 'khutbah-item';
        item.innerHTML = `
            <div class="khutbah-arabic">${word.arabic}</div>
            <div class="khutbah-translit">${word.translit}</div>
            <div class="khutbah-meaning">${word.meaning}</div>
        `;
        grid.appendChild(item);
    });
}

// ===== DHIKR SLIDESHOW =====
let slideshowIndex = 0;
let slideshowInterval;

function initSlideshow() {
    console.log('Initializing slideshow...');
    
    const dhikrSlides = getDhikrSlides();
    
    if (!dhikrSlides || dhikrSlides.length === 0) {
        console.error('dhikrSlides not defined or empty');
        return;
    }
    
    updateSlideshow();
    
    // Clear any existing interval
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
    }
    
    // Set interval to change every 5 minutes (300000 ms)
    slideshowInterval = setInterval(() => {
        const dhikrSlides = getDhikrSlides();
        slideshowIndex = (slideshowIndex + 1) % dhikrSlides.length;
        updateSlideshow();
    }, 300000);
    
    // Manual navigation
    document.getElementById('slideshowPrev')?.addEventListener('click', function() {
        const dhikrSlides = getDhikrSlides();
        slideshowIndex = (slideshowIndex - 1 + dhikrSlides.length) % dhikrSlides.length;
        updateSlideshow();
    });
    
    document.getElementById('slideshowNext')?.addEventListener('click', function() {
        const dhikrSlides = getDhikrSlides();
        slideshowIndex = (slideshowIndex + 1) % dhikrSlides.length;
        updateSlideshow();
    });
    
    // Counter for slideshow
    initSlideshowCounter();
}

function updateSlideshow() {
    const dhikrSlides = getDhikrSlides();
    if (!dhikrSlides || dhikrSlides.length === 0) return;
    
    const slide = dhikrSlides[slideshowIndex];
    
    setElementText('slideshowArabic', slide.arabic);
    setElementText('slideshowTranslit', slide.translit);
    setElementText('slideshowMeaning', slide.meaning);
    setElementText('slideshowCount', `Recommended: ${slide.count || 33} times`);
    setElementText('currentDhikrName', slide.translit);
}

function initSlideshowCounter() {
    let count = 0;
    const counterValue = document.getElementById('slideshowCounterValue');
    
    document.getElementById('slideshowCounterPlus')?.addEventListener('click', function() {
        count++;
        if (counterValue) counterValue.innerText = count;
    });
    
    document.getElementById('slideshowCounterReset')?.addEventListener('click', function() {
        count = 0;
        if (counterValue) counterValue.innerText = '0';
    });
    
    document.getElementById('setTarget33')?.addEventListener('click', function() {
        setElementText('slideshowCount', 'Recommended: 33 times');
    });
    
    document.getElementById('setTarget100')?.addEventListener('click', function() {
        setElementText('slideshowCount', 'Recommended: 100 times');
    });
}

// ===== DHIKR COUNTERS =====
function initDhikrCounters() {
    console.log('Initializing dhikr counters...');
    
    // Home page counters
    let subhanCount = 33;
    let hamdCount = 33;
    let akbarCount = 34;
    
    // SubhanAllah counter
    document.getElementById('subhanPlus')?.addEventListener('click', function() {
        subhanCount = subhanCount >= 33 ? 0 : subhanCount + 1;
        document.getElementById('subhanValue').innerText = subhanCount;
    });
    
    document.getElementById('subhanReset')?.addEventListener('click', function() {
        subhanCount = 33;
        document.getElementById('subhanValue').innerText = '33';
    });
    
    // Alhamdulillah counter
    document.getElementById('hamdPlus')?.addEventListener('click', function() {
        hamdCount = hamdCount >= 33 ? 0 : hamdCount + 1;
        document.getElementById('hamdValue').innerText = hamdCount;
    });
    
    document.getElementById('hamdReset')?.addEventListener('click', function() {
        hamdCount = 33;
        document.getElementById('hamdValue').innerText = '33';
    });
    
    // Allahu Akbar counter
    document.getElementById('akbarPlus')?.addEventListener('click', function() {
        akbarCount = akbarCount >= 34 ? 0 : akbarCount + 1;
        document.getElementById('akbarValue').innerText = akbarCount;
    });
    
    document.getElementById('akbarReset')?.addEventListener('click', function() {
        akbarCount = 34;
        document.getElementById('akbarValue').innerText = '34';
    });
    
    // Reset all
    document.getElementById('resetAllDhikr')?.addEventListener('click', function() {
        subhanCount = 33;
        hamdCount = 33;
        akbarCount = 34;
        document.getElementById('subhanValue').innerText = '33';
        document.getElementById('hamdValue').innerText = '33';
        document.getElementById('akbarValue').innerText = '34';
    });
    
    // Arabic page counters
    document.getElementById('subhanPlus2')?.addEventListener('click', function() {
        let val = parseInt(document.getElementById('subhanValue2').innerText);
        val = val >= 33 ? 0 : val + 1;
        document.getElementById('subhanValue2').innerText = val;
    });
    
    document.getElementById('subhanReset2')?.addEventListener('click', function() {
        document.getElementById('subhanValue2').innerText = '33';
    });
    
    document.getElementById('hamdPlus2')?.addEventListener('click', function() {
        let val = parseInt(document.getElementById('hamdValue2').innerText);
        val = val >= 33 ? 0 : val + 1;
        document.getElementById('hamdValue2').innerText = val;
    });
    
    document.getElementById('hamdReset2')?.addEventListener('click', function() {
        document.getElementById('hamdValue2').innerText = '33';
    });
    
    document.getElementById('akbarPlus2')?.addEventListener('click', function() {
        let val = parseInt(document.getElementById('akbarValue2').innerText);
        val = val >= 34 ? 0 : val + 1;
        document.getElementById('akbarValue2').innerText = val;
    });
    
    document.getElementById('akbarReset2')?.addEventListener('click', function() {
        document.getElementById('akbarValue2').innerText = '34';
    });
    
    document.getElementById('resetAllDhikr2')?.addEventListener('click', function() {
        document.getElementById('subhanValue2').innerText = '33';
        document.getElementById('hamdValue2').innerText = '33';
        document.getElementById('akbarValue2').innerText = '34';
    });
}

// ===== NEW: DUA PAGE FUNCTIONS =====
function initDuaPage() {
    console.log('Initializing Dua page...');
    
    const quranDuas = getQuranDuas();
    const hadithDuas = getHadithDuas();
    
    if (quranDuas) {
        console.log(`📖 Quranic duas loaded: ${quranDuas.length}`);
    } else {
        console.error('quranDuas not available');
    }
    
    if (hadithDuas) {
        console.log(`📖 Hadith duas loaded: ${hadithDuas.length}`);
    } else {
        console.error('hadithDuas not available');
    }
    
    // Initialize Dua system if the function exists
    if (typeof window.initDuaSystem === 'function') {
        window.initDuaSystem();
    } else {
        console.error('Dua initialization function not found. Make sure dua.js is loaded.');
        
        // Fallback: try to load Dua page directly
        const grid = document.getElementById('duasGrid');
        if (grid) {
            grid.innerHTML = `
                <div class="error-message" style="grid-column: 1/-1;">
                    <h3>⚠️ Dua module not fully loaded</h3>
                    <p>Please check that the following scripts are included:</p>
                    <ul style="text-align: left; margin-top: 1rem; color: #94a3b8;">
                        <li>quran-duas.js</li>
                        <li>hadith-duas.js</li>
                        <li>dua.js</li>
                    </ul>
                </div>
            `;
        }
    }
}

// ===== TABS =====
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Hide all tab contents
            document.getElementById('words-tab')?.classList.add('hidden');
            document.getElementById('phrases-tab')?.classList.add('hidden');
            document.getElementById('roots-tab')?.classList.add('hidden');
            document.getElementById('dhikr-tab')?.classList.add('hidden');
            
            // Show selected tab
            document.getElementById(tabName + '-tab')?.classList.remove('hidden');
        });
    });
}

// ===== SEARCH =====
function initSearch() {
    document.getElementById('wordSearch')?.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const words = document.querySelectorAll('.word-card');
        
        words.forEach(word => {
            const text = word.innerText.toLowerCase();
            word.style.display = text.includes(searchTerm) ? 'flex' : 'none';
        });
    });
    
    document.getElementById('phraseSearch')?.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const phrases = document.querySelectorAll('.phrase-item');
        
        phrases.forEach(phrase => {
            const text = phrase.innerText.toLowerCase();
            phrase.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });
}

// ===== JUZ 'AMMA PAGE FUNCTIONS =====
function initJuzAmmaPage() {
    console.log('Initializing Juz Amma page...');
    
    const juzAmmaData = getJuzAmmaData();
    const swahiliTranslations = getSwahiliTranslations();
    
    if (juzAmmaData) {
        console.log(`📖 Juz Amma data loaded: ${juzAmmaData.length} surahs`);
    } else {
        console.error('juzAmmaData not available');
    }
    
    if (swahiliTranslations) {
        console.log('✅ Swahili translations loaded');
    } else {
        console.warn('swahiliTranslations not available');
    }
    
    // Initialize Juz Amma if the function exists
    if (typeof window.initJuzAmma === 'function') {
        window.initJuzAmma();
    } else {
        console.error('Juz Amma initialization function not found. Make sure juzAmma.js is loaded.');
        
        // Fallback: try to load Juz Amma directly
        const content = document.getElementById('juz-content');
        if (content) {
            content.innerHTML = `
                <div class="error-message">
                    <h3>⚠️ Juz Amma module not fully loaded</h3>
                    <p>Please check that the following scripts are included:</p>
                    <ul style="text-align: left; margin-top: 1rem;">
                        <li>js/juzAmmaData.js</li>
                        <li>js/juzAmmaTranslations.js</li>
                        <li>js/audioManager.js</li>
                        <li>js/juzAmma.js</li>
                    </ul>
                </div>
            `;
        }
    }
}

// ===== UTILITY FUNCTIONS =====
function setElementText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
}

function setElementHtml(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

// ===== DEBUG FUNCTION (UPDATED) =====
function checkDataLoaded() {
    console.log('=== DATA LOAD CHECK ===');
    console.log('namesData:', getNamesData() ? `✅ Loaded (${getNamesData().length})` : '❌ NOT LOADED');
    console.log('arabicWords:', getArabicWords() ? `✅ Loaded (${getArabicWords().length})` : '❌ NOT LOADED');
    console.log('phrasesData:', getPhrasesData() ? `✅ Loaded (${getPhrasesData().length})` : '❌ NOT LOADED');
    console.log('khutbahWords:', getKhutbahWords() ? `✅ Loaded (${getKhutbahWords().length})` : '❌ NOT LOADED');
    console.log('dhikrSlides:', getDhikrSlides() ? `✅ Loaded (${getDhikrSlides().length})` : '❌ NOT LOADED');
    console.log('juzAmmaData:', getJuzAmmaData() ? `✅ Loaded (${getJuzAmmaData().length})` : '❌ NOT LOADED');
    console.log('swahiliTranslations:', getSwahiliTranslations() ? '✅ Loaded' : '❌ NOT LOADED');
    console.log('quranDuas:', getQuranDuas() ? `✅ Loaded (${getQuranDuas().length})` : '❌ NOT LOADED');
    console.log('hadithDuas:', getHadithDuas() ? `✅ Loaded (${getHadithDuas().length})` : '❌ NOT LOADED');
    console.log('=======================');
}

// Run check after a short delay
setTimeout(checkDataLoaded, 500);

// Export for use in HTML
window.initHomePage = initHomePage;
window.renderNamesGrid = renderNamesGrid;
window.renderArabicGrid = renderWordsGrid;
window.initArabicPage = initArabicPage;
window.initNamesPage = initNamesPage;
window.initJuzAmmaPage = initJuzAmmaPage;
window.initDuaPage = initDuaPage; // NEW: Export Dua page function
window.checkDataLoaded = checkDataLoaded;







// ===== PWA INSTALLATION =====
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

// Check if app is already installed
if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('App is running in standalone mode');
  if (installBtn) installBtn.style.display = 'none';
}

// Listen for install prompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  
  // Show install button
  if (installBtn) {
    installBtn.style.display = 'flex';
    console.log('Install prompt available');
  }
});

// Handle install button click
if (installBtn) {
  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    
    // Show install prompt
    deferredPrompt.prompt();
    
    // Wait for user choice
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User ${outcome} installation`);
    
    // Hide button after choice
    installBtn.style.display = 'none';
    deferredPrompt = null;
  });
}

// Detect successful installation
window.addEventListener('appinstalled', (evt) => {
  console.log('App was installed successfully');
  if (installBtn) installBtn.style.display = 'none';
  
  // Track installation
  if (typeof gtag !== 'undefined') {
    gtag('event', 'install', {
      'event_category': 'PWA',
      'event_label': 'App Installed'
    });
  }
});

// ===== OFFLINE DETECTION =====
function updateOnlineStatus() {
  const offlineIndicator = document.getElementById('offlineIndicator');
  if (!offlineIndicator) {
    // Create offline indicator if it doesn't exist
    const indicator = document.createElement('div');
    indicator.id = 'offlineIndicator';
    indicator.className = 'offline-indicator';
    indicator.innerHTML = '📴 You are offline';
    document.body.appendChild(indicator);
  }
  
  const indicator = document.getElementById('offlineIndicator');
  if (navigator.onLine) {
    indicator.classList.remove('show');
  } else {
    indicator.classList.add('show');
  }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
updateOnlineStatus();

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then((registration) => {
        console.log('✅ Service Worker registered:', registration.scope);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          console.log('New service worker found:', newWorker);
          
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New version available
              showUpdateNotification(registration);
            }
          });
        });
      })
      .catch((error) => {
        console.error('❌ Service Worker registration failed:', error);
      });
    
    // Check for service worker updates periodically
    setInterval(() => {
      navigator.serviceWorker.getRegistration().then((registration) => {
        if (registration) {
          registration.update();
        }
      });
    }, 60 * 60 * 1000); // Check every hour
  });
  
  // Handle service worker updates
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    console.log('New service worker activated');
    // Show reload notification
    if (confirm('A new version is available. Reload to update?')) {
      window.location.reload();
    }
  });
} else {
  console.warn('Service workers are not supported');
}

// ===== UPDATE NOTIFICATION =====
function showUpdateNotification(registration) {
  // Create update notification if it doesn't exist
  let notification = document.getElementById('updateNotification');
  
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'updateNotification';
    notification.className = 'update-notification';
    notification.innerHTML = `
      <div class="update-content">
        <div class="update-icon">🔄</div>
        <div class="update-text">
          <h4>Update Available</h4>
          <p>A new version of Samkran Ilm is ready</p>
        </div>
        <button class="update-btn" onclick="applyUpdate()">Update</button>
      </div>
    `;
    document.body.appendChild(notification);
  }
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 1000);
  
  // Store registration for update
  window.pendingRegistration = registration;
}

// Apply update function
window.applyUpdate = function() {
  const notification = document.getElementById('updateNotification');
  if (notification) {
    notification.classList.remove('show');
  }
  
  if (window.pendingRegistration && window.pendingRegistration.waiting) {
    window.pendingRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
  }
};

// Listen for messages from service worker
navigator.serviceWorker.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'UPDATE_AVAILABLE') {
    showUpdateNotification();
  }
});

// ===== BACKGROUND SYNC REGISTRATION =====
if ('serviceWorker' in navigator && 'SyncManager' in window) {
  navigator.serviceWorker.ready.then((registration) => {
    // Register sync for progress data
    registration.sync.register('sync-progress').catch((error) => {
      console.log('Background sync registration failed:', error);
    });
  });
}

// ===== CACHE SIZE MANAGEMENT =====
async function getCacheSize() {
  if ('storage' in navigator && 'estimate' in navigator.storage) {
    const estimate = await navigator.storage.estimate();
    console.log(`Cache usage: ${(estimate.usage / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Cache quota: ${(estimate.quota / 1024 / 1024).toFixed(2)} MB`);
    
    // Warn if cache is getting full (over 80%)
    if (estimate.usage > estimate.quota * 0.8) {
      console.warn('Cache is getting full, consider clearing old data');
    }
  }
}

// Check cache size periodically
setInterval(getCacheSize, 24 * 60 * 60 * 1000); // Once per day

// ===== CLEAR CACHE FUNCTION =====
window.clearAppCache = async function() {
  if (confirm('Clear all cached data? You will need to download audio again.')) {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames.map((name) => {
        if (name.startsWith('samkran-ilm-')) {
          return caches.delete(name);
        }
      })
    );
    alert('Cache cleared successfully');
    window.location.reload();
  }
};

// Export functions
window.applyUpdate = applyUpdate;
window.clearAppCache = clearAppCache;