//Guess Game
let i = prompt("Enter your guess");
const f = "Avatar";
while ((i != f) && i != "quit") {
    i = prompt("Try again!");
    if (i == "quit") {
        document.write("END!");
        break;
    }

}

document.write("Guessed Correct!");