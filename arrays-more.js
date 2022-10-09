function addAndSubtract(array) {
  let originalArrSum = 0;
  let newArrSum = 0;
  let mofidyedArray = [];

  for (let i = 0; i < array.length; i++) {
    originalArrSum += array[i];

    if (array[i] % 2 === 0) {
      array[i] = array[i] + i;
      newArrSum += array[i];
      mofidyedArray.push(array[i]);
    } else {
      array[i] = array[i] - i;
      newArrSum += array[i];
      mofidyedArray.push(array[i]);
    }
  }
  console.log(mofidyedArray);
  console.log(originalArrSum);
  console.log(newArrSum);
}

// addAndSubtract([5, 15, 23, 56, 35])

function commonElements(firstArr, secoundArr) {
  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secoundArr.length; j++) {
      if (firstArr[i] === secoundArr[j]) {
        console.log(firstArr[i]);
      }
    }
  }
}
// commonElements(
// ['Hey', 'hello', 2, 4, 'Peter', 'e'],
// ['Petar', 10, 'hey', 4, 'hello', '2'])

function mergeArrays(firstArr, secoundArr) {
  let currSum = 0;
  let finalArr = [];

  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secoundArr.length; j++) {
      if (i % 2 === 0 && j % 2 === 0) {
        currSum += Number(firstArr[i]) + Number(secoundArr[j]);
        finalArr.push(currSum);
        currSum = 0;
        i++;
      } else {
        finalArr.push(firstArr[i] + secoundArr[j]);
        i++;
      }
    }
  }
  console.log(finalArr.join(" - "));
}

// mergeArrays(
//     ['5', '15', '23', '56', '35'],
//     ['17', '22', '87', '36', '11'])

function arrayRotation(array, rotate) {
  let currentNum;
  for (let i = rotate; i > 0; i--) {
    currentNum = array.shift();
    array.push(currentNum);
  }
  console.log(array.join(" "));
}

// arrayRotation([51, 47, 32, 61, 21], 2)

function maxNumber(array) {
  let resultArr = [];

  for (let i = 0; i < array.length; i++) {
    let isBigger = true;
    let currentBig = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (currentBig <= array[j]) {
        isBigger = false;
      }
    }
    if (isBigger) {
      resultArr.push(array[i]);
    }
  }

  console.log(resultArr.join(" "));
}

// maxNumber([14, 24, 3, 19, 15, 17]);

//Function declaration
// solve();
function solve() {
  console.log("Function declaration");
}

//Function expresion

let func = function () {
  console.log("Function expresion");
};

function equalSums(arr) {
  let foundIndex = "no";
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let leftSum = 0;
    let rightSum = 0;
    //calc left sum
    for (let l = 0; l < i; l++) {
      leftSum += arr[l];
    }
    //calc right sum
    for (let r = i + 1; r < arrLength; r++) {
      rightSum += arr[r];
    }

    if (leftSum === rightSum) {
      foundIndex = i;
    }
  }

  console.log(foundIndex);
}
// equalSums([1,2,3])

function maxSequenceOfEqualElements(arr) {
  let longestSeq = [];
  let leftMostIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    let currEl = arr[i];
    let currSeq = [currEl];

    for (let j = i + 1; j < arr.length; j++) {
      let nextEl = arr[j];
      if (currEl === nextEl) {
        currSeq.push(currEl);
      } else {
        break;
      }
    }
    if (currSeq.length > longestSeq.length) {
      longestSeq = [];
      for (let j = 0; j < currSeq.length; j++) {
        longestSeq.push(currSeq[j]);
      }
    } else if (currSeq.length === longestSeq.length) {
      if (i < leftMostIndex) {
        leftMostIndex = i;
      }
    }
  }
  console.log(longestSeq.join(" "));
}

// maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3] );

function magicSum(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === number) {
        console.log(arr[i] + " " + arr[j]);
      }
    }
  }
}

// magicSum([1, 7, 6, 2, 19, 23], 8);

function dungeonestDark(arr) {
  let health = 100;
  let coins = 0;
  let itemOrMonster = "";
  let dmgOrHeal = 0;
  let bestRoom = 1;
  let toString = arr.toString();
  let splitedArr = toString.split("|");

  for (let i = 0; i < splitedArr.length; i++) {
    let room = splitedArr[i];
    let toTrim = room.trim().split(/\s+/);
    let exceededAmount = 0;
    let actualHeal = dmgOrHeal - exceededAmount;

    itemOrMonster = toTrim[0];
    dmgOrHeal = Number(toTrim[1]);

    if (itemOrMonster === "potion") {
      bestRoom++;

      if (health < 100) {
        health += dmgOrHeal;
        console.log(`You healed for ${dmgOrHeal} hp.`);
      }
      if (health > 100) {
        exceededAmount = health - 100;
        console.log(`You healed for ${actualHeal} hp.`);
        health = 100;
      }

      // console.log(`You healed for ${actualHeal} hp.`);
      console.log(`Current health: ${health} hp.`);

    } else if (itemOrMonster === "chest") {
      bestRoom++;
      coins += dmgOrHeal;
      console.log(`You found ${dmgOrHeal} coins.`);
    } else {
      health -= dmgOrHeal;
      if (health > 0) {
        bestRoom++;
        console.log(`You slayed ${itemOrMonster}.`);
      } else if (health <= 0) {
        console.log(`You died! Killed by ${itemOrMonster}.`);
        console.log(`Best room: ${bestRoom}`);
        break;
      }
    }
  }
  if (bestRoom > splitedArr.length) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);



