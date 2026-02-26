// ===== MAIN.JS - Samkran Ilm Core Logic =====
// UPDATED: Removed deleted file references, maintained dark navy/gold theme

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Samkran Ilm loaded · mā shā’ Allāh');
    
    // Initialize based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    console.log('Current page:', currentPage);
    
    try {
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
    } catch (error) {
        console.error('Error initializing page:', error);
    }
    
    // Initialize common features
    initDhikrCounters();
    
    // Run data check after a delay
    setTimeout(checkDataLoaded, 1000);
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

function getQuranDuas() {
    return window.quranDuas || null;
}

function getHadithDuas() {
    return window.hadithDuas || null;
}

function getDhikrCollection() {
    return window.dhikrCollection || null;
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
        
        safeSetText('dailyNameArabic', name.arabic);
        safeSetText('dailyNameTranslit', name.transliteration);
        safeSetText('dailyNameMeaning', name.meaning);
        safeSetText('dailyNameReflection', name.reflection || "Allah's names are beautiful, call upon Him by them.");
        safeSetHtml('dailyNameDua', `<span class="dua-label">Du'a:</span> ${name.duaExample || 'Yā ' + name.transliteration}`);
        safeSetText('dailyNameEvidence', name.evidence || "Qur'an/Sunnah");
    } else {
        console.warn('namesData not available');
        safeSetText('dailyNameArabic', 'اللَّهُ');
        safeSetText('dailyNameTranslit', 'Allāh');
        safeSetText('dailyNameMeaning', 'The God');
    }
    
    // Set random Arabic Word of the Day
    if (arabicWords && arabicWords.length > 0) {
        const randomIndex = Math.floor(Math.random() * arabicWords.length);
        const word = arabicWords[randomIndex];
        
        safeSetText('dailyWordArabic', word.arabic);
        safeSetText('dailyWordTranslit', word.translit);
        safeSetText('dailyWordMeaning', word.meaning);
        safeSetText('dailyWordRoot', `Word Type: ${word.type || 'word'}`);
        safeSetText('dailyWordTajweed', word.tajweed ? `🔊 ${word.tajweed}` : '');
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
        if (!name) return;
        
        const card = document.createElement('div');
        card.className = 'name-card';
        card.dataset.index = index;
        
        card.innerHTML = `
            <div class="arabic-name">${name.arabic || ''}</div>
            <div class="transliteration">${name.transliteration || ''}</div>
            <div class="meaning">${name.meaning || ''}</div>
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
    
    const grid = document.getElementById('namesGrid');
    const detail = document.getElementById('nameDetail');
    
    if (grid) grid.classList.add('hidden');
    if (detail) detail.classList.remove('hidden');
    
    safeSetText('detailArabic', name.arabic);
    safeSetText('detailTranslit', name.transliteration);
    safeSetText('detailMeaning', name.meaning);
    safeSetText('detailEvidence', name.evidence || 'Qur\'an / Sunnah');
    safeSetText('detailReflection', name.reflection || 'Reflect on this name of Allah.');
    
    // Handle whenToUse
    if (name.whenToUse) {
        safeSetText('detailWhen', Array.isArray(name.whenToUse) ? name.whenToUse.join(' · ') : name.whenToUse);
    } else {
        safeSetText('detailWhen', 'In all situations');
    }
    
    safeSetText('detailDua', name.duaExample || 'Yā ' + (name.transliteration || 'Allah'));
    safeSetText('detailTajwid', name.tajwidNote || 'No special note');
    
    // Handle relatedNames
    if (name.relatedNames) {
        safeSetText('detailRelated', Array.isArray(name.relatedNames) ? name.relatedNames.join(' · ') : name.relatedNames);
    } else {
        safeSetText('detailRelated', '—');
    }
    
    // Load personal note from localStorage
    const personalNoteEl = document.getElementById('personalNote');
    if (personalNoteEl) {
        const savedNote = localStorage.getItem(`nameNote_${index}`);
        personalNoteEl.value = savedNote || '';
    }
}

function setupNameDetailView() {
    const backBtn = document.getElementById('backToGrid');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            const grid = document.getElementById('namesGrid');
            const detail = document.getElementById('nameDetail');
            if (grid) grid.classList.remove('hidden');
            if (detail) detail.classList.add('hidden');
        });
    }
    
    const personalNote = document.getElementById('personalNote');
    if (personalNote) {
        personalNote.addEventListener('input', function(e) {
            const index = window.currentNameIndex;
            if (index !== undefined) {
                localStorage.setItem(`nameNote_${index}`, e.target.value);
            }
        });
    }
}

// ===== ARABIC PAGE FUNCTIONS =====
function initArabicPage() {
    console.log('Initializing Arabic page...');
    
    renderWordsGrid();
    renderPhrasesList();
    renderKhutbahGrid();
    initSlideshow();
    initTabs();
    initSearch();
    
    // Update counts
    const arabicWords = getArabicWords();
    const phrasesData = getPhrasesData();
    
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
    if (!grid) return;
    
    const arabicWords = getArabicWords();
    
    if (!arabicWords || arabicWords.length === 0) {
        grid.innerHTML = '<div class="loading-message">No words data available</div>';
        return;
    }
    
    grid.innerHTML = '';
    
    arabicWords.forEach(word => {
        if (!word) return;
        
        const card = document.createElement('div');
        card.className = 'word-card';
        
        let tajweedHtml = word.tajweed ? `<div class="tajweed-note">🔊 ${word.tajweed}</div>` : '';
        let typeHtml = word.type ? `<div class="word-type">${word.type}</div>` : '';
        
        card.innerHTML = `
            <div class="word-arabic">${word.arabic || ''}</div>
            <div class="word-translit">${word.translit || ''}</div>
            <div class="word-meaning">${word.meaning || ''}</div>
            ${typeHtml}
            ${tajweedHtml}
        `;
        grid.appendChild(card);
    });
}

function renderPhrasesList() {
    const container = document.getElementById('phrasesListContainer');
    if (!container) return;
    
    const phrasesData = getPhrasesData();
    
    if (!phrasesData || phrasesData.length === 0) {
        container.innerHTML = '<div class="loading-message">No phrases data available</div>';
        return;
    }
    
    container.innerHTML = '';
    
    phrasesData.forEach(phrase => {
        if (!phrase) return;
        
        const item = document.createElement('div');
        item.className = 'phrase-item';
        
        const usageHtml = phrase.usage ? `<div class="phrase-usage">${phrase.usage}</div>` : '';
        
        item.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                <span class="phrase-arabic">${phrase.arabic || ''}</span>
                <span class="phrase-translit">${phrase.translit || ''}</span>
            </div>
            <div class="phrase-meaning">${phrase.meaning || ''}</div>
            ${usageHtml}
        `;
        container.appendChild(item);
    });
}

