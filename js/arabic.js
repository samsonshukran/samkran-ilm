// ===== ARABIC.JS - Complete Arabic Learning Module =====
// Handles rendering, interactions, progress tracking, and quiz functionality

// Global variables
let currentLearningTab = 'letters';
let currentWordIndex = 0;
let filteredWords = [];
let currentConversationIndex = 0;
let currentConversationLines = [];
let currentPracticeLine = null;
let quizCorrectCount = 0;
let quizWrongCount = 0;
let currentQuizQuestions = [];
let currentQuizIndex = 0;
let viewedLetters = [];
let viewedWords = [];
let viewedPhrases = [];
let viewedConversations = [];

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Arabic learning page initializing...');
    
    // Check if data is loaded
    if (window.arabicLearningData) {
        console.log('Arabic learning data available, rendering...');
        renderLetters();
        renderWords();
        renderPhrases();
        renderSentences();
        renderConversations();
        loadRandomQuizQuestion();
        
        // Load progress from localStorage
        loadLearningProgress();
        
        // Setup search listeners
        setupSearchListeners();
    } else {
        console.error('Arabic learning data not loaded!');
        showErrorMessage();
    }
});

// ===== PROGRESS TRACKING =====

function loadLearningProgress() {
    const savedProgress = localStorage.getItem('arabicLearningProgress');
    if (savedProgress) {
        try {
            const progress = JSON.parse(savedProgress);
            viewedLetters = progress.viewedLetters || [];
            viewedWords = progress.viewedWords || [];
            viewedPhrases = progress.viewedPhrases || [];
            viewedConversations = progress.viewedConversations || [];
            updateAllProgress();
        } catch (e) {
            console.error('Error loading progress:', e);
        }
    }
}

function saveLearningProgress() {
    const progress = {
        viewedLetters,
        viewedWords,
        viewedPhrases,
        viewedConversations
    };
    localStorage.setItem('arabicLearningProgress', JSON.stringify(progress));
    updateAllProgress();
}

function updateAllProgress() {
    // Letters progress
    if (window.arabicLearningData && window.arabicLearningData.letters) {
        const lettersProgress = (viewedLetters.length / window.arabicLearningData.letters.length) * 100;
        const lettersProgressBar = document.getElementById('lettersProgress');
        const lettersCount = document.getElementById('lettersCount');
        if (lettersProgressBar) lettersProgressBar.style.width = lettersProgress + '%';
        if (lettersCount) lettersCount.innerText = `${viewedLetters.length}/${window.arabicLearningData.letters.length}`;
    }
    
    // Words progress (first 50 words)
    if (window.arabicLearningData && window.arabicLearningData.words) {
        const wordsTotal = Math.min(50, window.arabicLearningData.words.length);
        const wordsProgress = (viewedWords.length / wordsTotal) * 100;
        const wordsProgressBar = document.getElementById('wordsProgress');
        const wordsCount = document.getElementById('wordsCount');
        if (wordsProgressBar) wordsProgressBar.style.width = wordsProgress + '%';
        if (wordsCount) wordsCount.innerText = `${viewedWords.length}/${wordsTotal}`;
    }
    
    // Phrases progress (first 30 phrases)
    if (window.arabicLearningData && window.arabicLearningData.phrases) {
        const phrasesTotal = Math.min(30, window.arabicLearningData.phrases.length);
        const phrasesProgress = (viewedPhrases.length / phrasesTotal) * 100;
        const phrasesProgressBar = document.getElementById('phrasesProgress');
        const phrasesCount = document.getElementById('phrasesCount');
        if (phrasesProgressBar) phrasesProgressBar.style.width = phrasesProgress + '%';
        if (phrasesCount) phrasesCount.innerText = `${viewedPhrases.length}/${phrasesTotal}`;
    }
    
    // Conversations progress
    if (window.arabicLearningData && window.arabicLearningData.conversations) {
        const conversationsProgress = (viewedConversations.length / window.arabicLearningData.conversations.length) * 100;
        const conversationsProgressBar = document.getElementById('conversationsProgress');
        const conversationsCount = document.getElementById('conversationsCount');
        if (conversationsProgressBar) conversationsProgressBar.style.width = conversationsProgress + '%';
        if (conversationsCount) conversationsCount.innerText = `${viewedConversations.length}/${window.arabicLearningData.conversations.length}`;
    }
}

