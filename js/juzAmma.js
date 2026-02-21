// ===== JUZ 'AMMA MAIN LOGIC =====
// Handles rendering and interaction
// FIXED: Now properly loads Arabic text from external file

let currentView = 'list'; // 'list' or 'surah'
let currentSurah = null;
let currentDisplayMode = 'arabic'; // 'arabic', 'transliteration', 'translation'

// Arabic text for all surahs (keeping this in the same file)
const arabicText = {
    // Surah 78 - An-Naba'
    78: [
        "عَمَّ يَتَسَاءَلُونَ",
        "عَنِ النَّبَإِ الْعَظِيمِ",
        "الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ",
        "كَلَّا سَيَعْلَمُونَ",
        "ثُمَّ كَلَّا سَيَعْلَمُونَ",
        "أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا",
        "وَالْجِبَالَ أَوْتَادًا",
        "وَخَلَقْنَاكُمْ أَزْوَاجًا",
        "وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا",
        "وَجَعَلْنَا اللَّيْلَ لِبَاسًا",
        "وَجَعَلْنَا النَّهَارَ مَعَاشًا",
        "وَبَنَيْنَا فَوْقَكُمْ سَبْعًا شِدَادًا",
        "وَجَعَلْنَا سِرَاجًا وَهَّاجًا",
        "وَأَنزَلْنَا مِنَ الْمُعْصِرَاتِ مَاءً ثَجَّاجًا",
        "لِّنُخْرِجَ بِهِ حَبًّا وَنَبَاتًا",
        "وَجَنَّاتٍ أَلْفَافًا",
        "إِنَّ يَوْمَ الْفَصْلِ كَانَ مِيقَاتًا",
        "يَوْمَ يُنفَخُ فِي الصُّورِ فَتَأْتُونَ أَفْوَاجًا",
        "وَفُتِحَتِ السَّمَاءُ فَكَانَتْ أَبْوَابًا",
        "وَسُيِّرَتِ الْجِبَالُ فَكَانَتْ سَرَابًا",
        "إِنَّ جَهَنَّمَ كَانَتْ مِرْصَادًا",
        "لِّلطَّاغِينَ مَآبًا",
        "لَّابِثِينَ فِيهَا أَحْقَابًا",
        "لَّا يَذُوقُونَ فِيهَا بَرْدًا وَلَا شَرَابًا",
        "إِلَّا حَمِيمًا وَغَسَّاقًا",
        "جَزَاءً وِفَاقًا",
        "إِنَّهُمْ كَانُوا لَا يَرْجُونَ حِسَابًا",
        "وَكَذَّبُوا بِآيَاتِنَا كِذَّابًا",
        "وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ كِتَابًا",
        "فَذُوقُوا فَلَن نَّزِيدَكُمْ إِلَّا عَذَابًا",
        "إِنَّ لِلْمُتَّقِينَ مَفَازًا",
        "حَدَائِقَ وَأَعْنَابًا",
        "وَكَوَاعِبَ أَتْرَابًا",
        "وَكَأْسًا دِهَاقًا",
        "لَّا يَسْمَعُونَ فِيهَا لَغْوًا وَلَا كِذَّابًا",
        "جَزَاءً مِّن رَّبِّكَ عَطَاءً حِسَابًا",
        "رَّبِّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الرَّحْمَٰنِ  لَا يَمْلِكُونَ مِنْهُ خِطَابًا",
        "يَوْمَ يَقُومُ الرُّوحُ وَالْمَلَائِكَةُ صَفًّا  لَّا يَتَكَلَّمُونَ إِلَّا مَنْ أَذِنَ لَهُ الرَّحْمَٰنُ وَقَالَ صَوَابًا",
        "ذَٰلِكَ الْيَوْمُ الْحَقُّ ۖ فَمَن شَاءَ اتَّخَذَ إِلَىٰ رَبِّهِ مَآبًا",
        "إِنَّا أَنذَرْنَاكُمْ عَذَابًا قَرِيبًا يَوْمَ يَنظُرُ الْمَرْءُ مَا قَدَّمَتْ يَدَاهُ وَيَقُولُ الْكَافِرُ يَا لَيْتَنِي كُنتُ تُرَابًا"
    ],
    // Surah 79 - An-Nazi'at
    79: [
        "وَالنَّازِعَاتِ غَرْقًا",
        "وَالنَّاشِطَاتِ نَشْطًا",
        "وَالسَّابِحَاتِ سَبْحًا",
        "فَالسَّابِقَاتِ سَبْقًا",
        "فَالْمُدَبِّرَاتِ أَمْرًا",
        "يَوْمَ تَرْجُفُ الرَّاجِفَةُ",
        "تَتْبَعُهَا الرَّادِفَةُ",
        "قُلُوبٌ يَوْمَئِذٍ وَاجِفَةٌ",
        "أَبْصَارُهَا خَاشِعَةٌ",
        "يَقُولُونَ أَإِنَّا لَمَرْدُودُونَ فِي الْحَافِرَةِ",
        "أَإِذَا كُنَّا عِظَامًا نَّخِرَةً",
        "قَالُوا تِلْكَ إِذًا كَرَّةٌ خَاسِرَةٌ",
        "فَإِنَّمَا هِيَ زَجْرَةٌ وَاحِدَةٌ",
        "فَإِذَا هُم بِالسَّاهِرَةِ"
    ],
    // Surah 112 - Al-Ikhlas
    112: [
        "قُلْ هُوَ اللَّهُ أَحَدٌ",
        "اللَّهُ الصَّمَدُ",
        "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ"
    ],
    
    // Surah 113 - Al-Falaq
    113: [
        "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
        "مِن شَرِّ مَا خَلَقَ",
        "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
        "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
        "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ"
    ],
    
    // Surah 114 - An-Nas
    114: [
        "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        "مَلِكِ النَّاسِ",
        "إِلَهِ النَّاسِ",
        "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
        "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
        "مِنَ الْجِنَّةِ وَالنَّاسِ"
    ]
    // Add more surahs as needed...
};

