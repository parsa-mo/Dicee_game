var randomNumber1 = 0;
randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var dice1 = document.querySelector(".img1");
var rand_dice1_img = dice1.setAttribute(
  "src",
  "images/dice" + randomNumber1 + ".png"
);

var randomNumber2 = 0;
randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dice2 = document.querySelector(".img2");
var rand_dice2_img = dice2.setAttribute(
  "src",
  "images/dice" + randomNumber2 + ".png"
);

var title = document.querySelector(".container h1");

if (randomNumber1 > randomNumber2) {
  title.innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  title.innerHTML = "Player 2 Wins!";
} else {
  title.innerHTML = "Draw!";
}
