function wordsTracker(input) {
  let words = input.shift().split(" ");
  let objWords = {};

  for (const word of words) {
    objWords[word] = 0;
  }

  for (const word of input) {
    if (objWords.hasOwnProperty(word)) {
      objWords[word]++;
    }
  }
  let sorted = Object.entries(objWords);
  sorted.sort((a, b) => b[1] - a[1]);

  for (const entry of sorted) {
    console.log(`${entry[0]} - ${entry[1]}`);
  }
}

wordsTracker([
  "this sentence",

  "In",
  "this",
  "sentence",
  "you",
  "have",

  "to",
  "count",
  "the",
  "occurrences",
  "of",

  "the",
  "words",
  "this",
  "and",
  "sentence",

  "because",
  "this",
  "is",
  "your",
  "task",
]);
