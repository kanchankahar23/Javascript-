function createToaster(config) {
    return function (str) {
        console.log("hi")
        let div = document.createElement("div");
       
        div.className = "inline-block bg-gray-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity duration-300";
    console.log(str)
     div.textContent = str;
        document.querySelector(".parent").appendChild(div);
        setTimeout(() => {
            document.querySelector(".parent").remove();
        }, config.duration * 1000);
    }

}
let Toster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 2,
});

Toster("download done");
setTimeout(()=>{
    Toster("kanchan accepted your request")
},4)
// Toster("download done");