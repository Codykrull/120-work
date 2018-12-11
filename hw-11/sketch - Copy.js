/*jshint esversion: 6 */
// the above code stops an error with JSLint not allowing me to use the "let" function

//
let border1;
let border2;
let paddle1;
let ball;
let bricks = [];
let bricks1 = [];
let bricks2 = [];
let bricks3 = [];
// Draw canvas
function setup () {
createCanvas(windowWidth, windowHeight);
backcolor = color(73, 219, 4);
border1 = new square(0, 0, windowWidth/3, windowHeight);
border2 = new square(windowWidth - windowWidth/3, 0, windowWidth/3, windowHeight);
paddle1 = new paddle(windowHeight - 50, 200, 30);
ball = new Ball(windowWidth/2,windowHeight/1.5);
for (let i = 0; i < 6; i++) {
  let x = (windowWidth/3 + 20) + 100 * i;
  bricks [i] = new Bricks(x,windowHeight/3 - 100);
  bricks1 [i] = new Bricks(x,windowHeight/3 + -150);
  bricks2 [i] = new Bricks(x,windowHeight/3 + -200);
  bricks3 [i] = new Bricks(x,windowHeight/3 + -250);
}
}
  function draw() {
    background(backcolor);
    border1.display();
    border2.display();
    paddle1.display();
    ball.display();
    ball.move();
    ball.edgeCheck();
    for (let i = 0; i < bricks.length; i++) {
    bricks[i].display();
    bricks1[i].display();
    bricks2[i].display();
    bricks3[i].display();
//if (bricks.intercepts(ball)) {
//}
//var d = dist(ball.x,ball.y, bricks.x, bricks.y);
//if (d < bricks.x + ball.x) {
  //bricks.splice(i,1);
  }
  }
//Draw borders
class square {
    constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display(){
    push();
    stroke(0);
    fill(10);
    rect(this.x, this.y, this.w, this.h );
    pop();
}
}
//Draw the paddle
  class paddle {
  constructor(y, w, h ) {
      //this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.mouseX = mouseX;
      this.leftwall = windowWidth / 3;
      this.rightwall = windowWidth / 3 * 2 - 200;
      this.xc = this.xc;

    }
    display(){
      stroke(1);
      fill(100);
      rect(constrain(mouseX, this.leftwall, this.rightwall), this.y, this.w, this.h );
    }
  }

  class Ball {
  constructor(x,y) {
  this.x = x;
  this.y = y;
  this.r = 15;
  this.x_move = 1;
  this.y_move = 3;
  }
  display(){
    stroke(1);
    fill(100);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  move() {
    this.y -= this.y_move;
    this.x += this.x_move;
  }
  edgeCheck() {
    if (this.x + this.r >= windowWidth / 3 * 2 || this.x - this.r <= windowWidth / 3  ) {
      this.x_move *= -1;
    }
    if (this.y + this.r >= 9000 || this.y - this.r <= 0) {
      this.y_move *= -1;
    }
    }
    }

// Draw the bricks
class Bricks {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 50;
  }

  display() {
    stroke(1);
    fill(100);
    rect(this.x, this.y, this.w, this.h);

  }

}
