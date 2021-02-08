var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var PLAY = 1 
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImage = loadImage("jungle.jpg");
  
  
 
}



function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(jungleImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  obstaclesGroup = new Group();
  foodGroup = new Group();
  monkey = createSprite(60,240,30,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(400,340,800,10);
  ground.visible = false;
  
  var rand = Math.round(random(1,2));
  if(rand==1){
    Spawnfood();
  }
  else{
    Spawnobstacles();
    
  }
}


function draw() {
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  monkey.velocityY = monkey.velocityY + 0.4                        
  
  if(monkey.isTouching(foodGroup)){
    foodGroup.destroyEach();
    score = score+1;
  }
  if(monkey.isTouching(obstaclesGroup)){
    monkey.scale = 0.1;
    obstaclesGroup.destroyEach();
    score = 0;
  }
  monkey .collide(ground); 
  if(score==5){
    monkey.scale = 0.2;
  }
  if (keyDown("space") && monkey.y>=273) {
      monkey.velocityY = -12;
  }
  console.log(monkey.y)
  Spawnobstacles();
  Spawnfood();

  drawSprites();
  
  fill("white");
  textSize(15);
  text("Score :"+score, 480 ,50);
   
}

function Spawnobstacles(){
  if(frameCount %200 ==0){
var obstacle = createSprite(800,280,10,40);
    
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2;
  obstacle.velocityX = -4;
    obstaclesGroup.add(obstacle);
    obstacle.lifetime = 200;
  }
}
function Spawnfood(){
  if(frameCount %150 ==0){
     var banana  = createSprite(800,120,40,10);
    banana.y = Math.round(random(70,120));
     banana.addImage(bananaImage);
    background.x = background.width /2;
    banana.velocityX= -4;
     banana.scale = 0.15;
    banana.lifetime = 200;
    foodGroup.add(banana);

}
}


