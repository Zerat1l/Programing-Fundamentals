function storage(input) {

    let result  = {};

    for (const line of input) {

        let arg = line.split(' ');
        let [item, quontity] = arg;
        quontity = Number(quontity)
        
        if(result[item]) {
            result[item] += quontity
        }else {
            result[item] = quontity
        }
    }

    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
)