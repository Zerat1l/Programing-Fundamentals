function company(input) {
  let companyList = {};

  let cmd = input.map((el) => el.split(" -> "));

  for (const el of cmd) {
    let name = el[0];
    let id = el[1];
    if (!companyList.hasOwnProperty(name)) {
      companyList[name] = [];
    }
    companyList[name].push(id);
  }
  let sorted = Object.entries(companyList);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  sorted.forEach((el) => {
    let companyName = el[0];
    let allIds = el[1];
    let unique = new Set(allIds);
    console.log(companyName);
    for (const id of unique) {
      console.log(`-- ${id}`);
    }
  });
}
company([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
