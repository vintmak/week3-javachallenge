Try It : String
// String to test

var myString = "Asia Developer Academy"
console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.charAt(6));
console.log(myString.indexOf('ev'))
console.log(myString.lastIndexOf('e'));
console.log(myString.substring(5,14))
console.log(myString.split(" "));



Exercise:
Create a function that will take a String as parameters and will capitalize the first
character of each letter.
Eg: capitalizeString(“my name is muzaffar”); => My Name is Muzaffar

// Add comment to the code
function upperCaseWord(sentence){
  // 1) Initialize the answer
  var answer = "";
  // 2) ...
 var splitSentence = sentence.split(" ");
  // 3) ...
  for (var i = 0; i < splitSentence.length; i++){
    // 4) ... a) b)
    answer += splitSentence[i].charAt(0).toUpperCase() +
      splitSentence[i].substring(1);
    // 5 ) ...
    if (i != splitSentence.length -1){
      answer+= " ";
    }
  }// 6) Return answer
  
  return answer;
}
  
console.log(upperCaseWord("my name is muzaffar"))



Try It : More Numbers
Create a number, eg: 10.23456789;
1) Get the number to 3 decimal places.
2) Return the number to 3 number of places.

// Number methods
  
var myNumber = 10.23456789

console.log(myNumber.toFixed(3));
console.log(myNumber.toPrecision(3));



