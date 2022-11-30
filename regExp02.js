function furniture(input) {

    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+\.*\d+)!(?<quantity>\d+)/g;
    let totalSum = 0;
    let index = 0;
    console.log('Bought furniture:');
    while(input[index] !== 'Purchase') {

        let productRow = input[index]
        let validProduct = pattern.exec(productRow)
        
        while(validProduct !== null) {

            let procuctName = validProduct.groups.name;
            console.log(procuctName);

            let price = validProduct.groups.price;
            let quantity = validProduct.groups.quantity;

            totalSum += price * quantity;

            validProduct = pattern.exec(productRow);
        }
        index++;
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);

}

furniture(['>>Sofa<<312.23!3',

'>>TV<<300!5',

'>Invalid<<!5',

'Purchase'])