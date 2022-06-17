// Addition of two numbers                                                          //1

// const sumOfNum = function (a, b) {
//   return a + b;
// };

// console.log(sumOfNum(-2, -3));

//Convert Minutes into seconds                                                      //2

// const convert = function (mins) {
//   const seconds = mins * 60;
//   return `${mins} minutes have ${seconds} seconds`;
// };
// console.log(convert("6"));

//Return the Next Number from the Integer Passed                                    //3
// const nextNum = function (a) {
//   if (typeof a !== "number" && Number.isInteger(a) !== "true") {
//     {
//       return "You didn't enter the inetger number";
//     }
//   }
//   return `The next number of ${a} is ${a + 1}`;
// };
// console.log(nextNum(4));

//Area of Triangle                                                                  //4
// const triArea = function (base, height) {
//   if (typeof base !== "number" && typeof height !== "number") {
//     return "You didn't enter number";
//   }
//   return (base * height) / 2;
// };
// console.log(triArea(3, 2));
//Sum of Polygon angles                                                            //5
//Given an n-sided regular polygon n, return the total sum of internal angles (in degrees)
// const sumPolygon = function (nSides) {
//   if (nSides <= 2) {
//     return "n must be greater than 2";
//   }
//   return `${
//     (nSides - 2) * 180
//   } is the sum of all the measures of the angles of an ${nSides} sided polygon.`;
// };
// console.log(sumPolygon(4));

//Profitable Gamble                                                                 //6
//  net profit/net_outcome = probability_of_winning * prize - cost_of_playing
// const profitableGamble = function (prob, prize, pay) {
//   return prob * prize > pay ? true : false;
// };
// console.log(profitableGamble(0.9, 1, 2));

//Bool to String conversion                                                        //7
// const BoolToString = function (f) {
//   console.log(f);
//   console.log(typeof f);
//   if (typeof f == "boolean" && f == true) {
//     return "true";
//   } else if (typeof f == "boolean" && f == false) {
//     return "false";
//   } else {
//     return "Not a boolean type";
//   }
// };
// let bool = false;
// console.log(BoolToString(bool));

//Compare strings by count of characters                                           //8

// const comp = function (string1, string2) {
//   if (string1.length == string2.length) {
//     return true;
//   }
//   return false;
// };
// console.log(comp("ABC", "ABCD"));

//Returns a string as an integer                                                   //9
// const strIntoInt = function (str) {
//   return parseInt(str);
// };
// console.log(strIntoInt("34"));

//Reverse an Array                                                                //10
// let Array = [1, 2, 3, 4, 5];
// let reverseArray = [];
// const reverseTheArray = function (Array) {
//   for (let i = Array.length; i >= 0; i--) {
//     reverseArray.push(Array[i]);
//   }
//   return reverseArray;
// };
// console.log(reverseTheArray(Array));

//Word without first character                                                    //11

// const withoutFirstCh = function (word) {
//   return word.slice(1);
// };
// console.log(withoutFirstCh("Apple"));

//Char to ASCII                                                                   //12
const chToASCII = function (chr) {
  return chr.charCodeAt(0);
};
chr = "A";
console.log(chToASCII(chr));

//Amazing Edabit                                                                  //13
// const amazingEdabit = function (string) {
//   if (string.includes("edabit")) {
//     return string;
//   } else {
//     return string.replace("amazing", "not amazing");
//   }
// };
// string = "Js is amazing";
// console.log(amazingEdabit(string));
