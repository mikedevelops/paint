import { loader, createRenderer, createInteractionManager } from "./export";
import data from "../resources/tiles.json";
import { Vector2 } from "./Vector/Vector2";

const canvas = document.getElementById("stage");
const renderer = createRenderer(canvas);
const interaction = createInteractionManager(canvas);

loader.load("tiles.png", data).then(() => {
  console.log("loaded!");
  renderer.start();

  const s = renderer.createSprite(
    new Vector2(100, 50),
    loader.getTexture("tiles 0.aseprite"),
  );

  s.addEvent("pointerdown", ev => console.log(ev));
  s.addEvent("pointerup",  ev => console.log(ev));
  renderer.stage.addChild(s);
  update();
});

const update = () => {
  renderer.update();
  requestAnimationFrame(update);
};

