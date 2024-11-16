

let moverA;

function setup() {
  createCanvas(640, 240);
  moverA = new Mover(200, 30, 10);
}

function draw() {
  background(255);

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