function renderKhutbahGrid() {
    const grid = document.getElementById('khutbahGrid');
    if (!grid) return;
    
    const khutbahWords = getKhutbahWords();
    
    if (!khutbahWords || khutbahWords.length === 0) {
        grid.innerHTML = '<div class="loading-message">No khutbah words available</div>';
        return;
    }
    
    grid.innerHTML = '';
    
    khutbahWords.forEach(word => {
        if (!word) return;
        
        const item = document.createElement('div');
        item.className = 'khutbah-item';
        item.innerHTML = `
            <div class="khutbah-arabic">${word.arabic || ''}</div>
            <div class="khutbah-translit">${word.translit || ''}</div>
            <div class="khutbah-meaning">${word.meaning || ''}</div>
        `;
        grid.appendChild(item);
    });
}

// ===== DHIKR SLIDESHOW =====
let slideshowIndex = 0;
let slideshowInterval = null;

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
        const slides = getDhikrSlides();
        if (slides && slides.length > 0) {
            slideshowIndex = (slideshowIndex + 1) % slides.length;
            updateSlideshow();
        }
    }, 300000);
    
    // Manual navigation
    const prevBtn = document.getElementById('slideshowPrev');
    const nextBtn = document.getElementById('slideshowNext');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            const slides = getDhikrSlides();
            if (slides && slides.length > 0) {
                slideshowIndex = (slideshowIndex - 1 + slides.length) % slides.length;
                updateSlideshow();
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            const slides = getDhikrSlides();
            if (slides && slides.length > 0) {
                slideshowIndex = (slideshowIndex + 1) % slides.length;
                updateSlideshow();
            }
        });
    }
    
    // Counter for slideshow
    initSlideshowCounter();
}

