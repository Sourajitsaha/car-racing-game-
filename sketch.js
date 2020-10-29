var canvas, backgroundImage,backgroundImagefront;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var trackimage, car1image, car2image, car3image, car4image,groundimage;

function preload(){
  trackimage = loadImage("images/track.jpg");
  car1image =  loadImage("images/car1.png");
  car2image =  loadImage("images/car2.png");
  car3image =  loadImage("images/car3.png");
  car4image =  loadImage("images/car4.png");
  groundimage= loadImage("images/ground.png");
  backgroundimagefront=loadImage("images/form background image.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  background(backgroundimagefront);
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
game.end();
  }
  if(gameState===3){
    form.displayResult();
    
  }
}
