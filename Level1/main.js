//Is One Array a Subset of Another?

// function isSubset(a1, a2) {
//   for (i = 0; i <= a1.length; i++) {
//     for (j = 0; j < a2.length; j++) {
//       if (a1[i] == a2[j]) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }
// }
// const a1 = [1, 2, 3];
// const a2 = [1, 2, 3, 4, 5];
// console.log(isSubset(a1, a2));

//Reverse the Case

// function reverseCase(str) {
//   let newString = "";
//   for (let i = 0; i < str.length; i++) {
//     let letter = str.charAt(i);
//     if (letter == letter.toUpperCase()) {
//       letter = letter.toLowerCase();
//     } else {
//       letter = letter.toUpperCase();
//     }
//     newString += letter;
//   }
//   return newString;
// }
// //str = "HapPy";
// console.log(reverseCase("HaPpy"));

//Matchstick House
// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step.

// function matchstickHouse(step) {
//   let steps = step * 6 - (step - 1);
//   return steps;
// }
// console.log(matchstickHouse(1));

//What's Hiding Amongst the Crowd?
//A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

// function detectWord(str) {
//   let newString = "";

//   for (let i = 0; i < str.length; i++) {
//     let letter = str.charAt(i);
//     if (letter == letter.toLowerCase()) {
//       newString += letter;
//     }
//   }

//   return newString;
// }
// console.log(detectWord("ABuIYEDGHmERTFCUILeFGHGDr"));

// The number of hashes and pluses in a string
// function hashPlusCount(str) {
//   let hashCount = 0;
//   let plusCount = 0;

//   for (let i = 0; i < str.length; i++) {
//     let letter = str.charAt(i);
//     if (letter == "#") {
//       hashCount += 1;
//     }
//     if (letter == "+") {
//       plusCount += 1;
//     }
//   }
//   return [hashCount, plusCount];
// }
// console.log(hashPlusCount("HEllo####++++#ergeut78"));

//Is the Number Symmetrical?

// function isSymmetrical(num) {
//   const reversedNumber = num.toString().split("").reverse().join("");
//   if (reversedNumber == num) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isSymmetrical(1234));
