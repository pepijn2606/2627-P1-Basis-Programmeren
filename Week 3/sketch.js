let player = 1


let vak1 = 0
let vak2 = 0
let vak3 = 0
let vak4 = 0
let vak5 = 0
let vak6 = 0
let vak7 = 0
let vak8 = 0
let vak9 = 0



let vak1X = 115
let vak1Y = 115

let vak2X = 275
let vak2Y = 115

let vak3X = 435
let vak3Y = 115

let vak4X = 115
let vak4Y = 275

let vak5X = 275
let vak5Y = 275

let vak6X = 435
let vak6Y = 275

let vak7X = 115
let vak7Y = 435

let vak8X = 275
let vak8Y = 435

let vak9X = 435
let vak9Y = 435

let vakSize = 150
let vakSizeRX = 200
let vakSizeRY = 100


let winnerPlayer = 0


function setup() {
  createCanvas(730, 730);
}

function draw() {
  background(220);

  fill("#04a507")
  rect(0, 0, 800, 800)
  fill("#000000")
  rect(90, 90, 520, 520, 30)

  fill("lightgray")
  //bovenste 3
  rect(435, 115, vakSize, vakSize, 10)
  //midden 3
  rect(115, 275, vakSize, vakSize, 10)
  rect(275, 275, vakSize, vakSize, 10)
  rect(435, 275, vakSize, vakSize, 10)
  //onderste 3
  rect(115, 435, vakSize, vakSize, 10)
  rect(275, 435, vakSize, vakSize, 10)
  rect(435, 435, vakSize, vakSize, 10)

  //vak1
  if (vak1 == 1) {
    fill("red")
  }
  else if (vak1 == 2) {
    fill("blue")
  }
  else {
    fill("lightgrey")
  }
  rect(vak1X, vak1Y, vakSize, vakSize, 10)
  //vak2
  if (vak2 == 1) {
    fill("red")
  }
  else if (vak2 == 2) {
    fill("blue")
  }
  else {
    fill("lightgrey")
  }
  rect(vak2X, vak2Y, vakSize, vakSize, 10)
  //vak3
  if (vak3 == 1) {
    fill("red")
  }
  else if (vak3 == 2) {
    fill("blue")
  }
  else {
    fill("lightgrey")
  }
  rect(vak3X, vak3Y, vakSize, vakSize, 10)
  //vak4
  if (vak4 == 1) {
    fill("red")
  }
  else if (vak4 == 2) {
    fill("blue")
  }
  else {
    fill("lightgrey")
  }
  rect(vak4X, vak4Y, vakSize, vakSize, 10)
  //vak5
  if (vak5 == 1) {
    fill("red")
  }
  else if (vak5 == 2) {
    fill("blue")
  }
  else {
    fill("lightgrey")
  }
  rect(vak5X, vak5Y, vakSize, vakSize, 10)
  //vak6
  if (vak6 == 1) {
    fill("red")
  }
  else if (vak6 == 2) {
    fill("blue")
  }
  else {
    fill("lightgrey")
  }
  rect(vak6X, vak6Y, vakSize, vakSize, 10)
  //vak7
  if (vak7 == 1) {
    fill("red")
  }
  else if (vak7 == 2) {
    fill("blue")
  }
  else {
    fill("lightgrey")
  }
  rect(vak7X, vak7Y, vakSize, vakSize, 10)
  //vak8
  if (vak8 == 1) {
    fill("red")
  }
  else if (vak8 == 2) {
    fill("blue")
  }
  else {
    fill("lightgrey")
  }
  rect(vak8X, vak8Y, vakSize, vakSize, 10)
  //vak9
  if (vak9 == 1) {
    fill("red")
  }
  else if (vak9 == 2) {
    fill("blue")
  }
  else {
    fill("lightgrey")
  }
  rect(vak9X, vak9Y, vakSize, vakSize, 10)

//restart button
  fill("#c4984c")
  rect(250, 620, 200, 100, 10)

  fill("black")
  textSize(50)
  text("Restart", 268, 685)




  fill ("#340000")
  circle (280,50,50)
   fill ("#02003f")
  circle (420,50,50)


  if(player == 1){

     fill ("red")
     circle (280,50,50)

  }

  else if(player == 2){
    fill ("blue")
   circle (420,50,50)
  }






  winner()

}
//function player veranderen
function changePlayer() {
  player = player + 1
  if (player > 2) {
    player = 1
  }
}

