function shoppingList(input) {
  let list = input.shift().split("!");
  let line = input.shift();

  while (line !== "Go Shopping!") {
    let [command, item, newItem] = line.split(" ");

    switch (command) {
      case "Urgent":
        if (!list.includes(item)) {
          list.unshift(item);
        }
        break;
      case "Unnecessary":
        if (list.includes(item)) {
          let index = list.indexOf(item);
          list.splice(index, 1);
        }
        break;
      case "Correct":
        if (list.includes(item)) {
          let atIndex = list.indexOf(item);
          list.splice(atIndex, 1, newItem); //FISHY
        }
        break;
      case "Rearrange":
        if (list.includes(item)) {
          let toMove = list.indexOf(item);
          let theItem = list.splice(toMove, 1);
          list.push(theItem);
        }
        break;
    }

    line = input.shift();
  }

  console.log(list.join(', '));
}

// shoppingList((["Tomatoes!Potatoes!Bread",

// "Unnecessary Milk",

// "Urgent Tomatoes",

// "Go Shopping!"]))

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",

  "Urgent Salt",

  "Unnecessary Grapes",

  "Correct Pepper Onion",

  "Rearrange Grapes",

  "Correct Tomatoes Potatoes",

  "Go Shopping!",
]);
