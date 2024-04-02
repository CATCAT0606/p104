// generation of random value
var y = Math.floor(Math.random * 10 +1);
var guess = 1;
function submit(){
document.getElementById("guessField").value;
}
var x = document.getElementById("guessField").value;
// count of attempts
if(x==y){
    alert("Congratulations, "+ player_name + "You guessed the answer in"+ guess + "guesses")
}
else if(x>y){
    guess++
    alert("Try a smaller number")
}
else{
    guess++
    alert("try a greater number")
}

function playAgain(){
    y = Math.floor(Math.random * 10 +1);
}
// until hit
  
// function for the number sent by the user