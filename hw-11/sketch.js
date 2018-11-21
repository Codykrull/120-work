/*jshint esversion: 6 */
// the above code stops an error with JSLint not allowing me to use the "let" function

//Set array for number of balls
let balls = [];
let num_of_balls = 20;
let backcolor;

// Draw canvas and initiate bubbles cycling through an array of total number of bubbles with individual values for alpha
function setup () {

  createCanvas(windowWidth, windowHeight);
  backcolor = color(73, 219, 4);
//Bubble array 1
  for (let i = 0; i< num_of_balls; i++) {
    balls.push( new Bubble(231, 144, 15, random(150,255)) );
  }
//bubble array 2
  for (let i = 0; i< num_of_balls; i++) {
    balls.push( new Bubble(231, 144, 15) );
  }
}

function draw() {
  background(backcolor);
// draw the balls capped at the total of 20
  for(var i = 0; i < balls.length; i++) {
    balls[i].frame();
  }
}
//create the bubble object, including variables to be called in later actions
class Bubble{

constructor(colorR, colorG, colorB, alpha) {
this.w_size = random (10,20);
this.h_size = random (20,90);
this.x_location = random(0,width);
this.y_location = -100;
this.x_move = 0;
this.y_move = random(30);
this.color = color(colorR, colorG, colorB, alpha);
}
//call functions created below to act upon the object
frame() {
  this.display();
  this.move();
}
//Draw the bubble
display() {
translate (0, 0);
fill(this.color);
noStroke();

//bubble value
ellipse(this.x_location, this.y_location, this.w_size, this.h_size);
}
//create a movement function to act upon the bubble
move() {
this.x_location += this.x_move;
this.y_location += this.y_move;
// force the bubbles to restart once hitting the bottom of the screen.
if (this.y_location > height) {
  this.y_location = 0;
}

}
}
