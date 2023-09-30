const user = {

    userName:"javascipt",
    loggedIn:true,
    age:22,

     getuserDetails:function(){

          //console.log("Got user details from database")
          //console.log(`username ${this.userName}`)
          //console.log(this)
    }
}

//console.log(user.userName)
//console.log(user.getuserDetails())
//console.log(this)

// const promiseOne = new Promise()   //new keyword is used to create a new exectution context
// const newDate = new Date()         //also known as constructor function


function User(username,loginCount,isloggedIn){

    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn

    return this
}

const userOne = new User("Satvik",15,true)
const userTwo = new User("JavaScript wonders",9,false)

//Declaring userTwo has overwrite the values of userOne
//so, use new keyword for independent existence of them
console.log(userOne)
console.log(userTwo)
//console.log(userOne.constructor)