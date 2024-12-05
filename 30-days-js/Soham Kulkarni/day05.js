//Array Declaration
let fruits = ["apple", "banana", "orange"];

//Accessing Elements
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//Adding Elements to an Array
fruits.push("grape");
fruits.unshift("mango");
console.log(fruits);

//Removing Elements from an Array
fruits.pop();
fruits.shift();
console.log(fruits);

//Array Length
console.log(fruits.length);

//Finding an Element in an Array
console.log(fruits.indexOf("banana"));
console.log(fruits.includes("grape"));

//Iterating Over an Array
fruits.forEach(function(fruit) {
    console.log(fruit);
});

//Modifying an Element in an Array
fruits[1] = "kiwi";
console.log(fruits);

//Array Slice 
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);

//Array Splice (adds/removes elements from the array)
fruits.splice(1, 1, "pear");
console.log(fruits);

//Merging Arrays
let moreFruits = ["watermelon", "pineapple"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);

//Sorting an Array
let numbers = [3, 1, 4, 2];
numbers.sort();
console.log(numbers);

//Reversing an Array
numbers.reverse();
console.log(numbers);
