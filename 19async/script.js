// async await
let pr = new Promise(function (res, rej) {
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10);
        // console.log(rn);
        if (rn > 5) res("resolves with " + rn);
        else rej("rejected with " + rn);

    }, 2000);
});
// console.log(pr)

pr.then(function (val) {
    console.log(val);
})

pr.catch(function (val) {
    console.log(val);
})


async function change() {
    try {
        let val = await pr;
        console.log(val);
    }
   catch(err){
console.log(err);
   }
}

change();