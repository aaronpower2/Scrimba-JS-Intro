// create a reusable function to get the square to change color of from  the DOM
function getElem() {
    return document.getElementById("djSquare")
}

//change the square to blue
function blue() {
    getElem().style.background = "blue";
    console.log("should be blue");
}

// change the square to red
function red() {
    getElem().style.background = "red";
    console.log("should be red");
}

// change the square to yellow
function yellow() {
    getElem().style.background = "yellow";
    console.log("should be yellow");
}

// change the square to green
function green() {
    getElem().style.background = "green";
    console.log("should be green");
}

// change the square to white
function reset() {
    getElem().style.background = "#FFFFFF";
    console.log("should be white");
}

function keyPress(e) {
    switch (e.keyCode) {
        case 82:
            red();
            break;
        case 89:
            yellow();
            break;
        case 71:
            green();
            break;
        case 66:
            blue();
            break;
        default:
            reset();
    }
}

// mouse event triggers
document.getElementById("djSquare").addEventListener("mouseover",blue);
document.getElementById("djSquare").addEventListener("mouseout",reset);
document.getElementById("djSquare").addEventListener("mousedown",red);
document.getElementById("djSquare").addEventListener("mouseup",yellow);
document.addEventListener("wheel",green);

// keypress triggers
document.addEventListener("keyup",keyPress);