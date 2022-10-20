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

solve(['1','2','3','45','33','18','1'])