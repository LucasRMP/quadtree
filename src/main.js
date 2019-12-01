const size = 500;
let nw, sw, ne, se;

function setup() {
  createCanvas(size, size);
  background(51);

  let boundary = new Rectangle(size/2, size/2, size/2, size/2);
  let qt = new QuadTree(boundary, 4);

  for(let i = 0; i < 30; i++) {
    let p = new Point(random(width/2), random(height/2));
    qt.insert(p);
  }

  console.log(qt);
}