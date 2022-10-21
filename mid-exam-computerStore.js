function computerStore(input) {

    let totalPriceWithoutTax = 0;
    let total = 0;
    let tax = 0.2; //20 percent of the total
    let lastInput;
    let command = input.shift();
    
    while(command !== 'regular' && command !== 'special') {

        if(command < 0) {
            console.log("Invalid price!");
        }else {
            totalPriceWithoutTax += Number(command);
        }

        command = input.shift();
        lastInput = command;
    }
    
    let taxPayed = totalPriceWithoutTax * tax;
    total = taxPayed + totalPriceWithoutTax;

    if(lastInput === 'regular' && totalPriceWithoutTax > 0) {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${totalPriceWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxPayed.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${total.toFixed(2)}$`);
    } else if(lastInput === 'special' && totalPriceWithoutTax > 0) {

        let totalWithDoscount = total * 0.9;

        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${totalPriceWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxPayed.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalWithDoscount.toFixed(2)}$`);
    } else if(total === 0 || totalWithDoscount === 0) {
        console.log(`Invalid order!`);
    }
}

computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])