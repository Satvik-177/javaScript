const myFunc = function(){

    //console.log("Hello there")
}

myFunc()  //for invoking/calling the function
//myFunc //for reference

//adding two numbers

const addNumbers = function(num1 , num2){
    
    //console.log(num1 + num2) //not returning anything
    return (num1 + num2)  //returning the value
}

/*NOTE: num1 and num2 are parameters
3 , 5 are arguments*/


// const result = addNumbers(3,5)
// console.log(result)

//if we don't pass any argument 

//we can use

const multiplyNumbers = function(num1 = 3, num2 = 8){ //we can define default parameters
     
    //console.log(num1 + num2) //not returning anything
    return (num1 * num2)  //returning the value
}

//console.log(multiplyNumbers())   //directly accept the default parameter
//console.log(multiplyNumbers(6,3))

const statusCheck = function(userName){

            return `${userName} is logged in`
}

//console.log(statusCheck("Satvik"))

//Linear search

const isPresent = function(arr1,key){

    //let found = 0
    for(let i=0; i<arr1.length; i++){

        if(arr1[i] == key){

            //found = 1
            return i+1
        }
    }

    return -1      
}

const myArr = [4,5,6,7,-3,8]
let key = 11

//console.log(isPresent(myArr,key))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const addKartPrice = function(num1){

//     return num1
// }


//const addKartPrice = function(...num1){      //rest operator is used
// const addKartPrice = function(val1,val2,...num1){                                     //when we don't know the actual number of arguments to pass
//     return num1
// }

//console.log(addKartPrice(5,6,7,400))




// const user = {

//     userName : "Satvik",
//     price:199
// }

 function handleObject(anyobject){

 console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`)
 }

// handleObject(user)

//other method

handleObject({                  //direct passing of object

        username : "Hello",
        price:399
         
})



//passing of array

const mynewArr = [200,400,2000,890]

function returnSecondValue(getArr){

    return getArr[1]
}

console.log(returnSecondValue(mynewArr))
//other method
console.log(returnSecondValue([200,400,2000,890]))   //without declaring array explicitly