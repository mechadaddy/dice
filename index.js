function rollDice() {

    var randomNum1 = Math.floor(Math.random()*6) +1;
    var randomNum2 = Math.floor(Math.random()*6) +1;

    if (randomNum1 != randomNum2) {
        document.querySelectorAll("img")[0].setAttribute("src", `./images/dice${randomNum1}.png`);

        document.querySelectorAll("img")[1].setAttribute("src", `./images/dice${randomNum2}.png`);

        if (randomNum1 > randomNum2) {
            document.querySelector("h1").textContent="🚩Player 1 Wins";
        } else if (randomNum1 < randomNum2) {
            document.querySelector("h1").textContent="Player 2 Wins🚩";
        } else {
            console.log("huh?");
        }

    } else {
        rollDice();
    }


}

document.getElementById("myButton").addEventListener("click", rollDice);