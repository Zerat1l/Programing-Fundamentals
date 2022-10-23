function theLift(input) {
  let peopleCount = Number(input.shift());
  let wagons = input.shift().split(" ").map(Number);
  let maxCount = 4;

  for (let i = 0; i < wagons.length; i++) {
    let currentWagon = wagons[i];

    for (let k = peopleCount; k > 0; k--) {
      if (currentWagon < maxCount) {
        peopleCount--;
        currentWagon += 1;
      } else {
        break;
      }
    }
    wagons[i] = currentWagon;
    
  }
  let emptyIndex = wagons.indexOf(0);

  if(emptyIndex === -1 && peopleCount > 0) {
    console.log(`There isn't enough space! ${peopleCount} people in a queue!`);
    console.log(wagons.join(' '));
  }else if(emptyIndex === -1 && peopleCount === 0) {
    console.log(wagons.join(' '));
  } else {
    console.log('The lift has empty spots!');
    console.log(wagons.join(' '));
  }
  
}
theLift(["15", "0 0 0 0 0"]);
theLift([ "20","0 2 0"]);
theLift([ "10","0 2 0"]); 
