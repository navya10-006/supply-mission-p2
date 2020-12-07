var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,box1Srite,box2Sprite,box3Sprite;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);
	 packageSprite=createSprite(width/2, 80, 10,10);
	 packageSprite.addImage(packageIMG)
	 packageSprite.scale=0.2
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
//Create a Ground

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
box1Sprite=createSprite(width/2,height-55,200,20);
box1=Bodies.rectangle(width/2,height-55,200,20,{isStatic:false} );
box1Sprite.shapeColor="red";
World.add(world,box1);
box2Sprite=createSprite(300,height-100,20,100);
box2=Bodies.rectangle(300,height-100,20,100,{isStatic:false} );
box2Sprite.shapeColor="red";
World.add(world,box2);
box3Sprite=createSprite(500,height-100,20,100);
box3=Bodies.rectangle(500,height-100,20,100,{isStatic:false} );
box3Sprite.shapeColor="red";
World.add(world,box3);
	

	Engine.run(engine);
  
}


function draw() {
	background(0);
  rectMode(CENTER);
    packageSprite.x= packageBody.position.x 
    packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false)
  }
}



