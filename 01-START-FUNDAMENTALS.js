function solve(num) {
  console.log(num * 2);
}
// solve(20)

function studentInfo(name, age, grade) {
  console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}
// studentInfo('John', 15, 5.54678);

function excellentGrade(grade) {
  if (grade >= 5.5) {
    console.log("Excellent");
  } else {
    console.log("Not excellent");
  }
}
// excellentGrade(5.50)

function foreignLanguages(country) {
  switch (country) {
    case "England":
    case "USA":
      console.log("English");
      break;
    case "Spain":
    case "Argentina":
    case "Mexico":
      console.log("Spanish");
      break;
    default:
      console.log("unknown");
      break;
  }
}

// foreignLanguages('Bulgaria')

function monthPrinter(month) {
  switch (month) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;
    default:
      console.log("Error!");
  }
}

// monthPrinter(13)

function theatrePromotions(day, age) {
  if (age < 0 || age > 122) {
    console.log("Error!");
  } else if (day === "Weekday" && age >= 0 && age <= 18) {
    console.log("12$");
  } else if (day === "Weekday" && age > 18 && age <= 64) {
    console.log("18$");
  } else if (day === "Weekday" && age > 64 && age <= 122) {
    console.log("12$");
  } else if (day === "Weekend" && age >= 0 && age <= 18) {
    console.log("15$");
  } else if (day === "Weekend" && age > 18 && age <= 64) {
    console.log("20$");
  } else if (day === "Weekend" && age > 64 && age <= 122) {
    console.log("15$");
  } else if (day === "Holiday" && age >= 0 && age <= 18) {
    console.log("5$");
  } else if (day === "Holiday" && age > 18 && age <= 64) {
    console.log("12$");
  } else if (day === "Holiday" && age > 64 && age <= 122) {
    console.log("10$");
  }
}

// theatrePromotions('Holiday', -12);

function from1to5() {
  for (let i = 1; i < 6; i++) {
    console.log(i);
  }
}
// from1to5()

function divisibleBy3() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}

// divisibleBy3()

function numbersFromNto1(num) {
  while (num >= 1) {
    console.log(num);
    num--;
  }
}

// numbersFromNto1(5);

function numbersFromMtoN(m, n) {
  for (let i = m; i >= n; i--) {
    console.log(i);
  }
}

// numbersFromMtoN(4, 1)

function sumOfOddNumbers(n) {
  let sum = 0;
  let curr = 1;

  for (let i = 1; i <= n; i++) {
    sum += curr;
    console.log(curr);
    curr += 2;
  }
  console.log("Sum: " + sum);
}

sumOfOddNumbers(3);
