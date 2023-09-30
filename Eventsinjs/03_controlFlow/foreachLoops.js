const languages = ["Js","php","py","cpp","java"]

languages.forEach(function(languages){

    //console.log(`Languages allowed are ${languages}`)
})

//Alternate for other

languages.forEach((languages)=>{

        //console.log(`Languages allowed are ${languages}`)

})

//using printme function

// function printMe(item){

//     console.log(item)
// }

//languages.forEach(printMe)

languages.forEach((item,index,arr)=>{

    //console.log(item,index,arr)
})

//array of objects *important

const myCoding = [
     
    {

        languageName:"javaScript",
        languageFileName:"js"
    },

    {

        languageName:"python",
        languageFileName:"py"
    },

    {
        languageName:"C++",
        languageFileName:"cpp"
    }

]

myCoding.forEach((item)=>{

    console.log(item.languageName)
})
  

