// softuni-quiz.github.io/category/VDH2JfspGQ/js-fundamentals

function plantDiscovery(input) {
    //colect input
    let plantsCount = Number(input.shift());
    let plants = {}

    //collect plants
    for(let i = 0; i < plantsCount; i++) {
        let [name, rarity] = input.shift().split('<->');
        
        plants[name] = {
            rarity: Number(rarity),
            ratings: [],
        }
    }
    
    //loop through commands
    let line = input.shift(); //"Rate: Woodii - 10"

    while(line !== 'Exhibition') {

        let commandArr = line.split(': '); // ['Rate', 'Woodii - 10']
        let command = commandArr[0]; // 'Rate'
        let args = commandArr[1].split(' - '); // ['Woodii', '10']
        let name = args[0];
        let argument = args[1];

        if(plants[name]) {

        
        switch (command) {
            case 'Rate':
                let rating = Number(argument)
                plants[name].ratings.push(rating);
            break;
            case 'Update':
                let rarity = Number(argument);
                plants[name].rarity = rarity;
            break;
            case 'Reset':
                plants[name].ratings = [];
            break;
        }
    } else {
        console.log('error');
    }
  
        line = input.shift();
    }
    console.table('Plants for the exhibition:');

    for (const name in plants) {
        //calculate average rating
        let sum = 0;
        let ratingCount = plants[name].ratings.length;
        

        for (const rating of plants[name].ratings) {
            sum += rating;
        }
        let averageRating = sum / ratingCount;
        if(plants[name].ratings.length === 0) {
            averageRating = 0;
        }
        //print plant info
        console.log(`- ${name}; Rarity: ${plants[name].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }
    
}

plantDiscovery(["3",

"Arnoldii<->4",

"Woodii<->7",

"Welwitschia<->2",

"Rate: Woodii - 10",

"Rate: Welwitschia - 7",

"Rate: Arnoldii - 3",

"Rate: Woodii - 5",

"Update: Woodii - 5",

"Reset: Arnoldii",

"Exhibition"])