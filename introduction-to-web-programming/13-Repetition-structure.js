//Create a program to average your students' grades and show the average on the console
console.clear();

const studentsA = [
  {
    name: "Louan",
    grade: 9.8,
  },
  {
    name: "Brenna",
    grade: 10,
  },
  {
    name: "Micael",
    grade: 2,
  },
  {
    name: "Brenda",
    grade: 8.5,
  },
];

const studentsB = [
  {
    name: "Meryane",
    grade: 10,
  },
  {
    name: "Faria",
    grade: 10,
  },
  {
    name: "LoadSec",
    grade: 10,
  },
  {
    name: "Bruno",
    grade: 4,
  },
];

function AverageCalculation(students) {
  let sum = 0;
  //repetition structure
  //It will count how many students are in the rooms, and will calculate the average of all students
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade;
  }
  const average = sum / students.length;
  return average;
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
