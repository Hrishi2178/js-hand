function mname(){
    console.log("hrishikesh")
    console.log("karale")

    
}
 //mname()
 function add(num1,num2)
 {
let result=num1+num2;
return result;

 }
 const result=add(1,3)
 console.log("result:",result)
 //it is showing undefined as output coz consolelog wont store the data it just give the output 
 // so for this reason we have to use 

 function loginuser(username){
    return '${username} just logged in'
 }
 loginuser("hrishikesh");
 console.log(loginuser("hrishikesh"));
 //




 //rest operator
 function calculatrCartPrice(...num1){
    return num1;

 }
 console.log(calculatrCartPrice(200,555,4343))

 const users={
    username:"Hrishikesh",
    price:4040


 }
 function handleobject(anyobject){
    console.log('username ${handleobject.username}   and price is ${anyobject.price}');
 }
 //handleobject(users)
handleobject( {
  username:"hrvk",
     price :399  
 }) 
 console.log(users)