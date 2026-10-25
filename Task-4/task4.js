
let number = -5;

if (number > 0) {
    console.log("Number is positive");
} else if (number < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}


let value = 7;

if (value % 2 === 0) {
    console.log("Number is even");
} else {
    console.log("Number is odd");
}


let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}


let firstNumber = 25;
let secondNumber = 15;

if (firstNumber > secondNumber) {
    console.log("First number is greater");
} else if (secondNumber > firstNumber) {
    console.log("Second number is greater");
} else {
    console.log("Both numbers are equal");
}


let a = 10;
let b = 30;
let c = 20;

if (a >= b && a >= c) {
    console.log("A is the greatest");
} else if (b >= a && b >= c) {
    console.log("B is the greatest");
} else {
    console.log("C is the greatest");
}


let marks = 85;

if (marks >= 90) {
    console.log("Grade A");

} else if (marks >= 75) {
    console.log("Grade B");

} else if (marks >= 60) {
    console.log("Grade C");

} else if (marks >= 40) {
    console.log("Grade D");
    
} else {
    console.log("Fail");
}


let studentAge = 20;
let hasIdCard = true;

if (studentAge >= 18) {
    if (hasIdCard) {
        console.log("Entry allowed");
    } else {
        console.log("ID card is required");
    }
} else {
    console.log("Entry not allowed");
}
