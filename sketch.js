const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var con;
var ball;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var roof;
var rope;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options = 
	{
		restitution: 0.8
	}
	  
	  
	  ball = Bodies.circle(400,100,10,ball_options);
	  World.add(world,ball);

	  var ball1_options = 
	{
		restitution: 0.8
	}
	  
	  
	  ball1 = Bodies.circle(500,100,10,ball_options);
	  World.add(world,ball);
	
	  var ball2_options = 
	  {
		  restitution: 0.8
	  }
		
		
		ball2 = Bodies.circle(600,100,10,ball_options);
		World.add(world,ball);


		var ball3_options = 
	{
		restitution: 0.8
	}
	  
	  
	  ball3 = Bodies.circle(300,100,10,ball_options);
	  World.add(world,ball);
	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);


	con = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:ball,
		pointB:{x:0,y:0},
		length:150,
		stiffness:0.1
	  });

	World.add(world,con);
	


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  //background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  

  push();
  strokeWeight(2);
  stroke(265);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  pop();

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope.show();
  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
