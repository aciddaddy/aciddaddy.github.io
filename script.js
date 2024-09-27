$(document).ready(function() {
    var canvas = $("#gameCanvas")[0];
    var ctx = canvas.getContext("2d");
    var box = 20;
    var snake = [];
    var score = 0;
    var direction = "RIGHT"; // Initialize the direction

    snake[0] = { x: 9 * box, y: 9 * box };

    var food = {
        x: Math.floor(Math.random() * 18 + 1) * box,
        y: Math.floor(Math.random() * 18 + 1) * box
    };

    $(document).keydown(function(event) {
        if (event.keyCode == 37 && direction != "RIGHT") {
            direction = "LEFT";
        } else if (event.keyCode == 38 && direction != "DOWN") {
            direction = "UP";
        } else if (event.keyCode == 39 && direction != "LEFT") {
            direction = "RIGHT";
        } else if (event.keyCode == 40 && direction != "UP") {
            direction = "DOWN";
        }
    });

    function draw() {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < snake.length; i++) {
            ctx.fillStyle = (i === 0) ? "green" : "white";
            ctx.fillRect(snake[i].x, snake[i].y, box, box);
            ctx.strokeStyle = "black";
            ctx.strokeRect(snake[i].x, snake[i].y, box, box);
        }

        ctx.fillStyle = "red";
        ctx.fillRect(food.x, food.y, box, box);

        var snakeX = snake[0].x;
        var snakeY = snake[0].y;

        if (direction == "LEFT") snakeX -= box;
        if (direction == "UP") snakeY -= box;
        if (direction == "RIGHT") snakeX += box;
        if (direction == "DOWN") snakeY += box;

        if (snakeX == food.x && snakeY == food.y) {
            score++;
            $("#score").text("Score: " + score);
            food = {
                x: Math.floor(Math.random() * 18 + 1) * box,
                y: Math.floor(Math.random() * 18 + 1) * box
            };
        } else {
            snake.pop(); // Remove the last segment of the snake
        }

        var newHead = {
            x: snakeX,
            y: snakeY
        };

        // Game Over conditions
        if (snakeX < 0 || snakeY < 0 || snakeX >= canvas.width || snakeY >= canvas.height || collision(newHead, snake)) {
            clearInterval(game);
            alert("Game Over! Your score: " + score);
            document.location.reload();
        }

        snake.unshift(newHead);
    }

    function collision(head, array) {
        for (var i = 0; i < array.length; i++) {
            if (head.x == array[i].x && head.y == array[i].y) {
                return true;
            }
        }
        return false;
    }

    var game = setInterval(draw, 100);
});
