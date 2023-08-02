let studentFirstName = "Brandon";
let studentLastName = "N";
let grade1 = 53;
let grade2 = 96;
let grade3 = 65;
let grade4 = 74;
let passingGrade = 80;
//1.Create a variable called average that computes for the average from grade1 to grade4
const average = (grade1 + grade2 + grade3 + grade4) / 4;
console.log("Average of Grade is: ", average);

//2. Change the value of studentLastName to "Newman"
studentLastName = "Newman";

//3. Print in console the following statement: "<value of studentFirstName> <value of studentLastName> has an average grade of <value of average>"
console.log(
  "{studentFirstName} {studentLastName} has an average grade of {average}"
);
//ex. Jane Doe has an average grade of 100.

//4. Write code that would answer this question: Did the student pass?
let didPass = average >= passingGrade;
console.log(
  `${studentFirstName} ${studentLastName} ${
    didPass ? "passed" : "did not pass"
  }.`
);
