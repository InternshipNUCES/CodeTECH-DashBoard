const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "black";
const snakeColor = "rgba(0, 0, 0, 0.9)";
const snakeBorder = "cyan";
const FoodColor = "cyan";
const unitSize = 25;
let run = false;
let foodX;
let foodY;
let xVelocity = unitSize;
let yVelocity = 0;
let score = 0;
let snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 }
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();


function gameStart() {
    run = true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
};
function nextTick() {
    if (run) {
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 135);
    } else {
        displayGameOver();
    };
};
function clearBoard() {
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};
function createFood() {
    function rFood(min, max) {
        const r = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return r;
    }
    foodX = rFood(0, gameWidth - unitSize);
    foodY = rFood(0, gameHeight - unitSize);
};
function drawFood() {
    ctx.fillStyle = FoodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
};
function moveSnake() {
    const head = {
        x: snake[0].x + xVelocity,
        y: snake[0].y + yVelocity
    };
    snake.unshift(head);
    if (snake[0].x == foodX && snake[0].y == foodY) {
        score++;
        scoreText.textContent = score;
        createFood();

    } else {
        snake.pop();
    }
};
function drawSnake() {
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    });
};
function changeDirection(event) {
    const keyPressed = event.keyCode;
    const L = 37;
    const U = 38;
    const R = 39;
    const D = 40;

    const goingUp = (yVelocity == -unitSize);
    const goingDown = (yVelocity == unitSize);
    const goingRight = (xVelocity == unitSize);
    const goingLeft = (xVelocity == -unitSize);

    switch (true) {
        case (keyPressed == L && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case (keyPressed == U && !goingDown):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case (keyPressed == R && !goingLeft):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case (keyPressed == D && !goingUp):
            xVelocity = 0;
            yVelocity = unitSize;
            break;
    }

};
function checkGameOver() {
    switch (true) {
        case (snake[0].x < 0):
            run = false;
            break;
        case (snake[0].x >= gameWidth):
            run = false;
            break;
        case (snake[0].y < 0):
            run = false;
            break;
        case (snake[0].y >= gameWidth):
            run = false;
            break;
    };
    for(let i = 1; i < snake.length;i++){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            run = false;
        };
    };
};
function displayGameOver() { 
    ctx.font = '50px MV Boli';
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!",gameWidth/2,gameHeight/2);
    run = false; 
};
function resetGame() { 
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        {x:unitSize * 4, y:0},
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
    ];
    gameStart();
};