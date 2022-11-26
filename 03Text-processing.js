function censoredWords(text, arg) {

    let newText = text;
    while(newText.indexOf(arg) >= 0) {
        newText = newText.replace(arg, '*'.repeat(arg.length))
    }
   console.log(newText);
}

censoredWords('A small sentence with some words',

'small')