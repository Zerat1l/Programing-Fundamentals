function countWords(text, word) {

    let count = 0;
    let textArr = text.split(' ');

    for (const el of textArr) {
        if(el === word) {
            count++;
        }
    }
    console.log(count);
}


countWords('This is a word and it also is a sentence',

'is')
countWords('softuni is great place for learning new programming languages',

'softuni')