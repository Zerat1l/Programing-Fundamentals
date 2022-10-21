function number(input) {

    let inputAsNumbers = input.split(' ').map(Number)
    let sumOfNumbers = 0;
    let count = 0;
    let resultArr = [];
    
    for(let i = 0; i < inputAsNumbers.length;i++) {
        count++;
        sumOfNumbers += inputAsNumbers[i];
    }
    let averageNum = sumOfNumbers / count;
   
    for(let k = 0; k < inputAsNumbers.length;k++) {
        if(inputAsNumbers[k] > averageNum) {
            resultArr.push(inputAsNumbers[k]);
        }
    }

    let midResult = resultArr.sort((a,b) => b - a);
    let final = [];

    if(inputAsNumbers.length === 1) {
        console.log('No')
    }else {
        for(let j = 0; j < 5; j++) {
            if(midResult[j] !== undefined) {
                final.push(midResult[j])
            }
        }
        console.log(final.join(' '));
    }

}

// number('10 20 30 40 50')
number('5 2 3 4 -10 30 40 50 20 50 60 60 51')
// number('1')