var object = {};
object.x = 0;
object.y = -100;
object.l = 100;
object.w = 100;

var rectangleposX = 0;
var rectangleposY = 0;
var angle = 0;

//var leftCollumn = 100;
//var rightCollumn = windowWidth - 100;
//var xm = mouseX;
//var xc = constrain(mouseX, leftCollumn, rightCollumn);

//Canvas
function setup() {
  createCanvas( windowWidth, 800);
  background ( 'rgb(84, 37, 182)' );

}
// Background color
function draw () {
  //noCursor();
fill( random(255) );
var circlepos = map(mouseX, 0, windowWidth, 200, windowWidth - 200);
ellipse(circlepos, 25, 25, 25);


push();
frameRate(60);
noFill();
stroke( random(255), random(255), random(255), random(255) );
var circlesize = random( round( 10), round(windowWidth - 400) );
ellipse(windowWidth/2, windowHeight/2, circlesize, circlesize);
pop();

push();
fill( random(255), random(255), random(255), random(255) );
translate(windowWidth/2, windowHeight/2);
rotate( radians(angle) );
rect(rectangleposX  = rectangleposX + 1 *2, rectangleposY +1, 20, 20 );
angle = angle + 10;
pop();

push();
  fill(random(256));

object.x = random( 0, 80 );
rect(object.x, object.y, object.l, object.w);
object.y +=  0.5;
object.y %=  windowHeight;

object.x = random( 0, 80 );
rect(object.x + windowWidth - 180, object.y, object.l, object.w);
object.y +=  0.5;
object.y %=  windowHeight;
pop();

push();
//stroke();
  //line(leftCollumn, 0, leftCollumn, height);
  //line(rightCollumn, 0, rightCollumn, height);
//line(leftCollumn, 0, leftCollumn, windowHeight);
//rect( xc, 75, 58, 20);

pop();
}
