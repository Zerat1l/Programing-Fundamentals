function nonDecreasingSubset(arr) {
    let resultArr = [];
  
    for (let k = 0; k <= arr.length; k++) {
      let curEl = arr[k];
  
      if (resultArr.length === 0) {
        resultArr.push(curEl);
      }
  
      biggest = resultArr[resultArr.length - 1];
      if (biggest <= curEl) {
        resultArr.push(curEl);
      }
    }
    resultArr.shift();
    console.log(resultArr.join(" "));
  }
  
  nonDecreasingSubset([20, 3, 2, 15, 6, 1]);