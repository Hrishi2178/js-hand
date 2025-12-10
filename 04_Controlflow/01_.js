//
// if(condition){
//     true hai toh execute else not execute
//condition kuch bhi ho sakti hai jaise 2==2 otr true hai ke false jab true hogi conditin tb hi vo andarjayega
 // <,>,<=,>=,==,!=,===(datatype check karne ke liye),!==(negative sign)}
 const temprature=41;
 if(temprature===40){
    console.log("less than 50");

 }
 else{
    console.log("temprature is grater than 50");

 }

 console.log("execute")


 const score=500;

 if(score>250){
    let power="fly"
    console.log(`User power: ${power}`);

 }

 let useremail="hrishi@gmail.com"
  if(useremail){
    console.log("got the user email");

  }
  else{
    console.log("user email not found")
  }
  let month;
switch(month){
   case "jan":
      console.log("january");
      break;

   case "feb":
      console.log("february")
      break;

      case "mar":
         console.log("march")
         break;
   case "april":
         console.log("april")
         break;
   case "may":
         console.log("may")
         break;
    case "june":
         console.log("june")
         break;
    case "july":
         console.log("july")
         break;
    case "aug":
         console.log("august")
         break;
         
   case "sep":
         console.log("september")
         break;

   case "oct":
         console.log("october")
         break;

    case "nov":
         console.log("november")
         break;
      case "dec":
         console.log("december")
         break;

      default:
         console.log("invalid month")
         break;


      
}
  //it returns true when some value is given the value on which it return 
  //falsy values
  //  are 0,-0,BigInt 0n,null,undefined,NaN
//TRUTHY Values
//"0",'false'," ",[],{},function(){}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("empty object")

}


// if(userLoggedIn && debitCard && 2==3){
//     console.log("allow to buy course");

// }
//nullish conslescing operator 
let val1;
val1=5 ?? 10



console.log(val1);
val1=null??10
console.log(val1);
val1=undefined??10
console.log(val1);
val1=null??10??20
console.log(val1);
val1=undefined??10??20
console.log(val1);

// terniary operator
iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80") :console.log("more than 80")