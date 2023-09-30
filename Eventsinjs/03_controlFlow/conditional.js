//if else if else
(function detectTemp(temp){
if(temp>0 && temp<25){

     console.log(`The temp is cold to Moderate and equal to ${temp}`)
}
else if(temp>25 && temp<=50){

    console.log(`Temp is hot and equal to ${temp}`)
 }

 else {

    console.log("Very hot")
 }
})(45)       //using iife

//switch

//calculator

const calculator = (num1,num2)=>{
let op = '/'
switch(op){

    case '+' :  console.log(num1+num2)
                break
    
    case '-' : console.log(num1-num2)
               break
    
    case '*' : console.log(num1*num2)
               break
    
    case '/' : num1!=0 ? console.log(num1/num2) : console.log("Not possible")
               break
    
    default:   console.log("Not possible")
               break
   }
}

console.log(calculator(4,3))



