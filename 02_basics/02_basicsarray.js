const marvel=["thor","ironman","spiderman"];
const dc=["superman","flash","batman"];
marvel.push(dc);
console.log(marvel);
console.log(marvel[3][1]);


marvel.concat(dc);
console.log(marvel);


// const allHeros=marvel.concat(dc)
// console.log(allHeros);
// // 
const newheroes=[...marvel,...dc];
 console.log(newheroes);

 console.log(Array.isArray("hrishikesh" ))
 console.log(Array.from("hrishikesh"));