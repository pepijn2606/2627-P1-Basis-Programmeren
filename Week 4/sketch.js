//variabelen
let rectangles = [];
let circles = [];
let hoeveelRectangles = 60;
let hoeveelCircles = 37;

function setup() {

  createCanvas(2400, 2400);
  generateArt();
}

function generateArt() {

    //variabelen van kleuren grotes rect
  for (let i = 0; i < hoeveelRectangles; i++) {
    let x = random(0, width-140);
    let y = random(0, height-140);
    let w = random(10, 500);
    let h = random(10, 500);
    let xSpeed = random(-6, 6);
  
    let r = floor( random( 0, 256) );
    let g = floor( random( 0, 256) );
    let b = floor( random( 0, 256) );

    let kleur = color(r,g,b);

    rectangles.push([x, y, w, h, kleur, xSpeed])
  }

  //varianelen van kleuren grotes circles
  for (let p = 0; p < hoeveelCircles; p++) {

    let x = random(0, width-140);
    let y = random(0, height-140);
    let rad = random(10, 500);
    let   Xspeed1 = random(-6,6);

    let r = floor( random( 0, 256) );
    let g = floor( random( 0, 256) );
    let b = floor( random( 0, 256) );

    let kleur = color(r,g,b);

    circles.push([x, y, rad, kleur, Xspeed1])
  }

}

function draw() {
  background("black");

//forloop van rectangels
  for (let i = 0; i < rectangles.length; i++) {
    
    rectangles[i][0] = rectangles[i][0] + rectangles[i][5];

    if (rectangles[i][0] > 2600 ){
    rectangles[i][0] = -200
    } 

    fill(rectangles[i][4])
    rect(rectangles[i][0], rectangles[i][1],
         rectangles[i][2], rectangles[i][3])

  }
//forloop van circles
    for (let p = 0; p < circles.length; p++) {

      circles[p][0] = circles[p][0] - 1;
    fill(circles[p][3])
    circle(circles[p][0], circles[p][1],
           circles[p][2], circles[p][4])

        if (circles[p][0] < -150 ){
    circles[p][0] = 2650
    } 

  }

}




