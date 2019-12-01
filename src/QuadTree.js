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
      return true;
    }
    else {
      if (!this.subdivided)
        this.subdivide();

      if (this.northWest.insert(point)) return true;
      if (this.southWest.insert(point)) return true;
      if (this.northEast.insert(point)) return true;
      if (this.southEast.insert(point)) return true;
    } 
    return false;
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

  query(range, found = []) {
    if (!this.boundary.intersects(range)) return found;

    for (let point of this.points) {
      numComparisons++;
      if (range.contains(point)) {
        found.push(point);
      }
    }

    if (this.subdivided) {
      this.northWest.query(range, found);
      this.northEast.query(range, found);
      this.southWest.query(range, found);
      this.southEast.query(range, found);
    }

    return found;
  }

  reset() {
    this.points = [];
    this.northWest = null;
    this.northEast = null;
    this.southWest = null;
    this.southEast = null;
    this.subdivided = false;
  }

  show(flag) {
    if (flag) {
      this.boundary.show();
    }

    for(let p of this.points) {
      stroke(255);
      strokeWeight(2);
      point(p.x,p.y);
    }

    if (this.subdivided) {
      this.northWest.show(flag);
      this.northEast.show(flag);
      this.southWest.show(flag);
      this.southEast.show(flag);
    }
  }

}