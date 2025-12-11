// for
// for(let i=0;i<10;i++){
//     console.log(i);
// }
// console.log("nonst")

for(let i=0;i<10;i++){
    console.log(`outerloop ${i}`);
    {
        for(let j=1;j<11;j++){
            console.log(i+"*"+j+"="+i*j);
        }
    }
    
}
let myarray=["flash","batman","superman","wonderwoman","aquaman","ironman","spiderman","thor","hulk","blackpanther","captainamerica","antman","blackwidow","hawkeye"   ]
console.log(myarray.length);

for(let i=0;i<myarray.length;i++){
    
    console.log(i+" "+myarray[i]);

}

//break and continue
 for(let i=1;i<20;i++){
    if(i==5){
        console.log("deteted 5");
        break

    }
    console.log(`value of index is ${i}`);
 }