function convertToJSON(name,lastName,color) {

    let person = {}

    person.name = name;
    person.lastName = lastName;
    person.hairColor = color;
    
    //Here we convert the Object 'person' to a JSON string format
    let asJSON = JSON.stringify(person);
    console.log(asJSON);
}

convertToJSON('George', 'Jones','Brown' )