// EcmaScript 2015

// -------------------------------------------1.) let vs const vs var

// var and let is updateable 
// const is not updatabele
// var num1 = "Amul Sharma";
// num1  = "Amul ";
// console.log(num1);
// console.log(num2);


// let name = "kunal";
// console.log(name);
// name = "amul";
// console.log(name);


// const name = "const";
// console.log(name);
// name = "constchange";
// console.log(name);


// let and const is block scope
// var is a function scope


// function sum()
// {
//     var num1 = 5;
//     console.log(num1);
//     if(true)
//     {
//         var num2 = 6;
//         console.log(num2);
//         console.log(num2);
//     }


//     console.log(num2);
// }


// function sum()
// {
//     let num1 = 5;
//     console.log(num1);
//     if(true)
//     {
//         let num2 = 6;
//         console.log(num2);
//         console.log(num2);
//     }


//     console.log(num2);
// }

// sum();


// --------------------------------------------------------------2.) Template string (Template literals)
// function table(num)
// {
//     for(let i = 1; i<=10; i++)
//     {
//         console.log(`${num} * ${i} = ${num * i}`);
//     }
// }


// table(5);

// --------------------------------------------------------3.) default arguments
// default parameters are the parameter passed to avoid the situation when no arguments passed by user
// so default value will works
function sum(num1, num2 = 5)
{
    return num1 + num2;
}

// var ans = sum(4);
// console.log(ans);



// -----------------------------------------------------------4.) fat arrow function
// you can write function direct with fat arrow funcntion likke this and you can also avoid  return statement and curly braces
// in case of a single statement

// var fatArrow = () => {
//     var num1 = 2;
//     var num2 = 2;
//     return `the product of two integerr are is ${num1 * num2}`;
// }

// const funcExpression =  fatArrow();
// console.log(funcExpression);


// in case of a single statement you can avoid return keyword and also the curly braces
// const fatArrow = () => `num`;
// console.log(fatArrow());