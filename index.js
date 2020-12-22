/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/
let votingAge = 18; // declaring variables.
let age = 12;
if(age >= votingAge){ // if conditional statement to determine if statement is correct.
  console.log(true); 
}
else{ // we use else for anything that does not pass the if statement.
  console.log(false)
}


/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/
let varOne = 'Hello'; // declaring variables.
let varTwo = 'World';
if (varTwo === 'World'){ // if conditional statement. three === means equals.
  varOne = 'What\'s up' // have to put backslash \ to indicate that we aren't closing string.
}
console.log(varOne + varTwo);



/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/
function convertString(str){
  return Number(str);
}



/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the numbers in the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(a, b){ // passing parameters a and b.
    return a * b; // returning a times b.
  }
console.log(multiply(2,4)); //console logging the function multiply with the values 2 and 4 for the parameters.


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

function dogYears(age){ // invoking function and passing parameter age.
    return age * 7; // returning the human age times 7 to provide the dog years.
}
console.log(dogYears(23)) // console logging the function dogYears with 23 as the (human) age parameter.


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  Adult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(weight, age){ // invoking hungryDog function and passing it weight and age as parameters.
    if (age >= 1){ // if conditional statement to determine that the dog age is an ADULT. (1 year AND older). Once we clarify this, we can proceed to addressing weight.
      if (weight <=5){ // if conditional addressing weight 5lbs
        return weight *  .05; // returning weight times 5% (.05)
      }
      else if (weight >= 6 && weight <= 10){ // else if statement specifies a new condition if the first is false. && is the syntax for "and". Here we are just addressing the rest of the feeding requirements.
        return weight * .04;
      }
      else if (weight >= 11 && weight <= 15){
        return weight * .03;
      }
      else if (weight > 15){
        return weight * .02;
      }
    }
    else if (age < 1){ // else if because the first age condition is false. Here we determine that the dog age is a PUPPY (LESS than one year)
      if (age >= .16 && age <= .33){ // same process as the adult feeding requirements. We have to represent age in months as a decimal for puppies. example: 2 months would mean 2/12 which equals .16 
        return weight * .1;
      }
      else if (age >= .33 && age <= .583){
        return weight * .05;
      }
      else if ( age >= .583 && age <= 1){
        return weight * .04;
      }
    }
  }
console.log(hungryDog(15, 1)); // console logging function hungryDog and giving it 15 for the parameter "weight", and 1 for the parameter "age"


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/
let pcChoice = Math.round(Math.random() * 3); // let pcChoice: declaring variable that is limited to scope of block statement. Math.round: rounds number to nearest integer. Math.random: returns a random number between 0 and 1. we are multiplying by 3 because there are 3 choices.
function computerOptions(){ // invoking function computerOptions
  if (pcChoice === 0){ // if conditional statement to determine whether to return rock paper or scissors. 
    return 'rock';
  }
  else if (pcChoice === 1){ // else if to specify new condition to test, if first condition is false.
    return 'paper';
  }
  else { // else if everything else is false.
    return 'scissors';
  } // we made this variable (pcChoice) to randomize our output, and function (computerOptions) to give us a return to that output. (rock, paper, scissors) 
}
function game(user, computer){ // invoking function "game" and giving it parameters "user" for users choice and "computer" for computers choice.
  if ((user === 'paper' && computer === 'rock') || (user === 'rock' && computer === 'scissors') || (user === 'scissors' && computer === 'paper')){ //if conditional statement to determine that the user wins. || means "or" in javascript. we listed all possible winning conditions to return 'you win!'
    return 'you win!';
  }
  else if (user === computer){ // else if to specify new condition to test if the first conditions were false. we listed user equals computer choice to return 'it's a tie'. the \ is to add a " ' " without breaking the string.
    return 'it\'s a tie';
  }
  else { // else to specify if everything else is false. the only possible outcome if the rest are false is to return 'you lose!'
    return 'you lose!';
  }
}
console.log(game('scissors', computerOptions(pcChoice))); // console logging the function "game" and passing it the parameters 'scissors' for user choice and the variable "pcChoice" within the function "computerOptions" for computer choice. we do this to randomize the computer choice.
  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

function miles(km){ // invoking function "miles" and giving it a parameter of "km" for kilometers
    return km * 0.621371; // we are returning km times 0.621371 because 1 kilometer = 0.621371 miles. this is the conversion.
  }
console.log(miles(40)); //console logging the function "miles" and giving it 40 as the parameter for the number of kilometers.


//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

function feet(cm){ // invoking the function "feet" and giving it "cm" as the parameter for centimeters. 
    return cm / 30.48; // returning cm divided by 30.48 because 1 foot = 30.48 cm. this is our conversion.
  }
  console.log(feet(32)); //console logging function "feet" and giving 32 for our parameter cm.
 


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number received 
  2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/

function annoyingSong(num){ // invoking the function annoyingSong and giving it the parameter num for number.
  for (let i = num; i > 0; i--){ // for loop with (statement 1; statement 2; statement 3) statement 1 is executed 1 time before the execution of the code block. statement 2 defines the condition for the executing code block. statement 3 is executed every time after the code block has been executed. we are declaring a variable "i" with let. we are letting i = our parameter num. i is greater than 0. i-- "--" means decrement, we are subtracting 1 each time.
    return `${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i - 1} bottles of soda on the wall`; // we are returning a string with template literals ${i} to input the number we log as our parameter, ${i-1} will be our number minus 1.
    }
  }
console.log(annoyingSong(10)); // console logging the function annoyingSong with 10 as the number for our parameter num. 

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 should return 'you got an A' 
   80-89 should return 'you got a B'
   70-79 should return 'you got a C'
   60-69 should return 'you got a D'
   below should return 'you got an F'
*/
  
function grade(score){ // invoking function "grade" and giving it "score" as our parameter.
  if (score >=90){ // if conditional if "score" our parameter is greater than or equal to 90 then return the string 'you got an A'
    return `you got an A`;
  }
  else if (score >=80 && score <= 89){ // else if for a new conditional if our first is false, score is greater than or equal to 90 "&&" and score is less than or equal to 89 then return string 'you got a B'
    return `you got a B`;
  }
  else if (score >=70 && score <= 79){ // same process
    return `you got a C`;
  }
  else if (score >=60 && score <= 69){ // same process
    return `you got a D`;
  }
  else return `you got an F`; // else since the string 'you got an F' would only be returned if all else is false.
}
console.log(grade(63)); // console logging our function "grade" and giving it the score "63" which would give us the string 'you got a D'
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(/*add your code here*/) {
    /*add your code here*/
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    //console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
