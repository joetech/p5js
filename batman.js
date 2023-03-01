function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(255);
    stroke(0);
    strokeWeight(2);
  
    // Draw Batman's head
    fill(0);
    arc(width / 2, height / 2, 180, 200, PI, TWO_PI);
  
    // Draw Batman's ears
    fill(0);
    triangle(width / 2 - 50, height / 2 - 100, width / 2 - 20, height / 2 - 160, width / 2 + 10, height / 2 - 100);
    triangle(width / 2 + 50, height / 2 - 100, width / 2 + 20, height / 2 - 160, width / 2 - 10, height / 2 - 100);
  
    // Draw Batman's mask
    noStroke();
    fill(255, 204, 0);
    ellipse(width / 2, height / 2, 80, 70);
  
    // Draw Batman's eyes
    fill(0);
    ellipse(width / 2 - 20, height / 2 - 10, 20, 20);
    ellipse(width / 2 + 20, height / 2 - 10, 20, 20);
  
    // Draw Batman's mouth
    stroke(0);
    strokeWeight(4);
    noFill();
    arc(width / 2, height / 2 + 30, 80, 50, 0, PI);
  
    // Draw Batman's body
    fill(0);
    rect(width / 2 - 50, height / 2 + 60, 100, 70, 20);
  
    // Draw Batman's arms
    stroke(0);
    strokeWeight(10);
    line(width / 2 - 70, height / 2 + 80, width / 2 - 100, height / 2 + 130);
    line(width / 2 + 70, height / 2 + 80, width / 2 + 100, height / 2 + 130);
  
    // Draw Batman's belt
    stroke(255, 204, 0);
    strokeWeight(4);
    line(width / 2 - 20, height / 2 + 105, width / 2 + 20, height / 2 + 105);
    rect(width / 2 - 20, height / 2 + 105, 40, 10);
  }
  