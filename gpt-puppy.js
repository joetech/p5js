function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    // Set the stroke and fill colors for the shapes
    stroke(0);
    strokeWeight(2);
    fill(255, 204, 0);
    
    // Draw the puppy's head
    ellipse(200, 150, 100, 120);
    
    // Draw the puppy's ears
    ellipse(150, 110, 50, 60);
    ellipse(250, 110, 50, 60);
    
    // Draw the puppy's eyes
    fill(255);
    ellipse(180, 130, 20, 25);
    ellipse(220, 130, 20, 25);
    
    // Draw the puppy's pupils
    fill(0);
    ellipse(180, 130, 10, 10);
    ellipse(220, 130, 10, 10);
    
    // Draw the puppy's nose
    fill(0);
    ellipse(200, 160, 20, 15);
    fill(255);
    ellipse(200, 160, 10, 7.5);
    
    // Draw the puppy's mouth
    noFill();
    stroke(0);
    strokeWeight(3);
    arc(200, 180, 50, 30, 0, PI);
    
    // Draw the puppy's body
    fill(255, 204, 0);
    rect(150, 180, 100, 100, 20);
    
    // Draw the puppy's legs
    rect(160, 270, 20, 50, 10);
    rect(220, 270, 20, 50, 10);
    
    // Draw the puppy's tail
    fill(0);
    beginShape();
    vertex(245, 280);
    bezierVertex(270, 290, 275, 300, 260, 320);
    bezierVertex(240, 340, 220, 330, 220, 320);
    endShape();
  }
  