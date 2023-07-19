var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);


var radomNumber2 = Math.random();
radomNumber2 = Math.floor(radomNumber2 * 6)+1;

var randomDiceImage1 = "dice" + radomNumber2 + ".png"
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage1);

var heading = document.querySelector("h1");
if(randomNumber1 > radomNumber2){
    heading.innerHTML = "Player 1 Wins"
}
else if(radomNumber2 > randomNumber1){
    heading.innerHTML = "Player 2 Wins"
}
else{
    heading.innerHTML = "Draw"
}