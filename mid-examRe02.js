function generatingNumbers(input) {
  let intigers = input.shift().split(" ");
  let line = input.shift();

  while (line !== "END") {
    let splited = line.split(" ");
    let command = [];
    let args = [];

    for (let i = 0; i < splited.length; i++) {
      if (splited[i].charCodeAt() > 57) {
        command.push(splited[i]);
      } else {
        args.push(splited[i]);
      }
    }
    command = command.join(" ");
    // console.log(args);

    switch (command) {
      case "add to start":
        for (let i = args.length - 1; i >= 0; i--) {
          intigers.unshift(args[i]);
        }
        break;

      case "remove greater than":
        let graterThen = Number(args[0]);

        let result = intigers.filter(function (x) {
          return x <= graterThen;
        });

        intigers = result;
        break;

      case "replace":
        let value = args[0];
        let replacement = args[1];

        if(intigers.indexOf(value) !== -1) {
            let index = intigers.indexOf(value);

            intigers.splice(index, 1, replacement);
        }
        break;

      case "remove at index":
        let removeIndex = args[0];
        if(removeIndex >= 0 && removeIndex < intigers.length) {
            intigers.splice(removeIndex, 1);
        }
        break;

      case "find even":
        let even = [];
        for (let digit of intigers) {
          digit = Number(digit);
          if (digit % 2 === 0) {
            even.push(digit);
          }
        }
        console.log(even.join(" "));
        break;
    
      case "find odd":
        let odd = [];
        for (let digit of intigers) {
          digit = Number(digit);
          if (digit % 2 !== 0) {
            odd.push(digit);
          }
        }
        console.log(odd.join(" "));
        break;
    }

    line = input.shift();
  }
  console.log(intigers.join(", "));
}
generatingNumbers([
  "1 2 3 10 10 6 4 10",
  "add to start 1 2 3",
  "remove greater than 5",
  "find even",
  "END",
]);
