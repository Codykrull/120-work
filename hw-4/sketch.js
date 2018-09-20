// setup the function
function setup() {
  // create a canvas to draw on
  createCanvas( 500,500 );
}

function draw() {

  // Background
  background('rgb(21, 187, 223)' );

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
push();
strokeWeight(0.5);
stroke(0);
fill('rgb(255, 255, 255)');
ellipse(230,230,50,50 );

fill('rgb(255, 255, 255)');
ellipse(307,230,50,50 );
pop();

// Pupils
fill('rgb(20, 20, 255)');
ellipse(243,231,25,25 );

fill('rgb(20, 20, 255)');
ellipse(320,231,25,25 );

// Blinky Text
push();
fill('rgb(255, 252, 0)');
textSize(80);
translate(0,0);
text("Blinky",160,100);
textAlign(CENTER);
textSize(80);
textFont("Roboto");
pop();


}
