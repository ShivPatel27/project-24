
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperobject;
var bin1,bin2,bin3;


function setup() {
	createCanvas(800, 700);

	bin1 = createSprite(425,655,150,10);
	bin1.shapeColor = "purple";

	bin2 = createSprite(495,625,10,70);
	bin2.shapeColor = "purple";

	bin3 = createSprite(345,625,10,70);
	bin3.shapeColor = "purple";

	engine = Engine.create();
	world = engine.world;

	paperobject = new Paper ( 200, 100, 20 );
	//World.add(world,paperobject);
	
	dustbin1 = Bodies.rectangle(425,655,150,15 ,{isStatic: true} );
	World.add(world, dustbin1);

	dustbin1 = Bodies.rectangle( 495,625,15,70,{isStatic: true} );
	World.add(world, dustbin1);

	
	ground = Bodies.rectangle(100, 250, 250, 10 ,{isStatic: true} );
	World.add(world, ground);
	ground1 = Bodies.rectangle(width/2, 650, width, 10 ,{isStatic: true} );
	World.add(world, ground1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  paperobject.display();
  keypressed();
  drawSprites();
 
}
function keypressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:1,y:2});

	}
}
	




