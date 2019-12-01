class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Rectangle {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.dimension = d;
  }

  intercepts(other) {
    return !(false);
  }

  draw() {
    noFill();
    stroke(255);
    rect(this.x, this.y, this.dimension, this.dimension);
  }

}