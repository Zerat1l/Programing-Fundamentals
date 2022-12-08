function spiceShelf(input) {

    let spices = input.shift().split(', ');
    let line = input.shift();

    while(line !== 'done') {

        let splited = line.split(' ');
        let command = splited[0];

        switch(command) {
            case 'AddSpice':
            let spiceToAdd = splited[1];
            if(!spices.includes(spiceToAdd)) {
                spices.push(spiceToAdd)
            }
            break;
            case 'AddManySpices':
            let atIndex = splited[1];
            let spicesToAdd = splited[2].split('|');
            

            for(let i = spicesToAdd.length - 1; i >=0 ; i--) {
                spices.splice(atIndex,0,spicesToAdd[i]);
            }
            break;
            case 'SwapSpices':

            let findToSwap = splited[1];
            let swapWith = splited[2];

            if(spices.includes(findToSwap) && spices.includes(swapWith)) {
                let first = spices.indexOf(findToSwap);
                let secound = spices.indexOf(swapWith);
    
                spices.splice(first,1,swapWith);
                spices.splice(secound,1,findToSwap);
            }
           
            break;
            case 'ThrowAwaySpices':
            let trow = splited[1];
            let trowCount = Number(splited[2]);

            if(spices.includes(trow)) {
                let index = spices.indexOf(trow);
                spices.splice(index,trowCount);
            }
            break;
            case 'Arrange':
                let sorted = spices.sort()
                spices = sorted;
            break;
        }

        line = input.shift();
    }

    console.log(spices.join(' '));

}

spiceShelf(['coriander, cloves, paprika, allspice, turmeric, anise, cumin',
'AddSpice nutmeg',
'ThrowAwaySpices cloves 3',
// 'SwapSpices coriander paprika', //
'AddManySpices 3 cayenne|cardamom|mace',
'done'])