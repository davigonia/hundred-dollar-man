// Game state
let currentCategory = null;
let currentQuestionIndex = 0;
let score = 0;
let coins = 0; // Coins earned in current game
let coinsEarnedThisGame = 0; // Track total coins earned in this game session
let bankBalance = parseInt(localStorage.getItem('bankBalance')) || 0;
let currentQuestions = []; // Array to hold randomized questions
const QUESTIONS_PER_GAME = 10; // Set number of questions per game
// Add safety net variables
let safetyNetLevels = [2, 6]; // Question indices for safety nets (questions 3 and 7)
let securedCoins = 0; // Coins secured at safety nets

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
let gameCompletePopup; // New popup for game completion
let safetyNetPopup; // New popup for safety net notifications

// Sound effects
const correctSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
const incorrectSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2014/2014-preview.mp3');

// Initialize owned pets from local storage
let ownedPets = JSON.parse(localStorage.getItem('ownedPets')) || [];

// Add these variables to your existing variables section
let progressFill;
let currentQuestionDisplay;
let earnedCoinsDisplay;
let securedCoinsDisplay;

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

    // Create game complete popup
    createGameCompletePopup();
    
    // Create safety net popup
    createSafetyNetPopup();

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

    // Initialize progress bar elements
    progressFill = document.getElementById('progress-fill');
    currentQuestionDisplay = document.getElementById('current-question');
    earnedCoinsDisplay = document.getElementById('earned-coins-value');
    securedCoinsDisplay = document.getElementById('secured-coins-value');

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

// Create game complete popup
function createGameCompletePopup() {
    // Create popup elements
    const popup = document.createElement('div');
    popup.id = 'game-complete-popup';
    popup.className = 'popup';
    
    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    
    const title = document.createElement('h2');
    title.textContent = 'Congratulations!';
    
    const message = document.createElement('p');
    message.textContent = 'You are a smart kid! You answered all 10 questions correctly!';
    
    const coinsEarned = document.createElement('p');
    coinsEarned.innerHTML = 'You earned <span id="total-earned-coins">0</span> coins! 🪙';
    coinsEarned.className = 'coins-earned';
    
    const continueBtn = document.createElement('button');
    continueBtn.id = 'continue-btn';
    continueBtn.textContent = 'Continue';
    continueBtn.addEventListener('click', () => {
        popup.classList.remove('active');
        titleScreen.classList.add('active');
        gameScreen.classList.remove('active');
        newGameBtn.classList.add('hidden');
        resetGame();
    });
    
    // Assemble popup
    popupContent.appendChild(title);
    popupContent.appendChild(message);
    popupContent.appendChild(coinsEarned);
    popupContent.appendChild(continueBtn);
    popup.appendChild(popupContent);
    
    // Add to document
    document.body.appendChild(popup);
    
    gameCompletePopup = popup;
}

// Create safety net popup
function createSafetyNetPopup() {
    // Create popup elements
    const popup = document.createElement('div');
    popup.id = 'safety-net-popup';
    popup.className = 'popup';
    
    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    
    const title = document.createElement('h2');
    title.textContent = 'Safety Net Reached!';
    
    const message = document.createElement('p');
    message.id = 'safety-net-message';
    message.textContent = 'You\'ve secured 0 coins!';
    
    const continueBtn = document.createElement('button');
    continueBtn.id = 'safety-net-continue-btn';
    continueBtn.textContent = 'Continue';
    
    // Assemble popup
    popupContent.appendChild(title);
    popupContent.appendChild(message);
    popupContent.appendChild(continueBtn);
    popup.appendChild(popupContent);
    
    // Add to document
    document.body.appendChild(popup);
    
    safetyNetPopup = popup;
}

// Show safety net message
function showSafetyNetMessage(coins) {
    const message = document.getElementById('safety-net-message');
    message.textContent = `You've secured ${coins} coins! 🪙`;
    
    // Set up the continue button to show the next question
    const continueBtn = document.getElementById('safety-net-continue-btn');
    continueBtn.onclick = function() {
        safetyNetPopup.classList.remove('active');
        if (currentQuestionIndex < QUESTIONS_PER_GAME) {
            showQuestion();
        } else {
            completeGame();
        }
    };
    
    // Show the popup
    safetyNetPopup.classList.add('active');
}

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
    coinsEarnedThisGame = 0; // Reset coins earned this game
    securedCoins = 0; // Reset secured coins
    
    // Create a copy of questions and shuffle them
    currentQuestions = [...loadQuestions(category)];
    console.log('Questions loaded:', currentQuestions.length);
    shuffleArray(currentQuestions);
    
    // Limit to QUESTIONS_PER_GAME questions
    currentQuestions = currentQuestions.slice(0, QUESTIONS_PER_GAME);
    
    updateScore();
    updateCoins();
    
    titleScreen.classList.remove('active');
    gameScreen.classList.add('active');
    newGameBtn.classList.remove('hidden');
    
    // Update progress bar
    updateProgressBar();
    
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

    // Get coin value for current question
    const coinsForQuestion = getCoinsForQuestion(currentQuestionIndex);
    
    // Create coin indicator based on number of coins
    let coinIndicator = '';
    for (let i = 0; i < coinsForQuestion; i++) {
        coinIndicator += '🪙';
    }
    
    // Show only coin indicator and the question (removed "Question x/10" prefix)
    questionText.textContent = `${coinIndicator} ${question.question}`;

    answerButtons.forEach((button, index) => {
        button.textContent = shuffledAnswers[index].answer;
        button.classList.remove('correct', 'incorrect');
        button.disabled = false;
    });

    // Update progress bar
    updateProgressBar();
}