function markLetterViewed(letter) {
    if (!viewedLetters.includes(letter)) {
        viewedLetters.push(letter);
        saveLearningProgress();
        renderLetters(); // Refresh to show viewed badge
    }
}

function markWordViewed(word) {
    if (!viewedWords.includes(word)) {
        viewedWords.push(word);
        saveLearningProgress();
    }
}

function markPhraseViewed(phrase) {
    if (!viewedPhrases.includes(phrase)) {
        viewedPhrases.push(phrase);
        saveLearningProgress();
        renderPhrases(); // Refresh to show viewed badge
    }
}

function markConversationViewed(topic) {
    if (!viewedConversations.includes(topic)) {
        viewedConversations.push(topic);
        saveLearningProgress();
    }
}

// ===== TAB SWITCHING =====

function switchLearningTab(tabId) {
    // Update tab buttons
    document.querySelectorAll('.learning-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find and activate the correct tab button
    const tabButtons = document.querySelectorAll('.learning-tabs .tab-btn');
    tabButtons.forEach(btn => {
        if (btn.textContent.includes(
            tabId === 'letters' ? '🔤' : 
            tabId === 'words' ? '📖' :
            tabId === 'phrases' ? '💬' :
            tabId === 'sentences' ? '📝' :
            tabId === 'conversations' ? '🗣️' : '❓'
        )) {
            btn.classList.add('active');
        }
    });
    
    // Hide all tabs
    document.querySelectorAll('.learning-tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabId + '-tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    currentLearningTab = tabId;
}

// ===== LETTERS SECTION =====

function renderLetters() {
    const container = document.getElementById('lettersGrid');
    if (!container || !window.arabicLearningData || !window.arabicLearningData.letters) return;
    
    container.innerHTML = '';
    
    window.arabicLearningData.letters.forEach(letter => {
        const card = document.createElement('div');
        card.className = 'letter-master-card';
        card.onclick = () => showLetterDetails(letter);
        
        const isViewed = viewedLetters.includes(letter.letter);
        
        card.innerHTML = `
            <div class="letter-main">${letter.letter}</div>
            <div class="letter-info">
                <span class="letter-name">${letter.name}</span>
                <span class="letter-sound">${letter.sound}</span>
            </div>
            ${isViewed ? '<span class="viewed-badge">✓</span>' : ''}
        `;
        
        container.appendChild(card);
    });
    
    // Set writing practice
    const writingLetter = document.getElementById('currentWritingLetter');
    if (writingLetter && window.arabicLearningData.letters.length > 0) {
        writingLetter.innerText = window.arabicLearningData.letters[Math.floor(Math.random() * 28)].letter;
    }
}

function showLetterDetails(letter) {
    markLetterViewed(letter.letter);
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'letter-modal';
    modal.innerHTML = `
        <div class="letter-modal-content">
            <button class="close-modal" onclick="this.parentElement.parentElement.remove()">✕</button>
            <div class="letter-modal-header">
                <div class="letter-modal-arabic">${letter.letter}</div>
                <div class="letter-modal-name">${letter.name} (${letter.translit})</div>
            </div>
            <div class="letter-modal-body">
                <div class="letter-detail-item">
                    <span class="detail-label">Pronunciation:</span>
                    <span class="detail-value">${letter.pronunciation}</span>
                </div>
                <div class="letter-detail-item">
                    <span class="detail-label">Sound:</span>
                    <span class="detail-value">${letter.sound}</span>
                </div>
                <div class="letter-detail-item">
                    <span class="detail-label">Examples:</span>
                    <ul class="example-list">
                        ${letter.examples ? letter.examples.map(ex => `<li>${ex}</li>`).join('') : ''}
                    </ul>
                </div>
                <div class="letter-detail-item">
                    <span class="detail-label">Writing:</span>
                    <span class="detail-value">${letter.writing || 'See examples'}</span>
                </div>
            </div>
            <button class="letter-practice-btn" onclick="practiceLetter('${letter.letter}')">Practice Writing</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function practiceLetter(letter) {
    const writingLetter = document.getElementById('currentWritingLetter');
    if (writingLetter) writingLetter.innerText = letter;
    switchLearningTab('letters');
    const writingInput = document.getElementById('writingInput');
    if (writingInput) writingInput.focus();
    
    // Close any open modal
    const modal = document.querySelector('.letter-modal');
    if (modal) modal.remove();
}

function checkWriting() {
    const input = document.getElementById('writingInput');
    const target = document.getElementById('currentWritingLetter');
    
    if (!input || !target) return;
    
    const inputValue = input.value;
    const targetValue = target.innerText;
    
    if (inputValue === targetValue) {
        showFeedback('✅ Correct!', 'success');
        markLetterViewed(targetValue);
    } else {
        showFeedback(`❌ Try again. The letter is ${targetValue}`, 'error');
    }
}

function nextWritingLetter() {
    if (!window.arabicLearningData || !window.arabicLearningData.letters) return;
    
    const letters = window.arabicLearningData.letters;
    const current = document.getElementById('currentWritingLetter');
    if (!current) return;
    
    const currentLetter = current.innerText;
    let nextIndex = (letters.findIndex(l => l.letter === currentLetter) + 1) % letters.length;
    current.innerText = letters[nextIndex].letter;
    
    const input = document.getElementById('writingInput');
    if (input) {
        input.value = '';
        input.focus();
    }
}

// ===== WORDS SECTION =====

function renderWords() {
    const container = document.getElementById('wordsGrid');
    if (!container || !window.arabicLearningData || !window.arabicLearningData.words) return;
    
    filteredWords = [...window.arabicLearningData.words];
    
    // Apply category filter if not 'all'
    const category = document.getElementById('wordCategory')?.value || 'all';
    if (category !== 'all') {
        filteredWords = filteredWords.filter(w => w.category === category);
    }
    
    // Apply search if any
    const searchTerm = document.getElementById('wordSearch')?.value.toLowerCase() || '';
    if (searchTerm) {
        filteredWords = filteredWords.filter(w => 
            w.arabic.includes(searchTerm) || 
            w.meaning.toLowerCase().includes(searchTerm) ||
            w.translit.toLowerCase().includes(searchTerm)
        );
    }
    
    container.innerHTML = '';
    
    if (filteredWords.length === 0) {
        container.innerHTML = '<div class="error-message">No words found</div>';
        return;
    }
    
    filteredWords.forEach((word, index) => {
        const card = document.createElement('div');
        card.className = 'word-card';
        card.onclick = () => showWordDetails(word, index);
        
        const isViewed = viewedWords.includes(word.arabic);
        
        card.innerHTML = `
            <div class="word-arabic">${word.arabic}</div>
            <div class="word-meaning">${word.meaning}</div>
            <div class="word-category">${word.category}</div>
            ${isViewed ? '<span class="viewed-badge-small">✓</span>' : ''}
        `;
        
        container.appendChild(card);
    });
}

function showWordDetails(word, index) {
    markWordViewed(word.arabic);
    currentWordIndex = index;
    
    const flashcard = document.getElementById('wordFlashcard');
    const flashcardArabic = document.getElementById('flashcardArabic');
    const flashcardTranslit = document.getElementById('flashcardTranslit');
    const flashcardMeaning = document.getElementById('flashcardMeaning');
    const flashcardExample = document.getElementById('flashcardExample');
    
    if (flashcardArabic) flashcardArabic.innerText = word.arabic;
    if (flashcardTranslit) flashcardTranslit.innerText = word.translit;
    if (flashcardMeaning) flashcardMeaning.innerText = word.meaning;
    if (flashcardExample) flashcardExample.innerText = word.example || '';
    if (flashcard) flashcard.style.display = 'block';
    
    renderWords(); // Refresh to show viewed badge
}

function closeFlashcard() {
    const flashcard = document.getElementById('wordFlashcard');
    if (flashcard) flashcard.style.display = 'none';
}

function nextWord() {
    if (filteredWords.length === 0) return;
    currentWordIndex = (currentWordIndex + 1) % filteredWords.length;
    const word = filteredWords[currentWordIndex];
    
    const flashcardArabic = document.getElementById('flashcardArabic');
    const flashcardTranslit = document.getElementById('flashcardTranslit');
    const flashcardMeaning = document.getElementById('flashcardMeaning');
    const flashcardExample = document.getElementById('flashcardExample');
    
    if (flashcardArabic) flashcardArabic.innerText = word.arabic;
    if (flashcardTranslit) flashcardTranslit.innerText = word.translit;
    if (flashcardMeaning) flashcardMeaning.innerText = word.meaning;
    if (flashcardExample) flashcardExample.innerText = word.example || '';
}

function previousWord() {
    if (filteredWords.length === 0) return;
    currentWordIndex = (currentWordIndex - 1 + filteredWords.length) % filteredWords.length;
    const word = filteredWords[currentWordIndex];
    
    const flashcardArabic = document.getElementById('flashcardArabic');
    const flashcardTranslit = document.getElementById('flashcardTranslit');
    const flashcardMeaning = document.getElementById('flashcardMeaning');
    const flashcardExample = document.getElementById('flashcardExample');
    
    if (flashcardArabic) flashcardArabic.innerText = word.arabic;
    if (flashcardTranslit) flashcardTranslit.innerText = word.translit;
    if (flashcardMeaning) flashcardMeaning.innerText = word.meaning;
    if (flashcardExample) flashcardExample.innerText = word.example || '';
}

function filterWords() {
    renderWords();
}

// ===== PHRASES SECTION =====

function renderPhrases() {
    const container = document.getElementById('phrasesList');
    if (!container || !window.arabicLearningData || !window.arabicLearningData.phrases) return;
    
    let phrases = [...window.arabicLearningData.phrases];
    
    // Apply search if any
    const searchTerm = document.getElementById('phraseSearch')?.value.toLowerCase() || '';
    if (searchTerm) {
        phrases = phrases.filter(p => 
            p.arabic.includes(searchTerm) || 
            p.meaning.toLowerCase().includes(searchTerm) ||
            p.translit.toLowerCase().includes(searchTerm)
        );
    }
    
    container.innerHTML = '';
    
    if (phrases.length === 0) {
        container.innerHTML = '<div class="error-message">No phrases found</div>';
        return;
    }
    
    phrases.forEach(phrase => {
        const card = document.createElement('div');
        card.className = 'phrase-card';
        card.onclick = () => markPhraseViewed(phrase.arabic);
        
        const isViewed = viewedPhrases.includes(phrase.arabic);
        
        card.innerHTML = `
            <div class="phrase-arabic-large">${phrase.arabic}</div>
            <div class="phrase-translit">${phrase.translit}</div>
            <div class="phrase-meaning-large">${phrase.meaning}</div>
            <div class="phrase-usage">${phrase.usage}</div>
            ${isViewed ? '<span class="viewed-badge-small">✓</span>' : ''}
        `;
        
        container.appendChild(card);
    });
}

// ===== SENTENCES SECTION =====

function renderSentences() {
    const container = document.getElementById('sentencesGrid');
    if (!container || !window.arabicLearningData || !window.arabicLearningData.sentences) return;
    
    let sentences = [...window.arabicLearningData.sentences];
    
    // Apply type filter if not 'all'
    const type = document.getElementById('sentenceType')?.value || 'all';
    if (type !== 'all') {
        sentences = sentences.filter(s => s.type === type);
    }
    
    container.innerHTML = '';
    
    if (sentences.length === 0) {
        container.innerHTML = '<div class="error-message">No sentences found</div>';
        return;
    }
    
    sentences.forEach(sentence => {
        const card = document.createElement('div');
        card.className = 'sentence-card';
        
        card.innerHTML = `
            <div class="sentence-arabic">${sentence.arabic}</div>
            <div class="sentence-translit">${sentence.translit}</div>
            <div class="sentence-meaning">${sentence.meaning}</div>
            <div class="sentence-type">${sentence.type}</div>
        `;
        
        container.appendChild(card);
    });
}

function filterSentences() {
    renderSentences();
}

// ===== CONVERSATIONS SECTION =====

function renderConversations() {
    const container = document.getElementById('conversationDialogue');
    if (!container || !window.arabicLearningData || !window.arabicLearningData.conversations) return;
    
    const topic = document.getElementById('conversationTopic')?.value || 'greeting';
    const conversation = window.arabicLearningData.conversations.find(c => c.topic === topic);
    
    if (!conversation) return;
    
    currentConversationLines = conversation.lines;
    currentConversationIndex = 0;
    
    markConversationViewed(topic);
    
    renderConversationLines();
}

function renderConversationLines() {
    const container = document.getElementById('conversationDialogue');
    if (!container) return;
    
    container.innerHTML = '';
    
    currentConversationLines.forEach((line, index) => {
        const lineDiv = document.createElement('div');
        lineDiv.className = `conversation-line ${line.speaker === 'A' ? 'speaker-a' : 'speaker-b'}`;
        lineDiv.onclick = () => setPracticeLine(line, index);
        
        lineDiv.innerHTML = `
            <div class="speaker-label">${line.speaker === 'A' ? '👤 Person A' : '👥 Person B'}</div>
            <div class="conversation-arabic">${line.arabic}</div>
            <div class="conversation-translit">${line.translit}</div>
            <div class="conversation-meaning">${line.meaning}</div>
            ${index === currentConversationIndex ? '<span class="current-line">▶ Current</span>' : ''}
        `;
        
        container.appendChild(lineDiv);
    });
}

function setPracticeLine(line, index) {
    currentPracticeLine = line;
    currentConversationIndex = index;
    
    const roleSpan = document.getElementById('currentRole');
    const practiceLine = document.getElementById('practiceLine');
    const practiceInput = document.getElementById('practiceInput');
    const practiceFeedback = document.getElementById('practiceFeedback');
    
    if (roleSpan) roleSpan.innerText = `Person ${line.speaker}`;
    if (practiceLine) practiceLine.innerText = line.arabic + ' - ' + line.meaning;
    if (practiceInput) practiceInput.value = '';
    if (practiceFeedback) practiceFeedback.innerHTML = '';
    
    renderConversationLines();
}

function checkPractice() {
    if (!currentPracticeLine) {
        showFeedback('Select a line to practice first', 'error');
        return;
    }
    
    const userInput = document.getElementById('practiceInput');
    const practiceFeedback = document.getElementById('practiceFeedback');
    
    if (!userInput || !practiceFeedback) return;
    
    const userAnswer = userInput.value.trim();
    const correct = currentPracticeLine.arabic;
    
    if (userAnswer === correct) {
        practiceFeedback.innerHTML = '✅ Perfect!';
        practiceFeedback.className = 'practice-feedback success';
        
        // Move to next line
        setTimeout(() => {
            if (currentConversationIndex < currentConversationLines.length - 1) {
                setPracticeLine(currentConversationLines[currentConversationIndex + 1], currentConversationIndex + 1);
            } else {
                showFeedback('🎉 Conversation completed!', 'success');
            }
        }, 1500);
    } else {
        practiceFeedback.innerHTML = `❌ Try again. The correct phrase is: ${correct}`;
        practiceFeedback.className = 'practice-feedback error';
    }
}

function loadConversation(topic) {
    renderConversations();
}

function shuffleConversation() {
    const topics = ['greeting', 'introduction', 'family', 'food', 'prayer', 'quran', 'daily', 'market'];
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    
    const select = document.getElementById('conversationTopic');
    if (select) select.value = randomTopic;
    
    renderConversations();
}

// ===== QUIZ SECTION =====

function loadRandomQuizQuestion() {
    if (!window.arabicLearningData || !window.arabicLearningData.allQuizQuestions) {
        showFeedback('Quiz data not available', 'error');
        return;
    }
    
    const allQuestions = window.arabicLearningData.allQuizQuestions;
    if (!allQuestions || allQuestions.length === 0) return;
    
    currentQuizQuestions = allQuestions;
    currentQuizIndex = Math.floor(Math.random() * allQuestions.length);
    displayQuizQuestion(allQuestions[currentQuizIndex]);
}

function loadQuizByTopic(topic) {
    if (!window.arabicLearningData || !window.arabicLearningData.quizQuestions) return;
    
    const allQuestions = window.arabicLearningData.quizQuestions;
    
    if (topic === 'all') {
        currentQuizQuestions = [...allQuestions];
    } else {
        currentQuizQuestions = allQuestions.filter(q => q.category === topic);
    }
    
    if (currentQuizQuestions.length === 0) {
        const quizQuestion = document.getElementById('quizQuestion');
        if (quizQuestion) quizQuestion.innerText = 'No questions available for this topic';
        return;
    }
    
    // Shuffle questions
    currentQuizQuestions = shuffleArray(currentQuizQuestions);
    currentQuizIndex = 0;
    displayQuizQuestion(currentQuizQuestions[0]);
}

function displayQuizQuestion(question) {
    const quizQuestion = document.getElementById('quizQuestion');
    const quizFeedback = document.getElementById('quizFeedback');
    const quizExplanation = document.getElementById('quizExplanation');
    const optionsDiv = document.getElementById('quizOptions');
    const inputGroup = document.getElementById('quizInputGroup');
    const quizCounter = document.getElementById('quizCounter');
    
    if (quizQuestion) quizQuestion.innerText = question.arabicQuestion || question.question;
    if (quizFeedback) quizFeedback.innerHTML = '';
    if (quizExplanation) quizExplanation.innerHTML = '';
    
    if (question.type === 'multiple' && question.options) {
        if (optionsDiv) optionsDiv.style.display = 'grid';
        if (inputGroup) inputGroup.style.display = 'none';
        
        // Shuffle options
        const shuffledOptions = shuffleArray([...question.options]);
        
        let optionsHtml = '';
        shuffledOptions.forEach(option => {
            optionsHtml += `<button class="quiz-option-btn" onclick="checkQuizOption('${option.replace(/'/g, "\\'")}', '${question.answer.replace(/'/g, "\\'")}')">${option}</button>`;
        });
        if (optionsDiv) optionsDiv.innerHTML = optionsHtml;
    } else {
        if (optionsDiv) optionsDiv.style.display = 'none';
        if (inputGroup) inputGroup.style.display = 'flex';
        const textInput = document.getElementById('quizTextInput');
        if (textInput) textInput.value = '';
    }
    
    // Update counter
    if (quizCounter) {
        quizCounter.innerText = `Question ${currentQuizIndex + 1} of ${currentQuizQuestions.length}`;
    }
}

