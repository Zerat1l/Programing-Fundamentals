function commonElements(firstArr, secoundArr) {
    for (let i = 0; i < firstArr.length; i++) {
      for (let j = 0; j < secoundArr.length; j++) {
        if (firstArr[i] === secoundArr[j]) {
          console.log(firstArr[i]);
        }
      }
    }
  }
  commonElements(
  ['Hey', 'hello', 2, 4, 'Peter', 'e'],
  ['Petar', 10, 'hey', 4, 'hello', '2'])