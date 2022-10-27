totalPoints = 0;
lives = 3;
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function changeBackground(points) {
    document.body.style.background = "green"
    console.log("Mouse clicked")
    totalPoints = totalPoints + points;
    console.log(totalPoints)
    console.log(lives)
}

function wrongAnswer() {
    document.body.style.background = "red"
    lives--;
    console.log(totalPoints)
    console.log(lives)
}

function buttonToMemory(identifier) {
    if (identifier == 1)
        buttonID = 'BTN1'
    else if (identifier == 2)
        buttonID = 'BTN2'
    else if (identifier == 3)
        buttonID = 'BTN3'
    else if (identifier == 4)
        buttonID = 'BTN4'
    else if (identifier == 5)
        buttonID = 'BTN5'
    else if (identifier == 6)
        buttonID = 'BTN6'
    else if (identifier == 7)
        buttonID = 'BTN7'
    else if (identifier == 8)
        buttonID = 'BTN8'
    else if (identifier == 9)
        buttonID = 'BTN9'
    else if (identifier == 10)
        buttonID = 'BTN10'
    else if (identifier == 11)
        buttonID = 'BTN11'
    else if (identifier == 12)
        buttonID = 'BTN12'

    buttonValue = document.getElementById(buttonID)
    sessionStorage.setItem(buttonID, `${buttonValue.innerText}`);
    console.log(sessionStorage)
}

function submitToMemory(key, value) {
    sessionStorage.setItem(key, true);
}

function makeKey() {
    sessionStorage.setItem("answerKey", true);
    sessionStorage.setItem("Lives", lives);
    sessionStorage.setItem("Score", totalPoints);
}

function clearMem(){
    sessionStorage.clear();
}

