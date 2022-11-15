function addressBook(input) {
    //Create address book object
    const myBook = {};
    //Take the name and address from the input and assign it to myBook object
    for (const entry of input) {
        let entryArr = entry.split(':')
        let name = entryArr[0];
        let address = entryArr[1];

        myBook[name] = address;
    }
    //convert the object into array and sort it 
    let addressBookEntrys = Object.entries(myBook);
    addressBookEntrys.sort((a,b) => a[0].localeCompare(b[0]))
    
    //Print the result
    for (const entry of addressBookEntrys) {
        let name = entry[0];
        let address = entry[1];

        console.log(`${name} -> ${address}`); 
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])