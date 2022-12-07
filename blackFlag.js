function flag(input) {
  let daysOfPlunder = Number(input.shift());
  let dailyPlunder = Number(input.shift());
  let expectedPlunder = Number(input.shift());

  let totalPlunder = 0;

  for (let i = 1; i <= daysOfPlunder; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      totalPlunder += dailyPlunder * 1.5;
      totalPlunder = totalPlunder * 0.7;
    } else if (i % 3 === 0 && i !== 0) {
      totalPlunder += dailyPlunder * 1.5;
    } else if (i % 5 === 0 && i !== 0) {
      totalPlunder += dailyPlunder;
      totalPlunder = totalPlunder * 0.7;
    } else {
      totalPlunder += dailyPlunder;
    }
  }

  let percantage = (totalPlunder / expectedPlunder) * 100;

  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    console.log(`Collected only ${percantage.toFixed(2)}% of the plunder.`);
  }
}

flag(["10", "20", "380"]);
