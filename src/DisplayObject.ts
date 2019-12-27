let uuid = 0;

export class DisplayObject {
  public id: string = uuid.toString() + Date.now().toString();
  public children: DisplayObject[] = [];
  public parent: DisplayObject;

  constructor(
    private ctx: CanvasRenderingContext2D, 
    public x: number, 
    public y: number, 
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
}

