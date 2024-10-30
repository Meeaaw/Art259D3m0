function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("Project")
   background(220);
}

function draw() {
 circle(mouseX, mouseY, 50);
}