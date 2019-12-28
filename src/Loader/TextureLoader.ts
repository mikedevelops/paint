import { Texture } from "../Texture/Texture";
import { TextureData } from "../Texture/TextureData";

interface SpriteSheetFrame {
  frame: { x: number; y: number; w: number; h: number; };
  sourceSize: { w: number, h: number };
}

interface SpriteSheetData {
  frames: { [index: string]: SpriteSheetFrame };
}

export class TextureLoader {
  public static instance: TextureLoader;

  private textures: Map<string, Texture> = new Map();

  constructor() {
    if (TextureLoader.instance !== undefined) throw new Error("Multiple instances of the texture loader");

    TextureLoader.instance = this;
  }

  public load(path: string, data: SpriteSheetData) {
    return new Promise((res, rej) => {
      const img = document.createElement("img");

      img.addEventListener("load", _ => {
        this.createTexture(img, data);
        res();
      }); 
      img.addEventListener("error", _ => {
        throw new Error("Could not load " + img.src);
      });
      img.src = path;
    });
  }

  private createTexture(img: HTMLImageElement, data: SpriteSheetData) {
    for (const name in data.frames) {
      const { sourceSize, frame } = data.frames[name];
      const canvas = new OffscreenCanvas(sourceSize.w, sourceSize.h);
      const ctx = canvas.getContext("2d");
      const spriteData = new TextureData(frame.x, frame.y, frame.w, frame.h);
      const texture = new Texture(name, canvas, spriteData);

      ctx.drawImage(
        img, 
        spriteData.x, 
        spriteData.y, 
        spriteData.width, 
        spriteData.height,
        0,
        0,
        spriteData.width,
        spriteData.height
      );

      this.textures.set(name, texture);
    }
  }

  getTexture(key: string) {
    return this.textures.get(key);
  }
}

