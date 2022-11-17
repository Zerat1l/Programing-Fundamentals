function oddOccurrences(input) {

    let wordsResult = {};
    let words = input.split(' ').map(w => w.toLowerCase());
    
    for (const word of words) {
        if(!wordsResult.hasOwnProperty(word)) {
            wordsResult[word] = 1
        } else {
            wordsResult[word]++;
        }

    }
    let entries = Object.entries(wordsResult);
    
    let result = '';
    
    for (const entry of entries) {
       if(entry[1] % 2 === 1) {
        result+= `${entry[0]} `;
        
       }
    }
    console.log(result);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');