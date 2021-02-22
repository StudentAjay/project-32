const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope
var chain
function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(750, 600, 1200, 20);
  box1 = new Box(900, 100,50, 50);
  box2 = new Box(900, 100, 50, 50);
  box3 = new Box(900, 100, 50, 50);
  box4 = new Box(900, 100, 50, 50);
  box5 = new Box(900, 100, 50, 50);
  box6 = new Box(900, 100, 50, 50);
  box7 = new Box(800, 100, 50, 50);
  box8 = new Box(800, 100, 50, 50);
  box9 = new Box(800, 100, 50, 50);
  box10 = new Box(800, 100, 50, 50);
  box11 = new Box(800, 100, 50, 50);
  box12 = new Box(800, 100, 50, 50);
  box13 = new Box(700, 100, 50, 50);
  box14 = new Box(700, 100, 50, 50);
  box15 = new Box(700, 100, 50, 50);
  box16 = new Box(700, 100, 50, 50);
  box17 = new Box(700, 100, 50, 50);
  box18 = new Box(700, 100, 50, 50);
  box19 = new Box(700, 100, 50, 50);
  box20 = new Box(700, 100, 50, 50);

  ball = new Ball(300,400,100,100);

  var options =  {
    bodyA:ball.body,
    pointB:{x:600,y:100},
    stiffiness:1,
    length:400
  }
  
   chain = Constraint.create(options);
  World.add(world,chain);

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  
  ball.display();

  stroke("green");
  strokeWeight(4);
  line(ball.body.position.x,ball.body.position.y,600,100);

}


function mouseDragged() {
  //ball.x = mouseX;
  //ball.y = mouseY;
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}


