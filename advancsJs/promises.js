// const promiseOne = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     },3000)
// })

// promiseOne.then(function(){

//     console.log("Promise consumed")
// })

new Promise(function(resolve,reject){
    
    setTimeout(function(){
    console.log("Async task 2")
    resolve()
    },3000)
}).then(function(){

    console.log("promise consumed 2.0")
})

const promiseThree = new Promise(function(resolve,reject){

    setTimeout(function(){

        resolve({user:"ABC",e_mail:"hi@hello.com"})
    },3000)

})

    promiseThree.then(function(user){
      
        console.log(user)

})

const promiseFour = new Promise(function(resolve,reject){

    setTimeout(function(){
        
        let error = true
        if(!error){

        resolve({userName:"Hello",e_mail:"HelloHi@bye.com"})
        }

        else {

            reject("ERROR:Bad Gateway")
        }
         
    },1000)
})

promiseFour.then((user)=>{

        console.log(user)
        return user.userName

}).then((userName)=>{

    console.log(userName)

}).catch(function(error){

    console.log(error)

}).finally(()=>console.log("The promise is either resolved or rejected"))
