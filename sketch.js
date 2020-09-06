var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxSide1, boxSide2, boxBottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	boxBottom = createSprite(width/2, height-50, 200, 20);
	boxBottom.shapeColor = "red";

	boxSide1 = createSprite(width/1.6, height-90, 20, 100);
	boxSide1.shapeColor = "red";

	boxSide2 = createSprite(width/2.7, height-90, 20, 100);
	boxSide2.shapeColor = "red";

	groundSprite=createSprite(width/2, height-35, width, 10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	packageBody_options ={
		restitution:0.4
	}
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , packageBody_options);
	World.add(world, packageBody);

	boxBottom_options ={
		isStatic:true
	}
	boxBottom = Bodies.rectangle(width/2, 650, width, 10 , boxBottom_options);
	 World.add(world, boxBottom);
	 
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}
