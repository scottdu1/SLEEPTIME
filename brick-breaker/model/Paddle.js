import Sprite from "./Sprite.js";
class Paddle extends Sprite {
    constructor(x, y, width, height, color) {
        super(x, y, width, height, color);
        document.addEventListener(
            "keydown",
            this.handleKeyDown
        );

        document.addEventListener(
            "keyup",
            this.handleKeyUp
        );
    }

    handleKeyDown(event) {
       if (event.key === "Right" || event.key === "ArrowRight") {
           this.dx = 2;
        } else if (event.key === "Left" || event.key === "ArrowLeft") {
            this.dx = -2;
        }

    }

    handleKeyUp(event) {
        if (event.key === "Right" || event.key === "ArrowRight") {
            this.dx = 2;
        } else if (event.key === "Left" || event.key === "ArrowLeft") {
            this.dx = -2;
        }
    }

    move(canvasWidth) {
        this.x += this.dx;
        if (this.x < 0) {
            this.x = 0;
        } else if (this.x > canvasWidth) {
            this.x = canvasWidth;
        }
    }
}
export default Paddle;