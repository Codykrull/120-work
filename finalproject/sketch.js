/*jshint esversion: 6 */
// the above code stops an error with JSLint not allowing me to use the "let" function

//

let bricks = [];
let bricks1 = [];
let bricks2 = [];
let bricks3 = [];
let ball;
let border1;
let border2;
let paddle;

function setup() {
createCanvas(windowWidth, windowHeight);
backcolor = color(73, 219, 4);
ball = new Ball(windowWidth/2,windowHeight/1.5);
border1 = new square(0, 0, windowWidth/3, windowHeight);
border2 = new square(windowWidth - windowWidth/3, 0, windowWidth/3, windowHeight);
for (let i = 0; i <6; i++){
let x = (windowWidth/3 + 20) + 100 * i;
bricks[i] = new Bricks(x,windowHeight/3 - 100);
bricks1[i] = new Bricks(x,windowHeight/3 + -150);
bricks2[i] = new Bricks(x,windowHeight/3 + -200);
bricks3[i] = new Bricks(x,windowHeight/3 + -250);
paddle = new Paddle(windowHeight - 50, 200, 30);
}
}
function draw () {
  background(backcolor);
  for (let i = 0; i <bricks.length; i++) {
  bricks[i].display();
  bricks1[i].display();
  bricks2[i].display();
  bricks3[i].display();
  ball.display();
  ball.move();
  border1.display();
  border2.display();
  paddle.display();
  if (bricks[i].intersects(ball)) {
return  bricks[i].splice(i, 1); }
else { return false; }
  }

}

function Bricks(x,y) {
  this.x = x;
  this.y = y;
  this.w = 100;
  this.h = 50;


this.display = function() {
  stroke(1);
    fill(100);
    rect(this.x, this.y, this.w, this.h);
}
this.intersects = function(other) {
  var d = dist(this.x, this.y, other.x, other.y);
  if (d < this.y + other.r) {
    return true;}
   else {
    return false;}

}
}

function Ball (x,y) {
this.x = x;
this.y = y;
this.r = 15;
this.x_move = -1;
this.y_move = 1;

this.display = function() {
  stroke(1);
      fill(100);
      ellipse(this.x, this.y, this.r * 2, this.r * 2);


this.move = function() {
    this.y -= this.y_move;
    this.x += this.x_move;
}
}
}
function square (x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

  this.display = function() {
    stroke(0);
    fill(10);
    rect(this.x, this.y, this.w, this.h );
}

}
function Paddle (y, w, h ) {
      //this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.mouseX = mouseX;
      this.leftwall = windowWidth / 3;
      this.rightwall = windowWidth / 3 * 2 - 200;
      this.xc = this.xc;


    this.display = function() {
      stroke(1);
      fill(100);
      rect(constrain(mouseX, this.leftwall, this.rightwall), this.y, this.w, this.h );
}
}
