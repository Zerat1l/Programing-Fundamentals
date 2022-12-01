function activationKeys(input) {
  let rawActivationKey = input.shift();
  let line = input.shift();
  let activationKey = rawActivationKey.slice();

  while (line !== "Generate") {
    let splited = line.split(">>>");
    let command = splited[0];

    switch (command) {
      case "Slice":
        let from = splited[1];
        let to = splited[2];

        let sub = activationKey.substring(from, to)
        activationKey = activationKey.replace(sub,'');
       
        console.log(activationKey);
        break;

      case "Flip":
        let arg = splited[1];
        let argFrom = splited[2];
        let argTo = splited[3];
        
        let part = activationKey.substring(argFrom, argTo);

        if(arg === 'Upper') {
            activationKey = activationKey.replace(part, part.toUpperCase())
            console.log(activationKey);
        } else {
            activationKey = activationKey.replace(part, part.toLowerCase())
            console.log(activationKey);
        }
        break;

      case "Contains":
        let substring = splited[1];
        if (activationKey.includes(substring)) {
          console.log(`${activationKey} contains ${substring}`);
        } else {
            console.log('Substring not found!');
        }
        break;
    }

    line = input.shift();
  }
  console.log(`Your activation key is: ${activationKey}`);
}

activationKeys([
  "abcdefghijklmnopqrstuvwxyz",

  "Slice>>>2>>>6",

  "Flip>>>Upper>>>3>>>14",

  "Flip>>>Lower>>>5>>>7",

  "Contains>>>def",

  "Contains>>>deF",

  "Generate",
]);


//abgHIjkLMNOPQRstuvwxyz