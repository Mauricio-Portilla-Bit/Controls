//Variables del escenario
g = 1
time = 0

//Variables del objeto principal
x = 200
y = 200 
dx = 10
dy = 1
c = 0 // contador de brincos

//Variables del Enemigo 
t1 = 20
x1 = 60
y1 = 340
dx1 = 2
dy1 = 2

function setup() {
  createCanvas(400, 400);
}

function draw() {
 
    time = second()

  background(50,225,255);
  fill(250,220,10)
  ellipse(x,y,35);
  fill(10,240,100)
  rect(0,390,400,20)
  fill(1)
  textSize(60)
  text(time, 30,30,60)
  
  y = y + dy
  
  if (y < 370){
    dy = dy + g
  }else{
   dy = 0 
  }
  
  if (keyIsDown(RIGHT_ARROW)){
    x = x + dx
  }
   if (keyIsDown(LEFT_ARROW)){
    x = x - dx
  }
  
  if (x > 400){
    x = 0
  }
   if (x < 0){
    x = 400
  }
  
  // Programación del enemigo 
  fill(220,30,30)
  ellipse(x1,y1,t1)
  
  x1 = x1 + dx1// configurar a valores random cada cierto tiempo 
  y1 = y1 + dy1// configurar a random 
  
  if (x1 > 400 - t1/2)
    dx1 = -random(2,4)
  if (x1 < t1/2)
    dx1 = -random(-2,-4)
  if (y1 > 390 - t1/2 || y1 < t1/2)
    dy1 = -dy1
  
  if (abs(x-x1) < t1/2 && abs(x-x1) > 0){
    if(abs(y-y1) < t1/2 && abs(y-y1) > 0)
    levelUp()
  }
  
  if (t1 > 240){
t1 = 20
x1 = 60
y1 = 340
dx1 = 2
dy1 = 2
  }
}

  function keyPressed(){
     if (keyCode == UP_ARROW){
      dy = -15
     }
    if (keyCode == DOWN_ARROW && y < 370){
      dy = +10
    }
  }

function levelUp(){
  t1 = t1*1.2
}
