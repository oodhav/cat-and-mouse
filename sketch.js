var canvas,bg;
var together;
var cat, catImg1,catImg2;
var rat, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/tomOne.png");
    catImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    catImg3= loadAnimation("images/tomFour.png");
    ratImg1=loadAnimation("images/jerryOne.png");
    ratImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    ratImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    cat = createSprite(870, 600);
    cat.addAnimation("tomSleeping", catImg1);
    cat.scale = 0.2;

    rat = createSprite(200, 600);
    rat.addAnimation("ratStanding", ratImg1);
    rat.scale = 0.15;

}

function draw() {

    background(bg);

    if(cat.x - rat.x < (cat.width - rat.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        rat.addAnimation("ratLastImage", ratImg3);
        rat.scale=0.15;
        rat.changeAnimation("ratLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
        
        rat.addAnimation("ratTeasing", ratImg2);
        rat.frameDelay = 25;
        rat.changeAnimation("ratTeasing");
    }
}