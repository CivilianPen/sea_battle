let s;
let f;
let scl=20;
let lose = false;
let res = 0
function preload() {

}
function setup() {
  createCanvas(600, 600);
  s=new Snake();
  f=new Food();
  frameRate(9);
}
function draw() {
  background(0);
   text("score",500,10,textSize(20),fill(255));
   text( f.total ,565,10,textSize(20),fill(255));
  s.end();
  s.update();
  s.show();
  f.show();
  f.update();
  if(lose ==true){
        text("press space",240,340,textSize(20),fill(255));
    }
}
function keyTyped(){
if(lose == false){
  if(key==='w'){
    s.dir(0,-1);
  }else if(key==='s'){
    s.dir(0,1);
  }  else if(key==='a'){
    s.dir(-1,0);
  }else if(key==='d'){
    s.dir(1,0);
    }
  }
}
class Food{
  constructor(){
    let k=random(width-scl);
    let l=random(height-scl);
    this.x=k-(k%scl);
    this.y= l-(l% scl);
    this.total=0;
  }
  show(){
    fill(255,0,0);
    rect(this.x,this.y,scl,scl);
  }
  update(){
      if(this.x==s.x && this.y==s.y){
      this.total++;
      let k=random(width-scl);
      let l=random(height-scl);
      this.x=k-(k%scl);
      this.y= l-(l% scl);
    }
  }
}
class Snake{
  constructor(){
  if(lose == false){
  this.x=0;
    this.y=0;
  }
    this.xspeed=0;
    this.yspeed=0;
    this.tail=[];
  }
  dir(x,y){
    this.xspeed=x*scl;
    this.yspeed=y*scl;

  }
  end(){
    for(var i=0; i<this.tail.length;i++){
      var d=dist(this.x,this.y, this.tail[i].x,this.tail[i].y);
      if(d<1){
        f.total=0;
        this.tail=[];
        lose = true
      }
    }
  }
  update(){
    if(lose == false){
    for(var i=0; i<this.tail.length-1;i++){
      this.tail[i]=this.tail[i+1];
    }
      this.tail[f.total-1]=createVector(this.x,this.y);
      this.x=this.x+this.xspeed;
      this.y=this.y+this.yspeed;
      if(this.x+10 >= 600 ){
        this.x = 0
      }
      if( this.x+10 <= 0){
        this.x = 600
      }
      if(this.y+10 >= 600)
        this.y = 0
      }
      if(this.y+10 <= 0){
        this.y = 600
      }
    }
  show(){
    fill(255);
    for(var i=0; i<this.tail.length; i++){
      rect(this.tail[i].x,this.tail[i].y,scl,scl);
    }
      rect(this.x,this.y,scl,scl);
    if(keyIsDown(32) && lose == true){
      lose = false
      this.x =0
      this.y =0
      let k=random(width-scl);
      let l=random(height-scl);
      f.x=k-(k%scl);
      f.y= l-(l% scl);
    }
  }
}

