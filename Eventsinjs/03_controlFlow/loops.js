//for loops

for(let i=0; i<10; i++){

    //console.log(i)
}

//console.log("Wait")
//
const myArray = ["Jpmc",22,true,"De-Shaw"]

for(let i=0; i<myArray.length; i++){

   // console.log(myArray[i])
}

for(let i=0; i<10; i++){

    if(i%2 == 0){

        console.log(`${i} is an even number`)
    }

    else
    console.log(`${i} is an odd number`)     //break and continue are also some of the keyword
     
}

//WHILE Loop
let score = 0

while(score <= 100){

    if(score%2 ==  0){

    console.log(`Score is even and equal to ${score}`)
    score = score+2
    }
    else {

        console.log(`Score is odd and equla to ${score}`)
        score = score+2
    }
}

//do while loop

let index = 0
do{
    
    console.log(`Hello inside the loop where index is ${index}`)
    index = index + 3
}while(index<=50)