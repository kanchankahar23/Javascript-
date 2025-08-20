// lexicalscoping





function abcd() {
    let a = 12;
    function defg() {
        let b = 13;
        function ghij() {
            let c = 14;
        }
    }
}


// IIFE - immediately invoked function expression
(function(){
     console.log("sanchan")
})();