//mouse dinges
function mousePressed() {

  
if (winnerPlayer == 0){


  if (mouseX > vak1X && mouseX < vak1X + vakSize) {
    if (mouseY > vak1Y && mouseY < vak1Y + vakSize) {
      if (vak1 == 0) {
        vak1 = player
        changePlayer();
      }
    }
  }

  if (mouseX > vak2X && mouseX < vak2X + vakSize) {
    if (mouseY > vak2Y && mouseY < vak2Y + vakSize) {
      if (vak2 == 0) {
        vak2 = player
        changePlayer();
      }
    }
  }

  if (mouseX > vak3X && mouseX < vak3X + vakSize) {
    if (mouseY > vak3Y && mouseY < vak3Y + vakSize) {
      if (vak3 == 0) {
        vak3 = player
        changePlayer();
      }
    }
  }

  if (mouseX > vak4X && mouseX < vak4X + vakSize) {
    if (mouseY > vak4Y && mouseY < vak4Y + vakSize) {
      if (vak4 == 0) {
        vak4 = player
        changePlayer();
      }
    }
  }
  if (mouseX > vak5X && mouseX < vak5X + vakSize) {
    if (mouseY > vak5Y && mouseY < vak5Y + vakSize) {
      if (vak5 == 0) {
        vak5 = player
        changePlayer();
      }
    }
  }
  if (mouseX > vak5X && mouseX < vak5X + vakSize) {
    if (mouseY > vak5Y && mouseY < vak5Y + vakSize) {
      if (vak5 == 0) {
        vak5 = player
        changePlayer();
      }
    }
  }
  if (mouseX > vak6X && mouseX < vak6X + vakSize) {
    if (mouseY > vak6Y && mouseY < vak6Y + vakSize) {
      if (vak6 == 0) {
        vak6 = player
        changePlayer();
      }
    }
  }
  if (mouseX > vak7X && mouseX < vak7X + vakSize) {
    if (mouseY > vak7Y && mouseY < vak7Y + vakSize) {
      if (vak7 == 0) {
        vak7 = player
        changePlayer();
      }
    }
  }
  if (mouseX > vak8X && mouseX < vak8X + vakSize) {
    if (mouseY > vak8Y && mouseY < vak8Y + vakSize) {
      if (vak8 == 0) {
        vak8 = player
        changePlayer();
      }
    }
  }
  if (mouseX > vak9X && mouseX < vak9X + vakSize) {
    if (mouseY > vak9Y && mouseY < vak9Y + vakSize) {
      if (vak9 == 0) {
        vak9 = player
        changePlayer();
      }
    }
  }
} 
  // restart knop
  if (mouseX > 250 && mouseX < 250 + vakSizeRX) {
    if (mouseY > 620 && mouseY < 620 + vakSizeRY) {
      resetGame();    i
    }
  }
  
}

function resetGame()
{
  vak1 = 0
  vak2 = 0
  vak3 = 0
  vak4 = 0
  vak5 = 0
  vak6 = 0
  vak7 = 0
  vak8 = 0
  vak9 = 0
  winnerPlayer = 0

}

// als iemand gewonnen heeft vang af dat ze niet meer op het bord mogen klikken


