 //const myObj = new Object()    //Singleton obeject declaration method
// console.log(myObj)

// const newObj = {}
// console.log(newObj)

// myObj.Usename = "Satvik"
// myObj.userAge = 22
// myObj.isLoggedIn = true

// console.log(myObj)

const regularUser = {

    userName : {

        detailName : {

                firstName:"Satvik",
                Surname:"Anand"
        }
    },

    e_mail:"Hello@hi.com",
    age:22,
    isLoggedIn:true
}

//console.log(regularUser.userName.detailName)

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

//const obj3 = {obj1,obj2}   //not agood way
//console.log(obj3)

//const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2,/*obj3*/) //More than two can also be passed here
// console.log(obj3)   //this method is also not always used

const obj3 = {...obj1,...obj2}
//console.log(obj3)

/* Array of Objects*/

const Users = [
 
{
    ID: 234,
    E_mail: "Hello@hi.com"
},
{

    ID: 2344,
    E_mail: "Bye@hi.com"
},
]

//console.log(Users[1].E_mail)

// console.log(Object.keys(obj3))
// console.log(Object.values(obj3))
// console.log(Object.entries(obj3))

// console.log(regularUsers.hasOwnProperty('isLoggedIn'))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const user = {

    userName: "Satvik",
    userCity: "Bengaluru",
    userAge : 22,
    email: "hello@hi.com"
}

console.log(user.userName)

//Object de-spreading

const {userName} = user 

console.log(userName)

//or

const {userCity:city} = user //other name can also be given

console.log(city)

//API handling

{

    //json format
    //Response from API

   // "name" : "Jarubi",
   // "love" : "Satvik",
   // "Age"  : 22
}

[

    {},   //json can also be in this format
    {},
    {}
]



