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