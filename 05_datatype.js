//primitive 
//7 types
//STRINGS, BOOLEANS, NUMBERS, NULL(EMPTY), UNDEFINED, SYMBOLS, BIGINT

const score=100;
const scoreValue=100.4;

const id=Symbol("123");
console.log(id);
const anotherId=Symbol("123");
console.log(id===anotherId);//false isliye kue ki symbol unique hota hai
//REFRANCE TYPE(NON-PRIMITIVE)
//ARRAYS, OBJECTS, FUNCTIONS, DATES, ANYTHING ELSE

const heros=["hrishikesh","ironman","spiderman"];//array aasa detat ki jisme hum multiple values store kar sakte hai
console.log(heros);
console.log(typeof heros);//object deyil karan array  pn yek object aaste

//curly braces ke andar jitna bhi hai vpo object hai 
let myObj={
    name:"hrishikesh",
    age:19,
    isLoggedIn:true
}
console.log(myObj);
console.log(typeof myObj);

function myFunction(){
    console.log("hello worls");
    return 1;

}
//agar kisi bhi iska sdata type pataa karna hai to bohot simple hai bas typeof likho or phir data type ka name
console.log(typeof myFunction);//function pn ek object aaste
console.log(typeof NULL);
//PRIMITIVE USE STACK MEMORY
//REFERENCE TYPE USE HEAP MEMORY