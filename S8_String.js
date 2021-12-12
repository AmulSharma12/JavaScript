// Strings are used to store , represent and manipulate the specified text
// var name = "Amul Sharma"
// console.log(name)


// ----------------------------------2.) String Useful methods
// var myName = "Amul Sharma";
// -----------------------a.) length properties
//Gives the length of string 

// console.log(myName.length)

// ----------------------------------------------1.) toLowerCase()
//Covert to lowerr case and return new string 
// not change the original string 

// var lowerCase = myName.toLowerCase()
// console.log(myName)
// console.log("Lower Case : " + lowerCase)


// -------------------------------------------------2.) toUpperCase()
// Not change the original string and return the new string after converting to uppercase

// var UpperCase = myName.toUpperCase()
// console.log(myName)
// console.log("Upper Case : " + UpperCase)

// --------------------------------------------------3.) trim()
//original string remains unchanged
// Removes the whitespaces from starting and end 
// Not removes the whitespaces in between the string

// var newName = "              Amul     Sharma     "
// var trimspace = newName.trim()
// console.log(newName)
// console.log(trimspace)

// 😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀
// ------------------------------------------ c.)Findig a string  in a string

// 😎
// -------------------------------------------1.) indexOf()
// return the first occurence of the specific character if not found then -1
// also pass 2 arguments (text, startingindex)
// if starting index is negative check complete string


// var s  = "Amul Sharma is living "
// var find = s.indexOf(",")
// console.log(s)
// console.log(find)

// var secondArg = s.indexOf('S',6)
// console.log(secondArg)
// var negativeArg = s.indexOf('l',-2)    
// console.log(negativeArg)
// 😎
// ------------------------------------------2.) lastIndexOf()
// return the first occurence of the specific character if not found then -1

// var s = "Amul Sharma is living "
// var exist = s.lastIndexOf("l")
// var notExist = s.lastIndexOf(",")
// console.log(s)
// console.log(exist)
// console.log(notExist)


// 😎
// -----------------------------------------3.) search()
// return the first occurence of the specifice character if not found -1
// not take the second arguments it will take but it will not do anything

// var s = "Amul Sharma "
// var exist = s.search('S')
// var notExist = s.search('Sharma')
// var secondArg = s.search("arma",-2)
// console.log(exist)
// console.log(notExist)
// console.log(secondArg)


// 😁😀😀😀😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁
// ------------------------------------------c.) extracting string parts

// 😎
// ---------------------------------------   1.) splice()
// gives the part of a string 
// gives the startingIndex

// var myName = "Amul Sharma  no "
// console.log(myName)
// var splice = myName.slice(2,6)          //start till excluding end
// var negArg = myName.slice(2,-2)        //start till remove 2 character from last
// console.log(splice)
// console.log(negArg)


// 😎
// ------------------------------------------ 2.) substring()
// var myName = "Amul Sharma Op "
// console.log(myName)
// var substring = myName.substring(2,6)
// var negArg = myName.substring(2,-2)     //start till remove 2 character from first space
// console.log(substring)
// console.log(negArg)


// 😎
// ------------------------------------------ 3.) substr()




// 😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁
// ---------------------------------------------------------------3.) 
