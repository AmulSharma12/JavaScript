// object.fromentries()  - it will convert the array into the object

var obj = {
    name: "Amul Sharma",
    result: "pass",
    grade: "well"

};

console.log(obj);
var arr = Object.entries(obj);
console.log(arr);
var resObj = Object.fromEntries(arr);
console.log(resObj);