function initJuzAmma() {
    console.log('Initializing Juz Amma...');
    console.log('Arabic text available:', Object.keys(arabicText).length + ' surahs');
    console.log('Transliteration available:', window.transliterationData ? Object.keys(window.transliterationData).length + ' surahs' : 'Not loaded');
    console.log('Swahili translations available:', window.swahiliTranslations ? Object.keys(window.swahiliTranslations).length + ' surahs' : 'Not loaded');
    
    loadSurahList();
    setupEventListeners();
    loadProgress();
}

function loadSurahList() {
    const content = document.getElementById('juz-content');
    if (!content) {
        console.error('juz-content element not found');
        return;
    }
    
    if (!window.juzAmmaData) {
        content.innerHTML = '<div class="error-message">Juz Amma data not loaded. Please check that juzAmmaData.js is included.</div>';
        console.error('juzAmmaData not available');
        return;
    }
    
    let html = `
        <div class="juz-header">
            <h2>Juz ‘Amma - جزء عم</h2>
            <div class="progress-summary" id="progressSummary"></div>
        </div>
        <div class="surah-grid">
    `;
    
    window.juzAmmaData.forEach(surah => {
        const progress = surah.memorized ? 100 : (surah.progress || 0);
        const progressClass = progress >= 100 ? 'memorized' : '';
        
        html += `
            <div class="surah-card ${progressClass}" data-surah-id="${surah.id}" onclick="openSurah(${surah.id})">
                <div class="surah-number">${surah.surahNumber}</div>
                <div class="surah-info">
                    <div class="surah-arabic">${surah.arabicName}</div>
                    <div class="surah-english">${surah.englishName}</div>
                    <div class="surah-ayahs">${surah.ayahCount} Ayahs · ${surah.revelation}</div>
                </div>
                <div class="surah-progress">
                    <div class="progress-bar" style="width: ${progress}%"></div>
                </div>
                ${progress >= 100 ? '<span class="memorized-badge">✔ Memorized</span>' : ''}
                <button class="play-btn-small" onclick="event.stopPropagation(); openSurah(${surah.id})">▶</button>
            </div>
        `;
    });
    
    html += '</div>';
    content.innerHTML = html;
    
    updateProgressSummary();
}

