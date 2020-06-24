var monkey, monkeyimg;

var banana, bananaimg;

var obstacle, obstacleimg, obstaclegroup;

var background, score;

var bgroup, ogroup;

var jungle, jungleimg;

var ground;

function preload(){
  bananaimg = loadImage("Banana.png");
  
  obstacleimg = loadImage("stone.png");
  
  jungleimg = loadImage("jungle.jpg");
  
  monkeyimg = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png",       "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png",                  "Monkey_08.png", "Monkey_09.png");
}


function setup() {
  createCanvas(400, 400);
  
  ground = createSprite();

  back = createSprite(200, 200, 10, 10);
  back.velocityX = -7;
  if(back.x < 300){
    
    back.x = 400;
    
  }
  
  monkey = createSprite(50, 310, 50, 50);
  monkey.addAnimation("ape", monkeyimg);
  monkey.scale = 0.15; 
  
  bgroup = new Group();
  ogroup = new Group();
  
}


function draw(){
 background(255); 
  
  back.addImage("blah", jungleimg);
  

  
  if(back.x < 150){
      
     back.x = 400;
    
  }
  
  if(keyDown("space")){
    
    monkey.velocityY = -12; 
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  ob();
  baa();
  
  drawSprites();
}


function ob(){
  if(frameCount % 100 === 0){  
  var obs = createSprite(400, 330, 50, 50);
    obs.addImage("Stone", obstacleimg);
    obs.scale = 0.15;
    obs.lifetime = 300;
    obs.velocityX = -7;
    ogroup.add(obs);
  }
}


function baa(){
  if(frameCount % 80 === 0){  
  var banana = createSprite(400, 200);
    banana.y = Math.round(random(200, 270));
    banana.addImage("Banana", bananaimg);
    banana.scale = 0.05;
    banana.lifetime = 80;
    banana.velocityX = -7;
    bgroup.add(banana);
  }
}
