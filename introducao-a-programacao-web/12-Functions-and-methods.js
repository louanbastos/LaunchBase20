//Create a program to average your students' grades and show the average on the console
console.clear();

const studentsA = [
  {
    name: "Louan",
    grade: 9.8
  },
  {
    name: "Brenna",
    grade: 10
  },
  {
    name: "Micael",
    grade: 2
  }
];

const studentsB = [
  {
    name: "Meryane",
    grade: 10
  },
  {
    name: "Faria",
    grade: 10
  },
  {
    name: "LoadSec",
    grade: 10
  }
];

function AverageCalculation(students) {
  return (students[0].grade + students[1].grade + students[2].grade) / 3;
}

function SendMessage(average, classes) {
  if (average >= 7) {
    console.log(
      `The ${classes} average grade was ${average}. Congratulations!`
    );
  } else {
    console.log(
      `The ${classes} average grades was less than 7. It was ${average}`
    );
  }
}

const Average1 = AverageCalculation(studentsA);
const Average2 = AverageCalculation(studentsB);
SendMessage(Average1, "Class A");
SendMessage(Average2, "Class B");
