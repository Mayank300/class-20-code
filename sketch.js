 
var car1,car2,car3,wall;
var speed,weight;

speed  = random (55,90);
weight = random (400,1500);

function setup() {
  createCanvas(800,400);

  car1 = createSprite(50,250, 40, 40);
  car1.shapeColor="black";
 // car1.velocityX = speed;
  
  car2 = createSprite(50,200, 40, 40);
  car2.shapeColor="blue";
  //car2.velocityX = speed;

  car3 = createSprite(50,150, 40, 40);
  car3.shapeColor="green";
  //car3.velocityX = speed;
 
  wall = createSprite(700,200, 60, height/2);
  wall.shapeColor = "red";

}

function draw() {
  background(255,255,255); 
  if(wall.X - car1.X < (car1.width + wall.width) 
  && wall.X - car2.X < (car2.width + wall.width) 
  && wall.X - car3.X < (car3.width + wall.width))
  {
   car.velocityX = 0;
   var deformation = 0.5 * weight * speed * speed/ 22509;

    if(deformation > 180)
    {
      car1.shapeColor = color(255,0,0);
      car2.shapeColor = color(255,0,0);
      car3.shapeColor = color(255,0,0);
    }

     if(deformation < 180 && deformation > 100)
     {
       car1.shapeColor = color(230,230,0);
       car2.shapeColor = color(230,230,0);
       car3.shapeColor = color(230,230,0);

     }

     if(deformation < 100)
     {
      car1.shapeColor = color(0,255,0);
      car2.shapeColor = color(0,255,0);
      car3.shapeColor = color(0,255,0);

     }
  }
  
  drawSprites();
}