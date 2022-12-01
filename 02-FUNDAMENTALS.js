function ages(age) {
  if (age < 0) {
    console.log("out of bounds");
  } else if (age >= 0 && age <= 2) {
    console.log("baby");
  } else if (age >= 3 && age <= 13) {
    console.log("child");
  } else if (age >= 14 && age <= 19) {
    console.log("teenager");
  } else if (age >= 20 && age <= 65) {
    console.log("adult");
  } else if (age >= 66) {
    console.log("elder");
  }
}

// ages(20)

function rounding(num, precision) {
  if (precision > 15) {
    precision = 15;
  }

  console.log(parseFloat(num.toFixed(precision)));
}

// rounding(3.1415926535897932384626433832795,2)

function division(num) {
  if (num % 10 === 0) {
    console.log("The number is divisible by 10");
  } else if (num % 7 === 0) {
    console.log("The number is divisible by 7");
  } else if (num % 6 === 0) {
    console.log("The number is divisible by 6");
  } else if (num % 3 === 0) {
    console.log("The number is divisible by 3");
  } else if (num % 2 === 0) {
    console.log("The number is divisible by 2");
  } else {
    console.log("Not divisible");
  }
}
// division(1643);

function vacation(people, group, week) {
  let sum = 0;

  switch (group) {
    case "Students":
      if (week === "Friday") {
        sum = people * 8.45;
        if (people >= 30) {
          sum = sum * 0.85;
        }
      } else if (week === "Saturday") {
        sum = people * 9.8;
        if (people >= 30) {
          sum = sum * 0.85;
        }
      } else if (week === "Sunday") {
        sum = people * 10.46;
        if (people >= 30) {
          sum = sum * 0.85;
        }
      }
      console.log(`Total price: ${sum.toFixed(2)}`);

      break;
    case "Business":
      if (week === "Friday") {
        if (people >= 100) {
          people -= 10;
        }
        sum = people * 10.9;
      } else if (week === "Saturday") {
        if (people >= 100) {
          people -= 10;
        }
        sum = people * 15.6;
      } else if (week === "Sunday") {
        if (people >= 100) {
          people -= 10;
        }
        sum = people * 16;
      }
      console.log(`Total price: ${sum.toFixed(2)}`);

      break;
    case "Regular":
      if (week === "Friday") {
        sum = people * 15;
        if (people >= 10 && people <= 20) {
          sum = sum * 0.95;
        }
      } else if (week === "Saturday") {
        sum = people * 20;
        if (people >= 10 && people <= 20) {
          sum = sum * 0.95;
        }
      } else if (week === "Sunday") {
        sum = people * 22.5;
        if (people >= 10 && people <= 20) {
          sum = sum * 0.95;
        }
      }
      console.log(`Total price: ${sum.toFixed(2)}`);

      break;
  }
}

// vacation(
//     40,

//     "Regular",

//     "Saturday"
// );

// I UTRE EDEN!

// Write a JS function to check whether a year is a leap. Leap years are
//  either divisible by 4 but not by 100 or are divisible by 400. The output should be following:

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

// leapYear(924);

function printAndSum(start, end) {
  let numbers = "";
  let sum = 0;
  for (let i = start; i <= end; i++) {
    numbers += i + " ";
    sum += i;
  }
  console.log(numbers);
  console.log("Sum: " + sum);
}

// printAndSum(0, 26)

function triangleOfNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    console.log(row);
  }
}
// triangleOfNumbers(3)

function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} X ${i} = ${n * i}`);
  }
}

// multiplicationTable(5)

function sortNumbers(firstNum, secondNum, thirdNum) {
  let arrayNumbers = [];
  arrayNumbers.push(firstNum, secondNum, thirdNum);
  let sorted = arrayNumbers.sort((a, b) => b - a);
  console.log(sorted.join("\n"));
}

// sortNumbers(2,1,3)

function sort(num1, num2, num3) {
  let big;
  let mid;
  let small = Number.MIN_SAFE_INTEGER;

  let emptySpace = 0;

  if (num1 > small) {
    small = num1;
    mid = num2;
    big = num3;
  }
  if (num2 > small) {
    small = num2;
    mid = num1;
    big = num3;
  }
  if (num3 > small) {
    small = num3;
    mid = num1;
    big = num2;
  }
  if (big > mid) {
    emptySpace = mid;
    mid = big;
    big = emptySpace;
  }

  console.log(small);
  console.log(mid);
  console.log(big);
}

// sort(0,0,2);

function englishNameOfTheLastDigit(number) {

  let numberAsString = number + '';
  let array = [];
  let lastItem = '';

  for(let i = 0;i<= numberAsString.length - 1; i++) {
    array.push(numberAsString[i])
  }
    lastItem = array[array.length -1];

    switch (lastItem) {
      case '0': console.log('zero');
      break;
      case '1': console.log('one');
      break;
      case '2': console.log('two');
      break;
      case '3': console.log('three');
      break;
      case '4': console.log('four');
      break;
      case '5': console.log('five');
      break;
      case '6': console.log('six');
      break;
      case '7': console.log('seven');
      break;
      case '8': console.log('eight');
      break;
      case '9': console.log('nine');
      break; 
    }
    
    
}

// englishNameOfTheLastDigit(1256)


  function nextDay(year, month, day) {
    let nextDay = new Date(year, month -1, day + 1);
    let newYear = nextDay.getFullYear();
    let newMonth = nextDay.getMonth() + 1;
    let newDate = nextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}
nextDay(2016, 9, 30);

function reverseString(str) {

  let reversed = '';
  for (let i = str.length - 1; i >= 0;i--) {
    reversed += str[i];
  }
  console.log(reversed);

}
// reverseString('Hello')


function distanceBetweenPoints(x1,y1,x2,y2) {

  let distance = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1, 2));
  console.log(distance);

}

// distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)