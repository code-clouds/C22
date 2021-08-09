const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine;
let world;

var ball
var pendulum

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  var ballOptions = {
    restitution:1
  }
  ball = Bodies.circle(200,300,20,ballOptions);
  World.add(world, ball);

  var pendulumOptions = {
    pointA:{x:200, y:10},
    bodyB:ball,
    pointB:{x:0, y:0},
    length:70,
    stiffness:10
  }
  pendulum = Constraint.create(pendulumOptions);
  World.add(world, pendulum);
}

function draw() 
{
  background("white");
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y,20,20);
  line(pendulum.pointA.x,pendulum.pointA.y,ball.position.x, ball.position.y);
}

