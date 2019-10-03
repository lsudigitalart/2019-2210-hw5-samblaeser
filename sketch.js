function setup() {
    createCanvas(800,500);
angleMode(DEGREES);
background(120);
frameRate(10);
}

var i = 10
var xD = 1
var yD = 12 

function draw() {
    background(253);
         
        for (var xD = 1; xD < width; xD += 10){
          for (var yD = 12; yD < height; yD += 10){
        
         noFill();
         stroke(200, 220, 180, 80);
         strokeWeight(4);
         circle(xD/.5,yD*8, 300);
         } 
         }



    push();
  //top middle
    fill(65,172,214);
    noStroke();
    arc(400,0,400,500,0,180);
  //second mid
    fill(209,60,205);
    noStroke();
    scale(.75);
    arc(533,0,400,500,0,180);
  //third mid
    fill(245,209,1);
    noStroke();
    scale(1.3);
    arc(410,0,200,300,0,180);
  pop();
  push();
  //top right
    fill(245,209,1);
    noStroke();
    arc(800,250,500,400,90,270);
  //second right
    fill(65,172,214);
    noStroke();
    arc(800,250,400,300,90,270);
  //third right
    fill(209,60,205);
    noStroke();
    arc(800,250,300,200,90,270);
pop();
push();
  //top left
    fill(209,60,205);
    noStroke();
    arc(0,250,500,400,270,90);
  //second left
    fill(245,209,1);
    noStroke();
    arc(0,250,400,300,270,90);
  //third left
    fill(65,172,214);
    noStroke();
    arc(0,250,300,200,270,90);
pop();

 push();
    //circles ring
   
      fill(random(200),random(200), random(200),70);
        noStroke();
        rectMode(RADIUS);
        translate(p5.Vector.fromAngle(millis() / 800, 100));
        ellipse(width/2,205,random(80),random(300));
        
        scale(.75);
        fill(random(200),random(200), random(200),70);
        noStroke();
        rectMode(RADIUS);
        translate(p5.Vector.fromAngle(millis() / 800, 100));
        ellipse(500,205,random(300),random(80));
  pop();

}