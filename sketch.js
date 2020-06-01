var ball,img,paddle;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=9;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  paddle.setCollider("rectangle",0,0,20,95);


}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.collide(edges);
 
  if(ball.bounceOff(paddle)){
     randomVelocity();
     }
  
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  
   if(ball.x > 400){
  text("GAME OVER", 180, 200)
  }
  
  drawSprites();
  
}

function randomVelocity()
{
 ball.velocityX = Math.round(random(-9,-4));
  ball.velocityY =Math.round(random(-9,-4)) ;
}

