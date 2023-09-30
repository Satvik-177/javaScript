// function multipleby5(num){

//     return num*5
// }

// multipleby5.power = 2

// console.log(multipleby5(5))
// console.log(multipleby5.power)
// console.log(multipleby5.prototype)

// function createUser(username,score){

//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){

//     this.score++
// }

// createUser.prototype.printMe = function(){

//     console.log(`price is ${this.score}`)
// }

// const info1 = new createUser("Satvik",25)
// const info2 = new createUser("Anand",250)

// info1.printMe()

//+++++++++++++++++++++++++++++++++++++++++++++++++++

let myName = "Satvik    "
let myComapnyname = "Jpmc    "


//console.log(myName.trueLength)

let myCompany = ["JPMC","Accenture"]


let workCompany= {

       JPMC:"SoftwareEngineer",
       Accenture:"AdvancedAssociate",

       getAccenturePower : function(){

            console.log(`Accenture power is ${this.Accenture}`)
       }

}

Object.prototype.Satvik = function(){

    console.log("Satvik is present in every object")
}

Array.prototype.heySatvik = function(){

    console.log("Satvik says Hello")
}

// workCompany.Satvik()      //in object
// myCompany.Satvik()        //in arrays

myCompany.heySatvik()      //It is accesible because heySatvik protype is for array
//workCompany.heySatvik()  Not accesible



//Inheritance

const teacher = {

    makeVideo:true
}

const teachingTechnique = {

    isAvailable:false
}

const TASupport = {

    makeAssignment:"Js assignment",
    fulltime:true,

    __proto__:teachingTechnique     //Inheriting the properties of teaching technique

}

//teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(teachingTechnique,teacher)

let anotherUsername = "HelloWorld   "

String.prototype.trueLength = function(){

    console.log(`${this}`)
    //console.log(`${this.name}`)
    console.log(`true length is: ${this.trim().length}`)

}

anotherUsername.trueLength()
"Satvik".trueLength()
"Sammu".trueLength()



