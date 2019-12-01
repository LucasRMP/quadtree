class QuadTree {
  constructor(boundary, capacity) {
    console.error("HELLO");

    this.boundary = boundary;
    this.capacity = capacity;
    this.points = [];
  }

  insert(point) {
    if (this.points.length < this.capacity) {
      this.points.push(point);
      return;
    }
    else {

      this.subdivide();

    } 
  }

  subdivide() {
    this.northWest = new QuadTree();
    this.southWest = new QuadTree();
    this.northEast = new QuadTree();
    this.southEast = new QuadTree();
  }


}