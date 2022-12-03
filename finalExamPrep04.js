function theImitationGame(input) {

    let message = input.shift();
    let tempStr = '';

    let line = input.shift();

    while (line !== 'Decode') {

        let lineArgs = line.split('|');
        let command = lineArgs[0];

        switch(command) {
            case 'ChangeAll':
                // change all the 'z' with 'l'
                let substring = lineArgs[1]; //z
                let replacement = lineArgs[2]; //l

                while(message.includes(substring)) { //while message includes z replace it with l
                    tempStr = message.replace(substring, replacement) 
                    message = tempStr;
                }

            break;
            case 'Insert':
                
                let index = Number(lineArgs[1]); 
                let value = lineArgs[2];
                tempStr = message.split('');
                tempStr.splice(index,0,value);
                message = tempStr.join('');
                
                
            break;
            case 'Move':
                let lettersNumber = Number(lineArgs[1]);
                let lettersToMove = message.substring(0,lettersNumber);
                tempStr = message.replace(lettersToMove, '');
                tempStr += lettersToMove;
                message = tempStr;
               
            break;
        }
        
        line = input.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}   

theImitationGame([

    'zzHe',
    
    'ChangeAll|z|l',
    
    'Insert|2|o',
    
    'Move|3',
    
    'Decode'
    
    ])