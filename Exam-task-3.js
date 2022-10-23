function deckOfCards(input) {
  let listOfCards = input.shift().split(",");
  let numberOfCommands = Number(input.shift());
  let commands = input.slice();
  let finalArr = [];

  for (let i = 0; i < numberOfCommands; i++) {
    let currentCommand = commands.shift().split(", ");
    
    switch (currentCommand[0]) {
      case "Add":
        let curCard = currentCommand[1];
        if(!listOfCards.includes(curCard)) {
            listOfCards.push(curCard);
            console.log(`Card successfully added`);
        }else {
            console.log(`Card is already in the deck`);
        }
        
        break;
      case "Remove":
        let cardToRemove = currentCommand[1];

        if(listOfCards.includes(cardToRemove)) {

            let atIndex = listOfCards.indexOf(cardToRemove)
            listOfCards.splice(atIndex,1)
            console.log(`Card successfully removed`);
            
        } else {
            console.log(`Card not found`);
        }
        break;
      case "Remove At":
        let currentCardToRemove = currentCommand[1];
        let checkRange = listOfCards.indexOf(currentCardToRemove)

        if(checkRange === -1) {
            console.log(`Index out of range`);
        } else {
            listOfCards.splice(checkRange,1)
            console.log(`Card successfully removed`);
        }
        break;
      case "Insert":
        let index = Number(currentCommand[1]);
        let cardName = currentCommand[2]

        let range = listOfCards.at(index);
        let isInDeck = listOfCards.includes(cardName);
        
        if(range === -1) {
            console.log(`Index out of range`);
        }
        else if(range > -1 && !isInDeck) {
            console.log(`Card is already added`);
        } else {
            listOfCards[index] = cardName;
            console.log(`Card successfully added`);
        }

        break;
    }
    
  }
  console.log(listOfCards.join(','));
}

deckOfCards([
  "Ace of Diamonds, Queen of Hearts, King of Clubs",
  "3",
  "Add, King of Diamonds",
  "Insert, 2, Jack of Spades",
  "Remove, Ace of Diamonds",
]);

// deckOfCards(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
// "2",
// "Add, Two of Clubs",
// "Remove, Five of Hearts"])

// deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
// "2",
// "Insert, -1, Queen of Spades",
// "Remove At, 1"])
