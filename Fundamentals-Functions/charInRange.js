function charInRange(firstChar, lastChar) {
    let first = Math.min(firstChar.charCodeAt(), lastChar.charCodeAt());
    let last = Math.max(firstChar.charCodeAt(), lastChar.charCodeAt());
    let result = "";
  
    for (let currentChar = first + 1; currentChar < last; currentChar++) {
      let char = String.fromCharCode(currentChar);
      result += `${char} `;
    }
    console.log(result);
  }
  
  // charInRange(':','#');