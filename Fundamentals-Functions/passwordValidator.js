function passwordValidator(input) {
    let paswordLength = input.length;
    let digitCount = 0;
    let isAcceptableSymbol = false;
  
    for (let i = 0; i < paswordLength; i++) {
      let char = input[i].charCodeAt();
  
      let isDigit = char >= 48 && char <= 57;
      let isSmallLetter = char >= 97 && char <= 122;
      let isBigLetter = char >= 65 && char <= 90;
  
      if (isDigit) {
        digitCount++;
      }
      if (!isSmallLetter && !isBigLetter && !isDigit) {
        isAcceptableSymbol = true;
      }
    }
  
    // "Password must be between 6 and 10 characters"
    if (paswordLength < 6 || paswordLength > 10) {
      console.log(`Password must be between 6 and 10 characters`);
    }
    // "Password must consist only of letters and digits"
    if (isAcceptableSymbol) {
      console.log(`Password must consist only of letters and digits`);
    }
    // "Password must have at least 2 digits"
    if (digitCount < 2) {
      console.log(`Password must have at least 2 digits`);
    }
    if (
      digitCount >= 2 &&
      !isAcceptableSymbol &&
      (paswordLength >= 6 || paswordLength <= 10)
    ) {
      console.log(`Password is valid`);
    }
  }
  
  // passwordValidator('logIn')