function winner() {




  //red
  if (vak1 == 1 && vak2 == 1 && vak3 == 1) {
  winnerPlayer = 1
    fill ("#c4984c")
  rect (225,300,250,100)
  fill ("red")
  textSize (50)
  text ("Red Wins!",238,365)
  }
  if (vak4 == 1 && vak5 == 1 && vak6 == 1) {
  winnerPlayer = 1
      fill ("#c4984c")
  rect (225,300,250,100)
  fill ("red")
  textSize (50)
  text ("Red Wins!",238,365)
  }
  if (vak7 == 1 && vak8 == 1 && vak9 == 1) {
    winnerPlayer = 1
      fill ("#c4984c")
  rect (225,300,250,100)
  fill ("red")
  textSize (50)
  text ("Red Wins!",238,365)
  }
  if (vak1 == 1 && vak4 == 1 && vak7 == 1) {
    winnerPlayer = 1
      fill ("#c4984c")
  rect (225,300,250,100)
  fill ("red")
  textSize (50)
  text ("Red Wins!",238,365)
  }
  if (vak2 == 1 && vak5 == 1 && vak8 == 1) {
    winnerPlayer = 1
      fill ("#c4984c")
  rect (225,300,250,100)
  fill ("red")
  textSize (50)
  text ("Red Wins!",238,365)
  }
  if (vak3 == 1 && vak6 == 1 && vak9 == 1) {
    winnerPlayer = 1
      fill ("#c4984c")
  rect (225,300,250,100)
  fill ("red")
  textSize (50)
  text ("Red Wins!",238,365)
  }
  if (vak1 == 1 && vak5 == 1 && vak9 == 1) {
    winnerPlayer = 1
      fill ("#c4984c")
  rect (225,300,250,100)
  fill ("red")
  textSize (50)
  text ("Red Wins!",238,365)
  }
  if (vak3 == 1 && vak5 == 1 && vak7 == 1) {
    winnerPlayer = 1
      fill ("#c4984c")
  rect (225,300,250,100)
  fill ("red")
  textSize (50)
  text ("Red Wins!",238,365)
  }




//blue winner

if (vak1 == 2 && vak2 == 2 && vak3 == 2) {
  winnerPlayer = 2
      fill ("#c4984c")
  rect (225,300,250,100)
  fill ("blue")
  textSize (50)
  text ("Blue Wins!",232,365)
}
if (vak4 == 2 && vak5 == 2 && vak6 == 2) {
   winnerPlayer = 2
      fill ("#c4984c")
  rect (225,300,250,100)
  fill ("blue")
  textSize (50)
  text ("Blue Wins!",232,365)
}
if (vak7 == 2 && vak8 == 2 && vak9 == 2) {
   winnerPlayer = 2
      fill ("#c4984c")
  rect (225,300,250,100)
  fill ("blue")
  textSize (50)
  text ("Blue Wins!",232,365)
}
if (vak1 == 2 && vak4 == 2 && vak7 == 2) {
   winnerPlayer = 2
      fill ("#c4984c")
  rect (225,300,250,100)
  fill ("blue")
  textSize (50)
  text ("Blue Wins!",232,365)
}
if (vak2 == 2 && vak5 == 2 && vak8 == 2) {
   winnerPlayer = 2
      fill ("#c4984c")
  rect (225,300,250,100)
  fill ("blue")
  textSize (50)
  text ("Blue Wins!",232,365)
}
if (vak3 == 2 && vak6 == 2 && vak9 == 2) {
   winnerPlayer = 2
      fill ("#c4984c")
  rect (225,300,250,100)
  fill ("blue")
  textSize (50)
  text ("Blue Wins!",232,365)
}
if (vak1 == 2 && vak5 == 2 && vak9 == 2) {
   winnerPlayer = 2
      fill ("#c4984c")
  rect (225,300,250,100)
  fill ("blue")
  textSize (50)
  text ("Blue Wins!",232,365)
}
if (vak3 == 2 && vak5 == 2 && vak7 == 2) {
   winnerPlayer = 2
      fill ("#c4984c")
  rect (225,300,250,100)
  fill ("blue")
  textSize (50)
  text ("Blue Wins!",232,365)

}


if(vak1 != 0 && vak2 != 0 && vak3 != 0 && vak4 != 0 && 
  vak5 != 0 && vak6 != 0 && vak7 != 0 && vak8 != 0 && vak9 != 0 && 
  ( winnerPlayer == 0 || winnerPlayer == 3))
{
  winnerPlayer = 3
  fill ("#c4984c")
  rect (225,300,250,100)
  fill ("White")
  textSize (50)
  text ("Draw!",275,365)
}

}
