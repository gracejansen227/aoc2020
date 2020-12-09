const fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const rawInput = require("./input.txt");
const rawTest = require("./test.txt");

function part1(input, preambleLength){
  let puzzleInput = input.split("\n").map(line => parseInt(line, 10));
  // let preamble = puzzleInput.slice(0, preambleLength);
  let result = 0;

// loop: 
//   for (let i= preambleLength; i< puzzleInput.length; i++){
//     // let sum = puzzleInput[i];
//     for(let j=i-preambleLength; j < i; j++){
//       for (let x= i - preambleLength; x < i; x++){
//         // let numberSum = puzzleInput[j] + puzzleInput[x];
//          if (puzzleInput[j] + puzzleInput[x] == puzzleInput[i]){
//             continue loop;
//         }
//       }
//     }
//     result = puzzleInput[i];
//     break;
//   }


function findNum(input){
    for (let i= preambleLength; i< input.length; i++){
    // let sum = input[i];
    for(let j=i-preambleLength; j < i; j++){
      for (let x= i - preambleLength; x < i; x++){
        // let numberSum = input[j] + input[x];
         if (input[j] + input[x] == input[i]){
            findNum(input.shift());
        }
      }
    }
    result = input[i];
    break;
  }
   return result;
}
  return findNum(puzzleInput);
}

console.log("----ANSWER--", part1(rawTest, 25));