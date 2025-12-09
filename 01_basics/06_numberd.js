const score=400
console.log(score);

const cibil=new Number(500);
console.log(cibil);

console.log(cibil.toString().length);
console.log(cibil.toFixed(2));
//tofixed is used to give the decimal upto defined decimal places
console.log(cibil.toPrecision(3));
//toPrecision is used to give the number in a specific format
const other=23.9878;
console.log(other.toPrecision(5));
//roundoff karke value deta hai
const hundreds=1000000
console.log(hundreds.toLocaleString("en-IN"));





//****************** MATHS*************** */
console.log(Math)
//absolute value
console.log(Math.abs(-47));
//ceilvalue give the value of next integer
console.log(Math.ceil(4.2));
//floor value give the value of previous integer
console.log(Math.floor(4.7));
//round value give the nearest integer
console.log(Math.round(4.5));
//square root
console.log(Math.sqrt(64));
console.log(Math.random());//0 to 1
console.log((Math.random()*10) +1);//0 to 10
console.log(Math.floor((Math.random()*10) +1));//1 to 10    

//random number between min and max
const min=10;
const max=20
console.log(Math.random()*(max-min+1)+min)

