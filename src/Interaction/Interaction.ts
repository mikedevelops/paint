export enum PointerEventType {
  Pointerdown,
  Pointerup,
  Pointermove  
}

export interface PointerEvent {
  x: number;
  y: number;
  type: PointerEventType;
}

export class InteractionManager {
  constructor(private canvas: HTMLCanvasElement) {
  }
}

