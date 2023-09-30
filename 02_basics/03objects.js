//Singleton method
//Not in this lecture
//ex- Object.create

//object literals

const mySym = "myKey1"
const myObj = {

    userName : "Satvik",
    userAge : 22,
    userScore : 22.33,
    isLoggedIn : true,
    Company : ["jpmc","GoldmanSachs","2024"],
    location : "Bengaluru",
    "favourite game" : "Cricket",
    [mySym] : "key1"      //Symbol declaration
}

//Both methods are applicable
// console.log(myObj.userScore)
// console.log(myObj["location"])  //Every key value is treated as string in js

// console.log(myObj["favourite game"]) //  . operator can't be used here

//const mySym = Symbol("123")
//console.log(myObj[mySym])

// myObj.location = "Gurgaon"
// console.log(myObj)
// Object.freeze(myObj)    //values of keys can't be changed
// myObj.location = "Gurgaon"
// console.log(myObj)

// myObj.greeting = function(){

//     console.log("Hello There!")
// }

// console.log(myObj.greeting)
// console.log(myObj.greeting())

myObj.greetingtwo = function(){

    console.log(`Hello there, ${this.userAge}`);
}

console.log(myObj.greetingtwo())