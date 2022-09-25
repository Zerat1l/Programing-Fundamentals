function sumDigits(numbers) {
  let numbersAsString = numbers + "";
  let sum = 0;

  for (let i = 0; i <= numbersAsString.length - 1; i++) {
    sum += Number(numbersAsString[i]);
  }
  console.log(sum);
}

// sumDigits(543)

function charsToString(para1, para2, para3) {
  console.log(para1 + para2 + para3);
}

// charsToString('a','b','c')

function townInfo(town, population, area) {
  // Town {town name} has population of {population} and area {area} square km.
  console.log(
    `Town ${town} has population of ${population} and area ${area} square km.`
  );
}
// townInfo('Sofia',1286383,492)

function convertMetersToKilometres(distanceInMeters) {
  let distanceInKilometers = distanceInMeters / 1000;
  console.log(distanceInKilometers.toFixed(2));
}
// convertMetersToKilometres(798)

function poundsToDollars(britishPound) {
  let inDollars = britishPound * 1.31;
  console.log(inDollars.toFixed(3));
}

// poundsToDollars(80)

function reversedChars(para1, para2, para3) {
  let reversed = para3 + " " + para2 + " " + para1;
  console.log(reversed);
}

// reversedChars('A','B','C');

function lowerOrUpper(char) {
  if (char === char.toUpperCase()) {
    console.log("upper-case");
  } else {
    console.log("lower-case");
  }
}

// lowerOrUpper('f')

function calculator(num1, operand, num2) {
  switch (operand) {
    case "+":
      console.log(`${(num1 + num2).toFixed(2)}`);
      break;
    case "-":
      console.log(`${(num1 - num2).toFixed(2)}`);
      break;
    case "*":
      console.log(`${(num1 * num2).toFixed(2)}`);
      break;
    case "/":
      console.log(`${(num1 / num2).toFixed(2)}`);
      break;
  }
}

// calculator(5,'+',0);

function gladiatorExpenses(lostFights, helmet,sword,shield,armor) {
    
    let lostFightsCount = lostFights;
    let helmetPrice = helmet;
    let swordPrice = sword;
    let shieldPrice = shield;
    let armorPrice = armor;

    let brokenHelmetCount = 0;
    let brokenSwordCount = 0;
    let brokenShieldCount = 0;
    let brokenArmorCount = 0;

    

    for(let i = 1; i <= lostFightsCount;i++) {
        if(i % 2 === 0) {
            brokenHelmetCount++;
        }
        if(i % 3 === 0) {
            brokenSwordCount++;
        }
        if(i % 2 === 0 && i % 3 === 0) {
            brokenShieldCount++;
            if(brokenShieldCount % 2 === 0) {
                brokenArmorCount++;
            }
        }
        
    }
    let totalExpences = brokenHelmetCount * helmetPrice + brokenSwordCount * swordPrice
     + brokenShieldCount * shieldPrice + brokenArmorCount * armorPrice;
     console.log(`Gladiator expenses: ${totalExpences.toFixed(2)} aureus`);

}
// gladiatorExpenses(23,12.50,21.50,40,200)


function spiceMustFlow(startingYield) {

    let daysWorked = 0;
    let evryDayConsumption = 26;
    let spiceInStorage = 0;

    if(startingYield < 100) {
        console.log(daysWorked);
        console.log(spiceInStorage);
    }else {
        while(startingYield >= 100) {
            daysWorked++;
            spiceInStorage += startingYield - evryDayConsumption;
            startingYield -= 10;
           
        }
        console.log(daysWorked);
        console.log(spiceInStorage - evryDayConsumption);
    }
}

spiceMustFlow(450);
