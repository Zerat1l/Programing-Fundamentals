function palindromeIntegers(array) {
    let arrLength = array.length;
  
    for (let index = 0; index < arrLength; index++) {
      let currentEl = array[index].toString();
      let reverseCurrentEl = currentEl.split("").reverse().join("");
  
      if (currentEl === reverseCurrentEl) {
        console.log("true");
      } else {
        console.log("false");
      }
    }
  }
  
  // palindromeIntegers([123,323,421,121])