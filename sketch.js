let game;

function setup() {
  createCanvas(800, 800);
  game = new Game();
}

function draw() {
  background(225);
  game.display();
}
