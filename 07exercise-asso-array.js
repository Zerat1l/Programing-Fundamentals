function cardGame(input) {

    let pow2 = 2;
    let pow3 = 3;
    let pow4 = 4;
    let pow5 = 5;
    let pow6 = 6;
    let pow7 = 7;
    let pow8 = 8;
    let pow9 = 9;
    let pow10 = 10;
    let powJ = 11;
    let powD = 12;
    let powK = 13;
    let powA = 14;

    let typeS = 4;
    let typeH = 3;
    let typeD = 2;
    let typeC = 1;

    let playerHand = {};
    
    for (const line of input) {
        let [name, cards] = line.split(':');
        // let cardsAsArray = cards.split(',');
        
        if(!playerHand.hasOwnProperty(name)) {
            playerHand[name] = [];
        }
        playerHand[name].push(cards);
    
    }  
    let entries = Object.entries(playerHand);
        console.log(entries);
    for (const entry of entries) {
        let unicueCards = new Set(entry)
        // console.log(unicueCards);
    }
    
}

cardGame([

    'Peter: 2C, 4H, 9H, AS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
    ])



    let a = 'Hello Javascript';
    let replace = a.replace('Hello', 'Bye')
    let sub = a.substring(0,5)
    // console.log(a.padEnd(19,'.'));
    // console.log(a.lastIndexOf('o'));
    console.log(sub);
    
    // console.log(a.includes('ript'));

    function solve() {
        let text = '    The time here is very bad    ';
        while (text.includes('time')) {
            text = text.replace('time', '*'.repeat('time'.length))
            console.log(text);
            console.log(text.trim());
        }

    }
    // solve();


