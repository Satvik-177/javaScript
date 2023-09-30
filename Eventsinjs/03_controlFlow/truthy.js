//falsy values
//   false ,"" , 0 , -0, bigInt 0n, null, undefined, NaN

//truthy values
//like [],{},true, etc.

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){

    //console.log("Object is empty")
}

//Nullish Coalescing Operator (??) : null undefined
//used mainly when some data is received from DB and to assign proper value and not null or undefined
let var1 = 5 ?? 10
console.log(var1)

let var2 = undefined ?? 15
console.log(var2)

let var3 = null ?? 15
console.log(var3)

let var4 = null ?? 95 ?? 100  //first value will get assigned
console.log(var4)