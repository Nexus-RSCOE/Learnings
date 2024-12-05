//non-primitive data types (object, array, and function)
//object
let person = {
    name: "Soham",
    age: 19,
    isStudent: true,
};
//array 
let colors = ["red", "green", "blue"];

console.log(person.name);    
console.log(person.age);     
console.log(colors[0]);      
console.log(colors[1]);    

function displayInfo() {
    console.log("This is a function in JS.");
}
displayInfo();  

//STRINGS
let firstName = "Soham";
let lastName = 'Kulkarni';
let greeting = `Hello, ${firstName} ${lastName}!`;

//String Concatenation
let fullName = firstName + " " + lastName;
console.log(fullName);


//Accessing Characters
console.log(firstName[0]);
console.log(lastName.charAt(1));

//String Length
console.log(firstName.length);

//Substring Operations
let text = "JavaScript is great!";
console.log(text.slice(0, 10));
console.log(text.substring(5, 15));

//Case Manipulation
let message = "Hello, JavaScript!";
console.log(message.toUpperCase());
console.log(message.toLowerCase());

//Trimming Whitespace
let spacedText = "   Hello World!   ";
console.log(spacedText.trim());

//Searching for a Substring
let searchText = "Learn JavaScript";
console.log(searchText.indexOf("JavaScript"));
console.log(searchText.includes("Python"));

//Split a String
let fruits = "apple,banana,orange";
let fruitArray = fruits.split(",");
console.log(fruitArray);

//Replace Substring
let phrase = "Hello, World!";
let updatedPhrase = phrase.replace("World", "JavaScript");
console.log(updatedPhrase);
