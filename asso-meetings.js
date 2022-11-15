function meetings(input) {

    let meeting = {};

    for (const entry of input) {
        let [day, name] = entry.split(' ');

        if(meeting[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            meeting[day] = name;
        }
    }
   
    for (let [day, name] of Object.entries(meeting)) {
        console.log(`${day} -> ${name}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)