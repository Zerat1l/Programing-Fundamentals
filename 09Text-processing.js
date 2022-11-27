function replaceRepeatingChars(input) {

    let result = input[0];

    for (let index = 1; index < input.length; index++) {
        
        if(input[index] !== input[index - 1]) {
            result += input[index];
        }
        
    }
    console.log(result);
 
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')