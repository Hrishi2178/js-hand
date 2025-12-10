

const mobileUser=new Object();


mobileUser.name="hrvk";
mobileUser.id="123ere";


console.log(mobileUser);

const regulaUser={
    email:"hrvk@gmail.com",
    fullname:{
    userFullname:{
        FIRSTNAME:"HRISHIKESH",
        LASTNAME:"KARALE",
    }

}
}
console.log(regulaUser.fullname.userFullname.FIRSTNAME);
const obj1 ={1:"a",2:"b"};
const obj2 ={3:"a",4:"b"};
const obj3 ={5:"a",6:"b"};


const obj4 =Object.assign({},obj1,obj2,obj3);
 const obj5={
    ...obj1,
    ...obj2,
    ...obj3
}
console.log(obj4);
console.log(obj5);

const users=[
    {
        id:1,
        email:"hrvk@gmail.com"
        },
    {
        id:2,
        email:"hrvk@gmail.com"
        },
    {
        id:3,
        email:"hrvk@gmail.com"
        
    }
]
users[1].email
console.log(mobileUser.hasOwnProperty);
console.log(mobileUser.obj2);
console.log(mobileUser.obj3);   



// const course={
//     coursename:'js',
//     price:'555'

// }

// const{
//     coursename
// }=course;
// console.log(coursename);

// {
//     "name":"hrishi",
//     "course":"js",
//     "price":"555"

// }

[

    {},
    {},
    {}

]

   
