function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let itemOrMonster = "";
    let dmgOrHeal = 0;
    let bestRoom = 1;
    let toString = arr.toString();
    let splitedArr = toString.split("|");
  
    for (let i = 0; i < splitedArr.length; i++) {
      let room = splitedArr[i];
      let toTrim = room.trim().split(/\s+/);
      let exceededAmount = 0;
      let actualHeal = dmgOrHeal - exceededAmount;
  
      itemOrMonster = toTrim[0];
      dmgOrHeal = Number(toTrim[1]);
  
      if (itemOrMonster === "potion") {
        bestRoom++;
  
        if (health < 100) {
          health += dmgOrHeal;
          console.log(`You healed for ${dmgOrHeal} hp.`);
        }
        if (health > 100) {
          exceededAmount = health - 100;
          console.log(`You healed for ${actualHeal} hp.`);
          health = 100;
        }
  
        // console.log(`You healed for ${actualHeal} hp.`);
        console.log(`Current health: ${health} hp.`);
  
      } else if (itemOrMonster === "chest") {
        bestRoom++;
        coins += dmgOrHeal;
        console.log(`You found ${dmgOrHeal} coins.`);
      } else {
        health -= dmgOrHeal;
        if (health > 0) {
          bestRoom++;
          console.log(`You slayed ${itemOrMonster}.`);
        } else if (health <= 0) {
          console.log(`You died! Killed by ${itemOrMonster}.`);
          console.log(`Best room: ${bestRoom}`);
          break;
        }
      }
    }
    if (bestRoom > splitedArr.length) {
      console.log("You've made it!");
      console.log(`Coins: ${coins}`);
      console.log(`Health: ${health}`);
    }
  }
  
  // dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
  dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
  