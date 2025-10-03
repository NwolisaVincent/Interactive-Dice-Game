dice_value_1 = Math.trunc(Math.random() * 6 + 1);
dice_value_2 = Math.trunc(Math.random() * 6 + 1);

// for player 1
if (dice_value_1 === 1) {
  document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
} else if (dice_value_1 === 2) {
  document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
} else if (dice_value_1 === 3) {
  document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
} else if (dice_value_1 === 4) {
  document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
} else if (dice_value_1 === 5) {
  document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
} else if (dice_value_1 === 6) {
  document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

// for player 2
if (dice_value_2 === 1) {
  document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
} else if (dice_value_2 === 2) {
  document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
} else if (dice_value_2 === 3) {
  document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
} else if (dice_value_2 === 4) {
  document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
} else if (dice_value_2 === 5) {
  document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
} else if (dice_value_2 === 6) {
  document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

if (dice_value_1 > dice_value_2) {
  document.querySelector("h1").textContent = "Player 1 wins!";
} else if (dice_value_2 > dice_value_1) {
  document.querySelector("h1").textContent = "Player 2 wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
