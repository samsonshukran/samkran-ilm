// ===== dua.js =====
// Handles rendering, filtering, search, and favorites for Duas

document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const duasContainer = document.getElementById('dua-sections');
    const noResultsDiv = document.getElementById('noResults');
    
    // State
    let currentSourceFilter = 'all'; // 'all', 'quran', 'hadith'
    let currentCategoryFilter = 'all';
    let currentSearchTerm = '';
    let favorites = JSON.parse(localStorage.getItem('duaFavorites') || '[]');

    // Helper: Check if a dua matches current filters
    function matchesFilters(dua) {
        // Source filter
        if (currentSourceFilter !== 'all' && dua.source !== currentSourceFilter) return false;
        // Category filter (if not 'all')
        if (currentCategoryFilter !== 'all' && dua.category !== currentCategoryFilter) return false;
        // Search term
        if (currentSearchTerm) {
            const term = currentSearchTerm.toLowerCase();
            return dua.arabic.includes(term) || 
                   dua.transliteration.toLowerCase().includes(term) || 
                   dua.translation.toLowerCase().includes(term) ||
                   dua.reference.toLowerCase().includes(term);
        }
        return true;
    }

    // Render all duas grouped by category
    function renderDuas() {
        // Filter duas
        const filteredDuas = duasData.filter(matchesFilters);
        
        if (filteredDuas.length === 0) {
            duasContainer.innerHTML = '';
            noResultsDiv.classList.remove('hidden');
            return;
        }
        noResultsDiv.classList.add('hidden');

        // Group by category
        const grouped = {};
        filteredDuas.forEach(dua => {
            if (!grouped[dua.category]) grouped[dua.category] = [];
            grouped[dua.category].push(dua);
        });

        // Build HTML
        let html = '<div class="dua-sections">';
        for (const [catKey, duas] of Object.entries(grouped)) {
            const categoryTitle = duaCategories[catKey] || catKey;
            html += `
                <div class="dua-section">
                    <h3 class="section-title">🤲 ${categoryTitle}</h3>
                    <div class="duas-grid">
            `;
            duas.forEach(dua => {
                const isFavorite = favorites.includes(dua.arabic); // simple key
                html += `
                    <div class="dua-card" data-arabic="${dua.arabic}">
                        <div class="card-badges">
                            <span class="source-badge ${dua.source}">${dua.source === 'quran' ? 'Qur\'an' : 'Hadith'}</span>
                            <span class="category-badge">${dua.category.replace('-', ' ')}</span>
                            <button class="favorite-btn ${isFavorite ? 'active' : ''}" title="Add to favorites">${isFavorite ? '❤️' : '🤍'}</button>
                        </div>
                        <div class="arabic-text">${dua.arabic}</div>
                        <div class="transliteration">${dua.transliteration}</div>
                        <div class="swahili-text">${dua.translation}</div>
                        <div class="reference">${dua.reference}</div>
                    </div>
                `;
            });
            html += '</div></div>';
        }
        html += '</div>';
        duasContainer.innerHTML = html;

        // Attach favorite button listeners
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const card = this.closest('.dua-card');
                const arabic = card.dataset.arabic;
                if (favorites.includes(arabic)) {
                    favorites = favorites.filter(f => f !== arabic);
                    this.textContent = '🤍';
                    this.classList.remove('active');
                } else {
                    favorites.push(arabic);
                    this.textContent = '❤️';
                    this.classList.add('active');
                }
                localStorage.setItem('duaFavorites', JSON.stringify(favorites));
            });
        });
    }

    // Initial render
    renderDuas();

    // ===== FILTER UI =====
    // Create filter bar (if not present in HTML)
    const duaContainer = document.querySelector('.dua-container');
    if (!document.querySelector('.filter-bar')) {
        const filterBar = document.createElement('div');
        filterBar.className = 'filter-bar';
        filterBar.innerHTML = `
            <div class="filter-buttons">
                <button class="filter-btn active" data-source="all">All</button>
                <button class="filter-btn" data-source="quran">Qur'an</button>
                <button class="filter-btn" data-source="hadith">Hadith</button>
            </div>
            <div class="category-pills" id="categoryPills">
                <button class="category-pill active" data-cat="all">All Categories</button>
                ${Object.entries(duaCategories).map(([key, label]) => `<button class="category-pill" data-cat="${key}">${label}</button>`).join('')}
            </div>
            <input type="text" class="search-box" placeholder="Search duas..." id="duaSearch">
        `;
        duaContainer.insertBefore(filterBar, duaContainer.querySelector('.dua-sections'));
    }

    // Source filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentSourceFilter = this.dataset.source;
            renderDuas();
        });
    });

    // Category pills
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.addEventListener('click', function() {
            document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            currentCategoryFilter = this.dataset.cat;
            renderDuas();
        });
    });

    // Search
    const searchInput = document.getElementById('duaSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearchTerm = this.value;
            renderDuas();
        });
    }
});