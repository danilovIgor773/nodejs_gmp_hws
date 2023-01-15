import readline from 'readline';
import { reverseString } from './utils/stringReverse';

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