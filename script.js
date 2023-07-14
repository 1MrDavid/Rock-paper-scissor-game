//Variables
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

const rerv_rock = document.querySelector('#rerv-rock');
const rerv_paper = document.querySelector('#rerv-paper');
const rerv_scissor = document.querySelector('#rerv-scissors');

const win = document.querySelector('#winner');
const lose = document.querySelector('#loser');
const draw = document.querySelector('#draw');

const DIVS = document.querySelectorAll('.RPS');

let playerChoise;
let cpuChoise;

//onclick functions
rock.addEventListener('click', function() {
    clean();
    rock.classList.add("selected");
    playerChoise = rock;
    rpsGame(playerChoise);
})
paper.addEventListener('click', function() {
    clean();
    paper.classList.add("selected");
    playerChoise = paper;
    rpsGame(playerChoise);
})
scissor.addEventListener('click', function() {
    clean();
    scissor.classList.add("selected");
    playerChoise = scissor;
    rpsGame(playerChoise);
})
function rpsGame (playerChoise) {
    let x = Math.random() * 9;
    x = Math.floor(x);
    if (x >= 0 && x <= 2) {
        rerv_rock.classList.add("selected");
        cpuChoise = rock;
    } else if (x >= 3 && x <= 5) {
        rerv_paper.classList.add("selected");
        cpuChoise = paper;
    } else {
        rerv_scissor.classList.add("selected");
        cpuChoise = scissor;
    }
    if (playerChoise == cpuChoise) {
        draw.style.display = "block";
        DIVS.forEach(function(DIVS) {
            DIVS.style.boxShadow = "4px 4px 4px 4px rgb(112, 107, 107)";
        })
    } else if (playerChoise == rock && cpuChoise == scissor) {
        win.style.display = "block";
        DIVS.forEach(function(DIVS) {
            DIVS.style.boxShadow = "4px 4px 4px 4px rgb(90, 204, 90)";
        })
    } else if (playerChoise == scissor && cpuChoise == paper) {
        win.style.display = "block";
        DIVS.forEach(function(DIVS) {
            DIVS.style.boxShadow = "4px 4px 4px 4px rgb(90, 204, 90)";
        })
    } else if (playerChoise == paper && cpuChoise == rock) {
        win.style.display = "block";
        DIVS.forEach(function(DIVS) {
            DIVS.style.boxShadow = "4px 4px 4px 4px rgb(90, 204, 90)";
        })
    } 
    else {
        lose.style.display = "block";
        DIVS.forEach(function(DIVS) {
            DIVS.style.boxShadow = "4px 4px 4px 4px rgb(231, 72, 72)";
        })
    }
}
function clean () {
    const RPS = [rock, paper, scissor, rerv_paper, rerv_rock, rerv_scissor];
    const resultTEXT = [draw,win,lose];
    for (let text of resultTEXT) {
        text.style.display = "none";
    } for (let elements of RPS) {
        elements.classList.remove("selected");
    }
}