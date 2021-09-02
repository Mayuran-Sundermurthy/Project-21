
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, wall1, wall2;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		density:1.2,
		friction:0
	}

	ball = Bodies.circle(200,25,15,ball_options);
	World.add(world,ball);
	ground = new Ground(500,475,1000,10);
	wall1 = new Ground(600,430,10,100);
	wall2 = new Ground(800,430,10,100);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background(0);
  ellipse(ball.position.x,ball.position.y,15);
  ground.display();
  wall1.display();
  wall2.display();
  drawSprites();
  keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:4,y:0});
	}
}

