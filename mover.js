class waterdrop {
  constructor(x, y, m) {
    this.mass = m;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  show() {
    stroke(0);
    strokeWeight(1);
    fill(255, 255, 255, 35);
    ellipse(this.position.x, this.position.y, this.mass * 9, this.mass * 12);
  }

  checkEdges() {
    if (this.position.y > height) {
      this.position.y = 0;
      this.velocity.y = 0;
    }
  }
}
