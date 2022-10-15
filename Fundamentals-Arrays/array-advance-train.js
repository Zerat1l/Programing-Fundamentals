function train(arr) {

    let passengersInTrain = arr.shift().split(' ').map(Number);
    let maxCap = Number(arr.shift());
    
    for(let i = 0; i < arr.length;i++) {
        let command = arr[i].split(' ');
        
        if(command[0] === 'Add') {
            passengersInTrain.push(Number(command[1]))
        } else {
            let peopleToAdd = Number(command[0])

            for(let k = 0; k < passengersInTrain.length; k++) {
                if(peopleToAdd + passengersInTrain[k] <= maxCap) {
                    passengersInTrain[k] += peopleToAdd;
                    break;
                }
            }
        }
        
    }
    console.log(passengersInTrain.join(' '));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
