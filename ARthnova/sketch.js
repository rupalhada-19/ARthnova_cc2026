
function setup() {
  createCanvas(700, 700);
}

function draw() {

  // Sky background
  background(125, 130, 140);

  // Moving smoke clouds
  for (let i = 0; i < 12; i++) {

    fill(90, 90, 90, 120);

    ellipse(
      i * 70 + (frameCount * 0.2 % width),
      100 + sin(frameCount * 0.01 + i) * 10,
      140,
      70
    );
  }

  // Ground
  noStroke();

  fill(95, 75, 55);

  rect(0, 430, width, 270);

  // River
  drawRiver();

  // Factories
  drawFactory(10, 250, 0.52);
  drawFactory(130, 235, 0.58);

  // Pipe releasing dirty water
  fill(100);

  rect(210, 385, 120, 28);

  // Toxic water flowing out
  fill(90, 120, 60);

  beginShape();

  vertex(330, 400);

  bezierVertex(
    360, 430,
    390, 470,
    430, 520
  );

  vertex(450, 540);

  bezierVertex(
    400, 490,
    360, 450,
    330, 410
  );

  endShape(CLOSE);

  // Toxic bubbles
  fill(120, 255, 120, 170);

  ellipse(390, 470, 12);
  ellipse(420, 510, 9);

  // ===================================================
  // Road
  // ===================================================

  fill(35);

  quad(0, 500, 240, 500, 360, 700, 0, 700);

  // Road side white borders
  stroke(230);

  strokeWeight(4);

  line(0, 505, 240, 505);
  line(0, 695, 355, 695);

  // Yellow road divider lines
  stroke(255, 190, 40);

  strokeWeight(6);

  for (let i = 0; i < 8; i++) {

    let x1 = 20 + i * 30;
    let y1 = 545 + i * 20;

    let x2 = 35 + i * 30;
    let y2 = 570 + i * 20;

    line(x1, y1, x2, y2);
  }

  noStroke();

  // Cars producing smoke
  drawPollutionCar(35, 545, color(230, 140, 40));
  drawPollutionCar(120, 590, color(200, 60, 60));

  // Deforestation area
  drawDeforestation();

  // Sad Earth
  drawSadEarth(width / 2, 330, 190);
}

// ======================================================
// River Function
// ======================================================

function drawRiver() {

  noStroke();

  // Light dirty blue river
  fill(95, 160, 210);

  beginShape();

  vertex(250, 430);

  bezierVertex(
    420, 500,
    540, 420,
    700, 700
  );

  vertex(700, 700);
  vertex(250, 700);

  endShape(CLOSE);

  // Water highlights
  fill(180, 230, 255, 80);

  ellipse(450, 540, 180, 25);
  ellipse(590, 620, 160, 25);

  // Dirty patches in water
  fill(90, 120, 90, 120);

  ellipse(450, 540, 110, 45);
  ellipse(570, 620, 130, 55);
  ellipse(650, 540, 80, 35);

  // Plastic bottles
  fill(40, 180, 90);

  rect(500, 570, 10, 28, 3);
  rect(610, 650, 10, 28, 3);

  fill(30, 130, 230);

  rect(660, 590, 12, 30, 3);

  // Plastic waste
  fill(190);

  ellipse(520, 620, 18, 10);
  ellipse(610, 550, 16, 9);
  ellipse(680, 660, 20, 12);

  // Floating tyre
  fill(20);

  ellipse(560, 650, 35);

  fill(50);

  ellipse(560, 650, 15);

  // Toxic foam
  fill(180, 220, 180, 150);

  ellipse(390, 500, 18);
  ellipse(410, 510, 12);
  ellipse(430, 520, 15);

  // Dead fish
  drawDeadFish(520, 590);
  drawDeadFish(620, 560);
}

// ======================================================
// Factory Function
// ======================================================

function drawFactory(x, y, s) {

  push();

  translate(x, y);

  scale(s);

  // Factory buildings
  fill(65);

  rect(0, 80, 220, 180);

  rect(160, 40, 180, 220);

  // Roofs
  triangle(0, 80, 70, 20, 130, 80);

  triangle(160, 40, 250, -20, 340, 40);

  // Chimneys
  fill(85);

  rect(30, -80, 35, 170);
  rect(110, -120, 40, 210);
  rect(230, -90, 40, 180);

  // Red chimney stripes
  fill(220, 90, 70);

  rect(110, -100, 40, 15);
  rect(110, -60, 40, 15);

  // Windows
  fill(255, 220, 80);

  for (let i = 20; i < 320; i += 40) {

    for (let j = 110; j < 220; j += 40) {

      rect(i, j, 18, 18);
    }
  }

  // Smoke animation
  for (let i = 0; i < 7; i++) {

    fill(80, 80, 80, 120);

    ellipse(
      50 + sin(frameCount * 0.02 + i) * 10,
      -100 - i * 20,
      60 - i * 3
    );

    ellipse(
      130 + sin(frameCount * 0.03 + i) * 10,
      -140 - i * 25,
      70 - i * 3
    );

    ellipse(
      250 + sin(frameCount * 0.02 + i) * 10,
      -110 - i * 22,
      65 - i * 3
    );
  }

  pop();
}

