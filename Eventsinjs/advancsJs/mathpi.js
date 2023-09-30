//const dispValue = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI)
// Math.PI=5                     //Value of pi will not change
// console.log(Math.PI)

//console.log(dispValue)


const companies = {

           companyname:"JPMC",
           price:1600000,
           isAvailable:true
}

//console.log(companies)
console.log(Object.getOwnPropertyDescriptor(companies,"companyname"))

Object.defineProperty(companies,'companyname',{

    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(companies,'companyname'))