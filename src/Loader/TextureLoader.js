class Texture {
  constructor(name, canvas, data) {
    this.name = name;
    this.canvas = canvas;
    this.data = data;
  }
}

class TextureData {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  }
}

export class TextureLoader {
  constructor() {
    this.textures = new Map();
  }

  load(path, data) {
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

  createTexture(img, data) {
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

  getTexture(key) {
    return this.textures.get(key);
  }
}

