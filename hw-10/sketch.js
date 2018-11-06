
/*jshint esversion: 6 */
// the above code stops an error with JSLint not allowing me to use the "let" function

//Define line array variables
let lineC = {
xpos: [ 0, 1920, 1920, 0 ],
ypos: [ 0, 0, 800, 800],
idx: 0
};
lineC.array = lineC.xpos.length;

//create my canvas
function setup() {
    createCanvas(windowWidth, 800);
}

// draw the background and apply color
function draw() {

  background('rgb(1, 139, 131)');
noCursor();

square1 (200, 400, 50);
square2();
lineCluster();
}

//create square one function
function square1(squareRed,squareGreen,squareBlue){
    for (let x = random(0,20); x <= windowWidth; x += 20) {
      for (let y = random(0,20); y <= windowHeight; y += 20) {
      rect(x, y, 10, 10);
      stroke(random(255), 0, random(255));
      fill(squareRed, squareGreen, squareBlue);
}}
}
//create square two function
function square2(){
    for (let x = 10; x <= windowWidth; x += 20) {
      for (let y = 10; y <= windowHeight; y += 20) {
      rect(x, y, 8, 8);
      stroke(random(255), 0, random(255));
      fill(random(100,200),random(100,200), random(100,200));
}}
}
//create line cluster function / array
function lineCluster(){
for (let x = 0; x <= windowWidth; x += 20) {
  for (let y = 0; y <= windowHeight; y += 20) {
  line(lineC.xpos[lineC.idx], lineC.ypos[lineC.idx], x, y);
lineC.idx = ( lineC.idx + 1) % lineC.array;
stroke(50, 0, 50, 20);
}}


}
