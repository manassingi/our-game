
var bgImage,bg,dSpriteImgStanding, dSpriteImg,dSprite,nSprite,gSprite

function preload(){
bgImage= loadImage("bg.png");
dSpriteImg= loadAnimation("Doraemon/d1.png","Doraemon/d2.png");
dSpriteImgStanding=loadAnimation("Doraemon/d3.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  // bg=createSprite(windowWidth-700,windowHeight-400);
  // bg.addImage(bgImage);
  // bg.scale=0.7
  dSprite =createSprite(windowWidth-400,windowHeight-80);
  dSprite.addAnimation("dspite1",dSpriteImg);
  dSprite.addAnimation("dspite",dSpriteImgStanding);
  dSprite.scale=4;
  nSprite=createSprite(400, 200, 50, 50);
  gSprite=createSprite(400, 200, 50, 50)
     
}

function draw() {
  background(bgImage);
  drawSprites();
  
   
   {if(frameRate==10)
    { dSprite.changeAnimation("dspite",dSpriteImgStanding);}
else if(frameRate!==10) {  dSprite.changeAnimation( "dspite1",dSpriteImg);}
}
}