Cody Krull

[Live Sketch Link](https://codykrull.github.io/120-work/hw-7/)


# HW 7 

## Description of What the Original Code is Doing

```let ball = {};``` This defines the ball as an object and attaches the following variables to the object.

```ball.width = 40;``` This sets the width of the ball

```ball.x = 10;``` This sets the starting X axis position of the ball

```ball.y = 10;``` This sets the starting Y axis position of the ball

```ball.delta_x = 1;``` This sets the trajectory of the balls X axis

```ball.delta_y = 1;``` This sets the trajectory of the balls Y axis

```ball.scale_x = 1;``` This modifies the speed of balls X axis trajectory

```ball.scale_y = 1;``` This modifies the speed of the balls Y axis trajectory

This draws the canvas size and colors the canvas white
```
function setup() {
createCanvas(windowWidth, 400);
background(255);
} ```
This starts the drawing function to allow the drawing of objects
```
function draw() {
```
This takes the original X and Y positions of the ball and moves them +1 on their respective axis's and multiplying that movement by 1. If this function was changed to ```-=``` then is would cause the ball to change direction and go to the left, or to go up instead of down from the balls initial starting point.
```
ball.x += ball.delta_x * ball.scale_x;
ball.y += ball.delta_y * ball.scale_y;
```
This keeps the ball within the confines of the width and height of the canvas, causing the ball to go in the opposite direction should it meet the edge
```
if (ball.x >= width || ball.x <= 0) {
    ball.delta_x = -1 * ball.delta_x;
}
if (ball.y >= height || ball.y <= 0) {
    ball.delta_y = -1 * ball.delta_y;
    }
    ```
This sets the color of the ball, draws the ball to the following coordinates, and sets the size
  ```
  fill(255);
  ellipse(ball.x, ball.y, ball.width, ball.width);
  }
  ```
  This multiplies the balls speed either faster or slower depending on the proximity of the mouse to the ball when the mouse is clicked, thus changing the angle of the balls trajectory.

  ```
  function mousePressed() {
  ball.scale_x = map(mouseX, 0, width, 0.5, 10);
  ball.scale_y = map(mouseY, 0, height, 0.5, 10);
  ```
## How did you alter the sketch?

To alter the sketch I mapped the gradient of the ball to the X axis position of the mouse so that the farther to the left the mouse is the darker the ball, and the farther to the right the whiter a ball. I also applied a random parameter to the ```ball.delta_y``` to give the ball a wavy up and down pattern instead of a straight line. I also changed the mouse pressed function to have a greater variance in speed when the mouse is clicked near the ball.
