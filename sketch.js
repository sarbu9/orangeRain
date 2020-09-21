let rain = [];
let orange;

function preload(){
  orange = loadImage("orange.png");
}
function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 300; i++){
    rain[i] = new Rain();
  }
}
function draw() {
  background(100, 200, 100);
  for(let i = 0; i < rain.length; i++){
    rain[i].show();
    rain[i].move();
    rain[i].restart();
  }
}

class Rain{
  constructor(){
    this.x = random(width);
    this.y = random(height, -800);
    this.speed = random(1,4);
  }
  show(){
    image(orange, this.x, this.y, 50, 50);
  }
  move(){
    this.y += this.speed;
  }
  restart(){
    if(this.y >= height){
      this.y = -800;
    }
  }
}