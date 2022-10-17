function searchForNumber(arr, command) {
  let elementsToTake = command[0];
  let elementsToDelete = command[1];
  let target = command[2];
  let resultArr = [];
  let count = 0;

  for (let i = 0; i < elementsToTake; i++) {
    resultArr.push(arr[i]);
  }

  for (let k = 0; k < elementsToDelete; k++) {
    resultArr.shift();
  }
  for (const el of resultArr) {
    if (el === target) {
      count++;
    }
  }
  console.log(`Number ${target} occurs ${count} times.`);
}

searchForNumber(
  [7, 1, 5, 8, 2, 7],

  [3, 1, 5]
);
