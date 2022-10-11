function reverseAnArrayOfNumbers(num, originalArr) {
    let reversedArr = [];
  
    for (let i = num - 1; i >= 0; i--) {
      reversedArr += originalArr[i] + " ";
    }
  
    console.log(reversedArr);
  }
  
  reverseAnArrayOfNumbers(4, [-1, 20, 99, 5] )