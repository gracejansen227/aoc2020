const fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const input = require("./input.txt");
const testInput = require("./test.txt");

function validationRules(key, value) {
    switch(key){
    case ("byr"):
        return value >= 1920 && value <= 2002;
    
    case ("iyr"):
        return value >= 2010 && value <=2020;
    case ("eyr"):
        return value >= 2020 && value <= 2030;
    
    case ("iyr"):
        return value >= 2010 && value <=2020;
    case("hgt"): {
        let result;
        if(value.includes("in")){
            result = value.replace("in", "");
            return result >= 59 && result <= 76
        }
        if( value.includes("cm")){
            result = value.replace("cm","");
            return result >= 150 && result <= 193
        }
    }

    case("hcl"):
        return /^#[0-9a-f]{6}$/.test(value);
    case("ecl"):
        return validEyeColors.includes(value);
    case("pid"):
        return value.length === 9;
    case("cid"):
        return true;
    default:
        return false;
    }
}

const validEyeColors = [
    "amb", "blu", "brn", "gry", "grn", "hzl", "oth"
];

function findValidPassports(rawInput){

    let validPassports = [];
    const validKeys = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl","pid"];

    const puzzleInput = formatInputToObject(rawInput);

    puzzleInput.forEach(passport => {
   
        let reqList =[];
        passport.forEach(req => {
            reqList.push(req[0])
        });

       if ( validKeys.every(key => reqList.includes(key)) ) {
            validPassports.push(passport)
         }
    })
    return validPassports;

}

function formatInputToObject(rawInput){
    return rawInput.split("\n\n").map(parse);

    function parse(input){
        return input.split(/\s/).map( p => p.split(":"));
    }

}

function part2(validShit){
    const totalPassports = [];

    validShit.forEach(passport => {
        const shits = [];
        passport.forEach(req => {
            const result = validationRules(req[0], req[1]);
            shits.push(result);
        });
        
        if (shits.every(shit => shit == true)){
            totalPassports.push(passport);
        }
    })
    return totalPassports.length;
}

const poop2 = findValidPassports(input);
console.log(part2(poop2));

