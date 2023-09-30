//For in loops 
//on arrays
const companyName = ["jpmc","Goldman Sachs","Morgan stanley","Accenture","Flipkart"]

for (const company in companyName) {
    
         //console.log(company)      //outputs keys like 0,1,2,3,4 only and not values
    //console.log(`${companyName[company]} is at ${company} position`)
}

//on strings

const userName = "Hello! world"

for (const key in userName) {
    
           //console.log(`${key} at ${userName[key]}` )
}

//on objects
const myObj = {

    userName:"Satvik",
    userAge:22,
    userEmail:"hello@hi.com",
    isLoggedIn:false

}

for (const obj in myObj) {
    
   // console.log(`The obj is ${obj} and its value is ${myObj[obj]}`)

}   
//NOTE: objects are iteratable by For in loops

//on maps

const maps = new Map()

maps.set("IN","India")
maps.set("us","United States")
maps.set("It","Italy")
maps.set("fr","France")

for(const values in maps){

    console.log(`${values} are ${maps[values]}`)
}
//NOTE:- Nothing gets printed , maps are not iteratable using for in loops