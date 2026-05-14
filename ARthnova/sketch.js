
// function setup() {
//   createCanvas(700, 700);
// }

// function draw() {

//   // Sky background
//   background(125, 130, 140);

//   // Moving smoke clouds
//   for (let i = 0; i < 12; i++) {

//     fill(90, 90, 90, 120);

//     ellipse(
//       i * 70 + (frameCount * 0.2 % width),
//       100 + sin(frameCount * 0.01 + i) * 10,
//       140,
//       70
//     );
//   }

//   // Ground
//   noStroke();

//   fill(95, 75, 55);

//   rect(0, 430, width, 270);

//   // River
//   drawRiver();

//   // Factories
//   drawFactory(10, 250, 0.52);
//   drawFactory(130, 235, 0.58);

//   // Pipe releasing dirty water
//   fill(100);

//   rect(210, 385, 120, 28);

//   // Toxic water flowing out
//   fill(90, 120, 60);

//   beginShape();

//   vertex(330, 400);

//   bezierVertex(
//     360, 430,
//     390, 470,
//     430, 520
//   );

//   vertex(450, 540);

//   bezierVertex(
//     400, 490,
//     360, 450,
//     330, 410
//   );

//   endShape(CLOSE);

//   // Toxic bubbles
//   fill(120, 255, 120, 170);

//   ellipse(390, 470, 12);
//   ellipse(420, 510, 9);

//   // ===================================================
//   // Road
//   // ===================================================

//   fill(35);

//   quad(0, 500, 240, 500, 360, 700, 0, 700);

//   // Road side white borders
//   stroke(230);

//   strokeWeight(4);

//   line(0, 505, 240, 505);
//   line(0, 695, 355, 695);

//   // Yellow road divider lines
//   stroke(255, 190, 40);

//   strokeWeight(6);

//   for (let i = 0; i < 8; i++) {

//     let x1 = 20 + i * 30;
//     let y1 = 545 + i * 20;

//     let x2 = 35 + i * 30;
//     let y2 = 570 + i * 20;

//     line(x1, y1, x2, y2);
//   }

//   noStroke();

//   // Cars producing smoke
//   drawPollutionCar(35, 545, color(230, 140, 40));
//   drawPollutionCar(120, 590, color(200, 60, 60));

//   // Deforestation area
//   drawDeforestation();

//   // Sad Earth
//   drawSadEarth(width / 2, 330, 190);
// }

// // ======================================================
// // River Function
// // ======================================================

// function drawRiver() {

//   noStroke();

//   // Light dirty blue river
//   fill(95, 160, 210);

//   beginShape();

//   vertex(250, 430);

//   bezierVertex(
//     420, 500,
//     540, 420,
//     700, 700
//   );

//   vertex(700, 700);
//   vertex(250, 700);

//   endShape(CLOSE);

//   // Water highlights
//   fill(180, 230, 255, 80);

//   ellipse(450, 540, 180, 25);
//   ellipse(590, 620, 160, 25);

//   // Dirty patches in water
//   fill(90, 120, 90, 120);

//   ellipse(450, 540, 110, 45);
//   ellipse(570, 620, 130, 55);
//   ellipse(650, 540, 80, 35);

//   // Plastic bottles
//   fill(40, 180, 90);

//   rect(500, 570, 10, 28, 3);
//   rect(610, 650, 10, 28, 3);

//   fill(30, 130, 230);

//   rect(660, 590, 12, 30, 3);

//   // Plastic waste
//   fill(190);

//   ellipse(520, 620, 18, 10);
//   ellipse(610, 550, 16, 9);
//   ellipse(680, 660, 20, 12);

//   // Floating tyre
//   fill(20);

//   ellipse(560, 650, 35);

//   fill(50);

//   ellipse(560, 650, 15);

//   // Toxic foam
//   fill(180, 220, 180, 150);

//   ellipse(390, 500, 18);
//   ellipse(410, 510, 12);
//   ellipse(430, 520, 15);

//   // Dead fish
//   drawDeadFish(520, 590);
//   drawDeadFish(620, 560);
// }

// // ======================================================
// // Factory Function
// // ======================================================

// function drawFactory(x, y, s) {

//   push();

//   translate(x, y);

//   scale(s);

//   // Factory buildings
//   fill(65);

//   rect(0, 80, 220, 180);

//   rect(160, 40, 180, 220);

//   // Roofs
//   triangle(0, 80, 70, 20, 130, 80);

//   triangle(160, 40, 250, -20, 340, 40);

//   // Chimneys
//   fill(85);

//   rect(30, -80, 35, 170);
//   rect(110, -120, 40, 210);
//   rect(230, -90, 40, 180);

//   // Red chimney stripes
//   fill(220, 90, 70);

//   rect(110, -100, 40, 15);
//   rect(110, -60, 40, 15);

//   // Windows
//   fill(255, 220, 80);

//   for (let i = 20; i < 320; i += 40) {

//     for (let j = 110; j < 220; j += 40) {

//       rect(i, j, 18, 18);
//     }
//   }

//   // Smoke animation
//   for (let i = 0; i < 7; i++) {

//     fill(80, 80, 80, 120);

//     ellipse(
//       50 + sin(frameCount * 0.02 + i) * 10,
//       -100 - i * 20,
//       60 - i * 3
//     );

//     ellipse(
//       130 + sin(frameCount * 0.03 + i) * 10,
//       -140 - i * 25,
//       70 - i * 3
//     );

