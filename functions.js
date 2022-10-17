function smallestNumber(firstNum, secondNum, lastNum) {
  let smallestNum = Math.min(firstNum, secondNum, lastNum);
  console.log(smallestNum);
}

// smallestNumber(2,5,-3);

function addAndSubtract(firstNum, secNum, lastNum) {
  function sum(a, b) {
    let result = a + b;
    return result;
  }
  let add = sum(firstNum, secNum);

  function subtract(a, b) {
    let resultFinal = a - b;
    return resultFinal;
  }

  let finalResult = subtract(add, lastNum);
  console.log(finalResult);
}
// addAndSubtract(1, 17, 30);

function charInRange(firstChar, lastChar) {
  let first = Math.min(firstChar.charCodeAt(), lastChar.charCodeAt());
  let last = Math.max(firstChar.charCodeAt(), lastChar.charCodeAt());
  let result = "";

  for (let currentChar = first + 1; currentChar < last; currentChar++) {
    let char = String.fromCharCode(currentChar);
    result += `${char} `;
  }
  console.log(result);
}

// charInRange(':','#');

function OddAndEvenSum(number) {
  let numAsString = number.toString();
  let oddSum = 0;
  let evenSum = 0;
  let numAsStringLength = numAsString.length;

  for (let index = 0; index < numAsStringLength; index++) {
    let currNum = Number(numAsString[index]);

    if (currNum % 2 === 0) {
      evenSum += currNum;
    } else {
      oddSum += currNum;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

// OddAndEvenSum(1000435)

function palindromeIntegers(array) {
  let arrLength = array.length;

  for (let index = 0; index < arrLength; index++) {
    let currentEl = array[index].toString();
    let reverseCurrentEl = currentEl.split("").reverse().join("");

    if (currentEl === reverseCurrentEl) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}

// palindromeIntegers([123,323,421,121])

function passwordValidator(input) {
  let paswordLength = input.length;
  let digitCount = 0;
  let isAcceptableSymbol = false;

  for (let i = 0; i < paswordLength; i++) {
    let char = input[i].charCodeAt();

    let isDigit = char >= 48 && char <= 57;
    let isSmallLetter = char >= 97 && char <= 122;
    let isBigLetter = char >= 65 && char <= 90;

    if (isDigit) {
      digitCount++;
    }
    if (!isSmallLetter && !isBigLetter && !isDigit) {
      isAcceptableSymbol = true;
    }
  }

  // "Password must be between 6 and 10 characters"
  if (paswordLength < 6 || paswordLength > 10) {
    console.log(`Password must be between 6 and 10 characters`);
  }
  // "Password must consist only of letters and digits"
  if (isAcceptableSymbol) {
    console.log(`Password must consist only of letters and digits`);
  }
  // "Password must have at least 2 digits"
  if (digitCount < 2) {
    console.log(`Password must have at least 2 digits`);
  }
  if (
    digitCount >= 2 &&
    !isAcceptableSymbol &&
    (paswordLength >= 6 || paswordLength <= 10)
  ) {
    console.log(`Password is valid`);
  }
}

// passwordValidator('logIn')

function NxN_Matrix(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    let output = "";
    for (let j = 0; j < num; j++) {
      output += `${num} `;
    }
    arr.push(output + "\n");
  }
  console.log(arr.join(""));
}

// NxN_Matrix(5)

function perfectNumber(num) {
  let sum = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  if (sum === num && sum !== 0) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
// perfectNumber(28)

function loadingBar(percent) {
  let percents = "%".repeat(percent / 10);
  let dots = ".".repeat(10 - percent / 10);

  if (percent < 100) {
    console.log(`${percent}% [${percents}${dots}]`);
    console.log(`Still loading...`);
  } else {
    console.log(`100% Complete!`);
  }
}

// loadingBar(100)

function factorialDivision(firstNumber, secondNumber) {
  function Firstfactorialize(firstNumber) {
    if (firstNumber < 0) {
      return -1;
    } else if (firstNumber == 0) {
      return 1;
    } else {
      return firstNumber * Firstfactorialize(firstNumber - 1);
    }
  }
  function Secondfactorialize(secondNumber) {
    if (secondNumber < 0) {
      return -1;
    } else if (secondNumber == 0) {
      return 1;
    } else {
      return secondNumber * Secondfactorialize(secondNumber - 1);
    }
  }
  console.log(
    (Firstfactorialize(firstNumber) / Secondfactorialize(secondNumber)).toFixed(
      2
    )
  );
}

// factorialDivision(6,2);

function printN_thElement(arr) {
  let step = Number(arr.pop());
  let result = [];

  for (let i = 0; i < arr.length; i += step) {
    result.push(arr[i]);
  }
  console.log(result.join(" "));
}
// printN_thElement(["5", "20", "31", "4", "20", "2"]);

function addAndRemove(arr) {
  let resultArr = [];
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "add") {
      resultArr.push(count);
      count++;
    } else if (arr[i] === "remove") {
      resultArr.pop();
      count++;
    }
  }
  if (resultArr.length === 0) {
    console.log("Empty");
  } else {
    console.log(resultArr.join(" "));
  }
}
// addAndRemove(['remove', 'remove', 'remove'] );

function rotateArray(arr) {
  let rotations = Number(arr.pop());

  for (let i = 0; i < rotations; i++) {
    let get = arr.pop();
    arr.unshift(get);
  }
  console.log(arr.join(" "));
}

// rotateArray(['Banana', 'Orange', 'Coconut','Apple', '15'])

function nonDecreasingSubset(arr) {
  let resultArr = [];

  for (let k = 0; k <= arr.length; k++) {
    let curEl = arr[k];

    if (resultArr.length === 0) {
      resultArr.push(curEl);
    }

    biggest = resultArr[resultArr.length - 1];
    if (biggest <= curEl) {
      resultArr.push(curEl);
    }
  }
  resultArr.shift();
  console.log(resultArr.join(" "));
}

// nonDecreasingSubset([20, 3, 2, 15, 6, 1]);

function magicMatrices(arr) {

 console.table(arr)

 
}

magicMatrices([[4, 5, 6],[6, 5, 4],[5, 5, 5]])

