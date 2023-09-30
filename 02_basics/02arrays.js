const Companies = ["Jpmc","Morgan Stanley","Goldman Sachs","Flipkart","Accenture"]
const Areas = ["Bengaluru","Pune","Hyderabad","Prayagraj"]

//Companies.push(Areas)      //This don't concatenate
//console.log(Companies)     

//For concatenation

// const Updated = Companies.concat(Areas)   //This is also not a very goof practice
// console.log("A",Updated)

//Use of Spread operator (Same result will be obtaines as that of concat)

//const merged_Final = [...Companies,...Areas]
//console.log(merged_Final)

//multidimensional arrays(arrays present recursively)

// const another_Array = [1,2,3,[-4,5],5,6,[-9,[81,100,95],6],88]
// console.log(another_Array)

// const bestArray = another_Array.flat(Infinity)  //infinity is depth
// console.log(bestArray)

console.log(Array.isArray("Satvik"))
console.log(Array.from("Satvik"))

let score1 = 100
let score2 = 200
let name1 = "Hello There!"

console.log(Array.of(score1,score2,name1))