//     ellipse(
//       250 + sin(frameCount * 0.02 + i) * 10,
//       -110 - i * 22,
//       65 - i * 3
//     );
//   }

//   pop();
// }

// // ======================================================
// // Pollution Car Function
// // ======================================================

// function drawPollutionCar(x, y, c) {

//   push();

//   translate(x, y);

//   // Car body
//   fill(c);

//   rect(0, 0, 70, 25, 8);

//   rect(15, -15, 35, 18, 5);

//   // Windows
//   fill(180, 230, 255);

//   rect(22, -12, 10, 10);
//   rect(36, -12, 10, 10);

//   // Wheels
//   fill(20);

//   ellipse(15, 25, 18);
//   ellipse(55, 25, 18);

//   // Smoke from vehicle
//   fill(90, 90, 90, 120);

//   ellipse(-10, 10, 18);
//   ellipse(-25, 0, 25);
//   ellipse(-45, -10, 35);

//   pop();
// }

// // ======================================================
// // Deforestation Function
// // ======================================================

// function drawDeforestation() {

//   // Machine body
//   fill(200, 150, 40);

//   rect(500, 360, 70, 45);

//   rect(520, 330, 35, 25);

//   // Machine arm
//   stroke(180, 130, 30);

//   strokeWeight(10);

//   line(535, 335, 490, 285);
//   line(490, 285, 460, 330);

//   noStroke();

//   // Claw
//   fill(70);

//   ellipse(455, 335, 15);

//   // Tree stumps
//   for (let i = 0; i < 5; i++) {

//     fill(120, 80, 40);

//     ellipse(470 + i * 40, 470, 30, 14);

//     fill(160, 120, 80);

//     ellipse(470 + i * 40, 468, 18, 6);
//   }

//   // Dead trees
//   drawDeadTree(500, 430);
//   drawDeadTree(610, 410);

//   // Wooden logs
//   for (let row = 0; row < 3; row++) {

//     for (let col = 0; col < 4 - row; col++) {

//       let x = 575 + col * 22 + row * 10;
//       let y = 440 + row * 18;

//       fill(110, 70, 40);

//       rect(x, y, 50, 14, 7);

//       fill(150, 100, 60);

//       ellipse(x, y + 7, 14);

//       fill(120, 80, 50);

//       ellipse(x, y + 7, 6);
//     }
//   }
// }

// // ======================================================
// // Dead Tree Function
// // ======================================================

// function drawDeadTree(x, y) {

//   stroke(80, 50, 20);

//   strokeWeight(6);

//   line(x, y, x, y - 90);

//   line(x, y - 60, x - 25, y - 90);

//   line(x, y - 40, x + 25, y - 75);

//   noStroke();
// }

// // ======================================================
// // Dead Fish Function
// // ======================================================

// function drawDeadFish(x, y) {

//   push();

//   translate(x, y);

//   rotate(radians(20));

//   fill(180);

//   ellipse(0, 0, 28, 14);

//   triangle(
//     -14, 0,
//     -24, -8,
//     -24, 8
//   );

//   fill(0);

//   ellipse(6, -2, 3);

//   stroke(0);

//   line(4, -4, 8, 0);
//   line(8, -4, 4, 0);

//   noStroke();

//   pop();
// }

// // ======================================================
// // Sad Earth Function
// // ======================================================

// function drawSadEarth(x, y, size) {

//   push();

//   translate(x, y);

//   // Earth body
//   fill(70, 170, 255);

//   stroke(0);

//   strokeWeight(3);

//   ellipse(0, 0, size);

//   // Continents
//   noStroke();

//   fill(70, 180, 80);

//   ellipse(-40, -20, 65, 40);
//   ellipse(45, 15, 70, 50);
//   ellipse(-10, 50, 50, 25);

//   // Eyes
//   fill(255);

//   ellipse(-35, -5, 38, 48);
//   ellipse(35, -5, 38, 48);

//   // Eye pupils
//   fill(0);

//   ellipse(-35, 2, 14, 20);
//   ellipse(35, 2, 14, 20);

//   // Eye shine
//   fill(255);

//   ellipse(-39, -3, 5);
//   ellipse(31, -3, 5);

//   // Sad eyebrows
//   stroke(0);

//   strokeWeight(6);

//   line(-62, -42, -18, -18);
//   line(18, -18, 62, -42);

//   // Tears
//   noStroke();

//   fill(120, 220, 255);

//   ellipse(-48, 35, 13, 35);
//   ellipse(48, 35, 13, 35);

//   // Sad mouth
//   noFill();

//   stroke(0);

//   strokeWeight(7);

//   arc(0, 72, 75, 45, PI, TWO_PI);

//   // Face wrinkle
//   stroke(0, 70);

//   strokeWeight(3);

//   arc(0, 40, 25, 10, PI, TWO_PI);

//   // Bandage
//   noStroke();

//   fill(230, 210, 170);

//   rect(45, -55, 35, 16, 4);

//   stroke(180);

//   line(45, -47, 80, -47);

//   pop();
// }

// Earth 2050 - Climate Action Interactive Project
// FULL MODIFIED VERSION WITH FACTORY SOUND

// Earth 2050 - Climate Action Interactive Project
// Created by: Giri Deva
// Institution: Avantika University
// Final Update: Removed Earths, matched Bad Future with Slide 1 & 2, adjusted to 800x600 canvas.

let pollutionLevel = 80;
let factorySound;

let currentSlide = 1;
let sustainableLevel = 20;

// Slide 1
let birdX1 = 500;
let birdX2 = 550;
let smokeParticles = [];

