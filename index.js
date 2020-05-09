// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter 1 starts with a function that has a variable and passes the variable through a fuction causing a closure where it will add 1 each time
 *  Counter 2 because it does not have a closure will continue to log the number 1 the value remains the same
 
 * 2. Which of the two uses a closure? How can you tell?
 
 *  Counter 1 uses a closure because it returns a function creating a closure between the context of the variable and the new updated value of the variable 

 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 
 * Counter 1 would be preferable because the closure is what allows the counter to work because counter 1 is wrapped in the closure the numbers will increment as we want them to. 
* Counter 2 will not work be better because it will not increment the numbers. 

*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning (random) {
  return Math.round(Math.random() * Math.floor(random));
 
}
console.log(inning(2));



/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numInnings){
   let finalScores = {
     'Home Team Name': 'The Bears',
     'Home Final Score': 5,
     'Away Team Name': 'The Chickens', 
     'Away Final Score': 9,
     'Game Results': 'The Chickens Win The Game',   
  }
   return finalScores

}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(inning, numInnings, getInningScore) {
  /* CODE HERE */
}


