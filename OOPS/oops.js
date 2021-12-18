// 1.) object literals ->  object literals in simple way is key:value pair data structure
//2.)  this object in javascript


// 🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣
// ---------------------------------------------------------------------objects how to create

//variable is used to store only single value
// array is used to store tha group of values together of same type
// yes we can store multiple values but the good practice is to store the same type of value


// 1st way
// var myName = "Amul Sharma"
// console.log(myName)

// var myData = {
//     myName: "Amul Sharma",
//     age: 20,
//     getData:function(){
//         console.log(`My name is ${myName} and my age is ${age}`)
//     }
// }

// console.log(myData.myName)
// console.log(myData.age)
// console.log(myData.getData()) 


// 2nd way to write function as well after es6
// var myData = {
//     myName:"Amul Sharma",
//     age:20,
//     getData()
//     {
//         console.log(`My Name is ${myData.myName} and my age is ${myData.age}`)
//     }
// }

// console.log(myData.getData())



// what if we need object as value inside object using dot operator we can access the variable
var myData = {
    name:{
        firstName: "Amul ",
        lastName: "Sharma"
    },
    age: 20,
    color: "blue"
}

console.log(myData.name)
console.log(myData.name.firstName)
console.log(myData.name.lastName)



