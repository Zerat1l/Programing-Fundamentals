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
  
  addAndSubtract([5, 15, 23, 56, 35])