function modernTimes(input) {
  let words = input.split(" ");

  words.forEach((word) => {
    const isValid = word.startsWith("#") && word.length > 1;
    if (isValid) {
      let isLetter = true;
      let temp = "";
      for (let i = 1; i < word.length; i++) {
        let char = word[i].toLowerCase();
        if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
          isLetter = false;
          break;
        } else {
          temp += word[i];
        }
      }
      if (isLetter) {
        console.log(temp);
      }
    }
  });
}

modernTimes("Nowadays everyone uses # to tag a #special word in #socialMedia");
