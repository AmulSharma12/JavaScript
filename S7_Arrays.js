// when we have to store multiple values in same varibale then we use index
// In javascript Arrays is a class and arrays are the prototype of the class 
// In javascript arrays allow to store multiple type of values

// var myFriends = ['amul', 'sharma','op', 'ha']
// console.log(myFriends)
// console.log(myFriends[0]);




// -----------------------------------------------1.) Traversal in  an array
// This will allow us to traverse all the elements in an array
// var length = myFriends.length;
// for(let i = 0; i<length; i++)
//     console.log(myFriends[i])


// ----------------------------for..in loop -> traverse and gives the index
// for(let element in myFriends)
//     console.log(element);

// -------------------------------for..of loop -> traverse and gives the elements
// for(let elements of myFriends)
//     console.log(elements)


// -----------------------------------forEach loop -> gives element , index , array
// -> takes callback function and break not allowed it will completely executed
// myFriends.forEach(function (currVal,index , arr){
//     console.log(`${currVal} and index is ${index} in array ${arr}`)
// })

// foreach;

// --------------------------------forEach loop arrow function-> gives element,index, array
// -> this not allowed in fat arrow function
// var exp = myFriends.forEach((currVal, index , arr)=>{
//     console.log(`${arr} ------------------- index ${index} value  ${currVal}`)
// })

// exp


// ----------------------------------------------->2.) Searching and filter
// Searching means searching for a particaular values
// ---------------------------------------------1.) indexOf(val) -> gives index search in forward only
// ------------------------------------------------indexOf(val, start) -> gives index and when you start from any particular index

// var myFriends = ['amul', 'sharma','op', 'ha']
// var index = myFriends.indexOf('op')
// console.log(index)
// var indexStart = myFriends.indexOf('op',3)
// console.log(indexStart)


// ----------------------------------------------------2.) lastIndexOf() -> gives index in backward only
// var index = myFriends.lastIndexOf('op')
// console.log(index)
// var indexStart = myFriends.lastIndexOf("sharma",0)
// console.log(indexStart)


// ----------------------------------------------------3.) includes() -> gives booleans result true/false
// var isExist = myFriends.includes('op')
// console.log(isExist)

// var isExist = myFriends.includes("ndoe")
// console.log(isExist)

// var isExist = myFriends.includes("op", 2)
// console.log(isExist)

// -----------------------------------------------------4.) find()  -> gives the element in array
// var element  = myFriends.find((currVal)=>{
    //         return currVal>90
    //     })
    
    //     console.log(element)
    // -----------------------------------------------------5.) findIndex() ->  gives the index in array
    // var index  = myFriends.findIndex((currVal)=>{
    //     return currVal>90
    // })
        
    // console.log(index)    

// ------------------------------------------------------------6.) filter () -> gives all the values
// return new array containing all the values 
// var allVal  = myFriends.filter((currVal)=>{
    //     return currVal>30
    // })
    
    // console.log(allVal)
    
    
// -------------------------------------------------------------3.) SORT AND COMPARE
// -----------------------------------------------1.) Array.prototype.sort()
// convert into string and sort not work with the numbers
var myFriends = ['Amul', "sharma", 'z' , "y"]
// var output = myFriends.sort()
// console.log(output)

// var myFriends = [10 ,100, 40 , 40, 30 , 69]
// output  [ 10, 100, 30, 40, 40, 69 ]  gives unexpected result for numeric values becuase it con
// vert into  first string  sort method is suitable for sort method only
// var output = myFriends.sort()
// console.log(output)



// ---------------------------------------------------------4.) Insert , Add , Replace , Delete(CRUD)