// object properties in JavaScript 
// this will allow us to write dynamic properties

var name = "Amul Sharma"
var age = 20
// const myData = {
//     myName: "Amul Sharma",
//     myAge: 20
// }

// -------------------dynamic data
// const dynamicData = {
//     [name]: "Amul Sharma",
//     [18+2]: 20
// }

// console.log(dynamicData)
// console.log()


// console.log(name)
// console.log(age)
// console.log(myData)
// console.log(myData.myName)
// console.log(myData.myAge)



// --------------------------------------------------
// when both the key and the value is same in that case you just give name 
const bioData = {name, age}
console.log(bioData)
console.log(bioData.name)
console.log(bioData.age)