function checkQuizOption(selected, correct) {
    const options = document.querySelectorAll('.quiz-option-btn');
    const isCorrect = selected === correct;
    
    options.forEach(opt => {
        opt.disabled = true;
        if (opt.innerText === correct) {
            opt.classList.add('correct');
        } else if (opt.innerText === selected && !isCorrect) {
            opt.classList.add('wrong');
        }
    });
    
    const quizFeedback = document.getElementById('quizFeedback');
    const quizExplanation = document.getElementById('quizExplanation');
    
    if (isCorrect) {
        quizCorrectCount++;
        if (quizFeedback) {
            quizFeedback.innerHTML = '✅ Correct!';
            quizFeedback.className = 'quiz-feedback-large correct';
        }
    } else {
        quizWrongCount++;
        if (quizFeedback) {
            quizFeedback.innerHTML = '❌ Wrong!';
            quizFeedback.className = 'quiz-feedback-large wrong';
        }
    }
    
    // Show explanation
    const question = currentQuizQuestions[currentQuizIndex];
    if (quizExplanation && question && question.explanation) {
        quizExplanation.innerHTML = question.explanation;
    }
    
    updateQuizStats();
    
    // Auto-load next question after delay
    setTimeout(() => {
        nextQuizQuestion();
    }, 2000);
}

