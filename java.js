var compMove = [];
var answers = [];
var rounds = 0;
var hard = true;
var lastChance = false;
var button = document.querySelector("button");
var randomColor = Math.ceil(Math.random() * 6);
var colorsArray = ["pink", "green", "yellow", "blue", "orange", "purple"];
//variables

var addColor = function(arr) {
  var colorsArray = ["pink", "green", "yellow", "blue", "orange", "purple"];
  return arr.push(colorsArray[Math.floor(Math.random() * colorsArray.length)]);
}; //add colour buttons for sequence

var flashLights = function(arr) {
  console.log("flashLights");
  var i = 0;
  var interval = setInterval(function() {
    $("#" + arr[i]).fadeTo("slow", 0).fadeTo("slow", 1);
    console.log("fading");
    //$("#sound-" + arr[i])[0].play();
    i++;
    if (i >= arr.length) {
      clearInterval(interval);
    }
  }, 1500);
}; // button flashes

var colorChange = function(arr) {

  return colorsArray[Math.floor(Math.random() * colorsArray.length)];
} //colour change function


$("#start").click(function() {
  playerTurn();
}); //start button

$("#reset").click(function() {
  console.log("reset clicked");
  resetGame();
}); //reset button

var resetAnswers = function() {
  answers = [];
}; //reset answers

var updateRounds = function() {
  rounds++
 if (hard === false){
  randomColor()
}
  $("#show-rounds").html(rounds);
}; //update rounds

var resetGame = function() {
  console.log("resetGame");
  rounds = 0;
  compMove = [];
  if (hard === false) {
    lastChance = true;
  } //reset game
  resetAnswers();
  $("#show-rounds").html(rounds);
}; //reset answers

var playerTurn = function() {
  $("#mode").click(function() {
    return false;
  }); //players turn
  
    if (rounds === 20) { // if statement
    alert("Congrats, You Win!"); 
    resetGame();
  } //won the game

  updateRounds();
  addColor(compMove);
  console.log("compMove", compMove);
  flashLights(compMove);

  $(".button").off("click").on("click", function() {
    //$("#sound-" + $(this).attr("id"))[0].play();
    answers.push($(this).attr("id"));
    console.log("answers", answers);

    for (var i = 0; i < answers.length; i++) {

      if (JSON.stringify(compMove) === JSON.stringify(answers)) { //if statement
        resetAnswers();
        playerTurn();
        break; //next level

      }

      if (answers[i] !== compMove[i]) { // if statement
        if (hard === false && lastChance === true) {
          lastChance = false;
          alert("You have 1 more try!");
          resetAnswers();
          flashLights(compMove);
        } //last chance

        else if ( //else if statement
          answers[i] !== compMove[i] && lastChance === false) {
          alert("Whoops, You have lost the game!");
          resetGame();
          break; //lost the game
        }
      }
    }
  });
};

$("#mode").click(function() {
  switch (hard) {
    case true:
      hard = false;
      randomColor();
      lastChance = true;
      $("#mode").html("Mode: Hard");
      break;

    case false:
      hard = true;
      lastChance = false;
      $("#mode").html("Mode: Medium");
     document.getElementById('orange').style.backgroundColor = "orange";
     document.getElementById('purple').style.backgroundColor = "purple";
     document.getElementById('blue').style.backgroundColor = "blue";
     document.getElementById('yellow').style.backgroundColor = "yellow";
     document.getElementById('green').style.backgroundColor = "green";
     document.getElementById('pink').style.backgroundColor = "pink";
      break;
  } //switch modes - hard or relaxed
});

//hard mode

var randomColor = function(arr) {
 var ID;
 var colours = ['pink', 'purple', 'yellow', 'orange', 'blue', 'green'];
 var randomColours = ['pink', 'purple', 'yellow', 'orange', 'blue', 'green'];
 for (ID = 0; ID < colours.length; ++ID) {
  var rand = randomColours[Math.floor(Math.random() * randomColours.length)];
  document.getElementById(colours[ID]).style.backgroundColor = rand; //random colour changes (new level)
  randomColours.splice(randomColours.indexOf(rand),1)
 }
}

//coloured buttons changing positons

console.log("loaded");

//end of Java Script