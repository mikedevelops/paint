import { DisplayObject } from "../DisplayObject";
import { Vector2 } from "../Vector/Vector2";

export type Handler = (event: EventPayload) => void;

export class EventPayload {
  public point: Vector2;

  constructor(
    public target: DisplayObject,
    public type: string,
    public handler: Handler
  ) {}
}

