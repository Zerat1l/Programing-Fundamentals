function emoji(input) {

    let digitPattern = /\d/g
    let emojiPattern = /(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g
    let text = input.shift();
    
    let digits = text.match(digitPattern);
    let coolTreshold = 1;
    let emojiCount = 0;
    let coolEmojis = [];

    for (const digit of digits) {
        let num = Number(digit);
        coolTreshold *= num;
    }


    let emojiMatches = text.matchAll(emojiPattern);
    
    for (const emoji of emojiMatches) {

        let theEmoji = emoji[0];
        let emojiName = emoji[2];
        emojiCount++;
        
        //Calculeta emoji coolnes
        let emojiCoolnes = 0;
        for (let i = 0; i < emojiName.length;i++) {
            emojiCoolnes += emojiName.charCodeAt(i);
             
        }
        if(emojiCoolnes >= coolTreshold) {
            coolEmojis.push(theEmoji);
        }
       
    }
    console.log(`Cool threshold: ${coolTreshold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    for (const emoji of coolEmojis) {
        console.log(emoji);
    }
   
}

emoji(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])