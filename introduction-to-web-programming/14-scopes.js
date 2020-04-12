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
  //start AverageCalculation scope
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    //the variable "sum" cannot be placed here due to the scope of "for", because if placed inside "for" you can only use it inside it.
    sum = sum + students[i].grade;
  }
  const average = sum / students.length;
  return average;
  //end AverageCalculation scope
}

function SendMessage(average, classes) {
  //start scope
  if (average >= 7) {
    console.log(
      `The ${classes} average grade was ${average}. Congratulations!`
    );
  } else {
    console.log(
      `The ${classes} average grades was less than 7. It was ${average}`
    );
  }
  //end scope
}

const Average1 = AverageCalculation(studentsA);
const Average2 = AverageCalculation(studentsB);
SendMessage(Average1, "Class A");
SendMessage(Average2, "Class B");
