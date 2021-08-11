var garden,rabbit;
var gardenImg,rabbitImg;
var leaf,greenLeaf,orangeLeaf,redLeaf;
var apple,grass,appleImg,grassImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.VelocityX = 3;

console.log(frameCount);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX;

  drawSprites();

}


function createApple() {
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.1;
  apple.VelocityY = 4;
  apple.lifetime = 300;

  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(greenLeaf,orangeLeaf,redLeaf);
  leaf.scale = 0.1;
  leaf.VelocityY = 4;
  apple.lifetime = 300;
}

function createLeaf() {
  
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(greenLeaf,orangeLeaf,redLeaf);
  leaf.scale = 0.1;
  leaf.VelocityY = 4;
  apple.lifetime = 300;

}

var apple = math.round(random(1,2));

if (frameCount % 80 == 0) {
  if(apple == 1) {
    createApple();
  }
  else {
    createLeaf();
  }
} 