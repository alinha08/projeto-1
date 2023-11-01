function setup() {
    createCanvas(400, 400);
    background("rgb(51,164,238)");
    
  }
  
  function draw() {
    stroke("red");
    fill("black"); 
    if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 20);
  }
  }
   