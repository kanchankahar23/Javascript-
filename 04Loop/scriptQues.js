// print 1 to 10 using for loop
for (let i = 1 ; i < 11 ; i ++){
    console.log(i);
}

// print 10 to 1 using  while loop
for (let m = 10 ; m >= 1 ; m--){
    console.log("m",m);
}

let r = 10;
while(r >= 1){
    console.log("r " ,r);
    r--;
}

// print even 1 to 20 using for
for(let s = 1; s <= 20; s++){
    if(s % 2 == 0){
        console.log("s" ,s)
    }
}

// print odd number 1  to 15 using while 
let k = 1;
while(k<16){
if(k % 2 != 0){
    console.log(k);

}
    k++;
}

// print table
for(let q = 1; q <= 10 ; q ++){
    // console.log(5 * q );
    console.log(`5 * ${q} = ${5 * q}`)
}

// find sum of number from 1 to 100
let sum = 0;
for(let a = 1; a <= 100 ; a++){
 sum+=a;

}
console.log(sum)

// print all number between 1 to 50 that are divisible by 3

for(let e = 1 ; e <= 50; e++){
    if(e%3 == 0){
        console.log(e)
    }
}


// ask the user for a number and print whether each number from 1 to that number is even or odd 
let num = prompt("enter a number");

for(let d = 1 ; d<= num ; d++){
if( d % 2== 0){
    console.log(`${d} is even`)
}
else{
     console.log(`${d} is odd`)
}
}

// count how many numbers between 1 to 100 are divisible by both 3 and 5
let count = 0;
for(let g = 1 ; g <= 100 ; g++){
if(g % 3 == 0 && g % 5 == 0){
  count++;
}

}
console.log(count)