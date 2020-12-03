const fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const lines = require("./input.txt");
const testLines = require("./test.txt");

let inputArray = lines.split(/\r?\n/);
let testInputArray = testLines.split(/\r?\n/);

const expandedMap = inputArray.map(row => {
    return row.repeat(300)
});

const rate = 3;

function findTreesHit(array,ratex, ratey) {
    let trackedSpots = [];
    const y_rate = ratey != null ? ratey : 1;
    for( let i=y_rate; i <= array.length -1; i=i+y_rate){
        if (i==y_rate) {
            x_rate = ratex
            if (array[i].charAt(ratex) == '#'){
                trackedSpots.push(array[i].charAt(ratex))
            }
        } else { 
            x_rate = x_rate + ratex
            if (array[i].charAt(x_rate) != null && array[i].charAt(x_rate) == '#'){
                trackedSpots.push(array[i].charAt(x_rate));
            }
        }
    }
    return trackedSpots.length;
}

const tree1 = findTreesHit(expandedMap,1);
const tree2 = findTreesHit(expandedMap,3);
const tree3 = findTreesHit(expandedMap,5);
const tree4 = findTreesHit(expandedMap,7);
const tree5 = findTreesHit(expandedMap,1,2);

console.log(findTreesHit(expandedMap,1));
console.log(findTreesHit(expandedMap,3));
console.log(findTreesHit(expandedMap,3));
console.log(findTreesHit(expandedMap,3));
console.log(findTreesHit(expandedMap,1, 2));
console.log(findTreesHitY(expandedMap,1, 2));

console.log("BIG OLD ANSWERS YOO-------",tree1*tree2*tree3*tree4*tree5)


