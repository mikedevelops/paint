import { DisplayObject } from "../DisplayObject";
import { Vector2 } from "../Vector/Vector2";
import { Texture } from "../Texture/Texture";

export class Sprite extends DisplayObject {
  private texture: Texture | null = null;
  private name: string = "";

  constructor(
    ctx: CanvasRenderingContext2D, 
    position: Vector2 = Vector2.zero(), 
    width = 0, 
    height = 0
  ) {
    super(ctx, position, width, height);
  }

  draw() {
    if (this.texture === null) {
      console.warn("No texture set for " + this.name);
      return;
    }

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
      return this.position;
    }

    return Vector2.add(this.parent.position, this.position);
  }

  setTexture(texture: Texture): void {
    this.width = texture.data.width;
    this.height = texture.data.height;
    this.texture = texture;
  }
}
