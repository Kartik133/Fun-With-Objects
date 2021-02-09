const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var body1,body2,body3,body4;
var box;
var ground;
var stone;
var rubber;

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  box = new Box(200,350,150,30);

  ground = new Ground(400,690,800,20);

  stone = new Stone(200,350,100,100,PI/4);

  rubber = new Rubber(600,350,100);

  Engine.run(engine);
}

function draw() {
  background("lightblue");

  ground.display();
  stone.display();
  rubber.display();
  box.display();
  
  drawSprites();
}