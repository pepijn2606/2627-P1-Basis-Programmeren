let happiness = 200;
let hunger = 200;
let energy = 200;
let health = 200;

//slapen dinges
let isSleeping = false;
let sleepTimer = 0;

//eet blok dingen
let foodBlocks = 5;

function setup() {
  createCanvas(900, 800);
  noSmooth();
  pixelDensity(1);

  let feed_button = createButton('feed');
  feed_button.position(320, 65);
  feed_button.mousePressed(feed);

  let play_button = createButton('play');
  play_button.position(320, 115);
  play_button.mousePressed(play);

  let sleep_button = createButton('sleep');
  sleep_button.position(320, 165);
  sleep_button.mousePressed(sleep);

  let shower_button = createButton('shower');
  shower_button.position(320, 215);
  shower_button.mousePressed(shower);
}

//knoppen functies
function feed() {
  hunger = hunger + 30;

  if (foodBlocks > 0) {
    foodBlocks = foodBlocks - 1;
  }
}

function play() {
  happiness = happiness + 30;
}

function sleep() {
  energy = energy + 30;

  //poe gaat 2 seconden slapen
  isSleeping = true;
  sleepTimer = millis() + 2000;
}

function shower() {
  health = health + 30;
}

function draw() {

  background(220);
  image(imgBackground, 0, 0, 900, 800);

  image(imgBed, 600, 400, 400, 400);

  //randjes om de balken
  strokeWeight(2);
  fill(220);
  rect(79, 49, 202, 32);
  rect(79, 99, 202, 32);
  rect(79, 149, 202, 32);
  rect(79, 199, 202, 32);

  //eten voorraad
  strokeWeight(0.5);
  fill("yellow");

  for (let i = 0; i < foodBlocks; i++) {
    rect(120 + i * 10, 700, 10, 40);
  }

  strokeWeight(0);

  //hunger balk
  fill("red");
  rect(80, 50, hunger, 30);
  hunger = hunger - 0.2;

  if (hunger < 0) {
    hunger = 0;
  }
  if (hunger > 200) {
    hunger = 200;
  }

  //happiness balk
  fill("yellow");
  rect(80, 100, happiness, 30);
  happiness = happiness - 0.2;

  if (happiness < 0) {
    happiness = 0;
  }
  if (happiness > 200) {
    happiness = 200;
  }

  //energy balk
  fill("green");
  rect(80, 150, energy, 30);
  energy = energy - 0.2;

  if (energy < 0) {
    energy = 0;
  }
  if (energy > 200) {
    energy = 200;
  }

  //health balk
  fill("blue");
  rect(80, 200, health, 30);
  health = health - 0.2;

  if (health < 0) {
    health = 0;
  }
  if (health > 200) {
    health = 200;
  }

  //poe slapen of normaal
  if (isSleeping && millis() < sleepTimer) {
    image(imgSleep, 700, 575, 100, 100);
  } else {
    isSleeping = false;
    welkePoe();
  }
}

//welke emoji heeft poe
function welkePoe() {

  //poe is dood
  if (hunger <= 0 && happiness <= 0 && energy <= 0 && health <= 0) {
    image(imgDead, 350, 550, 100, 100);
  }

  //poe is heel ongelukkig
  else if (happiness <= 30) {
    image(imgSad, 350, 550, 100, 100);
  }

  //poe is moe
  else if (energy <= 40) {
    image(imgTired, 350, 550, 100, 100);
  }

  //poe heeft heel veel honger
  else if (hunger <= 40) {
    image(imgHungry, 350, 550, 100, 100);
  }

  //poe is heel vies
  else if (health <= 40) {
    image(imgDirty, 350, 550, 100, 100);
  }

  //poe is een beetje ongelukkig
  else if (happiness <= 80) {
    image(imgSad, 350, 550, 100, 100);
  }

  //poe is een beetje moe
  else if (energy <= 80) {
    image(imgTired, 350, 550, 100, 100);
  }

  //poe heeft een beetje honger
  else if (hunger <= 80) {
    image(imgHungry, 350, 550, 100, 100);
  }

  //poe is een beetje vies
  else if (health <= 80) {
    image(imgDirty, 350, 550, 100, 100);
  }

  //poe is blij
  else {
    image(imgHappy, 350, 550, 100, 100);
  }
}

//plaatjes
let imgBackground;

let imgHungry;
let imgHappy;
let imgSad;
let imgSleep;
let imgDirty;
let imgDead;
let imgTired;

let imgBed;

function preload() {

  //poe plaatjes
  imgBackground = loadImage("backgroundpoe.png");

  imgHungry = loadImage("hungry.png");
  imgHappy = loadImage("happy.png");
  imgSad = loadImage("sad.png");
  imgSleep = loadImage("sleep.png");
  imgDirty = loadImage("dirty.png");
  imgDead = loadImage("dead.png");
  imgTired = loadImage("tired.png");

  //andere plaatjes
  imgBed = loadImage("bed.png");
}