// Slide 2
let car1 = { x: -120, y: 345, speed: 1.8, c: [220, 80, 80], stopped: false };
let car2 = { x: -300, y: 365, speed: 2.1, c: [70, 130, 220], stopped: false };
let smokeY = 0;
let pipeClean = false;
let garbages = [
  { x: 120, y: 500, type: 'bottle', r: 0.2, disposed: false },
  { x: 250, y: 470, type: 'bottle', r: -0.3, disposed: false },
  { x: 340, y: 520, type: 'can', r: 0, disposed: false },
  { x: 420, y: 540, type: 'bag', r: 0, disposed: false }
];
let canPickGarbage = false;
let draggedGarbageIndex = -1;
let plantingMode = false;
let customTrees = [];
let showInstructions = false;

// Final Slide (Good Future)
let ecoBirds = [];
let ecoClouds = [];
let riverOffset = 0;

// SETUP
function setup() {
  createCanvas (800,600);
  
  factorySound = loadSound("factory.mp3");
  textAlign(CENTER, CENTER);

  // Initialize smoke particles
  for (let i = 0; i < 15; i++) {
    smokeParticles.push({
      x: random(85, 165),
      y: random(100, 220),
      alpha: random(50, 200),
      size: random(20, 60)
    });
  }

  // Initialize eco birds
  for (let i = 0; i < 6; i++) {
    ecoBirds.push({
      x: random(width),
      y: random(80, 220),
      speed: random(1, 2)
    });
  }

  // Initialize eco clouds
  for (let i = 0; i < 5; i++) {
    ecoClouds.push({
      x: random(width),
      y: random(40, 180),
      speed: random(0.3, 0.8)
    });
  }
}

function draw() {
  background(20);

  // Constrain levels and keep them tied to 100%
  sustainableLevel = constrain(sustainableLevel, 0, 100);
  pollutionLevel = 100 - sustainableLevel;

  if (currentSlide === 1) {
    drawSlide1();
  } else if (currentSlide === 2) {
    drawSlide2();
  } else if (currentSlide === 3) {
    drawSlide3(); 
  }
}
// SLIDE 1: INTRO 

function drawSlide1() {
  let cx = [400, 385, 410, 390, 420, 395, 415, 380, 410, 390, 405, 385, 415, 395, 410, 400];
  let cy = [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600];

  
  noStroke();
  fill(80, 60, 60);
  rect(0, 0, width, height);
  
  fill(45, 35, 35);
  rect(0, 400, width, 200);

  fill(30);
  rect(50, 300, 150, 100);
  rect(80, 220, 30, 80);
  rect(140, 200, 30, 100);

  if (frameCount % 8 === 0) {
    smokeParticles.push({ x: 95, y: 220, alpha: 255, size: 15 });
    smokeParticles.push({ x: 155, y: 200, alpha: 255, size: 20 });
  }

  for (let i = smokeParticles.length - 1; i >= 0; i--) {
    let p = smokeParticles[i];
    fill(60, 60, 60, p.alpha);
    circle(p.x, p.y, p.size);
    p.y -= 2;
    p.x += random(-1.5, 1.5);
    p.alpha -= 3;
    p.size += 1.5;
    
    if (p.alpha <= 0) {
      smokeParticles.splice(i, 1);
    }
  }

  drawCutStump(285, 390);

  // GOOD FUTURE (Right Side)
  fill(135, 206, 235);
  beginShape();
  for (let i = 0; i < cx.length; i++) {
    vertex(cx[i], cy[i]);
  }
  vertex(width, height);
  vertex(width, 0);
  endShape(CLOSE);
  
  fill(34, 139, 34);
  beginShape();
  for (let i = 10; i < cx.length; i++) {
    vertex(cx[i], cy[i]);
  }
  vertex(width, height);
  vertex(width, 400);
  endShape(CLOSE);

  // GLOWING CRACK
  noFill();
  let glowPulse = sin(frameCount * 0.05) * 50; 
  
  stroke(150, 0, 0, 100);
  strokeWeight(24);
  beginShape();
  for (let i = 0; i < cx.length; i++) {
    vertex(cx[i], cy[i]);
  }
  endShape();
  
  stroke(255, 80, 0, 150 + glowPulse);
  strokeWeight(12);
  beginShape();
  for (let i = 0; i < cx.length; i++) {
    vertex(cx[i], cy[i]);
  }
  endShape();
  
  stroke(255, 200, 0, 200);
  strokeWeight(6);
  beginShape();
  for (let i = 0; i < cx.length; i++) {
    vertex(cx[i], cy[i]);
  }
  endShape();
  
  stroke(255, 255, 255, 255);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < cx.length; i++) {
    vertex(cx[i], cy[i]);
  }
  endShape();
  noStroke();

  // GOOD FUTURE ASSETS
  fill(255, 220, 0, 100);
  circle(width - 80, 80, 100);
  fill(255, 220, 0);
  circle(width - 80, 80, 70);
  
  stroke(0, 150);
  strokeWeight(2);
  noFill();
  arc(birdX1, 100, 20, 15, PI, 0);
  arc(birdX1 + 20, 100, 20, 15, PI, 0);
  arc(birdX2, 130, 15, 10, PI, 0);
  arc(birdX2 + 15, 130, 15, 10, PI, 0);
  noStroke();
  
  birdX1 -= 0.5;
  birdX2 -= 0.7;
  if (birdX1 < width / 2) {
    birdX1 = width;
  }
  if (birdX2 < width / 2) {
    birdX2 = width + 50;
  }
  
  fill(65, 105, 225);
  beginShape();
  vertex(430, 440);
  bezierVertex(550, 450, 420, 550, 600, 600);
  vertex(415, 600);
  endShape(CLOSE);

  drawSolarHouse(650, 340);
  
  fill(100, 50, 20);
  rect(480, 360, 15, 50);
  
  fill(40, 180, 40);
  circle(487, 340, 60);
  circle(470, 350, 40);
  circle(505, 350, 40);

  // UI
  fill(255);
  textSize(45);
  textStyle(BOLD);
  text("EARTH 2050", width / 2, 80);
  textStyle(NORMAL);
  
  let btnX = width / 2 - 110;
  let btnY = 500;
  let btnW = 220;
  let btnH = 65;
  
  if (mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
    fill(255, 220, 50);
    cursor(HAND);
    btnX -= 2;
    btnY -= 2;
    btnW += 4;
    btnH += 4;
  } else {
    fill(255, 180, 0);
    cursor(ARROW);
  }
  
  rect(btnX, btnY, btnW, btnH, 15);
  fill(0);
  textSize(22);
  text("TAKE INITIATIVE", width / 2, btnY + (btnH / 2));
}

