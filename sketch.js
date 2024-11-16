
let mover;

function setup() {
  createCanvas(640, 240);
  waterdrop = new waterdrop(320, 0, random(2, 1));
}

function draw() {
  background(0, 40);

  let gravity = createVector(0, 0.1);
  waterdrop.applyForce(gravity);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    waterdrop.applyForce(wind);
  }

  waterdrop.update();
  waterdrop.show();
  waterdrop.checkEdges();

}