// ===== MAIN.JS - Samkran Ilm Core Logic =====
// FIXED: Properly handles all data from window

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

// ===== UTILITY FUNCTIONS =====
function setElementText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
}

function setElementHtml(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

// ===== DEBUG FUNCTION =====
function checkDataLoaded() {
    console.log('=== DATA LOAD CHECK ===');
    console.log('namesData:', getNamesData() ? `✅ Loaded (${getNamesData().length})` : '❌ NOT LOADED');
    console.log('arabicWords:', getArabicWords() ? `✅ Loaded (${getArabicWords().length})` : '❌ NOT LOADED');
    console.log('phrasesData:', getPhrasesData() ? `✅ Loaded (${getPhrasesData().length})` : '❌ NOT LOADED');
    console.log('khutbahWords:', getKhutbahWords() ? `✅ Loaded (${getKhutbahWords().length})` : '❌ NOT LOADED');
    console.log('dhikrSlides:', getDhikrSlides() ? `✅ Loaded (${getDhikrSlides().length})` : '❌ NOT LOADED');
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
window.checkDataLoaded = checkDataLoaded;