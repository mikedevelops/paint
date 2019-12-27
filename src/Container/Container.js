import { DisplayObject } from "../DisplayObject";

export class Container extends DisplayObject {
  constructor(ctx, x = 0, y = 0, w = 0, h = 0) {
    super(ctx, x, y, w, h);
  }
}

