const myObj = {

    userName : "Satvik",
    age : 22,
    e_mail : "Hello@hi.com",
    isLoggedIn : true,

    welcomeMessage:function(){

          
        //console.log(`Hello and welcome ${this.userName}`)   //Current reference
             
        //
        
        //console.log(this)
    }                                                     //using this keyword

}

myObj.welcomeMessage()
myObj.userName = "Sammu"
myObj.welcomeMessage()

//console.log(this)       //In nodejs environment , {} will be obtained

//But with Functions

function greetUser(){

    let Username = "HelloDude"
    //console.log(this.Username);
    //console.log(this)
}

greetUser()

//++++++++++++++++++++++++
//ARROW FUNCTION

const welcomeOffice = () =>{      //Declaration

    console.log("Welcome to jp morgan chase as SDE")
}
const addNumbers = (num1 , num2)=> {          

           return num1 + num2
}

welcomeOffice()
console.log(addNumbers(5,6))

//Another way 

const multiplyNumbers = (num1,num2)=> (num1*num2)  //This is helpful in passing objects
console.log(multiplyNumbers(3,4))


const getUserDetail = () => ({userName:"Satvik"}) //objects passing
  
console.log(getUserDetail())
