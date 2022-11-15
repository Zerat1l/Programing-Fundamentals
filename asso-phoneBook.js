function phoneBook(input) {

    let phoneBook = {};

    for (const entry of input) {
        let entryArr = entry.split(' ');
        let name = entryArr[0];
        let number = entryArr[1];

        phoneBook[name] = number;
    }

    for (const name in phoneBook) {
       console.log(`${name} -> ${phoneBook[name]}`);
    }
    
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])