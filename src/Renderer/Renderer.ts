import { Stage } from "../Stage/Stage";
import { Graphics } from "../Graphics/Graphics";
import { Sprite } from "../Sprite/Sprite";
import { Texture } from "../Texture/Texture";
import { Vector2 } from "../Vector/Vector2";

export class Renderer {
  private ctx: CanvasRenderingContext2D;
  private stage: Stage | null = null;
  
  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");
  }

  start() {
    this.stage = new Stage(this.ctx);
    this.drawBackground();
  }

  drawBackground() {
    Graphics.fillRect(
      this.ctx, 0, 0, this.canvas.width, this.canvas.height, "black"
    );
  }

  update() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBackground();
    this.stage.draw();
  }

  createSprite(position: Vector2 = Vector2.zero(), texture: Texture | null = null) {
    const sprite = new Sprite(this.ctx, position);

    sprite.setTexture(texture);

    return sprite;
  }
}

export const createRenderer = canvas => new Renderer(canvas);

