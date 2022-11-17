function partyTime(input) {
  let vipList = [];
  let regList = [];

  let command = input.shift();

  while (command !== "PARTY") {
    let isVip = isNaN(command[0]);

    if (isVip) {
      regList.push(command);
    } else {
      vipList.push(command);
    }

    command = input.shift();
  }
  let allGuests = vipList.concat(regList);

  for (const guest of input) {
    allGuests.splice(allGuests.indexOf(guest), 1);
  }
  console.log(allGuests.length);
  for (const guest of allGuests) {
    console.log(guest);
  }
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
