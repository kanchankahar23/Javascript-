// rock paper scissors logic

function rps(user, computer) {
    if (user === computer) return "draw";
    if (user === "rock" && computer === "scissor") {
        return "user";
    }
    if (user === "scissor" && computer === "rock") {
        return "computer"
    }
    if (user === "paper" && computer === "rock") return "user";
    if (user === "rock" && computer === "paper") return "computer";
 if (user === "scissor" && computer === "rock") return "computer";
}
console.log(rps("rock", "scissor"))




// Optimize code 
function game(user, computer) {
    if (user === computer) return "draw";

    if (user === "rock" && computer === "scissor") return "user";
    if (user === "scissor" && computer === "paper") return "user";
    if (user === "paper" && computer === "rock") return "user";

    return "computer";
}
console.log(game("rock", "paper"));