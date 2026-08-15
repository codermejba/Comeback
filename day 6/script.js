// practice with functions 

//addition
function add(a,b) {
    return a+b
}

console.log(add(10,5))

//subtraction
function substract(a,b) {
    return a-b
}

console.log(substract(10,5))

//multiplication
function multiply(a,b) {
    return a*b
}

console.log(multiply(10,5))

//division
function divide(a,b) {
    return a/b
}

console.log(divide(10,5))

//remainder
function remainder(a) {
    return a%2===0
}

console.log(remainder(11))


//return agg

function getAge(age){
    return `your age is ${age}`
}

console.log(getAge(26))



//Arrays

const numbers = [10, 15, 20, 25, 30, 35, 40];

numbers.map((num) => {
  console.log(num);
});

const sumNumbers = numbers.reduce((acc,curr)=>{
    return acc+curr
},0)

console.log(sumNumbers)

//largest number

const largestNumber = numbers.reduce((acc,curr)=>{
    return Math.max(acc,curr)
},0)

console.log(largestNumber)

//smallest number

const smallestNumber = numbers.reduce((acc,curr)=>{
    return Math.min(acc,curr)
},numbers[0])

console.log(smallestNumber)

///////////////////////////////////////////////////////////////////

const newArr1=numbers.map((num)=>{
 return (num*2)
})

console.log('map',newArr1)

//////////////////////////////

const newArr2=numbers.forEach((num)=>{
 return (num*2)
})

console.log('forEach',newArr2)//undefined- forEach() does not create/return a new array.
//////////////////////////////

const newArr3=numbers.filter((num)=>{
 return (num===20)
})

console.log('filter',newArr3)
////////////////////////////////////////////////////////////////////////////////
//JavaScript Objects
const user = {
  name: "Mejba Hasan",
  age: 25,
  profession: "Developer",
  skills: ["JavaScript", "React", "Node.js"]
};
/* 

Practice:

Print the user's name
Print the profession
Print the first skill
Add a new property called country
Change the age
Loop through the skills

*/
console.log(user.name)
console.log(user.profession)
console.log(user.skills[0])
console.log(user.country='Bangladesh')
console.log(user.age=26)
console.log(user)
////////////////////////////////////////////////////////////////////////////////

const users = [
  { name: "Rahim", age: 22 },
  { name: "Karim", age: 25 },
  { name: "Hasan", age: 30 }
];


//filter

const userName = "karim";
const userAge=25

const filtedData=users.filter((data)=>{
    return data.name.toLowerCase()===userName.toLowerCase()&&data.age===userAge
})

console.log('filtedData',filtedData.length===0? 'no data' : filtedData )


////////////////////////////////////////////////////////////////////////////////////////

/* 5 more exercises */


//Exercise 1-Even numbers
const numbers1 = [3, 8, 12, 15, 20, 27, 30];

const evenNumbers=numbers1.filter((num)=>{
    return num%2===0
})

console.log(evenNumbers)

//Exercise 2 — Double numbers

const numbers2 = [2, 4, 6, 8];

const doubleNumbers=numbers2.map((num)=>{
    return num*2
})

console.log(doubleNumbers)

//Exercise 3 — Find users over 25

const users1 = [
  { name: "Rahim", age: 22 },
  { name: "Karim", age: 27 },
  { name: "Hasan", age: 30 },
  { name: "Jamal", age: 24 }
];


const filtedData1=users1.filter((data)=>{
    const users=data.age>25
    return   users
  
})
/* 
Expected:

Karim
Hasan 

*/
filtedData1.map((data)=>{
    console.log(data.name)
})

//Exercise 4 — Calculate total price

const products = [
  { name: "Keyboard", price: 1500 },
  { name: "Mouse", price: 800 },
  { name: "Monitor", price: 15000 }
];


const totalPrice=products.reduce((acc,curr)=>{
    return acc+curr.price
},0)

console.log(totalPrice)


//Exercise 5 — Find a user

const users2 = [
  { name: "Rahim", age: 22 },
  { name: "Karim", age: 25 },
  { name: "Hasan", age: 30 }
];

const found=users2.find((data)=>{
 return data.name==='Hasan'
})

console.log(found)