function updateSlideshow() {
    const dhikrSlides = getDhikrSlides();
    if (!dhikrSlides || dhikrSlides.length === 0 || !dhikrSlides[slideshowIndex]) return;
    
    const slide = dhikrSlides[slideshowIndex];
    
    safeSetText('slideshowArabic', slide.arabic);
    safeSetText('slideshowTranslit', slide.translit);
    safeSetText('slideshowMeaning', slide.meaning);
    safeSetText('slideshowCount', `Recommended: ${slide.count || 33} times`);
    safeSetText('currentDhikrName', slide.translit);
}

function initSlideshowCounter() {
    let count = 0;
    const counterValue = document.getElementById('slideshowCounterValue');
    const plusBtn = document.getElementById('slideshowCounterPlus');
    const resetBtn = document.getElementById('slideshowCounterReset');
    const set33 = document.getElementById('setTarget33');
    const set100 = document.getElementById('setTarget100');
    
    if (plusBtn) {
        plusBtn.addEventListener('click', function() {
            count++;
            if (counterValue) counterValue.innerText = count;
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            count = 0;
            if (counterValue) counterValue.innerText = '0';
        });
    }
    
    if (set33) {
        set33.addEventListener('click', function() {
            safeSetText('slideshowCount', 'Recommended: 33 times');
        });
    }
    
    if (set100) {
        set100.addEventListener('click', function() {
            safeSetText('slideshowCount', 'Recommended: 100 times');
        });
    }
}

// ===== DHIKR COUNTERS =====
function initDhikrCounters() {
    console.log('Initializing dhikr counters...');
    
    // Home page counters
    initSingleCounter('subhan', 33);
    initSingleCounter('hamd', 33);
    initSingleCounter('akbar', 34);
    
    // Arabic page counters
    initSingleCounter('subhan2', 33);
    initSingleCounter('hamd2', 33);
    initSingleCounter('akbar2', 34);
    
    // Reset all buttons
    const resetAll = document.getElementById('resetAllDhikr');
    if (resetAll) {
        resetAll.addEventListener('click', function() {
            safeSetText('subhanValue', '33');
            safeSetText('hamdValue', '33');
            safeSetText('akbarValue', '34');
        });
    }
    
    const resetAll2 = document.getElementById('resetAllDhikr2');
    if (resetAll2) {
        resetAll2.addEventListener('click', function() {
            safeSetText('subhanValue2', '33');
            safeSetText('hamdValue2', '33');
            safeSetText('akbarValue2', '34');
        });
    }
}

function initSingleCounter(prefix, defaultValue) {
    const plusBtn = document.getElementById(prefix + 'Plus');
    const resetBtn = document.getElementById(prefix + 'Reset');
    const valueEl = document.getElementById(prefix + 'Value');
    
    if (!valueEl) return;
    
    // Initialize with default value
    valueEl.innerText = defaultValue;
    
    if (plusBtn) {
        plusBtn.addEventListener('click', function() {
            let val = parseInt(valueEl.innerText) || 0;
            val = val >= defaultValue ? 0 : val + 1;
            valueEl.innerText = val;
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            valueEl.innerText = defaultValue;
        });
    }
}

// ===== DUA PAGE FUNCTIONS =====
function initDuaPage() {
    console.log('Initializing Dua page...');
    
    const quranDuas = getQuranDuas();
    const hadithDuas = getHadithDuas();
    
    if (quranDuas) {
        console.log(`📖 Quranic duas loaded: ${quranDuas.length}`);
    }
    
    if (hadithDuas) {
        console.log(`📖 Hadith duas loaded: ${hadithDuas.length}`);
    }
    
    // Check if Dua system is available
    if (typeof window.initDuaSystem === 'function') {
        try {
            window.initDuaSystem();
        } catch (error) {
            console.error('Error initializing dua system:', error);
        }
    } else {
        console.warn('initDuaSystem not available');
    }
}

// ===== TABS =====
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            if (!tabName) return;
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Hide all tab contents
            const tabContents = ['words-tab', 'phrases-tab', 'roots-tab', 'dhikr-tab'];
            tabContents.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.classList.add('hidden');
            });
            
            // Show selected tab
            const selectedTab = document.getElementById(tabName + '-tab');
            if (selectedTab) selectedTab.classList.remove('hidden');
        });
    });
}

