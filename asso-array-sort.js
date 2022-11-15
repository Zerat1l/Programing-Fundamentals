let book = {
    joro: '4984651861',
    lora: '9898298+56',
    pesho: '564156165',
    pena: '565225255',
    Alex: '481561815'
}

//convert asso array to normal array

let bookEntries = Object.entries(book);

//sort the array

bookEntries.sort((a, b) => a[0].localeCompare(b[0]))
console.log(bookEntries);
//OPTIONAL convert back to asso array

let sortedBook = Object.fromEntries(bookEntries);
console.log(sortedBook);