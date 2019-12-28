import { TextureLoader } from "./Loader/TextureLoader";
import { Renderer } from "./Renderer/Renderer";
import { Sprite } from "./Sprite/Sprite";
import { InteractionManager } from "./Interaction/InteractionManager";

export const BASE_UNIT = 32;
export const DEFAULT_LERP_SPEED = 1;

export const loader = new TextureLoader();
export const createRenderer = canvas => new Renderer(canvas);
export const createInteractionManager = canvas => new InteractionManager(canvas);

