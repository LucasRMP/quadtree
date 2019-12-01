class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  contains(other) {
    return !(
      other.x < this.x - this.w ||
      other.x > this.x + this.w ||
      other.y < this.y - this.h ||
      other.y > this.y + this.h
    );
  }

  show() {
    stroke(255);
    noFill();
    rectMode(CENTER);
    rect(this.x, this.y, this.w*2, this.h*2);
  }
}