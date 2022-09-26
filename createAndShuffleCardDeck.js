//Creating deck

function createDeck() {
    let suits = ['Speids', 'Dimonds', 'Hearts', 'Clubs'];
    let value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let deck = [];

    for (i = 0; i < suits.length; i++) {
        for (j = 0; j < value.length; j++) {
            let card = suits[i] + '-' + value[j];
            deck.push(card);

        }
    }
    // console.log('Ordered deck: ' + deck)
    return deck;
}

//Shuffle deck

function shuffelDeck(deck) {
    for (let i = 0; i < 52; i++) {

        let tempCard = deck[i];
        let randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempCard;
    }
}

let testDeck = createDeck();
let shuffle = shuffelDeck(testDeck);
shuffelDeck(testDeck);
// console.log('Shuffled deck: ' + testDeck);



function playerHand(testDeck) {

    let yourHand = [testDeck[0], testDeck[1], testDeck[2], testDeck[3], testDeck[4]];
    console.log('This is your hand: ' + yourHand);
}

playerHand(testDeck);


function demo(input) {
    let firstNum = Number(input[0]);
    let lastNum = Number(input[1]);
    let sum = 0;
    let buff = '';

    for(let i = firstNum;i<=lastNum;i++) {
        if(i % 9 === 0) {
            sum += i;
            buff += `${i}\n`
            
        }
    }
    console.log(`The sum: ${sum}`)
    console.log(buff)
}

// demo(["100", "200"])



