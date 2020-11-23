
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(190,50,100)
	bob2 = new Bob(220,50,100)
	bob3 = new Bob(0,50,100)
	bob4 = new Bob(280,50,100)
	bob5 = new Bob(310,50,100)

	roof1 = new Roof(500,10,900,40)
    var bobDiameter = 100
	rope1 = new Rope(bob1.body,roof1.body,-bobDiameter*-1,20)
	rope2 = new Rope(bob2.body,roof1.body,-bobDiameter*-3,20)
	rope3 = new Rope(bob3.body,roof1.body,-bobDiameter*-5,20)
	rope4 = new Rope(bob4.body,roof1.body,-bobDiameter*-7,20)
	rope5 = new Rope(bob5.body,roof1.body,-bobDiameter*-9,20)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  roof1.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
 
}



