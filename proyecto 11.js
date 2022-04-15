var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
//imagnes del boy y path
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Mover el fondo
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//crear sprite de niño corriendo
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
// leftBoundary.visible = false;

//crear un sprite y que el suelo sea visible
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}
//funcion de dibujar y que el suelo se mueva  4
function draw() {
  background(0);
  path.velocityY = 4;
  //para que el boy se mueva con el mause
  boy.x = World.mouseX;
  //crear edges y colicion xon objetos
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para reiniciar el fondo
//Reinician el fondo aparte de que pasa de los 400 cordenadas
  if(path.y > 400 ){
    path.y = height/2;
  }

  if(path.y > 400 ){
   
  path.y = height/2;
  }

  if(path.y > 400 ){
path.y = height/2;}

if(path.y > 400 ){path.y = height/2;}
  //mostrar las imganes
  drawSprites();
}
