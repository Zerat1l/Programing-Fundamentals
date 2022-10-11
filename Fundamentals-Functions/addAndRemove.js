function addAndRemove(arr) {
    let resultArr = [];
    let count = 1;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "add") {
        resultArr.push(count);
        count++;
      } else if (arr[i] === "remove") {
        resultArr.pop();
        count++;
      }
    }
    if (resultArr.length === 0) {
      console.log("Empty");
    } else {
      console.log(resultArr.join(" "));
    }
  }
  addAndRemove(['remove', 'remove', 'remove'] );