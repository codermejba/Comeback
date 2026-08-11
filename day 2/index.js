/* BigInt */


let a=12345678901234567890123456789
let b=BigInt("12345678901234567890123456789")

b=b.toString() // "12345678901234567890123456789"

let c=a===b //false

console.log(a,b,c) //a =1.2345678901234568e+28


/* 

Many modern backend databases (like PostgreSQL, MySQL, and MongoDB) and APIs use 64-bit auto-incrementing IDs 
or 64-bit Twitter Snowflake IDs.

The Problem: A 64-bit integer can exceed $2^{53} - 1$. If a backend API sends a 
user ID like 1052345678901234567 as a raw JSON number, standard JavaScript parses it as a Number and silently corrupts 
the value due to precision loss.{ex:- the result of a and c}

The Solution: API payloads parse those large ID values directly into BigInt (or accept them as strings and convert to 
BigInt) to guarantee that database queries and routing IDs remain exact. {ex:- the result of b}

*/

// then why dont we use string insted of BigInt?????



const str1 = "100";
const str2 = "50";

console.log(str1 + str2); // "10050" ❌ (Text concatenation, not addition!)

// With BigInt:
const big1 = 100n;
const big2 = 50n;

console.log(big1 + big2); // 150n ✅ (Actual math!)




/* because strings cannot do math. The moment we need to perform calculations, order items, or compare values, strings 
break down.

Here is why BigInt is necessary instead of just using strings */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(' ');

/* Modulo */

console.log( 10 % 3 ); // 1

/* 

JavaScript's % is technically a remainder operator, not a true mathematical modulo. The difference matters when dealing
with negative numbers. The sign of the result always matches the sign of the dividend (the first number): 

*/

console.log( -10 % 3 ); // -1
console.log(  10 % -3); //  1
console.log( -10 % -3); // -1


/* The % operator is a remainder operator. It returns the remainder of the division. It is not a true modulo operator.*/
