function solve() {
    //Look for an element in the arrey and if there is one delete it and replace with the given one
    let arr = ['one','two','three','four','five'];
    let copy = arr.slice();

    let lookFor = 'one';
    let replaceWith = 1;
    

    if(copy.includes(lookFor)) {
        let deleteFromIndex = copy.indexOf(lookFor)
        copy.splice(deleteFromIndex,1,replaceWith)
    } else {
        console.log('No match!');
    }
    console.log(arr);
    console.log(copy);

}

// solve()

