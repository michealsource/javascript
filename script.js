// ARITHEMETIC OPERATORS
//   let num1 = 5;
//   let num2 = 18;
// console.log(num2 + num1)
// console.log(num2 - num1)
// console.log(num2 * num1)
// console.log(num2 / num1)
// console.log(num2 % num1)

// RELATIONAL OPERATORS
// > < >= <= != ==
// console.log(num1 == num2)

// LOGICAL OPERATORS
// && ||
//   console.log()

// ASSIGNMENT OPERATORS
// = += -= *= /= %=

// console.log(num1 = num1 + 20)

// UNARY OR DECREMENT OR INCREMENT OPERATORS
// ++ --
//   num1--;
//   console.log(num1)

// let name = "promise wed 3innocent"
// let age = 90
// let ismale = true
// let money = null
// let course = undefined



// =======CONTROL FLOW ========//

// let points = 60
// let age = 15

//  flase         true
// if (age >= 20 || age <= 50) {
//    console.log('hello its bigger')
// } else {
//    console.log('hello its not bigger')
// }

// console.log("always showing")


// let grade = 3

// if (grade >= 70 && grade <= 100) {
//    console.log("A")
// }
// else if (grade >= 60 && grade < 70) {
//    console.log('B')
// }
// else if (grade >= 45 && grade < 60) {
//    console.log("C")
// }
// else {
//    console.log('F9')
// }

// let i = 1

// while (i < 10) {
//    console.log("Promise" + i)
//    i += 2;
// }

//  Write a program to generate a multiplicat table

// take input from the user


const num = prompt("Enter and a number to see the multiplication of it from 1 -12")

let pro = 1

while (pro <= 12) {
   const answer = pro * num;

   // DISPLAY ANSWER
   console.log(`${num}  * ${pro} = ${answer}`)
   pro++;
}
