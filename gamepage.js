// random value generated
var y = Math.floor(Math.random() * 10 + 1);
  
// counting the number of guesses
var playername = localStorage.getItem("User_Name");
var guess = 1;
// made for correct Guess


  
// function for number guessed by user
function submit()
{
var x = document.getElementById("guessField").value;

if(x == y)
{
    alert("CONGRATULATIONS!!!"+playername+"  YOU GUESSED IT RIGHT IN"
            + guess + "GUESS ");
            guess = 1;
}
else if(x > y) /* if guessed number is greater
                than actual number*/
{
    guess++;
    alert("OPPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OPPS SORRY!! TRY A GREATER NUMBER")
}
}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}