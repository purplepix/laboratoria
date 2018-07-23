var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
var ballRadius = 13;
var x = canvas.width / 2;
var y = canvas.height-27;
var mx = 5;
var my = -5;
var paddleHeight = 10; 
var paddleWidth = 150;
var paddlePosition = (canvas.width - paddleWidth) / 2;
var pressedRight = false;
var pressedLeft = false;
var brickRows = 4;
var brickColumns = 7;
var brickWidth = 150;
var brickHeight = 25;
var brickPadding = 25;
var brickOffsetTop = 50;
var brickOffsetLeft = 40;
var score = 0;
var lives = 3;	

var bricks = [];
for (c = 0; c < brickColumns; c++) {
	bricks[c] = [];
	for (r = 0; r < brickRows; r++) {
		bricks[c][r] = { x: 0, y: 0, status: 1 };
	}
}	

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.strokeStyle = '#00eeff';
	ctx.stroke();
	ctx.lineWidth = 1.5;
	ctx.closePath();
}

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddlePosition, (canvas.height - 3) - paddleHeight, paddleWidth, paddleHeight);
	ctx.strokeStyle = '#00eeff';
	ctx.stroke();
	ctx.lineWidth = 1.5;
	ctx.closePath();
}

function drawBricks() {
	for (c = 0; c < brickColumns; c++) {
		for (r = 0; r < brickRows; r++) {
			if (bricks[c][r].status === 1) {
				var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
				var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.strokeStyle = '#00eeff';
				ctx.stroke();
				ctx.lineWidth = 1.5;
				ctx.closePath();
			}
		}
	}
}

function drawScore() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "#00eeff";
	ctx.fillText("SCORE: " + score, canvas.width - 125, 30);
}

function drawLives() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "#00eeff";
	ctx.fillText("LIVES: " + lives, 40, 30);
}

function keyDownPress(e) {
	if (e.keyCode === 39 || e.keyCode === 68) {
		pressedRight = true;
	}

	if (e.keyCode === 37 || e.keyCode === 65) {
		pressedLeft = true;
	}
}

function keyUpStop(e) {
	if (e.keyCode === 39 || e.keyCode === 68) {
		pressedRight = false;
	}

	if (e.keyCode === 37 || e.keyCode === 65) {
		pressedLeft = false;
	}
}

function mouseMovement(e) {
	var mousePosition = e.clientX - canvas.offsetLeft;
	if(mousePosition > 0 && mousePosition < canvas.width) {
		paddlePosition = mousePosition - paddleWidth / 2;
	}
}

function collisionDetection() {	
	for (c = 0; c < brickColumns; c++) {
		for (r = 0; r < brickRows; r++) {
			var brick = bricks[c][r];
			if (brick.status === 1) {
				if (x > brick.x && x < brick.x + brickWidth && y > brick.y && y < brick.y + brickHeight) {
					my = -my;
					brick.status = 0;
					score++;
					if (score === brickRows * brickColumns) {
						alert('PARABÉNS! Você ganhou!');
						document.location.reload();
					}
				}		
			}	
		}
	}
}

function moveObjects() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBricks();
	drawBall();
	drawPaddle();
	drawScore();
	drawLives();
	collisionDetection();

	if (x + mx > canvas.width - ballRadius|| x + mx < ballRadius) {
		mx = -mx;
	} 

	if (y + my < ballRadius) {
    my = -my;
	} else if (y + my > canvas.height -10 - ballRadius) {
		if (x > paddlePosition && x < paddlePosition + paddleWidth) {
			my = -my;
		} else if (y + my > canvas.height + 35 - ballRadius) {
			lives--;
			if (lives === 0) {
				alert('GAME OVER');
				document.location.reload();
			} else {
				x = canvas.width / 2;
				y = canvas.height-27;
				mx = 5;
				my = -5;
				paddlePosition = (canvas.width - paddleWidth) / 2;
			}
		}
	}

	x += mx;
	y += my;

	if (pressedRight === true && paddlePosition < canvas.width - paddleWidth) {
		paddlePosition += 7;
	} else if (pressedLeft === true && paddlePosition > 0) {
		paddlePosition -= 7;
	}

	requestAnimationFrame(moveObjects);
}

document.addEventListener('keydown', keyDownPress);
document.addEventListener('keyup', keyUpStop);
document.addEventListener("mousemove", mouseMovement, false);
moveObjects();


