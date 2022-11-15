function schoolGrades(input) {
  let students = {};

  for (const line of input) {
    let args = line.split(" ");
    let name = args.shift();
    let grades = args.map(Number);

    if (students[name]) {
      students[name] = students[name].concat(grades);
    } else {
      students[name] = grades;
    }
  }

  let studentsEntrys = Object.entries(students);
  let sortedStudents = studentsEntrys.sort((a,b) => a[0].localeCompare(b[0]))

  for (const [name, grades] of sortedStudents) {
    let grades = students[name];
    let sum = 0;

    for (const grade of grades) {
      sum += grade;
    }
    let averageGrade = sum / grades.length;
    console.log(`${name}: ${averageGrade.toFixed(2)}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
