console.log(2>1)
console.log(2<1)


//avoide this type of comparisons where datatype is is not same
console.log(null>0)//false dega kue ki null ko 0 mana jata hai comparison me
console.log(null==0)//false dega kue ki null sirf undefined ke barabar hota hai
console.log(null>=0)//true dega kue ki null ko 0 mana jata hai comparison me

console.log(undefined==0)//false dega kue ki undefined sirf undefined aur null ke barabar hota hai
console.log(undefined>0)//false dega kue ki undefined ko koi value nahi di ja sakti comparison me
console.log(undefined<0)//false dega kue ki undefined ko koi value nahi di ja sakti comparison me
//strict check
//like
console.log("2"==2)//datatype ko ignore karta hai ye true return karega
//triple equals

console.log("2"===2)//datatype ko check karta hai ye false return karega kue ke datatype check hoti hai
