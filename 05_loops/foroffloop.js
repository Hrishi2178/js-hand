//for of
const arr=[1,2,3,4]
for(const num of arr){
    console.log(num);

}
//maps unique values ke liye jana jata hai agar wapas entry hogi toh accept nahi hoga

const map= new Map()
map.set(`in`,"india")
map.set(`us`,"united states")
//maps are iteratable but objects are not iteratable

const myObject={
    js:`javascript`,
    rb:`ruby`,
    py:`python`
}

for(const key in myObject){
    console.log(key,myObject[key]);

}

const coding=[`js`,`rb`,`py`,`c++`,`c`,`java`]
 coding.forEach(function(item){
   // console.log(item);  
   return item
 })
    
 const myNums=[1,2,3,4,5,6,7,8,9]
 const newNums=myNums.filter((num)=>{
    num>4
 })
 console.log(newNums);
 //agar curly braces that is scope agar start kar diya toh return dena he padega for sure

 const myNumers=[1,2,3,4,5,6,7,8]
 const newNumers= myNumers.map((num => num+10))

console.log(newNumers);