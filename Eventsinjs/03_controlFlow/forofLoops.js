//for of loop for arrays
const myArr = [1,2,3,4,5]

for (const num of myArr) {
    
    //console.log(num)
}

//for of loop for strings

const userName = "Satvik Anand"

for (const name of userName) {
    
   // console.log(name)
}

//for of loop for objects

const myObj = {

     userName:"Satvik",
     userAge:22,
     userEmail:"hello@hi.com",
     isLoggedIn:false

}

// for (const keys of myObj) {
    
//     console.log(`The keys values are ${keys}`)
// }
//NOTE: objects are not iteratable using for of loops

//for of loops in Maps

const maps = new Map()

maps.set("IN","India")
maps.set("us","United States")
maps.set("It","Italy")
maps.set("fr","France")

// for (const values of maps) {
    
//     console.log(values)
// }

//for key value type format

for (const [key,value] of maps) {
    
    console.log(`The keys values of maps are ${key} and values are ${value}`)
}

