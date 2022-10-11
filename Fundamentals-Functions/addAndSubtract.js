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

  addAndSubtract(1, 17, 30);