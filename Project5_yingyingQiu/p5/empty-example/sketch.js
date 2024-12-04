

let size = 25;

let GS = 255;

let r,g,b;

let text1 = 'E:eraser  Q:clear   UP & DOWN:brush size  LEFT & RIGHT: gray Scale';


function setup(){

createCanvas(1450,750);



 background(0);
 textSize(25);
 fill(122);
text(text1,0,50)



}

function draw(){





 if (keyIsDown(UP_ARROW) === true) {
    size += 1;
  }


if (keyIsDown(DOWN_ARROW) === true) {
    size -= 1;
  }

if (keyIsDown(LEFT_ARROW) === true) {
    GS -= 1;
  }

if (keyIsDown(RIGHT_ARROW) === true) {
    GS += 1;
  }




}

function mouseDragged(){
	
if (key === "e") {
    fill(0);
	noStroke();
	circle(mouseX, mouseY, size);
  } 

  else {

  	fill(GS);
	noStroke();
	circle(mouseX, mouseY, size);


  }
   
	
}







function keyPressed() {
  if  (key === 'q'){
  	background(0);
  }

}