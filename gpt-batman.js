function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Set the stroke and fill colors for the shapes
  noStroke();
  fill(30, 30, 30);
  
  // Draw the outer shape of Batman's head
  beginShape();
  vertex(100, 150);
  bezierVertex(100, 100, 200, 100, 200, 150);
  bezierVertex(200, 200, 100, 200, 100, 150);
  endShape();
  
  // Draw the ears
  beginShape();
  vertex(90, 120);
  vertex(70, 80);
  vertex(110, 90);
  endShape(CLOSE);
  
  beginShape();
  vertex(210, 90);
  vertex(250, 80);
  vertex(230, 120);
  endShape(CLOSE);
  
  // Draw the eyes
  fill(255);
  ellipse(135, 125, 20, 20);
  ellipse(175, 125, 20, 20);
  
  // Draw the mouth
  noFill();
  stroke(255);
  strokeWeight(3);
  arc(150, 175, 50, 40, 0, PI);
  
  // Draw the bat symbol
  noStroke();
  fill(255);
  beginShape();
  vertex(150, 175);
  bezierVertex(120, 150, 110, 100, 150, 110);
  bezierVertex(190, 100, 180, 150, 150, 175);
  endShape();
  
  beginShape();
  vertex(150, 140);
  vertex(140, 140);
  vertex(135, 160);
  vertex(150, 160);
  vertex(150, 140);
  endShape(CLOSE);
  
  beginShape();
  vertex(150, 140);
  vertex(160, 140);
  vertex(165, 160);
  vertex(150, 160);
  vertex(150, 140);
  endShape(CLOSE);
}
