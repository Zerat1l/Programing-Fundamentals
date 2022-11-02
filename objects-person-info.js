function personInfo(firstName, lastName, age) {

    let arr = [firstName, lastName, age];
    let person = {}
    person.firstName = arr[0];
    person.lastName = arr[1];
    person.age = Number(arr[2]);
    
    return person;
}

personInfo("Peter","Pan","20")