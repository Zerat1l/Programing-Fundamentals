function rotateArray(arr) {
    let rotations = Number(arr.pop());
  
    for (let i = 0; i < rotations; i++) {
      let get = arr.pop();
      arr.unshift(get);
    }
    console.log(arr.join(" "));
  }

  rotateArray(['Banana', 'Orange', 'Coconut','Apple', '15'])