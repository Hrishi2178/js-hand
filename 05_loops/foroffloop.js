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
    console.log(item);  
 })
    

