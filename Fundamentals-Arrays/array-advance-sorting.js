function sorting(arr) {

    let sortedArr = arr.sort((a,b) => a-b);
    let resultArr = [];

    for(let i = 0; i < arr.length;i++) {
        let firstEl = sortedArr.shift();
        let lastEl = sortedArr.pop();

        resultArr.push(lastEl)
        resultArr.push(firstEl)
    }
        resultArr.push(sortedArr.pop())
        resultArr.push(sortedArr.shift())

    console.log(resultArr.join(' '));


}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);