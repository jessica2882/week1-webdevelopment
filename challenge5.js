function challenge5(text) {
    let words = text.split(' ').filter(word => word.trim() !== '');
    return words.length;
}

console.log(challenge5("hello world"));           
console.log(challenge5("this is the best day"));   
console.log(challenge5("a bb ccc dddddd e"));      