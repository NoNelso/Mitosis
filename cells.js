function Cell(position, radius, c) {
  if (position)
    this.position = position.copy();
  else
    this.position = createVector(random(width), random(height));

  this.radius = radius || 75;
  this.c = c || color(random(255), random(255), random(255))

  this.clicked = function(x, y) {
    var d = dist(this.position.x, this.position.y, x, y);
    if (d < this.radius) {
      return true;
    } else return false;
  }

  this.mitosis = function() {
    var cell = new Cell(this.position, this.r * sizeMod, this.c);
    this.position.x += random(-this.r, this.r);
    this.position.y += random(-this.r, this.r);
    return cell;
  }
  this.move = function() {
    var vel = p5.Vector.random2D();
    this.position.add(vel);
  }
  this.show = function() {
    fill(this.c);
    ellipse(this.position.x, this.position.y, this.radius);

  }
}