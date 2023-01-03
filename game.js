let you;
let yourscores = 0;
let opponent;
let opponentscores = 0;

let choices = ["rock", "paper", "scissors"];
window.onload = function () {
    for (let index = 0; index < choices.length; index++) {
        //<img id="rock">
        let choice = document.createElement("img");
        choice.id = choices[index];
        choice.src = choices[index] + ".jpg";
        choice.addEventListener("click", selectChoice);

        document.getElementById("choices").append(choice);
    }
}
function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".jpg";
    // random for the opponent choice
    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent + ".jpg";
    if (you == opponent) {
        yourscores += 1;
        opponentscores += 1;
    } else {
        if (you == "rock") 
        {
            if (opponent == "scissors") {
                yourscores += 1;

            } else if (opponent == "paper") 
            {
                opponentscores += 1;
            }
        }
        else if (you == "scissors")
         {
            if (opponent == "paper") 
            {
                yourscores += 1;
            } else if (opponent == "rock") 
            {
                opponentscores += 1;
            }
        }
        else if (you == "paper") 
        {
            if (opponent == "rock") 
            {
                yourscores += 1;
            } else if (opponent == "scissors") 
            {
                opponentscores += 1;
            }
        }
    }
    document.getElementById("opponent-scores").innerText= opponentscores;
    document.getElementById("your-scores").innerText= yourscores;


}