function checkQuizTextAnswer() {
    const userInput = document.getElementById('quizTextInput');
    const quizFeedback = document.getElementById('quizFeedback');
    const quizExplanation = document.getElementById('quizExplanation');
    
    if (!userInput || !quizFeedback) return;
    
    const userAnswer = userInput.value.trim().toLowerCase();
    const question = currentQuizQuestions[currentQuizIndex];
    const correct = question.answer.toLowerCase();
    
    const isCorrect = userAnswer === correct;
    
    if (isCorrect) {
        quizCorrectCount++;
        quizFeedback.innerHTML = '✅ Correct!';
        quizFeedback.className = 'quiz-feedback-large correct';
    } else {
        quizWrongCount++;
        quizFeedback.innerHTML = `❌ Wrong! Correct answer: ${question.answer}`;
        quizFeedback.className = 'quiz-feedback-large wrong';
    }
    
    if (quizExplanation && question.explanation) {
        quizExplanation.innerHTML = question.explanation;
    }
    
    updateQuizStats();
    
    setTimeout(() => {
        nextQuizQuestion();
    }, 2000);
}

function nextQuizQuestion() {
    if (currentQuizQuestions.length > 0) {
        currentQuizIndex = (currentQuizIndex + 1) % currentQuizQuestions.length;
        displayQuizQuestion(currentQuizQuestions[currentQuizIndex]);
    } else {
        loadRandomQuizQuestion();
    }
}

