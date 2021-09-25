const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world ;

var ground,ball;

function setup(){
  createCanvas (400,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle(0,380,400,10,ground_options);
  World.add(world,ground);

  var ball_options = {
    restitution:0.9
  }
  ball = Bodies.circle(200,200,10,ball_options);
  World.add(world,ball);
}
function draw()
{
  background("red");
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,400,10);
  ellipse(ball.position.x,ball.position.y,10);
}