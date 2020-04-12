//Create a program to average your students' grades and show the average on the console
console.clear();
//this is an object
const student01 = {
  name: "Louan",
  grade: 9.8
};
const student02 = {
  name: "Brenna",
  grade: 10
};
const student03 = {
  name: "Micael",
  grade: 2
};
//end of objects

//To access students' grades, the object must be placed, in this case it is "students0x" and then a "." to be able to pull the information, in this case we will pull the grades. Example: students01.grades to pull the notes, students01.name to pull the name, so on.
const average = (student01.grade + student02.grade + student03.grade) / 3;

if (average >= 7) {
  console.log(`The average grade was ${average}. Congratulations!`);
} else {
  console.log(`Average grades are less than 7. It was ${average}`);
}
