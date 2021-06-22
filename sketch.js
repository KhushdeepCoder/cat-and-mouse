var bgImg;
var tom , jerry , tom1 , jerry1 ,tomimg2 ,jerryimg2 ;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    tomimg1 = loadAnimation("images/cat1.png");
    jerryimg1 = loadAnimation("images/mouse1.png");
    tomimg2 = loadAnimation("images/cat2.png" , "images/cat3.png");
    jerryimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    tomimg3 = loadAnimation("images/cat4.png");
    jerryimg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    jerry= createSprite(255,745);
    jerry.addAnimation("jerrystanding",jerryimg1);
    jerry.scale=0.2;

    tom = createSprite(875,745);
    tom.addAnimation("tomsleeping",tomimg1);
    tom.scale=0.2;
   }

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

   // console.log(tom.width);
   // console.log(jerry.width);

    if (tom.x - jerry.x < (tom.width - jerry.width)/2){

        tom.velocityX=0;
        tom.addAnimation("tomlastimg",tomimg3);
        tom.changeAnimation("tomlastimg");

        jerry.addAnimation("jerrylastimg",jerryimg3);
        jerry.changeAnimation("jerrylastimg");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


  if (keyCode === LEFT_ARROW){  

    tom.velocityX=-5;

    tom.addAnimation("tomRunning",tomimg2);
    tom.changeAnimation("tomRunning");

    jerry.addAnimation("jerryteasing",jerryimg2);
    jerry.changeAnimation("jerryteasing");

    jerry.framedelay=25;
    
 }

}