// SLIDE 2: SDG 13 (Interactive Pollution)

function drawSlide2() {
  for (let y = 0; y < 300; y++) {
    let c = lerpColor(color(220, 235, 255), color(130, 150, 170), y / 300);
    stroke(c);
    line(0, y, width, y);
  }
  noStroke();

  fill(70, 70, 70, 40);
  rect(0, 0, width, 300);
  
  fill(120, 170, 90);
  rect(0, 280, width, 100);
  
  fill(100, 70, 40);
  quad(430, 330, 460, 350, 450, 360, 420, 340);
  quad(500, 340, 530, 360, 520, 370, 490, 350);

  drawNormalHouse(25, 220, true);
  drawNormalHouse(120, 225, false);
  drawNormalHouse(215, 235, false);
  
  drawTree(40, 305);
  drawTree(90, 311);
  drawTree(320, 239);
  
  for (let t of customTrees) {
    drawTree(t.x, t.y);
  }

  drawCutStump(360, 245);
  drawCutStump(300, 280);
  drawLog(345, 345);
  drawCutStump(420, 355);
  drawFire(455, 325);
  
  drawIndustry(380, 200);
  drawIndustry(500, 210);
  
  smokeY += 0.5;
  drawSmokeCloud(410, 40 - smokeY % 60, 70);
  drawSmokeCloud(540, 20 - smokeY % 70, 90);
  
  drawRainCloud(300, 70);
  drawRainCloud(250, 70);
  drawRainCloud(100, 70);
  drawRainCloud(130, 70);

  fill(60);
  rect(0, 360, width, 70);
  
  fill(255);
  for (let i = 0; i < width; i += 80) {
    rect(i + 15, 392, 40, 4);
  }
  
  if (!car1.stopped) {
    car1.x += car1.speed;
    if (car1.x > width + 100) {
      car1.x = -150;
    }
    drawSmallSmoke(car1.x - 10, 330);
  }
  drawCar(car1.x, car1.y, color(car1.c));
  
  if (!car2.stopped) {
    car2.x += car2.speed;
    if (car2.x > width + 100) {
      car2.x = -220;
    }
    drawSmallSmoke(car2.x - 10, 350);
  }
  drawCar(car2.x, car2.y, color(car2.c));

  fill(70, 90, 110);
  beginShape();
  vertex(0, 430);
  bezierVertex(120, 460, 240, 420, 330, 470);
  bezierVertex(450, 540, 520, 490, width, 600);
  vertex(width, 600);
  vertex(0, 600);
  endShape(CLOSE);

  fill(90);
  rect(500, 290, 65, 16);
  ellipse(565, 298, 16, 16);
  rect(557, 298, 16, 155);
  
  fill(45);
  ellipse(565, 452, 38, 30);
  
  if (!pipeClean) {
    fill(20);
    rect(559, 452, 12, 55);
    ellipse(555, 525, 90, 28);
    ellipse(585, 545, 70, 22);
    
    fill(20);
    ellipse(500, 520, 80, 20);
    ellipse(550, 530, 60, 18);
  } else {
    fill(80, 170, 255);
    rect(559, 452, 12, 55);
    ellipse(555, 525, 60, 20);
  }

  let allDisposed = true;
  for (let g of garbages) {
    if (!g.disposed) {
      allDisposed = false;
      if (g.type === 'bottle') {
        drawBottle(g.x, g.y, g.r);
      } else if (g.type === 'can') {
        drawCan(g.x, g.y);
      } else if (g.type === 'bag') {
        drawPlasticBag(g.x, g.y);
      }
    }
  }

  drawFish(220, 490);
  drawFish(430, 540);
  drawBird(180, 100);
  drawBird(220, 80);

  // ON-SCREEN INSTRUCTIONS
  if (showInstructions) {
    stroke(0);
    strokeWeight(3);
    fill(255, 255, 0);
    textSize(15);
    textStyle(BOLD);
    
    if (!pipeClean) {
      text("Press 'P' to stop pipe", 650, 280);
    }
    
    if (!car1.stopped || !car2.stopped) {
      text("Click cars to stop smoke", 400, 320);
    }
    
    if (plantingMode) {
      fill(50, 255, 50);
      textSize(20);
      text("Click anywhere on grass to plant!", width / 2, 100);
    } else {
      fill(255, 255, 0);
      textSize(15);
      text("Press 'R' to re-plant trees", 360, 220);
    }
    
    if (canPickGarbage && !allDisposed) {
      fill(255, 255, 0);
      textSize(20);
      text("Drag garbage out of the screen!", width / 2, 130);
    } else if (!allDisposed) {
      fill(255, 255, 0);
      textSize(15);
      text("Press 'C' to pick garbage", 280, 480);
    }

    fill(255, 100, 100);
    textSize(15);
    text("Press 'W' to add waste in water", 150, 200);

    noStroke();
    textStyle(NORMAL);
  }

  drawMeters();

  // ACTION BUTTON LOGIC
  if (!showInstructions) {
    let btnX = width - 200;
    let btnY = height - 80;
    let btnW = 180;
    let btnH = 50;
    
    if (mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
      fill(200, 50, 50);
      cursor(HAND);
    } else {
      fill(255, 50, 50);
      cursor(ARROW);
    }
    
    rect(btnX, btnY, btnW, btnH, 10);
    fill(255);
    textSize(16);
    textStyle(BOLD);
    text("TAKE ACTION", btnX + btnW / 2, btnY + btnH / 2);
    textStyle(NORMAL);
  
  } else if (sustainableLevel >= 70 || pollutionLevel >= 90) {
    let btnX = width - 360;
    let btnY = height - 80;
    let btnW = 340;
    let btnH = 50;
    
    if (mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH) {
      fill(50, 200, 50);
      cursor(HAND);
    } else {
      fill(50, 255, 50);
      cursor(ARROW);
    }
    
    rect(btnX, btnY, btnW, btnH, 10);
    fill(0);
    textSize(16);
    textStyle(BOLD);
    text("LET'S SEE WHAT YOUR FUTURE HOLDS", btnX + btnW / 2, btnY + btnH / 2);
    textStyle(NORMAL);
  }
}
// SLIDE 3: FINAL MULTIPLE FUTURES (No Earths)

