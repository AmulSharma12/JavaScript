//------------------------------------------------------how + works
// console.log(10 + " Amul");          //data + string = concat
// console.log("Amul " + 10);          //string + data = concat
// console.log("Amul " + " Sharma")     //string + string = concat


//---------------------------------------------------------how - works
// console.log(10 - " 4 ");             //data - string  = bug
// console.log("4" - 10);               //string(ifValue) - data(bug)
// console.log(10 - " Sharma");        //Nan
// console.log("Amul " - 5);           //NaN
// console.log("Amul " - "Sharma");    //NaN



// -------------------------------------------(Interview question 1)null vs undefined
// null vs undefined
// null ->  variable value is null  
//undefined -> when variable declared and not initialised then value is replace with placeholder 
// undefined 

// var num = null;
// console.log(num);
// console.log(typeof(num));
// var num2;
// console.log(num2);
// console.log(typeof(num2));


// -----------------------------------------------------(Interview question 2)NaN
var isnotnumber = isNaN(Number.NaN);
console.log(isnotnumber);
  