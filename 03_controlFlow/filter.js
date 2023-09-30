const coding = ["js","py","java","cpp"]

const values = coding.forEach((item)=>{
    
    //console.log(item)
   // return item
})

//console.log(values) //undefined because return is not possible
//Note:for each loop don't return anything

//FILTER
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const greaterNum = myNums.filter((value) => value>4)
// console.log(greaterNum)

const greaterNum = myNums.filter((value) => {

    return value>4
})
//console.log(greaterNum)  //Arrow function and scope//use return keyword

//if use foreach onlt, then

// const newNums = []
// myNums.forEach((num) => {

//     if(num>4)
//     newNums.push(num)

// })

// console.log(newNums)

const books = [

    { title:'Book one', genre:'fiction',publish:'1981',edition:2004},
    { title:'Book two', genre:'history',publish:'1983',edition:2006},
    { title:'Book three', genre:'history',publish:'2004',edition:2008},
    { title:'Book four', genre:'novel',publish:'2009',edition:2009},
    { title:'Book five', genre:'fiction',publish:'1995',edition:2011},
    { title:'Book six', genre:'novel',publish:'1996',edition:2008},
]

let reqdBooks = books.filter((bk)=>bk.genre=="history")

//console.log(reqdBooks)

reqdBooks = books.filter((bk)=>{

    return bk.genre === "history" && bk.publish==='1983'
})

console.log(reqdBooks)