function openSurah(surahId) {
    console.log('Opening surah:', surahId);
    
    const surah = window.juzAmmaData.find(s => s.id === surahId);
    if (!surah) {
        console.error('Surah not found:', surahId);
        return;
    }
    
    currentSurah = surah;
    currentView = 'surah';
    
    const content = document.getElementById('juz-content');
    if (!content) return;
    
    // Load audio if available
    if (window.AudioManager && surah.audioFile) {
        const audioPath = `audio/${surah.audioFile}`;
        window.AudioManager.loadSurah(surahId, audioPath);
    }
    
    // Get saved progress
    const savedProgress = window.AudioManager ? window.AudioManager.loadProgress(surahId) : { lastAyah: 1 };
    
    let html = `
        <div class="surah-view">
            <button class="back-btn" onclick="goBackToList()">← Back to Juz 'Amma</button>
            
            <div class="surah-header">
                <h2 class="surah-arabic-large">${surah.arabicName}</h2>
                <h3 class="surah-english-large">${surah.englishName} · ${surah.englishTranslation || ''}</h3>
                <div class="surah-meta">${surah.ayahCount} Ayahs · ${surah.revelation}</div>
            </div>
            
            <div class="audio-player">
                <div class="player-controls">
                    <button class="control-btn" onclick="togglePlay()" id="playPauseBtn">▶ Play</button>
                    <button class="control-btn" onclick="toggleRepeat()" id="repeatBtn">🔁 None</button>
                    <div class="speed-control">
                        <label>Speed:</label>
                        <select onchange="setSpeed(parseFloat(this.value))" id="speedSelect">
                            <option value="0.5">0.5x</option>
                            <option value="0.75">0.75x</option>
                            <option value="1" selected>1x</option>
                            <option value="1.25">1.25x</option>
                            <option value="1.5">1.5x</option>
                        </select>
                    </div>
                </div>
                
                <div class="progress-container">
                    <div class="progress-bar" id="audioProgress" style="width: 0%"></div>
                    <input type="range" min="0" max="100" value="0" class="seek-slider" id="seekSlider" oninput="handleSeek(this.value)">
                </div>
            </div>
            
            <div class="view-controls">
                <button class="view-btn ${currentDisplayMode === 'arabic' ? 'active' : ''}" onclick="setDisplayMode('arabic')" id="viewArabic">📖 Arabic</button>
                <button class="view-btn ${currentDisplayMode === 'transliteration' ? 'active' : ''}" onclick="setDisplayMode('transliteration')" id="viewTranslit">🔤 Transliteration</button>
                <button class="view-btn ${currentDisplayMode === 'translation' ? 'active' : ''}" onclick="setDisplayMode('translation')" id="viewTrans">🇹🇿 Swahili</button>
                <button class="view-btn" onclick="toggleMemorizationMode()" id="memorizeBtn">🧠 Memorize</button>
            </div>
            
            <div class="ayah-container" id="ayahContainer">
                <!-- Ayahs will be loaded here -->
            </div>
            
            <div class="surah-navigation">
                <button class="nav-btn" onclick="navigateSurah('prev')" ${surah.id <= 78 ? 'disabled' : ''}>← Previous Surah</button>
                <button class="nav-btn" onclick="markSurahMemorized(${surah.id})">✓ Mark as Memorized</button>
                <button class="nav-btn" onclick="navigateSurah('next')" ${surah.id >= 114 ? 'disabled' : ''}>Next Surah →</button>
            </div>
        </div>
    `;
    
    content.innerHTML = html;
    
    // Load ayahs with current display mode
    loadAyahs(surah.id, currentDisplayMode);
    
    // Set up audio manager callbacks if available
    if (window.AudioManager) {
        window.AudioManager.updatePlayButton = updatePlayButton;
        window.AudioManager.updateRepeatButton = updateRepeatButton;
        window.AudioManager.updateProgressBar = updateProgressBar;
        
        // Set initial states
        updatePlayButton();
        updateRepeatButton();
    }
}

