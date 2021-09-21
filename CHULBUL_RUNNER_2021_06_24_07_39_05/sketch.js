var PLAY = 1;
var END = 0;
var gameState = PLAY;

var dabangg,dabangg_running, dabangg_collided;

var monster;
var monsterImage1, monsterImage2, monsterImage3, monsterImage4, monsterImage5;
var monster1,monster2,monster3,monster4,monster5;
 
var monsterGroup;

var track1, track2, track3;

var trackImage1,trackImage2,trackImage3;

var score = 0;



var restart, gameOver;

function preload(){
 monsterImage1 = loadImage("moster1.png") 
 monsterImage2 = loadImage("moster2.png") 
 monsterImage3 = loadImage("moster3.png")  
 monsterImage4 = loadImage("moster4.png") 
 monsterImage5 = loadImage("moster5.png")  

 trackImage1 = loadImage("track1.png")
 trackImage2 = loadImage("track2.png")
 trackImage3 = loadImage("track3.png")

}

function setup() {
  createCanvas(displayWidth-100,displayHeight-150);
  
  dabangg = createSprite(65,160,30,50);
  

  track1 = createSprite(displayWidth-1400,-displayHeight*4,20,400);
  track1.addImage("track1.png",trackImage1);
  track1.y = track1.height /2;
  
  track2 = createSprite(displayWidth-1200,180,20,400);
  track2.addImage("track2.png",trackImage2);
  track2.y = track2.height /2;

  track3 = createSprite(displayWidth-1000,180,20,400)
  track3.addImage("track3.png",trackImage3); 
  track3.y = track3.height /2;


  monsterGroup = new Group();
  
  score = 0;
}

function draw() {
  background(255);
  
  text("Score: "+ score, 0,0);
  
  camera.position.x = 0;
  camera.position.y = 0;
 
  {
    w=random(200,950);
    h=random(-height*4,height-300);
  monster1 = createSprite(w,h);
  monster1.addImage("moster1.png",monsterImage1);
  monsterGroup.add(monster1);
 }
  
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    track1.velocityY = -(6 + 3*score/200);
    
    score = score + Math.round(getFrameRate()/60);
    track2.velocityY = -(6 + 3*score/200);

    score = score + Math.round(getFrameRate()/60);
    track3.velocityY = -(6 + 3*score/200);

    if(keyDown("space") && dabangg .y >= 159) {
      dabangg.velocityY = 10;
    }
  
    dabangg.velocityY = dabangg.velocityY - 0.2
  
    if (track1.y < 0){
      track1.y = track1.height/2;
    }

    if (track2.y < 0){
      track2.y = track2.height/2;
    }

    if (track3.y < 0){
      track3.y = track3.height/2;
    }

   // dabangg.collide(invisibleGround);
    
   // spawnMonsters();
  
    if(monsterGroup.isTouching(dabangg)){
        gameState = END;
    }
    
    else if (gameState === END) {
    ground.velocityX = 0;
    monster.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    }
     
    if(keyWentDown("left") && dabangg.isTouching(track2)){
     
      
    ball.x=track1.x;
    //ball.y=350;
    }
  if(keyWentDown("right") && dabangg.isTouching(track2)){
     
      
    ball.x=track3.x;
    //ball.y=350;
    }
    
  //If car is in the left lane and the user wants to go left or right  
    
    if(keyWentDown("left") && dabangg.isTouching(track1)){
    
      
    ball.x=track2.x;
    //ball.y=350;
    }
  if(keyWentDown("right") && dabangg.isTouching(track1)){
    
      
    ball.x=track3.x;
    //ball.y=350;
    }
    
    //If car is in the right lane and the user wants to go left or right  
    
    if(keyWentDown("left") && dabangg.isTouching(track3)){
          
    ball.x=track2.x;
    
    }
  if(keyWentDown("right") && dabangg.isTouching(track3)){
      
    ball.x=track1.x;
    }
  drawSprites();
}
  
  
 // function spawnMonsters() {
 // if(frameCount % 60 === 0) {
 //   var monster = createSprite(300,165,10,40)
 //   monster.velocityY = -(6 + 3*score/200);
    
    
  //  var rand = Math.round(random(1,5));
  //  switch(rand) {
  //    case 1: monster.addImage(monsterImage1);
    //          break;
  //   case 2: monster.addImage(monsterImage2);
    //         break;
   //   case 3: monster.addImage(monsterImage3);
    //          break;
   //   case 4: monster.addImage(monsterImage4);
     //         break;
   //   case 5: monster.addImage(monsterImage5);
    //          break;
  //    default: break;
   // }
  //   monster.scale = 0.1;
  //   monster.lifetime = 800;
  //  monsterGroup.add(monster);
//  }
 //}
 }
