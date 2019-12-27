import { Stage } from "../Stage/Stage";
import { Graphics } from "../Graphics/Graphics";

export class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.stage = null;
  }

  start() {
    this.stage = new Stage(this.ctx);
    this.drawBackground();
  }

  drawBackground() {
    Graphics.fillRect(
      this.ctx, 0, 0, this.canvas.width, this.canvas.height, 0x000000
    );
  }

  update() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBackground();
    this.stage.draw();
  }

  createSprite() {
    return new Sprite(this.ctx); 
  }
}

export const createRenderer = canvas => new Renderer(canvas);

