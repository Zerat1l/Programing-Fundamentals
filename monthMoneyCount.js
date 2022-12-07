function monthMoney(input) {

    let totalIncome = Number(input);

    let moneyForGas = 200;
    let moneyForHousehold = 200;
    let moneyForFoood = 450;
    let moneyForCigars = 210;
    let moneyForAlcohol = 225;
    let moneyForWeekends = 400;

    let expences = moneyForGas + moneyForHousehold + moneyForCigars + moneyForAlcohol + moneyForWeekends + moneyForFoood;

    let moneyLeft = totalIncome - expences;

    console.log(`Money left after all cummon expences -> ${moneyLeft.toFixed(2)} leva`);
    
}

monthMoney(2160)

//tommorow is another day yes?
//