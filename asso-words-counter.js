function wordsCounter(wordsInput) {

    let words = {};

    for (const word of wordsInput) {
        if(!words[word]) {
            words[word] = 0;
        }
        words[word]++
    }
    
    let sortedWords = Object.entries(words).sort((a,b) => b[1] - a[1]);
    
    for (const [word, count] of sortedWords) {
        console.log(`${word} -> ${count} times`);
    }
   
}

wordsCounter(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"])