function getCoinsForQuestion(questionIndex) {
    // Questions 1-3: 1 coin
    if (questionIndex < 3) {
        return 1;
    }
    // Questions 4-7: 2 coins
    else if (questionIndex < 7) {
        return 2;
    }
    // Questions 8-10: 3 coins
    else {
        return 3;
    }
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
        
        // Award coins based on question number
        const coinsEarned = getCoinsForQuestion(currentQuestionIndex);
        coins += coinsEarned;
        coinsEarnedThisGame += coinsEarned; // Track total earned this game
        bankBalance += coinsEarned;
        
        updateScore();
        updateCoins();
        updateBankDisplay();
        
        // Check if we've reached a safety net
        let reachedSafetyNet = false;
        if (safetyNetLevels.includes(currentQuestionIndex)) {
            securedCoins = coinsEarnedThisGame;
            reachedSafetyNet = true;
        }
        
        // Update progress bar
        updateProgressBar();
        
        setTimeout(() => {
            currentQuestionIndex++;
            
            // If we reached a safety net, show the message
            if (reachedSafetyNet) {
                showSafetyNetMessage(securedCoins);
            } else if (currentQuestionIndex < QUESTIONS_PER_GAME) {
                showQuestion();
            } else {
                completeGame();
            }
        }, 1500);
    } else {
        incorrectSound.play();
        
        // Apply safety net - if player has secured coins, they keep those
        // Otherwise they lose everything
        if (securedCoins > 0) {
            // Calculate how many coins to remove from bank balance
            const coinsToRemove = coinsEarnedThisGame - securedCoins;
            bankBalance -= coinsToRemove;
            coins = securedCoins;
            coinsEarnedThisGame = securedCoins; // Update total earned this game
        } else {
            // If no safety net reached, they lose all coins from this game
            bankBalance -= coinsEarnedThisGame;
            coins = 0;
            coinsEarnedThisGame = 0; // Reset total earned this game
        }
        
        updateCoins();
        updateBankDisplay();
        
        setTimeout(() => {
            showWrongAnswerPopup();
        }, 1500);
    }

    // Update progress bar
    updateProgressBar();
}

function completeGame() {
    // Show completion popup
    const totalEarnedCoins = document.getElementById('total-earned-coins');
    totalEarnedCoins.textContent = coins;
    gameCompletePopup.classList.add('active');
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
    coinsEarnedThisGame = 0; // Reset coins earned this game
    securedCoins = 0; // Reset secured coins
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

// Add this function to update the progress bar
function updateProgressBar() {
    // Calculate progress percentage (questions are 0-indexed)
    const progressPercentage = ((currentQuestionIndex + 1) / QUESTIONS_PER_GAME) * 100;
    
    // Update progress fill
    progressFill.style.width = `${progressPercentage}%`;
    
    // Update question counter
    currentQuestionDisplay.textContent = currentQuestionIndex + 1;
    
    // Update coin displays
    earnedCoinsDisplay.textContent = coinsEarnedThisGame;
    securedCoinsDisplay.textContent = securedCoins;
}

// Update the function that shows the wrong answer popup
function showWrongAnswerPopup() {
    // Get the popup elements
    const popup = document.getElementById('wrong-answer-popup');
    const popupContent = popup.querySelector('.popup-content');
    
    // Update the popup content to include coins earned
    const popupTitle = popupContent.querySelector('h2');
    const popupMessage = popupContent.querySelector('p');
    
    // Keep the original title
    popupTitle.textContent = "Not Quite Right";
    
    // Update the message to include coins earned in this round
    popupMessage.innerHTML = `
        That's okay! Let's try again! 💪<br>
        <span class="coins-summary">You earned ${coinsEarnedThisGame} coins this round!</span>
    `;
    
    // Show the popup
    popup.classList.add('active');
} 