// Function to set background upon loading of page:
const setInitialBackground = () => {
    document.body.style.background = 'url(./assets/initial-bg.jpg)';
    document.body.style.backgroundSize = 'cover';
}

// Initialize quiz score at 0:
let totalScore = 0;

// Add array of objects, each of which contain states' info:
const statesInfo = [
    { stateName: "Alabama", stateCapital: "Montgomery", wrongOptionOne: "Tuscaloosa", wrongOptionTwo: "Mobile", wrongOptionThree: "Huntsville" },
    { stateName: "Alaska", stateCapital: "Juneau", wrongOptionOne: "Anchorage", wrongOptionTwo: "Barrow", wrongOptionThree: "Naknek" }
]

// Add a function for each state (as the correct answer will be in a different place in the order of options) that hides the previous state's function & displays the current one and updates the point total accordingly.
// First function should hide #greeting-box; last function should display a button 'get results', which, upon click, will display a new box with the score & hide #total-score
const alabama = () => {
    document.body.style.background = 'url(./assets/al-bg.jpg';
    document.body.style.backgroundSize = 'cover';
    document.getElementById('greeting-box').style.display = 'none';
    document.getElementById('display-question').innerHTML += 
        '<header>What\'s the capital of ' + statesInfo[0].stateName + '?' + '</header>'
        + '<button class="wrong-option">' + statesInfo[0].wrongOptionThree + '</button>'
        + '<button class="wrong-option">' + statesInfo[0].wrongOptionTwo + '</button>'
        + '<button class="wrong-option">' + statesInfo[0].wrongOptionOne + '</button>'
        + '<button class="correct-option">' + statesInfo[0].stateCapital + '</button>'
    let correctOption = document.getElementsByClassName('correct-option');
    let wrongOption = document.getElementsByClassName('wrong-option');
    correctOption.addEventListener('click', function() {
        return totalScore += 1;
    })
    wrongOption.addEventListener('click', function() {
        totalScore += 0;
    })
    document.getElementById('total-score').innerHTML = totalScore;
}