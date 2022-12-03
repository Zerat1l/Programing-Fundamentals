function adAstra(input) {

    let pattern = /([#\|])(?<name>[A-Za-z ]+)\1(?<product>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/g;
    let text = input.shift();
    let matches = text.matchAll(pattern);
    let calorisNeededPerDay = 2000;
    let sumOfCalories = 0;
    let daysCount = 0;

    for (const match of matches) {
        sumOfCalories += Number(match.groups.kcal);
    }
    while (sumOfCalories >= 2000) {
        daysCount++;
        sumOfCalories = sumOfCalories - calorisNeededPerDay;
    }
    console.log(`"You have food to last you for: ${daysCount} days!`);
    let matchesTwo = text.matchAll(pattern);

    for (const match of matchesTwo) {
        console.log(`Item: ${match.groups.name}, Best before: ${match.groups.product}, Nutrition: ${match.groups.kcal}`);
    }
    
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ])


    //console.log(`Item: ${m.groups.name}, Best before: ${m.groups.product}, Nutrition: ${m.groups.kcal}`);