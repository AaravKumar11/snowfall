const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bgImage;
var engine,world,snowball1,snowball2,snowball3,snowball4,snowball5,snowball6;

function preload(){
  bgImage=loadImage("snow3.jpg");
}

function setup() {
  
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  snowball1= new snow(100,50);
  snowball2= new snow(240,50);
  snowball3= new snow(300,50);
  snowball4= new snow(450,50);
  snowball5= new snow(670,50);
  snowball6= new snow(500,50);
}

function draw() {

  background(bgImage);  
  
  Engine.update(engine);
  snowball1.display();
  snowball2.display();
  snowball3.display();
  snowball4.display();
  snowball5.display();
  snowball6.display();
}

