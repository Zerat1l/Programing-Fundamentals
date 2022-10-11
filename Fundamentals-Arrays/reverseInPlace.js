function reverseInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
      let temp = arr[i]; //temp is now holding 'a'
      arr[i] = arr[arr.length - 1 - i]; // geting the last element 'e' and put it to the index 0
      arr[arr.length - 1 - i] = temp; // assign the last index to be equal to temp 'a'
    }
    console.log(arr.join(" "));
  }
  
  reverseInPlace(["a", "b", "c", "d", "e"]);