function drawSlide3() {
  cursor(ARROW);
  
  let isGoodFuture = (sustainableLevel >= 70);

  if (isGoodFuture) {
    // ---- BRIGHT FUTURE SCENE ----
    for (let y = 0; y < height; y++) {
      let c = lerpColor(color(120, 210, 255), color(220, 245, 255), y / height);
      stroke(c);
      line(0, y, width, y);
    }
    noStroke();
    
    for (let i = 180; i > 0; i -= 10) {
      fill(255, 230, 120, 8);
      ellipse(680, 90, i * 2);
    }
    
    fill(255, 230, 120);
    ellipse(680, 90, 120);
    
    for (let c of ecoClouds) {
      drawEcoCloud(c.x, c.y);
      c.x += c.speed;
      if (c.x > width + 100) {
        c.x = -120;
      }
    }
    
    fill(120, 190, 150);
    beginShape();
    vertex(0, 340);
    vertex(120, 220);
    vertex(260, 330);
    vertex(420, 200);
    vertex(620, 320);
    vertex(760, 230);
    vertex(800, 340);
    vertex(800, 600);
    vertex(0, 600);
    endShape(CLOSE);
    
    fill(80, 185, 90);
    rect(0, 350, width, height - 350);
    
    stroke(60, 150, 70);
    for (let i = 0; i < width; i += 8) {
      line(i, 360 + noise(i) * 20, i, 370 + noise(i) * 20);
    }
    noStroke();

    drawEcoRiver();
    drawEcoCity();
    
    drawEcoSolarHouse(90, 360, 1);
    drawEcoSolarHouse(200, 400, 0.9);
    drawEcoSolarHouse(80, 500, 1.1);
    
    drawWindmill(550, 250, 1);
    drawWindmill(660, 230, 1.2);
    
    drawEcoTree(70, 350, 1);
    drawEcoTree(480, 390, 0.8);
    drawEcoTree(480, 490, 0.8);
    
    for (let b of ecoBirds) {
      drawEcoBird(b.x, b.y);
      b.x += b.speed;
      if (b.x > width + 40) {
        b.x = -40;
      }
    }

    fill(0, 100, 0);
    textSize(35);
    textStyle(BOLD);
    text("SUSTAINABLE FUTURE ACHIEVED!", width / 2, 50);
    textStyle(NORMAL);
    
  } else {
    
    // Toxic Sky
    for (let y = 0; y < 300; y++) {
      let c = lerpColor(color(80, 60, 60), color(40, 20, 20), y / 300);
      stroke(c);
      line(0, y, width, y);
    }
    noStroke();
    
    fill(70, 70, 70, 80);
    rect(0, 0, width, 300); // Pollution haze
    
    // Dead Ground
    fill(45, 35, 35);
    rect(0, 280, width, height - 280);
    
    fill(30, 20, 20);
    quad(430, 330, 460, 350, 450, 360, 420, 340);
    quad(500, 340, 530, 360, 520, 370, 490, 350);
    
    // Stumps & Dead Trees
    drawCutStump(40, 305);
    drawCutStump(90, 311);
    drawCutStump(320, 239);
    drawCutStump(360, 245);
    drawCutStump(300, 280);
    drawCutStump(700, 320);
    
    drawFire(455, 325);
    drawFire(150, 310);
    
    // Industries
    drawIndustry(80, 200);
    drawIndustry(380, 200);
    drawIndustry(580, 210);
    
    // Smoke Clouds
    smokeY += 0.5;
    drawSmokeCloud(110, 40 - smokeY % 60, 70);
    drawSmokeCloud(410, 60 - smokeY % 70, 80);
    drawSmokeCloud(610, 50 - smokeY % 50, 90);
    
    drawRainCloud(300, 70);
    drawRainCloud(250, 70);
    drawRainCloud(100, 70);
    drawRainCloud(130, 70);
    drawRainCloud(650, 80);
    
    // Road & Broken Cars
    fill(60);
    rect(0, 360, width, 70);
    
    fill(255);
    for (let i = 0; i < width; i += 80) {
      rect(i + 15, 392, 40, 4);
    }
    
    drawCar(150, 345, color(150, 50, 50));
    drawSmallSmoke(140, 330);
    drawCar(450, 365, color(80, 80, 100));
    drawSmallSmoke(440, 350);
    
    // Toxic River
    fill(70, 90, 110);
    beginShape();
    vertex(0, 430);
    bezierVertex(120, 460, 240, 420, 330, 470);
    bezierVertex(450, 540, 520, 490, width, 600);
    vertex(width, 600);
    vertex(0, 600);
    endShape(CLOSE);
    
    // Toxic sludge / Oil spills
    fill(20);
    rect(559, 452, 12, 55);
    ellipse(555, 525, 90, 28);
    ellipse(585, 545, 70, 22);
    ellipse(300, 520, 80, 20);
    ellipse(150, 550, 100, 25);
    
    // Dead Fish & Garbage
    drawFish(220, 490);
    drawFish(430, 540);
    drawFish(600, 560);
    drawBottle(120, 500, 0.2);
    drawBottle(250, 470, -0.3);
    drawCan(340, 520);
    drawPlasticBag(420, 540);
    
    // (Earth removed from here too)

    fill(255, 100, 100);
    textSize(35);
    textStyle(BOLD);
    text("NO RECOVERY POSSIBLE...", width / 2, 50);
    textStyle(NORMAL);
  }
  
  fill(0);
  textSize(24);
  textStyle(ITALIC);
  text("Your future based on your actions", width / 2, height - 100);
  textStyle(NORMAL);
  
  fill(255);
  rect(width / 2 - 100, height - 70, 200, 50, 10);
  
  fill(0);
  textSize(20);
  text("RESTART", width / 2, height - 45);
}

