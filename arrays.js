function sumFirstAndLast(arr) {
  let firstNum = arr[0];
  let lastNum = arr[arr.length - 1];

  console.log(`${firstNum + lastNum}`);
}

// sumFirstAndLast([20, 30, 40])

function dayOfWeek(number) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (number < 1 || number > 7) {
    console.log("Invalid day!");
  } else {
    console.log(days[number - 1]);
  }
}

// dayOfWeek(0)

function reverseAnArrayOfNumbers(num, originalArr) {
  let reversedArr = [];

  for (let i = num - 1; i >= 0; i--) {
    reversedArr += originalArr[i] + " ";
  }

  console.log(reversedArr);
}

// reverseAnArrayOfNumbers(4, [-1, 20, 99, 5] )

function reverseInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i]; //temp is now holding 'a'
    arr[i] = arr[arr.length - 1 - i]; // geting the last element 'e' and put it to the index 0
    arr[arr.length - 1 - i] = temp; // assign the last index to be equal to temp 'a'
  }
  console.log(arr.join(" "));
}

// reverseInPlace(["a", "b", "c", "d", "e"]);

function sumEvenNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }

  // and with for of loop

  // for(let num of arr) {
  //     if(num % 2 === 0) {
  //         sum += num
  //     }
  // }
  console.log(sum);
}

// sumEvenNumbers(['3','5','7','9'] )

function evenAndOddSubtraction(arr) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
    if (arr[i] % 2 === 0) {
      sumEven += arr[i];
    } else {
      sumOdd += arr[i];
    }
  }
  result = sumEven - sumOdd;
  console.log(result);
}

// evenAndOddSubtraction([1,2,3,4,5,6])

function equalArrays(arr1, arr2) {
  let sum = 0;
  let isEqual = true;
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = Number(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = Number(arr2[i]);
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isEqual = false;
      break;
    } else {
      sum += arr1[i];
    }
  }
  if (isEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}

// equalArrays(['10','20','30'],['10','20','30'] );

function condenseArrayToNumber(nums) {
  let con = [];

  let count = nums.length;
  isCondensed = false;

  if (count === 1) {
    console.log(`${nums[0]}`);
  } else {
    while (count > 1) {
      for (let i = 0; i < nums.length - 1; i++) {
        con[i] = nums[i] + nums[i + 1];
      }
      nums = con;
      con = [];
      count--;
    }
    isCondensed = true;
  }
  if (isCondensed) {
    console.log(Number(nums));
  }
}

// condenseArrayToNumber([5]);

//arr.length - kudeto .length e property


