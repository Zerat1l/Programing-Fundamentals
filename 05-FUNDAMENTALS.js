function digitsWithWords(digit) {
  switch (digit) {
    case "zero":
      console.log(0);
      break;
    case "one":
      console.log(1);
      break;
    case "two":
      console.log(2);
      break;
    case "three":
      console.log(3);
      break;
    case "four":
      console.log(4);
      break;
    case "five":
      console.log(5);
      break;
    case "six":
      console.log(6);
      break;
    case "seven":
      console.log(7);
      break;
    case "eight":
      console.log(8);
      break;
    case "nine":
      console.log(9);
      break;
  }
}

// digitsWithWords('nine')

function primeNumberChecker(number) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(isPrime);
}
// primeNumberChecker(73)

function cone(radius, height) {
  let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
  let area =
    Math.PI *
    radius *
    (radius + Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2)));
  console.log("volume = " + volume.toFixed(4));
  console.log("area = " + area.toFixed(4));
}

// cone(3,5)

function biggestOf3Numbers(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2);
  } else if (num3 > num1 && num3 > num2) {
    console.log(num3);
  } else if (num1 === num2 && num3) {
    console.log(num1);
  }
}
// biggestOf3Numbers(2,2,2)

function binaryToDecimal(input) {
  let binary = parseInt(input, 2);
  console.log(binary);
}

// binaryToDecimal(00001001);

function chessBoard(number) {
  
  let innerCount = 1;
  let currColor = 'white';
  let lastColor = '';

  for (let i = 0; i < 1; i++) {
    console.log('<div class="chessboard">');
    for (let k = 0; k < number; k++) {
      console.log("  <div>");
      while (innerCount <= number) {
        
        if (currColor === 'white') {
          console.log('    <span class="white"></span>');
          lastColor = currColor;
          currColor = 'black';
        } else {
          console.log('    <span class="black"></span>');
          lastColor = currColor;
          currColor = 'white';
        }
        
        innerCount++;
      }

      innerCount = 1;
      console.log("  </div>");
    }
    console.log("</div>");
  }
}
// chessBoard(6);

function triangleArea(sideA,sideB,sideC) {

  let semiPerimeter = (sideA + sideB + sideC) / 2;
  let area = Math.sqrt(semiPerimeter*(semiPerimeter - sideA)*(semiPerimeter - sideB)*(semiPerimeter - sideC));
  console.log(area);

}
// triangleArea(2,3.5,4)

function reverseAString() {
  let str1 = 'civiC';
  let strRe = '';

  for(let i = str1.length - 1; i >=0; i--) {
    strRe += str1[i];
  }
  console.log(strRe);
  let arr = ['Joro','Lora','Mariq','Dimitar'];
  
}
// reverseAString();

