function inventory(arr) {

    let heros = [];

    arr.forEach(line => {
        let [name, level, items] = line.split(' / ');
    
        let currentHero = {
            name,
            level:Number(level),
            items
        }
        heros.push(currentHero);
    });
    heros.sort((a,b) => a.level - b.level);

    heros.forEach(el => {
        
        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
    }); 
}

inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])