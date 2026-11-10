let zon = - 100
let auto1 = -100
let auto2 = -230
let wolk1 = -150
let wolk2 = 1500


let stoplichtstatus = "lime"

let auto1kleur = "#2f47ff"

let auto2kleur = "#ff0000"




function setup() {
  createCanvas(1000, 750);
}

function draw() {
  background(154, 221, 228);

textSize (20)
text (frameCount, 20,20)
if (frameCount > 900){
  frameCount = 0
}



//autoweg
fill ("gray")
rect (0,600,1000,150); 

//witte strepen weg
fill ("white")
rect (-50,675, 100, 10, 50)
rect (150,675, 100, 10, 50)
rect (350,675, 100, 10, 50)
rect (550,675, 100, 10, 50)
rect (750,675, 100, 10, 50)
rect (950,675, 100, 10, 50)


strokeWeight(1)
//berg 1
fill ("gray")
triangle (300, 180, 100, 600, 500, 600)
//berg 3
fill (97, 97, 97)
triangle (700, 250, 450, 600, 950, 600)
//berg 2
fill (176, 169, 172)
triangle (550, 250, 350, 600, 750, 600)


//wolk 1
strokeWeight (0)
fill ("white")
circle (wolk1 + 50,200,70)
circle (wolk1 + 80,200,100)
circle (wolk1 + 120,180,70)

wolk1 = wolk1 + 1.6
if (wolk1 > 1200)
{ wolk1 = -150}



//wolk 2
fill ("white")
circle (wolk2 + 60,150,70)
circle (wolk2 + 90,150,100)
circle (wolk2 + 120,160,70)

wolk2 = wolk2 - 2
if (wolk2 < -150)
{ wolk2 = 1200}


//groene rand
strokeWeight (0)
fill ("green")
rect (0,600,1000,5)
fill ("darkgreen")
rect (0,595,1000,5)


//bomenstammen boven
fill (84, 48, 48)
rect (100, 510,15,90)
fill ("green")
circle ( 109, 505, 60)
fill ("#21a021")
circle ( 101, 505, 60)

fill (84, 48, 48)
rect (210, 520,11,80)
fill ("green")
circle ( 210, 505, 60)
fill ("#21a021")
circle ( 220, 505, 60)

fill (84, 48, 48)
rect (290, 520,9,80)
fill ("green")
circle ( 290, 513, 60)
fill ("#21a021")
circle ( 299, 510, 60)

fill (84, 48, 48)
rect (550, 520,15,80)
fill ("green")
circle ( 559, 510, 70)
fill ("#21a021")
circle ( 551, 505, 70)

//stoplicht
strokeWeight (2)
fill ("gray")
rect (850, 520,5,80, 50)
rect (834, 445, 36, 120)


fill ("gray")
circle (852, 540, 30)
circle (852, 505, 30)
circle (852, 470, 30)





//lichten stoplicht
fill ("rgb(23, 53, 13)")
circle (852, 540, 30)
fill ("#432a06")
circle (852, 505, 30)
fill ("#46100d")
circle (852, 470, 30)
strokeWeight(0)

//stoplicht status met autos
if (frameCount > 0 && frameCount <400){
  fill ("lime")
  circle (852, 540, 30)
  stoplichtstatus = "lime"
}
if (frameCount > 400 && frameCount <500){ 
  fill ("orange");
circle (852, 505, 30)
  stoplichtstatus = "oranje"
}
if (frameCount > 500 && frameCount <900){ 
  fill ("red");
circle (852, 470, 30)
 stoplichtstatus = "rood"
}
// autos stopen op goede momenten


if(stoplichtstatus == "rood"){
  if(auto2 > 750){
  auto2 = auto2 + 4}

  if(auto1 > 750){
  auto1 = auto1 + 3}
}
if(stoplichtstatus == "rood"){
 if(auto1 < 740){
  auto1 = auto1 + 3}
 
  if(auto2 < 750){
  auto2 = auto2 + 4}
}

text("auto2: "+auto2);
text("auto1: "+auto1);


//auto 1 vorm
fill (auto1kleur)
rect (auto1 , 690, 100, 30,)
rect (auto1 + 10, 670, 60, 30,)
triangle (auto1 + 10, 670, auto1, 690, auto1 + 20, 690)
triangle (auto1 + 70, 670, auto1 + 70, 690, auto1+ 100, 690)
fill ("black")
circle (auto1 + 20,720,25)
circle (auto1 + 75,720,25)

//auto1 beweegt basseer op stoplicht kleur
if (stoplichtstatus == "oranje")
{ auto1 = auto1 + 1}

 if (stoplichtstatus == "lime")
{ auto1 = auto1 + 3}

//auto2 veranderd kleur als die terug komt
if  (auto1 > 1100)
{ auto1 = -100 
auto1 = -200
  auto1kleur = "#0fff17"
}


//auto2 vorm
fill (auto2kleur)
rect (auto2 , 620, 100, 30,)
rect (auto2 + 10, 600, 60, 30,)
triangle (auto2 + 10, 600, auto2, 620, auto2 + 20, 620)
triangle (auto2 + 70, 600, auto2 + 70, 620, auto2+ 100, 620)
fill ("black")
circle (auto2 + 20,650,25)
circle (auto2 + 75,650,25)

//auto2 beweegt basseer op stoplicht kleur
if (stoplichtstatus == "oranje")
{ auto2 = auto2 + 1}

 if (stoplichtstatus == "lime")
{ auto2 = auto2 + 4}

//auto2 veranderd kleur als die terug komt
if ( auto2 > 1300)
{auto2 = -200
auto2 = -150
  auto2kleur = "#0935f9"
}



//sun
fill ("orange")
circle (zon ,100,130)
fill ("yellow")
circle (zon,100,100)

zon = zon + 1
if (zon > 2100)
{ zon = -100}


//boomstammen onder
//boom 1
fill (84, 48, 48)
rect (490, 670,15,100)
fill ("green")
circle ( 492, 680, 60)
fill ("#21a021")
circle ( 501, 680, 60)

//boom 2
fill (84, 48, 48)
rect (700, 670,15,100)
fill ("#21a021")
circle ( 700, 680, 60)
fill ("green")
circle ( 707, 680, 60)



}

