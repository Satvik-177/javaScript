// //Strings Declaration

// const userName = "Satvik"

// //or

// const userName1 = new String("Satvik")

// console.log(userName)
// console.log(userName1)

// const userId = "ABC123"
// const userAge = 22

// //string concatenation methodologies

// console.log(userId + userAge)           //Don't follow this

// //Alternative

// console.log(`The Id of user is given as ${userId} and age is ${userAge}`)

const companyName = "jpmorgan chase-co-Prestige group"

console.log(`The name of company is ${companyName.toUpperCase()}`)
console.log(`The name of company in smallerCase is ${companyName.toLowerCase()}`)
console.log(`Index of m is ${companyName.indexOf('m')}`)
console.log(`Character at 7 is ${companyName.charAt(7)}`)

console.log(companyName.substring(1,10))

console.log(companyName.slice(-10,29))        //can take negative values also

console.log(companyName.replace('-','and'))   //only first occurence of pattern replaced
console.log(companyName.replaceAll('-','hello')) //For replacing multiple occurences
console.log(companyName.split(" ")) 

const url = "Hellogoogle@%20with.google.com"
console.log(url.replace('%20','hi'))
console.log(url.includes("google"))
console.log(url.includes("commonman"))

const testStringName = "    , Welcome to Jpmorgan chase "
console.log(testStringName.trim())

const myString = "Hello"
const newString = myString.concat(" Hi","There")
console.log(newString)

let employeId = "1233"    //only with strings which contains numbers
console.log(`The employeId with padding ${employeId.padStart(6,"x")}`)
console.log(`The employeId with padding ${employeId.padEnd(6,"0")}`)

console.log(myString.startsWith('h'))
console.log(myString.endsWith('e'))


//some other string methods

/* concat()      //Add two or more strings
   startsWith()
   endsWith()
   toLowerCase()
   trimStart()          //remove whitespaces from beginning
   trimEnd()            // remove whitespaces from end

*/

