//object literals

const sym="123WSE"
 const JsUser={
    name:"hrishikesh",
    age:19,
    [sym]:"123WSE",
    location:"mumbai",
    email:"lalafjvjr@gmail.com",
    // is logged in is usedx for
    isLoggedin:false,
    lastLoginDays:["monday","saturday"]

 }
 console.log(JsUser.name)
 console.log(JsUser["email"])
 console.log(JsUser[sym])

 JsUser.email="hrishikesh@google.com";
 console.log(JsUser.email)
//  Object.freeze(JsUser)

 JsUser.greeting=function(){
    console.log("hello js user")

 }
 console.log(JsUser.greeting());

//  JsUser.greeting2=function()
// {
//    console.log('hello js user', ${this.name});

// }
// console.log(JsUser.greeting2());
