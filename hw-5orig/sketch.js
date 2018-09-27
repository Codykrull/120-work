


// Hw-5
let rectPosY = 0;


//Canvas
function setup() {
  createCanvas( windowWidth, 800);
}



// Background color
function draw () {
  background ( 'rgb(63, 198, 0)' );
  noCursor();



push();
//Rectangles
noStroke();
fill('rgb(245, 136, 9)');
rect(0, rectPosY-40, windowWidth,20 );
rect(0, rectPosY-80, windowWidth,20 );
rect(0, rectPosY-120, windowWidth,20 );
rect(0, rectPosY-160, windowWidth,20 );
rect(0, rectPosY-200, windowWidth,20 );
rect(0, rectPosY-240, windowWidth,20 );
rect(0, rectPosY-280, windowWidth,20 );
rect(0, rectPosY-320, windowWidth,20 );
rect(0, rectPosY-360, windowWidth,20 );
rect(0, rectPosY-400, windowWidth,20 );
rect(0, rectPosY-440, windowWidth,20 );
rect(0, rectPosY-480, windowWidth,20 );
rect(0, rectPosY-520, windowWidth,20 );
rect(0, rectPosY-560, windowWidth,20 );
rect(0, rectPosY-600, windowWidth,20 );
rect(0, rectPosY-640, windowWidth,20 );
rect(0, rectPosY-680, windowWidth,20 );
rect(0, rectPosY-720, windowWidth,20 );
rect(0, rectPosY-760, windowWidth,20 );
rect(0, rectPosY-800, windowWidth,20 );
rect(0, rectPosY, windowWidth,20 );
rect(0, rectPosY+40, windowWidth,20 );
rect(0, rectPosY+80, windowWidth,20 );
rect(0, rectPosY+120, windowWidth,20 );
rect(0, rectPosY+160, windowWidth,20 );
rect(0, rectPosY+200, windowWidth,20 );
rect(0, rectPosY+240, windowWidth,20 );
rect(0, rectPosY+280, windowWidth,20 );
rect(0, rectPosY+320, windowWidth,20 );
rect(0, rectPosY+360, windowWidth,20 );
rect(0, rectPosY+400, windowWidth,20 );
rect(0, rectPosY+440, windowWidth,20 );
rect(0, rectPosY+480, windowWidth,20 );
rect(0, rectPosY+520, windowWidth,20 );
rect(0, rectPosY+560, windowWidth,20 );
rect(0, rectPosY+600, windowWidth,20 );
rect(0, rectPosY+640, windowWidth,20 );
rect(0, rectPosY+680, windowWidth,20 );
rect(0, rectPosY+720, windowWidth,20 );
rect(0, rectPosY+760, windowWidth,20 );
rect(0, rectPosY+800, windowWidth,20 );
//cascade
  rectPosY = rectPosY + 1;
  if (rectPosY > 800)
  { rectPosY = 0; }
pop();



push();
translate( mouseX, mouseY );
translate(-260,-240);

// Body
noStroke();
fill('rgb(242, 24, 24)');
rect( 180, 140, 150, 220, 70, 70, 10 );


// Ghost Feet
fill('rgb(242, 24, 24)');
triangle( 180, 350, 230, 350, 180, 385 );
triangle( 330, 350, 280, 350, 330, 385 );
triangle( 210, 350, 300, 350, 255, 385 );

// Eyes
strokeWeight(0.5);
stroke(0);
fill('rgb(255, 255, 255)');
ellipse(230,230,50,50 );

fill('rgb(255, 255, 255)');
ellipse(307,230,50,50 );

// Pupils
fill('rgb(20, 20, 255)');
ellipse(243,231,25,25 );

fill('rgb(20, 20, 255)');
ellipse(320,231,25,25 );
pop();



push();
//Pac-man appear
if (mouseIsPressed) {
  noStroke();
  fill('rgb(250, 255, 0)');
  arc(width*0.5, height*0.5, 300, 300, radians(45), radians(310) );
}

pop();



}
