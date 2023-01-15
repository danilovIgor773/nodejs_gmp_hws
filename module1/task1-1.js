import { reverseString } from './utils/stringReverse';

process.stdin.on("data", buffer => {
    let convertedToStringBufferData = '';
    convertedToStringBufferData = buffer.toString();
    const revertedStringOutput = reverseString(convertedToStringBufferData);
    process.stdout.write(revertedStringOutput + "\n")
})