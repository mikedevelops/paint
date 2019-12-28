import { InteractionManager } from "./Interaction/InteractionManager";
import { Handler, EventPayload } from "./Interaction/Event";
import { Vector2 } from "./Vector/Vector2";
import { Bounds } from "./Bounds/Bounds";

let uuid = 0;

export class DisplayObject {
  public id: string = uuid.toString() + Date.now().toString();
  public children: DisplayObject[] = [];
  public parent: DisplayObject | null = null;

  constructor(
    protected ctx: CanvasRenderingContext2D, 
    public position: Vector2,
    public width: number, 
    public height: number
  ) {}

  addChild(dobj: DisplayObject) {
    dobj.parent = this;
    this.children.push(dobj);
  }

  removeChild(dobj: DisplayObject) {
    this.children = this.children.filter(c => c.id !== dobj.id);
  }

  draw() {
    this.children.forEach(c => c.draw());
  }

  addEvent(type: string, handler: Handler): void {
    InteractionManager.instance.addListener(
      type, 
      new EventPayload(this, type, handler)
    );
  }

  getBounds(): Bounds {
    const left = this.parent === null ? 
      this.position.x : 
      this.parent.position.x + this.position.x;
    const top = this.parent === null ?
      this.position.y :
      this.parent.position.y + this.position.y;

    return new Bounds(
      left,
      top,
      this.width,
      this.height
    );
  }
}

