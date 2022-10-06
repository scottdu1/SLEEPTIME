import "./style.css";
import Block from "./model/Block.js";
import Sprite from "./model/Sprite.js";
import Ball from "./model/Ball.js";
import Paddle from "./model/Paddle.js";


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const redBlock = new Block(20, 40, 50, 50, "#FF0000");

const ball = new Ball(
  canvas.width / 2,
  canvas.height - 30,
  10,
  10,
  "#0095DD",
  2,
  -2
);

const paddle = new Paddle(
  (canvas.width - 10) / 2,
  canvas.height - 10,
  75,
  10,
  "#0095DD"
);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  redBlock.draw(ctx);
  ball.draw(ctx);
  ball.move();
  ball.bounce(canvas.width, canvas.height);
  paddle.draw(ctx);
  paddle.move();
  window.requestAnimationFrame(draw);
}

draw();
