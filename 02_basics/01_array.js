let arr=[1,2,3,4,5]
console.log(arr[0]);
const myHeros=["hrishikesh",'ironman','spiderman'];
// console.log(myHeros[1]+" loves to watch"+ myHeros[2]);
// console.table(myHeros);
// console.time("array time");
// for(let i=0;i<100000;i++){
//     myHeros.push("hulk");
// }
// console.timeEnd("array time");
// console.log(myHeros);
//array methods
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(77);
console.log(arr);
arr.shift();
console.log(arr);
console.log(arr.indexOf(3));
console.log(arr.includes(5));
console.log(Array.isArray(arr));
console.log(arr.length);
console.log(myHeros);
//slice meathod and splice meathod
//slice meathod is used to extract a portion of an array without modifying the original array
//while splice is splice remove the origanal content  slice just have the copy but splice actully remove the origanal content of array
console.log("A",arr);
const myn1=arr.slice(1,3);
console.log(myn1);
console.log("B",arr);
const myn2=arr.splice(1,3);
console.log(myn2);
console.log("C",arr);