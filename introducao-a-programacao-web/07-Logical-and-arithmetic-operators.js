/*=========================================
    LOGICAL OPERATORS
      &&     AND  
      ||     OR
      !      NOT
==========================================*/
console.clear();
console.log(5 == 5 && 6 == 6); //true
console.log(5 == 5 && 6 != 6); //false
console.log(5 == 5 || 6 == 6); //true
console.log(5 == 5 || 6 != 6); //true
console.log(!(5 > 6)); //true
console.log(!(5 < 6)); //false
console.log("\n");

//Check if the person is 17 years old or is not 18 years old, advise to return when is 18 years old
const age = 17;
if (!(age >= 18) || age === 17) {
  console.log(
    `The age is ${age}, block the entry >:( - return when you are 18`
  );
} else {
  console.log(`The age is ${age}, let in :)`);
}

/*=========================================
    ARITHMETIC OPERATORS
      +     PLUS  
      -     Subtraction
      *     Multiplication
      /     Division
      %     Remainder
==========================================*/
console.log("\n");

console.log(2 + 2); //4
console.log(2 - 2); //0
console.log(2 * 2); //4
console.log(2 / 2); //1
console.log(2 % 1.5); //0.5
