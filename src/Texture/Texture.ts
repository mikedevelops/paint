import { TextureData } from "./TextureData";

export class Texture {
  constructor(
    public name: string, 
    public canvas: OffscreenCanvas, 
    public data: TextureData
  ) {}
}

