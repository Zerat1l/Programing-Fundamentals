function burgerBus(input) {

    let numbersOfCitys = Number(input.shift());
    let profit = 0;
    let totalProfit = 0;
    let cityCount = 1;

    for(let i = 0; i < numbersOfCitys; i++) {
        let currentCity = input.shift();
        let currentIncome = Number(input.shift());
        let currentExpences = Number(input.shift());
        
        if(cityCount % 3 !== 0 && cityCount % 5 !== 0) {
            profit = currentIncome - currentExpences;
            totalProfit += profit;
            console.log(`In ${currentCity} Burger Bus earned ${profit.toFixed(2)} leva.`);
        }
        if(cityCount % 3 === 0 && cityCount % 5 !== 0) {
            let thurdDayExpense = currentExpences * 1.5;
            profit = currentIncome - thurdDayExpense;
            totalProfit += profit;
            console.log(`In ${currentCity} Burger Bus earned ${profit.toFixed(2)} leva.`);
        }
        if(cityCount % 5 === 0) {
            let rainyDay = 0.9;
            profit = (currentIncome * rainyDay) - currentExpences;
            totalProfit += profit;
            console.log(`In ${currentCity} Burger Bus earned ${profit.toFixed(2)} leva.`);
        }
        cityCount++;
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);

    

}
burgerBus(["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])