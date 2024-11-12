//let game;
let scene 

function setup() {
  createCanvas(800, 800);
  //game = new Game();
  scene = new ShowMap()
}

function draw() {
  background(225);
  //game.display();
  scene.display()
}

class Player {
  constructor(xPos, yPos, size) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.size = size;
    this.speed = 5; // Speed Movement
  }
  draw() {
    square(this.xPos, this.yPos, this.size);
  }
  update() {
    if (keyIsDown(87)) {
      // 'W' key (move up)
      this.yPos -= this.speed;
    }
    if (keyIsDown(83)) {
      // 'S' key (move down)
      this.yPos += this.speed;
    }
    if (keyIsDown(65)) {
      // 'A' key (move left)
      this.xPos -= this.speed;
    }
    if (keyIsDown(68)) {
      // 'D' key (move right)
      this.xPos += this.speed;
    }
  }
}
class Opponent {
  constructor(xPos, yPos, size) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.size = size;
  }
  draw() {
    square(this.xPos, this.yPos, this.size);
    line(0, this.yPos + this.size, width, this.yPos + this.size);
  }
}
class ShowMap {
  constructor() {
    this.player = new Player(200, 20, 20);
    this.opponents = [
      new Opponent(50, 100, 20),
      new Opponent(50, 200, 20),
      new Opponent(50, 300, 20),
      new Opponent(50, 400, 20),
      new Opponent(50, 500, 20),
      new Opponent(50, 600, 20),
      new Opponent(50, 700, 20),
    ];
  }
  display() {
    this.player.draw();
    this.player.update();
    for (let i = 0; i < this.opponents.length; i++) this.opponents[i].draw();
  }
}