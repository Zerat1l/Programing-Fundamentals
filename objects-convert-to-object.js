function convertToObject(JSON_to_object) {

    //JSON_to_object is a string in JSON format

    let person = JSON.parse(JSON_to_object) // Here we parse the string in JSON format to an Object
    
    for (const key of Object.keys(person)) {
      console.log(`${key}: ${person[key]}`);
    }
    

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')