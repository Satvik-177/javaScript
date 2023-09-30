const myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())

console.log(typeof myDate)

// let myCreatedDate = new Date(2023-0-23)
// console.log(myCreatedDate.toDateString())

let myCreatedDate = new Date("09-18-2023")
console.log(myCreatedDate.toDateString())

let mytimeStamp = Date.now()
console.log(Math.floor(mytimeStamp/1000))
console.log(myCreatedDate.getTime())

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())    //Month starts with zero in js
console.log(newDate.getDay())     //Day starts with zero in js
console.log(newDate.getHours())
console.log(newDate.getTimezoneOffset())

