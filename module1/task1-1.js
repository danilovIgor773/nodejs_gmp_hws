function reverseString(str) {
    if(!str) {
        return '';
    }
    return str.split("").reverse().join("");
}

process.stdin.on("data", buffer => {
    let convertedToStringBufferData = '';
    convertedToStringBufferData = buffer.toString();
    const revertedStringOutput = reverseString(convertedToStringBufferData);
    process.stdout.write(revertedStringOutput + "\n")
})