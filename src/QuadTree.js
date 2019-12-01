class QuadTree {
  constructor(boundary, capacity) {
    this.boundary = boundary;
    this.capacity = capacity;
    this.points = [];
    this.subdivided = false;
  }

  insert(point) {
    if(!this.boundary.contains(point)) return false;

    if (this.points.length < this.capacity) {
      this.points.push(point);
      return;
    }
    else {
      if (!this.subdivided)
        this.subdivide();

      this.northWest.insert(point);
      this.southWest.insert(point);
      this.northEast.insert(point);
      this.southEast.insert(point);
    } 
  }

  subdivide() {
    let { x, y, w, h } = this.boundary;

    let nw = new Rectangle(x - w/2, y - h/2, w/2, h/2);
    let ne = new Rectangle(x + w/2, y - h/2, w/2, h/2);
    let sw = new Rectangle(x - w/2, y + h/2, w/2, h/2);
    let se = new Rectangle(x + w/2, y + h/2, w/2, h/2);

    this.northWest = new QuadTree(nw, this.capacity);
    this.northEast = new QuadTree(ne, this.capacity);
    this.southWest = new QuadTree(sw, this.capacity);
    this.southEast = new QuadTree(se, this.capacity);

    this.subdivided = true;
  }


}