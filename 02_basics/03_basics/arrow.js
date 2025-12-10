const user={
    username:"hrishikesh",
    price:99,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);

              //console.log(this);
    }

}
user.welcomeMessage()
user.username="rohit"
user.welcomeMessage()
 console.log(this);


 function chai(){
    console.log(this);

 }
 chai()

//arrow function use ho raha hai or output same as that of regular while we are writting the function

 const chai2=() =>{
    let username="hrishikesh"
    console.log(this.username);

 }
 chai2()

 const add=(num1,num2)=>num1+num2
 console.log(add(5,4));
 //curly braces use kiye to return likhna hai or normal small bracket use kiye toh return likhne ki jaroorat nahi hai
 
