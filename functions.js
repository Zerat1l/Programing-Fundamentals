function smallestNumber(firstNum,secondNum,lastNum) {
    
    let smallestNum = Math.min(firstNum,secondNum,lastNum);
    console.log(smallestNum);
}

// smallestNumber(2,5,-3);

function addAndSubtract(firstNum, secNum,lastNum) {

    function sum(a,b) {
        let result = a + b;
        return result
    }
    let add = sum(firstNum, secNum);

   function subtract(a,b) {
    let resultFinal = a - b;
    return resultFinal;
   }
   
   let finalResult = subtract(add,lastNum);
   console.log(finalResult);
    
    
}
// addAndSubtract(1, 17, 30);

function charInRange(firstChar, lastChar) {

    let first = Math.min(firstChar.charCodeAt(),lastChar.charCodeAt());
    let last = Math.max(firstChar.charCodeAt(),lastChar.charCodeAt())
    let result = '';

    for(let currentChar = first + 1; currentChar < last; currentChar++) {
        let char = String.fromCharCode(currentChar);
        result += `${char} `;
    }
console.log(result);
    

}

// charInRange(':','#');

function OddAndEvenSum(number) {

    let numAsString = number.toString();
    let oddSum = 0;
    let evenSum = 0;
    let numAsStringLength = numAsString.length;

    for(let index = 0; index < numAsStringLength; index++) {
        let currNum = Number(numAsString[index]);
        
        if(currNum % 2 === 0) {
            evenSum += currNum;
        } else {
            oddSum += currNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

// OddAndEvenSum(1000435)

function palindromeIntegers(array) {

    let arrLength = array.length;

    for(let index = 0; index < arrLength; index++) {
        let currentEl = array[index].toString();
        let reverseCurrentEl = currentEl.split('').reverse().join('')
    
        if(currentEl === reverseCurrentEl) {
            console.log('true');
        }else {
            console.log('false');
        }
    }


}

// palindromeIntegers([123,323,421,121])

function passwordValidator(input) {

    let paswordLength = input.length;
    let digitCount = 0;
    let isAcceptableSymbol = false;

    for( let i = 0; i < paswordLength; i++) {
        let char = input[i].charCodeAt();

        let isDigit = char >= 48 && char <= 57;
        let isSmallLetter = char >= 97 && char <= 122;
        let isBigLetter = char >= 65 && char <= 90
        
        if(isDigit) {
            digitCount++;
        }
        if(!isSmallLetter && !isBigLetter && !isDigit) {
            isAcceptableSymbol = true;
        }
    }
    
    // "Password must be between 6 and 10 characters"
    if(paswordLength < 6 || paswordLength > 10) {
        console.log(`Password must be between 6 and 10 characters`);
    }
    // "Password must consist only of letters and digits"
    if(isAcceptableSymbol) {
        console.log(`Password must consist only of letters and digits`);
    }
    // "Password must have at least 2 digits"
    if(digitCount < 2) {
        console.log(`Password must have at least 2 digits`);
    }
    if(digitCount >= 2 && !isAcceptableSymbol && (paswordLength >= 6 || paswordLength <= 10)) {
        console.log(`Password is valid`);
    }

}

// passwordValidator('logIn')

function NxN_Matrix(num) {

    let arr = []
    for(let i = 1; i <= num; i ++) {
        let output = '';
        for(let j = 0; j < num; j++) {
            output += `${num} `;
        }
        arr.push(output + '\n');
        
    }
    console.log(arr.join(''));
}

NxN_Matrix(5)