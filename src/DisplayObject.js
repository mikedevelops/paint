let uuid = 0;

export class DisplayObject {
  constructor(ctx, x, y, w, h) {
    this.id = uuid.toString() + Date.now().toString();
    this.x = x;
    this.y = y;
    this.dirty = true;
    this.ctx = ctx;
    this.children = [];
    this.parent = null;
    this.width = w;
    this.height = h;
  }

  addChild(dobj) {
    dobj.parent = this;
    this.children.push(dobj);
  }

  removeChild(dobj) {
    this.children = this.children.filter(c => c.id !== dobj.id);
  }

  draw() {
    this.children.forEach(c => c.draw());
  }
}

