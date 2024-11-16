
let moverA;

function setup() {
  createCanvas(640, 240);
  moverA = new Mover(320, 0, 5);
}

function draw() {
  background(0);

  let gravity = createVector(0, 0.1);
  moverA.applyForce(gravity);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    moverA.applyForce(wind);
  }

  moverA.update();
  moverA.show();
  moverA.checkEdges();

}