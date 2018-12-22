var peatryDish = [];

function setup() {
  createCanvas(600, 500);
  peatryDish.push(new(cell));
  peatryDish.push(new(cell));
}

function draw() {
  background(220, 210, 70);
  for (i in peatryDish) {
    peatryDish[i].move();
    peatryDish[i].show();
  }
}

function mousePressed() {
  for (i in peatryDish) {
    if (peatryDish[i].clicked(mouseX, mouseY)) {
      peatryDish.push(peatryDish[i].mitosis());
      peatryDish.push(peatryDish[i].mitosis());
      peatryDish.splice(i, 1);
    }
  }
}