
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var engine;
var world;

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;
	var groundOptions = {
		isStatic:true;
	}
	var ballOptions = {
		restitution:1.5
	}
	paper = Bodies.circle(200,100,20,ballOptions);
	World.add(world,paper);
	ground = Bodies.rectangle(200,390,200,20,groundOptions);
	World.add(world,ground);
	
	
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}








