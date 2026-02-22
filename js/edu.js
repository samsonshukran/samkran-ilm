// ===== EDU.JS - Islamic Arabic Learning Module =====
// Handles all rendering, filtering, and quiz logic

// Global variables
let currentQuizQuestion = null;
let currentFilter = 'all';
let currentVocabCategory = 'all';

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('EDU page initializing...');
    
    // Check if data is loaded
    if (window.eduData) {
        console.log('EDU data available, rendering...');
        renderLetters();
        renderPhrases();
        renderVocabulary('all');
    } else {
        console.error('EDU data not loaded!');
        showErrorMessage();
    }
    
    // Setup search listeners
    setupSearchListeners();
});

// Show error message if data fails to load
function showErrorMessage() {
    const containers = ['lettersContainer', 'phrasesContainer', 'vocabularyContainer'];
    containers.forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.innerHTML = '<div class="error-message">Failed to load data. Please refresh the page.</div>';
        }
    });
}

// ===== SECTION SWITCHING =====
function switchEduSection(sectionId) {
    // Update tab buttons
    document.querySelectorAll('.edu-subtab').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Hide all sections
    document.querySelectorAll('.edu-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId + '-section').classList.add('active');
}

// ===== LETTERS SECTION =====
function renderLetters() {
    const container = document.getElementById('lettersContainer');
    if (!container || !window.eduData) return;
    
    container.innerHTML = '';
    
    window.eduData.letters.forEach(letter => {
        const card = document.createElement('div');
        card.className = 'letter-card';
        card.onclick = () => showLetterDetails(letter);
        
        card.innerHTML = `
            <div class="letter-arabic">${letter.letter}</div>
            <div class="letter-name">${letter.name}</div>
            <div class="letter-sound">${letter.sound}</div>
            <div class="letter-example">${letter.example}</div>
        `;
        
        container.appendChild(card);
    });
}

function showLetterDetails(letter) {
    alert(`Letter: ${letter.letter}\nName: ${letter.name}\nSound: ${letter.sound}\nExample: ${letter.example}`);
}

// ===== PHRASES SECTION =====
function renderPhrases() {
    const container = document.getElementById('phrasesContainer');
    if (!container || !window.eduData) return;
    
    container.innerHTML = '';
    
    window.eduData.phrases.forEach(phrase => {
        const card = document.createElement('div');
        card.className = 'phrase-card';
        
        card.innerHTML = `
            <div class="phrase-arabic">${phrase.arabic}</div>
            <div class="phrase-translit">${phrase.transliteration}</div>
            <div class="phrase-meaning">${phrase.meaning}</div>
            <div class="phrase-usage">${phrase.usage}</div>
        `;
        
        container.appendChild(card);
    });
}

// ===== VOCABULARY SECTION =====
function renderVocabulary(category = 'all') {
    const container = document.getElementById('vocabularyContainer');
    if (!container || !window.eduData) return;
    
    currentVocabCategory = category;
    container.innerHTML = '';
    
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = Array.from(document.querySelectorAll('.category-btn'))
        .find(btn => btn.textContent.toLowerCase().includes(category) || 
               (category === 'all' && btn.textContent.trim() === 'All'));
    if (activeBtn) activeBtn.classList.add('active');
    
    let words = [];
    
    if (category === 'all') {
        // Combine all vocabulary categories
        Object.values(window.eduData.vocabulary).forEach(catWords => {
            words = words.concat(catWords);
        });
    } else {
        words = window.eduData.vocabulary[category] || [];
    }
    
    if (words.length === 0) {
        container.innerHTML = '<div class="loading-message">No words found in this category</div>';
        return;
    }
    
    words.forEach(word => {
        const card = document.createElement('div');
        card.className = 'vocab-card';
        
        const quranicBadge = word.quranic ? '<span class="vocab-category">📖 Quranic</span>' : '';
        
        card.innerHTML = `
            <div class="vocab-left">
                <div class="vocab-meaning">${word.meaning}</div>
                ${quranicBadge}
                ${word.reference ? `<div class="vocab-reference">${word.reference}</div>` : ''}
            </div>
            <div class="vocab-right">
                <div class="vocab-arabic">${word.arabic}</div>
                <div class="vocab-translit">${word.transliteration}</div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function filterVocabulary(category) {
    renderVocabulary(category);
    filterVocabularyItems(); // Apply search filter
}

// ===== QUIZ SECTION =====
function loadRandomQuiz() {
    if (!window.eduData || !window.eduData.quiz.all.length) return;
    
    const randomIndex = Math.floor(Math.random() * window.eduData.quiz.all.length);
    const question = window.eduData.quiz.all[randomIndex];
    displayQuizQuestion(question);
}

function loadQuizByCategory(category) {
    if (!window.eduData) return;
    
    let questions = [];
    if (category === 'all') {
        questions = window.eduData.quiz.all;
    } else {
        questions = window.eduData.quiz[category] || [];
    }
    
    if (questions.length === 0) {
        document.getElementById('quizQuestion').innerText = 'No questions available for this category';
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * questions.length);
    displayQuizQuestion(questions[randomIndex]);
}

function displayQuizQuestion(question) {
    currentQuizQuestion = question;
    
    document.getElementById('quizQuestion').innerText = question.question;
    document.getElementById('quizResult').innerHTML = '';
    document.getElementById('quizFeedback').innerHTML = '';
    
    const optionsDiv = document.getElementById('quizOptions');
    const inputDiv = document.getElementById('quizInput');
    
    if (question.type === 'multiple' && question.options) {
        optionsDiv.style.display = 'grid';
        inputDiv.style.display = 'none';
        
        let optionsHtml = '';
        question.options.forEach(option => {
            optionsHtml += `<button class="quiz-option" onclick="checkQuizOption('${option}')">${option}</button>`;
        });
        optionsDiv.innerHTML = optionsHtml;
    } else {
        optionsDiv.style.display = 'none';
        inputDiv.style.display = 'flex';
        document.getElementById('textAnswer').value = '';
    }
}

function checkQuizOption(selectedOption) {
    if (!currentQuizQuestion) return;
    
    const options = document.querySelectorAll('.quiz-option');
    const isCorrect = selectedOption === currentQuizQuestion.answer;
    
    options.forEach(opt => {
        opt.disabled = true;
        if (opt.innerText === currentQuizQuestion.answer) {
            opt.classList.add('correct');
        } else if (opt.innerText === selectedOption && !isCorrect) {
            opt.classList.add('wrong');
        }
    });
    
    const resultDiv = document.getElementById('quizResult');
    resultDiv.innerHTML = isCorrect ? '✅ Correct!' : '❌ Wrong!';
    resultDiv.className = isCorrect ? 'quiz-result correct' : 'quiz-result wrong';
    
    if (!isCorrect) {
        document.getElementById('quizFeedback').innerHTML = `Correct answer: ${currentQuizQuestion.answer}`;
    }
}

function checkTextAnswer() {
    if (!currentQuizQuestion) return;
    
    const userAnswer = document.getElementById('textAnswer').value.trim().toLowerCase();
    const correctAnswer = currentQuizQuestion.answer.toLowerCase();
    const isCorrect = userAnswer === correctAnswer;
    
    const resultDiv = document.getElementById('quizResult');
    resultDiv.innerHTML = isCorrect ? '✅ Correct!' : '❌ Wrong!';
    resultDiv.className = isCorrect ? 'quiz-result correct' : 'quiz-result wrong';
    
    if (!isCorrect) {
        document.getElementById('quizFeedback').innerHTML = `Correct answer: ${currentQuizQuestion.answer}`;
    }
}

// ===== SEARCH FUNCTIONALITY =====
function setupSearchListeners() {
    // Phrase search
    document.getElementById('phraseSearch')?.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const phrases = document.querySelectorAll('#phrasesContainer .phrase-card');
        
        phrases.forEach(phrase => {
            const text = phrase.innerText.toLowerCase();
            phrase.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });
    
    // Vocabulary search
    document.getElementById('vocabSearch')?.addEventListener('input', function(e) {
        filterVocabularyItems();
    });
}

function filterVocabularyItems() {
    const searchTerm = document.getElementById('vocabSearch')?.value.toLowerCase() || '';
    const words = document.querySelectorAll('#vocabularyContainer .vocab-card');
    
    words.forEach(word => {
        const text = word.innerText.toLowerCase();
        word.style.display = text.includes(searchTerm) ? 'flex' : 'none';
    });
}

// ===== UTILITY FUNCTIONS =====
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Export functions to global scope
window.switchEduSection = switchEduSection;
window.filterVocabulary = filterVocabulary;
window.loadRandomQuiz = loadRandomQuiz;
window.loadQuizByCategory = loadQuizByCategory;
window.checkQuizOption = checkQuizOption;
window.checkTextAnswer = checkTextAnswer;