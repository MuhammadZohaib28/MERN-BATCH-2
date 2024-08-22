//Conditional Statements If-Else

let number = 8767656;

console.log(typeof number);


if (number % 2 == 0) {
    console.log(`This number: ${number} is Even Number`);
    const named = "Hammad";

} else {
    console.log(`This number: ${number} is Odd Number`);
}


//AND Operator - &&
//OR Operator - ||
//NOT Operator - !



let isLoggedIn = false;
let isPremiumUser = true;

if (!isLoggedIn && isPremiumUser) {
    console.log("You have access to latest movies");
} else {
    console.log("Please subscribe to premium plan");
}



let userAge = 510;

if (userAge < 18) {
    console.log("You are not allowed to watch this movie");
} else if (userAge < 50) {
    console.log("You are allowed to watch this movie");
} else {
    console.log("You are too old to watch this movie");
}

let coldrink = prompt("Enter your cold drink name");

switch (coldrink) {
    case "Pepsi":
        console.log("PEPSI COLD DRINK");
        break;
    case "Coke":
        console.log("COKE COLD DRINK");
        break;
    case "Sprite":
        console.log("SPRITE COLD DRINK");
        break;
    default:
        console.log("No Cold Drink Available");
        break;
}
