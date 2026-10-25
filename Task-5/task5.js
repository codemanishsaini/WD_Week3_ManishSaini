
console.log("Numbers from 1 to 10:");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Even Numbers:");

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


console.log("Odd Numbers:");

for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}


console.log("Table of 5:");

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}


let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log("Sum:", sum);


console.log("Reverse Counting:");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


console.log("While Loop:");

let number = 1;

while (number <= 5) {
    console.log(number);
    number++;
}



console.log("Do-while Loop:");

let count = 1;

do {
    console.log(count);
    count++;
} while (count <= 5);


