function maxSequenceOfEqualElements(arr) {
    let longestSeq = [];
    let leftMostIndex = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let currEl = arr[i];
      let currSeq = [currEl];
  
      for (let j = i + 1; j < arr.length; j++) {
        let nextEl = arr[j];
        if (currEl === nextEl) {
          currSeq.push(currEl);
        } else {
          break;
        }
      }
      if (currSeq.length > longestSeq.length) {
        longestSeq = [];
        for (let j = 0; j < currSeq.length; j++) {
          longestSeq.push(currSeq[j]);
        }
      } else if (currSeq.length === longestSeq.length) {
        if (i < leftMostIndex) {
          leftMostIndex = i;
        }
      }
    }
    console.log(longestSeq.join(" "));
  }
  
  maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3] );