// function is stored in   key:value  pair 

// ------------------------1. function statement / function definition / function decalrations
// create a function with a function keyword with functionName and having list of paramenters seprated by commas 
// function sum()
// {
//     var num1 = 5;
//     var num2 = 5;
//     var total = num1 + num2;

//     console.log(total);
// }

// -----------------------------2. writing a function doesn't means it will execute you have to invoke the function also  
// sum();


// ------------------------------3. function parameter vs function arguments
// function parameters are the list of all values passed inside paranthesis while function statement seprated by commas
function sum(num1, num2)
{
    var total = num1 + num2;
    console.log(total);
}

// function arguments are the list of all values passed inside paranthesis while function invoking seprated by cmmas
// sum(2,3);
// sum();      //NaN


// ---------------------------------5.) function expression
// function expression when your function could act as value and the varibale can hold the function
// function Sub(num1, num2)
// {
//     var total = num1 - num2;
//     console.log(total);
// }
 
// var functionExp = Sub(5,4);
// console.log(functionExp);



// ----------------------------------6.) return statement
// In order to get the value in functionExp you have to return with the help of return keyword so that it can have some value
// other than undefined 
// when return statement encounter it will stop executing and return from where it is called or invoke
var num2 = function double(num1)
{
    return 2 * num1;
}

var functionExp = num2(4);
// console.log(functionExp);



// ---------------------------------------------7.) Anonymous function / Anonymous function expression
// Anonymous function is a function with no name so there is no name or identity so we will use variable for their identiy
// i.e. function act a value and we called as anonymous function expression

var anonymousFuncExp = function (num1, num2)
{
    return num1/num2;
}

// console.log(anonymousFuncExp(4, 2));