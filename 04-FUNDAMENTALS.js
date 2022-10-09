function echoType(command) {
  if (typeof command === "string") {
    console.log("string");
    console.log(command);
  } else if (typeof command === "number") {
    console.log("number");
    console.log(command);
  } else {
    console.log("object");
    console.log("Parameter is not suitable for printing");
  }
}

// echoType(8)

function concatenateNames(name1, name2, delimeter) {
  console.log(`${name1}${delimeter}${name2}`);
}

// concatenateNames('John','Smith','->')

function rightPlace(missingChar, char, completeString) {
  let emptyStr = "";
  let newString = "";

  for (let i = 0; i <= missingChar.length - 1; i++) {
    if (missingChar[i] === "_") {
      newString += char;
      continue;
    }
    newString += missingChar[i];
  }
  if (newString === completeString) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

// rightPlace('Str_ng', 'I','Strong')

function integerAndFloat(num1, num2, num3) {
  let sum = num1 + num2 + num3;

  if (sum % 1 === 0) {
    console.log(sum + " - Integer");
  } else {
    console.log(sum + " - Float");
  }
}

// integerAndFloat(9, 100, 1.1)

function amazingNumbers(num) {
  let numbers = num.toString();
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
  }
  let result = sum.toString().includes(9);
  console.log(
    result ? `${numbers} Amazing? True` : `${numbers} Amazing? False`
  );
}

// amazingNumbers(1233)

function gramophone(album, band, song) {
  let time = (album.length * band.length * song.length) / 2;

  console.log(`The plate was rotated ${Math.ceil(time / 2.5)} times.`);
}
// gramophone('Black Sabbath', 'Paranoid','War Pigs')

function requiredReading(pages, pagesPerHour, daysToRead) {
  let numberOfPages = pages;
  let pagesReadPerHour = pagesPerHour;
  let daysToFinish = daysToRead;

  let timeToReadTheBook = numberOfPages / pagesReadPerHour;
  let hoursRequiredToRead = timeToReadTheBook / daysToFinish;
  console.log(hoursRequiredToRead);
}

// requiredReading(212,20 ,2)

function centuriesToMinutes(century) {
  let years = century * 100;
  let days = Math.trunc(years * 365.2422);
  let hours = days * 24;
  let minutes = hours * 60;
  //1 century = 100 years = 36524 days = 876576 hours = 52594560 minutes
  console.log(
    `${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`
  );
}
// centuriesToMinutes(1)

function specialNumbers(num) {
  //A number is special when its sum of digits is 5, 7 or 11.

  let sum = 0;
  let result = "";

  for (let i = 1; i <= num; i++) {
    i = i.toString();
    for (let j = 0; j < i.length; j++) {
      sum += Number(i[j]);
    }
    result = sum === 5 || sum === 7 || sum === 11;
    console.log(result ? `${i} -> True` : `${i} -> False`);
    sum = 0;
  }
}

// specialNumbers(15);

function triplesOfLatinLetters(n) {
  for (let i = 0; i < n; i++) {
    let firstLetter = String.fromCharCode(97 + i);
    for (let j = 0; j < n; j++) {
      let secoundLetter = String.fromCharCode(97 + j);
      for (let k = 0; k < n; k++) {
        let thurdLetter = String.fromCharCode(97 + k);
        console.log(`${firstLetter}${secoundLetter}${thurdLetter}`);
      }
    }
  }
}

// triplesOfLatinLetters("3");
