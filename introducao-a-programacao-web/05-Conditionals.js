//Create a program to average your students' grades and show the average on the console

const student01 = "Louan";
const gradeStudent01 = 9.8;

const student02 = "Brenna";
const gradeStudent02 = 10;

const student03 = "Micael";
const gradeStudent03 = 2;

const average = (gradeStudent01 + gradeStudent02 + gradeStudent03) / 3;

//If the average is greater than 7, congratulate the class
if (average >= 7) {
  //template string, can add a var inside the string
  console.log(`The average grade was ${average}. Congratulations!`);
} else {
  console.log(`Average grades are less than 7. It was ${average}`);
}
