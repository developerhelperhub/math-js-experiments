This project developed in p5.js to travel the line through the circle and used the core math functions for running this program.

You can open https://editor.p5js.org/ this editor and copy paste the sketch.js script inside the editor and click run the script.

To understand this required below topics need to be covered

1. What is radians
2. Convert radian to degree
3. What is unit circle
4. COS(degree) and SIN(degree)
5. What is vector and how add two vectors
6. What is global Space in canvas
7. Why required to normalize radian
8. What is area of circle

Current apporach I ran the line based on the equation is, calculate the radian and convert into degree, but another approach is given below, p5.js provide the angle mode is DEGREES.
```js

var a = 50;  //Set up the horizontal amplitute
var b = 50;  //Set up the vertical amplitute

let angle = 0;
function setup() {
  createCanvas(400, 400);
  frameRate(1);
  
  angleMode(DEGREES);
  //noLoop();
}

function draw() {
  background(220);

  var x = a*cos(angle);
  var y = b*sin(angle);
  
  angle+=1;
  
  ellipse(200, 200, 2*a, 2*b);
  line(200, 200, 200+x, 200+y);
  
  text((angle%360)+"°",250+a,210);
}

```
