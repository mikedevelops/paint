import { DisplayObject } from "../DisplayObject";

export class Stage extends DisplayObject {
  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx, 0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  draw() {
    this.children.forEach(c => c.draw());
  }
}
