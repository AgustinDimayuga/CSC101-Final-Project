let scene;
let game;

function setup() {
  createCanvas(800, 800);
  scene = new ShowMap();
  game = new Game();
}

function draw() {
  background(225);
  if (scene.sceneActive) {
    scene.display(); // Display map scene if active
  } else {
    game.display(); // Display battle scene if collision occurred
  }
}
