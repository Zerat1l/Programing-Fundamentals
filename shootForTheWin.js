function shootToWin(input) {

    let targets = input.shift().split(' ').map(Number)
    let command = input.shift();
    let shotCount = 0;

    while(command !== 'End') {

        let index = Number(command);
        //targets[index]
        //index >= 0 && index < targets.length
        if(index >= 0 && index < targets.length) {
            let currentTarget = targets[index];
            targets[index] = -1;
            shotCount++;
            
            for (let i = 0; i < targets.length; i++) {
                
                if(targets[i] === -1) {
                    continue;                    
                } else if(targets[i] > currentTarget) {

                    targets[i] -= currentTarget;
                } else if(targets[i] <= currentTarget) {

                    targets[i] += currentTarget;
                }
                   
            }
        }

        command = input.shift()
    }
    let result = targets.join(' ');
    
    console.log(`Shot targets: ${shotCount} -> ${result}`);
}

shootToWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"23",
"End"])

