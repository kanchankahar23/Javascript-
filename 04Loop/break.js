//  Break and continue

for(let i =1 ; i<201 ; i++){
    // console.log(i);
    if(i == 32){
        break;
    }
}


// continue
for(let i =1 ; i<201 ; i++){
    
    if(i == 32){
        continue;
    }
    console.log(i);
}



// break and continue question 
// Q1 print first 5 odd number only 
// write a loop from 1 to 100 that 
//  prints only 5 odd number
//  then stops the loop 

// use both if continue and counter + break 
// expected output: 1 3 5 7 9

let count = 0;
for(let h =1; h<=100; h++){
    if(h % 2 === 1){
        count++;
        console.log(h);
    }
    if(count === 5 ){
        break
    }
}
