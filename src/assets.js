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

  contains(point) {
    return (
      point.x <= this.x + this.w &&
      point.x >= this.x - this.w &&
      point.y <= this.y + this.h &&
      point.y >= this.y - this.h 
    );
  }

  intersects(other) {
    return !(
      this.x + this.w < other.x - other.w ||
      this.x - this.w > other.x + other.w ||
      this.y + this.h < other.y - other.h ||
      this.y - this.h > other.y + other.h
    );
  }


  show() {
    stroke(255);
    noFill();
    rectMode(CENTER);
    strokeWeight(1);
    rect(this.x, this.y, this.w*2, this.h*2);
  }
}