// KEYBOARD INTERACTIONS
function keyPressed() {
  if (currentSlide === 2 && showInstructions) { 
    if (key === 'c' || key === 'C') {
      canPickGarbage = true;
      plantingMode = false;
    }
    
    if (key === 'p' || key === 'P') {
      if (!pipeClean) {
        pipeClean = true;
        sustainableLevel += 15;
      }
    }
    
    if (key === 'r' || key === 'R') {
      plantingMode = true;
      canPickGarbage = false;
    }
    
    if (key === 'w' || key === 'W') {
      let wasteTypes = ['bottle', 'can', 'bag'];
      let randomType = wasteTypes[Math.floor(Math.random() * wasteTypes.length)];
      
      garbages.push({
        x: random(400, 650),
        y: random(450, 580),
        type: randomType,
        r: random(-1, 1),
        disposed: false
      });
      
      sustainableLevel -= 10;
    }
  }
}

// MOUSE INTERACTIONS
function mouseDragged() {
  if (currentSlide === 2 && showInstructions && draggedGarbageIndex !== -1) { 
    garbages[draggedGarbageIndex].x = mouseX;
    garbages[draggedGarbageIndex].y = mouseY; 
  }
}

function mouseReleased() {
  if (currentSlide === 2 && showInstructions && draggedGarbageIndex !== -1) {
    let g = garbages[draggedGarbageIndex];
    if (g.x < 30 || g.x > width - 30 || g.y < 30 || g.y > height - 30) {
      g.disposed = true;
      sustainableLevel += 5;
    }
    draggedGarbageIndex = -1;
  }
}

