function matchPhoneNumber(input) {

    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let text = input.join(', ')

    let matches = text.match(pattern);
    // let result = [];
    // for (const match of matches) {
        
    //     result.push(match)
        
    // }
    console.log(matches.join(', '));
}

// matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])

function matchDates(input) {

    let text = input.shift();
    let pattern = /\b(?<day>\d{2})([\/.-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g

    let matches = text.matchAll(pattern);
    
    for (const match of matches) {
        console.log(`Day: ${match.groups.day}, Month: ${match.groups.month}, Year: ${match.groups.year}`);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])