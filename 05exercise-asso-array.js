function minerTask(input) {
  let resources = {};

  for (let index = 0; index < input.length; index += 2) {
    let type = input[index];
    let quantity = Number(input[index + 1]);

    if (!resources.hasOwnProperty(type)) {
      resources[type] = 0;
    }
    resources[type] += quantity;
  }
  for (const key in resources) {
    console.log(`${key} -> ${resources[key]}`);
  }
}

minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
