//dates
let myDate=new Date();
console.log(myDate.toString());
//specific date
console.log(myDate.toLocaleDateString());
//specific  date time
console.log(myDate.toLocaleString());
//Tue Dec 09 2025
console.log(myDate.toDateString());
//12:32:31 GMT+0530 (India Standard Time)
console.log(myDate.toTimeString());
console.log(typeof myDate);
//months are starting from the zero not 1
let specificDate=new Date(2023,0,15,10,33,30,0);
console.log(specificDate.toString());

let myTimeStamp=Date.now();
//timestamp is the number of milliseconds that have elapsed since January 1, 1970 (midnight UTC/GMT)
console.log(myTimeStamp);
//i want in seconds
console.log(Math.floor(Date.now()/1000));