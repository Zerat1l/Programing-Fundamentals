function maxNumber(array) {
    let resultArr = [];
  
    for (let i = 0; i < array.length; i++) {
      let isBigger = true;
      let currentBig = array[i];
  
      for (let j = i + 1; j < array.length; j++) {
        if (currentBig <= array[j]) {
          isBigger = false;
        }
      }
      if (isBigger) {
        resultArr.push(array[i]);
      }
    }
  
    console.log(resultArr.join(" "));
  }
  
  maxNumber([14, 24, 3, 19, 15, 17]);