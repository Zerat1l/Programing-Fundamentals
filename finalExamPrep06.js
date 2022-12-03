function pirates(input) {
    let cities = {};
    let cityCount = 0;

    let line = input.shift();
    while (line !== "Sail") {
        let splited = line.split("||");
        let city = splited[0];
        let population = splited[1];
        let gold = splited[2];

        if (!cities.hasOwnProperty(city)) {
            cities[city] = {
                population: 0,
                gold: 0,
            };
            cityCount++;
        }
        cities[city].population += Number(population);
        cities[city].gold += Number(gold);

        line = input.shift();
    }

    line = input.shift();

    while (line !== 'End') {
        let splited = line.split('=>')
        let command = splited[0];

        switch (command) {
            case 'Plunder':
                let cityName = splited[1];
                let killedPeople = Number(splited[2]);
                let cityGoldTaken = Number(splited[3]);

                console.log(`${cityName} plundered! ${cityGoldTaken} gold stolen, ${killedPeople} citizens killed.`);

                cities[cityName].population -= killedPeople;
                cities[cityName].gold -= cityGoldTaken;

                if (cities[cityName].population <= 0 || cities[cityName].gold <= 0) {
                    delete cities[cityName];
                    cityCount--;
                    console.log(`${cityName} has been wiped off the map!`);
                }
                break;
            case 'Prosper':
                let prosperCity = splited[1];
                let addedGold = splited[2];

                if(addedGold < 0) {
                    console.log('Gold added cannot be a negative number!');
                    break;
                } else {
                    cities[prosperCity].gold += Number(addedGold);
                    console.log(`${addedGold} gold added to the city treasury. ${prosperCity} now has ${cities[prosperCity].gold} gold.`);
                }
                break;
        }


        line = input.shift();
    }
    if(cityCount > 0) {
        console.log(`Ahoy, Captain! There are ${cityCount} wealthy settlements to go to:`);

        let entries = Object.entries(cities);
        
        for (const entry of entries) {
         
            console.log(`${entry[0]} -> Population: ${entry[1].population} citizens, Gold: ${entry[1].gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

pirates([
    "Tortuga||345000||1250",

    "Santo Domingo||240000||630",

    "Havana||410000||1100",

    "Sail",

    "Plunder=>Tortuga=>75000=>380",

    "Prosper=>Santo Domingo=>180",

    "End",
]);



/*
    let cityName = splited[1];
    let cityPopulation = splited[2];
    let cityGold = splited[3];
*/