// ===== AUDIO MANAGER =====
// Handles all audio playback, speed, repeat, and progress

const AudioManager = {
    currentAudio: null,
    currentSurahId: null,
    isPlaying: false,
    repeatMode: 'none', // 'none', 'surah', 'ayah'
    playbackSpeed: 1.0,
    currentAyah: 1,
    
    init() {
        this.currentAudio = new Audio();
        this.currentAudio.addEventListener('ended', () => this.handleAudioEnd());
        this.currentAudio.addEventListener('timeupdate', () => this.handleTimeUpdate());
    },
    
    loadSurah(surahId, audioPath) {
        this.currentSurahId = surahId;
        if (this.currentAudio) {
            this.currentAudio.src = audioPath;
            this.currentAudio.load();
        }
    },
    
    play() {
        if (this.currentAudio) {
            this.currentAudio.play()
                .then(() => {
                    this.isPlaying = true;
                    this.updatePlayButton();
                })
                .catch(error => console.error('Playback failed:', error));
        }
    },
    
    pause() {
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.isPlaying = false;
            this.updatePlayButton();
        }
    },
    
    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    },
    
    setSpeed(speed) {
        this.playbackSpeed = speed;
        if (this.currentAudio) {
            this.currentAudio.playbackRate = speed;
        }
        this.updateSpeedDisplay();
    },
    
    setRepeatMode(mode) {
        this.repeatMode = mode;
        if (this.currentAudio) {
            this.currentAudio.loop = (mode === 'surah');
        }
        this.updateRepeatButton();
    },
    
    toggleRepeat() {
        const modes = ['none', 'surah', 'ayah'];
        const currentIndex = modes.indexOf(this.repeatMode);
        const nextIndex = (currentIndex + 1) % modes.length;
        this.setRepeatMode(modes[nextIndex]);
    },
    
    handleAudioEnd() {
        if (this.repeatMode === 'ayah') {
            // Restart current ayah
            this.currentAudio.currentTime = 0;
            this.play();
        } else if (this.repeatMode === 'surah') {
            // Loop is already handled by .loop property
            // This is just a fallback
            this.play();
        } else {
            this.isPlaying = false;
            this.updatePlayButton();
        }
    },
    
    handleTimeUpdate() {
        if (this.currentAudio) {
            const progress = (this.currentAudio.currentTime / this.currentAudio.duration) * 100;
            this.updateProgressBar(progress);
        }
    },
    
    seekTo(percentage) {
        if (this.currentAudio && this.currentAudio.duration) {
            this.currentAudio.currentTime = (percentage / 100) * this.currentAudio.duration;
        }
    },
    
    // UI Update functions (to be implemented by main page)
    updatePlayButton() {},
    updateSpeedDisplay() {},
    updateRepeatButton() {},
    updateProgressBar(progress) {},
    
    // Storage for user preferences
    saveProgress(surahId, ayah) {
        const progress = JSON.parse(localStorage.getItem('juzAmmaProgress') || '{}');
        if (!progress[surahId]) progress[surahId] = {};
        progress[surahId].lastAyah = ayah;
        progress[surahId].timestamp = new Date().toISOString();
        localStorage.setItem('juzAmmaProgress', JSON.stringify(progress));
    },
    
    loadProgress(surahId) {
        const progress = JSON.parse(localStorage.getItem('juzAmmaProgress') || '{}');
        return progress[surahId] || { lastAyah: 1 };
    }
};

// Initialize
AudioManager.init();

// Export to window
window.AudioManager = AudioManager;
console.log('✅ Audio Manager initialized');