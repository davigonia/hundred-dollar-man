// Game state
let currentCategory = null;
let currentQuestionIndex = 0;
let score = 0;
let coins = 0;
let bankBalance = parseInt(localStorage.getItem('bankBalance')) || 0;
let currentQuestions = []; // Array to hold randomized questions

// DOM elements
let titleScreen;
let gameScreen;
let questionText;
let answerButtons;
let currentCoinsDisplay;
let gameBankCoinsDisplay;
let totalCoinsDisplay;
let categoryButtons;
let newGameBtn;
let startOverBtn;
let wrongAnswerPopup;
let popupOkBtn;
let shopButton;
let shopPopup;
let shopCloseBtn;
let shopCoinsDisplay;
let buyButtons;
let petDisplayArea;

// Sound effects
const correctSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
const incorrectSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2014/2014-preview.mp3');

// Initialize owned pets from local storage
let ownedPets = JSON.parse(localStorage.getItem('ownedPets')) || [];

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing game...');
    
    // Initialize DOM elements
    titleScreen = document.getElementById('title-screen');
    gameScreen = document.getElementById('game-screen');
    questionText = document.getElementById('question-text');
    answerButtons = document.querySelectorAll('.answer-btn');
    currentCoinsDisplay = document.getElementById('current-coins');
    gameBankCoinsDisplay = document.getElementById('game-bank-coins');
    totalCoinsDisplay = document.getElementById('total-coins');
    categoryButtons = document.querySelectorAll('.category-btn');
    newGameBtn = document.getElementById('new-game-btn');
    startOverBtn = document.getElementById('start-over-btn');
    wrongAnswerPopup = document.getElementById('wrong-answer-popup');
    popupOkBtn = document.getElementById('popup-ok-btn');
    
    // Initialize shop elements
    shopButton = document.getElementById('shop-button');
    shopPopup = document.getElementById('shop-popup');
    shopCloseBtn = document.getElementById('shop-close-btn');
    shopCoinsDisplay = document.getElementById('shop-coins');
    buyButtons = document.querySelectorAll('.buy-btn');
    petDisplayArea = document.getElementById('pet-display-area');

    console.log('Shop button found:', shopButton);
    console.log('Shop popup found:', shopPopup);
    console.log('Shop close button found:', shopCloseBtn);

    // Debug log for category buttons
    console.log('Category buttons found:', categoryButtons.length);
    categoryButtons.forEach(button => {
        console.log('Button category:', button.dataset.category);
    });

    // Initialize bank display
    updateBankDisplay();

    // Event listeners
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log('Category button clicked:', this.dataset.category);
            startGame(this.dataset.category);
        });
    });

    answerButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const selectedAnswer = parseInt(e.target.dataset.answer);
            checkAnswer(selectedAnswer);
        });
    });

    newGameBtn.addEventListener('click', () => {
        titleScreen.classList.add('active');
        gameScreen.classList.remove('active');
        newGameBtn.classList.add('hidden');
        resetGame();
    });

    startOverBtn.addEventListener('click', () => {
        titleScreen.classList.add('active');
        gameScreen.classList.remove('active');
        newGameBtn.classList.add('hidden');
        resetGame();
    });

    popupOkBtn.addEventListener('click', () => {
        wrongAnswerPopup.classList.remove('active');
        titleScreen.classList.add('active');
        gameScreen.classList.remove('active');
        newGameBtn.classList.add('hidden');
        resetGame();
    });

    // Update shop display
    function updateShopDisplay() {
        // Update coins display in shop
        shopCoinsDisplay.textContent = bankBalance;
        
        // Update buy buttons based on owned pets and available coins
        buyButtons.forEach(button => {
            const shopItem = button.closest('.shop-item');
            const petType = shopItem.dataset.pet;
            const price = parseInt(shopItem.dataset.price);
            
            // Check if pet is already owned
            if (ownedPets.includes(petType)) {
                button.textContent = 'Owned';
                button.disabled = true;
            } else if (bankBalance < price) {
                button.disabled = true;
            } else {
                button.disabled = false;
                button.textContent = 'Buy';
            }
        });
    }

    // Display owned pets
    function displayOwnedPets() {
        petDisplayArea.innerHTML = '';
        
        ownedPets.forEach(pet => {
            const petElement = document.createElement('div');
            petElement.className = 'pet';
            
            let petEmoji = '';
            switch(pet) {
                case 'cat':
                    petEmoji = '🐱';
                    break;
                case 'dog':
                    petEmoji = '🐶';
                    break;
                case 'bunny':
                    petEmoji = '🐰';
                    break;
                case 'hamster':
                    petEmoji = '🐹';
                    break;
                case 'parrot':
                    petEmoji = '🦜';
                    break;
                case 'turtle':
                    petEmoji = '🐢';
                    break;
                case 'fish':
                    petEmoji = '🐠';
                    break;
                case 'fox':
                    petEmoji = '🦊';
                    break;
                case 'owl':
                    petEmoji = '🦉';
                    break;
                case 'penguin':
                    petEmoji = '🐧';
                    break;
                case 'panda':
                    petEmoji = '🐼';
                    break;
                case 'monkey':
                    petEmoji = '🐵';
                    break;
                case 'unicorn':
                    petEmoji = '🦄';
                    break;
                case 'butterfly':
                    petEmoji = '🦋';
                    break;
                case 'dragon':
                    petEmoji = '🐉';
                    break;
                default:
                    petEmoji = '🐱';
            }
            
            petElement.innerHTML = `<span class="pet-emoji">${petEmoji}</span>`;
            petDisplayArea.appendChild(petElement);
        });
    }

    // Open shop
    shopButton.addEventListener('click', () => {
        console.log('Shop button clicked');
        updateShopDisplay();
        shopPopup.classList.add('active');
    });

    // Close shop
    shopCloseBtn.addEventListener('click', () => {
        console.log('Shop close button clicked');
        shopPopup.classList.remove('active');
    });

    // Buy pet
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const shopItem = button.closest('.shop-item');
            const petType = shopItem.dataset.pet;
            const price = parseInt(shopItem.dataset.price);
            
            if (bankBalance >= price && !ownedPets.includes(petType)) {
                // Deduct coins
                bankBalance -= price;
                localStorage.setItem('bankBalance', bankBalance);
                
                // Update bank displays
                totalCoinsDisplay.textContent = bankBalance;
                gameBankCoinsDisplay.textContent = bankBalance;
                
                // Add pet to owned pets
                ownedPets.push(petType);
                localStorage.setItem('ownedPets', JSON.stringify(ownedPets));
                
                // Update shop display
                updateShopDisplay();
                
                // Display owned pets
                displayOwnedPets();
                
                // Show success message
                alert(`Congratulations! You now own a ${petType}!`);
            }
        });
    });

    // Initialize pet display on page load
    displayOwnedPets();
});

