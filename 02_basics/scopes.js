
// let a = 11
// var c = 300

// if(true){

//     let a = 3;
//     var b = 10;
//     const c = 15;

//     console.log(c)

// }

// //console.log(a) 
// //console.log(b)             //var ignores the scope which is not good
// console.log(c)


//Nested scopes

function one(){

    const userName = "Satvik"

    function two(){

           const website = "Youtube"
           //console.log(userName)      //can be accessed as it is declared globally
    }

    //console.log(website)               //out of scope, not accessible
    two()
}

one()

//+++++++++++++++++Interseting++++++++++++++++++++

greeting("Good Morning")      //function can be called from here also

function greeting(greet){

    console.log(`${greet} have a nice day`)
}

// greeting("Good Morning")

///BUT

//companyName(Jp-morgan)      //can't be accessed from here i.e before declaration
const companyName = function(name){

    console.log(`Hello and welcome to ${name}`)
}
companyName("JP-morgan")

//NOTE:- Above is related to the concept of hoisting