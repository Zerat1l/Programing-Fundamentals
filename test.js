function solve(array) {

    let target = 45;
    let power = 1;
    array = array.map(Number);
    console.log(array);
    let index = 0;
    for (const el of array) {
        index++;
        if(el === target) {
            let startDel = (index - 1) - power;
            let endDel = (index) + power
            array.splice(startDel, endDel)
            
        }
        
    }

    console.log(array);
   
}

// solve(['1','2','3','45','33','18','1'])


function test() {

    let str = 'Isacc / 25 / Apple, GravityGun';

    let firstSplit = str.split(' / ');
    console.log(firstSplit);
    let name = firstSplit.shift();
    let level = firstSplit.shift();
    console.log(name);
    console.log(level);
    console.log(firstSplit);
    let secSplit = firstSplit.join('').split(', ');
    console.log(secSplit);
    let itemOne = secSplit.shift();
    let itemTwo = secSplit.shift();
    console.log(itemOne, itemTwo);

}

test();
