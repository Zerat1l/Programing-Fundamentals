function employ(names) {

    let list = {};
    
    names.forEach(person => {

        let personalNum = person.length;
        list[person] = personalNum;
        
    });
    for (const key in list) {
        console.log(`Name: ${key} -- Personal Number: ${list[key]}`);     
        }
}

employ([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])