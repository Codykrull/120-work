
/*jshint esversion: 6 */
// the above code stops an error with JSLint not allowing me to use the "let" function


//create my canvas

function setup() {
    createCanvas(windowWidth, 800);
}

// draw the background and apply color
function draw() {
  background('rgb(1, 139, 131)');
noCursor();
//draw initial lines, use a loop too spread the lines evenly, and draw a point to follow the mouse
push();

  for (let x = 0; x <= windowWidth; x += 20) {
    for (let y = 0; y <= windowHeight; y += 20) {
		line(mouseX-250, mouseY, x, y);

stroke(random(255), 0, random(255));
}}
pop();
//draw initial lines, use a loop too spread the lines evenly, and draw a point to follow the mouse
push();
for (let x = 0; x <= windowWidth; x += 30) {
  for (let y = 0; y <= windowHeight; y += 30) {
  line(mouseX+250, mouseY, x, y);
stroke(random(255), 0, random(255));
}}
pop();
}
