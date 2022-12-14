// Function to set background upon initial loading of page:
const setInitialBackground = () => {
    document.body.style.background = 'url(./assets/initial-bg.jpg)';
    document.body.style.backgroundSize = 'cover';
}

// Function to reduce #hero padding when first question loads:
const reduceHeroPadding = () => {
    document.getElementById('hero').style.padding = '42px';
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
        score.innerHTML = 'Correct! Total score for the round is: ' + totalScore + ' / ' + answeredStates;
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

// Function to disable 'next' button upon loading of new question (run on click of 'Next' button of previous question):
const disableNextBtn = () => {
    let nextBtns = document.getElementsByClassName('next-btn');
    for (const nextBtn of nextBtns) {
        nextBtn.disabled = true;
    }
}

// Function to enable 'next' button (to be run upon click of any and all options):
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
    { stateName: "Massachusetts", stateCapital: "Boston", wrongOptionOne: "Cambridge", wrongOptionTwo: "Bedford", wrongOptionThree: "Worcester" },
    { stateName: "Michigan", stateCapital: "Lansing", wrongOptionOne: "Grand Rapids", wrongOptionTwo: "Detroit", wrongOptionThree: "Traverse City" },
    { stateName: "Minnesota", stateCapital: "St. Paul", wrongOptionOne: "Minneapolis", wrongOptionTwo: "Duluth", wrongOptionThree: "Rochester" },
    { stateName: "Mississippi", stateCapital: "Jackson", wrongOptionOne: "Biloxi", wrongOptionTwo: "Hattiesburg", wrongOptionThree: "Tupelo" },
    { stateName: "Missouri", stateCapital: "Jefferson City", wrongOptionOne: "Springfield", wrongOptionTwo: "Kansas City", wrongOptionThree: "Hannibal" },
    { stateName: "Montana", stateCapital: "Helena", wrongOptionOne: "Big Sky", wrongOptionTwo: "Billings" , wrongOptionThree: "Bozeman" },
    { stateName: "Nebraska", stateCapital: "Lincoln", wrongOptionOne: "Omaha", wrongOptionTwo: "Bellevue", wrongOptionThree: "Papillion" },
    { stateName: "Nevada", stateCapital: "Carson City", wrongOptionOne: "Reno", wrongOptionTwo: "Las Vegas", wrongOptionThree: "Sparks" },
    { stateName: "New Hampshire", stateCapital: "Concord", wrongOptionOne: "Manchester", wrongOptionTwo: "Portsmouth", wrongOptionThree: "Derry" },
    { stateName: "New Jersey", stateCapital: "Trenton", wrongOptionOne: "Newark", wrongOptionTwo: "Garden City", wrongOptionThree: "Rutherford" },
    { stateName: "New Mexico", stateCapital: "Santa Fe", wrongOptionOne: "Albuquerque", wrongOptionTwo: "Las Cruces" , wrongOptionThree: "Roswell" },
    { stateName: "New York", stateCapital: "Albany", wrongOptionOne: "Manhattan", wrongOptionTwo: "Syracuse", wrongOptionThree: "Staten Island" },
    { stateName: "North Carolina", stateCapital: "Raleigh", wrongOptionOne: "Charlotte", wrongOptionTwo: "Chapel Hill", wrongOptionThree: "Greensboro" },
    { stateName: "North Dakota", stateCapital: "Bismarck", wrongOptionOne: "Fargo", wrongOptionTwo: "Mandan", wrongOptionThree: "Grand Forks" },
    { stateName: "Ohio", stateCapital: "Columbus", wrongOptionOne: "Cincinnati", wrongOptionTwo: "Cleveland", wrongOptionThree: "Youngstown" },
    { stateName: "Oklahoma", stateCapital: "Oklahoma City", wrongOptionOne: "Tulsa", wrongOptionTwo: "Broken Arrow", wrongOptionThree: "Comanche" },
    { stateName: "Oregon", stateCapital: "Salem", wrongOptionOne: "Portland", wrongOptionTwo: "Medford" , wrongOptionThree: "McMinnville" },
    { stateName: "Pennsylvania", stateCapital: "Harrisburg", wrongOptionOne: "Pittsburgh", wrongOptionTwo: "Scranton", wrongOptionThree: "Philadelphia" },
    { stateName: "Rhode Island", stateCapital: "Providence", wrongOptionOne: "Warwick", wrongOptionTwo: "Pawtucket", wrongOptionThree: "Newport" },
    { stateName: "South Carolina", stateCapital: "Columbia", wrongOptionOne: "Charleston", wrongOptionTwo: "Myrtle Beach", wrongOptionThree: "Greensboro" },
    { stateName: "South Dakota", stateCapital: "Pierre", wrongOptionOne: "Brookings", wrongOptionTwo: "Sioux Falls", wrongOptionThree: "Big Stone City" },
    { stateName: "Tennessee", stateCapital: "Nashville", wrongOptionOne: "Gatlinburg", wrongOptionTwo: "Memphis" , wrongOptionThree: "Dollywood" },
    { stateName: "Texas", stateCapital: "Austin", wrongOptionOne: "Houston", wrongOptionTwo: "San Antonio", wrongOptionThree: "Dallas" },
    { stateName: "Utah", stateCapital: "Salt Lake City", wrongOptionOne: "Provo", wrongOptionTwo: "Ogden", wrongOptionThree: "South Jordan" },
    { stateName: "Vermont", stateCapital: "Montpelier", wrongOptionOne: "Burlington", wrongOptionTwo: "Winooski", wrongOptionThree: "Concord" },
    { stateName: "Virginia", stateCapital: "Richmond", wrongOptionOne: "Virginia Beach", wrongOptionTwo: "Chesapeake", wrongOptionThree: "Alexandria" },
    { stateName: "Washington", stateCapital: "Olympia", wrongOptionOne: "Seattle", wrongOptionTwo: "Tacoma", wrongOptionThree: "Linden" },
    { stateName: "West Virginia", stateCapital: "Charleston", wrongOptionOne: "Morgantown", wrongOptionTwo: "Wheeling", wrongOptionThree: "Clarkston" },
    { stateName: "Wisconsin", stateCapital: "Madison", wrongOptionOne: "Milwaukee", wrongOptionTwo: "Green Bay", wrongOptionThree: "Fond du Lac" },
    { stateName: "Wyoming", stateCapital: "Cheyenne", wrongOptionOne: "Jackson Hole", wrongOptionTwo: "Casper", wrongOptionThree: "Sheridan" }
]

