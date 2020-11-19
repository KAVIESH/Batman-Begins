var Engine = Matter.Engine;
 const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;
 

var plinkos = [];
var particles=[]

//var score=2500;
//var border;

function preload(){

  img=loadImage('js/ddss.png');
}


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  //ground = new Ground(width/2,height,width,20);
  //border = createSprite(360,706,900,10);
  //border.visible=true;
 
}

  

function draw() {
  background("black");
  
  Engine.update(engine);
 
  //function mousePressed(){
  //if(gameState=="start"){
    
    
    
  //count++
  //}}}}

   
    particles.push(new Particle(random(width), random(-500, -50), 4));
    plinkos.push(new Plinko(340,700))
     //score++;
     //gameState=1;
   

  
    //if (particles.body.position.x < 300){
     //score= score+500;}
     //if (particles.body.position.y> 760){
      //score= score+500;
     //}
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   
   image(img,230,600)
   
}
