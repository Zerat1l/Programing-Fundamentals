function numbers(input) {

  let numbers = input.shift().split(" ").map(Number);
  let line = input;
  let commands = input.slice();
  let currentCommand = commands.shift();

  while (currentCommand !== "Finish") {
    let valuesAsArr = currentCommand.split(" ");
    let toDo = valuesAsArr[0];
    let value = Number(valuesAsArr[1]);

    switch (toDo) {
      case "Add":
        numbers.push(value);
        break;
      case "Remove":
        let itemIndex = numbers.indexOf(value);
        if (itemIndex > -1) {
          numbers.splice(itemIndex, 1);
        }

        break;
      case "Replace":
        let replace = Number(valuesAsArr[2]);
        let replaceIndex = numbers.indexOf(value);

        if (replaceIndex > -1) {
          numbers[replaceIndex] = replace;
        }

        break;
      case "Collapse":
        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] < value) {
            numbers.splice(i, 1);
          }
        }
        break;
    }
    currentCommand = commands.shift();
  }
  console.log(numbers.join(' '));
}
numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);

// numbers(["5 9 70 -56 9 9",
// "Replace 9 10",
// "Remove 9",
// "Finish"])
// numbers(["1 20 -1 10", "Collapse 8", "Finish"]);

