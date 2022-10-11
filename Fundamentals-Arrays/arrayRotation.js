function arrayRotation(array, rotate) {
    let currentNum;
    for (let i = rotate; i > 0; i--) {
      currentNum = array.shift();
      array.push(currentNum);
    }
    console.log(array.join(" "));
  }
  
  arrayRotation([51, 47, 32, 61, 21], 2)