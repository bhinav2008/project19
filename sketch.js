var runner
var bg
var me
var ing
var stone
var st

function preload(){
runner =loadImage("unnamed.png")
bg=loadImage("jungle1.png")
 stone=loadImage("stone.png")
}

function setup() {

    createCanvas(600,600)
 me=createSprite(450,550,190,200)
me.addImage(runner)
me.scale=0.2
me.velocityX=-2

ing=createSprite(200,590,800,10)
ing.visible=false
st=createSprite(320,590)
st.scale=0.4
st.addImage(stone)

}


function draw() {
 background(bg)
 if(me.x < 10){
me.x=480

 }
 if(keyDown("space")){
     me.velocityY=-13
}
me.velocityY = me.velocityY + 0.8
me.collide(ing)
if (me.isTouching(st)){
    me.velocityX=0
    me.velocityY=0
    me.visble=false
}
 drawSprites()
}