// Game functions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame(category) {
    console.log('Starting game with category:', category);
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    coins = 0;
    
    // Create a copy of questions and shuffle them
    currentQuestions = [...loadQuestions(category)];
    console.log('Questions loaded:', currentQuestions.length);
    shuffleArray(currentQuestions);
    
    updateScore();
    updateCoins();
    
    titleScreen.classList.remove('active');
    gameScreen.classList.add('active');
    newGameBtn.classList.remove('hidden');
    
    showQuestion();
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const answers = [...question.answers];
    const correctIndex = question.correct;

    // Shuffle answers
    const shuffledAnswers = answers.map((answer, index) => ({ answer, index }))
                                   .sort(() => Math.random() - 0.5);

    // Update the correct index based on the shuffled answers
    const newCorrectIndex = shuffledAnswers.findIndex(item => item.index === correctIndex);

    // Update the question's correct index
    question.correct = newCorrectIndex;

    questionText.textContent = question.question;

    answerButtons.forEach((button, index) => {
        button.textContent = shuffledAnswers[index].answer;
        button.classList.remove('correct', 'incorrect');
        button.disabled = false;
    });
}

function checkAnswer(selectedAnswer) {
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct;
    
    answerButtons.forEach(button => {
        button.disabled = true;
        if (parseInt(button.dataset.answer) === question.correct) {
            button.classList.add('correct');
        } else if (parseInt(button.dataset.answer) === selectedAnswer) {
            button.classList.add('incorrect');
        }
    });
    
    if (isCorrect) {
        correctSound.play();
        score += 10;
        coins += 1;
        bankBalance += 1;
        updateScore();
        updateCoins();
        updateBankDisplay();
        
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuestions.length) {
                showQuestion();
            } else {
                endGame();
            }
        }, 1500);
    } else {
        incorrectSound.play();
        setTimeout(() => {
            wrongAnswerPopup.classList.add('active');
        }, 1500);
    }
}

function updateScore() {
    currentCoinsDisplay.textContent = coins;
    gameBankCoinsDisplay.textContent = bankBalance;
}

function updateCoins() {
    currentCoinsDisplay.textContent = coins;
    gameBankCoinsDisplay.textContent = bankBalance;
}

function updateBankDisplay() {
    totalCoinsDisplay.textContent = bankBalance;
    localStorage.setItem('bankBalance', bankBalance);
}

function endGame() {
    gameScreen.classList.remove('active');
    titleScreen.classList.add('active');
    newGameBtn.classList.remove('hidden');
}

function resetGame() {
    currentCategory = null;
    currentQuestionIndex = 0;
    score = 0;
    coins = 0;
    currentQuestions = [];
    updateScore();
    updateCoins();
}

// Load questions based on selected category
function loadQuestions(category) {
    let questions;
    switch(category) {
        case 'science':
            questions = scienceQuestions;
            break;
        case 'arts':
            questions = artsQuestions;
            break;
        case 'humanities':
            questions = humanitiesQuestions;
            break;
        case 'bildung':
            questions = bildungQuestions;
            break;
        default:
            questions = scienceQuestions;
    }
    return questions;
} 