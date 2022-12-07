function stringManipulator(input) {
  let string = input.shift();
  let tempStr = "";
  let line = input.shift();

  while (line !== "End") {
    let splited = line.split(" ");
    let command = splited[0];
    // console.log(command);

    switch (command) {
      case "Translate":
        let char = splited[1];
        let replacement = splited[2];

        while (string.includes(char)) {
          tempStr = string.replace(char, replacement);
          string = tempStr;
        }
        console.log(string);

        break;
      case "Includes":
        let isThere = splited[1];
        if (string.includes(isThere)) {
          console.log("True");
        } else {
          console.log("False");
        }

        break;
      case "Start":
        let substring = splited[1];
        if (string.startsWith(substring)) {
          console.log("True");
        } else {
          console.log("False");
        }
        break;
      case "Lowercase":
        let temp = "";
        for (const ch of string) {
          temp += ch.toLowerCase();
        }

        string = temp;
        console.log(string);
        break;
      case "FindIndex":
        let index = splited[1];
        let atIndex = string.lastIndexOf(index);
        console.log(atIndex);

        break;
      case "Remove":
        let startIndex = splited[1];
        let count = splited[2];
        let toBeRemoved = string.substring(startIndex, count);
        let finalStr = string.replace(toBeRemoved, "");
        string = finalStr;
        console.log(string);
        break;
    }

    line = input.shift();
  }
}

stringManipulator([
  "//Thi5 I5 MY 5trING!//",
  "Translate 5 s",
  "Includes string",
  "Start //This",
  "Lowercase",
  "FindIndex i",
  "Remove 0 10",
  "End",
]);
