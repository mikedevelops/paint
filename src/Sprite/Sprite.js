import { DisplayObject } from "../DisplayObject";
import { loader } from "../Loader/TextureLoader";

export class Sprite extends DisplayObject {
  constructor(ctx, x = 0, y = 0, w = 0, h = 0) {
    super(ctx, x, y, w, h);
    this.texture = null;
    this.name = null;
  }

  draw() {
    const { x, y } = this.getPosition();

    this.ctx.drawImage(
      this.texture.canvas,
      this.texture.data.x,
      this.texture.data.y, 
      this.texture.data.width, 
      this.texture.data.height,
      x, 
      y,
      // TODO: Resolution needs to be factored in here...
      this.texture.data.width, 
      this.texture.data.height,
    );
  }

  getPosition() {
    if (this.parent === null) {
      return { x: this.x, y: this.y };
    }

    return { x: this.parent.x + this.x, y: this.parent.y + this.y };
  }
}
