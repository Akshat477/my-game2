const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas, backgroundImage;

var gameState = 0;
var health;
var ball;

var player1,player2;

var bullet;
var bulletImg;

var background;

var ground;

function preload(){
backgroundImg = loadImage("images/Background.JPG")
bulletImg = loadImage("images/bullet.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  health = 100

  
  engine = Engine.create();
    world = engine.world;
  player1 = new Player(70,100,100,100,"images/facing right.png")
  player2 = new Player(1000,200,100,100,"images/facing left.png")
  ground = new Ground(600,700,1100,20)
  var bulletOptions = {
    restitution : 0.1,
    friction : 0.1,

  }
  bullet = Bodies.rectangle(10,20,15,15,bulletOptions)
  World.add(world,bullet)
  console.log(bullet)
  attack = new Attacking(bullet,{x:140 , y:600})
  


}
  

function draw(){
  background(backgroundImg);
  Engine.update(engine);
player1.display()
ground.display()
player2.display()
attack.display()



rect(bullet.position.x,bullet.position.y,15,15)


}

function keyPressed(){
  if (keyCode === 32 ){
    Matter.Body.applyForce(bullet,bullet.position,{x:130,y:-145});
  }



}
