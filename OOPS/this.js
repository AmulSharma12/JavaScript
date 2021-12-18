// this object points to the current context
// this object is refers to the current context and window global object in case of browser

// e.g.1
// console.log(this);      //-> window global object

// e.g.2
// function sum()
// {
//     console.log(this)   //-> window global object
// }

// sum()

// e.g.3

// let myName = "Amul Sharma"
// function print()
// {
//     console.log(this.myName)
// }

// print()


// -----------------------------------------------Example 4
// let myData = {
//     name:"Amul Sharma",
//     age: 26,
//     print() {
//         console.log(this.name)
//     }
// }

// myData.print()



// ------------------------------------------------Example5 
// this will not work with fat arrow function 
// const myData = {
//     name: {
//         firstName : "Amul ",
//         lastName: "Sharma"
//     },
//     age: 20,
//     print: () => {
//         console.log(this)
//     }

// }


// myData.print()


// --------------------------------------------------INterview question 9
const myData = {
    name: {
        firstName : "Amul ",
        lastName: "Sharma"
    },
    age: 20,
    print() {
        console.log(this.name)
        console.log(this.firstName + this.lastName)
    }

}


myData.print()