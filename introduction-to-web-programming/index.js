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

function averageCalculation(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade;
  }
  const average = sum / students.length;
  return average;
}

function sendMessage(average, classes) {
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

function markAsFailed(student) {
  student.failed = false;
  if (student.grade < 7) {
    student.failed = true;
  }
}

function sendMessageFailed(student) {
  if (student.failed) {
    console.log(`The Student ${student.name} was failed`);
  }
}

function studentFailed(students) {
  for (let student of students) {
    markAsFailed(student);
    sendMessageFailed(student);
  }
  //console.table(students);
}

const Average1 = averageCalculation(studentsA);
const Average2 = averageCalculation(studentsB);

sendMessage(Average1, "Class A");
sendMessage(Average2, "Class B");

studentFailed(studentsA);
studentFailed(studentsB);
