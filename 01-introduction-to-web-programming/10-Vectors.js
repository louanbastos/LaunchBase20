//Create a program to average your students' grades and show the average on the console
console.clear();
//STARTING A OBJECT VECTOR
const students = [
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
//END OF VECTOR

const average = (students[0].grade + students[1].grade + students[2].grade) / 3;

if (average >= 7) {
  console.log(`The average grade was ${average}. Congratulations!`);
} else {
  console.log(`Average grades are less than 7. It was ${average}`);
}
