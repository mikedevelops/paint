import { loader, createRenderer } from "./export";
import data from "../resources/tiles.json";

const canvas = document.getElementById("stage");
const renderer = createRenderer(canvas);

loader.load("tiles.png", data).then(() => {
  console.log("loaded!");
  renderer.start();

  const s = renderer.createSprite();

  s.texture = loader.getTexture("tiles 0.aseprite");
  renderer.stage.addChild(s);
  update();
});

const update = () => {
  renderer.update();
  requestAnimationFrame(update);
};

