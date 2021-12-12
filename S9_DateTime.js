// 😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁 
//  Date and time object in javascript
// 4 ways to create date object in javascript


// 😁
// --------------------------------------------------1.)  new Date()
// var currDate = new Date()          //gives greenwhich mean time                
// console.log(currDate)
// console.log(new Date())            //2021-12-10T04:16:11.965Z  2021-12-10T04:16:11.975Z

// IST(Indian Standard Time ) is 5hr20min ahead of GMT(Greenwhich Media Time)
// var currDate = new Date().toLocaleString()  //gives exact time 10/12/2021, 9:49:22 am
// console.log(currDate)           
// var currDate = new Date().toLocaleDateString()   //gives only date 10/12/2021
// console.log(currDate)
// var currDate = new Date().toString()       //gives according to the browser also exact time
// console.log(currDate)
// var currDate = new Date().toDateString()     //gives only date   Fri Dec 10 2021
// console.log(currDate)


// 😁
// -------------------------------------------------------2.) Date.now()
// returns the miliseconds(number) corresponds to the milisecond elapsed from  1 January 1970 00:00:00UTC
// console.log(Date.now())      //1639110497880
 

// 😁
// --------------------------------------------------------3.) new Date(date String)
// gives the information if you pass the date string in format
// var d = new Date("October 13 2021 2:20:00")
// console.log(d)              //2021-10-12T20:50:00.000Z
// console.log(d.toString())    //Wed Oct 13 2021 02:20:00 GMT+0530 (India Standard Time)
// console.log(d.toLocaleString())    //13/10/2021, 2:20:00 am


// 😁
// ------------------------------------------------4.) new Date(miliseconds)
// if you pass the milliseconds then it will give info about time date month
// var d = new Date(1639110497880)       //10/12/2021, 9:58:17 am
// console.log(d.toLocaleString())


// 😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁 -> b.) Date Methods
// using some important date methods that are useful for javascript

var currDate = new Date()

// console.log(currDate.toLocaleString())
// console.log(currDate.getFullYear())
// console.log(currDate.getMonth())
// console.log(currDate.getDay())
// console.log(currDate.getDate())


// 😁 2.) How to set individual date   -> returns in milliseconds
// console.log(currDate.getFullYear(currDate.setFullYear(2022)))
// console.log(currDate.setMonth(13))
// console.log(currDate.getMonth(currDate.setMonth(8)))
// console.log(currDate.setDate(13))



// 😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁 -> c.) Time Methods
//using some important methods of time used in javascript
// var time = new Date()
// console.log(time.getTime())            //-> return time in milliseconds
// console.log(time.getHours())           //-> return hours
// console.log(time.getMinutes())         //-> return Minutes
// console.log(time.getSeconds())         //-> return seconds
// console.log(time.getMilliseconds())    //-> return milliseconds

// 😁 -> b.) How to set individual time  -> return the milliseconds
// console.log(time.setTime(3))
// console.log(time.setHours(45))
// console.log(time.setMinutes(45))
// console.log(time.setSeconds(44))
// console.log(time.setMilliseconds(89)) 

