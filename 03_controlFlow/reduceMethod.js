//REDUCE
const myNums = [1,2,3]

//using arrow function
const myTotal = myNums.reduce((accu,currVal)=>accu+currVal ,0)
//console.log(myTotal)

//withou arrow function

const myTotal1 = myNums.reduce(function(accu,currVal){

        return accu+currVal
},0)

//console.log(myTotal1)

//
const cartPrice = [

   {
       books:"Book one",
       price:2999
   },

   {
    books:"Book two",
    price:3899
   },

   {
    books:"Book three",
    price:999
   },
]

const cartTotal = cartPrice.reduce((acc,bk)=>acc+bk.price,0)
console.log(cartTotal)
