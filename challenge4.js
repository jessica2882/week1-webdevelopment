function challenge4(text, char) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === char) {
            count++;
        }
    }

    return count;
}
console.log(challenge4("hello world", 'o')); 
console.log(challenge4("aaa bbb a", 'a'));  
console.log(challenge4("abc", 'd'));         