function loadAyahs(surahId, mode = 'arabic') {
    console.log('Loading ayahs for surah:', surahId, 'mode:', mode);
    
    const container = document.getElementById('ayahContainer');
    if (!container) {
        console.error('ayahContainer not found');
        return;
    }
    
    const surah = window.juzAmmaData.find(s => s.id === surahId);
    if (!surah) {
        console.error('Surah not found:', surahId);
        return;
    }
    
    const savedProgress = window.AudioManager ? window.AudioManager.loadProgress(surahId) : { lastAyah: 1 };
    const currentAyah = savedProgress.lastAyah || 1;
    
    let html = '';
    
    for (let i = 1; i <= surah.ayahCount; i++) {
        const ayahClass = i === currentAyah ? 'ayah active-ayah' : 'ayah';
        const ayahId = `ayah-${i}`;
        const ayahNumber = i;
        
        let content = '';
        
        if (mode === 'arabic') {
            // Get Arabic text from our local object
            const arabic = arabicText[surahId]?.[i-1];
            if (arabic) {
                content = `<span class="ayah-arabic">${arabic}</span>`;
            } else {
                // Fallback if Arabic text not available
                content = `<span class="ayah-arabic">آيَة ${i}</span>`;
                console.warn(`Arabic text not found for surah ${surahId}, ayah ${i}`);
            }
        } else if (mode === 'transliteration') {
            // Get transliteration from window object
            const translit = window.transliterationData?.[surahId]?.[i];
            if (translit) {
                content = `<span class="ayah-translit">${translit}</span>`;
            } else {
                content = `<span class="ayah-translit">Transliteration of ayah ${i}</span>`;
            }
        } else if (mode === 'translation') {
            // Get Swahili translation from window object
            const translation = window.swahiliTranslations?.[surahId]?.[i];
            if (translation) {
                content = `<span class="ayah-swahili">${translation}</span>`;
            } else {
                content = `<span class="ayah-swahili">Tafsiri ya aya ya ${i}</span>`;
            }
        }
        
        html += `
            <div class="${ayahClass}" id="${ayahId}" data-ayah="${i}" onclick="setCurrentAyah(${i})">
                <span class="ayah-number">${ayahNumber}.</span>
                ${content}
            </div>
        `;
    }
    
    container.innerHTML = html;
    
    // Scroll to current ayah
    setTimeout(() => {
        const activeAyah = document.getElementById(`ayah-${currentAyah}`);
        if (activeAyah) {
            activeAyah.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
    
    console.log(`Loaded ${surah.ayahCount} ayahs in ${mode} mode`);
}

function setDisplayMode(mode) {
    currentDisplayMode = mode;
    
    // Update button states
    ['viewArabic', 'viewTranslit', 'viewTrans'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.classList.remove('active');
    });
    
    const activeBtn = document.getElementById(
        mode === 'arabic' ? 'viewArabic' : 
        mode === 'transliteration' ? 'viewTranslit' : 'viewTrans'
    );
    if (activeBtn) activeBtn.classList.add('active');
    
    // Reload ayahs with new mode
    if (currentSurah) {
        loadAyahs(currentSurah.id, mode);
    }
}

function toggleMemorizationMode() {
    const container = document.getElementById('ayahContainer');
    const btn = document.getElementById('memorizeBtn');
    
    if (!container || !btn) return;
    
    if (container.classList.contains('memorization-mode')) {
        container.classList.remove('memorization-mode');
        btn.classList.remove('active');
        btn.innerText = '🧠 Memorize';
    } else {
        container.classList.add('memorization-mode');
        btn.classList.add('active');
        btn.innerText = '📖 Show Text';
    }
}

function setCurrentAyah(ayahNumber) {
    if (!currentSurah || !window.AudioManager) return;
    
    // Remove active class from all ayahs
    document.querySelectorAll('.ayah').forEach(ayah => {
        ayah.classList.remove('active-ayah');
    });
    
    // Add active class to selected ayah
    const selectedAyah = document.getElementById(`ayah-${ayahNumber}`);
    if (selectedAyah) {
        selectedAyah.classList.add('active-ayah');
    }
    
    // Save progress
    window.AudioManager.saveProgress(currentSurah.id, ayahNumber);
}

function goBackToList() {
    currentView = 'list';
    currentSurah = null;
    loadSurahList();
}

function navigateSurah(direction) {
    if (!currentSurah) return;
    
    let newId = direction === 'next' ? currentSurah.id + 1 : currentSurah.id - 1;
    
    // Check if within Juz Amma range (78-114)
    if (newId < 78 || newId > 114) return;
    
    openSurah(newId);
}

function markSurahMemorized(surahId) {
    if (!window.juzAmmaData) return;
    
    const surah = window.juzAmmaData.find(s => s.id === surahId);
    if (surah) {
        surah.memorized = true;
        surah.progress = 100;
        
        // Save to localStorage
        const saved = JSON.parse(localStorage.getItem('juzAmmaProgress') || '{}');
        if (!saved[surahId]) saved[surahId] = {};
        saved[surahId].memorized = true;
        saved[surahId].timestamp = new Date().toISOString();
        localStorage.setItem('juzAmmaProgress', JSON.stringify(saved));
        
        // Show success message
        alert(`✅ Surah ${surah.englishName} marked as memorized!`);
        
        // Update UI if we're in list view
        if (currentView === 'list') {
            loadSurahList();
        }
    }
}

function updateProgressSummary() {
    const summary = document.getElementById('progressSummary');
    if (!summary || !window.juzAmmaData) return;
    
    const memorized = window.juzAmmaData.filter(s => s.memorized || (s.progress && s.progress >= 100)).length;
    const total = window.juzAmmaData.length;
    const percentage = Math.round((memorized / total) * 100);
    
    summary.innerHTML = `
        <div class="summary-stats">
            <span class="stat">${memorized}/${total} Surahs Memorized</span>
            <span class="stat">${percentage}% Complete</span>
        </div>
        <div class="overall-progress-bar">
            <div class="progress-fill" style="width: ${percentage}%"></div>
        </div>
    `;
}

function loadProgress() {
    const saved = JSON.parse(localStorage.getItem('juzAmmaProgress') || '{}');
    if (window.juzAmmaData) {
        window.juzAmmaData.forEach(surah => {
            if (saved[surah.id] && saved[surah.id].memorized) {
                surah.memorized = true;
                surah.progress = 100;
            }
        });
    }
}

// ===== AUDIO CONTROL FUNCTIONS =====
function togglePlay() {
    if (window.AudioManager) {
        window.AudioManager.togglePlay();
    }
}

function toggleRepeat() {
    if (window.AudioManager) {
        window.AudioManager.toggleRepeat();
    }
}

function setSpeed(speed) {
    if (window.AudioManager) {
        window.AudioManager.setSpeed(speed);
    }
}

function handleSeek(value) {
    if (window.AudioManager) {
        window.AudioManager.seekTo(parseFloat(value));
    }
}

function updatePlayButton() {
    const btn = document.getElementById('playPauseBtn');
    if (btn && window.AudioManager) {
        btn.innerText = window.AudioManager.isPlaying ? '⏸ Pause' : '▶ Play';
    }
}

function updateRepeatButton() {
    const btn = document.getElementById('repeatBtn');
    if (btn && window.AudioManager) {
        const mode = window.AudioManager.repeatMode;
        btn.innerText = mode === 'none' ? '🔁 None' : mode === 'surah' ? '🔁 Surah' : '🔂 Ayah';
    }
}

function updateProgressBar(progress) {
    const bar = document.getElementById('audioProgress');
    if (bar) bar.style.width = progress + '%';
    
    const slider = document.getElementById('seekSlider');
    if (slider) slider.value = progress;
}

// Setup event listeners
function setupEventListeners() {
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (currentView !== 'surah' || !currentSurah) return;
        
        if (e.key === 'ArrowLeft') {
            navigateSurah('prev');
        } else if (e.key === 'ArrowRight') {
            navigateSurah('next');
        } else if (e.key === ' ' && !e.repeat) {
            e.preventDefault();
            togglePlay();
        }
    });
}

// Export functions to window
window.initJuzAmma = initJuzAmma;
window.openSurah = openSurah;
window.goBackToList = goBackToList;
window.setDisplayMode = setDisplayMode;
window.toggleMemorizationMode = toggleMemorizationMode;
window.setCurrentAyah = setCurrentAyah;
window.navigateSurah = navigateSurah;
window.markSurahMemorized = markSurahMemorized;
window.togglePlay = togglePlay;
window.toggleRepeat = toggleRepeat;
window.setSpeed = setSpeed;
window.handleSeek = handleSeek;