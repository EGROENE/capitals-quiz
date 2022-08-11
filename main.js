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
    { stateName: "Arkansas", stateCapital: "Little Rock", wrongOptionOne: "Springfield", wrongOptionTwo: "Eureka Springs", wrongOptionThree: "Fayetteville" },
    { stateName: "California", stateCapital: "Sacramento", wrongOptionOne: "Los Angeles", wrongOptionTwo: "San Diego", wrongOptionThree: "Pacific Palisades" },
    { stateName: "Colorado", stateCapital: "Denver", wrongOptionOne: "Fort Collins", wrongOptionTwo: "Boulder", wrongOptionThree: "Loveland" },
    { stateName: "Connecticut", stateCapital: "Hartford", wrongOptionOne: "Bridgeport", wrongOptionTwo: "Bristol", wrongOptionThree: "Norwalk" },
    { stateName: "Delaware", stateCapital: "Dover", wrongOptionOne: "Wilmington", wrongOptionTwo: "Smyrna", wrongOptionThree: "Seaford" },
    { stateName: "Florida", stateCapital: "Tallahassee", wrongOptionOne: "Jacksonville", wrongOptionTwo: "Miami", wrongOptionThree: "Gainesville" },
    { stateName: "Georgia", stateCapital: "Atlanta", wrongOptionOne: "Savannah", wrongOptionTwo: "Athens", wrongOptionThree: "Augusta" },
    { stateName: "Hawaii", stateCapital: "Honolulu", wrongOptionOne: "Pearl Harbor", wrongOptionTwo: "Waipahu", wrongOptionThree: "Kailua" },
    { stateName: "Idaho", stateCapital: "Boise", wrongOptionOne: "Twin Falls", wrongOptionTwo: "Caldwell", wrongOptionThree: "Nampa" },
    { stateName: "Illinois", stateCapital: "Springfield", wrongOptionOne: "Chicago", wrongOptionTwo: "Joliet", wrongOptionThree: "Aurora" },
    { stateName: "Indiana", stateCapital: "Indianapolis", wrongOptionOne: "Shipshewana", wrongOptionTwo: "South Bend", wrongOptionThree: "Gary" },
    { stateName: "Iowa", stateCapital: "Des Moines", wrongOptionOne: "Iowa City", wrongOptionTwo: "Council Bluffs", wrongOptionThree: "Cedar Rapids" },
    { stateName: "Kansas", stateCapital: "Topeka", wrongOptionOne: "Wichita", wrongOptionTwo: "Kansas City", wrongOptionThree: "Lawrence" },
    { stateName: "Kentucky", stateCapital: "Frankfort", wrongOptionOne: "Lexington", wrongOptionTwo: "Louisville", wrongOptionThree: "Bowling Green" },
    { stateName: "Louisiana", stateCapital: "Baton Rouge", wrongOptionOne: "Shreveport", wrongOptionTwo: "New Orleans", wrongOptionThree: "Monroe" },
    { stateName: "Maine", stateCapital: "Augusta", wrongOptionOne: "Portland", wrongOptionTwo: "Berwick", wrongOptionThree: "Andover" },
    { stateName: "Maryland", stateCapital: "Annapolis", wrongOptionOne: "Baltimore", wrongOptionTwo: "Frederick", wrongOptionThree: "Bethesda" },
    { stateName: "Michigan", stateCapital: "Lansing", wrongOptionOne: "Grand Rapids", wrongOptionTwo: "Detroit", wrongOptionThree: "Traverse City" },
    { stateName: "Minnesota", stateCapital: "St. Paul", wrongOptionOne: "Minneapolis", wrongOptionTwo: "Duluth", wrongOptionThree: "Rochester" },
    { stateName: "Mississippi", stateCapital: "Jackson", wrongOptionOne: "Biloxi", wrongOptionTwo: "Hattiesburg", wrongOptionThree: "Tupelo" },
    { stateName: "Missouri", stateCapital: "Jefferson City", wrongOptionOne: "Springfield", wrongOptionTwo: "Kansas City", wrongOptionThree: "Hannibal" }
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
        + '<button class="next-btn" onclick=california()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const california = () => {
    // Hide previous state:
    document.getElementById('display-question-arkansas').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ca-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-california" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[4].stateName + '?' + '</header>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[4].wrongOptionThree + '</button>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[4].stateCapital + '</button>'       
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[4].wrongOptionTwo + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[4].wrongOptionOne + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=colorado()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const colorado = () => {
    // Hide previous state:
    document.getElementById('display-question-california').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/co-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-colorado" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[5].stateName + '?' + '</header>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[5].wrongOptionThree + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[5].wrongOptionTwo + '</button>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[5].stateCapital + '</button>'       
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[5].wrongOptionOne + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=connecticut()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const connecticut = () => {
    // Hide previous state:
    document.getElementById('display-question-colorado').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ct-bg.jpg';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = "bottom";

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-connecticut" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[6].stateName + '?' + '</header>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[6].wrongOptionThree + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[6].wrongOptionTwo + '</button>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[6].stateCapital + '</button>'       
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[6].wrongOptionOne + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=delaware()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const delaware = () => {
    // Hide previous state:
    document.getElementById('display-question-connecticut').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/de-bg.jpg';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundSize = 'bottom';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-delaware" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[7].stateName + '?' + '</header>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[7].stateCapital + '</button>'       
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[7].wrongOptionThree + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[7].wrongOptionTwo + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[7].wrongOptionOne + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=florida()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const florida = () => {
    // Hide previous state:
    document.getElementById('display-question-delaware').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/fl-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-florida" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[8].stateName + '?' + '</header>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[8].stateCapital + '</button>'       
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[8].wrongOptionThree + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[8].wrongOptionTwo + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[8].wrongOptionOne + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=georgia()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const georgia = () => {
    // Hide previous state:
    document.getElementById('display-question-florida').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ga-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-georgia" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[9].stateName + '?' + '</header>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[9].stateCapital + '</button>'       
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[9].wrongOptionThree + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[9].wrongOptionTwo + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[9].wrongOptionOne + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=hawaii()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const hawaii = () => {
    // Hide previous state:
    document.getElementById('display-question-georgia').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/hi-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-hawaii" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[10].stateName + '?' + '</header>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[10].stateCapital + '</button>'       
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[10].wrongOptionThree + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[10].wrongOptionTwo + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[10].wrongOptionOne + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=idaho()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const idaho = () => {
    // Hide previous state:
    document.getElementById('display-question-hawaii').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/id-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-idaho" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[11].stateName + '?' + '</header>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[11].wrongOptionThree + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[11].wrongOptionTwo + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[11].wrongOptionOne + '</button>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[11].stateCapital + '</button>'       
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=illinois()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const illinois = () => {
    // Hide previous state:
    document.getElementById('display-question-idaho').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/il-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-illinois" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[12].stateName + '?' + '</header>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[12].wrongOptionThree + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[12].wrongOptionTwo + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[12].wrongOptionOne + '</button>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[12].stateCapital + '</button>'       
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=indiana()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const indiana = () => {
    // Hide previous state:
    document.getElementById('display-question-illinois').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/in-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-indiana" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[13].stateName + '?' + '</header>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[13].wrongOptionThree + '</button>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[13].stateCapital + '</button>'       
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[13].wrongOptionTwo + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[13].wrongOptionOne + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=iowa()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const iowa = () => {
    // Hide previous state:
    document.getElementById('display-question-indiana').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ia-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-iowa" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[14].stateName + '?' + '</header>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[14].wrongOptionThree + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[14].wrongOptionTwo + '</button>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[14].stateCapital + '</button>'       
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[14].wrongOptionOne + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=kansas()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const kansas = () => {
    // Hide previous state:
    document.getElementById('display-question-iowa').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ks-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-kansas" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[15].stateName + '?' + '</header>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[15].wrongOptionThree + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[15].wrongOptionTwo + '</button>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[15].stateCapital + '</button>'       
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[15].wrongOptionOne + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=kentucky()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const kentucky = () => {
    // Hide previous state:
    document.getElementById('display-question-kansas').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ky-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-kentucky" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[16].stateName + '?' + '</header>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[16].wrongOptionThree + '</button>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[16].stateCapital + '</button>'       
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[16].wrongOptionTwo + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[16].wrongOptionOne + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=louisiana()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const louisiana = () => {
    // Hide previous state:
    document.getElementById('display-question-kentucky').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/la-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-louisiana" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[17].stateName + '?' + '</header>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[17].wrongOptionThree + '</button>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[17].stateCapital + '</button>'       
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[17].wrongOptionTwo + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[17].wrongOptionOne + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=maine()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const maine = () => {
    // Hide previous state:
    document.getElementById('display-question-louisiana').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/me-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-maine" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[18].stateName + '?' + '</header>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[18].wrongOptionThree + '</button>'
        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[18].stateCapital + '</button>'       
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[18].wrongOptionTwo + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[18].wrongOptionOne + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=maryland()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const maryland = () => {
    // Hide previous state:
    document.getElementById('display-question-maine').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/md-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-maryland" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[19].stateName + '?' + '</header>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[19].wrongOptionThree + '</button>'
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[19].wrongOptionTwo + '</button>'        + '<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[19].stateCapital + '</button>'       
        + '<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[19].wrongOptionOne + '</button>'
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn">Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}