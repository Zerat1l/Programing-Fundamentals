function mergeArrays(firstArr, secoundArr) {
    let currSum = 0;
    let finalArr = [];
  
    for (let i = 0; i < firstArr.length; i++) {
      for (let j = 0; j < secoundArr.length; j++) {
        if (i % 2 === 0 && j % 2 === 0) {
          currSum += Number(firstArr[i]) + Number(secoundArr[j]);
          finalArr.push(currSum);
          currSum = 0;
          i++;
        } else {
          finalArr.push(firstArr[i] + secoundArr[j]);
          i++;
        }
      }
    }
    console.log(finalArr.join(" - "));
  }
  
  mergeArrays(
      ['5', '15', '23', '56', '35'],
      ['17', '22', '87', '36', '11'])