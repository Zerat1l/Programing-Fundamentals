function counterStrike(input) {
  let initalEnergy = Number(input.shift());
  let battlesWon = 0;
  let isEnoughtEnergy = true;

  let command = input.shift();

  while (command !== "End of battle") {
    let energy = Number(command);

    if (initalEnergy - energy < 0) {
        isEnoughtEnergy = false;
        console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${initalEnergy} energy`);
      break;
    }
    initalEnergy -= energy;
    battlesWon++;

    if (battlesWon % 3 === 0) {
        initalEnergy += battlesWon;
    }

    command = input.shift();
  }

  if (isEnoughtEnergy) {
    console.log(`Won battles: ${battlesWon}. Energy left: ${initalEnergy}`);
  } 
}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "74", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
