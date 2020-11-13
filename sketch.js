var speed,weight,bullet,wall,thickness;


function setup() {
  
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,10);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=80,80,80;
  bullet.shapeColor=225,225,225;
  speed=random(223,321)
  weight=random(30,52)
  bullet.velocityX=speed;

 
 
}

function draw() {
  background("black");  
  drawSprites();


if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage>10){

    wall.shapeColor=color(225,0,0);
  }

if (damage<10){
wall.shapeColor=color(0,225,0);

}



}



  bullet.display();
  wall.display();
}


