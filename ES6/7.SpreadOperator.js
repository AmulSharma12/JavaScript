// spread operator in javascript is one of the important features also use in react concepts
// This feature allow us to add the existing elements if needed 

// for example if there is array and you need another array and all the elements you need is same as that
// array so you will not add all elements instead of that using spread operators you can achieve it

//---------------------------------------------------------------
const original = ['red', 'blue', 'brown']
// console.log(original)
const newArr = ['green', 'yellow']
// console.log(newArr)

// ------------------------------------------------------------------
// what in case if you need to add the elements and make another array
const usingOrig = [...original , 'newArrUsingOrig']
// console.log(usingOrig)
const usingNew = [...newArr, 'newArrUsingnewArr']
// console.log(usingNew)


//-------------------------------------------------------------------
// using both array what if you need to make the array
// const mixed = [...original, ...newArr]
// console.log(mixed)



// CONCLUSION : IF YOU NEED TO USE EXISTING ELEMENTS OF ARRAY AND MAKE NEW ARRAY USE SPREAD OPERATORS 
// SYNTAX ->         ...arrName