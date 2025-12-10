// let a=5;
// const b=4;
// var c=7;

if(true){
    let a=5;
const b=4;
var c=7;
}
console.log(c);
//var is not at all used because since all let,var,const are in scope let and const are throwing th error while var is printing although it is inside the scope

function one(){
    const username="hrishikesh"
     function two(){
        const website="youtube"
        console.log(username);

     }

     two()

}
one()







function addone(num){
    return num+1
  
}
addone(5)
  console.log(addone(5));

  addtwo(43)
  const addtwo= function(num){
    return num+2
  }