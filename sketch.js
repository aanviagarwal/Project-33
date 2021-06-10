const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var snow = [];
var maxSnow = 100;

function preload(){
  bgImg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  if(frameCount%150 === 0){
    for(var i=0; i<maxSnow; i++){
      snow.push(new Snow(random(0,800),random(0,400)));
    } 
  }
}

function draw() {
  Engine.update(engine);
  background(bgImg);
  for(var i = 0; i<maxSnow; i++){
    snow[i].display();
  }
  drawSprites();
}