function updateQuizStats() {
    const total = quizCorrectCount + quizWrongCount;
    const score = total > 0 ? Math.round((quizCorrectCount / total) * 100) : 0;
    
    const correctSpan = document.getElementById('quizCorrectCount');
    const wrongSpan = document.getElementById('quizWrongCount');
    const scoreSpan = document.getElementById('quizScore');
    
    if (correctSpan) correctSpan.innerText = quizCorrectCount;
    if (wrongSpan) wrongSpan.innerText = quizWrongCount;
    if (scoreSpan) scoreSpan.innerText = score + '%';
}

// ===== SEARCH AND FILTER =====

function setupSearchListeners() {
    // Word search
    const wordSearch = document.getElementById('wordSearch');
    if (wordSearch) {
        wordSearch.addEventListener('input', debounce(function(e) {
            renderWords();
        }, 300));
    }
    
    // Phrase search
    const phraseSearch = document.getElementById('phraseSearch');
    if (phraseSearch) {
        phraseSearch.addEventListener('input', debounce(function(e) {
            renderPhrases();
        }, 300));
    }
    
    // Word category filter
    const wordCategory = document.getElementById('wordCategory');
    if (wordCategory) {
        wordCategory.addEventListener('change', function() {
            renderWords();
        });
    }
    
    // Sentence type filter
    const sentenceType = document.getElementById('sentenceType');
    if (sentenceType) {
        sentenceType.addEventListener('change', function() {
            renderSentences();
        });
    }
    
    // Conversation topic
    const conversationTopic = document.getElementById('conversationTopic');
    if (conversationTopic) {
        conversationTopic.addEventListener('change', function() {
            renderConversations();
        });
    }
    
    // Quiz topic
    const quizTopic = document.getElementById('quizTopic');
    if (quizTopic) {
        quizTopic.addEventListener('change', function() {
            loadQuizByTopic(this.value);
        });
    }
}

