
let mathsMarks = 80;
let scienceMarks = 75;
let englishMarks = 85;

let totalMarks = mathsMarks + scienceMarks + englishMarks;
let averageMarks = totalMarks / 3;

console.log("Program 1: Marks");
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);


let number = 12;

console.log("Program 2: Even or Odd");

if (number % 2 === 0) {
    console.log(number, "is even");
} else {
    console.log(number, "is odd");
}



let a = 15;
let b = 25;
let c = 10;

console.log("Program 3: Greatest Number");

if (a >= b && a >= c) {
    console.log("Greatest number:", a);
} else if (b >= a && b >= c) {
    console.log("Greatest number:", b);
} else {
    console.log("Greatest number:", c);
}



let tableNumber = 7;

console.log("Program 4: Multiplication Table");

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}
// 1 to 100 counting

for (let i = 1; i <=100;i++){
    console.log(i);
}

let sum = 0;

console.log("Program 5: Sum of Numbers");

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log("Sum:", sum);
