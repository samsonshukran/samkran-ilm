// ===== AUDIO MANAGER (FIXED & STABLE VERSION) =====
// Handles audio playback, speed, repeat, progress, and errors safely

const AudioManager = {
    currentAudio: null,
    currentSurahId: null,
    isPlaying: false,
    repeatMode: 'none', // 'none', 'surah', 'ayah'
    playbackSpeed: 1.0,
    currentAyah: 1,

    init() {
        // Prevent double initialization
        if (this.currentAudio) return;

        this.currentAudio = new Audio();
        this.currentAudio.preload = "auto";

        // Apply saved playback speed
        this.currentAudio.playbackRate = this.playbackSpeed;

        // EVENTS
        this.currentAudio.addEventListener('ended', () => this.handleAudioEnd());
        this.currentAudio.addEventListener('timeupdate', () => this.handleTimeUpdate());
        this.currentAudio.addEventListener('loadedmetadata', () => {
            console.log("✅ Audio metadata loaded");
        });
        this.currentAudio.addEventListener('error', (e) => {
            console.error("❌ Audio error:", e);
            alert("Audio failed to load. Check file path or internet.");
        });

        console.log("✅ Audio Manager initialized");
    },

    loadSurah(surahId, audioPath) {
        if (!audioPath) {
            console.error("❌ No audio path provided");
            return;
        }

        this.currentSurahId = surahId;

        if (!this.currentAudio) this.init();

        this.pause();
        this.currentAudio.src = audioPath;
        this.currentAudio.load();
        this.currentAudio.playbackRate = this.playbackSpeed;

        console.log("🎵 Loaded Surah:", surahId);
    },

    async play() {
        if (!this.currentAudio) return;

        try {
            await this.currentAudio.play();
            this.isPlaying = true;
            this.updatePlayButton();
        } catch (error) {
            console.error("❌ Playback failed:", error);
            alert("Playback blocked. Click play button manually.");
        }
    },

    pause() {
        if (!this.currentAudio) return;

        this.currentAudio.pause();
        this.isPlaying = false;
        this.updatePlayButton();
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
        console.log("⚡ Speed set to:", speed);
    },

    setRepeatMode(mode) {
        this.repeatMode = mode;

        if (this.currentAudio) {
            this.currentAudio.loop = (mode === 'surah');
        }

        this.updateRepeatButton();
        console.log("🔁 Repeat mode:", mode);
    },

    toggleRepeat() {
        const modes = ['none', 'surah', 'ayah'];
        const currentIndex = modes.indexOf(this.repeatMode);
        const nextIndex = (currentIndex + 1) % modes.length;
        this.setRepeatMode(modes[nextIndex]);
    },

    handleAudioEnd() {
        if (this.repeatMode === 'ayah') {
            this.currentAudio.currentTime = 0;
            this.play();
        } else if (this.repeatMode === 'surah') {
            // Surah loop handled by audio.loop
            this.play();
        } else {
            this.isPlaying = false;
            this.updatePlayButton();
        }
    },

    handleTimeUpdate() {
        if (!this.currentAudio || !this.currentAudio.duration || isNaN(this.currentAudio.duration)) {
            return;
        }

        const progress =
            (this.currentAudio.currentTime / this.currentAudio.duration) * 100;

        this.updateProgressBar(progress);
    },

    seekTo(percentage) {
        if (!this.currentAudio || !this.currentAudio.duration) return;

        const time = (percentage / 100) * this.currentAudio.duration;
        this.currentAudio.currentTime = time;
    },

    stop() {
        if (!this.currentAudio) return;

        this.pause();
        this.currentAudio.currentTime = 0;
    },

    // ===== UI PLACEHOLDERS =====
    updatePlayButton() {},
    updateSpeedDisplay() {},
    updateRepeatButton() {},
    updateProgressBar(progress) {},

    // ===== LOCAL STORAGE =====
    saveProgress(surahId, ayah) {
        const progress = JSON.parse(
            localStorage.getItem('juzAmmaProgress') || '{}'
        );

        if (!progress[surahId]) progress[surahId] = {};

        progress[surahId].lastAyah = ayah;
        progress[surahId].timestamp = new Date().toISOString();

        localStorage.setItem('juzAmmaProgress', JSON.stringify(progress));
    },

    loadProgress(surahId) {
        const progress = JSON.parse(
            localStorage.getItem('juzAmmaProgress') || '{}'
        );

        return progress[surahId] || { lastAyah: 1 };
    }
};

// Wait until DOM ready (important for some browsers)
document.addEventListener("DOMContentLoaded", () => {
    AudioManager.init();
    window.AudioManager = AudioManager;
});