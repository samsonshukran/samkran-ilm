// ===== DUA.JS - Complete Dua Management System =====
// Handles: Loading, Filtering, Searching, Favorites, Rendering

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🤲 Dua system initializing...');
    
    // Check if data is loaded
    if (!window.quranDuas || !window.hadithDuas) {
        console.error('Dua data not loaded properly');
        showError('Dua data could not be loaded. Please refresh the page.');
        return;
    }
    
    // Initialize the Dua system
    initDuaSystem();
});

// ===== GLOBAL STATE =====
let allDuas = [];
let filteredDuas = [];
let currentFilter = 'all';
let currentCategory = 'all';
let currentProphet = 'all';
let currentSearchTerm = '';
let favorites = [];

// ===== INITIALIZATION =====
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
    initEventListeners();
    
    // Hide loading spinner
    document.getElementById('loadingSpinner')?.classList.add('hidden');
}

// ===== RENDER FUNCTIONS =====
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

// ===== FILTER FUNCTIONS =====
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

// ===== EVENT LISTENERS =====
function initEventListeners() {
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

function attachFavoriteListeners() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            toggleFavorite(id);
        });
    });
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
window.samkranDuas = {
    all: () => allDuas,
    filtered: () => filteredDuas,
    favorites: () => favorites,
    refresh: applyFilters
};

console.log('✅ Dua system ready!');