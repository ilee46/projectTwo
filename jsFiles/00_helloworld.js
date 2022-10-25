colorVal = 0;
totalPoints = 0;
lives = 3;
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function changeBackground() {
    if (colorVal % 3 == 0) {
        document.body.style.background = "red"
    }
    if (colorVal % 3 == 1) {
        document.body.style.background = "green"
    }
    if (colorVal % 3 == 2) {
        document.body.style.background = "blue"
    }
    colorVal++;
    console.log("Mouse clicked")
}

function draw() {

}