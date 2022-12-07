function encryptMsg(input) {

    let pattern = /(\W[^>|<])>(?<numbers>[0-9]{3})\|(?<smallL>[a-z]{3})\|(?<bigL>[A-Z]{3})\|(?<symbol>[-!$%^&*()_+|~=`{}\[\]:";'?,.\/]{3})<\1/g
    let count = Number(input.shift());
    let result = '';
    for (let index = 0; index < count; index++) {
        let line = input[index];
        let matches = line.matchAll(pattern);

        let match = line.match(pattern);

        if(match === null) {
            console.log('Try another password!');
        } else {
            for (const match of matches) {
            
                let num = match.groups.numbers;
                let smallLetters = match.groups.smallL;
                let bigLetters = match.groups.bigL;
                let sym = match.groups.symbol;
    
                result += num;
                result += smallLetters;
                result += bigLetters;
                result += sym;
            }
            console.log(`Password: ${result}`);
        } 
    }    
}

encryptMsg(["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"])