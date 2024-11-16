
let mover;

function setup() {
  createCanvas(640, 240);
  waterdrop = new waterdrop(320, 0, random(2, 1));
}

function draw() {
  background(0, 40);

  if (mouseIsPressed) {
      gravity = createVector(0, 0.005);
    } else {
      gravity = createVector(0, 0.03);
    }

  waterdrop.applyForce(gravity);
  waterdrop.update();
  waterdrop.show();
  waterdrop.checkEdges();
}