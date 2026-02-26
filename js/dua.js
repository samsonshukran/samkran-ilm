// ===== DUA.JS - Complete Dua & Dhikr Management System =====
// Handles: Loading, Filtering, Searching, Favorites, Rendering for Duas
// And: Dhikr Display, Counter, Navigation for Dhikr

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🤲 Dua & Dhikr system initializing...');
    
    // Initialize the system
    initSystem();
});

// ===== GLOBAL STATE =====
let allDuas = [];
let filteredDuas = [];
let currentFilter = 'all';
let currentCategory = 'all';
let currentProphet = 'all';
let currentSearchTerm = '';
let favorites = [];

// Dhikr State
let dhikrList = [];
let currentDhikrIndex = 0;
let currentCounter = 0;
let currentTarget = 33;
let sessionTotal = 0;
let overallTotal = 0;
let currentDhikrCategory = 'all';

// ===== INITIALIZATION =====
function initSystem() {
    console.log('Initializing system...');
    
    // Check if data is loaded
    if (!window.quranDuas || !window.hadithDuas) {
        console.error('Dua data not loaded properly');
        showError('Dua data could not be loaded. Please refresh the page.');
        return;
    }
    
    // Initialize Dua system
    initDuaSystem();
    
    // Initialize Dhikr system
    initDhikrSystem();
    
    // Initialize Main Tabs
    initMainTabs();
    
    // Load saved data from localStorage
    loadSavedData();
}

// ===== MAIN TABS =====
function initMainTabs() {
    const tabButtons = document.querySelectorAll('.main-tab-btn');
    const tabContents = document.querySelectorAll('.main-tab-content');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.dataset.mainTab;
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// ===== DUA SYSTEM =====
function initDuaSystem() {
    console.log('Initializing Dua system...');
    
    // Merge duas from both sources
    allDuas = [...window.quranDuas, ...window.hadithDuas];
    console.log(`Total duas loaded: ${allDuas.length}`);
    
    // Load favorites from localStorage
    loadFavorites();
    
    // Update stats
    updateStats();
    
    // Render all duas
    filteredDuas = [...allDuas];
    renderDuas(filteredDuas);
    
    // Initialize event listeners
    initDuaEventListeners();
    
    // Hide loading spinner
    document.getElementById('loadingSpinner')?.classList.add('hidden');
}

function initDuaEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            applyFilters();
        });
    });
    
    // Category pills
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.addEventListener('click', function() {
            document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            applyFilters();
        });
    });
    
    // Prophet pills
    document.querySelectorAll('.prophet-pill').forEach(pill => {
        pill.addEventListener('click', function() {
            document.querySelectorAll('.prophet-pill').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            currentProphet = this.dataset.prophet;
            applyFilters();
        });
    });
    
    // Search input
    const searchInput = document.getElementById('duaSearch');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function(e) {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                currentSearchTerm = e.target.value;
                applyFilters();
            }, 300);
        });
    }
}

function applyFilters() {
    let results = [...allDuas];
    
    // Filter by source (Qur'an/Hadith)
    if (currentFilter !== 'all') {
        if (currentFilter === 'quran') {
            results = results.filter(dua => dua.source === 'quran');
        } else if (currentFilter === 'hadith') {
            results = results.filter(dua => dua.source === 'hadith');
        } else if (currentFilter === 'favorites') {
            results = results.filter(dua => favorites.includes(dua.id));
        }
    }
    
    // Filter by category
    if (currentCategory !== 'all') {
        results = results.filter(dua => dua.category === currentCategory);
    }
    
    // Filter by prophet
    if (currentProphet !== 'all') {
        results = results.filter(dua => dua.prophet === currentProphet);
    }
    
    // Filter by search term
    if (currentSearchTerm) {
        const term = currentSearchTerm.toLowerCase();
        results = results.filter(dua => 
            dua.arabic.toLowerCase().includes(term) ||
            dua.transliteration.toLowerCase().includes(term) ||
            dua.swahili.toLowerCase().includes(term) ||
            dua.prophet.toLowerCase().includes(term) ||
            dua.category.toLowerCase().includes(term)
        );
    }
    
    filteredDuas = results;
    renderDuas(results);
    updateActiveFilters();
}

function renderDuas(duas) {
    const grid = document.getElementById('duasGrid');
    const noResults = document.getElementById('noResults');
    
    if (!grid) {
        console.error('Duas grid not found');
        return;
    }
    
    if (!duas || duas.length === 0) {
        grid.innerHTML = '';
        noResults?.classList.remove('hidden');
        return;
    }
    
    noResults?.classList.add('hidden');
    
    let html = '';
    duas.forEach(dua => {
        html += createDuaCard(dua);
    });
    
    grid.innerHTML = html;
    
    // Attach favorite button listeners
    attachFavoriteListeners();
    
    console.log(`Rendered ${duas.length} duas`);
}

