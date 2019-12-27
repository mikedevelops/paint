import { TextureLoader } from "./Loader/TextureLoader";
import { Renderer } from "./Renderer/Renderer";
import { Sprite } from "./Sprite/Sprite";

export const loader = new TextureLoader();
export const createRenderer = canvas => new Renderer(canvas);

