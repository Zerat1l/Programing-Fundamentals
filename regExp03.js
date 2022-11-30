function race(input) {

    let listOfRacers = input.shift().split(', ');
    let patternName = /[A-Za-z]+/g
    let patternDistance = /[0-9]+/g
    let objectOfRacers = {};

    let command = input.shift();

    while(command !== 'end of race') {

        let racerName = command.match(patternName).join('');
        let racerDistance = command.match(patternDistance).join('')
        
        if(listOfRacers.includes(racerName)) {

        let totalDistance = 0;

        for (const digit of racerDistance) {
            totalDistance += Number(digit);
        }

        if(!objectOfRacers.hasOwnProperty(racerName)) {
            objectOfRacers[racerName] = totalDistance;
        } else {
            objectOfRacers[racerName] += totalDistance;
        }
    }
        command = input.shift();
    }

    let sortedRacers = Object.entries(objectOfRacers).sort((a,b) => b[1] - a[1]);
    console.log(`1st place: ${sortedRacers[0][0]}`);
    console.log(`2nd place: ${sortedRacers[1][0]}`);
    console.log(`3rd place: ${sortedRacers[2][0]}`);

}

race(['George, Peter, Bill, Tom',

'G4e@55or%6g6!68e!!@ ',

'R1@!3a$y4456@',

'B5@i@#123ll',

'G@e54o$r6ge#',

'7P%et^#e5346r',

'T$o553m&6',

'end of race'])