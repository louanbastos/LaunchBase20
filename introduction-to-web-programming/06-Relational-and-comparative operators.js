/*=========================================
    COMPARISON OPERATORS
      >     Greater than
      <     Less than
      >=    Greater than or Equal to
      <=    Less than or Equal to
      ==    Equal than
      ===   Equal and of the same type.
      !=    Not equal to
      !==   Not equal and of the same type.
==========================================*/
console.clear();
console.log(5 > 4); //true
console.log(5 < 4); //false
console.log(5 >= 4); //true
console.log(5 <= 4); //false
console.log(4 <= 4); //true
console.log("\n");
console.log(4 == "4"); //true
console.log(4 === "4"); //false
console.log(4 != "5"); //true
console.log(4 !== "5"); //true
console.log("\n");

//Challenge 1
//Check if the person is over 18 years old
const age = 17;
if (age >= 18) {
  console.log(`The age is ${age}, let in :)`);
} else {
  console.log(`The age is ${age}, block the entry >:(`);
}
//If the person is 17 years old, advise to return when is 18 years old
if (age === 17) {
  console.log(`Return when you are 18`);
}
