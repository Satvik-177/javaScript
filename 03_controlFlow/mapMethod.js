//Map
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const ele = myNums.map((val) => val+10)
//or
//const ele = myNums.map((val) => {return val + 10})

const ele = myNums
           .map((num)=>num+10)
           .map((num)=>num*10)
           .filter((num)=>num>120)  //only boolean value for .filter

console.log(ele)


