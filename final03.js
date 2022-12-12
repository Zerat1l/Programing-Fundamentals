function battleManager(input) {
  let peoples = {};
  let line = input.shift().split(":");
  let command = line[0];

  let peopleCount = 0;

  while (command !== "Results") {
    switch (command) {
      case "Add":
        let nameToAdd = line[1];
        let healthToAdd = line[2];
        let energyToAdd = line[3];

        if (!peoples.hasOwnProperty(nameToAdd)) {
          peopleCount++;
          peoples[nameToAdd] = {
            health: 0,
            energy: Number(energyToAdd),
          };
          
        }
        peoples[nameToAdd].health += Number(healthToAdd);
       
        break;
      case "Attack":
        let attackerName = line[1];
        let defenderName = line[2];
        let damage = Number(line[3]);
        if (
          peoples.hasOwnProperty(attackerName) &&
          peoples.hasOwnProperty(defenderName)
        ) {
          peoples[defenderName].health -= damage;
          peoples[attackerName].energy -= 1;
        }
        if (peoples.hasOwnProperty(defenderName) && peoples[defenderName].health <= 0) {
          console.log(`${defenderName} was disqualified!`);
          delete peoples[defenderName];
          peopleCount--;
        }
        if (peoples.hasOwnProperty(attackerName) && peoples[attackerName].energy <= 0) {
          console.log(`${attackerName} was disqualified!`);
          delete peoples[attackerName];
          peopleCount--;
        }

        break;
      case "Delete":
        let toDelete = line[1];
        if (toDelete === "All") {
            peoples = {};
            peopleCount = 0;
          }
        if(peoples.hasOwnProperty(toDelete)) {
            delete peoples[toDelete];
            peopleCount--;
              
        }
        break;
    }

    line = input.shift().split(":");
    command = line[0];
  }
  console.log(`People count: ${peopleCount}`);
  for (const person in peoples) {
    console.log(`${person} - ${peoples[person].health} - ${peoples[person].energy}`);
  }
}

// battleManager([
//   "Add:Mark:1000:5",
//   "Add:Clark:1000:2",
//   "Attack:Clark:Mark:500",
//   "Attack:Clark:Mark:800",
//   "Add:Charlie:4000:10",
//   "Results",
// ]);

// battleManager(["Add:Bonnie:3000:5",
// "Add:Kent:10000:10",
// "Add:Johny:4000:10",
// "Attack:Johny:Bonnie:400",
// "Add:Johny:3000:5",
// "Add:Peter:7000:1",
// "Delete:Kent",
// "Results"])

battleManager(["Add:Bonnie:3000:5",
"Add:Johny:4000:10",
"Delete:All",
"Add:Bonnie:3333:3",
"Add:Aleks:1000:70",
"Add:Tom:4000:1",
"Results"])
