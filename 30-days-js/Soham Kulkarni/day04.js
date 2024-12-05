//if-else statement
let age = 20;
if (age >= 18) {
    console.log("you are an adult.");
} else {
    console.log("you are a minor.");
}

//else if statement
let temperature = 35;
if (temperature < 0) {
    console.log("its freezing!");
} else if (temperature >= 0 && temperature <= 30) {
    console.log("the weather is cool.");
} else {
    console.log("its hot!");
}

//switch statement
let day = "Tuesday";
switch (day) {
    case "Monday":
        console.log("start of the week!");
        break;
    case "Tuesday":
        console.log("second day of the week!");
        break;
    case "Wednesday":
        console.log("mid-week day!");
        break;
    case "Thursday":
        console.log("almost weekend!");
        break;
    case "Friday":
        console.log("end of the week!");
        break;
    default:
        console.log("yay weekend!");
        break;
}

//Ternary operator
let time = 10;
let greeting = (time < 12) ? "Good morning" : "Good afternoon";
console.log(greeting);
