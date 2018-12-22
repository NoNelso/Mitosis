var sizeMod = 0.7;
var peatryDish = [];

function setup() {
  createCanvas(600, 500);
  peatryDish.push(new Cell());
  peatryDish.push(new Cell());
}

function draw() {
  background(220, 210, 70);
  for (var i = 0; i < peatryDish.length; ++i) {
    peatryDish[i].move();
    peatryDish[i].show();
  }
}

function mousePressed() {
  for (var i = peatryDish.length - 1; i >= 0; --i) {
    if (peatryDish[i].clicked(mouseX, mouseY)) {
      peatryDish.push(peatryDish[i].mitosis());
      peatryDish.push(peatryDish[i].mitosis());
      peatryDish.splice(i, 1);
    }
  }
}