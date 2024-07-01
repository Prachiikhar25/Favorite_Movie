//Favorite movie
let fav = "Avatar";
let guess = prompt("Enter your guess");
while (guess != fav && guess != "quit") {
    guess = prompt("Wrong guess Please try again");
    if (guess == fav) {
        document.write("Correct Choice");
    } else if (guess == "quit") {
        document.write("quit");
    } else {
        document.write("Wrong choice");
    }
}