function createDuaCard(dua) {
    const isFavorite = favorites.includes(dua.id);
    const sourceClass = dua.source === 'quran' ? 'quran' : 'hadith';
    const sourceText = dua.source === 'quran' ? 'Qur’anic' : 'Hadith';
    
    return `
        <div class="dua-card" data-id="${dua.id}">
            <div class="card-badges">
                <span class="source-badge ${sourceClass}">${sourceText}</span>
                <span class="category-badge">${dua.category}</span>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${dua.id}">
                    ${isFavorite ? '❤️' : '🤍'}
                </button>
            </div>
            
            <div class="prophet-name">
                ${dua.prophet === 'Muhammad' ? 'Prophet Muhammad ﷺ' : 
                  dua.prophet === 'General' ? 'General Dua' : 
                  `Prophet ${dua.prophet} (AS)`}
            </div>
            
            <div class="arabic-text">${dua.arabic}</div>
            <div class="transliteration">${dua.transliteration}</div>
            <div class="swahili-text">${dua.swahili}</div>
            <div class="reference">📖 ${dua.reference}</div>
        </div>
    `;
}

function attachFavoriteListeners() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            toggleFavorite(id);
        });
    });
}

// ===== DHIKR SYSTEM =====
function initDhikrSystem() {
    console.log('Initializing Dhikr system...');
    
    // Load dhikr data
    if (!window.dhikrCollection) {
        console.error('Dhikr data not loaded');
        return;
    }
    
    dhikrList = window.dhikrCollection;
    
    // Update stats
    updateDhikrStats();
    
    // Render first dhikr
    renderCurrentDhikr();
    
    // Render dhikr grid
    renderDhikrGrid();
    
    // Initialize dhikr event listeners
    initDhikrEventListeners();
}

function initDhikrEventListeners() {
    // Navigation
    document.getElementById('prevDhikr')?.addEventListener('click', () => navigateDhikr('prev'));
    document.getElementById('nextDhikr')?.addEventListener('click', () => navigateDhikr('next'));
    
    // Counter buttons
    document.getElementById('counterIncrement')?.addEventListener('click', incrementCounter);
    document.getElementById('counterDecrement')?.addEventListener('click', decrementCounter);
    document.getElementById('counterReset')?.addEventListener('click', resetCounter);
    document.getElementById('counterSave')?.addEventListener('click', saveCounter);
    
    // Preset buttons
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const preset = parseInt(this.dataset.preset);
            setTarget(preset);
        });
    });
    
    // Category filters
    document.querySelectorAll('.dhikr-cat-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.dhikr-cat-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentDhikrCategory = this.dataset.cat;
            renderDhikrGrid();
        });
    });
    
    // Keyboard support
    document.addEventListener('keydown', function(e) {
        if (!document.getElementById('dhikr-tab').classList.contains('active')) return;
        
        if (e.code === 'Space' && !e.repeat) {
            e.preventDefault();
            incrementCounter();
        } else if (e.code === 'ArrowLeft') {
            navigateDhikr('prev');
        } else if (e.code === 'ArrowRight') {
            navigateDhikr('next');
        } else if (e.code === 'KeyR') {
            resetCounter();
        }
    });
}

function renderCurrentDhikr() {
    const dhikr = dhikrList[currentDhikrIndex];
    if (!dhikr) return;
    
    document.getElementById('dhikrArabic').textContent = dhikr.arabic;
    document.getElementById('dhikrTranslit').textContent = dhikr.translit;
    document.getElementById('dhikrMeaning').textContent = dhikr.meaning;
    document.getElementById('dhikrRecommended').textContent = `Recommended: ${dhikr.recommended} times`;
    
    // Update position
    document.getElementById('dhikrPosition').textContent = 
        `${currentDhikrIndex + 1} / ${dhikrList.length}`;
    
    // Set target from recommended
    setTarget(dhikr.recommended);
    resetCounter();
}

function renderDhikrGrid() {
    const grid = document.getElementById('dhikrGrid');
    if (!grid) return;
    
    let filtered = dhikrList;
    
    // Apply category filter
    if (currentDhikrCategory !== 'all') {
        filtered = dhikrList.filter(d => d.category === currentDhikrCategory);
    }
    
    let html = '';
    filtered.forEach((dhikr, index) => {
        html += `
            <div class="dhikr-card" data-index="${index}" data-category="${dhikr.category}">
                <div class="dhikr-card-arabic">${dhikr.arabic}</div>
                <div class="dhikr-card-meaning">${dhikr.meaning}</div>
                <div class="dhikr-card-count">${dhikr.recommended}x</div>
            </div>
        `;
    });
    
    grid.innerHTML = html;
    
    // Add click listeners to cards
    document.querySelectorAll('.dhikr-card').forEach(card => {
        card.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            currentDhikrIndex = index;
            renderCurrentDhikr();
        });
    });
}

function navigateDhikr(direction) {
    if (direction === 'prev') {
        currentDhikrIndex = (currentDhikrIndex - 1 + dhikrList.length) % dhikrList.length;
    } else {
        currentDhikrIndex = (currentDhikrIndex + 1) % dhikrList.length;
    }
    renderCurrentDhikr();
}

