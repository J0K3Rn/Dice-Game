function runGame() {

    var Player1Number = Math.floor(Math.random() * 6 + 1);
    var Player2Number = Math.floor(Math.random() * 6 + 1);

    document.querySelector(".img1").setAttribute("src", "images/dice" + Player1Number + ".png")
    document.querySelector(".img2").setAttribute("src", "images/dice" + Player2Number + ".png")

    if (Player1Number > Player2Number) {
        document.querySelector("h1").textContent = '🚩 Player 1 Wins!';
    } else if (Player1Number < Player2Number) {
        document.querySelector("h1").textContent = 'Player 2 Wins! 🚩';
    } else if (Player1Number === Player2Number) {
        document.querySelector("h1").textContent = 'Draw!';
    } else {
        document.querySelector("h1").textContent = 'Error!';
    }

}