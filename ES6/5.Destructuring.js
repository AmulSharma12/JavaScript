// there are two types in destructuring 
// 1.) Array Destrucutring 
// 2.) Object Destructuring

// -------------------------------------------1.) Array Destructuring 
// let arr = ["Amul Sharma", 20, "Male"]
// let name = arr[0]
// let age = arr[1]
// let gender = arr[2]

// console.log(name)
// console.log(age)
// console.log(gender)
// But for the large data it is not a good practice 
// Es6 has solution to this problem that is destrucutring 

// Array destructuring 
// let [name, age, gender] = arr
// console.log(name)
// console.log(age)
// console.log(gender)


// -------------------------------------------------2.) Object destructuring 
//  

// problem is when accessing large no of key inside the objects you have to write mulitple time
// let name = bioData.name
// let age = bioData.age
// console.log(name)
// console.log(age)


// solutiion is object destructuring 
let {name, age} = bioData
console.log(name)
console.log(age)