// ======================================================
// Pollution Car Function
// ======================================================

function drawPollutionCar(x, y, c) {

  push();

  translate(x, y);

  // Car body
  fill(c);

  rect(0, 0, 70, 25, 8);

  rect(15, -15, 35, 18, 5);

  // Windows
  fill(180, 230, 255);

  rect(22, -12, 10, 10);
  rect(36, -12, 10, 10);

  // Wheels
  fill(20);

  ellipse(15, 25, 18);
  ellipse(55, 25, 18);

  // Smoke from vehicle
  fill(90, 90, 90, 120);

  ellipse(-10, 10, 18);
  ellipse(-25, 0, 25);
  ellipse(-45, -10, 35);

  pop();
}

// ======================================================
// Deforestation Function
// ======================================================

function drawDeforestation() {

  // Machine body
  fill(200, 150, 40);

  rect(500, 360, 70, 45);

  rect(520, 330, 35, 25);

  // Machine arm
  stroke(180, 130, 30);

  strokeWeight(10);

  line(535, 335, 490, 285);
  line(490, 285, 460, 330);

  noStroke();

  // Claw
  fill(70);

  ellipse(455, 335, 15);

  // Tree stumps
  for (let i = 0; i < 5; i++) {

    fill(120, 80, 40);

    ellipse(470 + i * 40, 470, 30, 14);

    fill(160, 120, 80);

    ellipse(470 + i * 40, 468, 18, 6);
  }

  // Dead trees
  drawDeadTree(500, 430);
  drawDeadTree(610, 410);

  // Wooden logs
  for (let row = 0; row < 3; row++) {

    for (let col = 0; col < 4 - row; col++) {

      let x = 575 + col * 22 + row * 10;
      let y = 440 + row * 18;

      fill(110, 70, 40);

      rect(x, y, 50, 14, 7);

      fill(150, 100, 60);

      ellipse(x, y + 7, 14);

      fill(120, 80, 50);

      ellipse(x, y + 7, 6);
    }
  }
}

// ======================================================
// Dead Tree Function
// ======================================================

function drawDeadTree(x, y) {

  stroke(80, 50, 20);

  strokeWeight(6);

  line(x, y, x, y - 90);

  line(x, y - 60, x - 25, y - 90);

  line(x, y - 40, x + 25, y - 75);

  noStroke();
}

// ======================================================
// Dead Fish Function
// ======================================================

function drawDeadFish(x, y) {

  push();

  translate(x, y);

  rotate(radians(20));

  fill(180);

  ellipse(0, 0, 28, 14);

  triangle(
    -14, 0,
    -24, -8,
    -24, 8
  );

  fill(0);

  ellipse(6, -2, 3);

  stroke(0);

  line(4, -4, 8, 0);
  line(8, -4, 4, 0);

  noStroke();

  pop();
}

// ======================================================
// Sad Earth Function
// ======================================================

function drawSadEarth(x, y, size) {

  push();

  translate(x, y);

  // Earth body
  fill(70, 170, 255);

  stroke(0);

  strokeWeight(3);

  ellipse(0, 0, size);

  // Continents
  noStroke();

  fill(70, 180, 80);

  ellipse(-40, -20, 65, 40);
  ellipse(45, 15, 70, 50);
  ellipse(-10, 50, 50, 25);

  // Eyes
  fill(255);

  ellipse(-35, -5, 38, 48);
  ellipse(35, -5, 38, 48);

  // Eye pupils
  fill(0);

  ellipse(-35, 2, 14, 20);
  ellipse(35, 2, 14, 20);

  // Eye shine
  fill(255);

  ellipse(-39, -3, 5);
  ellipse(31, -3, 5);

  // Sad eyebrows
  stroke(0);

  strokeWeight(6);

  line(-62, -42, -18, -18);
  line(18, -18, 62, -42);

  // Tears
  noStroke();

  fill(120, 220, 255);

  ellipse(-48, 35, 13, 35);
  ellipse(48, 35, 13, 35);

  // Sad mouth
  noFill();

  stroke(0);

  strokeWeight(7);

  arc(0, 72, 75, 45, PI, TWO_PI);

  // Face wrinkle
  stroke(0, 70);

  strokeWeight(3);

  arc(0, 40, 25, 10, PI, TWO_PI);

  // Bandage
  noStroke();

  fill(230, 210, 170);

  rect(45, -55, 35, 16, 4);

  stroke(180);

  line(45, -47, 80, -47);

  pop();
}