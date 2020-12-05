const fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const input = require("./input.txt");

function findSeatNumber(puzzleInput){
    const input = puzzleInput.split(/\r?\n/);
    let seatIdArray = [];

    input.forEach(pass => {
        let rowNum = findRow(pass.slice(0,7), 0, 127);
        let colNum = findRow(pass.slice(-3), 0, 7);
        seatIdArray.push((rowNum*8)+colNum);
    });
    return Math.max(...seatIdArray);
}

function findRow(row, lowLimit, highLimit){
    let finalRowNum = 0;

    if (row.length > 0) {
        for (let i=0; i <= row.length - 1; i++){
            if ( i !== row.length -1){
                if (row[i] == "F" || row[i] == "L"){
                    highLimit = -1+ highLimit - (Math.floor((highLimit-lowLimit)/2))
                } else {
                    lowLimit = lowLimit + (Math.floor((highLimit-lowLimit)/2)) + 1;
                }
            } else {
            
                if (row[i] == "F" || row[i] == "L" ){
                    finalRowNum = lowLimit
                } else {
                    finalRowNum = highLimit;
                }
        
            }
        }
    } else {
        finalRowNum = 0;
    }
    return finalRowNum;
}

// console.log(findSeatNumber(input));

function findMySeatNum(puzzleInput){
    // find total seats, 1024
    const totalSeats = 128*8;
    const input = puzzleInput.split(/\r?\n/);
    let seatIdArray = [];

    input.forEach(pass => {
        let rowNum = findRow(pass.slice(0,7), 0, 127);
        let colNum = findRow(pass.slice(-3), 0, 7);
        seatIdArray.push((rowNum*8)+colNum);
    });
    const filteredArray = seatIdArray.filter(seat => seat !== 1);
    const allSeatNums = generateAllSeatNumbers();
    const difference = allSeatNums.filter(seat => !filteredArray.includes(seat));
    return difference;
}

console.log(findMySeatNum(input));

// console.log("this is the rowNum for this one #BBFBFBB", findRow("BBFBFBB"));

// console.log("this is the rowNum for this one #FBFBBFF", findRow("FBFBBFF", 0, 127));

// console.log("this is the rowNum for this one #RLR", findRow("RLR", 0, 7));

function generateAllSeatNumbers(){
    let allSeatNumArray =[];
    for(let i=1; i <= 126; i++){
        for( let j=0; j <= 7; j++){
            allSeatNumArray.push((i*8)+j);
        }
    }
    return allSeatNumArray;
}

