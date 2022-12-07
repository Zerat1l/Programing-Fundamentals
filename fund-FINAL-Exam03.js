function party(input) {
  let data = {};
  let unlikedMeals = 0;
  let line = input.shift();

  while (line !== "Stop") {
    let splited = line.split("-");
    let command = splited[0];
    let guestName = splited[1];
    let meal = splited[2];

    if (!data.hasOwnProperty(guestName)) {
        data[guestName] = {
          likedMeals: [],
        };
      }

    switch (command) {
      case "Like":
       
        if (!data[guestName].likedMeals.includes(meal)) {
          data[guestName].likedMeals.push(meal);
        }
        break;
      case "Dislike":
        unlikedMeals++;
        //check if guest is at the party
        if(!data.hasOwnProperty(guestName)) {
            console.log(`${guestName} is not at the party.`);
        }
        break;
    }
    line = input.shift();
  }
//   console.table(data)
}

// party([
//   "Like-Krisi-shrimps",
//   "Like-Krisi-soup",
//   "Like-Penelope-dessert",
//   "Like-Misho-salad",
//   "Stop",
// ]);

party(["Like-Krisi-shrimps",
"Dislike-Vili-carp",
"Dislike-Krisi-salad",
"Stop"])


let user = {
  name: 'Joro',

}
if(user.hobby === void 0) {
  console.log('Undefined');
} else {
  console.log('what?');
}


