/* Primitive Datatypes*/

// String         
// const userName = "ABCD"

// //Number
// const userAge = 25

// //Boolean
// const isLoggedIn = true

// //BigInt
// const SunEarthDistance = 728979238098n

// //null
// const outTemperature = null;

// //Undefined
// let userCity;

// //Symbol
// let userId = Symbol("123")
// let userBonus = Symbol("123")

// console.log(userId === userBonus)

// console.log(typeof outTemperature)
// console.log(typeof userName)
// console.log(typeof userAge)
// console.log(typeof userCity)
// console.log(typeof isLoggedIn)
// console.log(typeof SunEarthDistance)
// console.log(userId)


/* Non-primitive(Reference) Datatypes*/

//Arrays

// const employeDetail = ["Satvik","Accenture","Jpmc",22,"trhdu4894","hello@vscode.com"];

// console.log(typeof employeDetail)
// console.log(employeDetail)

// const myObj = {

//     userName:"Satvik",
//     userAge : 22,
//     companyName : "JPMorganChase",
//     userCity:"Bengaluru",
//     userEmail:"welcome"

// }

// console.log(typeof myObj)
// console.log(myObj)

// const decFunction = function(){

//     console.log("Congratulations! You are hired!")
// }

// console.log(typeof decFunction)
// console.log(decFunction)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack memory (for primitive datatypes)
// Here copy is generated for the variable

// let userName = "Satvik"
// let userNameUpdated = userName
// // console.log(userName)
// // console.log(userNameUpdated)
// userNameUpdated = "Sammubabu"
// console.log(userName)
// console.log(userNameUpdated)         //copy is created hence original value not changed

// Heap memory(Non-primitive data types)

let userOne = {

    userName : "ABC",
    userEmail : "Hello@hi.com",
    userAge : 22,
    isLoggedIn : true

}

//console.log(userOne.userAge)

userTwo = userOne
userTwo.userEmail = "Hello@google.com"

console.log(userOne.userEmail)              //Original value changed
console.log(userTwo.userEmail)


