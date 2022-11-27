function pascalCaseSplitter(input) {

    let result = input[0];
    let toLower = input.toLowerCase();

    for(let i = 1; i < input.length;i++) {
        if(input[i] !== toLower[i]) {
            result += ', '
        }
        result += input[i]
    }
    console.log(result);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')