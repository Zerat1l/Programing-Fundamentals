function softuniBar(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)\%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+([.]\d+)?)\$/g

    let index = 0;
    let line = input[index]
    let totalIncome = 0;

   while(line !== 'end of shift') {
    
    let matches = line.matchAll(pattern)
    
    for (const match of matches) {
        let ClientName = match.groups.name;
        let product = match.groups.product;
        let count = match.groups.count;
        let price = match.groups.price;

        let totalSum = Number(price) * Number(count);

        console.log(`${ClientName}: ${product} - ${totalSum.toFixed(2)}`);
        totalIncome += totalSum;
    }

    index++;
    line = input[index]
   }
   console.log(`Total income: ${totalIncome.toFixed(2)}`);

}

softuniBar(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift'])

