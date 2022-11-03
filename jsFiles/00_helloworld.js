function setup() {
    createCanvas(windowWidth, windowHeight);
}

function init() {
    lives = 3;
    totalPoints = 0;
    sessionStorage.setItem("Lives", lives);
    sessionStorage.setItem("Score", totalPoints);
}

function changeBackground(points) {
    document.body.style.backgroundImage = "url('../images/correct.jpg')"
    console.log("Mouse clicked")
    totalPoints = sessionStorage.getItem("Score")
    totalPoints = parseInt(totalPoints)
    lives = sessionStorage.getItem("Lives")
    totalPoints = totalPoints + points;
    sessionStorage.setItem("Score", totalPoints);
    if (totalPoints >= 3000) {
        window.location.href = "victory.html"
    }
    console.log(totalPoints)
    console.log(lives)
}

function wrongAnswer() {
    document.body.style.backgroundImage = "url('../images/wrong.jpg')"
    totalPoints = sessionStorage.getItem("Score")
    lives = sessionStorage.getItem("Lives")
    lives = lives - 1;
    sessionStorage.setItem("Lives", lives);
    if (lives <= 0) {
        window.location.href = "gameover.html"    
    }
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
    console.log(buttonValue)
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

function disableButton(button) {
    button.disabled = true;
    sessionStorage.setItem(button, true);
}

function checkIfOff(identifier) {
    if (identifier == 'BTN1')
        buttonID = BTN1
    else if (identifier == 'BTN2')
        buttonID = BTN2
    else if (identifier == 'BTN3')
        buttonID = BTN3
    else if (identifier == 'BTN4')
        buttonID = BTN4
    else if (identifier == 'BTN5')
        buttonID = BTN5
    else if (identifier == 'BTN6')
        buttonID = BTN6
    else if (identifier == 'BTN7')
        buttonID = BTN7
    else if (identifier == 'BTN8')
        buttonID = BTN8
    else if (identifier == 'BTN9')
        buttonID = BTN9
    else if (identifier == 'BTN10')
        buttonID = BTN10
    else if (identifier == 'BTN11')
        buttonID = BTN11
    else if (identifier == 'BTN12')
        buttonID = BTN12
    else if (identifier == 'wrg1')
        buttonID = wrg1
    else if (identifier == 'wrg2')
        buttonID = wrg2
    else if (identifier == 'wrg3')
        buttonID = wrg3
    else if (identifier == 'wrg4')
        buttonID = wrg4
    else if (identifier == 'wrg5')
        buttonID = wrg5
    else if (identifier == 'wrg6')
        buttonID = wrg6
    else if (identifier == 'wrg7')
        buttonID = wrg7
    else if (identifier == 'wrg8')
        buttonID = wrg8
    else if (identifier == 'wrg9')
        buttonID = wrg9
    else if (identifier == 'wrg10')
        buttonID = wrg10
    else if (identifier == 'wrg11')
        buttonID = wrg11
    else if (identifier == 'wrg12')
        buttonID = wrg12
    else if (identifier == 'wrg13')
        buttonID = wrg13
    else if (identifier == 'wrg14')
        buttonID = wrg14
    else if (identifier == 'wrg15')
        buttonID = wrg15
    else if (identifier == 'wrg16')
        buttonID = wrg16
    else if (identifier == 'wrg17')
        buttonID = wrg17
    else if (identifier == 'wrg18')
        buttonID = wrg18
    else if (identifier == 'wrg19')
        buttonID = wrg19
    else if (identifier == 'wrg20')
        buttonID = wrg20
    else if (identifier == 'wrg21')
        buttonID = wrg21
    else if (identifier == 'wrg22')
        buttonID = wrg22
    else if (identifier == 'wrg23')
        buttonID = wrg23
    else if (identifier == 'wrg24')
        buttonID = wrg24
    else if (identifier == 'wrg25')
        buttonID = wrg25
    else if (identifier == 'wrg26')
        buttonID = wrg26
    else if (identifier == 'wrg27')
        buttonID = wrg27
    else if (identifier == 'wrg28')
        buttonID = wrg28
    else if (identifier == 'wrg29')
        buttonID = wrg29
    else if (identifier == 'wrg30')
        buttonID = wrg30
    else if (identifier == 'wrg31')
        buttonID = wrg31
    else if (identifier == 'wrg32')
        buttonID = wrg32
    else if (identifier == 'wrg33')
        buttonID = wrg33
    else if (identifier == 'wrg34')
        buttonID = wrg34
    else if (identifier == 'wrg35')
        buttonID = wrg35
    else if (identifier == 'wrg36')
        buttonID = wrg36
    buttonValue = document.getElementById(buttonID)
    offVal = sessionStorage.getItem(buttonID);
    if (offVal == true) {
        buttonID.disabled = true;
    }
}