function mousePressed() {
  userStartAudio();
  if (currentSlide === 1) {
    if (mouseX > width / 2 - 110 &&
  mouseX < width / 2 + 110 &&
  mouseY > 500 &&
  mouseY < 565
) {

  currentSlide = 2;

  // START SOUND
  if (!factorySound.isPlaying()) {
    factorySound.loop();
    factorySound.setVolume(0.5);
  }
    }
  } else if (currentSlide === 2) {
    
    if (!showInstructions) {
      let btnX = width - 200;
      let btnY = height - 80;
      let btnW = 180;
      let btnH = 50;
      
      if (mouseX > btnX && mouseX < btnX + btnW && mouseY > btnY && mouseY < btnY + btnH) { 
        showInstructions = true; 
        return; 
      }
    } 
    else if (sustainableLevel >= 70 || pollutionLevel >= 90) {
      let btnX = width - 360;
      let btnY = height - 80;
      let btnW = 340;
      let btnH = 50;
      
      if (mouseX > btnX &&
  mouseX < btnX + btnW &&
  mouseY > btnY &&
  mouseY < btnY + btnH
) {

  // STOP SOUND
  if (factorySound.isPlaying()) {
    factorySound.stop();
  }

  currentSlide = 3;
  return; 
      }
    }

    if (showInstructions) {
      if (plantingMode) {
        customTrees.push({ x: mouseX, y: mouseY });
        sustainableLevel += 5;
        plantingMode = false;
        return;
      }
      
      if (canPickGarbage) {
        for (let i = garbages.length - 1; i >= 0; i--) {
          let g = garbages[i];
          if (!g.disposed && dist(mouseX, mouseY, g.x, g.y) < 30) {
            draggedGarbageIndex = i;
            return;
          }
        }
      }
      
      if (!car1.stopped && mouseX > car1.x && mouseX < car1.x + 80 && mouseY > car1.y - 20 && mouseY < car1.y + 30) {
        car1.stopped = true;
        sustainableLevel += 10;
      }
      
      if (!car2.stopped && mouseX > car2.x && mouseX < car2.x + 80 && mouseY > car2.y - 20 && mouseY < car2.y + 30) {
        car2.stopped = true;
        sustainableLevel += 10;
      }
    }
  } else if (currentSlide === 3) {
    if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height - 70 && mouseY < height - 20) {
      sustainableLevel = 20;
      showInstructions = false;
      car1.x = -120;
      car1.stopped = false;
      car2.x = -300;
      car2.stopped = false;
      pipeClean = false;
      plantingMode = false;
      canPickGarbage = false;
      customTrees = [];
      garbages = [
        { x: 120, y: 500, type: 'bottle', r: 0.2, disposed: false },
        { x: 250, y: 470, type: 'bottle', r: -0.3, disposed: false },
        { x: 340, y: 520, type: 'can', r: 0, disposed: false },
        { x: 420, y: 540, type: 'bag', r: 0, disposed: false }
      ];
      if (factorySound.isPlaying()) {
        factorySound.stop();}

      currentSlide = 1;
    }
  }
}
// METER DRAWING LOGIC
function drawMeters() {
  fill(255);
  textSize(15);
  
  text("Pollution: " + pollutionLevel + "%", 180, height - 40); 
  fill(255, 0, 0);
  rect(80, height - 30, pollutionLevel * 2, 15);
  
  fill(255);
  text("Sustainable Environment: " + sustainableLevel + "%", width - 200, height - 40); 
  fill(0, 255, 0);
  rect(width - 320, height - 30, sustainableLevel * 2, 15);
}
// UNIVERSAL DRAWING FUNCTIONS 

function drawNormalHouse(x, y, tap) {
  fill(245, 235, 220);
  rect(x, y, 80, 60);
  
  fill(180, 40, 40);
  triangle(x - 10, y, x + 40, y - 50, x + 90, y);
  
  fill(135, 206, 235);
  rect(x + 20, y + 20, 25, 20);
  
  if (tap) {
    fill(120);
    rect(x + 82, y + 38, 4, 20);
    rect(x + 82, y + 38, 12, 4);
    ellipse(x + 95, y + 40, 5);
    
    fill(80, 170, 255);
    ellipse(x + 96, y + 48, 4);
    ellipse(x + 98, y + 56, 3);
    
    fill(70);
    rect(x + 88, y + 58, 12, 10);
    
    fill(120);
    rect(x + 90, y + 55, 8, 3);
  }
}

function drawSolarHouse(x, y) {
  drawNormalHouse(x, y, false);
  
  fill(20, 20, 100);
  quad(x + 10, y - 15, x + 40, y - 45, x + 65, y - 25, x + 30, y);
  
  stroke(100, 150, 255);
  strokeWeight(1);
  line(x + 20, y - 30, x + 50, y - 15);
  line(x + 30, y - 35, x + 60, y - 20);
  noStroke();
}

function drawCutStump(x, y) {
  fill(50, 30, 20);
  quad(x, y + 30, x + 30, y + 30, x + 25, y - 10, x, y);
  
  fill(200, 160, 120);
  ellipse(x + 12.5, y - 5, 26, 12);
}

function drawIndustry(x, y) {
  fill(120);
  rect(x, y, 120, 90);
  
  fill(100);
  rect(x + 80, y + 25, 40, 65);
  
  fill(90);
  beginShape();
  vertex(x, y);
  vertex(x + 20, y - 20);
  vertex(x + 45, y);
  vertex(x + 65, y - 18);
  vertex(x + 95, y);
  vertex(x + 120, y - 15);
  vertex(x + 120, y);
  endShape(CLOSE);
  
  fill(200, 230, 255);
  for (let i = 0; i < 3; i++) {
    rect(x + 10 + i * 25, y + 20, 15, 15);
    rect(x + 10 + i * 25, y + 50, 15, 15);
  }
  
  drawIndustryChimney(x + 15, y - 70, 20, 80);
  drawIndustryChimney(x + 55, y - 100, 25, 110);
  
  fill(30, 120, 40);
  ellipse(x + 140, y + 95, 35, 12);
}

function drawIndustryChimney(x, y, w, h) {
  fill(150);
  rect(x, y, w, h);
  
  fill(60);
  ellipse(x + w / 2, y, w, 8);
}

function drawSmokeCloud(x, y, s) {
  fill(70, 70, 70, 170);
  ellipse(x, y, s, s * 0.7);
  ellipse(x + 25, y - 10, s * 0.6, s * 0.4);
  ellipse(x - 25, y - 8, s * 0.5, s * 0.35);
}

function drawRainCloud(x, y) {
  fill(90);
  ellipse(x, y, 60, 35);
  ellipse(x + 20, y - 8, 45, 25);
  ellipse(x - 20, y - 5, 40, 20);
  
  fill(100, 150, 255);
  rect(x - 10, y + 12, 2, 15);
  rect(x + 5, y + 12, 2, 18);
}

function drawFire(x, y) {
  fill(255, 120, 0);
  triangle(x, y + 25, x + 15, y - 10, x + 30, y + 25);
  
  fill(255, 200, 0);
  triangle(x + 8, y + 20, x + 15, y + 2, x + 22, y + 20);
}

