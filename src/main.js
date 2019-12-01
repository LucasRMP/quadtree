const size = 500;
let qtree;
let numComparisons;

let gridCheckBox, shouldDrawGrid;
let queryBoxWidth, queryBoxHeight, shouldShowQueryBox = true, queryBoxCheck;
let amountPoints;
let textField;
let queryBox = {
  w: 100,
  h: 100
};

function setupDOM() {
  createCanvas(size, size);

  gridCheckBox = createCheckbox('Display Grid', false).addClass('check-box').addClass('grid-check-box');
  gridCheckBox.changed(() => { shouldDrawGrid = gridCheckBox.checked() });

  queryBoxCheck = createCheckbox('Display QueryBox', true);
  queryBoxCheck.changed(() => { shouldShowQueryBox = queryBoxCheck.checked() });

  queryBoxWidth  = createSlider(50, 200, 100);
  queryBoxHeight = createSlider(50, 200, 100);

  queryBoxWidth.changed(() => queryBox.w = queryBoxWidth.value());
  queryBoxHeight.changed(() => queryBox.h = queryBoxHeight.value());

  amountPoints = createSlider(50, 1000, 500, 50);
  amountPoints.changed(() => {
    qtree.reset();
    for (let i = 0; i < amountPoints.value(); i++) {
      let x = randomGaussian(width/2, width/5);
      let y = randomGaussian(height/2, height/5);
      let p = new Point(x,y);
      qtree.insert(p);
    }
    qtree.show();
  });

  textField = createP("Hello World");
} 

function onScreen(x, y) {
  return (
    x >= 0 && x <= width &&
    y >= 0 && y <= height
  );
}

function setup() {
  setupDOM();

  let boundary = new Rectangle(size/2, size/2, size/2, size/2);
  qtree = new QuadTree(boundary, 4);

  for (let i = 0; i < 300; i++) {
    let x = randomGaussian(width/2, width/5);
    let y = randomGaussian(height/2, height/5);
    let p = new Point(x,y);
    qtree.insert(p);
  }
  qtree.show();
}

function draw() {
  background(51);
  qtree.show(shouldDrawGrid);

  rectMode(CENTER);
  stroke(255,100,100);
  strokeWeight(2);
  noFill();

  numComparisons = -1
  let message;
  if (shouldShowQueryBox) {
    if (onScreen(mouseX, mouseY)) {
      rect(mouseX, mouseY, queryBox.w*2, queryBox.h*2);
      let range = new Rectangle(mouseX, mouseY, queryBox.w, queryBox.h);
      let result = qtree.query(range);
      for (let p of result) {
        stroke(255,0,0);
        strokeWeight(3);
        point(p.x,p.y);
      }
      message = `The algorithm performed ${numComparisons} comparisons to perform the query on the given range`;
    }
    else {
      rect(width/2, height/2, queryBox.w*2, queryBox.h*2);
      message = "Waiting for an input";
    }
  }

  textField.html(message || "");
}