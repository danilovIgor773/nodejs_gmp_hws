const readline = require("readline")

function reverseString(str) {
    if(!str) {
        return '';
    }
    return str.split("").reverse().join("");
}

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
})

function ask(question) {
    rl.question(question, (answer) => {        
        const revertedResult = reverseString(answer);
        rl.write(`Reverted result:  ${revertedResult}\n`)

        ask(question)
    })
}

ask("Enter any string and it will be reverted: ") 