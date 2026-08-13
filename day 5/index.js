// print numbers from 1 to 10
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

// Print only even numbers from 1 to 20.

for (let i = 1; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Calculate the sum from 1 to 100.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

console.log("Challenge — 30 minutes");
//Challenge — 30 minutes

//Try this without help

const numbers = [5, 12, 8, 20, 3, 15];

//The largest number
let largest;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > numbers[i + 1]) {
    largest = numbers[i];
  }
}

console.log(largest);

//The smallest number
let smallest;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < numbers[i + 1]) {
    smallest = numbers[i];
  }
}

console.log(smallest);

//The sum of all numbers

let result = 0;

for (let i = 0; i < numbers.length; i++) {
  result += numbers[i];
}

console.log(result);

//How many numbers are even

let even = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even++;
  }
}

console.log(even);

//challenge completed — 12/13min