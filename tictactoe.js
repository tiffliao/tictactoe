var count = 0; 
var player = document.getElementById("player-turn");


var row0 = document.getElementById("row0");
var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");



/*Creates the board for the game */
for (var i = 0; i<9; i++) {
  var elem = document.createElement('button');
  elem.id = "button" + i;
  elem.className = "onebutton";
  elem.addEventListener("click", getOneTurn(elem), false);
  if (i<3) {
    row0.appendChild(elem);
  } else if (i<6) {
    row1.appendChild(elem);
  } else {
    row2.appendChild(elem);
  }
}

/*tag buttons in the same column with the same class */

document.getElementById("button0").className = "column0 diagonal0";
document.getElementById("button3").className = "column0";
document.getElementById("button6").className = "column0 diagonal1";

document.getElementById("button1").className = "column1";
document.getElementById("button4").className = "column1 diagonal0 diagonal1";
document.getElementById("button7").className = "column1";

document.getElementById("button2").className = "column2 diagonal1";
document.getElementById("button5").className = "column2";
document.getElementById("button8").className = "column2 diagonal0";

/*tag buttons in the same diagonal with the same class */
// document.getElementById("button0").className = "diagonal0";
// document.getElementById("button4").className = "diagonal0";
// document.getElementById("button8").className = "diagonal0";

// document.getElementById("button2").className = "diagonal1";
// document.getElementById("button4").className = "diagonal1";
// document.getElementById("button6").className = "diagonal1";



/* creates restart game button */
var restart = document.getElementById("restart");
var restart_button = document.createElement("button");
restart_button.innerHTML = "Restart Game";
restart_button.addEventListener("click", restartGame, false);
restart.appendChild(restart_button);


/* one move in tic tac toe */
function oneturn(button_clicked){
  if (count%2==0){
  button_clicked.innerHTML = "X";
  button_clicked.style.backgroundColor = "red";
  player.innerHTML = "Blue";
  } else {
    button_clicked.innerHTML = "O";
    button_clicked.style.backgroundColor = "blue";
    player.innerHTML = "Red";
  }
  count++;
  button_clicked.disabled = true;
  didPlayerWin();
}

function getOneTurn(button_clicked){
  return function () {
    oneturn(button_clicked);
  }
}




/*restarts the game *
length -1 because last button in set is the restart game button
*/
function restartGame(){
  count = 0;
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length-1; i++) {
    var button = buttons[i];
    button.innerHTML = "";
    button.style.backgroundColor = "white";
    button.disabled = false;
  }
}

function isX(buttonId){
  return buttonId.innerHTML === "X";
}

function isO(buttonId){
  return buttonId.innerHTML === "O";
}

function didPlayerWin() {


  //check for diagonal win
  for (var n = 0; n<2; n++){
    let diagonalofbuttons = document.getElementsByClassName("diagonal"+n);
    let count = 0;
    for (var p = 0; p < diagonalofbuttons.length; p++){
      if (isX(diagonalofbuttons[p])) {
        count++;
      } else if (isO(diagonalofbuttons[p])) {
        count--;
      }
    }
    if (count===3){
      alert("X won");
      break;
    } else if (count === -3){
       alert("O won");
      break;
    } else {
      break;
    }
    }

  //check for horizontal win
  for (var j = 0; j<3; j++) {
  let rowofbuttons = document.querySelectorAll("#row"+j+ " button");
    let count = 0;
    for (var i = 0; i < rowofbuttons.length; i++){
      if (isX(rowofbuttons[i])) {
        count++;
      } else if (isO(rowofbuttons[i])) {
        count--;
      }
    }
    if (count===3){
      alert("X won");
      break;
    } else if (count === -3){
       alert("O won");
      break;
    }
  }

  //check for vertical win
  for (var k = 0; k<3; k++){
    let columnofbuttons = document.getElementsByClassName("column"+k)
    let count = 0;
    for (var m = 0; m < columnofbuttons.length; m++){
      if (isX(columnofbuttons[m])) {
        count++;
      } else if (isO(rowofbuttons[m])) {
        count--;
      }
    }
    if (count===3){
      alert("X won");
      break;
    } else if (count === -3){
       alert("O won");
      break;
    }
    }


  }







 // var row2buttons = document.querySelectorAll("#row2 button");
 //  if (row2buttons.forEach(isO) || row2buttons.forEach(isX)) {
 //    return true;
 //  }
 // var row3buttons = document.querySelectorAll("#row3 button");
 //  if (row3buttons.forEach(isO) || row3buttons.forEach(isX)) {
 //    return true;
 //  }
 //  return false;
