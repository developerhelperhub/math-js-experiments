
let posX = 200;
let posY = 200;

let x = 0;
let y = 0;

let radius = 50;
let diameter = radius * 2;

let PI = 3.141592653589793;
let area = (PI * radius) * (PI * radius);

let radian = 0;

function setup() {
  createCanvas(400, 400);
  //noLoop();
}

function draw() {
  background(220);

  // normalize the radian of circle
  let normal = (radian / area);
  
  
   if(normal > area) {
     radian  = area;
   } else {
     radian = radian + 1;
   }
     
  ellipse(posX, posY, diameter, diameter);
  
  // converting normalize radian to degree
  let degree = ((normal * 180)/PI);
  
  // find x value by the degree of unity circle
  vcos = cos(degree);
  
  // find y value by the degree of unity circle
  vsin = sin(degree);
  
  //create vector of x and y with radius 
  vx = vcos * radius;
  vy = vsin * radius;
  
  //adding the vector to calculate exact position from gloabl space
  lx = posX + vx;
  ly = posY + vy;
  
  console.log("degree:", degree, " vcos:", vcos, " vsin:", vsin);
  console.log("vx:", vx , " vy:", vy);
  console.log("posX:", posX , " posY:", posY);
  console.log("lx:", lx , "ly:", ly);
  console.log("normal:", normal, " area:", area);
  
  line (posX, posY, lx, ly);
}