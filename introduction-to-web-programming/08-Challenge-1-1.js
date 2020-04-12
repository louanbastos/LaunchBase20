/*==============================================================================
Challenges to strengthen some concepts, among them:
Variables;
Conditional;
Operators.
==============================================================================*/
console.clear();
/*==============================================================================
===BMI Calculation===

Create a program to calculate a person's BMI and obesity level.

Start by creating constants to store a person's name, weight, height and gender, for example:
const name = "Carlos";
const weight = 84;
const height = 1.88;

From these data, store in a constant called imc the body mass index calculation defined by the formula below:
weight / (height * height);

Based on the value obtained through this calculation, display the following messages:
IF BMI greater than or equal to 30: Carlos you are overweight;
IF BMI is less than 29.9: Carlos you are not overweight;
==============================================================================*/
const name = "Louan";
const weight = 98;
const height = 1.82;
const bmi = weight / (height * height);

if (bmi >= 30) {
  console.log(`${name} your BMI is ${bmi}, you are overweight`);
} else {
  console.log(`${name} your BMI is ${bmi}, you are not overweight`);
}

/*==============================================================================
===Retirement calculation===

Create a program to calculate a person's retirement.

Note: This calculation is fictitious, within retirement there are many other factors to be taken into account :)

Start by creating constants to store name, sex, age and contribution (in years), for example:
const name = "Silvana";
const sex = "F";
const age = 48;
const contribution = 23;

Based on the values above, use the following formulas to calculate whether the person can retire or not and, in the end, print a message on the screen.

The minimum contribution time for men is 35 years and for women, 30 years;

Using rule 85-95, the sum of the age and the contribution time of the man must be at least 95 years old, while the woman must be at least 85 years old in the sum;

Based on the above rules print the messages on the screen:
IF the person is retired: Silvana, you can retire !;
IF the person is NOT retired: Silvana, you still cannot retire!;

Tip: You can join two conditions, see the example below
if (condition1) {
   if (condition2) {
     // Condition 1 and 2 passed
   } else {
     // Condition 1 passed, but condition 2 did not
   }
} else {
   // Condition 1 has not passed
}
==============================================================================*/
console.log("\n");
const employee = "Brenna";
const sex = "F";
const age = 22;
const contribution = 0;
const sum = age + contribution;
if (sex === "F" && sum >= 85) {
  console.log(`${employee}, you can retire!`);
} else if (sex === "M" && sum >= 95) {
  console.log(`${employee}, you can retire!`);
} else {
  console.log(`${employee}, you still cannot retire!`);
}
