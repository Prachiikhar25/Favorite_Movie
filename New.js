let fav = "Avatar";
let check = 0;
while (check = 1) {
    let guess = prompt("Enter the fav movie");
    if (guess == fav) {
        check = 1;
        document.write("Movie Name matched");
        break;
    } else {
        check = prompt("Do you still Wanna continue?(1/0)");
        if (check = '0') {
            document.write("Quit");
        }

    }

}