// ===== UTILITY FUNCTIONS =====

function showErrorMessage() {
    const containers = ['lettersGrid', 'wordsGrid', 'phrasesList', 'sentencesGrid', 'conversationDialogue'];
    containers.forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.innerHTML = '<div class="error-message">Failed to load data. Please refresh the page.</div>';
        }
    });
}

function showFeedback(message, type) {
    const feedback = document.createElement('div');
    feedback.className = `feedback-toast ${type}`;
    feedback.innerText = message;
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.remove();
    }, 2000);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ===== EXPORT FUNCTIONS TO GLOBAL SCOPE =====

window.switchLearningTab = switchLearningTab;
window.checkWriting = checkWriting;
window.nextWritingLetter = nextWritingLetter;
window.practiceLetter = practiceLetter;
window.showLetterDetails = showLetterDetails;
window.closeFlashcard = closeFlashcard;
window.nextWord = nextWord;
window.previousWord = previousWord;
window.filterWords = filterWords;
window.filterSentences = filterSentences;
window.loadConversation = loadConversation;
window.shuffleConversation = shuffleConversation;
window.setPracticeLine = setPracticeLine;
window.checkPractice = checkPractice;
window.loadRandomQuizQuestion = loadRandomQuizQuestion;
window.loadQuizByTopic = loadQuizByTopic;
window.checkQuizOption = checkQuizOption;
window.checkQuizTextAnswer = checkQuizTextAnswer;
window.nextQuizQuestion = nextQuizQuestion;

console.log('✅ Arabic learning module ready!');