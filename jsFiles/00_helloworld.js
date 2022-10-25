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

function formToMemory() {
    
}