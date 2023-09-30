const userScore = 5000

const updateduserScore = new Number(55)

console.log(userScore)
console.log(updateduserScore)

console.log(userScore.toString().length)    //converted to string, hence other string methods can also be used

const newScore = 698985893
console.log(newScore.toLocaleString('en-US'))  //converts to Us standard of numbers

console.log(newScore.toLocaleString('en-IN'))

console.log(newScore.toFixed(2))

const greatNum = 567.888

console.log(greatNum.toPrecision(4))

//Maths

console.log(Math.abs(-9))
console.log(Math.min(6,3,8,5,11))
console.log(Math.max(34,67,49,91,87))
console.log(Math.ceil(43.67))
console.log(Math.floor(9.21))
console.log(Math.round(43.4))

console.log(Math.random())
console.log((Math.random()*10)+1)

const max = 25
const min = 15

console.log(Math.floor(Math.random()*(max-min+1))+min)

