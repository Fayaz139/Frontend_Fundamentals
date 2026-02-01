// Find most repeated word across categories

function result(obj) {
    let output = "";
    let outputCount = -Infinity;
    let arr = [];
    let outputObj = {};

    for (let item in obj) {
        arr.push(...obj[item])
    }

    for (let data of arr) {
        outputObj[data] = (outputObj[data] || 0) + 1;
    }

    for (let i in outputObj) {
        if (outputObj[i] > outputCount) {
            outputCount = outputObj[i];
            output = i;
        }
    }

    return output;
}

let input = { fruits: ["apple","apple","banana"], drinks: ["apple","tea"] };

console.log(result(input));