function drawSmallSmoke(x, y) {
  fill(100, 100, 100, 120);
  ellipse(x, y, 15);
  ellipse(x - 12, y - 8, 18);
}

function drawCar(x, y, c) {
  fill(c);
  rect(x, y, 80, 28, 8);
  
  beginShape();
  vertex(x + 15, y);
  vertex(x + 28, y - 20);
  vertex(x + 55, y - 20);
  vertex(x + 68, y);
  endShape(CLOSE);
  
  fill(30);
  ellipse(x + 18, y + 28, 18);
  ellipse(x + 62, y + 28, 18);
}

function drawTree(x, y) {
  fill(110, 70, 40);
  rect(x, y, 10, 40);
  
  fill(50, 150, 70);
  ellipse(x + 5, y - 8, 35);
  ellipse(x - 8, y + 5, 28);
  ellipse(x + 18, y + 5, 28);
}

function drawLog(x, y) {
  fill(120, 80, 40);
  rect(x, y, 45, 8, 5);
  
  ellipse(x + 45, y + 4, 12);
}

function drawBottle(x, y, r) {
  push();
  translate(x, y);
  rotate(r);
  
  fill(180, 220, 255);
  rect(0, 0, 12, 35, 4);
  
  fill(120, 180, 255);
  rect(3, -7, 6, 8);
  pop();
}

function drawCan(x, y) {
  fill(180);
  ellipse(x, y, 18, 5);
  rect(x - 9, y, 18, 25);
  ellipse(x, y + 25, 18, 5);
}

function drawPlasticBag(x, y) {
  fill(240, 240, 240, 180);
  beginShape();
  vertex(x, y);
  bezierVertex(x - 15, y - 20, x + 15, y - 20, x + 20, y);
  bezierVertex(x + 20, y + 20, x - 20, y + 20, x, y);
  endShape();
}

function drawFish(x, y) {
  fill(220);
  ellipse(x, y, 28, 12);
  triangle(x - 14, y, x - 25, y - 7, x - 25, y + 7);
}

function drawBird(x, y) {
  fill(30);
  arc(x, y, 12, 6, PI, TWO_PI);
  arc(x + 12, y, 12, 6, PI, TWO_PI);
}

function drawEcoCloud(x, y) {
  fill(255, 240);
  ellipse(x, y, 70, 50);
  ellipse(x + 35, y - 10, 60, 45);
  ellipse(x + 70, y, 70, 50);
  ellipse(x + 30, y + 10, 90, 45);
}

function drawEcoRiver() {
  riverOffset += 0.01;
  fill(70, 170, 255);
  beginShape();
  vertex(200, height);
  
  for (let y = 400; y > 300; y -= 20) {
    let wave = sin(y * 0.03 + riverOffset) * 20;
    vertex(300 + wave, y);
  }
  
  for (let y = 300; y <= height; y += 20) {
    let wave = sin(y * 0.03 + riverOffset) * 20;
    vertex(450 + wave, y);
  }
  endShape(CLOSE);
  
  fill(255, 255, 255, 90);
  ellipse(360, 500, 120, 15);
  ellipse(380, 400, 100, 12);
}

function drawEcoCity() {
  fill(180, 210, 220);
  rect(460, 220, 60, 130);
  rect(530, 180, 80, 170);
  rect(630, 240, 50, 110);
  rect(690, 200, 70, 150);
  
  fill(240);
  for (let x = 470; x < 750; x += 20) {
    for (let y = 200; y < 340; y += 20) {
      if (x > 520 && x < 610 || x > 460 && x < 520 || x > 620 && x < 680 || x > 680 && x < 750) {
        rect(x, y, 8, 10, 2);
      }
    }
  }
  
  fill(60, 170, 80);
  rect(460, 210, 60, 10);
  rect(530, 170, 80, 10);
  rect(690, 190, 70, 10);
}

function drawEcoSolarHouse(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  
  fill(255, 240, 210);
  rect(0, 0, 90, 70, 10);
  
  fill(180, 70, 50);
  triangle(-10, 5, 45, -40, 100, 5);
  
  fill(40, 70, 120);
  rect(25, -28, 38, 18, 3);
  
  stroke(255);
  line(25, -19, 63, -19);
  line(44, -28, 44, -10);
  noStroke();
  
  fill(120, 70, 40);
  rect(35, 35, 20, 35, 5);
  
  fill(170, 230, 255);
  rect(10, 20, 18, 18, 3);
  rect(62, 20, 18, 18, 3);
  
  pop();
}

function drawWindmill(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  
  fill(230);
  rect(-5, 0, 10, 170);
  translate(0, 20);
  
  push();
  rotate(frameCount * 0.03);
  fill(245);
  
  for (let i = 0; i < 3; i++) {
    rotate(TWO_PI / 3);
    ellipse(0, -40, 18, 80);
  }
  pop();
  
  fill(200);
  ellipse(0, 0, 18);
  pop();
}

function drawEcoTree(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  
  fill(120, 80, 40);
  rect(-10, 0, 20, 80, 8);
  
  fill(50, 170, 70);
  ellipse(0, -20, 90);
  ellipse(-30, 0, 70);
  ellipse(30, 0, 70);
  ellipse(0, -50, 70);
  
  pop();
}

function drawEcoBird(x, y) {
  stroke(0);
  strokeWeight(2);
  noFill();
  
  arc(x, y, 20, 10, PI, TWO_PI);
  arc(x + 20, y, 20, 10, PI, TWO_PI);
  
  noStroke();
}