function incrementCounter() {
    currentCounter++;
    if (currentCounter >= currentTarget) {
        // Celebration effect
        showCompletionEffect();
        
        // Auto-advance after completion
        setTimeout(() => {
            if (confirm('🎉 Completed! Move to next dhikr?')) {
                navigateDhikr('next');
            }
        }, 300);
    }
    updateCounterDisplay();
}

function decrementCounter() {
    if (currentCounter > 0) {
        currentCounter--;
        updateCounterDisplay();
    }
}

function resetCounter() {
    currentCounter = 0;
    updateCounterDisplay();
}

function setTarget(target) {
    currentTarget = target;
    resetCounter();
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.preset) === target) {
            btn.classList.add('active');
        }
    });
}

function saveCounter() {
    sessionTotal += currentCounter;
    overallTotal += currentCounter;
    
    // Save to localStorage
    localStorage.setItem('dhikrOverallTotal', overallTotal);
    
    updateDhikrStats();
    
    // Show toast
    showToast('✅ Saved!');
    
    resetCounter();
}

function updateCounterDisplay() {
    document.getElementById('counterValue').textContent = currentCounter;
    
    // Update progress bar
    const percentage = (currentCounter / currentTarget) * 100;
    document.getElementById('progressBar').style.width = `${percentage}%`;
    
    // Update color based on progress
    if (percentage >= 100) {
        document.getElementById('progressBar').style.background = '#10b981';
    } else if (percentage >= 75) {
        document.getElementById('progressBar').style.background = '#34d399';
    } else if (percentage >= 50) {
        document.getElementById('progressBar').style.background = '#60a5fa';
    } else {
        document.getElementById('progressBar').style.background = '#4f46e5';
    }
}

function updateDhikrStats() {
    document.getElementById('totalDhikr').textContent = dhikrList.length;
    document.getElementById('sessionCount').textContent = sessionTotal;
    document.getElementById('totalCount').textContent = overallTotal;
}

function showCompletionEffect() {
    const card = document.querySelector('.dhikr-main-card');
    card.style.transform = 'scale(1.02)';
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 200);
}

function showToast(message) {
    // Create toast if it doesn't exist
    let toast = document.querySelector('.toast-message');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast-message';
        document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// ===== FAVORITES SYSTEM =====
function loadFavorites() {
    const saved = localStorage.getItem('samkran_favorites');
    if (saved) {
        try {
            favorites = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading favorites:', e);
            favorites = [];
        }
    }
    updateFavoriteCount();
}

function saveFavorites() {
    localStorage.setItem('samkran_favorites', JSON.stringify(favorites));
    updateFavoriteCount();
}

function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);
    } else {
        favorites.splice(index, 1);
    }
    saveFavorites();
    
    // Update button appearance
    const btn = document.querySelector(`.favorite-btn[data-id="${id}"]`);
    if (btn) {
        if (favorites.includes(id)) {
            btn.innerHTML = '❤️';
            btn.classList.add('active');
        } else {
            btn.innerHTML = '🤍';
            btn.classList.remove('active');
        }
    }
    
    // If currently on favorites filter, reapply
    if (currentFilter === 'favorites') {
        applyFilters();
    }
}

// ===== STATS FUNCTIONS =====
function updateStats() {
    document.getElementById('totalDuas').innerText = allDuas.length;
    document.getElementById('quranCount').innerText = allDuas.filter(d => d.source === 'quran').length;
    document.getElementById('hadithCount').innerText = allDuas.filter(d => d.source === 'hadith').length;
    
    const prophets = new Set(allDuas.map(d => d.prophet));
    document.getElementById('prophetCount').innerText = prophets.size;
    
    updateFavoriteCount();
}

function updateFavoriteCount() {
    document.getElementById('favoriteCount').innerText = favorites.length;
}

function updateActiveFilters() {
    // Update filter button text
    const filterBtn = document.querySelector(`.filter-btn[data-filter="${currentFilter}"]`);
    if (filterBtn) {
        filterBtn.classList.add('active');
    }
}

// ===== SAVE/LOAD DATA =====
function loadSavedData() {
    // Load dhikr totals
    const savedOverall = localStorage.getItem('dhikrOverallTotal');
    if (savedOverall) {
        overallTotal = parseInt(savedOverall);
    }
    
    const savedSession = localStorage.getItem('dhikrSessionTotal');
    if (savedSession) {
        sessionTotal = parseInt(savedSession);
    }
    
    updateDhikrStats();
}

// ===== UTILITY FUNCTIONS =====
function showError(message) {
    const grid = document.getElementById('duasGrid');
    if (grid) {
        grid.innerHTML = `
            <div class="error-message" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <h3>⚠️ Error</h3>
                <p>${message}</p>
            </div>
        `;
    }
}

// Export functions for debugging
window.samkranSystem = {
    duas: () => allDuas,
    dhikr: () => dhikrList,
    favorites: () => favorites,
    refresh: applyFilters
};

console.log('✅ Dua & Dhikr system ready!');