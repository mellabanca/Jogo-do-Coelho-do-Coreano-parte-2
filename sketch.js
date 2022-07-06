const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var bunny;
var minkV1;
var linguadegato;
var aculpaedobolsonaro;
var aculpaedobolsonaroawk;
var aculpaedobolsonarofull;
var minkV2;
var laka;
var ovoazul;
var minkV3;
var budhadespertada;
var onzenabanheira;
var bob;
var maxquandoperdeuaon;
var naomeestressa, quebrandoossos, criseexistencial, sucrilhosebomdemais, criancaquandochorapqobalaosaiuvoando;
var sacolavoadora;
var amemamusicaparou;
var budhadespertadaawk;
var budhadespertadafull;
var string;
var stringawk;

function preload(){
  minkV2 = loadImage("Rabbit-01.png");
  laka = loadImage("fabrica.jpg");
  ovoazul = loadImage("Ovo.png");
  onzenabanheira = loadAnimation("blink_1.png","blink_2.png","blink_3.png");
  bob = loadAnimation("eat_0.png","eat_1.png","eat_2.png","eat_3.png","eat_4.png");
  maxquandoperdeuaon = loadAnimation("sad_1.png","sad_2.png","sad_3.png");
  naomeestressa = loadSound("sound1.mp3");
  quebrandoossos = loadSound("rope_cut.mp3");
  criseexistencial = loadSound("sad.wav");
  sucrilhosebomdemais = loadSound("eating_sound.mp3");
  criancaquandochorapqobalaosaiuvoando = loadSound("air.wav");
  onzenabanheira.playing = true;
  bob.playing = true;
  maxquandoperdeuaon.playing = true;
  maxquandoperdeuaon.looping = false;
  bob.looping = false;
}

function setup() 
{
  var indentificadordevirus = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(indentificadordevirus){
    canW = displayWidth;
    canH = displayHeight;
    createCanvas(displayWidth+80, displayHeight);
  } else {
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(windowWidth, windowHeight);
  }
  naomeestressa.play();
  naomeestressa.setVolume(0.6);
  engine = Engine.create();
  world = engine.world;
  onzenabanheira.frameDelay = 15;
  bob.frameDelay = 15;
  bunny = new Bunny(200, canH, 600, 20);
  minkV1 = new Rope(8, {
  x:40,
  y:30
  });
  string= new Rope(7, {
  x:370,
  y:40
  });
  stringawk= new Rope(4, {
  x:400,
  y:225
  });
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50)
  linguadegato = Bodies.circle(300,300,15);
  Matter.Composite.add(minkV1.body, linguadegato);
  aculpaedobolsonaro= new Coelhopretoextremamentepreto(minkV1, linguadegato);
  aculpaedobolsonaroawk= new Coelhopretoextremamentepreto(string, linguadegato);
  aculpaedobolsonarofull= new Coelhopretoextremamentepreto(stringawk, linguadegato);
  minkV3 = createSprite(170,canH-80,100,100);
  minkV3.addImage (minkV2);
  minkV3.scale = 0.2;
  minkV3.addAnimation("piscando", onzenabanheira);
  minkV3.addAnimation("comendo", bob);
  minkV3.addAnimation("maxquandoperdeuaon", maxquandoperdeuaon);
  minkV3.changeAnimation("piscando");
  budhadespertada = createImg("cut_button.png");
  budhadespertada.position(20, 30);
  budhadespertada.size(50, 50);
  budhadespertada.mouseClicked(fenix);
  budhadespertadaawk = createImg("cut_button.png");
  budhadespertadaawk.position(330, 35);
  budhadespertadaawk.size(50, 50);
  budhadespertadaawk.mouseClicked(fenixawk);
  budhadespertadafull = createImg("cut_button.png");
  budhadespertadafull.position(360, 200);
  budhadespertadafull.size(50, 50);
  budhadespertadafull.mouseClicked(fenixfull);
  amemamusicaparou = createImg("mute.png");
  amemamusicaparou.position(450, 20);
  amemamusicaparou.size(50, 50);
  amemamusicaparou.mouseClicked(climachuvoso);
}

function draw() 
{
  background(51);
  image(laka,width/2,height/2,displayWidth+80,displayHeight);
  Engine.update(engine);
  minkV1.showdaoliviarodrigo();
  string.showdaoliviarodrigo();
  stringawk.showdaoliviarodrigo();
  bunny.eletric();
  if(linguadegato !== null){
  image(ovoazul,linguadegato.position.x, linguadegato.position.y, 40,55);
  }
  if(maxelucas(linguadegato,minkV3)=== true){
  minkV3.changeAnimation("comendo");
  sucrilhosebomdemais.play();
  sucrilhosebomdemais.setVolume(10);
  }
  if(linguadegato !== null && linguadegato.position.y >= height-70){
  minkV3.changeAnimation("maxquandoperdeuaon");
  linguadegato = null;
  naomeestressa.stop();
  criseexistencial.play();
  criseexistencial.setVolume(0.9);
  }
  drawSprites();
}

function fenix(){
minkV1.aarteeumaexplosao();
aculpaedobolsonaro.budha();
aculpaedobolsonaro = null;
quebrandoossos.play();
quebrandoossos.setVolume(5);
}

function fenixawk(){
string.aarteeumaexplosao();
aculpaedobolsonaroawk.budha();
aculpaedobolsonaroawk = null;
quebrandoossos.play();
quebrandoossos.setVolume(5);
} 

function fenixfull(){
stringawk.aarteeumaexplosao();
aculpaedobolsonarofull.budha();
aculpaedobolsonarofull = null;
quebrandoossos.play();
quebrandoossos.setVolume(5);
} 
  

function maxelucas(body,sprite){
if(body !== null){
var eueainternet = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
if(eueainternet <= 80){
World.remove(engine.world, linguadegato);
linguadegato = null;
return true;
}else{
return false;
}
}
}

function climaensolarado(){
  Matter.Body.applyForce(linguadegato, {x:0, y:0}, {x:0.01, y:0});
  criancaquandochorapqobalaosaiuvoando.play();
  criancaquandochorapqobalaosaiuvoando.setVolume(0.3);
}

function climachuvoso(){
  if(naomeestressa.isPlaying()){
  naomeestressa.stop();
  }else{
  naomeestressa.play();
  }
}