// RANDOMIZE OPTIONS:
// Initialize statesInfoIndex variable, to be used as param in randomizeOptions array and increased by one w/ each state:
let statesInfoIndex = -1;
const incrementStatesInfoIndex = () => {
    statesInfoIndex += 1;
}

// Initialize stateOptions array. This is the container for each state's options, whose indices will be used to populate the HTML:
let stateOptions = [];

const randomizeOptions = (statesInfoIndex) => {
    let optionsArray = [
        ('<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[statesInfoIndex].wrongOptionOne + '</button>'),
        ('<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[statesInfoIndex].wrongOptionTwo + '</button>'),
        ('<button class="option wrong-option" onclick=ifWrong();enableNextBtn()>' + statesInfo[statesInfoIndex].wrongOptionThree + '</button>'),
        ('<button class= "option" id="correct-option" onclick=ifCorrect();enableNextBtn()>' + statesInfo[statesInfoIndex].stateCapital + '</button>')
    ]

    // Push state's options to stateOptions; these options will populate HTML.
    for (const option of optionsArray) {
        stateOptions.push(option);
    }

    // Loop to randomly order items in stateOptions array:
    for (let i = 1; i < stateOptions.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [stateOptions[i], stateOptions[j]] = [stateOptions[j], stateOptions[i]];
    }
}

// EMPTY OUT stateOptions array (with each state, starting w/ alaska(), so it only contains its own four options):
const emptyStateOptions = () => stateOptions = [];

// STATE FUNCTIONS
/* I decided to create a separate function for each state in accordance with the Single-Responsibility Principle, which makes debugging easier &  because some functions have unique operations and styling. */
const alabama = () => {
    // Add one to total of answeredStates variable (line 31):
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/al-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Make #greeting-box from initial loading of page, disappear:
    document.getElementById('greeting-box').style.display = 'none';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-alabama" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ak-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-alaska" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();
    
    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/az-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-arizona" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ar-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-arkansas" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ca-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-california" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/co-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-colorado" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ct-bg.jpg';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = "bottom";

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-connecticut" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/de-bg.jpg';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundSize = 'bottom';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-delaware" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/fl-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-florida" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ga-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-georgia" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/hi-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-hawaii" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/id-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-idaho" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]    
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();
    
    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/il-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-illinois" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/in-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-indiana" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ia-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-iowa" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ks-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-kansas" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ky-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-kentucky" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/la-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-louisiana" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/me-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-maine" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
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

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/md-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-maryland" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=massachusetts()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const massachusetts = () => {
    // Hide previous state:
    document.getElementById('display-question-maryland').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ma-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-massachusetts" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]     
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=michigan()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const michigan = () => {
    // Hide previous state:
    document.getElementById('display-question-massachusetts').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/mi-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-michigan" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=minnesota()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const minnesota = () => {
    // Hide previous state:
    document.getElementById('display-question-michigan').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/mn-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-minnesota" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]     
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=mississippi()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const mississippi = () => {
    // Hide previous state:
    document.getElementById('display-question-minnesota').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ms-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-mississippi" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=missouri()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const missouri = () => {
    // Hide previous state:
    document.getElementById('display-question-mississippi').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/mo-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-missouri" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=montana()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const montana = () => {
    // Hide previous state:
    document.getElementById('display-question-missouri').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/mt-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-montana" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=nebraska()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const nebraska = () => {
    // Hide previous state:
    document.getElementById('display-question-montana').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ne-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-nebraska" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]     
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=nevada()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const nevada = () => {
    // Hide previous state:
    document.getElementById('display-question-nebraska').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/nv-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-nevada" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]      
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=newHampshire()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const newHampshire = () => {
    // Hide previous state:
    document.getElementById('display-question-nevada').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/nh-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-new-hampshire" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]     
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=newJersey()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const newJersey = () => {
    // Hide previous state:
    document.getElementById('display-question-new-hampshire').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/nj-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-new-jersey" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]      
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=newMexico()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const newMexico = () => {
    // Hide previous state:
    document.getElementById('display-question-new-jersey').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/nm-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-new-mexico" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]       
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=newYork()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const newYork = () => {
    // Hide previous state:
    document.getElementById('display-question-new-mexico').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ny-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-new-york" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]      
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=northCarolina()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const northCarolina = () => {
    // Hide previous state:
    document.getElementById('display-question-new-york').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/nc-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-north-carolina" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]      
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=northDakota()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const northDakota = () => {
    // Hide previous state:
    document.getElementById('display-question-north-carolina').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/nd-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-north-dakota" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]      
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=ohio()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const ohio = () => {
    // Hide previous state:
    document.getElementById('display-question-north-dakota').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/oh-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-ohio" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]       
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=oklahoma()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const oklahoma = () => {
    // Hide previous state:
    document.getElementById('display-question-ohio').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ok-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-oklahoma" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]      
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=oregon()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const oregon = () => {
    // Hide previous state:
    document.getElementById('display-question-oklahoma').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/or-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-oregon" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]       
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=pennsylvania()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const pennsylvania = () => {
    // Hide previous state:
    document.getElementById('display-question-oregon').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/pa-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-pennsylvania" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]       
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=rhodeIsland()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const rhodeIsland = () => {
    // Hide previous state:
    document.getElementById('display-question-pennsylvania').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ri-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-rhode-island" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]        
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=southCarolina()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const southCarolina = () => {
    // Hide previous state:
    document.getElementById('display-question-rhode-island').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/sc-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-south-carolina" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]        
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=southDakota()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const southDakota = () => {
    // Hide previous state:
    document.getElementById('display-question-south-carolina').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/sd-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-south-dakota" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]        
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=tennessee()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const tennessee = () => {
    // Hide previous state:
    document.getElementById('display-question-south-dakota').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/tn-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-tennessee" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]        
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=texas()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const texas = () => {
    // Hide previous state:
    document.getElementById('display-question-tennessee').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/tx-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-texas" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]        
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=utah()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const utah = () => {
    // Hide previous state:
    document.getElementById('display-question-texas').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/ut-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-utah" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]        
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=vermont()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const vermont = () => {
    // Hide previous state:
    document.getElementById('display-question-utah').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/vt-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-vermont" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]        
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=virginia()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const virginia = () => {
    // Hide previous state:
    document.getElementById('display-question-vermont').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/va-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-virginia" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]        
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=washington()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const washington = () => {
    // Hide previous state:
    document.getElementById('display-question-virginia').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/wa-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-washington" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]        
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=westVirginia()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const westVirginia = () => {
    // Hide previous state:
    document.getElementById('display-question-washington').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/wv-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-west-virginia" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]        
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=wisconsin()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const wisconsin = () => {
    // Hide previous state:
    document.getElementById('display-question-west-virginia').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/wi-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-wisconsin" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]        
        + '<div class="total-score"></div>'
        + '<div id="reset-next-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" onclick=wyoming()>Next</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}

const wyoming = () => {
    // Hide previous state:
    document.getElementById('display-question-wisconsin').style.display = 'none';
    
    // Add one to total of answeredStates variable:
    addAnsweredQuestion();

    // Increase statesInfoIndex by 1:
    incrementStatesInfoIndex();

    // Empty stateOptions array (so that each state only contains four options & no options from other states):
    emptyStateOptions();

    // Function to randomize options:
    randomizeOptions(statesInfoIndex);

    // Change background, any additional styling:
    document.body.style.background = 'url(./assets/wy-bg.jpg';
    document.body.style.backgroundSize = 'cover';

    // Add HTML for current state:
    document.getElementById('hero').innerHTML += 
        '<section id="display-question-wyoming" class="display-question">'
        + '<header>' + answeredStates + ' / 50</header>'
        + '<header>What\'s the capital of ' + statesInfo[statesInfoIndex].stateName + '?' + '</header>'
        + stateOptions[0]
        + stateOptions[1]
        + stateOptions[2]
        + stateOptions[3]        
        + '<div class="total-score"></div>'
        + '<div id="reset-gr-btns">'
        + '<button class="reset-btn" onclick="window.location.href=window.location.href">Reset Game</button>'
        + '<button class="next-btn" id="get-results-btn" onclick=getResults()>Get Results!</button>'
        + '</div>'
        '</section>'

    // Disable 'next' btn upon loading of current state (enabled upon clicking of any of the answer buttons):
    disableNextBtn();
}
// END OF STATE FUNCTIONS

// RESULTS PAGE
// Function containing logic to display appropriate feedback:
const getFeedback = (totalScore) => {
    let feedback = '';
    if (totalScore === 50) {
        feedback = "<p>You got a perfect score! You must be really smart.</p>";
    } else if (totalScore <= 49 && totalScore >= 40) {
        feedback = "<p>Well done! Your score was " + totalScore + " / 50.</p>";
    } else if (totalScore <= 39 && totalScore >= 30) {
        feedback = "<p>Not too bad, but could've been better. Your score was " + totalScore + " / 50.</p>";
    } else if (totalScore <= 29 && totalScore >= 20) {
        feedback = "<p>Not very good. Your score was " + totalScore + " / 50.</p>";
    } else if (totalScore <= 19 && totalScore >= 10) {
        feedback = "<p>Bad. Your score was a miserable " + totalScore + " / 50.</p>";
    } else if (totalScore <= 9 && totalScore >= 1) {
        feedback = "<p>Abysmal. Your score was a pathetic " + totalScore + " / 50.</p>";
    } else {
        feedback = "<p>You didn't get a single one right. You have some studying to do.</p>"
    }
    return feedback;
 }

// Function to display results page (run on click of 'Get Results!' btn in wyoming()):
const getResults = () => {
    console.log(totalScore);
    // Hide last state:
    document.getElementById('display-question-wyoming').style.display = 'none';

    // Change background:
    setInitialBackground();

    // Add HTML displaying round score:
    // Put feedbacks into own array, then add below based on logic, as defined in separate function, like stateOptions[1]. EX: If >= 15 && < 30, then add feedbacks[2]. Return value from function, then try adding funct to html below.
    document.getElementById('hero').innerHTML +=
    '<section id="results-box">'
    + '<h1>Thanks for completing the quiz!</h1>'
    + getFeedback(totalScore)
    + '<button onclick="window.location.href=window.location.href">Play Again!</button>'
    '</section>'
}