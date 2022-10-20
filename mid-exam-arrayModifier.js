function arrayModifier(input) {

    //Take all elements
    let arrayOfNums = input.shift().split(' ').map(Number)
    let command = input;
    let currentCommand = command.shift();
    
    // loop till recive command 'end'

    while(currentCommand !== 'end') {

        let toDo = currentCommand.split(' ');
        let currCommand = toDo[0];
        let index1 = toDo[1];
        let index2 = toDo[2];
        let itemIndex1 = arrayOfNums[index1];
        let itemIndex2 = arrayOfNums[index2];
        
        switch(currCommand) {
            case 'swap':
                let temp = 0;
                temp = itemIndex1;
                arrayOfNums[index1] = itemIndex1 = itemIndex2;
                arrayOfNums[index2] = itemIndex2 = temp;
            break;
            case 'multiply':
                let result = arrayOfNums[index1] * arrayOfNums[index2];
                arrayOfNums[index1] = result;

            break;
            case 'decrease':

            for(let i = 0; i < arrayOfNums.length;i++) {
                arrayOfNums[i] = arrayOfNums[i] - 1;
            }
            
            break;
        }

        currentCommand = command.shift();
    }
    console.log(arrayOfNums.join(', '));
}

arrayModifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])