// ===== SEARCH =====
function initSearch() {
    const wordSearch = document.getElementById('wordSearch');
    if (wordSearch) {
        wordSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const words = document.querySelectorAll('.word-card');
            
            words.forEach(word => {
                const text = word.innerText.toLowerCase();
                word.style.display = text.includes(searchTerm) ? 'flex' : 'none';
            });
        });
    }
    
    const phraseSearch = document.getElementById('phraseSearch');
    if (phraseSearch) {
        phraseSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const phrases = document.querySelectorAll('.phrase-item');
            
            phrases.forEach(phrase => {
                const text = phrase.innerText.toLowerCase();
                phrase.style.display = text.includes(searchTerm) ? 'block' : 'none';
            });
        });
    }
}

// ===== JUZ 'AMMA PAGE FUNCTIONS =====
function initJuzAmmaPage() {
    console.log('Initializing Juz Amma page...');
    
    const juzAmmaData = getJuzAmmaData();
    
    if (juzAmmaData) {
        console.log(`📖 Juz Amma data loaded: ${juzAmmaData.length} surahs`);
    }
    
    // Initialize Juz Amma if available
    if (typeof window.initJuzAmma === 'function') {
        try {
            window.initJuzAmma();
        } catch (error) {
            console.error('Error initializing Juz Amma:', error);
        }
    }
}

// ===== SAFE UTILITY FUNCTIONS =====
function safeSetText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text || '';
}

function safeSetHtml(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html || '';
}

// ===== DEBUG FUNCTION =====
function checkDataLoaded() {
    console.log('=== DATA LOAD CHECK ===');
    console.log('namesData:', getNamesData() ? `✅ Loaded (${getNamesData().length})` : '❌ NOT LOADED');
    console.log('arabicWords:', getArabicWords() ? `✅ Loaded (${getArabicWords().length})` : '❌ NOT LOADED');
    console.log('phrasesData:', getPhrasesData() ? `✅ Loaded (${getPhrasesData().length})` : '❌ NOT LOADED');
    console.log('khutbahWords:', getKhutbahWords() ? `✅ Loaded (${getKhutbahWords().length})` : '❌ NOT LOADED');
    console.log('dhikrSlides:', getDhikrSlides() ? `✅ Loaded (${getDhikrSlides().length})` : '❌ NOT LOADED');
    console.log('juzAmmaData:', getJuzAmmaData() ? `✅ Loaded (${getJuzAmmaData().length})` : '❌ NOT LOADED');
    console.log('quranDuas:', getQuranDuas() ? `✅ Loaded (${getQuranDuas().length})` : '❌ NOT LOADED');
    console.log('hadithDuas:', getHadithDuas() ? `✅ Loaded (${getHadithDuas().length})` : '❌ NOT LOADED');
    console.log('dhikrCollection:', getDhikrCollection() ? `✅ Loaded (${getDhikrCollection().length})` : '❌ NOT LOADED');
    console.log('=======================');
}

// ===== PWA INSTALLATION =====
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

if (installBtn) {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
        installBtn.style.display = 'none';
    }
    
    // Listen for install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installBtn.style.display = 'flex';
    });
    
    // Handle install button click
    installBtn.addEventListener('click', async () => {
        if (!deferredPrompt) return;
        
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User ${outcome} installation`);
        installBtn.style.display = 'none';
        deferredPrompt = null;
    });
}

// Detect successful installation
window.addEventListener('appinstalled', () => {
    console.log('App was installed successfully');
    if (installBtn) installBtn.style.display = 'none';
});

// ===== OFFLINE DETECTION =====
function updateOnlineStatus() {
    let indicator = document.getElementById('offlineIndicator');
    
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'offlineIndicator';
        indicator.className = 'offline-indicator';
        indicator.innerHTML = '📴 You are offline';
        document.body.appendChild(indicator);
    }
    
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
            })
            .catch((error) => {
                console.error('❌ Service Worker registration failed:', error);
            });
    });
}

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

// Export functions for HTML
window.initHomePage = initHomePage;
window.renderNamesGrid = renderNamesGrid;
window.initNamesPage = initNamesPage;
window.initArabicPage = initArabicPage;
window.initJuzAmmaPage = initJuzAmmaPage;
window.initDuaPage = initDuaPage;
window.checkDataLoaded = checkDataLoaded;
window.clearAppCache = clearAppCache;

console.log('✅ main.js loaded successfully');