function sumEvenNumbers(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Number(arr[i]);
      if (arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
  
    // and with for of loop
  
    // for(let num of arr) {
    //     if(num % 2 === 0) {
    //         sum += num
    //     }
    // }
    console.log(sum);
  }
  
  sumEvenNumbers(['3','5','7','9'] )