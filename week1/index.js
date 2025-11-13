console.log("Hello");
console.log("This is my First Programe");


const num1 = 10;
const num2 = 4;
const sum = num1+ num2;
console.log('The Sum of the numbers are '+sum);

const prompt = require('prompt-sync')();
console.log("Starting");
const name = prompt('Enter your Full Name: ');
console.log (`Hello, ${name}`);
const number= parseInt(prompt("Enter a number that you like the most: "));
if (number > 0) {
    console.log("The number is Positive");
}

else if(number == 0){
    console.log("The Number is Zero");
}

else {
    console.log("The number is Negative");
}

// Code for basic arithmetic operations
const number1= parseInt(prompt("Enter the  1st number: "));
const number2= parseInt(prompt("Enter the 2nd number: "));

const sum2 = number1+number2;
const diff = number1-number2;
const mul = number1*number2;
const div = number1/number2;

console.log("The Sum of "+number1+" and "+number2+" is: "+ sum2);
console.log("The Difference of "+number1+" and "+number2+" is: "+ diff);
console.log("The Multiplication of "+number1+" and "+number2+" is: "+ mul);
console.log("The Division of "+number1+" and "+number2+" is: "+ div);