// Function to set background upon loading of page:
const setInitialBackground = () => {
    document.body.style.background = 'url(./assets/initial-bg.jpg)';
    document.body.style.backgroundSize = 'cover';
}

// Function to reduce #hero padding when first question loads:
const reduceHeroPadding = () => {
    document.getElementById('hero').style.padding = '16px';
}

// Initialize quiz score at 0:
let totalScore = 0;

// Variable to count number of states answered:
let answeredStates = 0;
// Function to add 1 when user goes to next question:
const addAnsweredQuestion = () => {
    answeredStates += 1;
}

let options = document.getElementsByClassName("option");
let correctOption = document.getElementById('correct-option');
let wrongOptions = document.getElementsByClassName('wrong-option');

// Function to disable all buttons (to be run upon click of any and all options):
const disableButtons = () => {
    for (const option of options) {
        option.disabled = true;
    }
}

// FUNCTIONS REGARDING TOTAL SCORE:
// Function to add point if correct option is selected (run on click of this button):
const ifCorrect = () => {
    for (const option of options) {
        option.disabled = true;
    }
    totalScore += 1;
    let scores = document.getElementsByClassName('total-score');
    for (const score of scores) {
        score.innerHTML = 'That\'s correct! Total score for the round is: ' + totalScore + ' / ' + answeredStates;
    }
}

// Function to add zero to point total if any wrong option is selected (run on click of these buttons):
const ifWrong = () => {
    for (const option of options) {
        option.disabled = true;
    }
    totalScore += 0;
    let scores = document.getElementsByClassName('total-score');
    for (const score of scores) {
        score.innerHTML = 'Nope! Total score for the round is: ' + totalScore + ' / ' + answeredStates;
    }
}

// Function to disable 'next' button upon loading of new question:
const disableNextBtn = () => {
    let nextBtns = document.getElementsByClassName('next-btn');
    for (const nextBtn of nextBtns) {
        nextBtn.disabled = true;
    }
}

// Function to enable 'next' button after question has been answered:
const enableNextBtn = () => {
    let nextBtns = document.getElementsByClassName('next-btn');
    for (const nextBtn of nextBtns) {
        nextBtn.disabled = false;
    }
}

// REGARDING STATES' INFO:
// Add array of objects, each of which contain states' info:
const statesInfo = [
    { stateName: "Alabama", stateCapital: "Montgomery", wrongOptionOne: "Tuscaloosa", wrongOptionTwo: "Mobile", wrongOptionThree: "Huntsville" },
    { stateName: "Alaska", stateCapital: "Juneau", wrongOptionOne: "Anchorage", wrongOptionTwo: "Barrow", wrongOptionThree: "Naknek" },
    { stateName: "Arizona", stateCapital: "Phoenix", wrongOptionOne: "Yuma", wrongOptionTwo: "Flagstaff", wrongOptionThree: "Scottsdale" },
    { stateName: "Arkansas", stateCapital: "Little Rock", wrongOptionOne: "Springfield", wrongOptionTwo: "Eureka Springs", wrongOptionThree: "Fayetteville" }
]

// Add a function for each state (as the correct answer will be in a different place in the order of options) that hides the previous state's function & displays the current one and updates the point total accordingly.
// First function should hide #greeting-box; last function should display a button 'get results', which, upon click, will display a new box with the score & hide #total-score
const alabama = () => {
    // Add one to total of answeredStates variable (line 31):
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/al-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Make #greeting-box from initial loading of page, disappear:
    document.getElementById('greeting-box').style.display = 'none';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-alabama" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[0].stateName + '?' + '</header>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[0].wrongOptionThree + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[0].wrongOptionTwo + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[0].wrongOptionOne + '</button>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[0].stateCapital + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=alaska()>Next</button>'
        + '</div>'
        + '</section>'

        // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
        disableNextBtn();
}

const alaska = () => {
    // Hide previous state:
    document.getElementById('display-question-alabama').style.display = 'none';
    
    // Add one to total of answeredStates variable (line 31):
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ak-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-alaska" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[1].stateName + '?' + '</header>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[1].wrongOptionThree + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[1].wrongOptionTwo + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[1].wrongOptionOne + '</button>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[1].stateCapital + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=arizona()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const arizona = () => {
    // Hide previous state:
    document.getElementById('display-question-alaska').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/az-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-arizona" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[2].stateName + '?' + '</header>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[2].wrongOptionThree + '</button>'        
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[2].stateCapital + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[2].wrongOptionTwo + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[2].wrongOptionOne + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=arkansas()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const arkansas = () => {
    // Hide previous state:
    document.getElementById('display-question-arizona').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ar-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-arkansas" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[3].stateName + '?' + '</header>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[3].stateCapital + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[3].wrongOptionThree + '</button>'        
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[3].wrongOptionTwo + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[3].wrongOptionOne + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn">Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}