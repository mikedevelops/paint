import { DisplayObject } from "../DisplayObject";
import { Vector2 } from "../Vector/Vector2";

export class Stage extends DisplayObject {
  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx, Vector2.zero(), ctx.canvas.width, ctx.canvas.height);
  }

  draw() {
    this.children.forEach(c => c.draw());
  }
}
