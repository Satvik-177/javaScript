// Immediately Invoked Function Expressions IIFE

(function greet() {

    console.log("Good morning")

})();    //put semicolon if want to execute more than two IIFE

(function name(name1){

    console.log(`welcome to JPMC ${name1}`)
})("Satvik");

//Arrow function can be used as well

((companyName) =>{

        console.log(`Selected in ${companyName} Satvik, Congratulations`)
})("JP Morgan chase and co")

