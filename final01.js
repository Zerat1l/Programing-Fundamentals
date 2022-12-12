function wordDevelop(input) {
    let str = "";
    let line = input.shift().split(" ");
    let command = line[0];
  
    while (command !== "End") {
        if(str.length >=0) {

      switch (command) {
        case "Add":
          let toAdd = line[1];
          let result = str.concat(toAdd);
          str = result;
          break;
        case "Upgrade":
          let char = line[1];
          let nextCharInAsci = char.charCodeAt() + 1;
          let resChar = String.fromCharCode(nextCharInAsci);
          
          let newStr = "";
          for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
              newStr += resChar;
            } else {
              newStr += str[i];
            }
          }
          str = newStr;
  
          break;
        case "Print":
          console.log(str);
          break;
        case "Index":
          let lookingForChar = line[1];
          let strArr = str.split("");
          let indexes = [];
  
          if (strArr.includes(lookingForChar)) {
            for (var i = 0; i < strArr.length; i++) {
              if (strArr[i] === lookingForChar) indexes.push(i);
            }
          } else {
            console.log("None");
          }
          console.log(indexes.join(" "));
          break;
        case "Remove":
  
          let substring = line[1];
          str = str.replace(substring, '');
          break;
      }
    }
  
      line = input.shift().split(" ");
      command = line[0];
    }
  }
  
  wordDevelop([
    "Add University",
    "Print",
    "Upgrade n",
    "Print",
    "Index i",
    "Remove sity",
    "Print",
    "End",
  ]);
  