//array declaration and initialization

const myArr = [0,1,8,3,4,5,-9,22,56]      //Elements may be of similar kind or dissimilar kind
//console.log(myArr)

//const wahArr = ["hello",56,true,"there"]
//console.log(wahArr)


// console.log(myArr.slice(2,6))
// console.log(myArr)

// console.log(myArr.splice(2,6))        //Original array also gets modified
// console.log(myArr)

const newArr = new Array("Hanumanji",true,2,"Shaktiman")
console.log(newArr)

newArr.push("BajrangBali")
newArr.push("Tuesday")
newArr.push("SaiBaba")
newArr.push(6)
newArr.push(8)
newArr.pop()

console.log(newArr.includes("Hanumanji"))
console.log(newArr.indexOf("SaiBaba"))

console.log(typeof newArr)



