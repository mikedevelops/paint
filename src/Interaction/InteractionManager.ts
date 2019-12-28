import { EventPayload, Handler } from "./Event";
import { Vector2 } from "../Vector/Vector2";
import { DisplayObject } from "../DisplayObject";

export const E_POINTER_DOWN = "pointerdown";

export class InteractionManager {
  public static instance: InteractionManager;

  private listeners: Map<string, EventPayload[]> = new Map();
  private boundDownHandler: (event: PointerEvent) => void;

  constructor(private canvas: HTMLCanvasElement) {
    if (InteractionManager.instance !== undefined) {
      throw new Error("Multiple InteractionManager Instances");
    }
    
    InteractionManager.instance = this;

    this.boundDownHandler = this.handlePointerDown.bind(this);

    canvas.addEventListener(E_POINTER_DOWN, this.boundDownHandler);
  }

  private handlePointerDown(event: PointerEvent): void {
    const payloads = this.listeners.get(E_POINTER_DOWN);

    if (payloads === undefined || payloads.length === 0) {
      return;
    }

    const { pageX, pageY } = event;
    const { left, top } = this.canvas.getBoundingClientRect();
    const point = new Vector2(Math.round(pageX - left), Math.round(pageY - top));

    payloads.forEach(payload => {
      // If the point is not within the target bounds, do not invoke the hanlder
      // FIXME: This does not take into account stacking order, this target could
      // be visually underneath another thing, which means it should not capture
      // events. This should be as easy as finding the last child within bounds
      // as for now we're saying stacking order is determined by the order the 
      // child is added
      if (!this.isTarget(point, payload.target)) return;

      payload.point = point;
      payload.handler(payload);
    });
  }

  private isTarget(point: Vector2, target: DisplayObject): boolean {
    return Vector2.isInBounds(point, target.getBounds());
  }

  public addListener(type: string, handler: EventPayload): void {
    const handlers = this.listeners.get(type);

    if (handlers === undefined) {
      this.listeners.set(type, [handler]);
      return;
    }

    this.listeners.set(type, [...handlers, handler]);
  }
}

