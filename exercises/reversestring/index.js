// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Questions to ask:
    // Are there any conditions for the string that will be passed? No
    // Will the string contain regular or special characters? No

//Restate the question out loud:
    // Given a string input of only ASCII characters, I want to create a function that returns a new string with its characters in the reverse order of the input string. I want to return a new string because I want to avoid mutating the original string input.
  
// Break down the steps:
    // 1. convert the string into an array with each character in the string as an element
        // step 1   let ans = str.split(' ') 
    // 2. reverse the order of the elements in the array
        // step 2   ans.reverse()
    // 3. convert the reversed array back into a string
        // step 3   ans = ans.join(' ') 
    // 4. return the reversed string
        // step 4   return ans
    // 5. convert to DRY code
        // return str.split('').reverse().join('');
    // 6. convert to DRY code using the spread syntax

// function reverse(str) {
//   return [...str].reverse().join('');
// }
// module.exports = reverse;

// VERSION 2 with CONDITIONS:
    // Are there any conditions for the string that will be passed? Yes - can not use .reverse()
    // Will the string contain regular or special characters? No

// Break down the steps:
    // 1. create a variable to serve as the return value and set it as an empty string, call it reversed.
      // step 1   let reversed = ''
    // 2. loop through the characters in the input string
      // step 2   for(let char of string) { }
    //3.  Within each loop iteration, add the character to the beginning of the reversed string
      // step 3   reversed = char + reversed;
    // 4. return reversed
      // step 4   return reversed;

// function reverse(str) {
//   let reversed = '' //step 1
//   for(let char of str) { //step 2
//     reversed = char + reversed; //step 3
//   }
//   return reversed; //step 4
// }
// module.exports = reverse;

// VERSION 3 with CONDITIONS:
// Break down the steps:
    // 1. convert the string into an array with each character in the string as an element
        // step 1   str.split(' ') 
    // 2. use .reduce() to condense the items in the array to one single string value
        // reduce take two arguments: ((1, 2) => {}, and an empty string '')
        // step 2   .reduce((reversed, char) => {     
        //          }, '');
    // 3. return character and the reversed string
        // step 3   return char + reversed;
    // 4. return the result - add return to step 1
        // step 4   return str.spilt('')

function reverse(str) {

}
module.exports = reverse;
