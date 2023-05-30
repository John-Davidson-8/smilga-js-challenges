/*

1. Create "score1", "score2", "score3" variables and assign values (0-100)
2. Calculate total score and average score, and assign them to the variables.
3. Log total score and average score.

4. Create "plates" variable and assign 20.
5. Create "people" variable and assign 7.
6. Calculate remaining plates and assign to the variable.
7. Add one to remaining plates.
8. Create message variable and display 'There are (your value goes here) plates available' - string concatenation.
9. Log message.

*/

const score1 = 25;
const score2 = 10;
const score3 = 5;

const totalScore = score1 + score2 + score3;

const averageScore = totalScore / 3;

console.log(totalScore);

console.log(averageScore);

console.log(totalScore, averageScore);

/* second numbers challenge */

const plates = 20;
const people = 7;
let remainingPlates = plates % people;
remainingPlates++;
console.log(remainingPlates);

const message = "There are " + remainingPlates + " plates available";
console.log(message);
