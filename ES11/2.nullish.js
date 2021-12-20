// when any null or undefined comes in left side it will take the result to right operand
// and when not any null or undefined comes in right side it will take the result of the left operand
// its symbol is ??


// const print = null ?? "null gives right operand"
// console.log(print)

// const print2 = undefined ?? "undefined gives right operand"
// console.log(print2)

const num = 3;
const ans = undefined ?? "no null/undefined gives left operand values"
console.log(ans)