function NxN_Matrix(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      let output = "";
      for (let j = 0; j < num; j++) {
        output += `${num} `;
      }
      arr.push(output + "\n");
    }
    console.log(arr.join(""));
  }
  
  // NxN_Matrix(5)