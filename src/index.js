import { Sprite } from "./Sprite/Sprite";
import { TextureLoader } from "./Loader/TextureLoader";
import data from "../resources/tiles.json";
import { loader } from "./Loader/TextureLoader";
import { Stage } from "./Stage/Stage";
import { createRenderer } from "./Renderer/Renderer";
import { Container } from "./Container/Container";

const root = document.getElementById("stage");
const renderer = createRenderer(root);

loader.load("tiles.2154cb60.png", data).then(() => {
  renderer.start();

  const s = new Sprite(renderer.ctx, "tiles 0.aseprite");
  const container = new Container(renderer.ctx);

  container.x = 50;
  container.y = 50;
  s.x = 50;
  s.y = 50;

  container.addChild(s);
  renderer.stage.addChild(container);

  update();
});

const update = () => {
  renderer.update();
  requestAnimationFrame(update);
}

