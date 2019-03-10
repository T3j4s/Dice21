"use strict";
// Author: Tejas Wadke
let random = 0,
  ran = 0,
  score1 = 0,
  score2 = 0;
let count = 0;
//DOM Element Creation
let div = document.createElement('div');
let div1 = document.createElement('div');
let div2 = document.createElement('div');
let wrapper = document.createElement('div');
let button = document.createElement('button');
let img = document.createElement('img');
let p1name = document.createElement('h1');
let p2name = document.createElement('h1');
let p1score = document.createElement('h2');
let p2score = document.createElement('h2');
let header = document.createElement('h4');
//DOM setting element attributes and properties
div.setAttribute('class', 'container');
div.appendChild(header);
header.innerText="Welcome to Game Of Dice";
div1.setAttribute('class', 'div1');
div2.setAttribute('class', 'div2');
button.innerText = "Click To Roll";
button.setAttribute('id', 'player1');
img.setAttribute('alt', 'Image Loading');
img.setAttribute('src','images/0.gif');
var name1= prompt("Enter Name of Player 1");
while(name1=="") {
  alert("Please Enter Player Name");
  name1= prompt("Enter Name of Player 1");
}
var name2=prompt("Enter Name of Player 2");
while(name2=="") {
  alert("Please Enter Player Name");
  name2= prompt("Enter Name of Player 2");
}
p1name.innerText =name1;
p2name.innerText = name2;
p1score.innerText = "Score: 0";
p2score.innerText = "Score: 0";
wrapper.setAttribute('class', 'wrapper');
//DOM Appending Child
div.appendChild(button);
div.appendChild(img);
div1.appendChild(p1name);
div1.appendChild(p1score);
p1score.innerText = "Score: " + score1;
div2.appendChild(p2name);
div2.appendChild(p2score);
p1score.innerText = "Score: " + score2;
wrapper.appendChild(div1);
wrapper.appendChild(div2);
div.appendChild(wrapper);
document.body.appendChild(div);


//Player1 Logic
function player1() {
  random = Math.floor((Math.random() * 6) + 1);
  img.src = "images/"+random.toString() + ".png";
  switch (random) {
    case 1:
      if ((score1 == 20 && score1 < 21) || (score1 < 20)) {
        score1 = score1 + 1;
        p1score.innerText = "Score: " + score1;
      } else {
        score1 = score1;
        p1score.innerText = "Score: " + score1;
      }
      break;
    case 2:
      if ((score1 == 19 && score1 < 21) || (score1 < 19)) {
        score1 = score1 + 2;
        p1score.innerText = "Score: " + score1;
      } else {
        score1 = score1;
        p1score.innerText = "Score: " + score1;
      }
      break;
    case 3:
      if ((score1 == 18 && score1 < 21) || (score1 < 18)) {
        score1 = score1 + 3;
        p1score.innerText = "Score: " + score1;
      } else {
        score1 = score1;
        p1score.innerText = "Score: " + score1;
      }
      break;
    case 4:
      if ((score1 == 17 && score1 < 21) || (score1 < 17)) {
        score1 = score1 + 4;
        p1score.innerText = "Score: " + score1;
      } else {
        score1 = score1;
        p1score.innerText = "Score: " + score1;
      }
      break;
    case 5:
      if ((score1 == 16 && score1 < 21) || (score1 < 16)) {
        score1 = score1 + 5;
        p1score.innerText = "Score: " + score1;
      } else {
        score1 = score1;
        p1score.innerText = "Score: " + score1;
      }
      break;
    case 6:
      if ((score1 == 15 && score1 < 21) || (score1 < 15)) {
        score1 = score1 + 6;
        p1score.innerText = "Score: " + score1;
      } else {
        score1 = score1;
        p1score.innerText = "Score: " + score1;
      }
  }
  count = 1;
}
//player2 Logic
function player2() {
  ran = Math.floor((Math.random() * 6) + 1);
  img.src = "images/"+ran.toString() + ".png";
  switch (ran) {
    case 1:
      if ((score2 == 20 && score2 < 21) || (score2 < 20)) {
        score2 = score2 + 1;
        p2score.innerText = "Score: " + score2;
      } else {
        score2 = score2;
        p1score.innerText = "Score: " + score2;
      }
      break;
    case 2:
      if ((score2 == 19 && score2 < 21) || (score2 < 19)) {
        score2 = score2 + 2;
        p2score.innerText = "Score: " + score2;
      } else {
        score2 = score2;
        p2score.innerText = "Score: " + score2;
      }
      break;
    case 3:
      if ((score2 == 18 && score2 < 21) || (score2 < 18)) {
        score2 = score2 + 3;
        p2score.innerText = "Score: " + score2;
      } else {
        score2 = score2;
        p2score.innerText = "Score: " + score2;
      }
      break;
    case 4:
      if ((score2 == 17 && score2 < 21) || (score2 < 17)) {
        score2 = score2 + 4;
        p2score.innerText = "Score: " + score2;
      } else {
        score2 = score2;
        p2score.innerText = "Score: " + score2;
      }
      break;
    case 5:
      if ((score2 == 16 && score2 < 21) || (score2 < 16)) {
        score2 = score2 + 5;
        p2score.innerText = "Score: " + score2;
      } else {
        score2 = score2;
        p2score.innerText = "Score: " + score2;
      }
      break;
    case 6:
      if ((score2 == 15 && score2 < 21) || (score2 < 15)) {
        score2 = score2 + 6;
        p2score.innerText = "Score: " + score2;
      } else {
        score2 = score2;
        p2score.innerText = "Score: " + score2;
      }
  }
  count = 0;

}

function winner( ) {
console.log(score1);
console.log(score2);
  if(score1 == 21 && score2 < 21 ) {
    alert(name1+" is Winner");
    button.setAttribute('disabled','disabled');
    alert("Please Refresh the Page to Restart");
  }else if(score2 == 21 && score1 < 21) {
    alert(name2+" is Winner");
    button.setAttribute('disabled','disabled');
    alert("Please Refresh the Page to Restart");
  }
}

//Main
button.addEventListener('click', function() {
  winner();
  if (count == 0) {
    player1();
  } else if (count == 1) {
    player2();
  }
});
