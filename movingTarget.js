function movingTarget(input) {

    let targets = input.shift().split(' ');
    let targetsNum = [];
    
    
    for (let target of targets) {
        target = Number(target);
        targetsNum.push(target);
    }

    let line = input.shift();
    
    while(line !== 'End') {

        let splited = line.split(' ');
        let command = splited[0];
        switch(command) {
            case 'Shoot':
                let index = Number(splited[1]);
                let power = Number(splited[2]);

                if(targetsNum[index]) {
                    targetsNum[index] -= power;
                    if(targetsNum[index] <= 0) {
                        targetsNum.splice(index,1);
                    }
                }
            break;
            case 'Add':
                let indexToAdd = Number(splited[1]);
                let value = Number(splited[2]);

                if(targetsNum[indexToAdd]) {
                    targetsNum.splice(indexToAdd,0,value);
                } else {
                    console.log('Invalid placement!');
                }
            break;
            case 'Strike':
                let indexStrike = Number(splited[1]);
                let radius = Number(splited[2]);
                let radiusFrom = indexStrike - radius;
               
                if(targetsNum[indexStrike] && targetsNum[indexStrike - radius] && targetsNum[indexStrike + radius]) {
                    targetsNum.splice(radiusFrom, radius * 2 + 1);
                  
                } else {
                    console.log('Strike missed!');
                }
            break;
        }

        line = input.shift();
    }
    console.log(targetsNum.join('|'));
}

movingTarget((["52 74 23 44 96 110",

"Shoot 5 10",

"Shoot 1 80",

"Strike 2 1",

"Add 22 3",

"End"]))

movingTarget(["1 2 3 4 5",

"Strike 0 1",

"End"])